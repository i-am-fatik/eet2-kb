---
id: eet-pravidlo-identifikatory-kontrol
title: Identifikátory kontrol transakčního systému a jejich kódy
type: pravidlo
domain: [rozhrani]
status: doplnkove
sources: [seminar-vyvojari]
spec_ref: ["seminar-vyvojari, snímek 50 Kontroly transakčního systému", "seminar-vyvojari, snímek 51 Chybové kódy", "seminar-vyvojari, snímek 52 Kódy varování"]
rests_on: [eet-pravidlo-kriticke-kontroly, eet-pravidlo-propustne-kontroly]
tags: [kontroly, kody, adis, varovani]
aka: ["co znamena oznaceni K4 nebo K11", "kolik varovani muze prijit v jedne odpovedi", "v jake casove zone se porovnava datum trzby"]
created: 2026-09-11
updated: 2026-09-11
---

# Identifikátory kontrol transakčního systému a jejich kódy

> "Před předáním zprávy úložišti ADIS provede systém sadu kontrol. Kritická kontrola při selhání zprávu zastaví a vrátí chybu; propustná kontrola zprávu nezastaví, ale přidá varování a její výsledek se předá do ADIS."
> - [[seminar-vyvojari]], snímek 50

Snímek 50 označuje jednotlivé kontroly kódy K2 až K12 a přiřazuje jim kódy odpovědi, snímek 51 doplňuje K13. Snímek uvozuje tabulku slovy "Níže výběr:".

| Kontrola | Popis na snímku | Druh | Kód |
|---|---|---|---|
| K2 | Zpráva není v XML tvaru v požadovaném kódování UTF-8 | kritická | 2 |
| K3 | Kontrola XML schématu | kritická | 3 |
| K4 | Podpis SOAP zprávy (cert, CRL) | kritická | 4 |
| K9 | Integrita EIČ poplatníka | kritická | 6 |
| K10 | Velikost SOAP zprávy (12 KB) | kritická | 7 |
| K13 | ADIS vrátil HTTP 400 | kritická | 8 |
| K5 | EIČ v certifikátu vs. ve zprávě | propustná | 1 |
| K8 | Integrita EIČ pověřujícího | propustná | 2 |
| K11 | Datum tržby do budoucnosti | propustná | 4 |
| K12 | Datum tržby do minulosti | propustná | 5 |

> "Odpověď může obsahovat 0 až 10 varování. Texty varování jsou uváděny bez diakritiky. Porovnání data tržby probíhá s ohledem na časovou zónu (převod do GMT)."
> - [[seminar-vyvojari]], snímek 52

Převod do GMT při porovnání data tržby ani označení kontrol K2 až K12 [[popis-rozhrani]] neuvádí. Normativní seznamy kontrol drží [[eet-pravidlo-kriticke-kontroly]] a [[eet-pravidlo-propustne-kontroly]], číselníky [[eet-pravidlo-cislenik-chyb]] a [[eet-pravidlo-cislenik-varovani]].
