---
id: eet-pravidlo-sleva-zaloha-a-kauce
title: Sleva, záloha a doplatek, kauce - evidovaná částka
type: pravidlo
domain: [rozhrani]
status: doplnkove
sources: [seminar-vyvojari]
spec_ref: ["seminar-vyvojari, snímek 60 - Specifické případy: Sleva", "seminar-vyvojari, snímek 61 - Specifické případy: Záloha a doplatek", "seminar-vyvojari, snímek 64 - Specifické případy: Kauce"]
rests_on: [eet-pojem-evidovana-trzba]
tags: [sleva, zaloha, doplatek, kauce, castka]
aka: ["evidovat castku pred nebo po sleve", "eviduje se zaloha", "eviduje se kauce", "vraceni kauce stornem"]
created: 2026-09-11
updated: 2026-09-11
---

# Sleva, záloha a doplatek, kauce - evidovaná částka

## Sleva

> "Eviduje se pouze skutečně přijatá částka, tzn.: Částka po slevě bez ohledu na původní cenu nebo výši slevy. Neřeší se DPH."
> - [[seminar-vyvojari]], snímek 60 - Sleva

## Záloha a doplatek

> "Evidují se jako jakákoli jiná platba, pokud splňují náležitosti evidované tržby."
> - [[seminar-vyvojari]], snímek 61 - Záloha a doplatek

Týž snímek dodává, že tyto platby nejsou vzájemně nijak provázány.

## Kauce

> "Evidovanou tržbou také platba, která je uskutečněna použitím (započtením) kauce nebo obdobné jistoty složené poplatníkovi kontaktní platbou."
> - [[seminar-vyvojari]], snímek 64 - Kauce

Tři okamžiky podle téhož snímku:

| Okamžik | Co se eviduje |
|---|---|
| složení kauce | Při složení kauce se platba neeviduje. |
| vrácení kauce | Při vrácení kauce se platba neeviduje (ani stornem). |
| použití (započtení) kauce | Eviduje se částka použité kauce, ale pouze pokud byla složena kontaktně – v osobním kontaktu s poplatníkem/v provozovně nebo v dopravním prostředku poplatníka. |

Společný jmenovatel všech tří případů je věta ze snímku 59, kterou drží [[eet-pravidlo-zaokrouhlovani]]: eviduje se skutečně přijatá výše tržby/platby. Podmínku kontaktnosti u kauce drží [[eet-pojem-kontaktni-platba]]. Že se u kauce neeviduje ani vrácení, je výjimka proti postupu v [[eet-pravidlo-storno-a-opravy]].
