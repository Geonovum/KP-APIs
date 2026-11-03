# Werkgroep Schema Design Rules

Werkgroep van het Kennisplatform API's over **afspraken voor JSON Schema**: hoe schema's voor request- en response-bodies, berichten en andere gegevensstructuren ontworpen, beschreven en hergebruikt worden.

Aanmelden voor de werkgroep of op de hoogte gehouden worden kan via: **api@geonovum.nl**

## Doel

De werkgroep stelt **Schema Design Rules** op naast de API Design Rules (ADR), te beginnen met een kleine **versie 0.1** met concrete regels, zodat er snel iets bruikbaars ligt. De ADR kan zeggen "gebruik JSON Schema"; de Schema Design Rules zeggen hoe.

Aanleiding: zonder afspraken ontstaat wildgroei (tientallen manieren om een adres te modelleren, schema's zonder titel of omschrijving, talloze varianten van foutmeldingsschema's). Met OAS 3.1 wordt JSON Schema 2020-12 per 1 januari 2027 volledig ondersteund in de verplichte standaard.

Doelen die als toetssteen voor regels dienen (deels overlappend):

1. Het **schemaregister** live kunnen zetten en meerwaarde laten bieden (hergebruik, links, toetsing)
2. Schema's **geschikt maken voor AI** (genereren en valideren)
3. Schema's **productieklaar** maken

## Scope en uitgangspunten

- Regels over request- en response-bodies horen bij de Schema Design Rules; regels over URL-paden en queryparameters blijven bij de ADR.
- Breder dan OpenAPI: JSON Schema wordt ook gebruikt voor AsyncAPI, validators, generators en AI.
- Het schemaregister en de Schema Design Rules staan los van elkaar. De regels maken generieke functionaliteit in het register mogelijk, maar moeten ook buiten het register te onderbouwen zijn.
- Een overheidsprofiel bovenop JSON Schema: de meerwaarde zit in overheidsspecifieke conventies.
- Conventies mogen niet botsen met hoe informatiemodellen (MIM) worden gemaakt.
- Versionering valt binnen scope, maar blokkeert versie 0.1 niet.
- Klein beginnen, in kleine stappen.

## Werkwijze

Zelfde werkwijze als de API Design Rules: een issue per onderwerp met een concreet voorstel, regels geformuleerd met MUST en SHOULD. De discussie loopt via [GitHub-issues met het label `WG: Schema design rules`](https://github.com/Geonovum/KP-APIs/issues?q=label%3A%22WG%3A%20Schema%20design%20rules%22); nieuwe onderwerpen kunnen worden ingediend met de issue template Schema Design Rules. De regels worden uitgewerkt in rulesets die met OpenLint getoetst kunnen worden.

**Onderwerpen met een snel voorstel**

- `title` en `description` verplicht, eventueel met lengte-eisen
- Contactinformatie in het schema
- Examples moeten valideren
- Bestandsnamen en `.schema.json`
- Externe `$ref`s moeten resolven

**Moeilijke onderwerpen**

- Versionering: wanneer major, minor of patch, en hoe in de URL
- Custom extensions en gemeenschappelijke annotaties, zoals eenheden (`unit`), `provenance` en de link naar linked data
- Formats, zoals de OpenAPI Format Registry en eenheden
- `$id` en `$schema`: verplicht, en op welk niveau
- Dialect voorschrijven, en het mixen van schema's in verschillende JSON Schema-versies
- Wanneer nesten en wanneer een aparte definition
- Discriminators en polymorfie

## Notulen

| Datum           | Onderwerp | Verslag                                |
| --------------- | --------- | -------------------------------------- |
| 28 oktober 2026 | Kick-off  | [2026-10-28.md](Notulen/2026-10-28.md) |

## Volgende sessie

**Donderdag 5 november 2026**, op de bijeenkomst van het Kennisplatform API's: presentatie van de eerste concrete voorstellen. Onderwerpen zonder bezwaar gelden daarna als voorlopig aangenomen.

## Deelnemers

| Naam              | Organisatie           |
| ----------------- | --------------------- |
| Dimitri van Hees  | Geonovum (voorzitter) |
| Yashar Robert     | Gemeente Amsterdam    |
| Henri Korver      | VNG                   |
| Michiel Trimpe    | VNG                   |
| Tim van der Lippe | Logius                |
| Joost Farla       | Geonovum              |

## Toetsset

Bestaande schema's om de regels aan te toetsen:

- problem+json
- CloudEvents
- BAG (Gemeente Amsterdam)
- VNG-schema's zoals adres, persoon, bedrijf, zaak
- PDOK, OGC en Kadaster

## Gerelateerde initiatieven en standaarden

- API Design Rules (ADR)
- OpenAPI Specification 3.1 / JSON Schema 2020-12
- Schemaregister (Sourcemeta One)
- Amsterdam Schema (Gemeente Amsterdam)
- OpenLint
- MIM (Metamodel Informatiemodellering)
- NL GOV profile for CloudEvents
