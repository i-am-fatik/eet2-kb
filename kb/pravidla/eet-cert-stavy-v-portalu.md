---
id: eet-cert-stavy-v-portalu
title: Stavy pokladního certifikátu v aplikaci Správa pokladních certifikátů EET
type: pravidlo
domain: [certifikaty]
status: platne
sources: [caeet-napoveda-aplikace]
spec_ref: ["caeet-napoveda-aplikace v2, kap. Přehled stavů pokladních certifikátů", "caeet-napoveda-aplikace v2, kap. Zobrazení a filtrování pokladních certifikátů", "caeet-napoveda-aplikace v2, kap. Hlavní stránka aplikace Správa pokladních certifikátů EET"]
rests_on: [eet-cert-vydani]
tags: [stavy, obsluzny-portal, zivotni-cyklus]
aka: ["co znamena stav k dokonceni", "proc je certifikat ve stavu pripravuje se", "jaky je rozdil mezi expirovanym a zneplatnenym"]
created: 2026-09-11
updated: 2026-09-11
---

# Stavy pokladního certifikátu v aplikaci Správa pokladních certifikátů EET

> "Pokladní certifikáty spravované v aplikaci Správa pokladních certifikátů EET mohou být v některém z níže uvedených stavů."
> - [[caeet-napoveda-aplikace]] v2, kap. Přehled stavů pokladních certifikátů

| Označení stavu | Význam |
|---|---|
| Připravuje se | Probíhá proces vydání certifikátu. |
| Platný | Pokladní certifikát byl vydán a úspěšně jste si pokladní certifikát převzali. |
| Ke stažení | Pokladní certifikát byl vydán a je připraven k převzetí. |
| K dokončení | Pokladní certifikát byl předán, ale nepotvrdili jste jeho úspěšné převzetí. |
| Expirovaný | Pokladnímu certifikátu skončila platnost, na kterou byl vydán. Certifikát není možné dále používat. |
| Zneplatněný | Pokladní certifikát byl zneplatněn. Certifikát není možné dále používat. |

Seznam certifikátů je podle kap. Zobrazení a filtrování pokladních certifikátů ve výchozím stavu řazen podle času Platnost do. Přehledová tabulka Stav vašich certifikátů na hlavní stránce zobrazuje podle kap. Hlavní stránka aplikace Správa pokladních certifikátů EET počet platných pokladních certifikátů, datum konce platnosti certifikátu, jehož platnost vyprší nejdříve, a počet certifikátů podle stavů.

Tyto stavy patří certifikátu v portálu. Stavy žádosti o obnovu na rozhraní CA EET jsou jiná množina, viz [[eet-cert-obnova-automatizovana]]. Přechod do stavu Platný popisuje [[eet-cert-vydani]], do stavu Zneplatněný [[eet-cert-zneplatneni]].
