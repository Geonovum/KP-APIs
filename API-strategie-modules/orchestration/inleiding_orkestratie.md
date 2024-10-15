# Inleiding

 API orkestratie is een cruciaal concept binnen de moderne  ICT-architectuur, vooral in de context van het integreren van  verschillende applicaties en services. Het stelt organisaties in staat  om complexe workflows te beheren door verschillende API's te coördineren en hun interacties te stroomlijnen. Dit biedt voordelen zoals verhoogde efficiëntie, verbeterde dataconsistentie en een betere  gebruikerservaring.

## Wat is API Orkestratie?

API orkestratie verwijst naar het proces waarbij meerdere  API-aanroepen worden gecoördineerd om een specifieke taak of workflow  uit te voeren. Dit kan bijvoorbeeld inhouden dat gegevens van  verschillende bronnen worden samengevoegd of dat meerdere services in  een bepaalde volgorde worden aangeroepen om een einddoel te bereiken.

## Uitgangspunten

Uitgangspunt is de bestaande registraties met de bestaande registratie-processen.

Met betrekking tot security zijn er diverse aandachtspunten:

- Data integriteit. Dmv signing zou van individuele gegevens kunnen worden aangetoond wat de authentieke bron is en of dat deze identiek zijn aan de authentieke gegevens. Interessant vraagstuk is wat dit betekent als gegevens tijdens het orkestreren worden getransformeerd. Mogelijk raakvlakken met de [RDF Dataset Canonicalization](https://www.w3.org/TR/rdf-canon/) standaard.
- Authenticatie/autorisatie. Bij orkestratie worden verschillende requests uitgevoerd vanuit mogelijk verschillende identiteiten, verschillende identity stores en verschillende scopes/audiences. Hierbij kan zowel een transparant als niet-transparant model worden toegepast. Deze willen we beiden beschrijven. Relevante standaarden zijn [FSC](https://commonground.gitlab.io/standards/fsc/) en [OAuth Token Exchange](https://datatracker.ietf.org/doc/html/rfc8693).

## Use cases

Er zijn reeds enkele voorbeelde van uwe cases waarbij orkestratie een belangrijke rol speelt:

- [IMX-Geo](https://www.geonovum.nl/geo-standaarden/imx-geo-semantisch-model-basis-en-kernregistraties) (Geonovum), Bestuurlijke Gebieden (BZK), Gebouwdossier (Kadaster)
- Diverse Digital Twin use cases (navraag doen bij Bart en/of Koos)
- [Digilab](https://digilab.overheid.nl/) use cases: opkopersbescherming (RVIG/VNG), maximale huurverhoging (Belastingdienst)

## Aandachtsgebieden van Orkestratie

Interessante onderwerpen die sterk gerelateerd zijn aan orkestratie zij:

- Fouttolerantie (graceful degradation, resiliency, retry policies, automatisch terugmelden).
- Doodlopende links (afwijkingen van informatiemodel, actualiteits-issues, etc.)
- Mapping en herleidbaarheid (zie IMX)
- Historie en tijdreizen (separate module in concept)
- Batching (separate module in concept)

- Orkestratie in OAuth (o.a. Token Exchange, eHerkenning, FSC, etc.)

## IMX

Kadaster heeft in samenwerking met Geonovum het IMX initiatief gestart. Dit initiatief heeft als ambitie om basisregistraties (en andere bronnen) in samenhang te kunnen bevragen door middel van API orkestratie. Om op een efficiënte manier te kunnen orkestreren moeten bron API’s voldoen aan diverse randvoorwaarden. De uitdaging is om te onderzoeken welke randvoorwaarden dit zijn en op welke manier deze gestandaardiseerd zouden kunnen worden als design rules.

## Arazzo

De [Arazzo-specificatie](https://www.openapis.org/arazzo) is een nieuwe, door de gemeenschap gedreven  standaard die is ontwikkeld onder het OpenAPI-initiatief, met als doel  de documentatie en interactie van API's te verbeteren. Het biedt een **programmeertaal-onafhankelijk** kader om reeksen API-aanroepen en hun afhankelijkheden te definiëren, waardoor de communicatie van workflows duidelijker wordt.

Dit project bevindt zich echter nog in een vroeg stadium. Ook is het maar de vraag in hoeverre (commerciële) software vendors erbij gebaat zouden zijn een dergelijke standaard te implenteren. Verder wordt de kanttekening geplaatst dat benodigde stappen bij orkestratie ook dynamisch kunnen worden berekend, zoals bij IMX wordt gedaan. In dat geval is het specificeren van een workflow niet relevant.

### Belangrijkste Kenmerken

- **Deterministische Workflows**: Arazzo maakt zowel menselijke leesbare als machine-leesbare  documentatie mogelijk, wat de ervaring voor API-aanbieders en  -gebruikers verbetert.
- **Toepassingen**: Interactieve workflowdocumentatie Automatische documentgeneratie Code- en SDK-generatie op basis van functionele gebruiksgevallen Automatisering van testgevallen en nalevingscontroles AI-gestuurde deterministische API-aanroep

### Relatie met OpenAPI

Arazzo aanvult de bestaande OpenAPI-specificatie door beschrijvingen van **groepen API's** en hun interacties mogelijk te maken, in plaats van alleen individuele  API's. Deze bredere scope ondersteunt automatisering en codegeneratie,  met als uiteindelijke doel de waarde die uit API's wordt gehaald te  maximaliseren.Het project staat open voor deelname van de gemeenschap, met  middelen beschikbaar op GitHub voor degenen die geïnteresseerd zijn in  bijdragen of meer willen leren over de specificatie.
