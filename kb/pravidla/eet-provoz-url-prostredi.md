---
id: eet-provoz-url-prostredi
title: URL a DNS jméno prostředí EET 2.0
type: pravidlo
domain: [provoz]
status: platne
sources: [pristup-playground, pristup-produkce]
spec_ref: ["pristup-playground v1.1 kap. 2.1", "pristup-produkce v1.1 kap. 2.1"]
rests_on: []
tags: [url, dns, provoz, tlp-amber]
aka: ["jaka je url adresa playgroundu", "jaka je url adresa produkce", "smim pouzivat ip adresu misto dns jmena"]
created: 2026-09-11
updated: 2026-09-11
---

# URL a DNS jméno prostředí EET 2.0

> "PG je přístupný na URL
> https://pg.trzbyeet.gov.cz/eet/services/EETServiceSOAP/v4
> resp. na URL odpovídajícím aktuální verzi rozhraní."
> - [[pristup-playground]] v1.1, kap. 2.1

> "Produkční prostředí je přístupné na URL
> https://trzbyeet.gov.cz/eet/services/EETServiceSOAP/v4
> resp. na URL odpovídajícím aktuální verzi rozhraní."
> - [[pristup-produkce]] v1.1, kap. 2.1

| Prostředí | URL | DNS jméno |
|---|---|---|
| playground | `https://pg.trzbyeet.gov.cz/eet/services/EETServiceSOAP/v4` | pg.trzbyeet.gov.cz |
| produkce | `https://trzbyeet.gov.cz/eet/services/EETServiceSOAP/v4` | trzbyeet.gov.cz |

Playground k tomu doplňuje:

> "IP adresa odpovídající DNS jménu pg.trzbyeet.gov.cz se v průběhu provozu PG změní, použití IP adresy v URL pro přístup k PG není doporučeno."
> - [[pristup-playground]] v1.1, kap. 2.1

Produkce k tomu doplňuje:

> "Mechanismy vysoké dostupnosti produkčního prostředí využívají DNS balancování. DNS záznam vrací několik IP adres podle aktuální dostupnosti částí produkčního prostředí. Implementace pokladních zařízení musí používat DNS jméno a respektovat TTL DNS záznamů. Při navazování nových spojení musí pokladní zařízení vždy znovu pokládat dotaz na DNS záznam."
> - [[pristup-produkce]] v1.1, kap. 2.1

Obě prostředí tedy shodně vylučují spoléhání na pevnou IP adresu místo DNS jména. Produkční prostředí navíc výslovně vyžaduje respektování TTL DNS záznamu a jeho opětovné rozlišení (resolve) při každém novém spojení.

Implementovaná verze rozhraní, která je součástí URL, je popsána v [[eet-provoz-verze-a-soubeh]].
