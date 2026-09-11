---
id: eet-pravidlo-zaokrouhlovani
title: Zaokrouhlování - eviduje se skutečně přijatá částka
type: pravidlo
domain: [rozhrani]
status: doplnkove
sources: [seminar-vyvojari]
spec_ref: ["seminar-vyvojari, snímek 59 - Specifické případy: Zaokrouhlování"]
rests_on: [eet-pojem-evidencni-povinnost]
tags: [zaokrouhlovani, castka]
aka: ["jakou castku evidovat pri zaokrouhleni", "eviduje se castka pred nebo po zaokrouhleni", "zakaznik nechce vratit rozdil"]
created: 2026-09-11
updated: 2026-09-11
---

# Zaokrouhlování - eviduje se skutečně přijatá částka

> "Eviduje se skutečně přijatá výše tržby/platby."
> - [[seminar-vyvojari]], snímek 59 - Zaokrouhlování

Příklad z téhož snímku. Celková výše útraty činí 78,90 Kč:

| Způsob platby | Zaplaceno | Zaeviduje se |
|---|---|---|
| hotovost, zaokrouhleno na celé Kč | 79 Kč | 79 Kč |
| karta | 78,90 Kč | 78,90 Kč |
| hotovost, zákazník nechce vrátit rozdíl 1 Kč | 80 Kč | 80 Kč |

Evidovaná částka tedy nevychází z výše útraty, ale z toho, co poplatník skutečně přijal. Stejný princip prezentace uplatňuje u slev, záloh a kaucí - viz [[eet-pravidlo-sleva-zaloha-a-kauce]].

Formát, ve kterém se částka zapisuje do zprávy, drží [[eet-polozka-celk-trzba]].
