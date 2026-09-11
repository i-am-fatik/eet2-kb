---
id: certifikaty
title: Pokladní certifikáty - rozcestník
type: moc
domain: [certifikaty]
status: platne
updated: 2026-09-11
---

# Pokladní certifikáty

Mapa domény `certifikaty`. Zdroje: [[caeet-certifikacni-politika]], [[caeet-api-jwt]], [[caeet-postupy-zadost]], [[caeet-postupy-instalace]], [[caeet-napoveda-aplikace]], [[caeet-playground-certifikaty]] a kapitoly 3 obou přístupových dokumentů.

## Co certifikát je

- [[eet-cert-pouziti-pokladniho-certifikatu]] - držitel, účel, rovnocennost certifikátů
- [[eet-cert-hierarchie-ca]] - kořenová CA a vydavatel pokladních certifikátů
- [[eet-cert-profil-pokladniho-certifikatu]] - subject, klíč, platnost 366 dnů, KeyUsage, politika

## Životní cyklus

- [[eet-cert-vydani]] - žádost na Obslužném portálu EET, PKCS#12, okno 30 dnů
- [[eet-cert-obnova-automatizovana]] - API CA EET, JWT, stavy žádosti, stažení a potvrzení
- [[eet-cert-zneplatneni]] - žádost, neprodlenost, nevratnost
- [[eet-cert-stavy-v-portalu]] - číselník stavů v aplikaci
- [[eet-cert-crl]] - distribuční bod, frekvence vydávání, platnost, playground bez CRL

## Klíč a testování

- [[eet-cert-ochrana-soukromeho-klice]] - povinnost poplatníka a vlastnosti PKCS#12
- [[eet-cert-testovaci-playground]] - tři sdílené testovací certifikáty a jejich EIČ

Podpis zprávy tímto certifikátem popisuje [[eet-pravidlo-podpis-datove-zpravy]], prostředí [[provoz]].
