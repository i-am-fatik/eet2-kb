---
id: eet-polozka-uuid-zpravy
title: uuid_zpravy - UUID zprávy
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.3.3.1", "xml-schema v4.1 UUIDType"]
rests_on: []
tags: [hlavicka, uuid, identifikator]
aka: ["jakou verzi uuid generovat", "musim menit uuid pri opakovanem zaslani"]
created: 2026-09-11
updated: 2026-09-11
---

# uuid_zpravy - UUID zprávy

> "Jednoznačně identifikuje datovou zprávu (nikoli e-tržbu). I při opakovaném zaslání datové zprávy má být vytvořeno nové UUID zprávy."
> - [[popis-rozhrani]] v1.2, kap. 3.3.3.1

Tatáž kapitola uvádí, že UUID generuje pokladní zařízení poplatníka ve formátu dle RFC 9562, že číslice "M" značí verzi s povolenými hodnotami 1 až 5 a doporučenou verzí 4, a že dva nejvyšší bity číslice "N" jsou povinně 1 0, což dává povolené hexadecimální hodnoty 8, 9, A, B.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Hlavicka>`, atribut |
| povinná | ano |
| maska | `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$` |
| délka | 36 znaků |
| XSD typ | `tns:UUIDType` (pattern + `xs:length` 36) |
| příklad | `b3a09b52-7c87-4014-a496-4c7a53cf9125` |

Znak "-" je pomlčka, tedy znak s dekadickým kódem 45 v ASCII znakové sadě. Hexadecimální číslice větší než 9 je podle kap. 3.1 možno uvádět malými i velkými písmeny.

Stejná položka se vrací v hlavičce odpovědi - v [[eet-pojem-potvrzovaci-datova-zprava]] povinně, v chybové datové zprávě jako nepovinná.
