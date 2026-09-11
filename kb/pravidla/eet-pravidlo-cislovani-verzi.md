---
id: eet-pravidlo-cislovani-verzi
title: Číslování verzí rozhraní
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, wsdl, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 1.1", "wsdl targetNamespace http://fs.gov.cz/eet/schema/v4", "xml-schema atribut version 4.1"]
rests_on: [eet-provoz-verze-a-soubeh, eet-provoz-url-prostredi]
tags: [verze, url, kompatibilita]
aka: ["kdy se meni hlavni cislo verze rozhrani", "proc se zmenila url adresa rozhrani", "co je kompatibilni zmena rozhrani"]
created: 2026-09-11
updated: 2026-09-11
---

# Číslování verzí rozhraní

> "Verze rozhraní je číslována dvojicí čísel: hlavní (první) a vedlejší (druhé), např. 1.0, 1.1, 1.2 atd."
> - [[popis-rozhrani]] v1.2, kap. 1.1

> "Hlavní číslo verze rozhraní je součástí URL adresy ve všech cílových prostředích (např. v4 pro verzi 4.x)."
> - [[popis-rozhrani]] v1.2, kap. 1.1

| Typ změny | Dopad na číslo verze | Dopad na URL a jmenné prostory |
|---|---|---|
| kompatibilní (nemá vliv na implementaci pokladních zařízení) | mění se jen vedlejší číslo, např. 4.1 -> 4.2 -> 4.3 | URL jmenných prostorů a cílová URL adresa služby se nemění, zůstává /v4 |
| nekompatibilní (změna struktury datových zpráv vyžadující změnu implementace, např. formátu datových položek) | mění se hlavní číslo, např. 4.2 -> 5.1, další drobné změny opět 5.2, 5.3 atd. | URL jmenných prostorů a cílová URL adresa služby se mění, např. na /v5 |

Verze XML schématu a WSDL dokumentu v jejich hlavičce se mění analogicky s vedlejším i hlavním číslem verze rozhraní.

Ke dni vydání první verze dokumentu je verze rozhraní EET 4.1, což odpovídá `version="4.1"` v hlavičce [[xml-schema]] a jmennému prostoru `http://fs.gov.cz/eet/schema/v4` v [[wsdl]]. Předchozí systém EET měl poslední verzi rozhraní 3.1, změny zavedené v roce 2026 jsou nekompatibilní.
