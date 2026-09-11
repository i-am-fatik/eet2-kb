---
id: eet-provoz-ssl-a-podpisovy-certifikat
title: SSL certifikát koncového bodu a podpisový certifikát potvrzovacích zpráv
type: pravidlo
domain: [provoz]
status: platne
sources: [pristup-playground, pristup-produkce]
spec_ref: ["pristup-playground v1.1 kap. 3.2, 3.3", "pristup-produkce v1.1 kap. 3.2, 3.3"]
rests_on: [eet-pravidlo-podpis-datove-zpravy, eet-pojem-potvrzovaci-datova-zprava]
tags: [ssl, tls, podpis, certifikat, provoz, tlp-amber]
aka: ["jaky ssl certifikat ma https koncovka playgroundu", "kdo podepisuje potvrzovaci zpravu evidence"]
created: 2026-09-11
updated: 2026-09-11
---

# SSL certifikát koncového bodu a podpisový certifikát potvrzovacích zpráv

## SSL certifikát

> "Pro zabezpečení HTTPS spojení s playgroundem (pg.trzbyeet.gov.cz) je použit SSL certifikát od důvěryhodné komerční certifikační autority."
> - [[pristup-playground]] v1.1, kap. 3.2

> "Pro zabezpečení HTTPS spojení s produkčním prostředím je použit SSL certifikát od důvěryhodné komerční certifikační autority."
> - [[pristup-produkce]] v1.1, kap. 3.2

| Prostředí | Vydavatel SSL certifikátu | Typ | Doména |
|---|---|---|---|
| playground | Digicert | EV | pg.trzbyeet.gov.cz |
| produkce | Digicert | EV | trzbyeet.gov.cz |

> "Použití protokolu HTTPS je povinné, bez autentizace klientskými certifikáty na úrovni TLS. Podporované verze protokolu TLS jsou TLS 1.2 a vyšší."
> - [[pristup-playground]] v1.1, kap. 3.2

> "Použití protokolu HTTPS je povinné, bez autentizace klientskými certifikáty na úrovni TLS. Podporované verze protokolu TLS jsou TLS 1.2 a vyšší."
> - [[pristup-produkce]] v1.1, kap. 3.2

Produkce dále uvádí:

> "Konkrétní SSL certifikát produkčního prostředí se může kdykoliv změnit, vždy ale budou zachovány bezpečnostní atributy (důvěryhodná CA, typ EV, produkční doména EET). Pro zajištění maximální ochrany dat evidovaných tržeb je doporučeno při navázání spojení kontrolovat tyto atributy SSL certifikátu."
> - [[pristup-produkce]] v1.1, kap. 3.2

## Podpisový certifikát

> "Pro elektronický podpis potvrzovacích datových zpráv je použit certifikát vydaný autoritou:
> C = CZ
> 2.5.4.97 = NTRCZ-26439395
> O = První certifikační autorita, a.s.
> CN = I.CA Public CA/RSA 06/2022"
> - [[pristup-playground]] v1.1, kap. 3.3

> "Pro elektronický podpis potvrzovacích datových zpráv je použit certifikát vydaný autoritou:
> C = CZ
> 2.5.4.97 = NTRCZ-26439395
> O = První certifikační autorita, a.s.
> CN = I.CA Public CA/RSA 06/2022"
> - [[pristup-produkce]] v1.1, kap. 3.3

Oba dokumenty uvádějí pro podpisový certifikát shodné údaje, tedy stejnou vydávající autoritu pro obě prostředí.

| Vlastnost podpisového certifikátu | Hodnota |
|---|---|
| C | CZ |
| 2.5.4.97 (organizationIdentifier) | NTRCZ-26439395 |
| O | První certifikační autorita, a.s. |
| CN autority | I.CA Public CA/RSA 06/2022 |
| CN certifikátu(ů) | 100000002 a 100001063 |

Oba dokumenty dále shodně uvádějí:

> "Certifikáty autority I. CA jsou dostupné zde: https://www.ica.cz/korenove-certifikaty"
> - [[pristup-playground]] v1.1, kap. 3.3

Tímto certifikátem je podepsána [[eet-pojem-potvrzovaci-datova-zprava]]. Podepisování datové zprávy poplatníka certifikátem na jeho straně popisuje [[eet-pravidlo-podpis-datove-zpravy]].
