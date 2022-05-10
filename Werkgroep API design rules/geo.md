# Werkgroep: Geo

De werkgroep Geo is opgestart in november 2021 en het werk vindt plaats in deze
github repository; zie issues met tag
[Geo-extensie](https://github.com/Geonovum/KP-APIs/issues?q=is%3Aissue+is%3Aopen+label%3AGeo-extensie).

De werkgroep houdt 1x per 2 weken een korte online meeting (half uur). Neem voor deelname aan deze werkgroep contact op met Linda van den Brink (Geonovum).

## verslag online meeting 10 mei 2022
Linda koppelt terug over de API Design Rules bijeenkomst in Den Haag op 9 mei: 
- De extensies worden modules. De geo module wordt de eerste (het is de enige waar nu actief aan gewerkt wordt). In een module mag je keuzes hebben tussen varianten van Rules. De Rules moeten testbaar zijn. Een module is niet normatief, maar er is wel de mogelijkheid een module op de PTOLU te zetten. Dit overweegt Geonovum wel te doen. We krijgen hulp bij het goed opstellen van de module zodat dit als een voorbeeld kan dienen. 
- Er komt waarschijnlijk een aparte module Filtering. We kunnen wel (net als OGC API Features) wat simpele filters in de geo extensie zetten, maar uitgebreid filteren komt apart.
- Correct nummeren van Rules hoeft niet. Dit wordt opgelost in de nieuwe modulestructuur.

We houden op 7 juni van 1 tot 2 een fysieke /hybride meeting. Deze duurt iets langer dan gewoonlijk, zodat we wat langer kunnen doorpraten. 

- PR #443 en #445 zijn goedgekeurd en gemergd. Een aantal hieraan gerelateerde issues is gesloten. 
- Issue #439 besproken: hieruit bleek dat er nog steeds iets niet klopt in de tekst. Een regel is op de verkeerde plek terecht gekomen en andere tekst ontbreekt. Linda zoekt uit wat er precies moet gebeuren en beschrijft dit in het issue zodat het opgepakt kan worden. 
- We pakken issue #425 op: het inventariseren van OGC API Features part 1 en 2 op verschillen tussen API strategie / geo-extensie en de OGC standaard. Uit deze inventarisatie halen we de verschillen die we nog in de geo-extensie willen en kunnen oplossen en verschillen die andere delen van de API strategie raken. Dit bespreken we op de hybride bijeenkomst.

## verslag online meetings april 2022
- Issues besproken, doorgewerkt aan PRs

## verslag online meeting 29 maart 2022
- Nieuwe issue labels `prio 1`, `prio 2` en `proposal` toegelicht. 
- Eind juni [milestone](https://github.com/Geonovum/KP-APIs/milestone/2) afgesproken: dan willen we alle 1 en 2 issues af hebben en de nieuwe geo-extensie ter review aan de bredere ADR werkgroep voorleggen. Het is een harde deadline, dus wat er dan niet af is, blijft liggen voor een volgende versie. NB er kunnen momenteel nog wel issues aan de milestone toegevoegd worden.
- [PR 434](https://github.com/Geonovum/KP-APIs/pull/434) merged!
- Issue openen over gebruik van andere formaten dan GeoJSON in API's. Inmiddels gedaan: #438
- Paul rondt #424 af
- Mark pakt #433 op
- George pakt #436 op
- Linda pakt #435 op
- Issues #432 en #424 gesloten

## verslag online meeting 16 maart 2022
- Gesproken over [PR 434](https://github.com/Geonovum/KP-APIs/pull/434): Afgesproken hier `filter-crs` aan toe te voegen uit OGC API Features part 3. Daarnaast 
uitleg toevoegen wanneer je `bbox-crs`, `crs` en `filter-crs` gebruikt. Hierbij het lijstje met verschillende scenario's van Mark gebruiken, dat in het PR als comment staat.
- issue aanmaken voor een fix mbt de titel van design rule API-38: "Put results of a global spatial query in the relevant geometric context". Het woord 'put' is hier verwarrend. 'Place' van maken.
- Github issues opruimen en labels maken om prioriteiten aan te geven, zodat het voor werkgroepdeelnemers duidelijker is wat ze op kunnen pakken.

## verslag online meeting 24 februari 2022
Aanwezig Linda van den Brink (Geonovum), Paul van Genuchten (ISRIC.org), Mark Strijker (Kadaster), Robert Yashar (gemeente Amsterdam)

 - Gesproken over [PR over CRS](https://github.com/Geonovum/KP-APIs/pull/434): er is review geweest van een paar mensen. Afgesproken dat Linda nog wat verbeteringen doorvoert. 
    - Lennart huisman vragen crs uris te reviewen.
    - verwijzen naar ogc bouwblokjes ipv zelf herschrijven
    - bbox-crs is niet erg toekomstbestendig ie je moet dan voor elke geometriesoort een parameter introduceren.
    - Zie verder de reviewopmerkingen in de PR.
 - N.a.v. het vorige punt ook even gesproken over naming conventions voor parameters. Zijn die er in de ADR? En zo ja, botsen die met naming conventies in OGC APIs? Gemeente A'dam gebruikt altijd underscore om clash met datavelden te vermijden.Uitzoekpunt.
 - [issue #429](https://github.com/Geonovum/KP-APIs/issues/429) bespreken voortgang niet aan toegekomen.
 - [issue #184](https://github.com/Geonovum/KP-APIs/issues/184) breder binnen API strategie groep bespreken. Het speelt niet alleen bij de geo extensie. Voorstel Mark is om de reden van het 'misbruiken' van POST uit te leggen. Dus het oorspronkelijke detailissue parkeren.
Robert geeft aan dat er een methode in ontwikkeling is waarmee dit netjes kan.

## verslag online meeting 3 februari 2022
Aanwezig: Linda van den Brink (Geonovum), Paul van Genuchten (ISRIC.org), George Mathijssen, Egbert van Milgen (Cadac), Mark Strijker (Kadaster)

Gekeken naar verschillende issues:
- [Is het mogelijk om met een OGC-API Features service te voldoen aan nl-api strategie #425](https://github.com/Geonovum/KP-APIs/issues/425): Besloten om wijziging omtrent CRS content negotiation door te voeren zoals voorgesteld in het issue. Om deze wijziging te tracken,  een nieuw issue [#432](https://github.com/Geonovum/KP-APIs/issues/432) aangemaakt.
- [GeoJSON is niet geschikt voor BGT data #429](https://github.com/Geonovum/KP-APIs/issues/429) besproken. Vanuit de OGC werkgroep voor JSON-FG is verzocht om informatie over operationeel gebruik in NL + databases en bibliotheken met ondersteuning voor cirkelbogen. @sweco-nlgemo gaat dit aanleveren. 
- [geojson als formaat of als ontologie #424](https://github.com/Geonovum/KP-APIs/issues/424): besproken en besloten een aantal vragen hierover te stellen aan de OGC JSON-FG werkgroep. @lvdbrink gaat dit doen (want zit in de desbetreffende werkgroep).

## verslag online meeting 12 januari 2022
Aanwezig: Linda van den Brink (Geonovum), Paul van Genuchten (ISRIC.org), George Mathijssen (SWECO), Pieter Bresters (Geonovum)

Met een klein groepje aanwezigen hebben we gekeken naar pull request [#426](https://github.com/Geonovum/KP-APIs/pull/426). Besloten is om deze PR in 2 op te splitsen. Het deel over het beter bruikbaar maken van APIs voor GIS clients wordt apart gezet en de documentconventies voor het doen van aanbevelingen en het geven van voorbeelden worden toegepast.

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
