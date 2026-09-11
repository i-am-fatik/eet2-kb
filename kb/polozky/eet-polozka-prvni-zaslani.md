---
id: eet-polozka-prvni-zaslani
title: prvni_zaslani - První zaslání údajů o tržbě
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.3.3.3", "xml-schema v4.1 TrzbaHlavickaType"]
rests_on: []
tags: [hlavicka, priznak, opakovane-zaslani]
aka: ["jak oznacit opakovane zaslani trzby", "co znamena prvni_zaslani false"]
created: 2026-09-11
updated: 2026-09-11
---

# prvni_zaslani - První zaslání údajů o tržbě

> "Je to příznak s hodnotami true nebo false (též 1 nebo 0), který určuje, zda jde o první zaslání konkrétní evidované tržby (hodnota: true nebo 1) nebo o opakované zaslání téže tržby (hodnota: false nebo 0)."
> - [[popis-rozhrani]] v1.2, kap. 3.3.3.3

Tatáž kapitola uvádí, že jde o atribut XML elementu `<Hlavicka>` a že datový formát je určen příslušnou W3C specifikací pro typ boolean.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Hlavicka>`, atribut |
| povinná | ano |
| maska | neuvedena regulárním výrazem, dle W3C `xs:boolean`: `true`, `false`, `1`, `0` |
| délka | 1 až 5 znaků |
| XSD typ | `xs:boolean` |
| příklad | `true` |

Souvisí s [[eet-polozka-overeni]], druhým příznakem hlavičky, a s [[eet-polozka-uuid-zpravy]], jejíž hodnota se má podle kap. 3.3.3.1 vytvořit nová i při opakovaném zaslání (`prvni_zaslani="false"`) téže datové zprávy.
