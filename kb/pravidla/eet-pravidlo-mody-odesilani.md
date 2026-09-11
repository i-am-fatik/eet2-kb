---
id: eet-pravidlo-mody-odesilani
title: Módy odesílání datových zpráv, produkční a neprodukční prostředí
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani]
spec_ref: ["popis-rozhrani v1.2 kap. 2.2.1", "popis-rozhrani v1.2 kap. 2.2.2", "popis-rozhrani v1.2 Tabulka 1"]
rests_on: [eet-polozka-overeni, eet-provoz-url-prostredi]
tags: [mody, prostredi, ostry-mod, overovaci-mod, playground]
aka: ["jaky je rozdil mezi ostrym a overovacim modem", "co vrati playground na neplatnou zpravu", "kdy dostanu pok se ff na konci", "je zprava z playgroundu platna evidence"]
created: 2026-09-11
updated: 2026-09-11
---

# Módy odesílání datových zpráv, produkční a neprodukční prostředí

> "Ostrý mód slouží pro běžné odesílání datových zpráv s údaji o evidované tržbě (tj. pro standardní plnění evidenční povinnosti podle ZoET) a získání potvrzovacího kódu."
> - [[popis-rozhrani]] v1.2, kap. 2.2.1

> "Zasláním datové zprávy v ověřovacím módu není splněna povinnost zaslat údaje o evidované tržbě ve smyslu ZoET."
> - [[popis-rozhrani]] v1.2, kap. 2.2.1

> "Zasláním datové zprávy do neprodukčního prostředí není splněna povinnost zaslat údaje o evidované tržbě ve smyslu ZoET, tj. POK vrácený neprodukčním prostředím není platným potvrzovacím kódem."
> - [[popis-rozhrani]] v1.2, kap. 2.2.2

Mód se volí atributem [[eet-polozka-overeni]] v elementu Hlavicka. Cílové prostředí je určeno adresou webové služby, viz [[eet-provoz-url-prostredi]].

## Tabulka 1: Varianty odpovědi systému EET

| Mód datové zprávy | Cílové prostředí | Scénář použití | Validita datové zprávy | Odpověď systému EET |
|---|---|---|---|---|
| Ostrý (Hlavicka neobsahuje atribut overeni, nebo overeni="false") | Produkční | Poplatník EET zasílá datovou zprávou údaje o evidované tržbě | Validní | potvrzovací datová zpráva, obsahuje POK a ev. i varování o propustných chybách<br>přidělený POK je unikátní a je platným potvrzovacím kódem<br>odpověď obsahuje el. podpis (podepsáno produkčním certifikátem)<br>evidovaná tržba byla přijata, zaevidována a bude dále uchovávána systémem EET |
| Ostrý (Hlavicka neobsahuje atribut overeni, nebo overeni="false") | Produkční | Poplatník EET zasílá datovou zprávou údaje o evidované tržbě | Nevalidní | chybová datová zpráva<br>nenulový kód chyby, textový popis chyby<br>odpověď neobsahuje el. podpis |
| Ostrý (Hlavicka neobsahuje atribut overeni, nebo overeni="false") | Neprodukční (playground) | Vývojář SW testuje svou aplikaci v ostrém módu | Validní | potvrzovací datová zpráva, obsahuje POK a ev. i varování o propustných chybách<br>přidělený POK bude mít specifickou hodnotu ("-ff" na konci), ale není platný<br>odpověď obsahuje příznak neprodukčního prostředí (test="true")<br>odpověď obsahuje el. podpis (podepsáno testovacím certifikátem) |
| Ostrý (Hlavicka neobsahuje atribut overeni, nebo overeni="false") | Neprodukční (playground) | Vývojář SW testuje svou aplikaci v ostrém módu | Nevalidní | chybová datová zpráva<br>nenulový kód chyby, textový popis chyby<br>odpověď obsahuje příznak neprodukčního prostředí (test="true")<br>odpověď neobsahuje el. podpis |
| Ověřovací (Hlavicka obsahuje atribut overeni="true") | Produkční | Poplatník EET ověřuje funkčnost spojení mezi svým pokladním zařízením a systémem EET | Validní | chybová datová zpráva, obsahuje kód chyby 0, a ev. i varování o propustných chybách<br>kód chyby 0 - tj. žádné formální chyby nebyly nalezeny<br>popis chyby "Datovou zpravu evidovane trzby v overovacim modu se podarilo zpracovat"<br>odpověď neobsahuje el. podpis |
| Ověřovací (Hlavicka obsahuje atribut overeni="true") | Produkční | Poplatník EET ověřuje funkčnost spojení mezi svým pokladním zařízením a systémem EET | Nevalidní | chybová datová zpráva<br>nenulový kód chyby, textový popis chyby<br>odpověď neobsahuje el. podpis |
| Ověřovací (Hlavicka obsahuje atribut overeni="true") | Neprodukční (playground) | Vývojář SW testuje svou aplikaci v módu ověření funkčnosti spojení mezi pokladním zařízením a systémem EET | Validní | chybová datová zpráva, obsahuje kód chyby 0, a ev. i varování o propustných chybách<br>kód chyby 0 - tj. žádné formální chyby nebyly nalezeny<br>popis chyby "Datovou zpravu evidovane trzby v overovacim modu se podarilo zpracovat"<br>odpověď obsahuje příznak neprodukčního prostředí (test="true")<br>odpověď neobsahuje el. podpis |
| Ověřovací (Hlavicka obsahuje atribut overeni="true") | Neprodukční (playground) | Vývojář SW testuje svou aplikaci v módu ověření funkčnosti spojení mezi pokladním zařízením a systémem EET | Nevalidní | chybová datová zpráva<br>nenulový kód chyby, textový popis chyby<br>odpověď obsahuje příznak neprodukčního prostředí (test="true")<br>odpověď neobsahuje el. podpis |

> "ve všech ostatních případech v této tabulce evidovaná tržba byla přijata systémem EET, ale nebude zaevidována ani dále uchovávána systémem EET"
> - [[popis-rozhrani]] v1.2, kap. 2.2.2, poznámka )* k Tabulce 1

Poznámka se vztahuje na všechny řádky tabulky kromě prvního (ostrý mód, produkční prostředí, validní zpráva).

Validitu datové zprávy určují [[eet-pravidlo-kriticke-kontroly]]. Kód chyby 0 popisuje [[eet-kod-chyba-0]]. Příznak neprodukčního prostředí v odpovědi nese položka [[eet-polozka-test]]. Podpis potvrzovací zprávy popisuje [[eet-pravidlo-podpis-potvrzovacich-zprav]].
