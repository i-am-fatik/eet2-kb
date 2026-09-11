---
id: wsdl
title: EETServiceSOAP.wsdl - definice webové služby EET
type: source
domain: [rozhrani]
status: platne
vydavatel: Generální finanční ředitelství
verze_dokumentu: "4.1"
verze_rozhrani: "4.1"
soubor: docs/EETServiceSOAP.wsdl
sha256: df149c0bef4ac18c2a6e82116b6eb9bb17d29c055cb0821ac6d3885ec90faeb4
url: https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/EETServiceSOAP.wsdl
namespace: http://fs.gov.cz/eet/schema/v4
tags: [wsdl, soap, sluzba]
created: 2026-09-11
updated: 2026-09-11
---

# EETServiceSOAP.wsdl

Formální popis webové služby. Příloha dokumentu [[popis-rozhrani]], importuje [[xml-schema]].

Hlavička dokumentu uvádí: účel "Sluzba pro odeslani datove zpravy evidovane trzby", verzi 4.1, vlastníka "Generalni financni reditelstvi".

## Kontrakt

| Prvek | Hodnota |
|---|---|
| `portType` | `EET` |
| operace | `OdeslaniTrzby` |
| vstup | `tns:Trzba` |
| výstup | `tns:Odpoved` |
| binding | `EETSOAP`, style `document`, transport `http://schemas.xmlsoap.org/soap/http` |
| `soapAction` | `http://fs.gov.cz/eet/OdeslaniTrzby` |
| `soap:body` | `use="literal"` |
| `soap:address` | `https://pg.trzbyeet.gov.cz:443/eet/services/EETServiceSOAP/v4` |

Adresa v `soap:address` je adresou playgroundu. Komentář v souboru k ní uvádí, že platí pouze pro neprodukční prostředí - produkční adresu nese [[pristup-produkce]].
