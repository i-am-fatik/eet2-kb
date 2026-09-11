---
id: eet-polozka-povereni-vice-popl
title: povereni_vice_popl - Pověření více poplatníky
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.3.3.7", "xml-schema v4.1 TrzbaDataType"]
rests_on: []
tags: [data, priznak, poverujici-poplatnik]
aka: ["jak evidovat trzbu za vice poplatniku", "co kdyz sdruzeni povere jednoho poplatnika"]
created: 2026-09-11
updated: 2026-09-11
---

# povereni_vice_popl - Pověření více poplatníky

> "Tento příznak s hodnotami true nebo false (též 1 nebo 0) určuje, zda je tržba evidována v pověření za více poplatníků, kterým tato evidovaná tržba plyne (např. z titulu sdružení bez právní subjektivity/spoluvlastnictví, kdy tržba plyne všem členům sdružení/spoluvlastníkům a tito členové/spoluvlastníci pověří evidováním této tržby jednoho poplatníka, typicky jednoho ze členů/spoluvlastníků)."
> - [[popis-rozhrani]] v1.2, kap. 3.3.3.7

Tatáž kapitola uvádí, že jde o nepovinný atribut XML elementu `<Data>`, že pokud položka není uvedena, má to stejný význam, jako by byla uvedena s hodnotou false/0, a že datový formát je určen příslušnou W3C specifikací pro typ boolean.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Data>`, atribut |
| povinná | ne |
| maska | neuvedena regulárním výrazem, dle W3C `xs:boolean`: `true`, `false`, `1`, `0` |
| délka | 1 až 5 znaků |
| XSD typ | `xs:boolean` |
| příklad | `true` |

Souvisí s [[eet-polozka-eic-poverujiciho]], atributem, který uvádí EIČ poplatníka, jemuž tržba plyne, a s [[eet-polozka-eic-popl]], atributem poplatníka, který tržbu eviduje.
