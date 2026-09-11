---
id: xml-schema
title: EETXMLSchema.xsd - XML schéma datových zpráv EET
type: source
domain: [rozhrani]
status: platne
vydavatel: Generální finanční ředitelství
verze_dokumentu: "4.1"
verze_rozhrani: "4.1"
soubor: docs/EETXMLSchema.xsd
sha256: 83597d08520cbfab7e51145df9a765d5ca22e2f9a38644a468d695657c7a032a
url: https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/EETXMLSchema.xsd
namespace: http://fs.gov.cz/eet/schema/v4
tags: [xsd, schema, validace]
created: 2026-09-11
updated: 2026-09-11
---

# EETXMLSchema.xsd

Strojově čitelná definice struktury datových zpráv. Příloha dokumentu [[popis-rozhrani]]. Kontrola proti tomuto schématu je kritickou kontrolou - viz [[eet-pravidlo-kriticke-kontroly]].

Cílový jmenný prostor: `http://fs.gov.cz/eet/schema/v4`, `elementFormDefault="qualified"`, `version="4.1"`.

## Definované typy

| Typ | Základ | Omezení |
|---|---|---|
| `UUIDType` | `xs:string` | pattern + `length` 36 |
| `PokType` | `xs:string` | pattern + `length` 39 |
| `CZEICType` | `xs:string` | pattern `CZ[0-9]{8,10}` |
| `CastkaType` | `xs:decimal` | `minExclusive` -100000000, `maxExclusive` 100000000, pattern |
| `IdEvidJednotkyType` | `xs:int` | 1 až 999999999, pattern |
| `KodChybaType` | `xs:int` | -999 až 999 |
| `KodVarovType` | `xs:int` | 1 až 999 |
| `string20`, `string25` | `xs:string` | pattern povolených znaků |
| `dateTime` | `xs:dateTime` | pattern s povinnou časovou zónou |

## Kořenové elementy

- `Trzba` typu `TrzbaType` - sekvence `Hlavicka` + `Data`
- `Odpoved` typu `OdpovedType` - `Hlavicka`, dále `xs:choice` mezi `Potvrzeni` a `Chyba`, dále 0 až 10 elementů `Varovani`
