# Agenda en Verslag 

Agenda en Verslag van het Technisch Overleg (TO) van de Technische Architectuur Groep (TAG) inzake de API Design Rules.
> dd 24-11-2020 - Online overleg via MS-Teams

## Deelnemers

- Alexander Green (Logius)
- Pieter Dijkstra (Kadaster)
- Edwin Wisse (Logius)
- Eelco Hotting (VNG)
- Joost Farla (Kadaster)
- Henri Korver (VNG)
- John Boots
- Linda van den Brink (Geonovum)
- Pano Maria (Kadaster)
- Jasper Roes (Kadaster) - *Voorzitter overleg* - 
- Laura Rutte (BKWI)
- Tony Sloos (Kadaster)
- Martin van der Plas (Logius)

## Agenda

1. behandeling van de 4 openstaande Pull Requests (PR) die door Logius zijn opgesteld voor verwerking van issues die bij het kennisplatform APIs zijn ingedient.
2. bespreken welke Rules we willen toevoegen uit de extenties
3. bespreken openstaande issue's op het normatieve deel

## Verslag

Mededeling Martin: Normatieve beheer bij Logius. Beheermodel is vastgesteld en gepubliceerd op GitHub. Link gedeeld in chat. https://github.com/Logius-standaarden/ADR-Beheermodel

Mededeling en algemene vraag: Extensies zijn vast gesteld. Welke extensies kunnen opgenomen worden in het normatieve gedeelte?

### 1. Pull requests (PR)

> GitHub link gedeeld en op scherm getoond. https://github.com/Logius-standaarden/API-Design-Rules/pulls

**PR#117** Added API rule for non-existing parameters [Issue #394](https://github.com/Geonovum/KP-APIs/issues/394) 
> Edwin Wisse licht aanpassing toe: gebaseerd op suggestie van Bakker: ongeldige query dient foutmelding te geven. Farla vindt de inhoud prima, maar twijfelt of dit past in het normatieve deel; het is zeer gedetailleerd in contrast met het abstracte natuur van het document. Scheidingslijn tussen normatief en extensie vervaagd. Roes stelt voor het in error-handeling extensie toe te voegen. Dit wordt geaccepteerd en Wisse maakt een pull request voor de extensie.

**PR#120** herstructurering van API-53 nav [issue #420](https://github.com/Geonovum/KP-APIs/issues/420)
> Martin licht toe: structuur van rationale en implicaties toegepast i.p.v. voorbeelden. Joost Farla gaat de PR reviewen en daarna kan deze worden gemerged

**PR#119** Update API-17 nav [issue #421](https://github.com/Geonovum/KP-APIs/issues/421). Hierbij zijn meer situaties beschreven waarbij Engelse documentatie is toegestaan.
> Martin licht toe: meer ruimte gegeven om Engelse taal te gebruiken.

**PR#118** API-04 design rule herschreven op basis van [issue #419](https://github.com/Geonovum/KP-APIs/issues/419)
> Martin licht toe: naast bestaande glossary is het ook mogelijk een eigen glossary te ontwikkelen.

Discussie:  
> Sloos: wil punten uit #119 en #118 samenvoegen.  
> Roes: Te veel vrijheid creëert discussie over gebruik van taal. Voorstel: termen in Nederlands, maar documentatie in Engels voor samenwerking met buitenlandse collega’s.  
> Sloos: of keuze alles in Engels of tooling moet meerdere talen ondersteunen.  
> Hotting: software ontwikkeld in buitenland (voorbeeld: gemeentesoftware ontwikkeld in Roemenië) kan makkelijker in Engels.  
> Consensus wordt niet bereikt, volgende keer men meer de kans geven van tevoren hun statement kwijt te kunnen op de issues.  

Oproep aan de werkgroep: geef commentaar bij de issue's uit de openbare consultatie [Lijst issue's gefilterd](https://github.com/Geonovum/KP-APIs/issues?q=is%3Aopen+is%3Aissue+label%3A%22API+design+rules+%28normatief%29%22+label%3AConsultatie)

### 2. welke Rules we willen toevoegen uit de extenties
> deze worden niet inhoudelijk besproken. er wordt opgeroepen na te gaan welke rules men normatief op wil nemen.

### 3. bespreken openstaande issue's op het normatieve deel
> Martin: Semantic versioning willen we ook opnemen in Bomos-structuur. We moeten eerst langs Forum Standaardisatie; volgende gepubliceerde versie wordt minor.

> Martin: PATCH staat onevenredig prominent in document; dit wordt aangepast.

> Martin: Verdere onderbouwing voor design rules wordt in de toekomst aangepast.  
> Roel: iedere regel moet toetsbaar zijn.  
> Martin: ADR moet volledig herschreven worden. Dit willen we bij de eerst volgende release toepassen.  
> Hotting: Forum wil testbare regels en rapportage, hiervoor wordt een opdracht verstrekt door het Forum.   
> Martin: 7 regels worden nu al getest. Niet alle regels zijn toetsbaar. We willen onderscheid tussen design en runtime in ADR. Runtime betreft testbare regels. Design time betreft toelichting en principes voor het design.  
> Roes: Manier vinden om aan te geven aan welke extensies getracht is te voldoen om enkel op deze getoetst te worden.  

### Rondvraag:
> Hotting: Duidelijker delen met werkgroep op discussies te faciliteren. Niet iedereen houdt GitHub in de gaten.  
> Henri: Hal extensie onduidelijk of het verplicht is. Zolang het niet vastgesteld is kunnen we er niet mee verder. Roel en Joost pakken het op.
