---
id: eet-pravidlo-doporuceni-pro-vyvojare
title: Doporučení pro vývojáře - osvědčené postupy pro robustní napojení
type: pravidlo
domain: [rozhrani]
status: doplnkove
sources: [seminar-vyvojari]
spec_ref: ["seminar-vyvojari, snímek 53 Doporučení pro vývojáře"]
rests_on: [eet-pravidlo-mezni-doba-odezvy]
tags: [doporuceni, integrace, retry, dns, cas]
aka: ["jak spravne napojit pokladnu na eet", "jak resit retry pri chybe", "co doporucuje financni sprava vyvojarum"]
created: 2026-09-11
updated: 2026-09-11
---

# Doporučení pro vývojáře - osvědčené postupy pro robustní napojení

Snímek 53 je nadepsán "Osvědčené postupy pro robustní napojení" a uvádí pět doporučení. Normativní požadavky rozhraní drží [[popis-rozhrani]].

| Doporučení | Znění |
|---|---|
| Vždy řešte DNS dynamicky | "Používejte DNS jméno, ne IP. Respektujte TTL a při novém spojení znovu dotazujte DNS — produkce balancuje přes více adres." |
| Hlídejte čas a časovou zónu | "Datum tržby porovnávejte v GMT. Synchronizujte hodiny pokladny (NTP) — vyhnete se varováním 4 a 5." |
| Robustní retry strategie | "Pro chyby −1 a 8 zopakujte odeslání později se stejným UUID a prvni_zaslani=false; nezahlcujte systém." |
| Ověřujte podpis odpovědi | "Kontrolujte atribut O = Generální finanční ředitelství a platnost podpisového certifikátu při zpracování odpovědi." |
| Testujte všechny identity | "Ověřte FO, PO i VČP scénáře včetně pověření (eic_poverujiciho, povereni_vice_popl) na playgroundu." |

Doporučení k DNS odpovídá normativnímu požadavku v [[eet-provoz-url-prostredi]]. Retry se týká [[eet-kod-chyba-minus-1]] a [[eet-kod-chyba-8]], lhůty drží [[eet-pravidlo-mezni-doba-odezvy]]. Varování 4 a 5 jsou [[eet-kod-varovani-4]] a [[eet-kod-varovani-5]]. Podpis odpovědi popisuje [[eet-pravidlo-podpis-potvrzovacich-zprav]], testovací identity [[eet-cert-testovaci-playground]].

Pozor na rozpor v identitě opakované zprávy: tento snímek doporučuje opakovat "se stejným UUID", zatímco [[eet-polozka-uuid-zpravy]] i [[eet-pravidlo-mezni-doba-odezvy]] uvádějí, že při opakovaném zaslání má být vytvořeno UUID nové. Vault obě znění zaznamenává, nerozhoduje je.
