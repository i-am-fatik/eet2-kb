---
id: eet-polozka-overeni
title: overeni - Příznak ověřovacího módu odesílání
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.3.3.4", "xml-schema v4.1 TrzbaHlavickaType"]
rests_on: []
tags: [hlavicka, priznak, overovaci-mod]
aka: ["jak odeslat testovaci trzbu v overovacim modu", "co znamena atribut overeni"]
created: 2026-09-11
updated: 2026-09-11
---

# overeni - Příznak ověřovacího módu odesílání

> "Je to příznak, kterým si pokladní zařízení poplatníka může nastavit ověřovací mód odesílání datových zpráv evidovaných tržeb."
> - [[popis-rozhrani]] v1.2, kap. 3.3.3.4

Tatáž kapitola uvádí, že jde o atribut XML elementu `<Hlavicka>`, že je-li příznak uveden s hodnotou true (nebo 1), je datová zpráva zpracována v ověřovacím módu, a že není-li uveden nebo má-li hodnotu false (nebo 0), je zpráva zpracována v ostrém módu. Datový formát je určen příslušnou W3C specifikací pro typ boolean.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Hlavicka>`, atribut |
| povinná | ne |
| maska | neuvedena regulárním výrazem, dle W3C `xs:boolean`: `true`, `false`, `1`, `0` |
| délka | 1 až 5 znaků |
| XSD typ | `xs:boolean` |
| příklad | `true` |

Hodnota atributu určuje mód odeslání podle [[eet-pravidlo-mody-odesilani]]. V hlavičce sousedí s [[eet-polozka-prvni-zaslani]] a [[eet-polozka-uuid-zpravy]].
