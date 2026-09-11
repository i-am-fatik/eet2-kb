---
id: eet-pravidlo-jedna-platba-vice-forem
title: Jedna platba více formami a částečně vzdálená úhrada
type: pravidlo
domain: [rozhrani]
status: doplnkove
sources: [seminar-vyvojari]
spec_ref: ["seminar-vyvojari, snímek 62 - Specifické případy: Tržba uskutečněná kombinací různých způsobů plateb", "seminar-vyvojari, snímek 63 - Specifické případy: Faktura hrazená částečně kontaktní platbou v provozovně a částečně vzdáleně převodem na účet"]
rests_on: [eet-pojem-kontaktni-platba]
tags: [kombinovana-platba, faktura, castka]
aka: ["zakaznik plati stravenkou a kartou", "kolik datovych zprav poslat pri kombinovane platbe", "eviduje se doplatek prevodem na ucet"]
created: 2026-09-11
updated: 2026-09-11
---

# Jedna platba více formami a částečně vzdálená úhrada

> "Pokud se jedná o „jednu“ platbu pouze dvojí formou, pak je zaevidována v jedné datové větě celková částka tržby 1 000 Kč."
> - [[seminar-vyvojari]], snímek 62 - Tržba uskutečněná kombinací různých způsobů plateb

Příklad snímku 62: celková cena 1 000 Kč, zákazník v rámci kontaktní platby uhradí 200 Kč stravenkou a 800 Kč doplatí kartou.

Snímek 63 řeší případ, kdy část úhrady kontaktní platbou není. Příklad: celková cena 1 000 Kč, zákazník v rámci kontaktní platby uhradí 200 Kč kartou a 800 Kč zaplatí druhý den z domu bankovním převodem.

| Část úhrady | Evidence |
|---|---|
| 200 Kč kartou v provozovně | Povinnost evidovat se bude vztahovat pouze na první platbu ve výši 200 Kč. |
| 800 Kč převodem z domu druhý den | Doplatek 800 Kč být zaevidován nemusí, nejedná se o kontaktní platbu. |

> "Nezáleží na formě úhrady uvedené na faktuře, ale na skutečném způsobu realizace úhrady."
> - [[seminar-vyvojari]], snímek 63 - Faktura hrazená částečně kontaktní platbou v provozovně a částečně vzdáleně převodem na účet

Rozhodující je tedy, zda daná část úhrady splňuje [[eet-pojem-kontaktni-platba]], nikoli členění na faktuře. Kolik zpráv se posílá, když jedna platba zakládá rozhodný příjem více poplatníkům, drží [[eet-pravidlo-zastoupeni-a-povereni]].
