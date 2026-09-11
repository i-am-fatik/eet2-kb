---
id: eet-pravidlo-podpis-potvrzovacich-zprav
title: Elektronický podpis potvrzovacích datových zpráv
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani]
spec_ref: ["popis-rozhrani v1.2 kap. 5.3", "popis-rozhrani v1.2 kap. 3.4"]
rests_on: [eet-pojem-potvrzovaci-datova-zprava]
tags: [podpis, potvrzovaci-zprava, xmldsig]
aka: ["kdo podepisuje potvrzovaci zpravu", "jakym certifikatem je podepsany pok", "je chybova zprava podepsana"]
created: 2026-09-11
updated: 2026-09-11
---

# Elektronický podpis potvrzovacích datových zpráv

> "Potvrzovací datové zprávy ve formátu SOAP jsou opatřeny elektronickým podpisem společného technického zařízení správce daně."
> - [[popis-rozhrani]] v1.2, kap. 5.3

Kapitola 5.3 je v dokumentu tímto jediným odstavcem, žádné další technické parametry podpisu (kanonizace, otisk, algoritmus) pro potvrzovací zprávu neuvádí. Konkrétní parametry XML signature (Exclusive C14N, SHA256, RSA-SHA256, umístění v sekci WS-Security) popisuje zdroj jen pro podpis datové zprávy evidované tržby, viz [[eet-pravidlo-podpis-datove-zpravy]] - tato nota je nerozšiřuje domněnkou, že platí stejně.

> "V XML elementu <SOAP Header> je uložen XML signature a certifikát společného technického zařízení správce daně, k němuž příslušný privátní klíč byl použit k vytvoření XML signature."
> - [[popis-rozhrani]] v1.2, kap. 3.4

Zásadní rozdíl oproti [[eet-pravidlo-podpis-datove-zpravy]]: datovou zprávu evidované tržby podepisuje poplatník svým certifikátem, potvrzovací zprávu podepisuje protistrana, tedy společné technické zařízení správce daně, svým certifikátem (produkčním nebo testovacím, podle prostředí, viz [[eet-pravidlo-mody-odesilani]]).

Chybová datová zpráva podepsána není, viz [[eet-pravidlo-struktura-zprav]].
