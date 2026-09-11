---
id: caeet-api-jwt
title: CAEET API - JWT Token (OpenAPI 3.1.0)
type: source
domain: [certifikaty]
status: platne
vydavatel: Generální finanční ředitelství
verze_dokumentu: "1.0.0"
soubor: docs/caeetapi_jwt.zip
sha256: ed145a6ffb77a90b04a5e5bc396741ffc23d902ef54c0d9af0fa119b3c9ad8de
url: https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/caeetapi_jwt.zip
tags: [openapi, jwt, certifikaty, obnova]
created: 2026-09-11
updated: 2026-09-11
---

# CAEET API - JWT Token

OpenAPI 3.1.0 specifikace integračního rozhraní certifikační autority pro automatizovanou obnovu pokladního certifikátu. Archiv obsahuje jediný soubor `caeetapi_jwt.yml`.

Toto rozhraní je oddělené od SOAP rozhraní pro odesílání tržeb ([[wsdl]]) - řeší životní cyklus certifikátu, ne evidenci tržeb.

## Servery

| Prostředí | URL |
|---|---|
| testovací | `https://test.caeet.gov.cz/api` |
| zkušební | `https://zkus.caeet.gov.cz/api` |
| produkční | `https://caeet.gov.cz/api` |

## Endpointy

| Metoda a cesta | Účel |
|---|---|
| `POST /request/renew` | podání žádosti o následný certifikát, vrací `reqId` |
| `GET /request/{reqId}/status` | stav žádosti: `INPROCESS`, `ISSUED`, `DELIVERING`, `FINISHED`, `REJECTED` |
| `POST /request/{reqId}/claim-download` | stažení PKCS#12 a hesla, jen ve stavu `ISSUED` nebo `DELIVERING` |
| `POST /request/{reqId}/ack-download` | potvrzení převzetí PKCS#12, jen ve stavu `DELIVERING`, vrací `204 No Content` |
| `GET /request/not-finished` | seznam `reqId` neukončených žádostí pro EIČ obnovovaného certifikátu |

Autorizace schématem `bearerJwtRs256`: JWT v hlavičce `Authorization`, podepsaný obnovovaným certifikátem, který musí být v okamžiku volání platný. Stav `INPROCESS` vrací doporučený interval dalšího dotazu v poli `pollAfterSeconds` a v hlavičce `Retry-After`.
