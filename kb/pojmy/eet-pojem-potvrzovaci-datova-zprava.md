---
id: eet-pojem-potvrzovaci-datova-zprava
title: potvrzovací datová zpráva
type: pojem
domain: [rozhrani]
status: platne
sources: [popis-rozhrani]
spec_ref: ["popis-rozhrani v1.2 kap. 1.3", "popis-rozhrani v1.2 kap. 3.4"]
rests_on: [eet-pojem-datova-zprava-evidovane-trzby]
tags: [pojmy, potvrzeni, pok]
aka: ["co vraci system eet", "kde najdu pok"]
created: 2026-09-11
updated: 2026-09-11
---

# potvrzovací datová zpráva

> "Datová struktura v zákonem definovaném tvaru dle tohoto dokumentu, která obsahuje potvrzovací kód (POK) a současně slouží jako potvrzení přijetí a formální správnosti zaslané datové zprávy evidované tržby."
> - [[popis-rozhrani]] v1.2, kap. 1.3

K pojmu "formální správnost" tamtéž patří poznámka pod tabulkou: rozumí se jí shoda s předepsanou datovou strukturou a splnění veřejně dokumentovaných kritických kontrol, nikoliv věcná správnost údajů o příslušné evidované tržbě.

V XML je to element `<Odpoved>` s vnořenými `<Hlavicka>` a `<Potvrzeni>`, případně s opakovanými elementy `<Varovani>`. Nese [[eet-polozka-pok]] a je elektronicky podepsána certifikátem společného technického zařízení správce daně.
