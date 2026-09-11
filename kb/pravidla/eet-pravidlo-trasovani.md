---
id: eet-pravidlo-trasovani
title: Pomocné technické informace pro trasování
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani]
spec_ref: ["popis-rozhrani v1.2 kap. 5.4"]
rests_on: [eet-pojem-potvrzovaci-datova-zprava]
tags: [trasovani, http-hlavicka, diagnostika]
aka: ["jak dohledat technickou chybu podle hlavicky", "jak dlouha je hodnota x-global-transaction-id", "kde se pouziva trasovaci hlavicka"]
created: 2026-09-11
updated: 2026-09-11
---

# Pomocné technické informace pro trasování

> "Společné technické zařízení bude v odpovědích protokolu HTTP (potvrzovací datová zpráva, chybová datová zpráva, některé technické chyby) uvádět následující HTTP hlavičku: X-Global-Transaction-Id: XXXX"
> - [[popis-rozhrani]] v1.2, kap. 5.4

> "Hodnota XXXX je řetězec alfanumerických a interpunkčních znaků."
> - [[popis-rozhrani]] v1.2, kap. 5.4

| Vlastnost | Hodnota |
|---|---|
| název hlavičky | `X-Global-Transaction-Id` |
| typ hodnoty | řetězec alfanumerických a interpunkčních znaků |
| typická délka | méně než 32 znaků |
| maximální délka | 64 znaků |
| kdy se uvádí | potvrzovací datová zpráva, chybová datová zpráva, některé technické chyby |
| unikátnost | unikátní pro každou zpracovávanou transakci |

Podle téže kapitoly je hodnota určena zejména pro dohledání technických či jiných chyb ve zpracování a její využití se předpokládá hlavně v neprodukčním prostředí (playground). Kapitola doporučuje výrobcům pokladních zařízení hodnotu logovat.

Ve www prohlížeči je tato hlavička zpřístupněna JavaScriptu skrz `Access-Control-Expose-Headers`, viz [[eet-pravidlo-sitove-standardy]].
