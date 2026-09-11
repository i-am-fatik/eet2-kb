# EET2-KB

Rejstřík technické dokumentace Elektronické evidence tržeb 2.0 ve verzi rozhraní 4.1. Každá nota cituje státní dokument doslovně a uvádí jeho verzi a kapitolu, vlastní výklad do vaultu nepatří. Součástí repozitáře je MCP server, který vault zpřístupňuje jazykovému modelu.

Rozcestník je [kb/maps/index.md](kb/maps/index.md), závazná pravidla vaultu [kb/meta/conventions.md](kb/meta/conventions.md).

## Spuštění

```sh
bun run mcp/server.ts
```

Server mluví MCP po stdio. Registrace v Claude Code:

```sh
claude mcp add eet-kb -- bun run "$PWD/mcp/server.ts"
```

## Konfigurace

| Proměnná | Výchozí hodnota | Význam |
|---|---|---|
| `KB_ROOT` | složka `kb/` vedle `mcp/` | kořen vaultu, ze kterého se noty načítají |

## Zdrojové dokumenty

Vydavatelem zdrojů je Generální finanční ředitelství, soubory jsou ke stažení na [eet.gov.cz](https://eet.gov.cz/cs/pro-vyvojare). Repozitář je nese ve složce [docs/](docs/) v podobě, v jaké byly staženy. Evidenci každého dokumentu s verzí, otiskem `sha256` a původním URL drží jedna nota v [kb/sources/](kb/sources/).

Výjimkou je `CAEET_Playground_2026_v1.zip` se sadou testovacích certifikátů. Obsahuje soubory PKCS#12 a heslo k nim, proto je mimo verzování a stahuje se z [původní URL](https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/CAEET_Playground_2026_v1.zip). Kořenový a mezilehlý certifikát CA EET playgroundu jsou v `docs/` samostatně.

## Licence

Noty i kód jsou uvolněny jako CC0 1.0. Dokumenty v `docs/` a doslovné citace v notách jsou úředním dílem bez autorskoprávní ochrany. Podrobnosti v [LICENSE](LICENSE).
