---
id: eet-pojem-datova-zprava-evidovane-trzby
title: datová zpráva evidované tržby
type: pojem
domain: [rozhrani]
status: platne
sources: [popis-rozhrani]
spec_ref: ["popis-rozhrani v1.2 kap. 1.3"]
rests_on: [eet-pojem-e-trzba]
tags: [pojmy, soap, datova-zprava]
aka: ["co posila pokladni zarizeni", "rozdil zprava a trzba"]
created: 2026-09-11
updated: 2026-09-11
---

# datová zpráva evidované tržby

> "Datová struktura v zákonem požadovaném XML formátu, která obsahuje e-tržbu a další potřebné údaje technického charakteru."
> - [[popis-rozhrani]] v1.2, kap. 1.3

Tatáž kapitola k tomu dodává, že jde o kompletní XML zprávu obsahující údaje popsané standardy SOAP, WSDL a WS-Security, že ji pokladní zařízení zasílá na společné technické zařízení správce daně a že každé evidované tržbě odpovídá právě jedna taková zpráva, pokud nejde o opakované zaslání téže evidované tržby.

Obsahuje [[eet-pojem-e-trzba]], je podepsána podle [[eet-pravidlo-podpis-datove-zpravy]] a její celková velikost je omezena kritickou kontrolou - viz [[eet-pravidlo-kriticke-kontroly]].
