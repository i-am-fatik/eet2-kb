---
id: eet-pravidlo-vypustene-polozky-eet-1
title: Položky vypuštěné proti předchozímu systému EET
type: pravidlo
domain: [rozhrani]
status: doplnkove
sources: [seminar-vyvojari]
spec_ref: ["seminar-vyvojari, snímek 22 - Rozsah zasílaných údajů o evidované tržbě", "seminar-vyvojari, snímek 19 - Rozsah zasílaných údajů o evidované tržbě"]
rests_on: [eet-pojem-evidencni-povinnost]
tags: [bkp, pkp, dph, rezim, migrace]
aka: ["mam jeste pocitat bkp nebo pkp", "kam zmizelo bkp", "posila se v eet 2.0 dph", "je jeste zjednoduseny rezim", "co se zmenilo proti stare eet"]
created: 2026-09-11
updated: 2026-09-11
---

# Položky vypuštěné proti předchozímu systému EET

> "Vypuštění BKP, příznaku pro běžný/zjednodušený režim a položek DPH."
> - [[seminar-vyvojari]], snímek 22 - Rozsah zasílaných údajů o evidované tržbě

Věta stojí jako závěrečný řádek snímku, který vyjmenovává povinné položky ve vybraných případech.

| Vypuštěno | Poznámka |
|---|---|
| BKP | bezpečnostní kód poplatníka |
| příznak pro běžný/zjednodušený režim | prezentace nezná jiný režim odesílání než ten podle snímku 17 |
| položky DPH | snímek 60 k tomu u slev dodává: "Neřeší se DPH." |

K PKP prezentace neříká nic. Nezmiňuje jej ani jako vypuštěný, ani jako zachovaný. Výčty zasílaných údajů na snímcích 19 a 22 ani datový model na snímku 46 žádnou položku PKP, BKP, DPH ani příznak režimu neobsahují.

Co zprávu identifikuje a jak se pozná táž tržba, drží nyní [[eet-pravidlo-jednoznacny-kod-trzby]] a [[eet-polozka-uuid-zpravy]]. Úplný rozsah zasílaných údajů drží [[eet-pojem-evidencni-povinnost]], strojový popis položek [[popis-rozhrani]].

Zproštění evidenční povinnosti, které v EET 2.0 nahrazuje volbu režimu, popisuje [[eet-pravidlo-vyjimky-z-evidence]]. Ověřovací mód odesílání, který se zjednodušeným režimem nesouvisí, drží [[eet-pravidlo-mody-odesilani]].
