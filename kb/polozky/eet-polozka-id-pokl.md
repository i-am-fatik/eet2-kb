---
id: eet-polozka-id-pokl
title: id_pokl - označení pokladního zařízení poplatníka
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.3.3.9", "xml-schema v4.1 string20"]
rests_on: []
tags: [data, identifikator, pokladni-zarizeni]
aka: ["jake znaky smi obsahovat id_pokl", "musi byt id_pokl unikatni"]
created: 2026-09-11
updated: 2026-09-11
---

# id_pokl - označení pokladního zařízení poplatníka

> "Přesně to znamená, že musí být unikátní čtveřice položek: (eic_popl, id_jednotky, id_pokl, dat_trzby)"
> - [[popis-rozhrani]] v1.2, kap. 3.3.3.9

Tatáž kapitola uvádí, že jde o identifikační kód pokladního zařízení poplatníka, který zasílá datovou zprávu evidované tržby na společné technické zařízení správce daně, tvořený na straně poplatníka alfanumerickými znaky a vybranými speciálními znaky, a že pro konkrétního poplatníka musí být označení pokladního zařízení unikátní v jedné evidenční jednotce v jednom okamžiku.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Data>`, atribut |
| povinná | ano |
| maska | `^[0-9a-zA-Z\.,:;/#\-_ ]{1,20}$` |
| délka | 1 až 20 znaků |
| XSD typ | `tns:string20` |
| příklad | `5a/A-q/5:22d_2` |

`id_pokl` vstupuje do [[eet-pravidlo-jednoznacny-kod-trzby]] jako třetí v pořadí.
