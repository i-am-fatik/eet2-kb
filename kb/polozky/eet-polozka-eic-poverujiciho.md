---
id: eet-polozka-eic-poverujiciho
title: eic_poverujiciho - EIČ pověřujícího poplatníka
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.3.3.6", "popis-rozhrani v1.2 kap. 3.3.4", "xml-schema v4.1 CZEICType"]
rests_on: [eet-polozka-eic-popl]
tags: [data, eic, poverujici-poplatnik]
aka: ["jak evidovat trzbu jineho poplatnika", "jaky je format eic poverujiciho"]
created: 2026-09-11
updated: 2026-09-11
---

# eic_poverujiciho - EIČ pověřujícího poplatníka

> "Je to platné EIČ poplatníka, kterému tržba plyne a který pověřil jiného poplatníka, aby za něj tuto tržbu evidoval."
> - [[popis-rozhrani]] v1.2, kap. 3.3.3.6

Tatáž kapitola uvádí, že jde o nepovinný atribut XML elementu `<Data>` a že datový formát je identický jako pro [[eet-polozka-eic-popl]]. Příklad `CZ00000019` pochází z příkladu e-tržby v kap. 3.3.4, kde je uveden jako hodnota atributu `eic_poverujiciho` vedle `eic_popl="CZ8551015704"` a `povereni_vice_popl="true"`.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Data>`, atribut |
| povinná | ne |
| maska | `^CZ[0-9]{8,10}$` |
| délka | 10 až 12 znaků |
| XSD typ | `tns:CZEICType` |
| příklad | `CZ00000019` |

Chybný formát této položky je [[eet-kod-varovani-2]]. Shoda hodnoty této položky s [[eet-polozka-eic-popl]] je [[eet-kod-varovani-7]]. Položka souvisí s [[eet-polozka-povereni-vice-popl]].
