---
id: eet-pravidlo-chybova-zprava
title: Struktura chybové datové zprávy
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.5", "popis-rozhrani v1.2 kap. 3.5.1", "popis-rozhrani v1.2 kap. 3.5.2", "xml-schema v4.1 OdpovedType"]
rests_on: [eet-pojem-datova-zprava-evidovane-trzby]
tags: [chyba, struktura, format]
aka: ["z jakych elementu se sklada chybova zprava", "je chybova zprava podepsana"]
created: 2026-09-11
updated: 2026-09-11
---

# Struktura chybové datové zprávy

> "XML element <Varovani> s atributem kod_varov se v chybové zprávě může vícekrát opakovat."
> - [[popis-rozhrani]] v1.2, kap. 3.5.2

Podle kap. 3.5 jsou data chybové datové zprávy uložena v XML elementu `<SOAP Body>` jako element `<Odpoved>`, s vnořenými datovými oblastmi `<Hlavicka>` a `<Chyba>`. `<SOAP Header>` v tomto případě neobsahuje ani XML signature, ani certifikát. Element `<Varovani>` je podle kap. 3.5.2 relevantní v chybové zprávě pouze pro chybový kód 0 - viz [[eet-kod-chyba-0]].

| Položka | Datová oblast | Povinná | XML jméno |
|---|---|---|---|
| UUID zprávy | `<Hlavicka>` | ne | `uuid_zpravy` |
| Datum a čas odmítnutí zprávy | `<Hlavicka>` | ne | `dat_odmit` |
| Chybový kód | `<Chyba>` | ano | `kod` |
| Textový popis chyby | `<Chyba>` | ano | hodnota elementu `Chyba` |
| Příznak neprodukčního prostředí | `<Chyba>` | ne | `test` |
| Kód varování | `<Varovani>` | ne | `kod_varov` |
| Textový popis varování | `<Varovani>` | ne | hodnota elementu `Varovani` |

Jednotlivé položky: [[eet-polozka-uuid-zpravy]], [[eet-polozka-dat-odmit]], [[eet-polozka-kod]], [[eet-polozka-test]], [[eet-polozka-kod-varov]]. Celý číselník chybových kódů a formát chybového kódu popisuje [[eet-pravidlo-cislenik-chyb]]. Potvrzovací provedení elementu `<Odpoved>` popisuje [[eet-pravidlo-potvrzovaci-zprava]].
