---
id: eet-polozka-kod
title: kod - chybový kód
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.5.2.3", "xml-schema v4.1 KodChybaType"]
rests_on: [eet-pravidlo-kriticke-kontroly]
tags: [chyba, cislenik, format]
aka: ["jaky format ma chybovy kod", "muze byt chybovy kod zaporny"]
created: 2026-09-11
updated: 2026-09-11
---

# kod - chybový kód

> "Jedná se o celé max. 3-ciferné dekadické číslo, které dle stanoveného číselníku označuje konkrétní kritickou chybu. Hodnoty chybového kódu mohou být kladné, nulové nebo záporné."
> - [[popis-rozhrani]] v1.2, kap. 3.5.2.3

Je atributem XML elementu `<Chyba>` a je v chybové zprávě povinný.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Chyba>`, atribut |
| povinná | ano |
| maska | `^-?\d{1,3}$` |
| délka | 1 až 3 znaky pro nezáporné hodnoty (0 až 999), 2 až 4 znaky pro záporné hodnoty (-999 až -1) |
| XSD typ | `tns:KodChybaType` (`xs:int`, `minInclusive` -999, `maxInclusive` 999) |
| příklady | `10`, `-1`, `560` |

Celý číselník chybových kódů a formát chybového hlášení popisuje [[eet-pravidlo-cislenik-chyb]]. Kritickou chybu, kterou kód označuje, definují [[eet-pravidlo-kriticke-kontroly]].
