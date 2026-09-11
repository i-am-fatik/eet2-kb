import { appendFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  loadVault,
  searchScored,
  listNotes,
  chainToAxioms,
  backlinksTo,
  sourceView,
  contextView,
  brokenRefs,
  uncitedNotes,
  withheldByGate,
  lead,
  type Note,
  type Hit,
  type Filters,
  type GateReport,
} from "./kb-core";

const root = process.env.KB_ROOT ?? resolve(import.meta.dir, "../kb");
let vault = loadVault(root);

function optionalText(value: unknown): string | undefined {
  return typeof value === "string" && value ? value : undefined;
}

function requiredText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function filtersFrom(args: Record<string, unknown>): Filters {
  return {
    query: optionalText(args.query),
    domain: optionalText(args.domain),
    type: optionalText(args.type),
    tag: optionalText(args.tag),
    status: optionalText(args.status),
    limit: typeof args.limit === "number" ? args.limit : undefined,
  };
}

function withheldLine(report: GateReport): string {
  return report.count
    ? `\n\n(gated, not shown: ${report.count} in ${report.domains.join(", ")}. Pass domain to include.)`
    : "";
}

function oneLine(note: Note): string {
  const domain = note.domain.length ? ` [${note.domain.join(", ")}]` : "";
  const unsettled = note.status && note.status !== "platne" ? `, ${note.status}` : "";
  return `${note.id} - ${note.title} (${note.type}${domain}${unsettled})`;
}

function hitLine(hit: Hit): string {
  return `${hit.norm.toFixed(2)}  ${oneLine(hit.note)}`;
}

function mapLine(domain: string | undefined): string {
  const map = domain ? vault.byId.get(domain) : undefined;
  return map?.type === "moc" ? `\nOpen the map instead: ${map.id}` : "";
}

const BRIEFED_HITS = 3;

const missLog = resolve(root, "meta/retrieval-misses.md");
const MISS_LOG_PREAMBLE = "# Queries the vault refused to answer\n\ndate\tcoverage\tclosest note\tquery\n\n";

function recordMiss(filters: Filters, best: Hit | undefined): void {
  const query = (filters.query ?? "").replace(/\s+/g, " ").trim();
  if (!query) return;
  const day = new Date().toISOString().slice(0, 10);
  const coverage = (best?.coverage ?? 0).toFixed(2);
  try {
    if (!existsSync(missLog)) writeFileSync(missLog, MISS_LOG_PREAMBLE);
    appendFileSync(missLog, `${day}\t${coverage}\t${best?.note.id ?? "-"}\t${query}\n`);
  } catch {
    return;
  }
}

function unconfidentHeader(filters: Filters, best: Hit | undefined): string {
  const where = filters.domain ? ` in ${filters.domain}` : "";
  const answered = best ? ` The closest note covers ${Math.round(best.coverage * 100)}% of what you asked about.` : "";
  return `No confident match${where}.${answered} Candidates below, not canon.${mapLine(filters.domain)}\n`;
}

type Tool = {
  name: string;
  description: string;
  inputSchema: object;
  run: (args: Record<string, unknown>) => string;
};

const tools: Tool[] = [
  {
    name: "kb_search",
    description: "Full-text search over the vault with optional filters (domain, type, tag, status). Title and tag hits rank above body hits. Use to find notes about a topic.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string" },
        domain: { type: "string" },
        type: { type: "string", description: "axiom | concept | claim | pattern | source | moc" },
        tag: { type: "string" },
        status: { type: "string" },
        limit: { type: "number" },
      },
    },
    run: (args) => {
      const filters = filtersFrom(args);
      const { hits, confident } = searchScored(vault, filters);
      const withheld = withheldLine(withheldByGate(vault, filters));
      if (!hits.length) return "Nothing in the vault matches those words." + withheld;
      if (!confident) recordMiss(filters, hits[0]);
      return (confident ? "" : unconfidentHeader(filters, hits[0])) + hits.map(hitLine).join("\n") + withheld;
    },
  },
  {
    name: "kb_context",
    description: "Retrieve a topic's connected neighborhood in one call - the best-matching notes, the axioms and concepts they stand on, and their direct graph neighbours. Prefer this over kb_search when you want the context around a topic, not just a flat hit list, because it surfaces tightly-linked notes a text search misses. Gated domains (listed under Gated domains in meta/tags.md) are skipped in all three sections unless you pass their name as domain.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string" }, domain: { type: "string" }, limit: { type: "number" } },
      required: ["query"],
    },
    run: (args) => {
      const filters = { ...filtersFrom(args), query: requiredText(args.query) };
      const { core, premises, related, confident } = contextView(vault, filters);
      const withheld = withheldLine(withheldByGate(vault, filters));
      if (!core.length) return "Nothing in the vault matches those words." + withheld;
      if (!confident) {
        recordMiss(filters, core[0]);
        return unconfidentHeader(filters, core[0]) + core.map((hit) => "  " + hitLine(hit)).join("\n") + withheld;
      }
      const map = vault.byId.get(core[0].note.domain[0] ?? "");
      return [
        ...(map?.type === "moc" ? [`map: ${map.id} - ${map.title}`] : []),
        `core matches (${core.length}):`,
        ...core.flatMap((hit, index) => {
          const line = "  " + hitLine(hit);
          const summary = index < BRIEFED_HITS ? lead(hit.note) : "";
          return summary ? [line, `      ${summary}`] : [line];
        }),
        `stands on (${premises.length}):`,
        ...premises.map((note) => "  " + oneLine(note)),
        `related (${related.length}, nearest first):`,
        ...related.map((note) => "  " + oneLine(note)),
      ].join("\n") + withheld;
    },
  },
  {
    name: "kb_get",
    description: "Return one note in full (frontmatter and body) by its id.",
    inputSchema: { type: "object", properties: { id: { type: "string" } }, required: ["id"] },
    run: (args) => {
      const id = requiredText(args.id);
      const note = vault.byId.get(id);
      return note ? readFileSync(note.path, "utf8") : `Note not found: ${id}`;
    },
  },
  {
    name: "kb_chain",
    description: "Walk a note's rests_on edges upward to the definitions it is stated in terms of. Use to see which other spec rules a rule depends on.",
    inputSchema: { type: "object", properties: { id: { type: "string" } }, required: ["id"] },
    run: (args) => {
      const id = requiredText(args.id);
      if (!vault.byId.has(id)) return `Note not found: ${id}`;
      return chainToAxioms(vault, id)
        .map((step) => `${"  ".repeat(step.depth)}${step.id}${step.missing ? " (missing)" : ` - ${step.title}`}${step.type === "axiom" ? "  [axiom]" : ""}`)
        .join("\n");
    },
  },
  {
    name: "kb_backlinks",
    description: "Find notes pointing at this id - those that rests_on it (the chain below) and those that mention it in prose.",
    inputSchema: { type: "object", properties: { id: { type: "string" } }, required: ["id"] },
    run: (args) => {
      const id = requiredText(args.id);
      if (!vault.byId.has(id)) return `Note not found: ${id}`;
      const { restsOn, mentions } = backlinksTo(vault, id);
      return [
        `rests_on this (${restsOn.length}):`,
        ...restsOn.map((note) => "  " + oneLine(note)),
        `mentions this (${mentions.length}):`,
        ...mentions.map((note) => "  " + oneLine(note)),
      ].join("\n");
    },
  },
  {
    name: "kb_list",
    description: "List notes by metadata only (domain, type, tag, status), no text query. Use to enumerate, for example every kod in a domain.",
    inputSchema: {
      type: "object",
      properties: {
        domain: { type: "string" },
        type: { type: "string" },
        tag: { type: "string" },
        status: { type: "string" },
      },
    },
    run: (args) => {
      const filters = filtersFrom(args);
      const hits = listNotes(vault, filters);
      const withheld = withheldLine(withheldByGate(vault, filters));
      return (hits.length ? `${hits.length} notes:\n` + hits.map(oneLine).join("\n") : "No matches.") + withheld;
    },
  },
  {
    name: "kb_source",
    description: "Given a source cite_key, return the source note and every note distilled from it.",
    inputSchema: { type: "object", properties: { cite_key: { type: "string" } }, required: ["cite_key"] },
    run: (args) => {
      const citeKey = requiredText(args.cite_key);
      const { note, dependents } = sourceView(vault, citeKey);
      const head = note ? oneLine(note) : `Source not found: ${citeKey}`;
      return `${head}\n\nnotes from this source (${dependents.length}):\n` + dependents.map(oneLine).join("\n");
    },
  },
  {
    name: "kb_verify",
    description: "Report every unresolved rests_on, sources, or wikilink reference, and every pravidlo, polozka, kod or pojem missing its spec_ref or sources. Empty means every note is traceable to a published document.",
    inputSchema: { type: "object", properties: {} },
    run: () => {
      const broken = brokenRefs(vault);
      const uncited = uncitedNotes(vault);
      const report = [
        ...broken.map((entry) => `  unresolved  ${entry.from} -> ${entry.kind}: ${entry.ref}`),
        ...uncited.map((entry) => `  uncited     ${entry.id} -> missing: ${entry.missing.join(", ")}`),
      ];
      return report.length
        ? `${report.length} problems:\n` + report.join("\n")
        : `OK - ${vault.notes.length} notes, every one traceable, 0 unresolved references.`;
    },
  },
];

function reply(id: unknown, result: object) {
  process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id, result }) + "\n");
}

function replyError(id: unknown, code: number, message: string) {
  process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id, error: { code, message } }) + "\n");
}

function dispatch(request: { id?: unknown; method?: string; params?: Record<string, unknown> }) {
  const { id, method, params } = request;
  if (method === "initialize") {
    reply(id, {
      protocolVersion: optionalText(params?.protocolVersion) ?? "2024-11-05",
      capabilities: { tools: {} },
      serverInfo: { name: "eet-kb", version: "0.1.0" },
    });
    return;
  }
  if (method === "tools/list") {
    reply(id, { tools: tools.map(({ name, description, inputSchema }) => ({ name, description, inputSchema })) });
    return;
  }
  if (method === "tools/call") {
    vault = loadVault(root);
    const tool = tools.find((entry) => entry.name === params?.name);
    if (!tool) {
      replyError(id, -32602, `Unknown tool: ${String(params?.name)}`);
      return;
    }
    try {
      const text = tool.run((params?.arguments ?? {}) as Record<string, unknown>);
      reply(id, { content: [{ type: "text", text }] });
    } catch (error) {
      reply(id, { content: [{ type: "text", text: `Error: ${(error as Error).message}` }], isError: true });
    }
    return;
  }
  if (method === "ping") {
    reply(id, {});
    return;
  }
  if (id !== undefined) replyError(id, -32601, `Method not found: ${String(method)}`);
}

function handleLine(line: string) {
  const trimmed = line.trim();
  if (!trimmed) return;
  try {
    dispatch(JSON.parse(trimmed));
  } catch {
    return;
  }
}

console.error(`kb mcp: indexed ${vault.notes.length} notes from ${root}`);

const decoder = new TextDecoder();
let pending = "";
for await (const chunk of Bun.stdin.stream()) {
  pending += decoder.decode(chunk, { stream: true });
  let newline = pending.indexOf("\n");
  while (newline !== -1) {
    handleLine(pending.slice(0, newline));
    pending = pending.slice(newline + 1);
    newline = pending.indexOf("\n");
  }
}
