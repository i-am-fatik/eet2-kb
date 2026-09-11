---
id: eet-pravidlo-jednoznacny-kod-trzby
title: Jednoznačný kód tržby - určení unikátnosti dané tržby
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani]
spec_ref: ["popis-rozhrani v1.2 kap. 4"]
rests_on: [eet-polozka-eic-popl, eet-polozka-celk-trzba]
tags: [unikatnost, plaintext, opakovane-zaslani]
aka: ["podle ceho se pozna stejna trzba", "musim jednoznacny kod pocitat"]
created: 2026-09-11
updated: 2026-09-11
---

# Jednoznačný kód tržby - určení unikátnosti dané tržby

> "Bude-li přijata datová zpráva evidované tržby se stejnými hodnotami základních datových položek jako některá již dříve přijatá zpráva, bude nová zpráva považována za zaslání údajů o téže evidované tržbě."
> - [[popis-rozhrani]] v1.2, kap. 4

Táž kapitola výslovně uvádí, že níže popsané zpracování nemusí pokladní zařízení provádět a že je uvedeno proto, aby bylo zřejmé, jak je unikátnost tržby určována.

Základní datové položky elementu `<Data>`, v tomto pořadí:

| # | Název položky | XML jméno |
|---|---|---|
| 5 | EIČ poplatníka | `eic_popl` |
| 8 | Označení evidenční jednotky | `id_jednotky` |
| 9 | Označení pokladního zařízení | `id_pokl` |
| 10 | Pořadové číslo tržby | `porad_cis` |
| 11 | Datum a čas uskutečnění tržby | `dat_trzby` |
| 12 | Celková částka tržby | `celk_trzba` |

Řetězec se sestaví zřetězením normalizovaných (kanonizovaných) hodnot v uvedeném pořadí v kódování ASCII s oddělovačem `|`, což je ASCII znak s dekadickou hodnotou 124. Nepovinná položka, která uvedena není, vstupuje do textu jako prázdný řetězec.

Příklad plaintextu z kap. 4:

```
CZ00000019|243|24/A-6/Brno_2|#135433c/11/2027|2027-01-09T16:45:36+01:00|3264.50
```

Unikátnost jednotlivých položek popisují kap. 3.3.3.9 a 3.3.3.10: `id_pokl` musí být unikátní ve čtveřici (`eic_popl`, `id_jednotky`, `id_pokl`, `dat_trzby`), `porad_cis` v pětici (`eic_popl`, `id_jednotky`, `id_pokl`, `porad_cis`, `dat_trzby`).

Tento kód neidentifikuje zprávu - tu identifikuje [[eet-polozka-uuid-zpravy]], která je při opakovaném zaslání téže tržby nová.
