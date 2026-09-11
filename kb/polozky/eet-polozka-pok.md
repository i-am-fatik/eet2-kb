---
id: eet-polozka-pok
title: pok - potvrzovací kód
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.4.2.3", "xml-schema v4.1 PokType"]
rests_on: [eet-pojem-potvrzovaci-datova-zprava]
tags: [potvrzeni, pok, playground]
aka: ["proc konci pok na ff", "jak poznam testovaci pok"]
created: 2026-09-11
updated: 2026-09-11
---

# pok - potvrzovací kód

> "Pokud je POK přidělen v neprodukčním prostředí a nejedná se tedy o skutečný POK dle ZoET, potom mají poslední dva znaky POK speciální hodnotu ff (mnemotechnická pomůcka: Fiktivní Fiktivní=ff)"
> - [[popis-rozhrani]] v1.2, kap. 3.4.2.3

Podle téže kapitoly jde o kód generovaný společným technickým zařízením správce daně, unikátní pro každou potvrzovanou datovou zprávu evidované tržby. Formát je `uuid_prijem-Id_zarizeni`, kde `uuid_prijem` je UUID generované konkrétním zařízením transakčního systému EET, které zprávu přijalo, a `Id_zarizeni` je dvoumístné hexadecimální číslo tohoto zařízení.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Potvrzeni>`, atribut |
| povinná | ano |
| maska | `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}-[0-9a-fA-F]{2}$` |
| délka | 39 znaků |
| XSD typ | `tns:PokType` (pattern + `xs:length` 39) |
| příklad produkční | `b3a09b52-7c87-4014-a496-4c7a53cf9125-03` |
| příklad neprodukční | `b3a09b52-7c87-4014-a496-4c7a53cf9125-ff` |

Na rozdíl od [[eet-polozka-uuid-zpravy]] je v masce verze UUID pevně `4`.

Vedle `-ff` na konci POK nese neprodukční odpověď i atribut `test="true"` v elementu `<Potvrzeni>`.
