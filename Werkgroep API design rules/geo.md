# Werkgroep: Geo

De werkgroep Geo is opgestart in november 2021 en het werk vindt plaats in deze
github repository; zie issues met tag
[Geo-extensie](https://github.com/Geonovum/KP-APIs/issues?q=is%3Aissue+is%3Aopen+label%3AGeo-extensie).

De werkgroep houdt 1x per 2 weken een korte online meeting (half uur). Neem voor deelname aan deze werkgroep contact op met Linda van den Brink (Geonovum).

## verslag online meeting 18 januari
- Aanwezig: Martin van der Plas, George Mathijssen en Linda van den Brink. 

Linda geeft overzicht: 
- er zijn nu 23 open issues (2 zijn on hold)
- geen open PRs. De afgelopen tijd hebben we veel PRs gehad, gereviewd en gemerged. 
- Er staan 6 issues in de To discuss kolom
- 15 in To do
- niets In progress

Een aantal issues staat wellicht onterecht nog open omdat ze niet aan een PR gelinkt waren; Linda heeft Mark gevraagd hiernaar te kijken. 

George: heeft vooral PRs gereviewd. Was ook bezig met een issue, dat gaat hij nog afronden. 

Martin: is bezig met modulaire opbouw van de API Design Rules in het algemene. Hij is onder andere een scheiding aan het maken tussen functionele en technische rules, die laatste kunnen echt getest worden, de eerste niet. Uiteindelijk zouden wij dat ook moeten doen in de geo module. Maar we kunnen eerst een versie vaststellen en daarna alsnog die rules gaan scheiden. 

Een deel van de issues in To Do hebben we besproken: 
- [#500](https://github.com/Geonovum/KP-APIs/issues/500): sluiten met rationale in comment.
- [#495](https://github.com/Geonovum/KP-APIs/issues/495) en [#491](https://github.com/Geonovum/KP-APIs/issues/491): onduidelijk wat het antwoord zou moeten zijn en of je dit in de geo module zou moeten uitleggen (of in de crs handreiking?). Het lijkt ons niet iets voor de geo module > Mark en Pieter hier input over vragen voordat we deze issues evt. sluiten.
- [#493](https://github.com/Geonovum/KP-APIs/issues/493): uitleg toevoegen aan tekst. George pakt deze op.
- [#496](https://github.com/Geonovum/KP-APIs/issues/496): de opmerking is terecht, we voegen een note toe in de tekst. Linda pakt deze op.
- [#494](https://github.com/Geonovum/KP-APIs/issues/494), [#492](https://github.com/Geonovum/KP-APIs/issues/492): Linda pakt deze op.
- [#497](https://github.com/Geonovum/KP-APIs/issues/497), [#498](https://github.com/Geonovum/KP-APIs/issues/498): George pakt deze op.

## verslag online meeting 6 december
- Aanwezig: Mark Strijker, Pieter Bresters, Martin van der Plas, George Mathijssen en Linda van den Brink. 

Een aantal pull requests besproken. 
- Een aantal issues verzoekt om te verwijzen naar specifieke members van CRS-sen in plaats van het ensemble. We willen hieraan tegemoet komen maar tegelijk niet teveel complexiteit introduceren. Besloten om een notitie toe te voegen in de intro van de  crs paragraaf over voorkeur voor members van ensambles als de nauwkeurigheid van de data dat vereist en het mogelijk is. Linda maakt hiervoor een issue aan (inmiddels gebeurd, [issue #513](https://github.com/Geonovum/KP-APIs/issues/513))
- [PR #506](https://github.com/Geonovum/KP-APIs/pull/509) met tekstuele fixes gemerged 
- Mark gaat opmerkingen op zijn PRs [#511](https://github.com/Geonovum/KP-APIs/pull/511) en [#512](https://github.com/Geonovum/KP-APIs/pull/512) verwerken

Het gaat waarschijnlijk niet lukken om alle consultatie issues te verwerken voor eind 2022. Daarom wordt een aantal extra meetings gepland in het begin van 2023.  

Linda gaat door de issuelijst heen om te kijken welke issues discussie nodig hebben, voordat ze kunnen worden opgepakt.

## verslag online meeting 24 november

- Aanwezig: Mark Strijker, Pieter Bresters, Martin van der Plas, George Mathijssen en Linda van den Brink. 

Alle issues, die uit de consultatie zijn gekomen, zijn opgenomen als github issues. Deze zijn opgenomen in een github project zodat we een [geo module kanbanbord](https://github.com/Geonovum/KP-APIs/projects/2) hebben.

Als werkwijze afgesproken:
- ieder kiest voor zich issues uit om aan te werken. Dit laten we aan elkaar weten door ze dan aan onszelf toe te wijzen.
- voor opgeloste issues dienen we een pull requests in
- we werken in de `development-modulaire-opbouw` branch.

## verslag online meeting 8 november
De geo module was de hele maand oktober in consultatie. Er zijn zo tussen de 50 en 60 reacties binnengekomen van twee organisaties. Op 8 november waren we bijeen om in de ADR geo module werkgroep de verwerking van consultatiereacties te bespreken. 

- Aanwezig: Mark Strijker, Pieter Bresters, Martin van der Plas en Linda van den Brink. 
- Afgemeld: George Mathijssen 

De reacties staan in een [markdown document](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20design%20rules/consultaties/geo-okt2022-reacties.md). Dit is een tussenvorm: vanuit deze lijst gaan we de reacties omzetten in github issues. Dit gaan Mark Strijker, Pieter Bresters en Martin van der Plas doen. 

Vervolgens gaan we de issues oppakken. Om dit te faciliteren zullen we weer elke twee weken op dinsdag van half 2 tot 2 bij elkaar zitten (in teams). 

Werkverdeling: 
-	Mark Strijker: Kadaster Voorstellen 1 t/m 17
-	Pieter Bresters: Kadaster Voorstellen 18 t/m 24 + Kadaster Suggesties 1 t/m 8
-	Martin van der Plas: Kadaster Suggesties 9 t/m 25
-	Linda van den Brink: Kadaster Tekstuele opmerkingen + Vicrea alle opmerkingen

## verslag online meeting 5 juli
Aanwezig: Pieter, Mark, George, Linda

2 ingediende PRs besproken. 
- PR #456 is gereviewd en na een kleine aanpassing van Linda gemerged. Hiermee zijn ook een aantal issues gesloten. 
- PR #459 is ter plekke toegelicht door Mark en deels ter plekke verbeterd naar aanleiding van opmerkingen van Pieter. Verwijzing naar de CRS handreiking van Lennart Huisman moet nog worden toegevoegd; en de omschrijving van het begrip CRS moet nog worden nagekeken zodat deze klopt met de CRS handreiking. 

Issue #425 hebben we on hold gezet, wat betekent dat we deze niet meer verder oppakken in de nu op te leveren geo extensie. Dit issue over in hoeverre het mogelijk is om met een OGC-API Features service te voldoen aan nl-api strategie, is te breed om nu op te pakken omdat je ook de API design rules buiten de geo-extensie gaat raken. We hebben het issue deels ingevuld door geo-specifieke functionaliteit uit de OGC API Feature standaard op te nemen in de geo-extensie, maar zaken uit OGC API Features die buiten de geo-extensie vallen nog niet. De inschatting van Pieter, op basis van een voor INSPIRE uitgevoerd onderzoek, is dat dit wel mee valt, maar we vonden het toch te veel en te onzeker om nu nog mee te nemen. Er moet nog nagedacht worden over hoe we dit issue wel volledig gaan adresseren; wellicht door een OGC Features API te implementeren en te proberen die ook te laten voldoen aan de NL API strategie.

Pieter voert nog één issue op over het toevoegen van een paragraaf over voldoen aan de geo-extensie als je een INSPIRE dataset hebt. Hiervoor is een kort tekstje nodig.

Procesafspraken:
- We handelen alle nog openstaande issues die niet on hold zijn, deze week af. 
- Linda doet daarna nog één check van de tekst en stuurt deze dan naar de grotere API Design Rules werkgroep, vergezeld van de vraag wanneer ze het gereviewd denken te hebben en wat de volgende stappen zijn. 
- Linda koppelt antwoord en feedback terug naar de groep. 
- Voorlopig was dit de laatste werkgroep bijeenkomst; indien nodig wordt er een overleg gepland als er feedback is van de API Design Rules werkgroep. 

## verslag online meeting 21 juni
Aanwezig: Pieter, George, Linda

4 ingediende PRs besproken. PR #452 wordt nog gereviewd door Pieter; de andere drie, #450, #451, en #453 zijn gemerged. 

De nog openstaande issues kort besproken. Een aantal issues is gesloten vanwege gemergede PRs. Nog open:
- #425 heeft te maken met PR #452, die nog gereviewd wordt.
- #442 is vermoedelijk al opgelost door PR #452. Pieter gaat dit na omdat hij #452 toch nog moet reviewen.
- #444 hebben we besloten te parkeren, deze heeft nu het label `on hold`.
- #446 wordt doorgevoerd door Linda

Er is één nieuw issue toegevoegd: #454. Voorstel van George om voorin de geo-extensie tekst op te nemen dat waar we het hebben over een coordinaatreferentiesysteem, we ook de 3D variant daarvan bedoelen. Wordt doorgevoerd door Linda.

Hiermee zijn alle issues toegewezen en zijn er geen grote taken meer. Als de laatste taken zijn afgerond en PRs gemerged, doet Linda een consistentiecheck van de hele tekst. Hopelijk kan dit nog voor de volgende meeting van de geo-extensie werkgroep. We kunnen dan de extensie gaan aanbieden aan de bredere API Design Rules werkgroep.

Met andere woorden, het einde is in zicht!

## verslag hybride meeting 7 juni
Van 1 tot 2 bij Geonovum. Aanwezig: Mark, Pieter, Linda.

[PR #449](https://github.com/Geonovum/KP-APIs/pull/449) besproken, vooral wat betreft het al dan niet verwijderen of deprecated maken van de oude CRS negotiation methode. Overwegingen zijn in het issue toegevoegd. Na de vergadering heeft Mark de gevraagde wijziging doorgevoerd en het PR gemerged.

[Issue #425](https://github.com/Geonovum/KP-APIs/issues/425) besproken. Dit vinden we een belangrijk issue. We zijn nog bezig met de vergelijking geo-extensie - OGC API Features part 1 en 2; de geo-gerelateerde requirements uit deze standaarden willen we in ieder geval nog opnemen in de geo-extensie zodat je met een geo-extensie conforme API ook aan OGC API Features kunt voldoen. 

Overige openstaande issues kort besproken. Bij elk issue is met een kort commentaar aangegeven wat we ermee doen, voor zover dit nog niet besloten was. Elk issue is aan iemand toegewezen. 

We streven ernaar om alle toegewezen issues, met prio 1 of 2 (dit zijn: #448, #446, #442, #438, #429, #425, en #281) per eind juni af te ronden. Daarna kan de geo-extensie naar de grotere ADR werkgroep voor review.

## verslag online meeting 24 mei 2022
[Issue 425](https://github.com/Geonovum/KP-APIs/issues/425) over ADR vs OGC API Features besproken:
- Linda zal issues maken over punten die naar voren komen om te verwerken in de geo-extensie
- Discussie: kunnen we in NL een andere default CRS afspreken dan de OGC standaard doet? In NL gebruiken we vooral ETRS-89 en RD. De OGC standaard schrijft CRS84 voor, maar lijkt zichzelf tegen te spreken. Indien nodig een issue maken bij OGC om dit volledig helder te krijgen. Linda pakt dit op. Voor dit onderwerp [issue 448](https://github.com/Geonovum/KP-APIs/issues/448) aangemaakt.

[Issue 281](https://github.com/Geonovum/KP-APIs/issues/281) over ruimtelijke filters via POST besproken. Afgesproken dat de werkgroepleden het voorstel in het issue nog even lezen en aangeven of ze het ermee eens zijn. 

Onderhanden issues: 
- 442 - gaat Mark oppakken zodra hij tijd heeft
- 439 - gedaan door Mark, maar nog geen PR gedaan, komt eraan
- 425 - gaan Linda en/of Mark mee verder

Korte discussie gehad over [issue 446](https://github.com/Geonovum/KP-APIs/issues/446), zie commentaar aldaar.

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
