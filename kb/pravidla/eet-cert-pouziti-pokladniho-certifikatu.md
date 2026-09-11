---
id: eet-cert-pouziti-pokladniho-certifikatu
title: Účel a použití pokladního certifikátu
type: pravidlo
domain: [certifikaty]
status: platne
sources: [caeet-certifikacni-politika]
spec_ref: ["caeet-certifikacni-politika v1, kap. Úvod", "caeet-certifikacni-politika v1, kap. Pokladní certifikáty a jejich použití"]
rests_on: [eet-pojem-datova-zprava-evidovane-trzby, eet-polozka-eic-popl]
tags: [pokladni-certifikat, ucel, ca]
aka: ["k cemu se smi pokladni certifikat pouzit", "muzu mit vic pokladnich certifikatu", "kdo je drzitelem pokladniho certifikatu"]
created: 2026-09-11
updated: 2026-09-11
---

# Účel a použití pokladního certifikátu

> "Certifikační autorita EET v 2.0 (dále jen „CA EET“) vydává X.509 certifikáty (dále nazývané „pokladní certifikáty“) pro subjekty evidující tržby dle ZoET (dále jen "poplatníky") identifikované evidenčním identifikačním číslem EIČ (Evidenční identifikační číslo dle zákona ZoET)."
> - [[caeet-certifikacni-politika]] v1, kap. Úvod

> "Vlastníkem a držitelem pokladního certifikátu a podepisující osobou (využívající odpovídající soukromý klíč) je vždy poplatník."
> - [[caeet-certifikacni-politika]] v1, kap. Úvod

> "Pokladní certifikáty vydané CA EET se mohou použít pouze pro účely elektronické evidence tržeb, a to pouze pro autentizaci datových zpráv o evidovaných tržbách."
> - [[caeet-certifikacni-politika]] v1, kap. Pokladní certifikáty a jejich použití

> "Poplatník může používat více pokladních certifikátů, všechny platné pokladní certifikáty jednoho poplatníka jsou z hlediska evidence tržeb rovnocenné."
> - [[caeet-certifikacni-politika]] v1, kap. Pokladní certifikáty a jejich použití

Externí certifikační služby, které CA EET podle kap. Úvod poskytuje:

| Služba |
|---|
| Vydání pokladního certifikátu |
| Automatizovanou obnovu pokladního certifikátu |
| Zneplatnění pokladního certifikátu |
| Vydávání seznamu zneplatněných pokladních certifikátů (dále jen „CRL“) |

Autentizaci poplatníka pro služby CA EET a Obslužného portálu zajišťuje podle téže kapitoly portál MOJE daně (DIS+), dostupný na URL `https://mojedane.gov.cz`.

Certifikát je nositelem identity poplatníka, viz [[eet-polozka-eic-popl]]. Autentizace datové zprávy se provádí podpisem podle [[eet-pravidlo-podpis-datove-zpravy]]. Profil certifikátu drží [[eet-cert-profil-pokladniho-certifikatu]], cestu vydavatelů [[eet-cert-hierarchie-ca]], způsob vydání [[eet-cert-vydani]].
