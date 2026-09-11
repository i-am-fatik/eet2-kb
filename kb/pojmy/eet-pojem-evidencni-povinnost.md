---
id: eet-pojem-evidencni-povinnost
title: Evidenční povinnost - obsah a okamžik splnění
type: pojem
domain: [rozhrani]
status: doplnkove
sources: [seminar-vyvojari]
spec_ref: ["seminar-vyvojari, snímek 17 - Obsah evidenční povinnosti", "seminar-vyvojari, snímek 18 - Formát a datová struktura", "seminar-vyvojari, snímek 19 - Rozsah zasílaných údajů o evidované tržbě", "seminar-vyvojari, snímek 22 - Rozsah zasílaných údajů o evidované tržbě"]
rests_on: [eet-pojem-evidovana-trzba, eet-pojem-datova-zprava-evidovane-trzby]
tags: [evidencni-povinnost, lhuty, rozsah-udaju]
aka: ["kdy nejpozdeji musim trzbu odeslat", "co znamena evidovat trzbu", "jake udaje se povinne zasilaji"]
created: 2026-09-11
updated: 2026-09-11
---

# Evidenční povinnost - obsah a okamžik splnění

> "Poplatník je povinen evidovat tržbu zasláním údajů o této evidované tržbě správci daně datovou zprávou autentizovanou certifikátem pro evidenci tržeb nejpozději při jejím uskutečnění, tj. nejpozději při: a) přijetí evidované tržby, nebo b) vydání příkazu k jejímu provedení, pokud byl tento příkaz vydán dříve."
> - [[seminar-vyvojari]], snímek 17 - Obsah evidenční povinnosti

Týž snímek uvádí mezní dobu odezvy, lhůtu po výpadku a možnost storna a oprav. Drží je [[eet-pravidlo-mezni-doba-odezvy]] a [[eet-pravidlo-storno-a-opravy]].

Snímek 18 vymezuje formu splnění: údaje lze zaslat pouze datovou zprávou, na společné technické zařízení určené správcem daně, ve formátu XML a datové struktuře určené a zveřejněné správcem daně způsobem umožňujícím dálkový přístup, která odpovídá zákonem požadovaným údajům o evidované tržbě.

> "Zaslání údajů o evidované tržbě není podáním a zaslané údaje nejsou písemností podle daňového řádu."
> - [[seminar-vyvojari]], snímek 18 - Formát a datová struktura

Rozsah zasílaných údajů podle snímků 19 a 22:

| Údaj | Kdy |
|---|---|
| Evidenční identifikační číslo poplatníka (EIČ) | povinně vždy |
| Označení evidenční jednotky, ve které je tržba uskutečněna | povinně vždy |
| Označení pokladního zařízení, na kterém je tržba evidována | povinně vždy |
| Pořadové číslo evidované tržby | povinně vždy |
| Datum a čas uskutečnění evidované tržby | povinně vždy |
| Celková částka evidované tržby uvedená v české měně | povinně vždy |
| Identifikace datové zprávy | povinně vždy |
| Celková částka plateb určených k následnému čerpání nebo zúčtování uvedená v české měně | povinně ve vybraných případech |
| Celková částka plateb, které jsou následným čerpáním nebo zúčtováním platby, uvedená v české měně | povinně ve vybraných případech |
| Evidenční identifikační číslo poplatníka, který pověřil evidováním tržby poplatníka, který tržbu eviduje, nebo informace, že evidovaná tržba plyne více poplatníkům | povinně ve vybraných případech |

Které položky prezentace naopak proti předchozímu systému vypouští, drží [[eet-pravidlo-vypustene-polozky-eet-1]]. Kdy jsou povinné položky čerpání a zúčtování, drží [[eet-pravidlo-nabiti-a-cerpani]]. Kdo zprávu podepisuje a čí EIČ v ní stojí při zastoupení, drží [[eet-pravidlo-zastoupeni-a-povereni]].

Strojový popis jednotlivých položek nese [[popis-rozhrani]], například [[eet-polozka-celk-trzba]] a [[eet-polozka-dat-trzby]].
