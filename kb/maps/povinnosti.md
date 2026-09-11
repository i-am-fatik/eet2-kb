---
id: povinnosti
title: Evidenční povinnost - rozcestník
type: moc
domain: [rozhrani]
status: doplnkove
updated: 2026-09-11
---

# Evidenční povinnost

Mapa zákonné a provozní vrstvy, kterou [[popis-rozhrani]] nepokrývá. Jediným zdrojem je [[seminar-vyvojari]], proto všechny noty nesou `status: doplnkove`. Technické rozhraní má mapu [[rozhrani]].

## Co se eviduje

- [[eet-pojem-evidovana-trzba]] - tři podmínky
- [[eet-pojem-kontaktni-platba]] - formální náležitost
- [[eet-pojem-evidencni-povinnost]] - obsah a okamžik splnění
- [[eet-pravidlo-vyjimky-z-evidence]] - výjimky a zproštění

## Kdo eviduje a kde

- [[eet-pojem-evidencni-identifikacni-cislo]] - z čeho EIČ vzniká
- [[eet-pojem-evidencni-jednotka]] - jednotka a její označení
- [[eet-pravidlo-oznamovaci-povinnost]] - oznámení evidenčních jednotek
- [[eet-pravidlo-zastoupeni-a-povereni]] - přímé a nepřímé zastoupení, pověření
- [[eet-pojem-moje-eet]] - aplikace správce daně místo vlastního systému

## Jaká částka

- [[eet-pravidlo-zaokrouhlovani]] - eviduje se skutečně přijatá částka
- [[eet-pravidlo-sleva-zaloha-a-kauce]] - sleva, záloha a doplatek, kauce
- [[eet-pravidlo-jedna-platba-vice-forem]] - platba více formami
- [[eet-pravidlo-spropitne]] - kdy je spropitné tržbou
- [[eet-pravidlo-nabiti-a-cerpani]] - položky čerpání a zúčtování

## Kdy a co když se nepovede

- [[eet-pravidlo-mezni-doba-odezvy]] - 2 sekundy, 48 hodin, co se v opakované zprávě mění
- [[eet-pravidlo-storno-a-opravy]] - záporná částka, bez vazby na původní tržbu

## Termíny

- [[eet-pravidlo-harmonogram-eet-2]] - data spuštění playgroundu, CA EET, portálu a produkce

## Proti EET 1.0

- [[eet-pravidlo-vypustene-polozky-eet-1]] - BKP, příznak režimu a položky DPH vypuštěny
