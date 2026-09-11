---
id: eet-pravidlo-caste-chyby-pri-integraci
title: Časté chyby při integraci
type: pravidlo
domain: [rozhrani]
status: doplnkove
sources: [seminar-vyvojari]
spec_ref: ["seminar-vyvojari, snímek 54 Časté chyby při integraci"]
rests_on: [eet-pravidlo-kriticke-kontroly]
tags: [chyby, integrace, doporuceni, podpis, trasovani]
aka: ["proc dostavam chybu 4", "proc dostavam chybu 7", "na co si dat pozor pri integraci eet", "co logovat pro technickou podporu"]
created: 2026-09-11
updated: 2026-09-11
---

# Časté chyby při integraci

Snímek 54 prezentace pojmenovává sedm chyb, kterých se pokladní systémy při napojení dopouštějí.

| Chyba | Znění |
|---|---|
| Podpis nad celou obálkou | "Podepisujte pouze element Body (s wsu:Id) přes ds:Reference, exkluzivní C14N s PrefixList. Jinak chyba 4." |
| Špatné kódování diakritiky | "Texty zpráv EET jsou bez diakritiky. Nečekejte v odpovědi háčky a čárky; logy přizpůsobte." |
| Překročení 12 KB | "Příliš dlouhé hodnoty / zbytečné prvky obálky → chyba 7. Držte zprávu kompaktní." |
| Záměna módů | "overeni=true je jen ověření — data se NEUKLÁDAJÍ a POK není platný. Pro ostrý provoz overeni vynechte/false." |
| Ignorování varování | "Varování (1,2,4,5) zprávu nezastaví, ale signalizují problém (čas, EIČ). Vyhodnocujte je." |
| Napevno zadaná IP | "Obejití DNS rozbije HA a failover produkce. Vždy přes DNS jméno a TTL." |
| Unikátní identifikátor zpracované transakce | "API vrací s pozitivní i negativní odpovědí unikátní identifikátor zpracované transakce v HTTP hlavičce X-Global-Transaction-Id. Doporučujeme zalogování tohoto identifikátoru transakce pro případnou potřebu komunikace s technickou podporou." |

Podpis řeší [[eet-pravidlo-podpis-datove-zpravy]] a jeho selhání [[eet-kod-chyba-4]]. Limit velikosti drží [[eet-pravidlo-kriticke-kontroly]] a [[eet-kod-chyba-7]]. Módy popisuje [[eet-pravidlo-mody-odesilani]], hlavičku pro trasování [[eet-pravidlo-trasovani]], varování [[eet-pravidlo-cislenik-varovani]].
