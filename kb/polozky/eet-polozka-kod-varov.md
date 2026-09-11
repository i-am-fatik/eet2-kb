---
id: eet-polozka-kod-varov
title: kod_varov - kód varování
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.4.2.5", "xml-schema v4.1 KodVarovType"]
rests_on: [eet-pravidlo-propustne-kontroly]
tags: [varovani, cislenik, format]
aka: ["jaky format ma kod varovani", "muze byt kod_varov zaporny"]
created: 2026-09-11
updated: 2026-09-11
---

# kod_varov - kód varování

> "Jedná se o celé max. 3-ciferné kladné dekadické číslo, které dle stanoveného číselníku označuje konkrétní varování."
> - [[popis-rozhrani]] v1.2, kap. 3.4.2.5

Je atributem XML elementu `<Varovani>`. Podle přehledu datových položek potvrzení (kap. 3.4.2) je element `<Varovani>` jako celek nepovinný a v potvrzovací i chybové zprávě se může vícekrát opakovat; je-li element uveden, je atribut `kod_varov` ve schématu povinný (`use="required"`).

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Varovani>`, atribut |
| povinná | ne (element `<Varovani>` je nepovinný, atribut je povinný, je-li element uveden) |
| maska | `^[1-9]\d{0,2}$` |
| délka | 1 až 3 znaky |
| XSD typ | `tns:KodVarovType` (`xs:int`, `minInclusive` 1, `maxInclusive` 999) |
| příklady | `1`, `3` |

Obsazené kódy: [[eet-kod-varovani-1]], [[eet-kod-varovani-2]], [[eet-kod-varovani-4]], [[eet-kod-varovani-5]], [[eet-kod-varovani-6]], [[eet-kod-varovani-7]]. Podmínka výskytu varování je vázána na [[eet-pravidlo-propustne-kontroly]].

Celý číselník drží [[eet-pravidlo-cislenik-varovani]].
