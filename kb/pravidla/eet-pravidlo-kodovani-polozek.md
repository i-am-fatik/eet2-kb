---
id: eet-pravidlo-kodovani-polozek
title: Kódování datových položek
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, wsdl, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.1", "wsdl targetNamespace http://fs.gov.cz/eet/schema/v4", "xml-schema targetNamespace http://fs.gov.cz/eet/schema/v4"]
rests_on: [eet-pojem-datova-zprava-evidovane-trzby]
tags: [kodovani, ascii, utf-8, format]
created: 2026-09-11
updated: 2026-09-11
aka: ["jake znaky smi obsahovat datova polozka", "co delat kdyz chybi content-type hlavicka", "jak se pisi velka a mala hex pismena v masce"]
---

# Kódování datových položek

> "Všechny položky ve všech datových zprávách využívají pouze vybrané znaky kódované jedním bajtem ve standardní ASCII znakové sadě."
> - [[popis-rozhrani]] v1.2, kap. 3.1

> "Kódování datových zpráv jakožto XML dokumentů je povinně UTF-8, tj. klient musí deklarovat správně Content-Type v HTTP hlavičce odesílané datové zprávy."
> - [[popis-rozhrani]] v1.2, kap. 3.1

| Vlastnost | Hodnota |
|---|---|
| kódování hodnot datových položek | ASCII, jeden bajt na znak |
| povolené dekadické kódy znaků | 9, 10, 13 nebo 32 az 126 |
| kódování XML dokumentu datové zprávy | UTF-8 |
| deklarace v HTTP hlavičce | `Content-Type: text/xml; charset=utf-8` |
| deklarace přímo v XML, pokud Content-Type chybí | první řádek musí být `<?xml version="1.0" encoding="UTF-8"?>` |
| jmenný prostor XML elementů e-tržby | `http://fs.gov.cz/eet/schema/v4`, viz [[wsdl]] a [[xml-schema]] |
| maska formátu položky | regulární výraz dle XML schématu, s metaznaky ^ a $ pro začátek a konec řetězce |
| hexadecimální číslice a az f | lze uvádět malými i velkými písmeny |

Tato pravidla kódování platí pro položky všech tří datových zpráv popsaných v [[eet-pravidlo-struktura-zprav]].
