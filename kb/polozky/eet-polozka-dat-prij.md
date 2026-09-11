---
id: eet-polozka-dat-prij
title: dat_prij - datum a čas přijetí zprávy
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.4.2.2", "xml-schema v4.1 dateTime"]
rests_on: [eet-pojem-potvrzovaci-datova-zprava]
tags: [potvrzeni, hlavicka, datum]
aka: ["kdy system prijal zpravu", "jaky format ma dat_prij"]
created: 2026-09-11
updated: 2026-09-11
---

# dat_prij - datum a čas přijetí zprávy

> "Datum a čas přijetí potvrzované zprávy je okamžik, kdy společné technické zařízení správce daně přijalo datovou zprávu evidované tržby."
> - [[popis-rozhrani]] v1.2, kap. 3.4.2.2

Podle téže kapitoly je datový formát této položky identický s formátem [[eet-polozka-dat-odesl]] (kap. 3.3.3.2 Datum a čas odeslání zprávy). Ve schématu je tento formát vyjádřen typem `tns:dateTime`.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Hlavicka>`, atribut |
| povinná | ano |
| maska | `\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(Z\|[+\-]\d\d:\d\d)` |
| XSD typ | `tns:dateTime` (pattern) |
| příklad | `2027-03-04T18:25:21+01:00` |

Příklad je z ukázky potvrzení v kap. 3.4.3. Stejnou datovou oblast `<Hlavicka>` nese i [[eet-polozka-uuid-zpravy]], společně povinně přítomné v potvrzovací zprávě - viz [[eet-pravidlo-potvrzovaci-zprava]].
