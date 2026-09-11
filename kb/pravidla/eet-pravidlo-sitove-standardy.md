---
id: eet-pravidlo-sitove-standardy
title: Standardy síťové komunikace
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, wsdl]
spec_ref: ["popis-rozhrani v1.2 kap. 2.3.1", "popis-rozhrani v1.2 kap. 2.3.2", "popis-rozhrani v1.2 kap. 2.3.3", "popis-rozhrani v1.2 kap. 5.1", "wsdl operace OdeslaniTrzby"]
rests_on: [eet-provoz-url-prostredi]
tags: [https, tls, http, cors, sitove-standardy]
aka: ["jaka verze tls je povinna", "musi pokladna poslat klientsky certifikat", "jake hlavicky posilat pro cors", "co je preflight pozadavek", "kontroluje pokladna certifikat serveru"]
created: 2026-09-11
updated: 2026-09-11
---

# Standardy síťové komunikace

> "Použití protokolu HTTPS je povinné, bez autentizace klientskými certifikáty. Podporované verze TLS jsou TLS 1.2 a vyšší."
> - [[popis-rozhrani]] v1.2, kap. 2.3.1

> "Použití protokolu HTTP/1.1 je povinné."
> - [[popis-rozhrani]] v1.2, kap. 2.3.2

> "Pokladní zařízení musí v rámci navázání spojení TLS (TLS handshake) se společným technickým zařízením povinně kontrolovat platnost TLS certifikátu serveru, zda byl vystaven důvěryhodnou autoritou a zda se shoduje jméno, na které byl vydán, s adresou společného technického zařízení."
> - [[popis-rozhrani]] v1.2, kap. 5.1

Podle kap. 5.1 se společné technické zařízení správce daně prokazuje TLS certifikátem serveru a autentizace klienta TLS (pokladního zařízení) není v rámci navázání TLS spojení požadována, což odpovídá kap. 2.3.1.

## CORS ochrana

> "Vzhledem k tomu, že je potřeba při volání webové služby zasílat hlavičky HTTP protokolu Content-Type a SOAPAction a nejedná se o tzv. jednoduchý požadavek, posílá www prohlížeč předem ověřovací požadavek, tzv. preflight požadavek."
> - [[popis-rozhrani]] v1.2, kap. 2.3.3

Pro odeslání tržby je podle téže kapitoly třeba požadovat:

| Požadavek | Hodnota |
|---|---|
| HTTP metoda | POST |
| hlavička Content-Type | `text/xml; charset=utf-8` |
| hlavička SOAPAction | dle WSDL služby, viz [[wsdl]] (`http://fs.gov.cz/eet/OdeslaniTrzby`) |

Preflight výměna (příklad z kap. 2.3.3): WWW prohlížeč odešle `OPTIONS` požadavek s hlavičkami `Access-Control-Request-Method` a `Access-Control-Request-Headers`. Pokud jsou podmínky splněny, koncový bod vrátí `204 No Content` s CORS hlavičkami povolení. Teprve poté prohlížeč odešle vlastní SOAP zprávu metodou `POST`. Pokud pokladní systém požaduje nesprávnou metodu nebo hlavičky, vrátí koncový bod `405 Method Not Allowed` a SOAP zpráva se vůbec neodešle.

Význam jednotlivých CORS hlaviček:

| Hlavička | Směr komunikace | Hodnota (nebo příklad) | Popis |
|---|---|---|---|
| Access-Control-Request-Method | Požadavek | POST | metoda, kterou www prohlížeč chce použít pro odeslání zprávy |
| Origin | Požadavek | https://mojeapl.cz | doména, ve které běží web pokladního systému poplatníka |
| Access-Control-Request-Headers | Požadavek | Content-Type, SOAPAction | hlavičky, které www prohlížeč potřebuje odeslat s požadavkem |
| Access-Control-Allow-Origin | Odpověď | * | volání je povoleno z libovolné internetové domény |
| Access-Control-Allow-Methods | Odpověď | POST, OPTIONS | povolené HTTP metody koncového bodu |
| Access-Control-Allow-Headers | Odpověď | Content-Type, SOAPAction | povolené speciální HTTP hlavičky |
| Access-Control-Expose-Headers | Odpověď | X-Global-Transaction-Id | zpřístupnění telemetrické hlavičky ve www prohlížeči |
| Access-Control-Max-Age | Odpověď | 3600 | doba v sekundách, po níž se prohlížeč musí znovu ověřit |
| X-Global-Transaction-Id | Odpověď | 452ba7806a71df6100036b61 | telemetrická hlavička, viz [[eet-pravidlo-trasovani]] |

CORS podpora nic nemění na využití protokolu SOAP a WS-Security pro vlastní výměnu zpráv, viz [[eet-pravidlo-podpis-datove-zpravy]].
