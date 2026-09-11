---
id: eet-polozka-id-jednotky
title: id_jednotky - označení evidenční jednotky
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.3.3.8", "xml-schema v4.1 IdEvidJednotkyType"]
rests_on: []
tags: [data, identifikator, evidencni-jednotka]
aka: ["jak je formatovane cislo evidencni jednotky", "proc musi id_jednotky koncit cislici 1 2 3 nebo 4"]
created: 2026-09-11
updated: 2026-09-11
---

# id_jednotky - označení evidenční jednotky

> "Čísla evidenčních jednotek mají obvykle alespoň 2 dekadická místa a poslední dekadickou číslici 1, 2, 3 a nebo 4."
> - [[popis-rozhrani]] v1.2, kap. 3.3.3.8

Tatáž kapitola uvádí, že jde o číselné označení evidenční jednotky, přidělené poplatníkovi na portálu MOJE Daně v DIS+, a že označení evidenční jednotky je unikátní v rámci poplatníka.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Data>`, atribut |
| povinná | ano |
| maska | `^[1-9][0-9]{0,8}$` |
| délka | 1 až 9 znaků |
| XSD typ | `tns:IdEvidJednotkyType` (`minInclusive` 1, `maxInclusive` 999999999) |
| příklady | `24`, `164968741` |

Nesoulad tvaru s číslem přiděleným na portálu MOJE Daně je propustná kontrola, viz [[eet-pravidlo-propustne-kontroly]] a [[eet-kod-varovani-6]].

`id_jednotky` vstupuje do [[eet-pravidlo-jednoznacny-kod-trzby]] jako druhé v pořadí.
