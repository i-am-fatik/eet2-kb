---
id: eet-pojem-evidencni-identifikacni-cislo
title: Evidenční identifikační číslo (EIČ) - z čeho vzniká
type: pojem
domain: [rozhrani]
status: doplnkove
sources: [seminar-vyvojari]
spec_ref: ["seminar-vyvojari, snímek 20 - Evidenční identifikační číslo (EIČ)", "seminar-vyvojari, snímek 21 - Evidenční identifikační číslo (EIČ)"]
rests_on: []
tags: [eic, dic, rodne-cislo, vcp]
aka: ["odkud vezmu eic", "co kdyz nemam dic", "co je vcp", "eic u ciznce bez rodneho cisla"]
created: 2026-09-11
updated: 2026-09-11
---

# Evidenční identifikační číslo (EIČ) - z čeho vzniká

> "Nemá-li poplatník, který je fyzickou osobou, přiděleno DIČ, je EIČ tvořeno kódem „CZ“ a kmenovou částí, kterou tvoří: a) rodné číslo poplatníka (RČ), nebo b) správcem daně zpřístupněný vlastní identifikátor poplatníka (VČP), který nemá RČ."
> - [[seminar-vyvojari]], snímek 20 - Evidenční identifikační číslo (EIČ)

Snímek 20 uvádí jako první možnost prosté DIČ, a dodává, že správce daně poplatníkovi, který je fyzickou osobou a který nemá rodné číslo, zpřístupní prostřednictvím DIS+ vlastní identifikátor správce daně.

Schéma ze snímku 21:

| Poplatník | EIČ | Odkud |
|---|---|---|
| právnická osoba, povinnost registrace k DPPO | DIČ | přidělení DIČ rozhodnutím |
| fyzická osoba, plátce DPH, povinnost registrace k DPH | DIČ | přidělení DIČ rozhodnutím |
| fyzická osoba bez povinnosti registrace k DPFO, „našinec“ | RČ | zná z povahy věci |
| fyzická osoba bez povinnosti registrace k DPFO, „cizinec“ | VČP | zjistí z DIS+ |

EIČ se zasílá v položce `eic_popl` a je zároveň CN pokladního certifikátu - viz [[eet-cert-profil-pokladniho-certifikatu]]. Čí EIČ se uvádí při zastoupení a pověření, drží [[eet-pravidlo-zastoupeni-a-povereni]] a [[eet-polozka-eic-poverujiciho]].
