# Werkgroep: Geo

De werkgroep Geo is opgestart in november 2021 en het werk vindt plaats in deze
github repository; zie issues met tag
[Geo-extensie](https://github.com/Geonovum/KP-APIs/issues?q=is%3Aissue+is%3Aopen+label%3AGeo-extensie).

De werkgroep houdt regelmatig online meetings. Neem voor deelname aan deze
werkgroep contact op met Linda van den Brink (Geonovum).

## verslag online meeting 24 februari 2022
Aanwezig Linda van den Brink (Geonovum), Paul van Genuchten (ISRIC.org), Mark Strijker (Kadaster), Robert Yashar (gemeente Amsterdam)

 - Gesproken over [PR over CRS](https://github.com/Geonovum/KP-APIs/pull/434): er is review geweest van een paar mensen. Afgesproken dat Linda nog wat verbeteringen doorvoert. 
    - Lennart huisman vragen crs uris te reviewen.
    - verwijzen naar ogc bouwblokjes ipv zelf herschrijven
    - bbox-crs is niet erg toekomstbestendig ie je moet dan voor elke geometriesoort een parameter introduceren.
    - Zie verder de reviewopmerkingen in de PR.
 - N.a.v. het vorige punt ook even gesproken over naming conventions voor parameters. Zijn die er in de ADR? En zo ja, botsen die met naming conventies in OGC APIs? Gemeente A'dam gebruikt altijd underscore om clash met datavelden te vermijden.Uitzoekpunt.
 - issue #429 bespreken voortgang niet aan toegekomen.
 - issue #184 breder binnen API strategie groep bespreken. Het speelt niet alleen bij de geo extensie. Voorstel Mark is om de reden van het 'misbruiken' van POST uit te leggen. Dus het oorspronkelijke detailissue parkeren.
Robert geeft aan dat er een methode in ontwikkeling is waarmee dit netjes kan.

## verslag online meeting 3 februari 2022
Aanwezig: Linda van den Brink (Geonovum), Paul van Genuchten (ISRIC.org), George Mathijssen, Egbert van Milgen (Cadac), Mark Strijker (Kadaster)

Gekeken naar verschillende issues:
- [Is het mogelijk om met een OGC-API Features service te voldoen aan nl-api strategie #425](https://github.com/Geonovum/KP-APIs/issues/425): Besloten om wijziging omtrent CRS content negotiation door te voeren zoals voorgesteld in het issue. Om deze wijziging te tracken,  een nieuw issue [#432](https://github.com/Geonovum/KP-APIs/issues/432) aangemaakt.
- [GeoJSON is niet geschikt voor BGT data #429](https://github.com/Geonovum/KP-APIs/issues/429) besproken. Vanuit de OGC werkgroep voor JSON-FG is verzocht om informatie over operationeel gebruik in NL + databases en bibliotheken met ondersteuning voor cirkelbogen. @sweco-nlgemo gaat dit aanleveren. 
- [geojson als formaat of als ontologie #424](https://github.com/Geonovum/KP-APIs/issues/424): besproken en besloten een aantal vragen hierover te stellen aan de OGC JSON-FG werkgroep. @lvdbrink gaat dit doen (want zit in de desbetreffende werkgroep).

## verslag online meeting 12 januari 2022
Aanwezig: Linda van den Brink (Geonovum), Paul van Genuchten (ISRIC.org), George Mathijssen (SWECO), Pieter Bresters (Geonovum)

Met een klein groepje aanwezigen hebben we gekeken naar pull request [#46](https://github.com/Geonovum/KP-APIs/pull/426). Besloten is om deze PR in 2 op te splitsen. Het deel over het beter bruikbaar maken van APIs voor GIS clients wordt apart gezet en de documentconventies voor het doen van aanbevelingen en het geven van voorbeelden worden toegepast.

George maakt een issue aan over het feit dat bogen (naast andere dingen zoals volumes en andere CRS dan WGS84) niet toegestaan zijn in GeoJSON en het hebben van een regel die GeoJSON voorschrijft, betekent dat je bepaalde data (bv BGT) niet conform de API strategie (i.e. de huidige geo-extensie) kunt aanbieden. 

Linda en Pieter gaan alvast input verzamelen voor issue [#425 Is het mogelijk om met een OGC-API Features service te voldoen aan nl-api strategie](https://github.com/Geonovum/KP-APIs/issues/425)

Volgende online meeting: donderdag 3 februari van 1 tot 2. 

## verslag online meeting 15 december 2021

Aanwezig: Linda van den Brink (Geonovum), Mark Strijker (Kadaster), Diederik van
der Boor, Jeroen Temme, Robert Yashar, Michiel Trimpe (gemeente Amsterdam), Paul
van Genuchten (ISRIC.org), George Mathijssen (SWECO).

-   Bespreking van de te volgen werkwijze: discussie in github issues, indien
    nodig verdere discussie tijdens online meetings, voorgestelde wijzigingen in
    pull requests die we gezamenlijk reviewen en na goedkeuring mergen.
    Suggestie was ook om te werken in fasen en deze te scopen.

-   Presentatie door Mark Strijker
    [Ervaringen-geo-APIs](./presentaties/Ervaringen-geo-APIs-en-standaardisatie.pptx)
    over de bij het Kadaster in verschillende projecten opgedane ervaringen met
    geo-functionaliteit in APIs, en de daaruit voortkomende bevindingen op de
    huidige geo-extensie van de NL API Design Rules (ADR).

-   Korte bespreking van de huidige [open
    issues](https://github.com/Geonovum/KP-APIs/issues?q=is%3Aissue+is%3Aopen+label%3AGeo-extensie)

-   Volgende online meeting 12 januari 10:30 - 11:30

## verslag kickoff 24 november 2021

Tijdens de sessie van het Kennisplatform APIs op 24 november kwam de
geo-extensie subwerkgroep voor het eerst bij elkaar. De aanwezigen waren veelal
mensen uit de geo-hoek. We zoeken daarom nog enkele leden die juist niet een
geo-achtergrond hebben, maar wel eens met locatie en/of ruimtelijke vragen in
APIs werken. We willen met deze geo-extentie namelijk APIs mogelijk maken die
door een GIS kunnen worden geconsumeerd, én APIS voor administratieve processen
waarin een locatie-component zit.

Tijdens de sessie hebben we na een korte kennismaking de huidige inhoud van de
[API Design Rules
geo-extensie](https://docs.geostandaarden.nl/api/API-Strategie-ext/#geospatial)
kort besproken. Omdat geen enkel onderdeel van de geo-extensie zonder commentaar
bleef, gaan we in de subwerkgroep alle delen ervan opnieuw aan de orde stellen,
waarbij aanpassingen verwacht worden.

Ook was er een [presentatie](presentaties/20211124-OGCAPIFeatures.pdf) van de
[OGC API standaarden](https://ogcapi.org) door Just van den Broecke. Deze
standaarden willen we op een of andere manier ook gaan ondersteunen in de
geo-extensie.
