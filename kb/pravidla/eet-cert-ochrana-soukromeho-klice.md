---
id: eet-cert-ochrana-soukromeho-klice
title: Ochrana soukromého klíče pokladního certifikátu
type: pravidlo
domain: [certifikaty]
status: platne
sources: [caeet-postupy-zadost, caeet-postupy-instalace, caeet-certifikacni-politika]
spec_ref: ["caeet-postupy-zadost v2, kap. Ochrana soukromého klíče", "caeet-postupy-instalace v1, kap. Úvod", "caeet-certifikacni-politika v1, kap. Pokladní certifikáty a jejich použití"]
rests_on: [eet-cert-vydani]
tags: [soukromy-klic, pkcs12, 3des, openssl, bezpecnost]
aka: ["kdo odpovida za soukromy klic", "proc mi openssl 3 neotevre p12", "v jakem formatu je p12 zabalen", "jak dlouhe je heslo k p12"]
created: 2026-09-11
updated: 2026-09-11
---

# Ochrana soukromého klíče pokladního certifikátu

> "Soukromý klíč (klíče) poplatníka tj. vlastníka pokladního certifikátu musí být chráněn(y) proti zneužití. Ochrana soukromých klíčů proti zneužití je povinností poplatníka."
> - [[caeet-certifikacni-politika]] v1, kap. Pokladní certifikáty a jejich použití

> "Soukromý klíč musí být chráněn proti zcizení a zneužití, neboť právě soukromý klíč slouží k vytváření elektronických podpisů. Ochrana soukromého klíče a certifikátu pro evidenci tržeb před jeho zneužitím je zákonnou povinností poplatníka."
> - [[caeet-postupy-zadost]] v2, kap. Ochrana soukromého klíče

Povinnosti poplatníka podle téže kapitoly:

| Povinnost |
|---|
| chránit si soukromý klíč k pokladnímu certifikátu |
| bezpečně uložit soubor .p12 |
| bezpečně zaznamenat heslo k otevření souboru .p12 |

> "Soubor .p12 obsahuje i soukromý klíč, proto jej vždy ukládejte do umístění, ke kterému máte přístup pouze vy, popřípadě osoba oprávněná k manipulaci se soukromým klíčem."
> - [[caeet-postupy-instalace]] v1, kap. Úvod

## Vlastnosti předaného souboru .p12

| Vlastnost | Hodnota |
|---|---|
| obsah | pokladní certifikát, k němu příslušný soukromý klíč a certifikáty z certifikační cesty |
| zabezpečení | heslo |
| délka hesla | 8 znaků |
| znaky hesla | velká a malá písmena a číslice |
| formát balení | legacy formát |
| ochrana soukromého klíče v souboru | šifrování algoritmem 3DES-CBC |

> "Kvůli zpětné kompatibilitě se staršími pokladními systémy je soubor .p12 generován v legacy formátu, kde je soukromý klíč chráněn šifrováním pomocí algoritmu 3DES-CBC."
> - [[caeet-postupy-zadost]] v2, kap. Ochrana soukromého klíče

> "U implementací běžících nad OpenSSL 3 je očekávané, že standardní načtení výše popsaného .p12 souboru může selhat, pokud není dostupný OpenSSL legacy provider."
> - [[caeet-postupy-zadost]] v2, kap. Ochrana soukromého klíče, Upozornění

Kapitola k tomu uvádí tři doporučené postupy: povolení OpenSSL legacy provideru cíleně pro daný proces nebo prostředí při zachování aktivního default provideru, bezpečný import nebo převod certifikátu do formátu používaného konkrétní aplikací (například PEM nebo nově zabalený PKCS#12 s modernější ochranou) v důvěryhodném prostředí, a uložení certifikátu a privátního klíče do zabezpečeného úložiště tajemství. Převod podle téže kapitoly nemění vlastní certifikát ani klíčový pár, mění se pouze lokální způsob uložení.

> "Z bezpečnostního pohledu nedoporučujeme privátní klíč předávat mimo systém provozovatele ani jej ponechávat v nešifrované podobě."
> - [[caeet-postupy-zadost]] v2, kap. Ochrana soukromého klíče

Zneužití soukromého klíče je podle [[caeet-certifikacni-politika]] v1, kap. Zneplatnění pokladních certifikátů důvodem pro žádost o zneplatnění, viz [[eet-cert-zneplatneni]]. Soubor .p12 poplatník získává postupem podle [[eet-cert-vydani]] nebo obnovou podle [[eet-cert-obnova-automatizovana]]. Klíčem chráněným podle této noty se podepisuje datová zpráva, viz [[eet-pravidlo-podpis-datove-zpravy]].
