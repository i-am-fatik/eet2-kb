---
id: eet-pravidlo-potvrzovaci-zprava
title: Struktura potvrzovací datové zprávy
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.4", "popis-rozhrani v1.2 kap. 3.4.1", "popis-rozhrani v1.2 kap. 3.4.2", "xml-schema v4.1 OdpovedType"]
rests_on: [eet-pojem-potvrzovaci-datova-zprava]
tags: [potvrzeni, struktura, format]
aka: ["z jakych elementu se sklada potvrzeni", "kolikrat se muze opakovat varovani v potvrzeni"]
created: 2026-09-11
updated: 2026-09-11
---

# Struktura potvrzovací datové zprávy

> "V případě, že nastane jedna či více propustných chyb (viz odst. 2.2.4 Propustné kontroly (propustné chyby)), je potvrzovací datová zpráva doplněna o textová varování a příslušné číselné kódy varování."
> - [[popis-rozhrani]] v1.2, kap. 3.4

Podle kap. 3.4 je vlastní potvrzení uloženo v XML elementu `<SOAP Body>` jako element `<Odpoved>`, s vnořenými datovými oblastmi `<Hlavicka>` a `<Potvrzeni>`. V `<SOAP Header>` je uložena XML signature a certifikát společného technického zařízení správce daně. Podle kap. 3.4.1 může být nepovinný element `<Varovani>` uveden vícekrát pro různá varování. XSD schéma typu `tns:OdpovedType` toto opakování omezuje na `minOccurs="0"` a `maxOccurs="10"`.

| Položka | Datová oblast | Povinná | XML jméno |
|---|---|---|---|
| UUID zprávy | `<Hlavicka>` | ano | `uuid_zpravy` |
| Datum a čas přijetí zprávy | `<Hlavicka>` | ano | `dat_prij` |
| Potvrzovací kód | `<Potvrzeni>` | ano | `pok` |
| Příznak neprodukčního prostředí | `<Potvrzeni>` | ne | `test` |
| Kód varování | `<Varovani>` | ne | `kod_varov` |
| Textový popis varování | `<Varovani>` | ne | hodnota elementu `Varovani` |

Podle kap. 3.4.2 se element `<Varovani>` s atributem `kod_varov` může v potvrzovací zprávě vícekrát opakovat.

Jednotlivé položky: [[eet-polozka-uuid-zpravy]], [[eet-polozka-dat-prij]], [[eet-polozka-pok]], [[eet-polozka-test]], [[eet-polozka-kod-varov]]. Podmínku výskytu varování určují [[eet-pravidlo-propustne-kontroly]]. Podpis potvrzovací zprávy popisuje [[eet-pravidlo-podpis-potvrzovacich-zprav]]. Varianty odpovědi podle módu odesílání, validity zprávy a cílového prostředí popisuje [[eet-pravidlo-mody-odesilani]]. Chybové provedení elementu `<Odpoved>` popisuje [[eet-pravidlo-chybova-zprava]].
