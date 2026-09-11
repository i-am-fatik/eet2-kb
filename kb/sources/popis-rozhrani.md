---
id: popis-rozhrani
title: Formát a struktura údajů o evidované tržbě a popis datového rozhraní pro příjem datových zpráv evidovaných tržeb
type: source
domain: [rozhrani]
status: platne
vydavatel: Generální finanční ředitelství
verze_dokumentu: "1.2"
datum_verze: 2026-08-25
verze_rozhrani: "4.1"
soubor: docs/EET_popis_rozhrani_v1.2.pdf
sha256: c986e85686927e1e153aee0f33090fd6fda80d09b44e564d8b344dde729b1a1e
url: https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/EET_popis_rozhrani_v1.2.pdf
tags: [soap, ws-security, datova-zprava]
created: 2026-09-11
updated: 2026-09-11
---

# Popis datového rozhraní EET 2.0

Základní normativní dokument vaultu. Popisuje datové rozhraní pro příjem a potvrzování datových zpráv evidovaných tržeb: komunikační scénář, kritické a propustné kontroly, strukturu tří datových zpráv, číselníky kódů, jednoznačný kód tržby a zabezpečení SOAP zprávy.

Přílohou dokumentu jsou [[xml-schema]] a [[wsdl]], které rozhraní formálně předepisují.

## Struktura dokumentu

| Kapitola | Obsah |
|---|---|
| 1 | Úvodní informace, číslování verzí rozhraní, zkratky, pojmy |
| 2 | Komunikační scénář, módy odesílání, prostředí, kontroly, síťové standardy, CORS, certifikáty |
| 3 | Struktura datových zpráv: e-tržba, potvrzení, chyba, číselníky |
| 4 | Jednoznačný kód tržby |
| 5 | SOAP a WS-Security, podpis, trasování |

## Historie verzí

| Verze | Datum | Popis |
|---|---|---|
| 1.0 | 2026-06-02 | uvolnění verze 1.0 |
| 1.1 | 2026-07-07 | upřesnění pravidel pro deklaraci UTF-8 kódování zpráv (kapitola 3.1) |
| 1.2 | 2026-08-25 | doplnění informací o podpoře CORS HTTP hlaviček (kapitola 2.3.3), formální textové opravy |

Anglická jazyková verze dokumentu je `docs/EET_popis_rozhrani_v1.2_EN.pdf`. Normativní je česká verze.
