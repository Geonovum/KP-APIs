# Consultatiereacties

Onderstaande zijn de reacties die zijn ingediend naar aanleiding van de consultatie van de geomodule die in oktober 2022 is gehouden. Naar aanleiding van deze reacties worden github issues aangemaakt. 

## Reacties van kadaster

### Voorstellen
1. De inleiding is wat rommelig geformuleerd. Mist opbouw en samenhang.
2. par 2.1 tekstueel: ""In this extension we adopt [...]"" Extension of what?
3. par 2.1 tekstueel: extension moet module zijn.
4. mbt API-GEO-1: Hoe verhoudt dit zich tot andere media types? Lever je voor een feature (collection) dan ook nog een HAL (of andere) response?
5. mbt API-GEO-1: Wat doe je met alle non-geometry attributen, voeg je die allemaal toe als feature properties? Of enkel een subset?
6. mbt API-GEO-1: De beschrijving heeft het enkel over de response, waarom is dit dan niet onderdeel van ""2.3 Result (response)""?
7. mbt API-GEO-1: Onduidelijk of dit gaat over het toepassen van het Feature(Collection) model (heel document) of om embedded Geometry(Collection) objecten (in een document van een ander mediatype).
8. mbt API-GEO-1: ""preferebaly use"" waarom zwak geformuleerd?
9. mbt API-GEO-1: Relatie met andere API mediatypes onduidelijk. Hoe kom je aan de resource location? application/geo+json biedt geen api navigatie controls
10. mbt API-GEO-1: OGC api features requirements class 8.3 geeft aan dat bij meerdere features een featurecollection gebruikt wordt. Denk handig om dit in ""how to test"" op te nemen.
11. par 2.2: Er zijn meer toepassingen van het meesturen van een geometrie in het request (bijv bij een POST/PUT schrijf-operatie). Het gaat dus niet enkel om filtering.
12. par 2.2: De oude extensie had wel een methode voor het omgaan met meer operators, en complexe geometrieën. Deze wordt ook veelvuldig gebruikt binnen het Kadaster en het DSO. Als dat nu helemaal wordt weggelaten, is er geen enkele standaard meer om te implementeren? Voorbeelden uit oude versie als deprecated opnemen of in appendix?
13. mbt API-geo-2: Wat gebeurt er als een objecttype meer dan 1 geometrie attribuut heeft? Op welke wordt er dan gefilterd? Expliciet benoemen dat het de keuze van de provider is (volgens OGC API Features) wat er gebeurt in geval van meerdere geometrieën en dat een provider dit duidelijk moet documenteren.
14. mbt API-GEO-2 Expliciet vermelden dat het hier gaat om een ""intersects"" vergelijking?
15. mbt API-GEO-2 Misschien goed om iets te zeggen over het mogelijk limiteren van de omvang van de bounding box? Met name in combinatie met andere filters en sorting levert dit in de praktijk de nodige performance implicaties op. Suggestie: limiteren bounding box oppevlakte  Evt. foutmelding bij teveel resultaten.
16. mbt API-GEO-2 tekstueel -> bbox query parameter (overal doorvoeren)
17. mbt API-GEO-2 Ook hier een aantal van de relevante details uit OGC API features vermelden? Kan als informatieve tekst.
18. mbt API-GEO-3 Dit heeft betrekking op globaal zoeken en typering in het algemeen. Dit hoort niet thuis in de geo module.
19. mbt API-GEO-3 ""because results from different collections are retrieved"" Collections? Mogelijk link naar meer uitleg over wat een collection is.
20. mbt API-GEO-3 Zou dit niet in 2.3 Result (Response) moeten staan?
21. par 2.3 tekstueel: ""In a JSON API the geometry is returned [...]"" Wat is een ""JSON API""? 
22. mbt API-GEO-4 Geldt dit alleen voor application/json? of ook voor andere json (+json) based media types? 
23. mbt API-GEO-4 ""a property coordinates containing an array with a minimum of 2 numbers."" dit geldt niet voor alle geometry types
24. Het lijkt mij vreemd dat iedere REST API die iets met geo doet een extra endpoint moet introduceren voor het opvragen van een lijst met collections, enkel en alleen voor het discoveren van CRSen. API's zijn vaak complexer opgebouwd dan simpelweg feature-collections en features. Wat stop je dan wel of niet in deze lijst? Ook niet-geo collecties of geneste collecties? Ik vraag mij af hoe zinvol dit is, als je niet ook alle andere standaard endpoints van OAF implementeert. Mogelijk aanpassen naar overnemen van  bepaalde aspecten uit de discovery feature evt. ism andere meta gegevens over de serivce. "

### Suggesties
1. Inleiding: De organisatie ""European Petroleum Survey Group (EPSG)"" bestaat niet meer. Dit is nu de ""International Association of Oil & Gas Producers (IOGP)"". De ""EPSG Geodetic Parameter Dataset"" heeft nog wel EPSG in de naam, maar de letters staan nergens meer voor.
2. par 3.1: Waarom zou de API het CRS van opslag moeten ondersteunen? Er zijn (theoretische) gevallen waarin een specifiek CRS handig is voor opslag maar niet voor uitwisseling van data. Is deze eis noodzakelijk? Zo niet, dan kan deze in er uit: ""The value of this property shall be one of the CRSs supported by the API and advertised in the CRS list"". Aanbeveling van maken i.p.v. verplichting.
3. par 3.2: De zin ""This is the global CRS that can be applied world-wide."" aanpassen naar ""This refers to an ensemble of global CRSs that can be applied world-wide.""
4. par 3.2: De zin ""Thus, spatial data can be mapped without any complex transformations."" is geen logishc gevolg van ""Since most client-side mapping libraries use WGS 84, the W3C/OGC Spatial Data on the Web working group recommends to use this as the default coordinate reference system. "". Er moet duidelijker geformuleerd worden wat bedoeld wordt (of de zin verwijderd).
5. par 3.2: Waarom moet ""Pseudo Mercator"" altijd ondersteund worden? De ""Handreiking CRS ([hr-crs]) zegt over ""Pseudo Mercator"" dat het ""alleen geschikt [is voor] eenvoudige visualisatie van onnauwkeurige data"". Voor data die niet bedoelt zijn voor visualisatie is ""Pseudo Mercator"" dus onwenselijk in een API. Psuedo mercator wel aanbevelen als één van de opties voor visualisaties.
6. par 3.2: De zin ""Use RDNAPTRANS™ 2018 to transform RD/Amersfoort to ETRS89 (correction grid);"" aanpassen naar ""Use the latest version of RDNAPTRANS™ to transform RD to ETRF2000 (including correction grid for the highest accuracy);"" (dit maakt het consistent met een vergelijkbare passage later in de tekst). Amersfoort weglaten en geen versie van RNAPTRANS noemen vanwege onderhoudbaarheid, laatste versie gebruiken.
7. par 3.2: Aan ""the guiding principles for CRS support"" dit punt toevoegen ""Use a nulltransformation to transform ETRF2000 to WGS 84 unless a time-dependent transformation is needed, see the CRS Guidelines [hr-crs]. If a time-dependent transformation is used for WGS 84, the CRS used as realisation of WGS 84 should be supported by the API too, e.g. if the transformation between ETRF2000 and ITRF2014 at epoch 2020 is used for request/response in WGS 84 (EPSG:4326), then the API should also support ITRF2014 (EPSG:9000)."" Het advies is om altijd de meest specifieke CRS aan te geven en niet allen het ensemble zoals WGS84 of ETRS89.
8. par 3.2: In toevoeging op de opmerking van Jochem over time-dependent transformation zou ik het volgendde willen teovoegen als eis: When the API provides data in an ensemble CRS like WGS 84 or ETRS89 while it is known to what ensemble member CRS the data actaully refers to, this ensemble member should also be one of the CRSs supported by the API and advertised in the CRS list. E.g. when 2D data is transformed from RD with RDNAPTRANS not only EPSG::4258 should be supported but also EPSG::9067.
9. par 3.2: In de zin ""Exchange format (notation) RD and Pseudo Mercator X Y in meters: 195427.5200 311611.8400"" een komma toevoegen tussen de coordinaten ""195427.5200, 311611.8400"".
10. par 3.2: De URIs van ETRF2000 zijn ""http://www.opengis.net/def/crs/EPSG/9.9.1/9067"" (2D) en ""http://www.opengis.net/def/crs/EPSG/9.9.1/7931"" (3D). Dit zijn specifiekere CRS-en van een ensemble, opnemen in de tabel als het advies wordt gegeven om een zo specifiek mogelijk CRS op te geven. ETRF2000 is de CRS die we in NL gebruiken.
11. par 3.2: De zin ""Officially, WGS 84 lat-long (CRS84) is the only CRS allowed in GeoJSON."" aanpassen naar ""Officially, WGS 84 (CRS84) is the only CRS allowed in GeoJSON."" Het is long-lat en niet lat-long beter weglaten om verwarring te voorkomen.
12. par 3.2: De zin ""In addition, the Geonovum CRS guidelines [hr-crs] describe how ETRS89 can be treated as equal to WGS84 under certain circumstances - but note that GeoJSON requires coordinates to be in latitude-longitude order, while ETRS89 uses longitude-latitude."" aanpassen naar ""In addition, the Geonovum CRS guidelines [hr-crs] describe how ETRF2000 should be treated as equal to WGS 84 under most circumstances. Note that GeoJSON requires coordinates to be in easting-northing order for projected coordinates and longitude-latitude order for geographic coordinates, even if a CRS uses a different order and is defined as such in EPSG.
13. par 3.2: ""Source systems record coordinates as they enter the system (legal context);"" legal context? Lijkt me hier onnodig detail.
14. par 3.2: ""Consider no-regret: record in multiple much-requested CRSs instead of on-the-fly transformation;"" Opinionated. Te veel detail
15. par 3.2: ""Use RDNAPTRANS™ 2018 to transform RD/Amersfoort to ETRS89 (correction grid);""    missing link / reference
16. par 3.2: ""Presentation depending on context (e.g. user requirements);""    onduidelijk
17. par 3.2: ""Exchange format (notation) ETRS89 and WGS84 longitude latitude in decimal degrees: DD.ddddddddd (for example: 5.962376256, 52.255023450)""   onduidelijk. Is dit een precision requirement? Hoe specificeer je gewenste nauwkeurigheid?
18. mbt API-GEO-9: tekstueel: ""in a request parameter as a parameter"" dubbel op. voorstel: ""Support passing the coordinate reference system (CRS) of the geometry as a query parameter""
19. par 3.2: ""If an invalid value, i.e. a CRS which is not in the list of supported CRSs, is given for one of these parameters, the server responds with an HTTP status code 400.""   is dit normatief? Onduidelijk
20. par 3.2: tekstueel: ""In an API that supports transactions, POST requests with [...]"" Wat zijn transactions?
21. mbt API-GEO-10: Levert een POST altijd een HTTP 201?
22. bmt API-GEO-10: Deze passage staat er wat verscholen: ""Alternatively, if the feature representation supports expressing CRS information for each feature / geometry, the information can also be included in the feature representation. If no CRS is asserted, the default CRS, CRS84, is assumed."" Daarnaast is het onduidelijk wat de normativiteit hiervan is.
23. mbt API-GEO-11: tekstueel: -> Support passing the desired coordinate reference system (CRS) of the geometry in the response as a query parameter
24. par 3.3: De zin ""In case of a transformation between RD and ETRS89, it is highly recommended that this transformation uses the latest version of the procedure of RDNAPTRANS™."" aanpassen naar ""In case of a transformation between RD and ETRF2000, it is required that this transformation uses the latest version of the procedure RDNAPTRANS™.""
25. Hoe specificeer je evt. gewenste nauwkeurigheid van CRS transformatie?

### Tekstuele opmerkingen
1. Hoofdstuk 1 Introductie: tekstueel: ""a bit more"" is informeel -> ""more""
2. Hoofdstuk 1 Introductie: tekstueel: woord ""specific"" wordt te vaak gebruikt
3. Gehele tekst: De officiële naam is niet ""WGS84"", maar ""WGS 84"".
4. Gehele tekst: ""ETRS89 (EPSG:4258)"" is een onnauwkeurige ensemblecode, het is beter om uitsluitend ""ETRF2000 (EPSG:9067)"" te gebruiken.
5. Gehele tekst: ""Amersfoort"" is geen onderdeel van de officiële naam van het ""Stelsel van de Rijksdriehoeksmeting"" (RD). Consistente naamgeving door het hele document, als er verwezen wordt naar EPSG namen, dit expliciet benoemen.
6. Ik mis het gebruik van RFC 2119 (https://www.ietf.org/rfc/rfc2119) voor keywords als MAY, MUST, SHOULD etc.
7. Onduidelijk welk gedeelte van deze tekst normatief is en welk gedeelte enkel informatief is.
8. Tekst is in het Engels, maar veel voorbeelden hebben Nederlandse termen. Waarom niet alles in het Engels? Dat maakt het geheel veel leesbaarder. bijv. api/v1/buildings ipv api/v1/panden
9. To do verwijderen
10. Na verwerking van de opmerkingen graag nog een keer laten reviewen o.a. door Kadaster.
11. WGS 84 wordt soms gebruikt waar expliciet CRS84 bedoeld wordt. Of overal WGS84 vervangen door CRS84 waar CRS84 wordt bedoeld. Waar WGS 84 pseudo mercator staat mag wel WGS 84 blijven staan.

## Vicrea Solutions

### Voorstellen
Er worden alternatieven genoemd voor GeoJSON bij het gebruik van arcs. Ik zou dan ook informatie verwachten over hoe die alternatieven geëmbed moeten worden in de JSON. Voor GML lijkt me die als string opnemen niet heel wenselijk, maar het hele bericht GML maken ook niet.
Is er ook gekeken naar TopoJSON als alternatief (ook geen OGC-standaard, maar JSON-FG ook nog niet officieel)?

### Suggesties
In het stukje:
> Officially, WGS84 lat-long (CRS84) is the only CRS allowed in GeoJSON. However, GeoJSON does state that using another CRS is allowed, if this is agreed between provider and consumer of the data. The API functionality described above, to negotiate the CRS between client and server, can be viewed as such an agreement.

moet het denk ik WGS84 long-lat zijn.

In de tabel met kop Scenario 	Explanation ontbreekt de volgende:
Geometry in request body, geometry in response.
Ik denk b.v. aan de BGT waar je de geometrie van je object wilt vergelijken met andere opdelende geometrieën.

Verder vraag ik me af of het nuttig is om overal de conversie naar CRS84 te vereisen, in het geval dat alle uitwisselende systemen gebruik maken van RD. Al zal er altijd de parameter voor RD meegegeven worden, volgens deze standaard moet je wel werk doen om het opvragen van CRS84 mogelijk te maken.

### Tekstuele opmerkingen
Er wordt gelinkt naar https://github.com/INSPIRE-MIF/gp-ogc-api-features/blob/master/spec/oapif-inspire-download.md#83-requirements-class-inspire-oapif-geojson-, maar de link daarin naar de requirements class is dood. 
