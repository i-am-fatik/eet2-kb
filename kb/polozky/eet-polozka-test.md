---
id: eet-polozka-test
title: test - příznak neprodukčního prostředí
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.4.2.4", "popis-rozhrani v1.2 kap. 3.5.2.5", "xml-schema v4.1 boolean"]
rests_on: [eet-pravidlo-mody-odesilani]
tags: [test, playground, potvrzeni, chyba]
aka: ["jak poznam testovaci odpoved", "co znamena test=true"]
created: 2026-09-11
updated: 2026-09-11
---

# test - příznak neprodukčního prostředí

> "Je-li tento příznak uveden a má-li hodnotu true (nebo 1), byla datová zpráva přijata do neprodukčního prostředí"
> - [[popis-rozhrani]] v1.2, kap. 3.4.2.4 a shodně kap. 3.5.2.5

Podle obou kapitol jde o atribut, kterým společné technické zařízení správce daně informuje pokladní zařízení poplatníka, zda datová zpráva evidované tržby byla zaslána do produkčního nebo neprodukčního prostředí - viz [[eet-pravidlo-mody-odesilani]]. Není-li příznak uveden, byla zpráva přijata do produkčního prostředí. Datový formát je určen příslušnou W3C specifikací (https://www.w3.org/TR/xmlschema11-2/#boolean).

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Potvrzeni>` (kap. 3.4.2.4) nebo `<Chyba>` (kap. 3.5.2.5), atribut |
| povinná | ne |
| XSD typ | `xs:boolean` |
| délka | 1 až 5 znaků |
| příklad | `true` |

V potvrzovací zprávě jde spolu s posledními dvěma znaky `-ff` v [[eet-polozka-pok]] o druhý znak neprodukčního prostředí.
