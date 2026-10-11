---
id: eet-cert-obnova-automatizovana
title: Automatizovaná obnova pokladního certifikátu přes API CA EET
type: pravidlo
domain: [certifikaty]
status: platne
sources: [caeet-postupy-zadost, caeet-api-jwt, caeet-certifikacni-politika]
spec_ref: ["caeet-postupy-zadost v2, kap. Postup vytvoření žádosti o obnovu pokladního certifikátu", "caeet-api-jwt v1.0.0, servers a paths", "caeet-certifikacni-politika v1, kap. Obnova pokladních certifikátů"]
rests_on: [eet-cert-profil-pokladniho-certifikatu, eet-cert-vydani]
tags: [obnova, api, jwt, rs256, pkcs12]
aka: ["jak obnovit pokladni certifikat automaticky", "kdy mam zavolat renew", "co znamena stav INPROCESS", "jak se autorizuje volani ca eet api"]
created: 2026-09-11
updated: 2026-10-11
---

# Automatizovaná obnova pokladního certifikátu přes API CA EET

> "Obnovu pokladního certifikátu provede CA EET na základě žádosti o obnovu podepsané soukromým klíčem příslušným k platnému obnovovanému pokladnímu certifikátu."
> - [[caeet-certifikacni-politika]] v1, kap. Obnova pokladních certifikátů

> "Obnovený pokladní certifikát je vydán k novému veřejnému klíči, naplnění položek pokladního certifikátu je přebíráno z obnovovaného pokladního certifikátu."
> - [[caeet-certifikacni-politika]] v1, kap. Obnova pokladních certifikátů

> "Certifikát, kterému skončila platnost nebo byl zneplatněn, není možné obnovit."
> - [[caeet-certifikacni-politika]] v1, kap. Obnova pokladních certifikátů

> "Automatizovaná obnova pokladního certifikátu musí proběhnout vždy před koncem platnosti obnovovaného certifikátu. Doporučujeme obnovu realizovat 2-3 týdny před koncem platnosti pokladního certifikátu."
> - [[caeet-postupy-zadost]] v2, kap. Požadavky na pokladní systém

> "Žádost o obnovu pokladního certifikátu musí být podepsaná obnovovaným pokladním certifikátem."
> - [[caeet-postupy-zadost]] v2, kap. Požadavky na pokladní systém

Pro automatizovanou obnovu musí podle téže kapitoly pokladní systém implementovat API CA EET popsané v `caeetapi_jwt.yml`, znát datum konce platnosti obnovovaného pokladního certifikátu a importovat .p12 soubor do úložiště klíčů, které využívá aplikace pro evidenci tržeb. Neobnovuje-li pokladní systém certifikát automatizovaně, řeší se obnova ručním vydáním nového pokladního certifikátu v aplikaci Správa pokladních certifikátů EET, viz [[eet-cert-vydani]].

## Servery

| Prostředí | URL |
|---|---|
| Testovací prostředí | `https://ca.test.caeet.gov.cz/api` |
| Zkušební prostředí | `https://ca.zkus.caeet.gov.cz/api` |
| Produkční prostředí | `https://ca.caeet.gov.cz/api` |

## Endpointy

| Metoda a cesta | Účel | Podmínka volání |
|---|---|---|
| `POST /request/renew` | Podání žádosti o následný certifikát, vrací `reqId` | obnovovaný certifikát musí být v okamžiku volání platný |
| `GET /request/{reqId}/status` | Získání stavu žádosti o certifikát | podpisový certifikát použitý pro JWT musí být platný |
| `POST /request/{reqId}/claim-download` | Stažení PKCS#12 a hesla | pouze pro žádost ve stavu `ISSUED` nebo `DELIVERING` |
| `POST /request/{reqId}/ack-download` | Potvrzení stažení PKCS#12, vrací `204 No Content` | pouze pro žádost ve stavu `DELIVERING` |
| `GET /request/not-finished` | Získá všechny neukončené žádosti pro EIČ | podpisový certifikát použitý pro JWT musí být platný |

## Autorizace

> "Přístup k rozhraní caeetapi je autentizován s použitím JWT tokenu, který se předává v HTTP hlavičce Authorization: Bearer <token>."
> - [[caeet-postupy-zadost]] v2, kap. Autentizace k rozhraní

| Vlastnost tokenu | Hodnota |
|---|---|
| schéma v OpenAPI | `bearerJwtRs256`, `type: http`, `scheme: bearer`, `bearerFormat: JWT` |
| serializace | JWS Compact, `<base64url(protected-header)>.<base64url(payload)>.<base64url(signature)>` |
| `alg` | RS256 |
| `typ` | JWT (doporučeno) |
| `x5t#S256` | base64url(SHA-256(DER(X.509 certifikát))) |
| `x5c` | nepoužívá se, klient neposílá celý certifikát v tokenu |
| payload | JSON objekt, povinné claims `exp` a `iat` typu NumericDate, `exp` větší než `iat` |
| maximální platnost | server odmítá tokeny, u kterých je `exp` nastaveno na více než 5 minut od `iat` |

> "Certifikát se identifikuje výhradně přes x5t#S256 a podle této hodnoty se vyhledává v databázi."
> - [[caeet-postupy-zadost]] v2, kap. Autentizace k rozhraní

Dokument [[caeet-postupy-zadost]] a specifikace [[caeet-api-jwt]] se v popisu payloadu rozcházejí. Postup vyžaduje povinné claims `exp` a `iat` a minimální payload obsahující obě, OpenAPI uvádí v `bearerJwtRs256`, že minimální podporovaný payload je `{}`.

## Stavy žádosti

| Stav | Význam podle `caeetapi_jwt.yml` |
|---|---|
| `INPROCESS` | Žádost v běhu, dosud nevydán certifikát |
| `ISSUED` | certifikát vydán a PKCS#12 je připravena ke stažení |
| `DELIVERING` | PKCS#12 a heslo byly klientovi zpřístupněny ke stažení, ale převzetí dosud nebylo potvrzeno |
| `FINISHED` | žádost ukončena, PKCS#12 byla již stažena |
| `REJECTED` | žádost zamítnuta, součástí odpovědi je důvod zamítnutí |

Odpověď používá schéma `RequestStatusDTO` s diskriminátorem `state`. Ve stavu `INPROCESS` je povinné pole `pollAfterSeconds` (integer, minimum 1) - „Po kolika sekundách API doporučuje se znovu zjišťovat stav žádosti“ - a stejná hodnota přichází v hlavičce `Retry-After`, která se posílá pouze pro stav `INPROCESS`. Stav `REJECTED` nese povinné pole `rejectedReason`.

## Pořadí volání

> "Endpointy je nutné volat v následujícím pořadí:"
> - [[caeet-postupy-zadost]] v2, kap. Příklad sekvence volání

| Krok | Volání |
|---|---|
| 1 | `POST /request/renew` |
| 2 | Periodicky volat `GET /request/{reqId}/status`, dokud je stav žádosti INPROCCESS, dle `pollAfterSeconds` nebo hlavičky `Retry-After`, při změně na `ISSUED` pokračovat dalším krokem |
| 3 | `POST /request/{reqId}/claim-download` |
| 4 | Po uložení PCSK#12 a hesla volat `POST /request/{reqId}/ack-download` |

Zápisy `INPROCCESS` a `PCSK#12` jsou přepsány ze zdroje beze změny.

## Stažení a lhůta

Endpoint `claim-download` vrací objekt `Pkcs12DTO` s poli `pkcs12` (PKCS#12 v base64), `password` (vzor `^[A-Za-z0-9]{8}$`) a `certificate` typu `CertificateDTO` se sériovým číslem, počátkem a koncem platnosti, stavem certifikátu (`VALID`, `EXPIRED`, `REVOKED`, `ON_CRL`), případným časem zneplatnění, poznámkou a e-mailem pro notifikace.

> "Pokud nedojde ke stažení PKCS#12 do 30 dnů od vydání certifikátu server odstraní dočasně držená data pro stažení a žádost přejde do ukončeného stavu workflow."
> - [[caeet-postupy-zadost]] v2, kap. Endpointy pro obnovu pokladního certifikátu

> "Vrácené údaje jsou citlivé, volající aplikace by je neměla ukládat do cache ani logů."
> - [[caeet-postupy-zadost]] v2, kap. Endpointy pro obnovu pokladního certifikátu

Odpověď `claim-download` nese podle [[caeet-api-jwt]] hlavičky `Cache-Control: no-store, no-cache, must-revalidate, max-age=0, private`, `Pragma: no-cache` a `Expires: 0`.

## Chybové odpovědi rozhraní

| HTTP | `code` | Význam |
|---|---|---|
| 400 | 1 | ErrInvalidInput - Chybný formát vstupních dat |
| 401 | 2 | ErrorUnauthorized - Neúspěšná autentizace nebo chybějící přihlašovací údaje. |
| 404 | 4 | ErrorNotFound - Požadovaný objekt neexistuje. |
| 409 | 5 | ErrorConflict - Objekt je v stavu, pro který nemůže být daný endpoint použit. |
| 429 | 6 | ErrorTooManyRequests - Příliš mnoho požadavků v daném čase. |
| 500 | 99 | Error - Chyba serveru. |

Tyto kódy patří rozhraní CA EET, nikoli číselníku chyb datové zprávy evidované tržby.

Obnovovaný certifikát popisuje [[eet-cert-profil-pokladniho-certifikatu]], ochranu staženého klíče [[eet-cert-ochrana-soukromeho-klice]], zneplatnění [[eet-cert-zneplatneni]].
