---
id: eet-pravidlo-nabiti-a-cerpani
title: Nabití a čerpání - kdy jsou položky čerpání a zúčtování povinné
type: pravidlo
domain: [rozhrani]
status: doplnkove
sources: [seminar-vyvojari]
spec_ref: ["seminar-vyvojari, snímek 67 - Specifické případy: Nabití a čerpání 1/2", "seminar-vyvojari, snímek 68 - Specifické případy: Nabití a čerpání 2/2", "seminar-vyvojari, snímek 69 - Specifické případy: Nabitím a čerpáním není následující situace 1/2", "seminar-vyvojari, snímek 70 - Specifické případy: Nabitím a čerpáním není následující situace 2/2", "seminar-vyvojari, snímek 22 - Rozsah zasílaných údajů o evidované tržbě"]
rests_on: [eet-pojem-evidencni-povinnost]
tags: [nabiti, cerpani, voucher, penezenka]
aka: ["kdy vyplnit urceno cerp zuct", "eviduje se nabiti darkove karty", "eviduje se uplatneni voucheru", "eviduji se fleetove karty"]
created: 2026-09-11
updated: 2026-09-11
---

# Nabití a čerpání - kdy jsou položky čerpání a zúčtování povinné

> "Evidenci tržeb podléhají obě tyto transakce, pokud k nim dochází formou kontaktní platby."
> - [[seminar-vyvojari]], snímek 67 - Nabití a čerpání 1/2

Snímek 67 uvádí, že se to vztahuje na případy využívání kupónů, voucherů, žetonů, elektronických peněženek, čipových karet a náramků apod., kdy dochází k nabití částky určené k následnému čerpání a k čerpání takto nabité částky.

> "V případech, kdy dochází k nabití a čerpání, jsou povinnou součástí datové věty položky: Celková částka plateb určená k následnému čerpání nebo zúčtování. Celková částka plateb, které jsou následným čerpáním nebo zúčtováním platby."
> - [[seminar-vyvojari]], snímek 67 - Nabití a čerpání 1/2

Tytéž dvě položky vyjmenovává snímek 22 mezi povinnými ve vybraných případech, snímek 46 je v datovém modelu označuje jako volitelné a pojmenovává je `urceno/cerp_zuct`.

Příklady ze snímku 68:

| Případ | Co se eviduje |
|---|---|
| Zákazník si ve fitness centru nabije čip, ze kterého se při návštěvě strhává částka za 1 vstup. | Eviduje se jak nabití čipu, tak jeho použití + datová zpráva obsahuje příznaky nabití a čerpání. |
| Obchodní centrum vydá předplacenou kartu uplatnitelnou u všech obchodníků v centru, ze které jsou při nákupu strhávány částky. | Eviduje se jak nabití předplacené karty, tak každé její uplatnění; datová zpráva obsahuje příznaky nabití a čerpání. |

Snímek 68 dodává: evidují se pouze ta nabití a čerpání, která jsou prováděna kontaktně.

## Co nabitím a čerpáním není

Snímek 69 vyjímá platbu za konkrétní zboží či služby, na které je zákazníkovi předán poukaz, voucher či obdobný instrument, na základě něhož dochází pouze k odebrání zboží či služby. Na příkladu dárkového poukazu na masáž zad v hodnotě 1 000 Kč: eviduje se pouze platba za zakoupení poukazu, pokud k ní došlo kontaktním způsobem, a následné uplatnění poukazu není platbou a neeviduje se.

> "Evidenci tržeb nepodléhají případy, kdy v okamžiku výdeje zboží nebo služeb dochází pouze k zaznamenání částek, které budou poplatníkem následně vyúčtovány – tj. nedochází vůbec k platbě (ta je prováděna až s odstupem – zpravidla za předem stanovený časový úsek)."
> - [[seminar-vyvojari]], snímek 70 - Nabitím a čerpáním není následující situace 2/2

Příklady ze snímku 70: platby za závodní stravování poskytované zaměstnancům externím subjektem, který následně provádí vyúčtování se zaměstnavatelem, a platby za čerpání pohonných hmot prostřednictvím fleetových karet, CCS karet. Následné vypořádání vyúčtované částky se eviduje pouze pokud k němu dochází formou kontaktní platby.

Podmínku kontaktnosti drží [[eet-pojem-kontaktni-platba]]. Formát finančních položek drží [[eet-polozka-celk-trzba]], která podle [[popis-rozhrani]] platí i pro položky čerpání a zúčtování.
