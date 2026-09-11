---
id: eet-cert-testovaci-playground
title: Testovací pokladní certifikáty playgroundu
type: pravidlo
domain: [certifikaty]
status: platne
sources: [pristup-playground, caeet-playground-certifikaty]
spec_ref: ["pristup-playground v1.1, kap. 3.1.1", "pristup-playground v1.1, kap. 3.1.6 až 3.1.8"]
rests_on: [eet-cert-profil-pokladniho-certifikatu, eet-cert-hierarchie-ca]
tags: [playground, testovaci-certifikaty, eic, pkcs12, tlp-amber]
aka: ["jake eic mam pouzit na playgroundu", "ktery testovaci certifikat je pro fyzickou osobu", "jsou testovaci certifikaty sdilene"]
created: 2026-09-11
updated: 2026-09-11
---

# Testovací pokladní certifikáty playgroundu

> "Sada testovacích certifikátů obsahuje tři certifikáty vydané na vyhrazená testovací EIČ. Tyto certifikáty jsou sdílené pro všechny testující subjekty."
> - [[pristup-playground]] v1.1, kap. 3.1.1

## Tři certifikáty sady

| Kapitola | Typ poplatníka | CN | Description | C | Publikovaný soubor |
|---|---|---|---|---|---|
| 3.1.6 | fyzická osoba s RČ | CZ8551015704 | fyzicka osoba | CZ | `CA_EET-Playground-CZ8551015704.p12` |
| 3.1.7 | právnická osoba s IČ | CZ00000019 | pravnicka osoba | CZ | `CA_EET-Playground-CZ00000019.p12` |
| 3.1.8 | poplatník s VČP | CZ683555118 | cislo platce | CZ | `CA_EET-Playground-CZ683555118.p12` |

Každý z těchto certifikátů je podle kap. 3.1.6 až 3.1.8 publikován i s privátním klíčem ve formátu PKCS#12/PFX.

## Vydavatel a profil

Vydavatelem je certifikát vydavatele pokladních certifikátů playgroundu `playground EETv2 NCA SubCA RSA MM/RRRR`, pod kořenovým certifikátem `playground EETv2 NCA Root CA RSA MM/RRRR`, oba popsané v [[eet-cert-hierarchie-ca]]. Profil koncového certifikátu na playgroundu drží [[eet-cert-profil-pokladniho-certifikatu]], včetně politiky `1.2.203.19122063.10.4.102.x.y (PREPROD/Playground)` a hodnoty userNotice „Toto je cert pouze pro testování EET2".

## Heslo k souborům PKCS#12

> "Heslo k PKCS#12 souboru bude 8 znaků, povinně obsahující velká a malá písmena a číslice — konkrétní heslo bude předáno spolu se souborem."
> - [[pristup-playground]] v1.1, kap. 3.1.6

Heslo samo do vaultu nepatří. Soubory sady včetně souboru s heslem eviduje zdrojová nota [[caeet-playground-certifikaty]].

Vyhrazená testovací EIČ z tabulky výše se dosazují do položky podle [[eet-polozka-eic-popl]]. Ochranu soukromých klíčů popisuje [[eet-cert-ochrana-soukromeho-klice]], neexistenci CRL na playgroundu [[eet-cert-crl]].
