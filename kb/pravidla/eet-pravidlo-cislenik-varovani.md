---
id: eet-pravidlo-cislenik-varovani
title: Číselník kódů varování
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.4.4", "popis-rozhrani v1.2 kap. 3.4.1", "xml-schema v4.1 KodVarovType"]
rests_on: [eet-pravidlo-propustne-kontroly]
tags: [varovani, cislenik, propustne-chyby]
aka: ["jaka varovani muze system vratit", "muze prijit vic varovani najednou", "co znamena kod varovani 3"]
created: 2026-09-11
updated: 2026-09-11
---

# Číselník kódů varování

> "Nepovinný XML element `<Varovani>` může být uveden vícekrát pro různá varování."
> - [[popis-rozhrani]] v1.2, kap. 3.4.1

Obsazené kódy podle kap. 3.4.4. Texty jsou uvedeny bez diakritiky, jak je uvádí zdroj.

| Kód | Text varování |
|---|---|
| 1 | EIC poplatnika v datove zprave se neshoduje s EIC v certifikatu |
| 2 | Chybny format EIC poverujiciho poplatnika |
| 3 | bylo používáno před verzí datové zprávy 4 |
| 4 | Datum a cas uskutecneni trzby je novejsi nez datum a cas prijeti zpravy |
| 5 | Datum a cas uskutecneni trzby je vyrazne v minulosti |
| 6 | id_jednotky neodpovida formatem pridelenemu c. evidencni jednotky |
| 7 | EIC poverujiciho se shoduje s EIC poplatnika |
| 8 - 999 | rezervováno pro budoucí použití |

> "Texty varování jsou v souladu s kódováním znaků ve všech datových zprávách EET uváděny bez diakritiky."
> - [[popis-rozhrani]] v1.2, kap. 3.4.4

Rozsah kódu je podle [[xml-schema]] v typu `tns:KodVarovType` omezen na celá čísla 1 až 999. Formát samotného atributu drží [[eet-polozka-kod-varov]], textový popis varování kap. 3.4.2.6.

Jednotlivé kódy: [[eet-kod-varovani-1]], [[eet-kod-varovani-2]], [[eet-kod-varovani-4]], [[eet-kod-varovani-5]], [[eet-kod-varovani-6]], [[eet-kod-varovani-7]].

Varování vznikají z kontrol, které POK nezadrží - viz [[eet-pravidlo-propustne-kontroly]]. Do potvrzovací zprávy se zařazují podle [[eet-pravidlo-potvrzovaci-zprava]], do chybové odpovědi pouze u kódu 0 v ověřovacím módu - viz [[eet-pravidlo-chybova-zprava]] a [[eet-kod-chyba-0]]. Protějškem tohoto číselníku je [[eet-pravidlo-cislenik-chyb]].
