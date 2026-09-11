---
id: eet-pravidlo-kriticke-kontroly
title: Kritické kontroly datové zprávy evidované tržby
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani]
spec_ref: ["popis-rozhrani v1.2 kap. 2.2.3"]
rests_on: [eet-pojem-datova-zprava-evidovane-trzby]
tags: [kontroly, validace, chyby]
aka: ["proc system nevydal pok", "jaky je limit velikosti zpravy", "proc system neodpovedel vubec"]
created: 2026-09-11
updated: 2026-09-11
---

# Kritické kontroly datové zprávy evidované tržby

> "Pokud jakákoliv z kritických kontrol neprojde, datová zpráva o evidované tržbě nebude přijata a POK nebude vydán."
> - [[popis-rozhrani]] v1.2, kap. 2.2.3

Seznam kritických kontrol podle téže kapitoly:

| # | Kontrola |
|---|---|
| 1 | kontrola kódování XML dokumentu - předepsáno je kódování UTF-8 |
| 2 | kontrola na konkrétní XML schéma (`*.xsd`) datové zprávy evidované tržby, které obsahuje přesnou definici struktury dat a formátů jednotlivých datových položek, a kontrola přítomnosti povinných položek |
| 3a | kontrola vydavatele pokladního certifikátu |
| 3b | kontrola platnosti pokladního certifikátu včetně kontroly CRL, které jsou aktuálně technickému zařízení dostupné |
| 3c | kryptografická kontrola vlastního elektronického podpisu vůči pokladnímu certifikátu |
| 4 | kontrola integrity EIČ poplatníka |
| 5 | kontrola na celkovou délku datové zprávy evidované tržby (tj. zpráva včetně SOAP obálky), která nesmí přesáhnout 12 kB |

Kapitola dále uvádí, že podle povahy chyby se zpracování může zastavit už při výskytu první kritické chyby, a že mezi chybové stavy patří i možné technické poruchy zpracování.

> "Při nalezení chyb, které by systém EET mohl vyhodnotit jako kybernetický útok, systém EET žádnou odpověď klientovi (tedy pokladnímu zařízení) nedává."
> - [[popis-rozhrani]] v1.2, kap. 2.2.3

Kontrolu 3 provádí podpis podle [[eet-pravidlo-podpis-datove-zpravy]]. Kontroly, které naopak POK nezadrží, drží [[eet-pravidlo-propustne-kontroly]].
