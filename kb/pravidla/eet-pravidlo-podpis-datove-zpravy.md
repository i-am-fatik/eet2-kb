---
id: eet-pravidlo-podpis-datove-zpravy
title: Podpis datové zprávy evidované tržby
type: pravidlo
domain: [rozhrani]
status: platne
sources: [popis-rozhrani]
spec_ref: ["popis-rozhrani v1.2 kap. 5.2"]
rests_on: [eet-pojem-datova-zprava-evidovane-trzby]
tags: [podpis, ws-security, xmldsig, kryptografie]
aka: ["jaky algoritmus podpisu pouzit", "co se podepisuje v soap zprave", "kam patri certifikat v obalce"]
created: 2026-09-11
updated: 2026-09-11
---

# Podpis datové zprávy evidované tržby

> "Do elektronického podpisu SOAP zprávy musí být zahrnut právě jeden element, a to element `<soap:Body>` obsahující XML strukturu e-tržby (element `<tns:Trzba>`) sestavený dle platného XML schéma (XSD)."
> - [[popis-rozhrani]] v1.2, kap. 5.2

Podle téže kapitoly musí být každá datová zpráva povinně podepsána klíčem, k němuž je vydán X509 certifikát poplatníka, a certifikát musí být platný k okamžiku zpracování zprávy na straně společného technického zařízení správce daně. Podpis se realizuje dle standardu XML Signature Syntax and Processing (Second Edition).

| Požadavek | Hodnota |
|---|---|
| kanonizace | Exclusive C14N, `http://www.w3.org/2001/10/xml-exc-c14n#` |
| otisk (digest) | SHA256, `http://www.w3.org/2001/04/xmlenc#sha256` |
| podpis | RSA-SHA256, `http://www.w3.org/2001/04/xmldsig-more#rsa-sha256` |
| umístění podpisu | sekce hlaviček WS-Security v SOAP obálce |
| odkaz na podepisovaný objekt | reference relativním odkazem v rámci SOAP zprávy |
| certifikát | `BinarySecurityToken` v sekci WS-Security, typ `...#Base64Binary`, formát `...#X509v3` |

> "Datová zpráva by neměla obsahovat další hlavičky (jako např. Timestamp a WS-Addressing) a neměly by být podepisovány jiné elementy než `<soap:Body>`. V opačném případě roste velikost datové zprávy a takové zprávy by mohly být považovány za útok a následně odmítány."
> - [[popis-rozhrani]] v1.2, kap. 5.2

Kap. 3.3 doplňuje, že pokud certifikát klíče použitý v době příjmu tržby už není k okamžiku odesílání zprávy platný, použije poplatník pro XML signature aktuálně platný certifikát.

Selhání této kontroly je kritické, viz [[eet-pravidlo-kriticke-kontroly]] a [[eet-kod-chyba-4]]. Potvrzovací zprávu podepisuje protistrana, chybová datová zpráva podepsaná není.
