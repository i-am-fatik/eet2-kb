---
id: eet-polozka-dat-odmit
title: dat_odmit - datum a čas odmítnutí zprávy
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.5.2.2", "xml-schema v4.1 dateTime"]
rests_on: [eet-pojem-datova-zprava-evidovane-trzby]
tags: [chyba, hlavicka, datum]
aka: ["kdy byla zprava odmitnuta", "jaky format ma dat_odmit"]
created: 2026-09-11
updated: 2026-09-11
---

# dat_odmit - datum a čas odmítnutí zprávy

> "Datum a čas odmítnutí zprávy, která obsahuje chybu, je okamžik zpracování chybné datové zprávy evidované tržby na společném technickém zařízení správce daně."
> - [[popis-rozhrani]] v1.2, kap. 3.5.2.2

Podle téže kapitoly je datový formát této položky identický s formátem [[eet-polozka-dat-odesl]] (kap. 3.3.3.2 Datum a čas odeslání zprávy), vyjádřeným ve schématu typem `tns:dateTime`.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Hlavicka>`, atribut |
| povinná | ne |
| maska | `\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(Z\|[+\-]\d\d:\d\d)` |
| XSD typ | `tns:dateTime` (pattern) |
| příklad | `2027-03-04T18:25:21+01:00` |

Příklad je z ukázky chyby v kap. 3.5.3. Stejnou datovou oblast `<Hlavicka>` nese i nepovinné [[eet-polozka-uuid-zpravy]]. Celkovou strukturu chybové zprávy popisuje [[eet-pravidlo-chybova-zprava]].
