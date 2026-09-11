---
id: eet-pravidlo-komunikacni-scenar
title: Základní schéma komunikace pokladního zařízení se systémem EET
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani]
spec_ref: ["popis-rozhrani v1.2 kap. 2.1"]
rests_on: [eet-pojem-datova-zprava-evidovane-trzby]
tags: [komunikace, request-response, scenar]
aka: ["je odpoved synchronni nebo asynchronni", "jak se odpoved parue k odeslane trzbe", "co prijde kdyz zprava neprojde"]
created: 2026-09-11
updated: 2026-09-11
---

# Základní schéma komunikace pokladního zařízení se systémem EET

> "Komunikace tedy probíhá v režimu: požadavek/odpověď (request/response)."
> - [[popis-rozhrani]] v1.2, kap. 2.1

Podle téže kapitoly platí, že potvrzovací datová zpráva je vytvořena bezprostředně poté, co odeslaná zpráva vyhoví kritickým kontrolám a je ji možné na straně finanční správy uložit, a že je vracena jako synchronní odpověď. S původní datovou zprávou je svázána číslem datové zprávy přiděleným poplatníkem, tedy UUID.

> "POK je pro každou správně přijatou datovou zprávu evidované tržby unikátní."
> - [[popis-rozhrani]] v1.2, kap. 2.1

Táž kapitola dále uvádí, že pokud zpráva kritickým kontrolám nevyhoví nebo nastane technická chyba znemožňující další zpracování, je pokladní zařízení informováno chybovou datovou zprávou, pokud to povaha chyby umožní.

| Výsledek zpracování | Odpověď |
|---|---|
| zpráva projde kritickými kontrolami a lze ji uložit | [[eet-pojem-potvrzovaci-datova-zprava]] s [[eet-polozka-pok]] |
| zpráva neprojde kritickými kontrolami nebo nastane technická chyba | chybová datová zpráva, viz [[eet-pravidlo-chybova-zprava]] |

Vazba odpovědi na původní zprávu je [[eet-polozka-uuid-zpravy]]. Kontroly, které o výsledku rozhodují, drží [[eet-pravidlo-kriticke-kontroly]] a [[eet-pravidlo-propustne-kontroly]]. Vedle zde popsaného ostrého módu existuje ověřovací mód - viz [[eet-pravidlo-mody-odesilani]].
