---
id: eet-polozka-eic-popl
title: eic_popl - EIČ poplatníka
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.3.3.5", "xml-schema v4.1 CZEICType"]
rests_on: []
tags: [data, eic, identifikator]
aka: ["musi se eic shodovat s certifikatem", "co kdyz se zmenilo eic"]
created: 2026-09-11
updated: 2026-09-11
---

# eic_popl - EIČ poplatníka

> "Hodnota atributu se shoduje s EIČ uvedeným v certifikátu použitém pro elektronický podpis datové zprávy (certifikát je součástí SOAP obálky datové zprávy evidované tržby)."
> - [[popis-rozhrani]] v1.2, kap. 3.3.3.5

Tatáž kapitola uvádí, že jde o EIČ poplatníka platné k okamžiku uskutečnění tržby nebo vydání příkazu k jejímu provedení, pokud byl příkaz vydán dříve, že povinnou součástí EIČ je kód státu CZ, a že poplatník, kterému bylo EIČ změněno, může odesílat zprávy s novým EIČ podepsané původním certifikátem, dokud mu není vystaven certifikát nový.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Data>`, atribut |
| povinná | ano |
| maska | `^CZ[0-9]{8,10}$` |
| délka | 10 až 12 znaků |
| XSD typ | `tns:CZEICType` |
| příklady | `CZ00000019`, `CZ683555118`, `CZ8551015704` |

Neshoda s EIČ v certifikátu není důvodem k odmítnutí zprávy - je propustnou kontrolou a vrací se jako [[eet-kod-varovani-1]]. Kontrola integrity EIČ poplatníka je naopak kritická, viz [[eet-pravidlo-kriticke-kontroly]].

Položka vstupuje do [[eet-pravidlo-jednoznacny-kod-trzby]] jako první v pořadí.

Co EIČ je a jak vzniká, drží [[eet-pojem-evidencni-identifikacni-cislo]].
