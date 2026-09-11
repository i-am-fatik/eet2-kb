---
id: eet-pravidlo-struktura-zprav
title: Přehled struktury datových zpráv
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani]
spec_ref: ["popis-rozhrani v1.2 kap. 3.2"]
rests_on: [eet-pojem-datova-zprava-evidovane-trzby, eet-pojem-potvrzovaci-datova-zprava]
tags: [struktura, soap, prehled]
aka: ["jsou vsechny tri zpravy podepsane", "jaky je spolecny format zprav eet", "co je v soap body"]
created: 2026-09-11
updated: 2026-09-11
---

# Přehled struktury datových zpráv

> "Všechny 3 datové zprávy (datová zpráva evidované tržby, potvrzovací datová zpráva, chybová datová zpráva) mají společný základní datový formát daný protokolem SOAP (Simple Object Access Protocol), tj. aplikační XML datové struktury jsou vloženy do tzv. těla SOAP obálky (<SOAP Body>)."
> - [[popis-rozhrani]] v1.2, kap. 3.2

> "Datová zpráva evidované tržby (viz Obr. 2) a potvrzovací datová zpráva jsou elektronicky podepsány (viz Obr. 3), chybová datová zpráva nikoliv (viz Obr. 4)."
> - [[popis-rozhrani]] v1.2, kap. 3.2

| Datová zpráva | Elektronicky podepsána | Obrázek v dokumentu |
|---|---|---|
| datová zpráva evidované tržby | Ano | Obr. 2 |
| potvrzovací datová zpráva | Ano | Obr. 3 |
| chybová datová zpráva | Ne | Obr. 4 |

Podpis datové zprávy evidované tržby popisuje [[eet-pravidlo-podpis-datove-zpravy]], podpis potvrzovací zprávy [[eet-pravidlo-podpis-potvrzovacich-zprav]]. Kódování jednotlivých datových položek uvnitř těchto struktur popisuje [[eet-pravidlo-kodovani-polozek]]. Konkrétní obsah datové zprávy evidované tržby drží [[eet-pojem-datova-zprava-evidovane-trzby]], potvrzovací datové zprávy [[eet-pojem-potvrzovaci-datova-zprava]].
