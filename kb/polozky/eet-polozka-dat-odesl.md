---
id: eet-polozka-dat-odesl
title: dat_odesl - Datum a čas odeslání zprávy
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.3.3.2", "xml-schema v4.1 dateTime"]
rests_on: []
tags: [hlavicka, datum, cas]
aka: ["jaky format ma mit datum odeslani zpravy", "musi datum odeslani obsahovat casovou zonu"]
created: 2026-09-11
updated: 2026-09-11
---

# dat_odesl - Datum a čas odeslání zprávy

> "Datum a čas odeslání zprávy je okamžik, kdy pokladní zařízení odeslalo datovou zprávu evidované tržby."
> - [[popis-rozhrani]] v1.2, kap. 3.3.3.2

Tatáž kapitola uvádí, že jde o atribut XML elementu `<Hlavicka>`, že datový formát je určen datovým typem DateTime dle ISO 8601 ve tvaru "rrrr-mm-ddThh:mm:ss±hh:mm" a že datum a čas se uvádí jako lokální čas s povinným vyznačením časové zóny. Platí pravidlo +01:00 pro zimní čas SEČ, +02:00 pro letní čas SELČ a +hh:mm, -hh:mm nebo řetězec "Z" pro jinou časovou zónu.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Hlavicka>`, atribut |
| povinná | ano |
| maska | `\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(Z\|[+\-]\d\d:\d\d)` |
| délka | 25 znaků |
| XSD typ | `tns:dateTime` (restrikce `xs:dateTime`, pattern) |
| příklady | `2027-01-09T04:25:28+01:00` (zimní čas), `2027-06-09T05:25:28+02:00` (letní čas) |

Formát je shodný s [[eet-polozka-dat-trzby]], jejíž kapitola na tuto položku výslovně odkazuje jako na vzor formátu. Položka je součástí hlavičky [[eet-pojem-datova-zprava-evidovane-trzby]] vedle [[eet-polozka-uuid-zpravy]] a [[eet-polozka-prvni-zaslani]].
