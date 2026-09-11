---
id: eet-provoz-minimalni-datum-trzby
title: Minimální datum a čas přijetí tržby podle prostředí
type: pravidlo
domain: [provoz]
status: platne
sources: [pristup-playground, pristup-produkce]
spec_ref: ["pristup-playground v1.1 kap. 4.1", "pristup-produkce v1.1 kap. 4.1"]
rests_on: [eet-pravidlo-propustne-kontroly]
tags: [datum, provoz, playground, produkce, tlp-amber]
aka: ["od kdy prijima playground trzby", "od kdy prijima produkce trzby", "jaky je prechodny rezim produkce pred rokem 2027"]
created: 2026-09-11
updated: 2026-09-11
---

# Minimální datum a čas přijetí tržby podle prostředí

> "Minimální datum a čas přijetí tržby na playgroundu verze 4: 01.07.2026, 00:00."
> - [[pristup-playground]] v1.1, kap. 4.1

> "Minimální datum a čas přijetí tržby na produkčním prostředí: 01.01.2027, 0:00 (před tímto datem v přechodném režimu od 01.11.2026)."
> - [[pristup-produkce]] v1.1, kap. 4.1

| Prostředí | Minimální datum a čas přijetí tržby |
|---|---|
| playground verze 4 | 01.07.2026, 00:00 |
| produkce, přechodný režim | 01.11.2026 |
| produkce | 01.01.2027, 0:00 |

Číselné hodnoty těchto mezí jsou shodné s mezemi, které pro kontrolu data a času tržby uvádí [[eet-pravidlo-propustne-kontroly]] s odkazem na [[popis-rozhrani]]. Terminologie obou zdrojů se ale liší: tento dokument mluví o datu a čase přijetí tržby, zatímco [[popis-rozhrani]] a na něm založená nota [[eet-pravidlo-propustne-kontroly]] mluví o datu a čase uskutečnění tržby. Vault tento rozdíl v pojmenování zaznamenává, nerozhoduje ho.
