---
id: eet-polozka-dat-trzby
title: dat_trzby - datum a čas uskutečnění tržby
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.3.3.11", "xml-schema v4.1 dateTime"]
rests_on: [eet-polozka-dat-odesl]
tags: [data, datum-cas, format]
aka: ["jaky format ma datum uskutecneni trzby", "jak stara smi byt trzba"]
created: 2026-09-11
updated: 2026-09-11
---

# dat_trzby - datum a čas uskutečnění tržby

> "Formát je identický jako u položky – viz 3.3.3.2 Datum a čas odeslání zprávy, tj. uvádí se datum a čas rozhodného okamžiku v lokální časové zóně, ve které se tržba uskutečnila, a k tomu povinně jednoznačné určení této časové zóny."
> - [[popis-rozhrani]] v1.2, kap. 3.3.3.11

Tatáž kapitola uvádí, že jde o datum a čas uskutečnění evidované tržby, tj. přijetí evidované tržby nebo vydání příkazu k jejímu provedení, pokud byl tento příkaz vydán dříve.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Data>`, atribut |
| povinná | ano |
| maska | `\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(Z\|[+\-]\d\d:\d\d)` |
| délka | 25 znaků, shodně s [[eet-polozka-dat-odesl]] |
| XSD typ | `tns:dateTime` |
| příklad | `2027-01-09T16:45:36+01:00` |

Nesoulad s okamžikem přijetí zprávy o více než 2 hodiny dopředu nebo o více než 2 roky dozadu, i hodnota starší než minimální datum a čas uskutečnění tržby daného prostředí, jsou propustná kontrola, viz [[eet-pravidlo-propustne-kontroly]], [[eet-kod-varovani-4]], [[eet-kod-varovani-5]] a [[eet-provoz-minimalni-datum-trzby]].

`dat_trzby` vstupuje do [[eet-pravidlo-jednoznacny-kod-trzby]] jako páté v pořadí.
