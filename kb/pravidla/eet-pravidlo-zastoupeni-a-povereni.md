---
id: eet-pravidlo-zastoupeni-a-povereni
title: Evidence tržeb v zastoupení a v rámci pověření
type: pravidlo
domain: [rozhrani]
status: doplnkove
sources: [seminar-vyvojari]
spec_ref: ["seminar-vyvojari, snímek 23 - Možnost evidovat tržby v zastoupení a v rámci pověření", "seminar-vyvojari, snímek 71 - Specifické případy: Přímé zastoupení", "seminar-vyvojari, snímek 72 až 74 - Specifické případy: Pověření 1/3 až 3/3", "seminar-vyvojari, snímek 75 - Specifické případy: Nepřímé zastoupení", "seminar-vyvojari, snímek 76 - Specifické případy: souhrnná tabulka", "seminar-vyvojari, snímek 77 - Specifické případy: rozhodný příjem u více poplatníků"]
rests_on: [eet-pojem-evidencni-povinnost]
tags: [zastoupeni, povereni, eic, certifikat]
aka: ["kdo eviduje trzbu za jineho poplatnika", "ciji eic uvest pri poverení", "ktery certifikat pouzit pri zastoupeni", "eviduji za komisionare"]
created: 2026-09-11
updated: 2026-09-11
---

# Evidence tržeb v zastoupení a v rámci pověření

> "Jedná-li poplatník jménem a na účet jiného poplatníka, je povinen evidovat tržbu ten poplatník, o jehož tržbu se jedná."
> - [[seminar-vyvojari]], snímek 71 - Přímé zastoupení

Snímek 23 rozlišuje tři situace: přímé zastoupení (poplatník eviduje jménem a na účet jiného poplatníka, obdobou je situace, kdy eviduje zaměstnanec poplatníka), nepřímé zastoupení (poplatník eviduje svým jménem na účet jiného poplatníka) a pověření (poplatník je pověřen evidováním tržeb za jiného poplatníka, nebo evidencí tržeb více poplatníků).

Týž snímek dodává, že tržbu může evidovat zástupce, zastoupený však nese plnou odpovědnost za splnění evidenční povinnosti.

> "Jedná-li poplatník svým jménem na účet jiného poplatníka, je povinen evidovat tržbu ten, kdo jedná svým jménem na účet jiného (typicky situace, kdy je uzavřena komisionářská smlouva)."
> - [[seminar-vyvojari]], snímek 75 - Nepřímé zastoupení

U nepřímého zastoupení snímek 75 uvádí, že tržbu zaeviduje zástupce v celém rozsahu, bez ohledu na to, zda obsahuje či neobsahuje plnění, které by bylo příjmem na jeho straně (zejména marži), a že v datové zprávě nebude uvedeno EIČ zastoupeného.

> "Poplatník, kterému tržba plyne, může pověřit evidováním tržby jiného poplatníka."
> - [[seminar-vyvojari]], snímek 72 - Pověření 1/3

Souhrnná tabulka ze snímku 76:

| | EIČ poplatníka | EIČ pověřujícího | Evidenční jednotka | Certifikát |
|---|---|---|---|---|
| Vlastní tržba | vlastní | ne | vlastní | vlastní |
| Přímé zastoupení | zastoupeného | ne | zastoupeného | zastoupeného |
| Nepřímé zastoupení | zástupce | ne | zástupce | zástupce |
| Pověření | zástupce | EIČ zastoupeného | zástupce | zástupce |
| Pověření více popl. | zástupce | ne, ale příznak, že pověřen více popl. | zástupce | zástupce |
| Pověření více popl. (mimo skupinu) | zástupce | EIČ některého ze zastoupených + příznak, že pověřen více popl. | zástupce | zástupce |

Poslední dva řádky rozvádějí snímky 73 a 74. Plyne-li jedna evidovaná tržba více poplatníkům (např. na základě smlouvy o společnosti nebo na základě spoluvlastnictví), mohou tito poplatníci pověřit jednoho z nich - pak položka „EIČ pověřujícího poplatníka“ nebude vyplněna. Pověří-li poplatníka mimo skupinu, bude tato položka vyplněna EIČ některého z poplatníků, kterému evidovaná tržba (z části) plyne. V obou případech se uvádí příznak, že evidovaná tržba plyne více poplatníkům.

Položky nese [[eet-polozka-eic-poverujiciho]] a [[eet-polozka-povereni-vice-popl]]. Podpis zprávy certifikátem popisuje [[eet-cert-profil-pokladniho-certifikatu]].

> "V případě, kdy v rámci jedné platby dochází ke vzniku rozhodného příjmu u více poplatníků, musí být tržba evidována zvlášť za každého poplatníka."
> - [[seminar-vyvojari]], snímek 77 - Specifické případy

Příklad ze snímku 77: na čerpací stanici zákazník zakoupí benzín a kávu, prodejce eviduje vlastní tržby (za prodej občerstvení) a tržby v pověření za jiného poplatníka (prodej pohonných hmot), a platbu zaeviduje prostřednictvím dvou samostatných datových zpráv, vždy s údaji relevantními pro evidovanou tržbu daného poplatníka. Výjimkou je podle téhož snímku vlastní tržba v kombinaci s tržbou přijatou v nepřímém zastoupení nebo více tržeb přijatých v nepřímém zastoupení za více poplatníků - ty lze evidovat jednou datovou zprávou.

Že evidenční jednotka eviduje tržby v nepřímém zastoupení za jiného poplatníka, je oznamovaným údajem - viz [[eet-pravidlo-oznamovaci-povinnost]].
