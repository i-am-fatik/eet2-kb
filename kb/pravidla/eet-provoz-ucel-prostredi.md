---
id: eet-provoz-ucel-prostredi
title: Účel a právní povaha neprodukčního a produkčního prostředí
type: pravidlo
domain: [provoz]
status: platne
sources: [pristup-playground, pristup-produkce]
spec_ref: ["pristup-playground v1.1 kap. 1.1", "pristup-produkce v1.1 kap. 1.1"]
rests_on: [eet-polozka-pok, eet-pojem-e-trzba]
tags: [playground, produkce, pok, provoz, tlp-amber]
aka: ["je pok z playgroundu platny", "k cemu slouzi playground", "kdo pouziva produkcni prostredi"]
created: 2026-09-11
updated: 2026-09-11
---

# Účel a právní povaha neprodukčního a produkčního prostředí

> "Neprodukční prostředí (playground) slouží výhradně vývojářům softwaru pro pokladní zařízení, tedy nikoli koncovým uživatelům pokladních zařízení. Zaslání datové zprávy do neprodukčního prostředí není zasláním údajů o evidované tržbě ve smyslu §16 ZoET, tj. POK vrácený neprodukčním prostředím není platným potvrzovacím kódem."
> - [[pristup-playground]] v1.1, kap. 1.1

> "Produkční prostředí je určeno pro poplatníky EET a bude sloužit pro rutinní provoz, tj. především příjem a potvrzování datových zpráv s údaji o evidovaných tržbách."
> - [[pristup-produkce]] v1.1, kap. 1.1

> "Informace o neprodukčním prostředí (playground), které slouží výhradně vývojářům softwaru pro pokladní zařízení, jsou uvedeny v samostatném dokumentu."
> - [[pristup-produkce]] v1.1, kap. 1.1

Oba dokumenty se shodují: playground je určen jen vývojářům pokladního softwaru, produkce je určena poplatníkům pro rutinní provoz evidence tržeb.

Zvláštní tvar [[eet-polozka-pok]] s koncovkou -ff podle [[popis-rozhrani]] odpovídá právě této skutečnosti popsané v obou dokumentech - přijetí zprávy playgroundem nezakládá zaslání údajů o evidované tržbě ve smyslu §16 ZoET a vrácený kód proto není platným potvrzovacím kódem.
