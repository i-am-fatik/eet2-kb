import { readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

export type Note = {
  id: string;
  title: string;
  type: string;
  domain: string[];
  status: string;
  confidence: string;
  sources: string[];
  spec_ref: string[];
  rests_on: string[];
  tags: string[];
  aka: string[];
  created: string;
  updated: string;
  path: string;
  body: string;
  links: string[];
  lower: { title: string; tags: string; aka: string; id: string; body: string };
};

export type Vault = {
  root: string;
  notes: Note[];
  byId: Map<string, Note>;
};

export type Filters = {
  query?: string;
  domain?: string;
  type?: string;
  tag?: string;
  status?: string;
  limit?: number;
};

export type Hit = { note: Note; norm: number; coverage: number };
export type SearchResult = { hits: Hit[]; confident: boolean };
export type GateReport = { count: number; domains: string[] };
export type ChainStep = { id: string; title: string; type: string; depth: number; missing: boolean };
export type Backlinks = { restsOn: Note[]; mentions: Note[] };
export type SourceView = { note: Note | undefined; dependents: Note[] };
export type BrokenRef = { from: string; kind: string; ref: string };
export type Uncited = { id: string; missing: string[] };

const KNOWLEDGE_DIRS = ["pravidla", "polozky", "kody", "pojmy", "maps", "sources"];
const RESOLVE_ONLY_DIRS = ["meta"];
const GATED_DOMAINS = new Set<string>();
const CITABLE_TYPES = new Set(["pravidlo", "polozka", "kod", "pojem"]);
const DIACRITICS = /\p{Diacritic}/gu;
const WIKILINK = /\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/g;
const CODE = /```[\s\S]*?```|`[^`\n]*`/g;
const FRONTMATTER = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/;

export function fold(value: string): string {
  return value.normalize("NFD").replace(DIACRITICS, "").toLowerCase();
}

function unquote(value: string): string {
  const wrapped = value.length >= 2 && (value[0] === '"' || value[0] === "'") && value.at(-1) === value[0];
  return wrapped ? value.slice(1, -1) : value;
}

function parseField(raw: string): string | string[] {
  if (raw.startsWith("[") && raw.endsWith("]")) {
    return raw.slice(1, -1).split(",").map((part) => unquote(part.trim())).filter(Boolean);
  }
  return unquote(raw);
}

function parseFrontmatter(text: string): { fields: Map<string, string | string[]>; body: string } {
  const match = text.match(FRONTMATTER);
  if (!match) return { fields: new Map(), body: text };
  const fields = new Map<string, string | string[]>();
  for (const fieldLine of match[1].split("\n")) {
    const colon = fieldLine.indexOf(":");
    if (colon < 1) continue;
    fields.set(fieldLine.slice(0, colon).trim(), parseField(fieldLine.slice(colon + 1).trim()));
  }
  return { fields, body: match[2] };
}

function asText(value: string | string[] | undefined): string {
  return typeof value === "string" ? value : "";
}

function asList(value: string | string[] | undefined): string[] {
  if (Array.isArray(value)) return value;
  return typeof value === "string" && value ? [value] : [];
}

function findWikilinks(body: string): string[] {
  const targets = new Set<string>();
  for (const match of body.replace(CODE, " ").matchAll(WIKILINK)) targets.add(match[1].trim());
  return [...targets];
}

function readNote(path: string, fallbackId: string): Note {
  const { fields, body } = parseFrontmatter(readFileSync(path, "utf8"));
  const id = asText(fields.get("id")) || fallbackId;
  const title = asText(fields.get("title")) || id;
  const tags = asList(fields.get("tags"));
  const aka = asList(fields.get("aka"));
  return {
    id,
    title,
    type: asText(fields.get("type")),
    domain: asList(fields.get("domain")),
    status: asText(fields.get("status")),
    confidence: asText(fields.get("confidence")),
    sources: asList(fields.get("sources")),
    spec_ref: asList(fields.get("spec_ref")),
    rests_on: asList(fields.get("rests_on")),
    tags,
    aka,
    created: asText(fields.get("created")),
    updated: asText(fields.get("updated")),
    path,
    body,
    links: findWikilinks(body),
    lower: { title: fold(title), tags: fold(tags.join(" ")), aka: fold(aka.join(" ")), id: fold(id), body: fold(body) },
  };
}

const parsedByPath = new Map<string, { mtimeMs: number; note: Note }>();

function readNoteIfChanged(path: string, fallbackId: string): Note {
  const mtimeMs = statSync(path).mtimeMs;
  const cached = parsedByPath.get(path);
  if (cached?.mtimeMs === mtimeMs) return cached.note;
  const note = readNote(path, fallbackId);
  parsedByPath.set(path, { mtimeMs, note });
  return note;
}

function scan(base: string, pattern: string): string[] {
  try {
    return [...new Bun.Glob(pattern).scanSync({ cwd: base, onlyFiles: true })];
  } catch {
    return [];
  }
}

export function loadVault(root: string): Vault {
  const seen = new Set<string>();
  const read = (base: string, relative: string): Note => {
    const path = resolve(base, relative);
    seen.add(path);
    return readNoteIfChanged(path, relative.replace(/\.md$/, ""));
  };
  const notes: Note[] = [];
  for (const dir of KNOWLEDGE_DIRS) {
    const base = resolve(root, dir);
    for (const relative of scan(base, "**/*.md")) notes.push(read(base, relative));
  }
  const byId = new Map(notes.map((note) => [note.id, note]));
  for (const dir of RESOLVE_ONLY_DIRS) {
    const base = resolve(root, dir);
    for (const relative of scan(base, "*.md")) {
      const reference = read(base, relative);
      if (!byId.has(reference.id)) byId.set(reference.id, reference);
    }
  }
  for (const path of parsedByPath.keys()) if (!seen.has(path)) parsedByPath.delete(path);
  return { root, notes, byId };
}

function passesFilters(note: Note, filters: Filters): boolean {
  if (filters.domain && !note.domain.includes(filters.domain)) return false;
  if (filters.type && note.type !== filters.type) return false;
  if (filters.tag && !note.tags.includes(filters.tag)) return false;
  if (filters.status && note.status !== filters.status) return false;
  return true;
}

function gateAllows(note: Note, filters: Filters): boolean {
  if (filters.domain && GATED_DOMAINS.has(filters.domain)) return true;
  return note.domain.length === 0 || note.domain.some((domain) => !GATED_DOMAINS.has(domain));
}

function matches(note: Note, filters: Filters): boolean {
  return gateAllows(note, filters) && passesFilters(note, filters);
}

const TITLE_HIT = 10;
const TAG_HIT = 10;
const AKA_HIT = 2;
const ID_HIT = 4;
const BODY_HIT_CAP = 5;
const BREADTH_BONUS = 8;
const DEFAULT_LIMIT = 15;
const QUERY_COVERAGE_FLOOR = 0.7;
const CONTEXT_PREMISE_DEPTH = 2;
const CONTEXT_RELATED_CAP = 6;
const CONTEXT_BRIEFED_HITS = 3;
const LEAD = /^\*\*[A-Z][a-z]+\.\*\*\s+(.+)$/m;
const BREADTH_NEUTRAL_WORDS = new Set(
  "a an the in on of to for and or is it by with do does did i my me we our you your be been am are was were will there here that this its as at from so how what why when where which should would could can".split(" "),
);

const MIN_STEM = 4;

type Term = { pattern: RegExp; inflections: RegExp[]; countsForBreadth: boolean };

function stems(word: string): string[] {
  const found = new Set<string>();
  const add = (stem: string) => {
    if (stem.length >= MIN_STEM && stem !== word) found.add(stem);
  };
  if (word.endsWith("ies") || word.endsWith("ied")) add(`${word.slice(0, -3)}y`);
  if (word.endsWith("ing")) add(word.slice(0, -3));
  if (word.endsWith("ed") || word.endsWith("es")) add(word.slice(0, -2));
  if (word.endsWith("s") && !word.endsWith("ss")) add(word.slice(0, -1));
  for (const stem of [...found]) if (/(.)\1$/.test(stem)) add(stem.slice(0, -1));
  return [...found];
}

function occurrences(haystack: string, term: RegExp, stopAfter: number): number {
  term.lastIndex = 0;
  let found = 0;
  while (found < stopAfter && term.exec(haystack) !== null) found += 1;
  return found;
}

type TermMatch = { note: Note; perTerm: number[]; breadth: number };

function mentionedAnywhere(note: Note, patterns: RegExp[]): boolean {
  const { title, tags, aka, id, body } = note.lower;
  return patterns.some((pattern) =>
    occurrences(body, pattern, 1) > 0
    || occurrences(title, pattern, 1) > 0
    || occurrences(tags, pattern, 1) > 0
    || occurrences(aka, pattern, 1) > 0
    || occurrences(id, pattern, 1) > 0);
}

function matchTerms(note: Note, terms: Term[]): TermMatch | null {
  const { title, tags, aka, id, body } = note.lower;
  const perTerm: number[] = [];
  let matched = 0;
  let breadth = 0;
  for (const { pattern, countsForBreadth } of terms) {
    const hit = (occurrences(title, pattern, 1) ? TITLE_HIT : 0)
      + (occurrences(tags, pattern, 1) ? TAG_HIT : 0)
      + (occurrences(aka, pattern, 1) ? AKA_HIT : 0)
      + (occurrences(id, pattern, 1) ? ID_HIT : 0)
      + occurrences(body, pattern, BODY_HIT_CAP);
    perTerm.push(hit);
    if (hit > 0) {
      matched += 1;
      if (countsForBreadth) breadth += 1;
    }
  }
  return matched === 0 ? null : { note, perTerm, breadth };
}

function rarityWeights(matches: TermMatch[], termCount: number, corpusSize: number): number[] {
  const corpus = Math.max(corpusSize, 1);
  const raw = Array.from({ length: termCount }, (_, index) => {
    const carrying = matches.reduce((count, match) => count + (match.perTerm[index] > 0 ? 1 : 0), 0);
    return Math.log(1 + corpus / Math.max(carrying, 1));
  });
  const mean = raw.reduce((sum, weight) => sum + weight, 0) / Math.max(raw.length, 1);
  return mean === 0 ? raw.map(() => 1) : raw.map((weight) => weight / mean);
}

function weightedScore(match: TermMatch, weights: number[]): number {
  const slots = match.perTerm.reduce((sum, hit, index) => sum + hit * weights[index], 0);
  return slots + Math.max(match.breadth - 1, 0) * BREADTH_BONUS;
}

function queryCoverage(match: TermMatch, terms: Term[], weights: number[], weightSum: number): number {
  const covered = match.perTerm.reduce(
    (sum, hit, index) => sum + (hit > 0 || mentionedAnywhere(match.note, terms[index].inflections) ? weights[index] : 0),
    0,
  );
  return weightSum === 0 ? 0 : covered / weightSum;
}

function bestPossibleScore(terms: Term[], weightSum: number): number {
  const breadth = terms.filter((term) => term.countsForBreadth).length;
  return weightSum * (TITLE_HIT + TAG_HIT + ID_HIT + BODY_HIT_CAP) + Math.max(breadth - 1, 0) * BREADTH_BONUS;
}

const EDGE_PUNCTUATION = /^[,.;:?!'"`()[\]{}]+|[,.;:?!'"`()[\]{}]+$/g;

const SYNONYMS: [string, string][] = [
  ["eic", "evidencni identifikacni cislo"],
  ["pok", "potvrzovaci kod"],
  ["pg", "playground"],
  ["zoet", "zakon o evidenci trzeb"],
  ["gfr", "generalni financni reditelstvi"],
  ["ca", "certifikacni autorita"],
  ["crl", "certificate revocation list"],
  ["wss", "ws-security"],
  ["xsd", "xml schema"],
  ["dis", "danova informacni schranka"],
];

function expandTerms(query: string): string[] {
  const raw = fold(query);
  const base = raw.split(/\s+/).map((token) => token.replace(EDGE_PUNCTUATION, "")).filter(Boolean);
  const tokens = new Set(base);
  const extra: string[] = [];
  for (const [acronym, phrase] of SYNONYMS) {
    if (tokens.has(acronym)) extra.push(...phrase.split(/\s+/));
    if (raw.includes(phrase)) extra.push(acronym);
  }
  return [...new Set([...base, ...extra])];
}

function wordPattern(word: string): RegExp {
  return new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "g");
}

function prepareTerms(query: string): Term[] {
  return expandTerms(query).map((word) => ({
    pattern: wordPattern(word),
    inflections: stems(word).map(wordPattern),
    countsForBreadth: !BREADTH_NEUTRAL_WORDS.has(word),
  }));
}

function rank(vault: Vault, filters: Filters, candidates: Note[]): SearchResult {
  const limit = filters.limit ?? DEFAULT_LIMIT;
  const terms = prepareTerms(filters.query ?? "");
  if (terms.length === 0) {
    return { hits: candidates.slice(0, limit).map((note) => ({ note, norm: 1, coverage: 1 })), confident: true };
  }
  const matches: TermMatch[] = [];
  for (const note of candidates) {
    const match = matchTerms(note, terms);
    if (match) matches.push(match);
  }
  const weights = rarityWeights(matches, terms.length, candidates.length);
  const weightSum = weights.reduce((sum, weight) => sum + weight, 0);
  const ceiling = bestPossibleScore(terms, weightSum);
  const ranked = matches.map((match) => ({ match, norm: weightedScore(match, weights) / ceiling }));
  ranked.sort((a, b) => b.norm - a.norm || a.match.note.id.localeCompare(b.match.note.id));
  const hits: Hit[] = ranked.slice(0, limit).map(({ match, norm }) => ({
    note: match.note,
    norm,
    coverage: queryCoverage(match, terms, weights, weightSum),
  }));
  const askedSomething = terms.some((term) => term.countsForBreadth);
  return { hits, confident: askedSomething && (hits[0]?.coverage ?? 0) >= QUERY_COVERAGE_FLOOR };
}

export function searchScored(vault: Vault, filters: Filters): SearchResult {
  return rank(vault, filters, vault.notes.filter((note) => matches(note, filters)));
}

export function search(vault: Vault, filters: Filters): Note[] {
  return searchScored(vault, filters).hits.map((hit) => hit.note);
}

export function withheldByGate(vault: Vault, filters: Filters): GateReport {
  const eligible = vault.notes.filter((note) => passesFilters(note, filters));
  const reachable = filters.query ? rank(vault, filters, eligible).hits.map((hit) => hit.note) : eligible;
  const hidden = reachable.filter((note) => !gateAllows(note, filters));
  return { count: hidden.length, domains: [...new Set(hidden.flatMap((note) => note.domain))].sort() };
}

export function listNotes(vault: Vault, filters: Filters): Note[] {
  return vault.notes.filter((note) => matches(note, filters)).sort((a, b) => a.id.localeCompare(b.id));
}

export function chainToAxioms(vault: Vault, id: string): ChainStep[] {
  const steps: ChainStep[] = [];
  const visited = new Set<string>();
  const walk = (current: string, depth: number) => {
    if (visited.has(current)) return;
    visited.add(current);
    const note = vault.byId.get(current);
    if (!note) {
      steps.push({ id: current, title: "", type: "", depth, missing: true });
      return;
    }
    steps.push({ id: note.id, title: note.title, type: note.type, depth, missing: false });
    for (const premise of note.rests_on) walk(premise, depth + 1);
  };
  walk(id, 0);
  return steps;
}

export function backlinksTo(vault: Vault, id: string): Backlinks {
  const restsOn = vault.notes.filter((note) => note.rests_on.includes(id));
  const restsOnIds = new Set(restsOn.map((note) => note.id));
  const mentions = vault.notes.filter((note) => note.links.includes(id) && !restsOnIds.has(note.id));
  return { restsOn, mentions };
}

export function sourceView(vault: Vault, citeKey: string): SourceView {
  const dependents = vault.notes.filter((note) => note.sources.includes(citeKey)).sort((a, b) => a.id.localeCompare(b.id));
  return { note: vault.byId.get(citeKey), dependents };
}

export type ContextView = { core: Hit[]; premises: Note[]; related: Note[]; confident: boolean };

export function contextView(vault: Vault, filters: Filters): ContextView {
  const { hits: core, confident } = searchScored(vault, { ...filters, limit: filters.limit ?? 6 });
  if (!confident) return { core, premises: [], related: [], confident: false };
  const coreIds = new Set(core.map((hit) => hit.note.id));

  const visible = (note: Note | undefined): Note | undefined =>
    note && gateAllows(note, filters) ? note : undefined;

  const premises = new Map<string, Note>();
  for (const { note } of core.slice(0, CONTEXT_BRIEFED_HITS)) {
    for (const step of chainToAxioms(vault, note.id)) {
      if (step.missing || coreIds.has(step.id) || step.depth > CONTEXT_PREMISE_DEPTH) continue;
      const premise = visible(vault.byId.get(step.id));
      if (premise) premises.set(premise.id, premise);
    }
  }

  const related = new Map<string, Note>();
  for (const { note } of core) {
    const { restsOn, mentions } = backlinksTo(vault, note.id);
    for (const neighbour of [...restsOn, ...mentions]) {
      if (!visible(neighbour) || coreIds.has(neighbour.id) || premises.has(neighbour.id)) continue;
      related.set(neighbour.id, neighbour);
    }
    for (const link of note.links) {
      const target = visible(vault.byId.get(link));
      if (target && !coreIds.has(target.id) && !premises.has(target.id)) related.set(target.id, target);
    }
  }

  const top = core[0].note;
  const { restsOn, mentions } = backlinksTo(vault, top.id);
  const nearTop = new Set([...top.links, ...top.rests_on, ...restsOn.map((note) => note.id), ...mentions.map((note) => note.id)]);
  const closestFirst = [...related.values()]
    .sort((a, b) => Number(nearTop.has(b.id)) - Number(nearTop.has(a.id)) || a.id.localeCompare(b.id))
    .slice(0, CONTEXT_RELATED_CAP);

  return { core, premises: [...premises.values()], related: closestFirst, confident: true };
}

export function lead(note: Note): string {
  return note.body.match(LEAD)?.[1] ?? "";
}

export function uncitedNotes(vault: Vault): Uncited[] {
  const uncited: Uncited[] = [];
  for (const note of vault.notes) {
    if (!CITABLE_TYPES.has(note.type)) continue;
    const missing = [
      ...(note.spec_ref.length ? [] : ["spec_ref"]),
      ...(note.sources.length ? [] : ["sources"]),
    ];
    if (missing.length) uncited.push({ id: note.id, missing });
  }
  return uncited;
}

export function brokenRefs(vault: Vault): BrokenRef[] {
  const broken: BrokenRef[] = [];
  const collect = (note: Note, kind: string, refs: string[]) => {
    for (const ref of refs) if (!vault.byId.has(ref)) broken.push({ from: note.id, kind, ref });
  };
  for (const note of vault.byId.values()) {
    collect(note, "rests_on", note.rests_on);
    collect(note, "sources", note.sources);
    collect(note, "link", note.links);
  }
  return broken;
}
