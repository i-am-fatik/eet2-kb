---
id: index
title: EET2-KB - rozcestník
type: moc
status: platne
updated: 2026-09-11
---

# EET2-KB

Rejstřík technické dokumentace EET 2.0. Nezávislý vault, oddělený od obecné knowledge base, s vlastním MCP serverem. Každá nota cituje státní dokument doslovně a uvádí kapitolu - pravidla drží [[conventions]].

Zdrojové dokumenty leží v `docs/`, jejich evidence v `sources/`.

## Domény

- [[rozhrani]] - datové rozhraní: zprávy, položky, kontroly, číselníky, podpis, praxe integrace
- [[provoz]] - adresy prostředí, verze a souběh, provozní doba, minimální datum tržby
- [[certifikaty]] - hierarchie CA EET, profil pokladního certifikátu, vydání, obnova, CRL
- [[povinnosti]] - zákonná a provozní vrstva ze semináře: co, kdo, jaká částka, lhůty, storno

## Zdroje

| Cite key | Dokument | Verze |
|---|---|---|
| [[popis-rozhrani]] | Formát a struktura údajů o evidované tržbě a popis datového rozhraní | 1.2 |
| [[xml-schema]] | EETXMLSchema.xsd | 4.1 |
| [[wsdl]] | EETServiceSOAP.wsdl | 4.1 |
| [[vzorove-zpravy]] | Vzorové XML requesty pro tři testovací EIČ | - |
| [[pristup-playground]] | Playground - přístupové a provozní informace | 1.1 |
| [[pristup-produkce]] | Produkce - přístupové a provozní informace | 1.1 |
| [[caeet-certifikacni-politika]] | CA EET - certifikační politika | 1 |
| [[caeet-api-jwt]] | CAEET API - JWT Token (OpenAPI) | 1.0.0 |
| [[caeet-postupy-zadost]] | CA EET - postupy získání pokladního certifikátu | 2 |
| [[caeet-postupy-instalace]] | CA EET - modelové postupy instalace certifikátu | 1 |
| [[caeet-napoveda-aplikace]] | CA EET - nápověda webové aplikace | 2 |
| [[caeet-playground-certifikaty]] | CA EET - testovací certifikáty playgroundu | 1 |
| [[seminar-vyvojari]] | Prezentace ze semináře pro vývojáře | - |

## Rozsah

Vault drží všech 20 dokumentů, které správce daně zveřejňuje pro vývojáře. Obrazové snímky prezentace, které `pdftotext` nepřečte, byly dočteny z renderovaných stránek, včetně snímků 26, 27, 30, 33, 35, 36, 38 a 40. Snímky 26, 27, 30, 33, 36 a 38 jsou tentýž procesní diagram s různě zvýrazněnou částí a nenesou normativní větu, snímek 35 jsou snímky obrazovek aplikace MOJE EET. Termíny ze snímku 40 drží [[eet-pravidlo-harmonogram-eet-2]].

Vault nedrží text zákona o evidenci tržeb. Zákonnou vrstvu zná jen zprostředkovaně z [[seminar-vyvojari]], proto na ní stojící noty nesou `status: doplnkove`.
