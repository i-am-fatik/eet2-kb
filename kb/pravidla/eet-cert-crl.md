---
id: eet-cert-crl
title: CRL pokladních certifikátů
type: pravidlo
domain: [certifikaty]
status: platne
sources: [caeet-certifikacni-politika, pristup-produkce, pristup-playground]
spec_ref: ["caeet-certifikacni-politika v1, kap. Zneplatnění pokladních certifikátů", "pristup-produkce v1.1, kap. 3.1.3", "pristup-playground v1.1, kap. 3.1.4"]
rests_on: [eet-cert-hierarchie-ca, eet-cert-zneplatneni]
tags: [crl, revokace, ocsp, tlp-amber]
aka: ["kde stahnu crl", "jak casto se vydava crl", "vydava se crl na playgroundu", "poskytuje ca eet ocsp"]
created: 2026-09-11
updated: 2026-09-11
---

# CRL pokladních certifikátů

> "Vydávání seznamu zneplatněných pokladních certifikátů (dále jen „CRL“)."
> - [[caeet-certifikacni-politika]] v1, kap. Úvod, výčet externích certifikačních služeb CA EET

Podle [[caeet-certifikacni-politika]] v1, kap. Úvod se profil koncových certifikátů liší mimo jiné tím, že „v certifikátu nejsou uváděny distribuční body CRL“. Distribuční bod tedy nese provozní dokumentace prostředí, ne pokladní certifikát sám, viz [[eet-cert-profil-pokladniho-certifikatu]].

## Režim vydávání

CA EET vydává podle kap. Zneplatnění pokladních certifikátů CRL v následujícím režimu:

| Událost | Lhůta |
|---|---|
| pravidelné vydání | v pravidelných intervalech po 8 hodinách |
| po zneplatnění pokladního certifikátu | bezprostředně, do 1 minuty |

> "Platnost CRL bude 24 hodin."
> - [[caeet-certifikacni-politika]] v1, kap. Zneplatnění pokladních certifikátů

> "Na CRL budou uvedeny všechny pokladní certifikáty, které byly zneplatněny a jejich platnost skončila později než 3 dny před vydáním CRL."
> - [[caeet-certifikacni-politika]] v1, kap. Zneplatnění pokladních certifikátů

> "Možnost ověřování statusu pokladního certifikátu on-line (OCSP) CA EET neposkytuje."
> - [[caeet-certifikacni-politika]] v1, kap. Zneplatnění pokladních certifikátů

Podle kap. Zveřejňování informací poskytuje CA EET CRL ke stažení.

## Produkce

> "CRL je dostupné na CRL distribučním bodě:"
> - [[pristup-produkce]] v1.1, kap. 3.1.3

| Parametr | Hodnota podle kap. 3.1.3 |
|---|---|
| distribuční bod | `https://caeet.gov.cz/crldp` |
| frekvence vydávání | každých 8 hodin, navíc okamžitě (do 1 minuty) po zneplatnění libovolného certifikátu |
| platnost CRL vydavatele pokladních certifikátů | 24 hodin |
| platnost CRL kořenové CA | 365 dnů, vydáváno každých 180 dnů |

## Playground

> "Pro Playground nebude vydáváno CRL — CA EET není pro Playground v provozu."
> - [[pristup-playground]] v1.1, kap. 3.1.4

Na playgroundu tedy distribuční bod CRL ani seznam zneplatněných certifikátů neexistuje, testovací sadu drží [[eet-cert-testovaci-playground]].

## Vazba na zpracování tržby

Kontrola CRL je součástí kritické kontroly 3b v [[eet-pravidlo-kriticke-kontroly]] - „kontrola platnosti pokladního certifikátu včetně kontroly CRL, které jsou aktuálně technickému zařízení dostupné“. Neprojde-li kritická kontrola, datová zpráva není přijata a POK není vydán. Důvody zápisu certifikátu na CRL drží [[eet-cert-zneplatneni]].
