---
id: eet-cert-profil-pokladniho-certifikatu
title: Profil pokladního certifikátu
type: pravidlo
domain: [certifikaty]
status: platne
sources: [caeet-certifikacni-politika, pristup-produkce, pristup-playground]
spec_ref: ["caeet-certifikacni-politika v1, kap. Specifikace pokladních certifikátů", "pristup-produkce v1.1, kap. 3.1.1 a 3.1.2", "pristup-playground v1.1, kap. 3.1.5"]
rests_on: [eet-cert-hierarchie-ca, eet-polozka-eic-popl]
tags: [pokladni-certifikat, profil, x509, keyusage, oid, tlp-amber]
aka: ["co je v subjectu pokladniho certifikatu", "jak dlouho plati pokladni certifikat", "jaky je oid politiky pokladniho certifikatu"]
created: 2026-09-11
updated: 2026-09-11
---

# Profil pokladního certifikátu

> "EIČ (resp.: DIČ/RČ/VČP) je jediným povinným identifikátorem vlastníka pokladního certifikátu."
> - [[caeet-certifikacni-politika]] v1, kap. Specifikace pokladních certifikátů

> "EIČ poplatníka je obsahem atributu commonName (zkráceně CN) v poli subject."
> - [[caeet-certifikacni-politika]] v1, kap. Specifikace pokladních certifikátů

> "Pokladní certifikáty jednoho poplatníka se odlišují pouze sériovým číslem a nepovinnou poznámkou v atributu description. Poznámka nehraje žádnou roli při vlastní evidenci tržeb, slouží pouze poplatníkovi pro usnadnění správy pokladních certifikátů."
> - [[caeet-certifikacni-politika]] v1, kap. Specifikace pokladních certifikátů

V poznámce lze podle téže kapitoly použít české znaky - text v kódování UTF8. Poplatník může mít více certifikátů se stejným polem subject.

## Pole certifikátu

| Pole | Obsah |
|---|---|
| version | v3 (0x2) |
| serialNumber | jedinečné sériové číslo pokladního certifikátu |
| signatureAlgorithm | sha256withRSAEncryption |
| issuer | stejné atributy a hodnoty jako v poli subject vydavatele pokladního certifikátu |
| validity notBefore | počátek platnosti pokladního certifikátu (UTC) |
| validity notAfter | notBefore + 366 dnů |
| subject commonName | EIČ (resp.: DIČ/RČ/VČP) poplatníka |
| subject description | poznámka zadaná poplatníkem, max 64 znaků |
| subject countryName | CZ |
| subjectPublicKeyInfo algorithm | rsaEncryption |
| subjectPublicKey | 2048 bitů |
| extensions | rozšíření pokladního certifikátu |
| signature | digitální podpis vydavatele pokladního certifikátu (vydávající mezilehlé CA) |

## Rozšíření

| Rozšíření | Obsah |
|---|---|
| certificatePolicies / policyInformation / policyIdentifier | 1.2.203.19122063.10.1.102.x.y, kde x.y je verze.subverze politiky |
| certificatePolicies / policyQualifiers | userNotice |
| keyUsage | digitalSignature, nonRepudiation |
| subjectKeyIdentifier | hash veřejného klíče (subjectPublicKey) v tomto certifikátu |
| authorityKeyIdentifier / keyIdentifier | hash veřejného klíče vydávající mezilehlé CA |

> "Koncové certifikáty mají nový profil certifikátu, např. v certifikátu nejsou uváděny distribuční body CRL."
> - [[caeet-certifikacni-politika]] v1, kap. Úvod

## Produkce

Kap. 3.1.2 uvádí profil takto:

| Položka | Hodnota |
|---|---|
| CN | EIČ poplatníka |
| description (volitelně) | poznámka zadaná poplatníkem, max. 64 znaků |
| C | CZ |
| KeyUsage (kritické) | digitalSignature, nonRepudiation |
| Politika (OID) | 1.2.203.19122063.10.1.102.x.y (PROD) |

Kap. 3.1.1 téhož dokumentu k tomu doplňuje řádek `Pokladní certifikát: RSA 2048, platnost 366 dnů`.

## Playground

| Položka | Hodnota (kap. 3.1.5) |
|---|---|
| CN | EIČ poplatníka |
| description (volitelně) | poznámka zadaná poplatníkem, max. 64 znaků |
| C | CZ |
| Algoritmus klíče | RSA 2048 bitů |
| Podpisový algoritmus | sha256WithRSAEncryption |
| Platnost | 366 dnů |
| KeyUsage (kritické) | digitalSignature, nonRepudiation |
| Politika (OID) | 1.2.203.19122063.10.4.102.x.y (PREPROD/Playground) |
| userNotice | „Toto je cert pouze pro testování EET2" |

Vydavatele tohoto certifikátu popisuje [[eet-cert-hierarchie-ca]], jeho použití [[eet-cert-pouziti-pokladniho-certifikatu]], vydání [[eet-cert-vydani]] a obnovu [[eet-cert-obnova-automatizovana]]. Podpis klíčem tohoto certifikátu popisuje [[eet-pravidlo-podpis-datove-zpravy]].
