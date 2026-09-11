---
id: eet-provoz-verze-a-soubeh
title: Implementovaná verze rozhraní a souběh verzí
type: pravidlo
domain: [provoz]
status: platne
sources: [pristup-playground, pristup-produkce]
spec_ref: ["pristup-playground v1.1 kap. 2.2, 2.3", "pristup-produkce v1.1 kap. 2.2, 2.3"]
rests_on: [eet-pravidlo-cislovani-verzi]
tags: [verze, rozhrani, provoz, tlp-amber]
aka: ["jaka verze rozhrani bezi na playgroundu", "podporuje produkce soubezne starou verzi rozhrani"]
created: 2026-09-11
updated: 2026-09-11
---

# Implementovaná verze rozhraní a souběh verzí

> "Implementovaná verze rozhraní aktuální k momentu zveřejnění tohoto dokumentu je verze 4.1."
> - [[pristup-playground]] v1.1, kap. 2.2

> "Implementovaná verze rozhraní aktuální k momentu zveřejnění tohoto dokumentu je verze 4.1."
> - [[pristup-produkce]] v1.1, kap. 2.2

Obě prostředí tedy implementují k datu zveřejnění příslušného dokumentu verzi rozhraní 4.1. Informace o nasazení a platnosti nových verzí jsou podle obou dokumentů zveřejňovány na https://eet.gov.cz.

> "Souběh nové a předchozí verze rozhraní je na Playgroundu podporován pro zajištění podpory hladkého přechodu klientů na novou hlavní verzi rozhraní. To se týká všech verzí od 4.0 výš."
> - [[pristup-playground]] v1.1, kap. 2.3

> "Souběh nové a předchozí verze rozhraní je na produkčním prostředí podporován pro zajištění podpory hladkého přechodu klientů na novou hlavní verzi rozhraní. To se týká verzí od 4.0 výš."
> - [[pristup-produkce]] v1.1, kap. 2.3

| Prostředí | Implementovaná verze | Souběh podporován od verze |
|---|---|---|
| playground | 4.1 | 4.0 |
| produkce | 4.1 | 4.0 |

Souběh se v obou prostředích týká vždy jen aktuální a bezprostředně předchozí hlavní verze rozhraní. Číslování a pojem hlavní verze drží [[eet-pravidlo-cislovani-verzi]].
