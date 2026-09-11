---
id: eet-kod-chyba-2
title: Chybový kód 2 - Kodovani XML neni platne
type: kod
domain: [rozhrani]
status: platne
cislenik: chyba
kod: "2"
sources: [popis-rozhrani]
spec_ref: ["popis-rozhrani v1.2 kap. 3.5.4"]
rests_on: [eet-pravidlo-cislenik-chyb]
tags: [chyby, cislenik]
created: 2026-09-11
updated: 2026-09-11
---

# Chybový kód 2

Text chybové zprávy podle číselníku v [[popis-rozhrani]] v1.2, kap. 3.5.4:

> "Kodovani XML neni platne"

Číselník k tomuto kódu uvádí poznámku, že podle situace je možné na tuto chybu reagovat i navrácením technické chyby, např. tzv. SOAP fault, nebo dokonce ignorováním datové zprávy, pokud je podezření, že se jedná o kybernetický útok. Odpovídá kritické kontrole 1 v [[eet-pravidlo-kriticke-kontroly]].
