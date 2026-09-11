---
id: eet-cert-zneplatneni
title: Zneplatnění pokladního certifikátu
type: pravidlo
domain: [certifikaty]
status: platne
sources: [caeet-certifikacni-politika, caeet-napoveda-aplikace]
spec_ref: ["caeet-certifikacni-politika v1, kap. Zneplatnění pokladních certifikátů", "caeet-napoveda-aplikace v2, kap. Zneplatnění pokladního certifikátu"]
rests_on: [eet-cert-profil-pokladniho-certifikatu]
tags: [zneplatneni, revokace, obsluzny-portal]
aka: ["jak zneplatnim pokladni certifikat", "kdy mam certifikat zneplatnit", "da se zneplatneni vratit"]
created: 2026-09-11
updated: 2026-09-11
---

# Zneplatnění pokladního certifikátu

> "Poplatník může požádat o zneplatnění pokladního certifikátu zasláním žádosti o zneplatnění pokladního certifikátu z Obslužného portálu EET."
> - [[caeet-certifikacni-politika]] v1, kap. Zneplatnění pokladních certifikátů

> "Na základě žádosti o zneplatnění je pokladní certifikát v CA EET neprodleně zneplatněn."
> - [[caeet-certifikacni-politika]] v1, kap. Zneplatnění pokladních certifikátů

> "O zneplatnění pokladního certifikátu žádá poplatník například v případě, kdy hrozí nebezpečí zneužití soukromého klíče."
> - [[caeet-certifikacni-politika]] v1, kap. Zneplatnění pokladních certifikátů

> "Možnost zneplatnění pokladního certifikátu využijte v okamžiku, kdy máte podezření na ztrátu nebo zneužití pokladního certifikátu nebo celé pokladny."
> - [[caeet-napoveda-aplikace]] v2, kap. Zneplatnění pokladního certifikátu

> "Operace zneplatnění je nevratná, po zneplatnění již nelze zneplatněný pokladní certifikát používat."
> - [[caeet-napoveda-aplikace]] v2, kap. Zneplatnění pokladního certifikátu

## Postup v aplikaci

| Krok | Úkon podle kap. Postup zneplatnění pokladního certifikátu |
|---|---|
| 1 | V seznamu v části Vaše certifikáty kliknout na řádek s certifikátem, otevře se dialogové okno Detail certifikátu |
| 2 | Zkontrolovat, že je zobrazen certifikát, který má být zneplatněn |
| 3 | Zatrhnout políčko „Opravdu chci zneplatnit certifikát“ |
| 4 | Kliknout na tlačítko Zneplatnit |
| 5 | Certifikát zůstává v seznamu ve stavu Zneplatněný |

Po zneplatnění si podle téže kapitoly může poplatník pro další používání pokladního zařízení nebo pokladního systému vydat nový pokladní certifikát, viz [[eet-cert-vydani]].

Nápověda definuje zneplatnění certifikátu takto:

> "Předčasné ukončení platnosti certifikátu, které je realizované uvedením certifikátu na seznamu zneplatněných certifikátů."
> - [[caeet-napoveda-aplikace]] v2, kap. Vysvětlení pojmů
 Seznam popisuje [[eet-cert-crl]]. Zneplatněný certifikát nelze obnovit, viz [[eet-cert-obnova-automatizovana]]. Stav certifikátu v portálu drží [[eet-cert-stavy-v-portalu]], povinnost chránit klíč [[eet-cert-ochrana-soukromeho-klice]].
