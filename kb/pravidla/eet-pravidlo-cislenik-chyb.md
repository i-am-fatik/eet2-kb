---
id: eet-pravidlo-cislenik-chyb
title: Číselník chybových kódů a formát chybové datové zprávy
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.5", "popis-rozhrani v1.2 kap. 3.5.4", "xml-schema v4.1 KodChybaType"]
rests_on: [eet-pojem-datova-zprava-evidovane-trzby]
tags: [chyby, cislenik, format]
aka: ["jake kody chyb muze system vratit", "je chybova zprava podepsana"]
created: 2026-09-11
updated: 2026-09-11
---

# Číselník chybových kódů a formát chybové datové zprávy

> "V tomto případě `<SOAP Header>` neobsahuje ani XML signature ani certifikát."
> - [[popis-rozhrani]] v1.2, kap. 3.5

Chybová datová zpráva je element `<Odpoved>` s vnořenými `<Hlavicka>` a `<Chyba>`, případně s opakovanými elementy `<Varovani>`. Podle kap. 3.5 obsahuje chybový kód a textové chybové hlášení buď o kritické chybě přijaté datové zprávy, nebo o dočasné technické chybě zpracování na straně společného technického zařízení správce daně.

| Položka | Datová oblast | Povinná | XML jméno |
|---|---|---|---|
| UUID zprávy | `<Hlavicka>` | ne | `uuid_zpravy` |
| Datum a čas odmítnutí zprávy | `<Hlavicka>` | ne | `dat_odmit` |
| Chybový kód | `<Chyba>` | ano | `kod` |
| Textový popis chyby | `<Chyba>` | ano | hodnota elementu `Chyba` |
| Příznak neprodukčního prostředí | `<Chyba>` | ne | `test` |
| Kód varování | `<Varovani>` | ne | `kod_varov` |
| Textový popis varování | `<Varovani>` | ne | hodnota elementu `Varovani` |

Formát kódu podle kap. 3.5.2.3: maska `^-?\d{1,3}$`, celé maximálně tříciferné dekadické číslo, hodnoty kladné, nulové i záporné, rozsah -999 až 999. XSD typ `tns:KodChybaType`.

Textový popis chyby je podle kap. 3.5.2.4 řetězec do 100 znaků v českém jazyce bez diakritiky, protože povolené znaky jsou v dolní ASCII sadě - dekadické kódy 9, 10, 13 nebo 32 až 126.

Element `<Varovani>` je v chybové zprávě relevantní pouze pro kód 0, viz [[eet-kod-chyba-0]].

Obsazené kódy číselníku: [[eet-kod-chyba-minus-1]], [[eet-kod-chyba-0]], [[eet-kod-chyba-2]], [[eet-kod-chyba-3]], [[eet-kod-chyba-4]], [[eet-kod-chyba-6]], [[eet-kod-chyba-7]], [[eet-kod-chyba-8]]. Rozsahy -999 až -2, 1 a 9 až 999 jsou rezervovány pro budoucí použití, kódy 1 a 5 byly používány před verzí datové zprávy 4.
