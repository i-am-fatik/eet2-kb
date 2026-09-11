---
id: eet-polozka-cerp-zuct
title: cerp_zuct - celková částka plateb, které jsou následným čerpáním nebo zúčtováním platby
type: polozka
domain: [rozhrani]
status: platne
sources: [popis-rozhrani, xml-schema]
spec_ref: ["popis-rozhrani v1.2 kap. 3.3.3.12", "xml-schema v4.1 CastkaType"]
rests_on: [eet-polozka-celk-trzba]
tags: [data, castka, cerpani-zuctovani]
aka: ["co je cerp_zuct", "je cerp_zuct povinne"]
created: 2026-09-11
updated: 2026-09-11
---

# cerp_zuct - celková částka plateb, které jsou následným čerpáním nebo zúčtováním platby

> "Finanční položky, které datová zpráva neobsahuje, nebo nemají vyplněnou hodnotu, jsou považovány za prázdné, tj. nedefinované (pozor: takové položky nebudou považovány za číselnou hodnotu 0). Položky s prázdnou hodnotou jsou v XML zprávě nepřípustné."
> - [[popis-rozhrani]] v1.2, kap. 3.3.3.12

Kapitola 3.3.2 uvádí `cerp_zuct` jako položku 14, celkovou částku plateb, které jsou následným čerpáním nebo zúčtováním platby. Kapitola 3.3.3.12 ji řadí mezi finanční položky tržby vedle `celk_trzba` a `urceno_cerp_zuct`. Číselný formát, maska a zákaz číselně nevýznamných vedoucích nul a znaku minus před nulovou hodnotou jsou shodné s [[eet-polozka-celk-trzba]].

| Vlastnost | Hodnota |
|---|---|
| datová oblast | `<Data>`, atribut |
| povinná | ne |
| maska | `^((0\|-?[1-9]\d{0,7})\.\d\d\|-0\.(0[1-9]\|[1-9]\d))$` |
| délka | 4 až 11 znaků nezáporné, 5 až 12 znaků záporné |
| XSD typ | `tns:CastkaType` (`minExclusive` -100000000, `maxExclusive` 100000000) |
| příklad | `237.00` |

`cerp_zuct` je nepovinná finanční položka vedle [[eet-polozka-celk-trzba]] a [[eet-polozka-urceno-cerp-zuct]] a nevstupuje do [[eet-pravidlo-jednoznacny-kod-trzby]] - tabulka jeho základních datových položek uvádí jen `eic_popl`, `id_jednotky`, `id_pokl`, `porad_cis`, `dat_trzby` a `celk_trzba`.
