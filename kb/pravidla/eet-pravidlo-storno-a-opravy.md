---
id: eet-pravidlo-storno-a-opravy
title: Storno a opravy evidované tržby
type: pravidlo
domain: [rozhrani]
status: doplnkove
sources: [seminar-vyvojari]
spec_ref: ["seminar-vyvojari, snímek 58 - Specifické případy: Storno a opravy", "seminar-vyvojari, snímek 17 - Obsah evidenční povinnosti"]
rests_on: [eet-pojem-evidencni-povinnost]
tags: [storno, oprava, zaporna-castka]
aka: ["jak stornovat zaevidovanou trzbu", "jak opravit chybne zaevidovanou trzbu", "jak se parovat na puvodni trzbu", "jake datum uvest u storna"]
created: 2026-09-11
updated: 2026-09-11
---

# Storno a opravy evidované tržby

> "Opravy a storna se nevážou na původní tržbu."
> - [[seminar-vyvojari]], snímek 58 - Storno a opravy

Snímek 17 tutéž skutečnost uvádí jako součást obsahu evidenční povinnosti: "Možnost provádění storna a oprav – nelze párovat na původní zaevidovanou tržbu."

Postupy podle snímku 58:

| Situace | Postup |
|---|---|
| storno | Zaslat zprávu se zápornou částkou. |
| oprava chybně zaevidované tržby, varianta a) | Zaslat storno zprávu (jako výše) a následně zaslat správnou zprávu o tržbě. |
| oprava chybně zaevidované tržby, varianta b) | Nebo zaslat „rozdílovou“ datovou zprávu. |

> "Oboje s aktuálním datem a časem uskutečnění tržby, nikoli s datem a časem původní tržby. UUID vždy nové. Ostatní parametry podle reálného stavu."
> - [[seminar-vyvojari]], snímek 58 - Storno a opravy

Údaje zprávy o stornu nebo opravě:

| Položka | Hodnota |
|---|---|
| datum a čas uskutečnění tržby (`dat_trzby`) | aktuální, nikoli původní, viz [[eet-polozka-dat-trzby]] |
| UUID zprávy (`uuid_zpravy`) | vždy nové, viz [[eet-polozka-uuid-zpravy]] |
| celková částka (`celk_trzba`) | u storna záporná, viz [[eet-polozka-celk-trzba]] |
| ostatní parametry | podle reálného stavu |

Aktuální datum a čas uskutečnění tržby odlišuje storno od opakovaného zaslání téže tržby po výpadku, kde se `dat_trzby` naopak nemění - viz [[eet-pravidlo-mezni-doba-odezvy]].

Prezentace neuvádí žádnou položku, kterou by se storno nebo oprava označovala, ani jak se rozdílová zpráva liší od běžné zprávy o tržbě jinak než částkou.
