---
id: eet-provoz-provozni-doba
title: Provozní doba, dostupnost a podpora prostředí EET 2.0
type: pravidlo
domain: [provoz]
status: platne
sources: [pristup-playground, pristup-produkce]
spec_ref: ["pristup-playground v1.1 kap. 4.1, 4.2", "pristup-produkce v1.1 kap. 4.1, 4.2"]
rests_on: []
tags: [provoz, dostupnost, podpora, tlp-amber]
aka: ["jaka je dostupnost playgroundu", "kdy je servisni okno pro udrzbu", "jak nahlasit kritickou zavadu produkce"]
created: 2026-09-11
updated: 2026-09-11
---

# Provozní doba, dostupnost a podpora prostředí EET 2.0

> "Provozní doba PG je 24x7, dostupnost 8x5. Servisní okno pro údržbu je z pravidla každý čtvrtek mezi 20:00 a 6:00 hodin."
> - [[pristup-playground]] v1.1, kap. 4.1

> "Provozní doba produkčního prostředí je 24x7. Servisní okno pro údržbu je zpravidla každý čtvrtek mezi 20:00 a 6:00 hodin."
> - [[pristup-produkce]] v1.1, kap. 4.1

> "Celková roční dostupnost PG je nastavena na úroveň 99,5 %."
> - [[pristup-playground]] v1.1, kap. 4.1

> "Celková roční dostupnost produkčního prostředí je nastavena na úroveň 99,99 % s dobou vyřešení kritické závady do 4 hodin."
> - [[pristup-produkce]] v1.1, kap. 4.1

Anglická jazyková verze téhož dokumentu (`docs/EET_pristupove_provozni_informace_produk-3.pdf`, kap. 4.1) zapisuje tytéž údaje jinak: servisní okno „between 20:00 and 06:00“ a dostupnost „99.99 %“, zatímco normativní česká verze uvádí „mezi 20:00 a 6:00 hodin“ a „99,99 %“. Vault obě znění zaznamenává, nerozhoduje mezi nimi.

Playground kapitola 4.1 hodnotu doby řešení kritické závady neuvádí, tato hodnota je specifikována jen pro produkční prostředí.

Produkce dále uvádí:

> "Vysoká dostupnost produkčního prostředí je zajištěna provozem ve dvou nezávislých geograficky oddělených datových centrech SPCSS v režimu Active-Active s globálním load balancingem a globálním DNS."
> - [[pristup-produkce]] v1.1, kap. 4.1

| Prostředí | Provozní doba | Servisní okno | Roční dostupnost | Řešení kritické závady |
|---|---|---|---|---|
| playground | 24x7 (dostupnost 8x5) | čtvrtek 20:00-6:00 | 99,5 % | neuvedeno |
| produkce | 24x7 | čtvrtek 20:00-6:00 | 99,99 % | do 4 hodin |

> "Podpora provozu PG je poskytována prostřednictvím e-mailové adresy epodpora@fs.gov.cz, popř. kontaktního formuláře na stránkách https://eet.gov.cz."
> - [[pristup-playground]] v1.1, kap. 4.2

> "Podpora provozu produkčního prostředí je poskytována prostřednictvím e-mailové adresy epodpora@fs.gov.cz, popř. kontaktního formuláře na stránkách https://eet.gov.cz."
> - [[pristup-produkce]] v1.1, kap. 4.2

Podpora obou prostředí je tedy shodná: e-mail epodpora@fs.gov.cz nebo kontaktní formulář na https://eet.gov.cz.

Minimální datum a čas přijetí tržby, uvedené v téže kapitole 4.1, drží samostatná nota [[eet-provoz-minimalni-datum-trzby]].
