---
id: eet-cert-vydani
title: Vydání pokladního certifikátu na Obslužném portálu EET
type: pravidlo
domain: [certifikaty]
status: platne
sources: [caeet-certifikacni-politika, caeet-postupy-zadost, caeet-napoveda-aplikace, pristup-produkce]
spec_ref: ["caeet-certifikacni-politika v1, kap. Vydávání pokladních certifikátů na Obslužném portálu EET", "caeet-certifikacni-politika v1, kap. Specifikace pokladních certifikátů", "caeet-postupy-zadost v2, kap. Postup vytvoření žádosti o pokladní certifikát", "caeet-napoveda-aplikace v2, kap. Vydání nového pokladního certifikátu", "pristup-produkce v1.1, kap. 3.1"]
rests_on: [eet-cert-profil-pokladniho-certifikatu]
tags: [vydani, obsluzny-portal, pkcs12, dis-plus, tlp-amber]
aka: ["jak ziskam prvni pokladni certifikat", "kde se generuje klicovy par", "jak dlouho je p12 ke stazeni", "kolik certifikatu smim mit"]
created: 2026-09-11
updated: 2026-09-11
---

# Vydání pokladního certifikátu na Obslužném portálu EET

> "Podmínkou vydání pokladního certifikátu je přihlášení poplatníka do aplikace Daňová informační schránka plus, na stránkách portálu MOJE daně (https://mojedane.gov.cz)."
> - [[caeet-certifikacni-politika]] v1, kap. Vydávání pokladních certifikátů na Obslužném portálu EET

> "Pokladní certifikát získá poplatník na Obslužném portálu EET v aplikaci Správa pokladních certifikátů EET. Do Obslužného portálu EET lze vstoupit pouze z portálu MOJE daně resp. přihlašovací stránky aplikace Daňová informační schránka plus (DIS+) https://mojedane.gov.cz/pmd/home/prihlaseni-do-dis."
> - [[caeet-postupy-zadost]] v2, kap. Úvod

> "Ověření identity žadatelů o pokladní certifikát probíhá přes portál MOJE daně (aplikaci DIS+). CA EET identitu žadatele zabezpečeně získává ze systému DIS+."
> - [[caeet-certifikacni-politika]] v1, kap. Vydávání pokladních certifikátů na Obslužném portálu EET

## Generování klíčového páru

> "Pokladní certifikát včetně páru RSA klíčů se generuje bezpečným způsobem v systému CA EET, tedy zcela mimo pokladní systém a prohlížeč."
> - [[caeet-postupy-zadost]] v2, kap. Postup vytvoření žádosti o pokladní certifikát

> "Generování páru klíčů probíhá zabezpečeně v prostředí CA EET. Pro vydání pokladního certifikátu jsou použity pouze unikátní veřejné klíče."
> - [[caeet-certifikacni-politika]] v1, kap. Vydávání pokladních certifikátů na Obslužném portálu EET

> "Do prohlížeče ani na zařízení (PC, smart zařízení), kde prohlížeč běží, není potřeba pro vytvoření žádosti o pokladní certifikát instalovat žádné dodatečné komponenty."
> - [[caeet-postupy-zadost]] v2, kap. Postup vytvoření žádosti o pokladní certifikát

## Údaje žádosti

| Položka žádosti | Povaha | Zdroj hodnoty |
|---|---|---|
| E-mail pro upozornění | nepovinná, předvyplněná, adresu nelze zadat dodatečně | zadává poplatník |
| Označení certifikátu | nepovinná, až 64 znaků, uvedeno v pokladním certifikátu | zadává poplatník |
| EIČ poplatníka | povinné | získané v rámci autentizace do DIS+ |

> "Jedinou neověřovanou informací v pokladním certifikátu je nepovinná poznámka."
> - [[caeet-certifikacni-politika]] v1, kap. Vydávání pokladních certifikátů na Obslužném portálu EET

Zadaná e-mail adresa je podle [[caeet-napoveda-aplikace]] v2, kap. Postup vydání pokladního certifikátu použita k zaslání notifikace o blížícím se konci platnosti pokladního certifikátu a notifikace připravenosti vydaného pokladního certifikátu ke stažení.

> "Obvykle je pokladní certifikát vydán do 30 sekund."
> - [[caeet-napoveda-aplikace]] v2, kap. Postup vydání pokladního certifikátu

Trvá-li vydání déle než 30 sekund, zobrazí aplikace podle kap. Vydání pokladního certifikátu se zpožděním informaci „Požadavek čeká ve frontě“ a požadavek je v části Vaše certifikáty ve stavu Připravuje se, viz [[eet-cert-stavy-v-portalu]].

## Předání PKCS#12

> "Žadatel obdrží pár klíčů spolu s pokladním certifikátem ve formátu PKCS#12 jako zabezpečený soubor s příponou .p12."
> - [[caeet-certifikacni-politika]] v1, kap. Vydávání pokladních certifikátů na Obslužném portálu EET

> "Soubor .p12 obsahuje i certifikáty z certifikační cesty tj. kořenový certifikát CA a mezilehlý certifikát."
> - [[caeet-postupy-zadost]] v2, kap. Postup vytvoření žádosti o pokladní certifikát

> "Soubor .p12 je proti zneužití chráněn heslem, které poplatník získá taktéž v aplikaci Správa pokladních certifikátů EET."
> - [[caeet-postupy-zadost]] v2, kap. Postup vytvoření žádosti o pokladní certifikát

> "Soubor .p12 bude na v aplikaci Správa pokladních certifikátů EET nabízen ke stažení, dokud poplatník nepotvrdí jeho stažení, nejdéle však 30 dní od vydání pokladního certifikátu, Po stažení nebo uplynutí lhůty na stažení bude soubor .p12 v systému zrušen a nebude dále k dispozici."
> - [[caeet-postupy-zadost]] v2, kap. Postup vytvoření žádosti o pokladní certifikát

| Parametr předání | Hodnota |
|---|---|
| formát | PKCS#12, soubor s příponou .p12 |
| obsah | pokladní certifikát, soukromý klíč, certifikáty z certifikační cesty |
| ochrana | heslo získané v aplikaci Správa pokladních certifikátů EET |
| lhůta ke stažení | do potvrzení stažení, nejdéle 30 dní od vydání |
| po lhůtě nebo po stažení | soubor .p12 je v systému zrušen |

Stažení poplatník v aplikaci potvrzuje zatržením pole „Potvrzuji, že mám heslo i pokladní certifikát bezpečně uložené“ a tlačítkem Dokončit, po němž je certifikát zobrazen ve stavu Platný ([[caeet-napoveda-aplikace]] v2, kap. Postup stažení vydaného pokladního certifikátu). Zavře-li se prohlížeč před dokončením stažení, je certifikát znovu dostupný tlačítkem Stáhnout a dokončit.

## Počet certifikátů a cena

> "Pro každého poplatníka je možné vydat libovolný počet pokladních certifikátů."
> - [[caeet-certifikacni-politika]] v1, kap. Specifikace pokladních certifikátů

> "V souladu se ZoET může každý poplatník požádat o jeden nebo více pokladních certifikátů. Rozhodnutí o počtu certifikátů a jejich přiřazení pokladnám je plně v kompetenci poplatníka."
> - [[pristup-produkce]] v1.1, kap. 3.1

> "Vydávání pokladních certifikátů pro evidenci tržeb je pro poplatníky bezplatné."
> - [[caeet-certifikacni-politika]] v1, kap. Vydávání pokladních certifikátů na Obslužném portálu EET

Profil vydaného certifikátu drží [[eet-cert-profil-pokladniho-certifikatu]], ochranu předaného klíče [[eet-cert-ochrana-soukromeho-klice]], obnovu [[eet-cert-obnova-automatizovana]] a zneplatnění [[eet-cert-zneplatneni]].
