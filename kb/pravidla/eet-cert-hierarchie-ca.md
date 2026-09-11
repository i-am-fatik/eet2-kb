---
id: eet-cert-hierarchie-ca
title: Hierarchie certifikační autority CA EET
type: pravidlo
domain: [certifikaty]
status: platne
sources: [caeet-certifikacni-politika, pristup-produkce, pristup-playground, caeet-napoveda-aplikace]
spec_ref: ["caeet-certifikacni-politika v1, kap. Specifikace kořenového certifikátu CA EET (Root CA)", "caeet-certifikacni-politika v1, kap. Doba platnosti certifikátů", "pristup-produkce v1.1, kap. 3.1.1", "pristup-playground v1.1, kap. 3.1.1 až 3.1.3", "caeet-napoveda-aplikace v2, kap. Vysvětlení pojmů"]
rests_on: [eet-cert-pouziti-pokladniho-certifikatu]
tags: [ca, hierarchie, root-ca, subca, tlp-amber]
aka: ["kdo vydava pokladni certifikat", "jake certifikaty ca mam mit v uloziste", "jak hluboka je certifikacni cesta eet"]
created: 2026-09-11
updated: 2026-09-11
---

# Hierarchie certifikační autority CA EET

> "CA EET pro EET v 2.0 má hierarchickou strukturu, tj. certifikační cesta je tvořena kořenovým certifikátem, mezilehlým certifikátem a koncovým (pokladním) certifikátem."
> - [[caeet-certifikacni-politika]] v1, kap. Úvod

> "Certifikační autorita má dvouúrovňovou hierarchii:"
> - [[pristup-produkce]] v1.1, kap. 3.1.1

Stupně certifikační cesty v produkci podle téže kapitoly:

| Stupeň | Označení | Klíč | Platnost |
|---|---|---|---|
| Kořenová CA (Root CA EET) | EETv2 NCA Root CA RSA MM/RRRR | RSA 4096 | 10 let |
| Vydavatel pokladních certifikátů (SubCA) | EETv2 NCA SubCA RSA MM/RRRR | RSA 2048 | 4 roky |
| Pokladní certifikát | - | RSA 2048 | 366 dnů |

Anglická jazyková verze téhož dokumentu (`docs/EET_pristupove_provozni_informace_produk-3.pdf`, kap. 3.1.1) zapisuje týž vzor commonName jako `EETv2 NCA Root CA RSA MM/YYYY`, resp. `EETv2 NCA SubCA RSA MM/YYYY`. Vault obě znění zaznamenává, nerozhoduje mezi nimi.

Profil kořenového certifikátu podle certifikační politiky:

| Pole | Obsah |
|---|---|
| version | v3 (0x2) |
| serialNumber | jedinečné sériové číslo vydávaného certifikátu |
| signatureAlgorithm | sha256WithRSAEncryption |
| issuer commonName | EETv2 NCA Root CA RSA MM/RRRR |
| issuer organizationName | Správa státních služeb vytvářejících důvěru |
| issuer organizationIdentifier | NTRCZ-19122063 |
| issuer countryName | CZ |
| validity notBefore | počátek platnosti certifikátu |
| validity notAfter | notBefore + 10let |
| subject | stejný obsah jako issuer výše |
| subjectPublicKeyInfo algorithm | rsaEncryption |
| subjectPublicKey | veřejný klíč 4096 bitů |
| signature | digitální podpis vydavatele certifikátu (zde selfsign podpis kořenové CA) |
| certificatePolicies policyIdentifier | anyPolicy (2.5.29.32.0) |
| basicConstraints cA | True |
| keyUsage | keyCertSign, cRLSign |
| subjectKeyIdentifier | hash veřejného klíče (subjectPublicKey) v tomto certifikátu |

Doba platnosti certifikátů podle kap. Doba platnosti certifikátů:

| Typ certifikátu | Doba platnosti |
|---|---|
| Kořenový certifikát CA EET | 10 let |
| Mezilehlý certifikát CA EET | 4 roky |
| Pokladní certifikát | 366 dní |

## Playground

> "Pro účely Playgroundu bude vydán kořenový certifikát a certifikát vydavatele pokladních certifikátů, označený jako „EET CA 2 Playground"."
> - [[pristup-playground]] v1.1, kap. 3.1.1

| Pole | Kořenový certifikát (kap. 3.1.2) | Certifikát vydavatele pokladních certifikátů (kap. 3.1.3) |
|---|---|---|
| CN | playground EETv2 NCA Root CA RSA MM/RRRR | playground EETv2 NCA SubCA RSA MM/RRRR |
| O | Správa státních služeb vytvářejících důvěru | Správa státních služeb vytvářejících důvěru |
| organizationIdentifier | NTRCZ-19122063 | NTRCZ-19122063 |
| C | CZ | CZ |
| Algoritmus klíče | RSA 4096 bitů | RSA 2048 bitů |
| Podpisový algoritmus | sha256WithRSAEncryption | sha256WithRSAEncryption |
| Platnost | 10 let | 4 roky |
| Publikovaný soubor (binární formát DER) | `ca_eet-root_cert-playground.crt` | `ca_eet-sub_cert-playground.crt` |

## Zveřejnění certifikátů CA

> "CA EET zveřejňuje kořenový certifikát CA EET a mezilehlý certifikát CA EET. Oba certifikáty jsou dostupné na úvodní stránce Obslužného portálu EET."
> - [[caeet-certifikacni-politika]] v1, kap. Zveřejňování informací

Nápověda aplikace pojmenovává obojí jako „Certifikáty CA“ - kořenový certifikát CA EET a certifikát vydavatele pokladních certifikátů, viz [[caeet-napoveda-aplikace]] v2, kap. Vysvětlení pojmů.

Koncový certifikát této cesty popisuje [[eet-cert-profil-pokladniho-certifikatu]], testovací sadu playgroundu [[eet-cert-testovaci-playground]], seznam zneplatněných certifikátů [[eet-cert-crl]]. Kontrolu vydavatele pokladního certifikátu (kontrola 3a) drží [[eet-pravidlo-kriticke-kontroly]].
