---
id: eet-polozka-celk-trzba
title: celk_trzba - celková částka tržby
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.3.3.12", "xml-schema v4.1 CastkaType"]
rests_on: []
tags: [data, castka, format]
aka: ["jak zapsat zapornou castku", "proc je 020.45 chybne"]
created: 2026-09-11
updated: 2026-09-11
---

# celk_trzba - celková částka tržby

> "Aby byla zaručena jednoznačná korespondence mezi číselnou hodnotou finanční položky a řetězcem znaků dekadické reprezentace této hodnoty, jsou zakázány číselně nevýznamné vedoucí nuly a znak minus (znak pomlčky s dekadickým kódem 45 v ASCII znakové sadě) před nulovou hodnotou."
> - [[popis-rozhrani]] v1.2, kap. 3.3.3.12

Kapitola 3.3.3.12 platí pro všechny tři finanční položky: `celk_trzba`, `urceno_cerp_zuct` a `cerp_zuct`. Hodnoty jsou v českých korunách, v dekadické soustavě s právě dvěma povinnými desetinnými místy a řádovou tečkou, a mohou být kladné, nulové i záporné.

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Data>`, atribut |
| povinná | ano (`urceno_cerp_zuct` a `cerp_zuct` nepovinné) |
| maska | `^((0\|-?[1-9]\d{0,7})\.\d\d\|-0\.(0[1-9]\|[1-9]\d))$` |
| délka | 4 až 11 znaků nezáporné, 5 až 12 znaků záporné |
| rozsah | -99 999 999,99 až 99 999 999,99 Kč |
| XSD typ | `tns:CastkaType` (`minExclusive` -100000000, `maxExclusive` 100000000) |
| příklady | `250.00`, `-187.20`, `0.56` |

Chybné a správné zápisy podle téže kapitoly:

| Číselná hodnota | Chybná reprezentace | Správná reprezentace |
|---|---|---|
| 20,45 | `020.45` | `20.45` |
| 10,25 | `00010.25` | `10.25` |
| 0 | `-0.00` | `0.00` |
| 0 | `-00.00` | `0.00` |
| 0,2 | `.20` | `0.20` |
| -100 | `-00100.00` | `-100.00` |

Finanční položka, kterou zpráva neobsahuje, je považována za prázdnou, tedy nedefinovanou - podle kap. 3.3.3.12 nebude považována za číselnou hodnotu 0. Položky s prázdnou hodnotou jsou v XML zprávě nepřípustné.

`celk_trzba` vstupuje do [[eet-pravidlo-jednoznacny-kod-trzby]] jako poslední v pořadí.
