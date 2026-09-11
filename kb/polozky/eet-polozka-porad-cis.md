---
id: eet-polozka-porad-cis
title: porad_cis - pořadové číslo tržby
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.3.3.10", "xml-schema v4.1 string25"]
rests_on: []
tags: [data, identifikator, poradove-cislo]
aka: ["co se pouziva jako porad_cis", "musi byt porad_cis unikatni"]
created: 2026-09-11
updated: 2026-09-11
---

# porad_cis - pořadové číslo tržby

> "Přesně to znamená, že musí být unikátní pětice položek: (eic_popl, id_jednotky, id_pokl, porad_cis, dat_trzby)."
> - [[popis-rozhrani]] v1.2, kap. 3.3.3.10

Tatáž kapitola uvádí, že jde o pořadové číslo tržby tvořené na straně poplatníka alfanumerickými znaky a vybranými speciálními znaky, a že typicky je pořadové číslo tržby číslem, které poplatník uvede jako číslo účtenky, pokud vydává účtenku k danému plnění.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Data>`, atribut |
| povinná | ano |
| maska | `^[0-9a-zA-Z\.,:;/#\-_ ]{1,25}$` |
| délka | 1 až 25 znaků |
| XSD typ | `tns:string25` |
| příklad | `#25/c-12/1A_2/2027` |

`porad_cis` vstupuje do [[eet-pravidlo-jednoznacny-kod-trzby]] jako čtvrté v pořadí.
