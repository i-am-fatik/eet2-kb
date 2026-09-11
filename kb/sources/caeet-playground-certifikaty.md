---
id: caeet-playground-certifikaty
title: CA EET - testovací certifikáty a klíče playgroundu
type: source
domain: [certifikaty]
status: platne
vydavatel: Generální finanční ředitelství
verze_dokumentu: "1"
soubor: docs/CAEET_Playground_2026_v1.zip
sha256: 711ca591e2e58e906212befab55ea72cbc5d960af49e444765b0428751002491
url: https://eet.gov.cz/assets/cs/cmsmedia/pro-vyvojare/CAEET_Playground_2026_v1.zip
tags: [ca, certifikaty, playground, testovani]
created: 2026-09-11
updated: 2026-09-11
---

# Testovací certifikáty a klíče playgroundu CA EET

Archiv obsahující sdílené testovací certifikáty, kořenový a mezilehlý certifikát CA pro neprodukční prostředí playground EET 2.0.

Archiv obsahuje:

| Soubor | Popis |
|---|---|
| CA_EET-Playground-CZ00000019.p12 | Testovací certifikát s privátním klíčem |
| CA_EET-Playground-CZ683555118.p12 | Testovací certifikát s privátním klíčem |
| CA_EET-Playground-CZ8551015704.p12 | Testovací certifikát s privátním klíčem |
| ca_eet-root_cert-playground.crt | Kořenový certifikát CA |
| ca_eet-sub_cert-playground.crt | Mezilehlý certifikát CA |
| password_pokladni_cert_playground.txt | Heslo k certifikátům |

Certifikáty jsou veřejné a sdílené všemi testujícími subjekty. Profil a parametry kořenového a mezilehlého certifikátu jsou dokumentovány v [[pristup-playground]] kapitolách 3.1.2 a 3.1.3. Dle konvencí vaultu se do vaultu opisuje profil certifikátů, nikdy obsah klíče ani heslo.

Patří do dokumentace playgroundu spolu s [[pristup-playground]] a [[popis-rozhrani]].
