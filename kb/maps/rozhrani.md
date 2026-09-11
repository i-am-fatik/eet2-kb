---
id: rozhrani
title: Datové rozhraní - rozcestník
type: moc
domain: [rozhrani]
status: platne
updated: 2026-09-11
---

# Datové rozhraní

Mapa domény `rozhrani`. Normativní zdroj je [[popis-rozhrani]] v1.2, formálně předepsaný [[xml-schema]] a [[wsdl]]. Vzorové podepsané zprávy drží [[vzorove-zpravy]].

Zákonná a provozní vrstva ze semináře má vlastní mapu [[povinnosti]]. Prostředí a certifikáty mají mapy [[provoz]] a [[certifikaty]].

## Pojmy

- [[eet-pojem-e-trzba]] - element `<Trzba>`, údaje stanovené ZoET
- [[eet-pojem-datova-zprava-evidovane-trzby]] - e-tržba v SOAP obálce s podpisem
- [[eet-pojem-potvrzovaci-datova-zprava]] - odpověď s POK

## Komunikace

- [[eet-pravidlo-komunikacni-scenar]] - request/response, synchronní odpověď
- [[eet-pravidlo-mody-odesilani]] - ostrý a ověřovací mód, tabulka variant odpovědi
- [[eet-pravidlo-sitove-standardy]] - HTTPS/TLS, HTTP/1.1, CORS a preflight
- [[eet-pravidlo-cislovani-verzi]] - hlavní a vedlejší číslo verze, dopad na URL
- [[eet-pravidlo-trasovani]] - hlavička `X-Global-Transaction-Id`

## Kontroly

- [[eet-pravidlo-kriticke-kontroly]] - neprojde-li jedna, POK není vydán
- [[eet-pravidlo-propustne-kontroly]] - neprojde-li jedna, POK vydán je, s varováním
- [[eet-pravidlo-identifikatory-kontrol]] - označení K2 až K13 a jejich kódy

## Struktura zpráv

- [[eet-pravidlo-struktura-zprav]] - přehled tří zpráv
- [[eet-pravidlo-kodovani-polozek]] - UTF-8 dokumentu, ASCII položek
- [[eet-pravidlo-potvrzovaci-zprava]] - potvrzení jako celek
- [[eet-pravidlo-chybova-zprava]] - chyba jako celek

## Zabezpečení a identita tržby

- [[eet-pravidlo-podpis-datove-zpravy]] - WS-Security, Exclusive C14N, SHA256, RSA-SHA256
- [[eet-pravidlo-podpis-potvrzovacich-zprav]] - podpis odpovědi protistranou
- [[eet-pravidlo-jednoznacny-kod-trzby]] - šestice položek a plaintext s oddělovačem `|`

## Položky hlavičky

[[eet-polozka-uuid-zpravy]] · [[eet-polozka-dat-odesl]] · [[eet-polozka-prvni-zaslani]] · [[eet-polozka-overeni]]

## Položky dat

[[eet-polozka-eic-popl]] · [[eet-polozka-eic-poverujiciho]] · [[eet-polozka-povereni-vice-popl]] · [[eet-polozka-id-jednotky]] · [[eet-polozka-id-pokl]] · [[eet-polozka-porad-cis]] · [[eet-polozka-dat-trzby]] · [[eet-polozka-celk-trzba]] · [[eet-polozka-urceno-cerp-zuct]] · [[eet-polozka-cerp-zuct]]

## Položky odpovědi

[[eet-polozka-dat-prij]] · [[eet-polozka-pok]] · [[eet-polozka-test]] · [[eet-polozka-kod-varov]] · [[eet-polozka-dat-odmit]] · [[eet-polozka-kod]]

## Číselníky

- [[eet-pravidlo-cislenik-chyb]] - formát chybové zprávy a obsazené kódy
- [[eet-pravidlo-cislenik-varovani]] - obsazené kódy varování
- Chyby: [[eet-kod-chyba-minus-1]], [[eet-kod-chyba-0]], [[eet-kod-chyba-2]], [[eet-kod-chyba-3]], [[eet-kod-chyba-4]], [[eet-kod-chyba-6]], [[eet-kod-chyba-7]], [[eet-kod-chyba-8]]
- Varování: [[eet-kod-varovani-1]], [[eet-kod-varovani-2]], [[eet-kod-varovani-4]], [[eet-kod-varovani-5]], [[eet-kod-varovani-6]], [[eet-kod-varovani-7]]

## Praxe integrace

- [[eet-pravidlo-doporuceni-pro-vyvojare]] - osvědčené postupy ze semináře
- [[eet-pravidlo-caste-chyby-pri-integraci]] - čeho se pokladní systémy dopouštějí
