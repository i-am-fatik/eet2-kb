---
id: eet-kod-chyba-0
title: Chybový kód 0 - Datovou zpravu evidovane trzby v overovacim modu se podarilo zpracovat
type: kod
domain: [rozhrani]
status: platne
cislenik: chyba
kod: "0"
sources: [popis-rozhrani]
spec_ref: ["popis-rozhrani v1.2 kap. 3.5.4"]
rests_on: [eet-pravidlo-cislenik-chyb]
tags: [chyby, cislenik]
created: 2026-09-11
updated: 2026-09-11
---

# Chybový kód 0

Text chybové zprávy podle číselníku v [[popis-rozhrani]] v1.2, kap. 3.5.4:

> "Datovou zpravu evidovane trzby v overovacim modu se podarilo zpracovat"

Jediný kód, který neznamená odmítnutí. Vrací se v ověřovacím módu na validní zprávu. Podle kap. 3.5 je právě u tohoto kódu chybová datová zpráva doplněna o textová varování a jejich číselné kódy stejným způsobem jako potvrzovací datová zpráva - viz [[eet-pravidlo-propustne-kontroly]].
