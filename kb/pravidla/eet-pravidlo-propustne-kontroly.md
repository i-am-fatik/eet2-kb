---
id: eet-pravidlo-propustne-kontroly
title: Propustné kontroly datové zprávy evidované tržby
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani]
spec_ref: ["popis-rozhrani v1.2 kap. 2.2.4"]
rests_on: [eet-pojem-datova-zprava-evidovane-trzby]
tags: [kontroly, varovani, validace]
aka: ["dostal jsem pok i s varovanim", "jak stara smi byt trzba", "od kdy lze posilat do produkce"]
created: 2026-09-11
updated: 2026-09-11
---

# Propustné kontroly datové zprávy evidované tržby

> "Pokud jakákoliv z propustných kontrol neprojde (a současně nenastane žádná kritická chyba), datová zpráva o evidované tržbě bude přijata a POK bude vydán, jako kdyby všechny kontroly prošly."
> - [[popis-rozhrani]] v1.2, kap. 2.2.4

Seznam propustných kontrol podle téže kapitoly:

| # | Kontrola | Varování |
|---|---|---|
| 1 | shodnost EIČ poplatníka v e-tržbě s EIČ v certifikátu, kterým byla zpráva podepsána | [[eet-kod-varovani-1]] |
| 2 | integrita EIČ pověřujícího poplatníka (pokud je uvedeno) | [[eet-kod-varovani-2]] |
| 3 | EIČ poplatníka je různé od EIČ pověřujícího poplatníka (pokud je uvedeno) | [[eet-kod-varovani-7]] |
| 4 | datum a čas uskutečnění tržby vůči datu a času přijetí zprávy | [[eet-kod-varovani-4]], [[eet-kod-varovani-5]] |
| 5 | tvar čísla evidenční jednotky | [[eet-kod-varovani-6]] |

Ke kontrole 4 kapitola uvádí meze: datum a čas uskutečnění tržby o více než 2 hodiny novější, nebo o více než 2 roky starší než datum a čas přijetí zprávy, bude označen jako chybný. Jako chybný bude označen i okamžik starší než minimální datum a čas uskutečnění tržby pro cílové prostředí.

Předpokládané minimální datumy a časy uskutečnění tržby dle cílových prostředí:

| Prostředí | Minimální datum |
|---|---|
| neprodukční prostředí (playground) verze 4 | 01.07.2026 |
| produkční prostředí před 01.01.2027 | 01.11.2026 |
| produkční prostředí | 01.01.2027 |

Ke kontrole 5 kapitola uvádí, že tvar musí odpovídat tvaru přidělovanému evidenčním jednotkám na portálu MOJE Daně v DIS+: musí mít alespoň dvě dekadické cifry a poslední pozice musí být jedna z hodnot 1, 2, 3 nebo 4.

Potvrzovací datová zpráva je při propustné chybě doplněna o textová varování a odpovídající číselné kódy. Stejným způsobem se varování zařazují do chybové odpovědi s kódem 0 v ověřovacím módu - viz [[eet-kod-chyba-0]].

Kontroly, které naopak POK zadrží, drží [[eet-pravidlo-kriticke-kontroly]].

Označení jednotlivých kontrol a jejich převod do GMT při porovnání data tržby drží [[eet-pravidlo-identifikatory-kontrol]].
