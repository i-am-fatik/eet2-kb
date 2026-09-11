---
id: eet-pravidlo-mezni-doba-odezvy
title: Mezní doba odezvy a opakované zaslání po výpadku
type: pravidlo
domain: [rozhrani]
status: doplnkove
sources: [seminar-vyvojari]
spec_ref: ["seminar-vyvojari, snímek 17 - Obsah evidenční povinnosti", "seminar-vyvojari, snímek 56 - Specifické případy: Výpadek internetového připojení 1/2", "seminar-vyvojari, snímek 57 - Specifické případy: Výpadek internetového připojení 2/2"]
rests_on: [eet-pojem-evidencni-povinnost]
tags: [timeout, vypadek, opakovane-zaslani, lhuty]
aka: ["jak dlouho cekat na odpoved", "co delat pri vypadku internetu", "co menit pri opakovanem zaslani trzby", "kdy nejpozdeji doslat trzbu"]
created: 2026-09-11
updated: 2026-09-11
---

# Mezní doba odezvy a opakované zaslání po výpadku

> "Mezní doba odezvy nejméně 2 sekundy."
> - [[seminar-vyvojari]], snímek 17 - Obsah evidenční povinnosti

> "Při překročení mezní doby odezvy (např. při výpadku připojení) povinnost zaslat datovou zprávu bezodkladně po pominutí příčiny výpadku spojení, nejpozději do 48 hodin od uskutečnění evidované tržby."
> - [[seminar-vyvojari]], snímek 17 - Obsah evidenční povinnosti

Snímek 56 obě věty opakuje beze změny.

> "Po neúspěšném pokusu o zaevidování tržby (neobdržím POK) je třeba opakovat pokus o zaslání původních údajů zprávy (tělo původní, hlavička nová) do okamžiku, kdy obdržím POK."
> - [[seminar-vyvojari]], snímek 57 - Výpadek internetového připojení 2/2

Kdy se opakuje, podle téhož snímku:

| Podmínka | Znění na snímku 57 |
|---|---|
| bezodkladnost | Ne kdykoliv, ale bezodkladně po pominutí příčiny výpadku. |
| zákonná lhůta | Nejpozději do 48 hodin (zákonná lhůta). |
| po lhůtě | I po 48 hodinách (povinnost zaslat trvá, i když uběhla lhůta). |

Položky, které se při opakovaném zaslání mění, a ty, které se měnit nesmí. Snímek 57 vyjmenovává tři měnící se položky, XML jména k nim doplňuje snímek 46:

| Položka | Při opakovaném zaslání |
|---|---|
| UUID datové zprávy (`uuid_zpravy`) | mění se, viz [[eet-polozka-uuid-zpravy]] |
| První zaslání údajů o tržbě (`prvni_zaslani`) | mění se, z 1 na 0, viz [[eet-polozka-prvni-zaslani]] |
| Datum a čas odeslání datové zprávy (`dat_odesl`) | mění se, viz [[eet-polozka-dat-odesl]] |
| Datum a čas uskutečnění tržby (`dat_trzby`) | nemění se, snímek to zdůrazňuje vykřičníkem: "! nikoliv datum a čas uskutečnění tržby" |
| tělo zprávy, tedy údaje o tržbě | nemění se, "tělo původní, hlavička nová" |

Nezměněné tělo je současně důvod, proč opakovaná zpráva nezaloží novou tržbu - unikátnost tržby určuje [[eet-pravidlo-jednoznacny-kod-trzby]] z položek těla, nikoli z hlavičky.

Cílem opakování je obdržet [[eet-polozka-pok]] v [[eet-pojem-potvrzovaci-datova-zprava]].

Prezentace neuvádí, jak dlouho má pokladní zařízení na odpověď skutečně čekat ani kolik pokusů má provést. Uvádí jen mezní dobu odezvy nejméně 2 sekundy.
