---
id: conventions
title: Konvence vaultu EET2-KB
type: meta
status: platne
updated: 2026-09-11
---

# Konvence

Pravidla, která drží tento vault konzistentní, dohledatelný a strojově čitelný. Vault je nezávislý na obecné knowledge base a nemíchá se s ní.

## 1. Striktní faktičnost

Zdrojem jsou státní dokumenty. Vault je proto rejstřík, ne výklad.

- **Žádné volné parafráze.** Normativní věta se cituje doslovně, v uvozovkovém bloku, v původním znění a s původním pravopisem.
- **Každá citace má odkaz.** Pole `spec_ref` uvádí dokument, jeho verzi a kapitolu nebo název typu ve schématu.
- **Formáty se opisují znak po znaku.** Regulární výraz, délka, XSD typ a příklad se přebírají ze zdroje beze změny, včetně chybějící diakritiky v textech chyb a varování.
- **Vlastní text je jen strukturní.** Nadpis, tabulka, odkaz na jinou notu. Kde je potřeba vysvětlení, patří do citace ze zdroje, ne do věty autora.
- **Co ve zdroji není, do vaultu nepatří.** Domněnka, doporučení nebo zkušenost z implementace je práce pro jiné místo než pro tento vault.
- **Rozpor mezi dokumenty se nerozhoduje, zaznamenává.** Nota uvede obě znění a oba odkazy.

## 2. Jazyk

Vault je česky, protože zadání i normativní dokumenty jsou české. Anglicky jsou jen řetězce, které jsou anglicky ve zdroji: jména XML elementů, atributů, XSD typů, HTTP hlaviček a stavů API.

Identifikátory not jsou ASCII kebab-case bez diakritiky. Vyhledávání diakritiku ignoruje, takže `trzba` i `tržba` najdou totéž.

## 3. Typy not

| `type` | Role | Složka |
|---|---|---|
| `pojem` | definice pojmu z přehledu základních pojmů | `pojmy/` |
| `polozka` | datová položka zprávy - element nebo atribut | `polozky/` |
| `pravidlo` | normativní požadavek, kontrola, postup, parametr prostředí | `pravidla/` |
| `kod` | jedna položka číselníku chyb nebo varování | `kody/` |
| `moc` | rozcestník | `maps/` |
| `source` | jeden zdrojový dokument: metadata, verze, otisk, obsah | `sources/` |
| `meta` | infrastruktura vaultu (tento soubor) | `meta/` |

## 4. Frontmatter

```yaml
id: eet-polozka-uuid-zpravy          # == název souboru bez .md, ASCII kebab
title: uuid_zpravy - UUID datové zprávy evidované tržby
type: polozka                        # pojem | polozka | pravidlo | kod | moc | source | meta
domain: [rozhrani]                   # rozhrani | provoz | certifikaty
status: platne                       # platne | zmenene | zrusene | doplnkove
sources: [popis-rozhrani]            # cite_key -> sources/<key>.md
spec_ref: ["popis-rozhrani v1.2 kap. 3.3.3.1"]   # dokument, verze, kapitola
rests_on: [eet-pravidlo-kodovani-polozek]        # noty, jejichž definicí je tato nota vyjádřena
tags: [hlavicka, uuid]
aka: ["jak vygenerovat uuid zpravy"]  # formulace tazatele, ne opis titulku
created: 2026-09-11
updated: 2026-09-11
```

- `spec_ref` a `sources` jsou u typů `pojem`, `polozka`, `pravidlo` a `kod` povinné. `kb_verify` jejich chybějící hodnotu hlásí jako `uncited`.
- `status: zmenene` nese nota, kterou novější verze dokumentu přepsala. Nota si ponechá původní znění a odkáže na nástupce.
- `rests_on` míří vzhůru na definice, v jejichž pojmech je nota vyslovena. U položky, jejíž formát zdroj popisuje odkazem na jinou položku, je to právě ta položka.

## 5. Tělo noty

Pořadí je pevné, aby se noty daly číst vedle sebe:

1. Nadpis `# <title>`
2. Blok citace s doslovnou normativní větou a odkazem na kapitolu
3. Tabulka strojových vlastností: maska, délka, XSD typ, povinnost, příklad
4. Odkazy `[[...]]` na související noty

Doslovná citace se drží na rozsahu jedné normativní věty nebo jedné řádky číselníku. Delší pasáž patří do zdrojového dokumentu, ne do noty.

## 6. Odkazy

Strojové hrany v frontmatteru (`rests_on`, `sources`) a prózové odkazy `[[id]]` v těle. Nota bez jediného odkazu dovnitř i ven je podezřelá. Odkaz na dosud nenapsanou notu je v pořádku, značí další notu k napsání.

## 7. Zdroje

Každý stažený dokument má právě jednu notu v `sources/` s vydavatelem, verzí dokumentu, datem, cestou k souboru, otiskem `sha256` a URL. Otisk je doklad, že nota cituje právě tu verzi, kterou máme na disku.

Když vyjde nová verze dokumentu: stáhnout do `docs/`, přidat řádek do historie verzí ve zdrojové notě, přepočítat `sha256`, projít noty s jejím `cite_key` a přepsat ty, kterých se změna dotkla.

## 8. Soukromí

Vault je veřejný repozitář včetně složky `docs/` se zdrojovými dokumenty. Mimo verzování zůstává `meta/retrieval-misses.md`, běhový log dotazů, a sada testovacích certifikátů.

Značku TLP:AMBER nese v záhlaví `pristup-playground` v obou jazykových verzích a anglická verze `pristup-produkce`, česká produkční verze 1.1 ji nenese. Vydavatel všechny tyto soubory zveřejňuje na eet.gov.cz bez přihlášení. Noty z nich citují jednotlivé normativní věty, odkazují na původní URL a nesou tag `tlp-amber`.

Testovací certifikáty playgroundu včetně hesla jsou v `docs/CAEET_Playground_2026_v1.zip`. Jsou veřejné a sdílené všemi testujícími subjekty, přesto do repozitáře nepatří - do vaultu se opisuje jejich profil, nikdy obsah klíče ani heslo.

## 9. Git

Malé commity, jedna logická jednotka na commit. Styl zprávy: `kb(<domena>): <co>`, například `kb(rozhrani): doplnit polozky hlavicky e-trzby`. Cesty se stagují výslovně, nikdy `git add -A`.
