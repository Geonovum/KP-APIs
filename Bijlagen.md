# Bijlagen

## API Principes


### API-01: API's garanderen dat operaties "Veilig" en/of "Idempotent" zijn

Operaties van een API zijn gegarandeerd "Veilig" en/of "Idempotent" als dat zo
is bepaald.

### API-02: Toestandsinformatie wordt nooit op de server opgeslagen

De client-toestand wordt volledig bijgehouden door de client zelf.

### API-03: Alleen standaard HTTP-operaties worden toegepast

Een RESTful API is een application programming interface die de standaard
HTTP-operaties GET, PUT, POST, PATCH en DELETE gebruikt.

### API-04: Definitie van het koppelvlak is in het Nederlands tenzij er sprake is van een officieel Engelstalig begrippenkader

Resources en de achterliggende entiteiten, velden, etc. (het informatiemodel en
het externe koppelvlak) worden in het Nederlands gedefinieerd. Engels is
toegestaan indien er sprake is van een officieel Engelstalig begrippenkader.

### API-05: Resource namen zijn zelfstandige naamwoorden in het meervoud

Namen van resources zijn zelfstandige naamwoorden en altijd in het meervoud,
zoals aanvragen, activiteiten, vergunningen. Ook als het om het een enkel
resource betreft.

### API-06: Relaties van geneste resources worden bij voorkeur binnen het eindpunt gecreëerd

Als een relatie alleen kan bestaan binnen een andere resource (geneste
resource), wordt de relatie bij voorkeur innen het eindpunt gecreëerd. De
afhankelijke resource heeft in dat geval geen eigen eindpunt

### API-07: Resources ondersteunen bij voorkeur "lazy" en "eager" laden van relaties

Resources die een n-op-n relatie kennen ondersteunen bij voorkeur zowel het
teruggeven van identificaties van gerelateerde resources (lazy loading) als het
teruggeven van de resources zelf (eager loading).

### API-08: Gelinkte resources worden expliciet en selectief mee-geladen

Gelinkte resources worden expliciet en selectief mee-geladen als onderdeel van
een resource verzoek middels de expand query-parameter.

### API-09: Indien representatie op maat wordt ondersteund, dan conform dit principe.

Het is mogelijk om een door komma's gescheiden lijst van veldennamen op te geven
met de query-parameter fields om een representatie op maat te krijgen. Als
niet-bestaande veldnamen worden meegegeven wordt een 400 Bad Request
teruggegeven.

### API-10: Acties die niet passen in het CRUD model worden een sub-resource

"Acties die niet passen in het CRUD model worden op de volgende manieren
opgelost:

-   Behandel een actie als een sub-resource.

-   Alleen in uitzonderlijke gevallen wordt een actie met een eigen eindpunt
    opgelost."

### API-11: De verbinding is ALTIJD versleuteld met minimaal TLS V1.2

De verbinding is ALTIJD versleuteld op basis van minimaal TLS V1.2. Geen
uitzonderingen, dus overal en altijd. In het geval van toegangsbeperking of
doelbinding wordt tweezijdig TLS toegepast. Doordat de verbinding altijd is
versleuteld maakt het authenticatiemechanisme eenvoudiger. Hierdoor wordt het
mogelijk om eenvoudige toegangstokens te gebruiken in plaats van toegangstokens
met encryptie.

### API-12: API's zijn bij voorkeur alleen bruikbaar met behulp van een API-key

Voor alle API's wordt bij voorkeur minimaal een registratie inclusief acceptatie
van de fair use voorwaarden vereist. Op basis hiervan zal dan een API-key wordt
uitgegeven.

### API-13: Tokens worden niet gebruikt in query parameters

Er is een inherent beveiligingsprobleem bij het gebruik van een query parameter
voor tokens omdat de meeste webservers queryparameters in de server logs
wegschrijven.

### API-14: Autorisatie is waar nodig gebaseerd op OAuth 2.0

Een REST API mag geen state hebben. Elk verzoek moet daarom zijn voorzien van
een token. OAuth 2.0 is hiervoor de voorgeschreven standaard, hoofstuk
Beveiliging bevat meer informatie.

### API-15: Authenticatie voor API's met toegangsbeperking of doelbinding is gebaseerd op PKIoverheid

In het geval van API's met toegangsbeperking of doelbinding zal er aanvullend
sprake zijn van authenticatie op basis PKIoverheid certificaten en tweezijdig
TLS.

### API-16: Documentatie is gebaseerd op OAS 3.0 of hoger

Specificaties (documentatie) is beschikbaar als Open API Specification (OAS)
V3.0 of hoger.

### API-17: Documentatie is in het Nederlands tenzij er sprake is van bestaande documentatie in het Engels of er sprake is van een officieel Engelstalig begrippenkader

De voertaal voor de API's is Nederlands. Het is wel toegestaan om te verwijzen
naar bestaande documentatie is het Engels en als er sprake is van een officieel
Engelstalig begrippenkader.

### API-18: Wijzigingen worden gepubliceerd met een uitfaseringschema

Koppelvlak wijzigingen worden met bijbehorende planning op een publiek
toegankelijke blog als changelog bekendgemaakt en via een mailinglijst.

### API-19: De overgangsperiode bij een nieuwe API versie is maximaal 1 jaar

Oude en nieuwe versies (max. 3) van een API worden voor een beperkte
overgangsperiode (1 jaar) naast elkaar aangeboden.

### API-20: Alleen het major versienummer is onderdeel van de URI

In de URI wordt alleen het major versienummer opgenomen. Minor versienummer en
patch versienummer worden in de header van het bericht zelf opgenomen. Het
uitgangspunt dat hierbij wordt gehanteerd is dat minor versies en patches geen
impact hebben op bestaande code, maar major versies wel.

### API-21 Gebruikers van een ‘deprecated' API worden actief gewaarschuwd

Met een `Warning` response-header in alle responses van de oude API's worden
gebruikers gewaarschuwd voor de aanstaande uitfasering.

### API-22: JSON first - API's ontvangen en versturen JSON

API's ontvangen en versturen JSON.

### API-23: API's zijn optioneel voorzien van een JSON Schema

API's ondersteunen JSON Schema (<http://json-schema.org),> zodat validatie
mogelijk (optioneel) is en vereenvoudigd wordt.

### API-24: Content negotiation wordt volledig ondersteund

Andere representaties zoals XML en RDF worden naast JSON via het standaard HTTP
content negotiation mechanisme ondersteund. Als het gewenste formaat niet
geleverd kan worden zal er een 406 Not Acceptable worden teruggegeven.

### API-25: API's controleren dat de Content-Type header is ingesteld

Er wordt gecontroleerd of het `Content-Type` header is ingesteld op
`application/json` of andere ondersteunde content types, anders wordt HTTP
statuscode `415 Unsupported Media Type` geretourneerd.

### API-26: Woorden in veldnamen zijn gedefinieerd in `camelCase`

Een veldnaam begint met kleine letters (eerste woord) en ieder opvolgend woord
begint met een hoofdletter.

### API-27: Pretty print is standaard uitgeschakeld

Het uitgangspunt is dat REST clients en browsers (al dan niet met extensies)
JSON netjes geformatteerd kunnen weergeven.

### API-28: Een JSON-response heeft geen omhullende envelop

Er worden standaard geen enveloppen toegepast.

### API-29: API's ondersteunen JSON gecodeerde POST, PUT en PATCH payloads

API's ondersteunen minimaal JSON gecodeerde `POST`, `PUT` en `PATCH` payloads.
Encoded form data (`application/x-www-form-urlencoded`) wordt niet ondersteund.

### API-30: Filter query-parameters zijn gelijk aan de velden waarop gefilterd kan worden

Gebruik unieke query-parameters die gelijk zijn aan de velden waarop gefilterd
kan worden.

### API-31: Voor sorteren wordt de query-parameter sorteer gebruikt

De generieke query-parameter `sorteer` wordt gebruikt voor het specificeren van
door komma's gescheiden velden waarop gesorteerd moet worden. Door een minteken
(`-`) voor de veldnaam te zetten wordt het veld in aflopende sorteervolgorde
gesorteerd.

### API-32: Voor vrije-tekst zoeken wordt een query-parameter zoek gebruikt

API's die vrije-tekst zoeken ondersteunen doen dit middels de query-parameter
`zoek`.

### API-33: API's die vrije-tekst zoeken ondersteunen kunnen overweg met twee soorten wildcard karakters: `*` en `?`

API's die vrije-tekst zoeken ondersteunen kunnen overweg met twee soorten
wildcard karakters:

-   `*` Komt overeen met nul of meer (niet-spatie) karakters

-   `?` Komt precies overeen met één (niet-spatie) karakter

### API-34: GEO API's ontvangen en versturen bij voorkeur GeoJSON

Voor GEO API's wordt bij voorkeur de standaard GeoJSON
([RFC-7946](https://tools.ietf.org/html/rfc7946)) gebruikt.

### API-35: GeoJSON is onderdeel van de embedded resource in de JSON response

Als een JSON (`application/json`) response een geometrie bevat, dan wordt deze
geometrie op dezelfde manier teruggegeven als het `geometry` object van GeoJSON
([RFC-7946](https://tools.ietf.org/html/rfc7946)):

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
{
  "type": "Point",
  "coordinates": [125.6, 10.1]
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### API-36: Voor GEO queries is een POST end-point beschikbaar

Geometrische queries worden in een `POST` naar een apart endpoint verzonden.

### API-37: POST end-points zijn uitbreidbaar voor gecombineerde vragen

De geometrie is uitbreidbaar met andere properties voor gecombineerde queries.

### API-38: Resultaten van een globale geometrische zoekvraag worden in de relevante geometrische context geplaatst

In het geval van een globale zoekvraag `/api/v1/_zoek` is het noodzakelijk om de
resultaten in een relevante context te plaatsen, omdat resultaten van
verschillende collecties door elkaar teruggegeven worden. Met de property `type`
kan in enkelvoud de naam van de collectie waar het resultaat toe behoort
uitgedrukt worden.

### API-39: Het voorkeur-coördinatenstelsels (CRS) is ETRS89, maar het CRS wordt niet impliciet geselecteerd

Algemeen gebruik van het Europese ETRS89 coördinatenstelsel (CRS) heeft sterk de
voorkeur, maar dit wordt niet door API's afgedwongen als de "default". Derhalve
moet het te gebruiken CRS in elke aanroep expliciet worden opgegeven.

### API-40: Het coördinatenstelsel (CRS) van de vraag en het antwoord wordt in de header meegestuurd

Het gekozen coördinatenstelsel (CRS) voor zowel de vraag als het antwoord worden
meegestuurd als onderdeel van de request-header en de response-header. Bij het
ontbreken van deze headers wordt `412 Precondition Failed` teruggegeven. Hiermee
wordt voorkomen dat per abuis met het verkeerde CRS wordt gewerkt

### API-41: Het gewenste coördinatenstelsel wordt op basis van content negotiation overeengekomen

Het gewenste CRS voor de geometrie in het antwoord (response body) wordt
aangeduid met een `Accept-Crs` header. Als het gewenste CRS niet geleverd kan
worden zal er een `406 Not Acceptable` worden teruggegeven.

### API-42: Paginering wordt gerealiseerd op basis van JSON+HAL bij media type: application/hal+json

Aan de representatie worden twee gereserveerde velden `_links` (verplicht) en
`_embedded` (optioneel) toegevoegd. Daarnaast wordt paginerings-metadata als
HTTP headers meegegeven.

### API-43: Waar relevant wordt caching toegepast

Voor caching wordt gebruikt van de HTTP standaard caching mechanismes door het
toevoegen van een aantal extra uitgaande HTTP headers (`ETag` of
`Last-Modified`) en functionaliteit om te bepalen of een aantal specifieke
inkomende HTTP headers (`If-None-Match` of `If-Modified-Since`).

### API-44: Beperken van het aantal verzoeken per tijdsperiode wordt aangeraden

Aangeraden worden om het aantal verzoeken per tijdsperiode te beperken om
overbelasting van servers te voorkomen om een hoog serviceniveau te garanderen.

### API-45: Begrenzingen worden proactief gemeld

Gebruik `X-Rate-Limit` headers om limieten aan de gebruiker te communiceren en
HTTP statuscode `429 Too Many Requests` als de limieten overschreden worden.

### API-46: Foutafhandeling is gestandaardiseerd

API's ondersteunen de gestandaardiseerde foutmeldingen van de HTTP-statuscodes
400 en 500 reeks inclusief een verwerkbare JSON representatie in lijn met
RFC7807.

### API-47: API's passen de verplichte HTTP-statuscodes toe

De volgende http-statuscodes worden minimaal toegepast: 200, 201, 204, 304, 400,
401, 403, 405, 406, 409, 410, 415, 422, 429, 500, 503.

### API-48: API-endpoints mogen géén trailing slashes bevatten

URIs die gebruikt worden om collecties van resources of individuele resources op
te vragen eindigen nooit met een trailing slash. Een resource leeft op één
plek/path. Resource paths eindigen zonder slash.

### API-49: Gebruik "publieke" API-Key

In JavaScript dient alleen gebruik te worden gemaakt van een zogenaamde
"restricted" API-key. Dit is API-key die gekoppeld is aan specifieke kenmerken
van de aanroeper (web-app, mobile-app), waaronder een clientId en/of
verwijzer-URL.

### API-50: Controleer toegang en gebruik CORS-header

Controleer eerst het domein van de inkomende aanvraag en genereer de
response-header afhankelijk van of dit domein verzoeken mag verzenden of niet
(whitelist). In dat geval wordt alleen dit specifieke domein aan de
response-header `Access-Control-Allow-Origin` toegevoegd.

\*\*LET OP: Het is technisch mogelijk om in de Access-Control-Allow-Origin
responsheader een wildcard ("\*") terug geven en zo alle bronnen toe te staan.
Dit is een onveilige praktijk!\*\*

### API-51: OAS via basis-URI beschikbaar in JSON-formaat

Om te zorgen dat de actuele documentatie altijd publiekelijk toegankelijk is, is
het advies om de inhoud van de Open API Specification op het "root endpoint" van
de API beschikbaar te maken in JSON-formaat:

`https://service.omgevingswet.overheid.nl/publiek/catalogus/api/raadplegen/v1`

Maakt de OAS behorend bij v1 van deze API beschikbaar.

Hiermee wordt een unieke plek (die altijd synchroon loopt met de features die de
API biedt) gekoppeld aan de actuele documentatie.

## Architectuur

>   **Let op:** Dit is het hoofdstuk Architectuur in wording.  
>   De onderwerpen in het hoofdstuk staan nog ter discussie, en ze staan er nog
>   niet met de bedoeling om normatief  
>   en/of best-procatice te zijn.

>   *Dit hoofdstuk gaat in op de vraag: Hoe kan je je applicatie landschap
>   inrichten zodat je APIs kan aanbieden. Welke componenten zijn hiervoor
>   nodig. Hoe ga je om met opschalen, beschikbaarheid. Wat zijn afwegingen om
>   beveiliging al dan niet toe te passen.*

*Website:*

*De impact van API's op de architectuur van alle organisaties die hier serieus
mee aan de slag gaan is groot, net als de behoefte aan kennis op dit gebied. De
werkgroep Architectuur buigt zich over vragen rond de volgende onderwerpen: de
impact van het gebruik van API’s op de gehele informatievoorziening van een
organisatie, de kennisopbouw over benodigde architectuur in
overheidsorganisaties en het overzicht en sturing van gewenste beweging naar het
gebruiken van data in plaats van het bezitten van data.*

Sec:

\-beschrijving van de impact van (gebruiken van ) API’s op de eigen
informatievoorziening (vanuit bestaande use-cases)

\-Werken aan kennis opbouw over de benodigde architectuur voor het kunnen werken
met API’s

\-sturing en richting geven aan de noodzakelijke beweging van data ‘hebben’ naar
data ‘gebruiken’ bij het werken met API’s.

1.  De GitHub tekst over REST API architectuur wordt een tekst over
    architectuurthema’s (beveiliging, logging, semantiek, doelbinding etc) om
    organisaties en mensen die zich aan het informeren zijn over REST API’s ’s
    om hen te helpen bij beslissingsondersteuning

2.  De architectuur tekst in GitHub wordt nog **geen** referentie architectuur:
    daarvoor zijn API , methodieken, technieken, standaarden etc op dit moment
    in 2018 nog teveel in ontwikkeling en onvoldoende stabiel

3.  Daar waar mogelijk meer stabiele architectuur elementen worden voorzien,
    kunnen deze van bv principes, begrippen, bouwstenen, standaarden, wettelijke
    grondslagen, beleid en kaders voorzien. Dit is een eerste stap richting in
    een nog uit te werken referentie architectuur

4.  Hoofdmoot van het stuk zal zijn om stapsgewijs voor te sorteren op die
    elementen, methodieken en technieken die mogelijk stabiel genoeg **kunnen**
    gaan worden

5.  Bijvoorbeeld rond NLX: <https://nlx.io/about/>

6.  Daarmee geeft de werkgroep Architectuur API inrichting van de NORA
    Applicatielaag vanuit API persperctief:
    <https://www.noraonline.nl/wiki/Applicatielaag>

>   De werkgroep leden hebben in november 2018 gekozen voor de volgende
>   thematische indeling:

###  Beveiliging

###  Autorisatie

###  Semantiek

>   Noemen: ontwikkelingen op het gebied van Linked (open) Data, stelsel van
>   overheidsgegevens en link: <https://www.noraonline.nl/wiki/Semantiek>

###  Metadata

>   ?Noemen: Toepassingsprofiel Metadata Rijk, TMLO? Relatie leggen.
>   <https://www.noraonline.nl/wiki/Metagegevens_Duurzame_Toegankelijkheid>

###  Interoperabiliteit

>   ?Benadrukken voordelen voor interoperabiliteit.
>   <https://www.noraonline.nl/wiki/Interoperabiliteit>

###  Patronen

Voor het notificeren en opvragen van gegevens worden patronen gevolgd. Deze
patronen worden hieronder visueel weergegeven. Merk op dat het patroon van
opvragen ook terugkomt bij notificeren, dit is een resultaat van de
ontwikkeling: "Van kopiëren van data naar bevragen bij de bron" (zie hoofstuk
2.7).

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<img src='media/visualisatie%20patronen.png' width="400" />
<figcaption>Visualisatie patronen (gelaagdheid tussen real life, proces en data).</figcaption>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Toelichting bij de visualisatie: Real-life gebeurtenissen liggen ten grondslag
aan alles wat in systemen processen triggert. Indien een gebeurtenis wordt
gevolgd door een afnemer (via een geplaatste afnemerindicatie) ontvangt de
afnemer hierover notificaties. Op basis van ontvangen notificaties bepaalt een
afnemer of de gebeurtenis voor hem interessant is. Indien de notificatie
voldoende interessant is kan het leiden tot het opstarten van een vraag/antwoord
verwerking. De afnemer stopt met het stellen van vragen als er geen verdere
informatiebehoefte is. Merk op dat het verkrijgen van data enkel via
vraag/antwoord plaatsvindt.

#### Notificeren

Voor Basisregistraties geldt: Afnemerindicaties worden geplaatst op niveau van
gebeurtenis en verzorgingsgebied. Hierdoor ontvangt de afnemer de gebeurtenissen
van alle resources in dat geografische gebied. Het ontvangen van deze
gebeurtenissen kan voor de afnemer een trigger zijn voor het opvragen van
gegevens.

BRP (en eventueel ook HR) vormt een uitzondering, hiervoor geldt dat
afnemerindicaties op persoonsniveau i.c.m. gebeurtenis worden geplaatst (het
verzorgingsgebied is niet van belang en is dus gelijk aan heel Nederland).
Hieronder wordt dit visueel weergegeven.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<img src='media/visualisatie%20notificeren.png' width="500" />
<figcaption>Visualisatie notificeren (de wijze van notificeren en plaatsen van afnemerindicaties)</figcaption>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Toelichting op de voorbeelden: - BAG: een afnemer volgt één of meerdere
BAG-gebeurtenissen uit een bepaald verzorgingsgebied (zoals hierboven gemeente
Dordrecht). Een voorbeeld van een BAG-gebeurtenis is een wijziging gebruiksdoel
(zie 4.2 voor de lijst met gebeurtenissen voor de BAG). Een notificatie wordt
verzonden naar de afnemer indien de combinatie gebeurtenis/verzorgingsgebied
optreedt en gevolgd wordt door de afnemer. - BRP: een afnemer volgt één of
meerdere BRP-gebeurtenissen van een bepaald ingeschreven natuurlijk persoon. Een
voorbeeld van een BRP-gebeurtenis is een wijziging adresgegevens (zie 4.1 voor
de lijst met gebeurtenissen voor de BRP). Een notificatie wordt verzonden naar
de afnemer indien de combinatie persoon/gebeurtenis optreedt en gevolgd wordt
door de afnemer.

De bovenstaande patronen worden bekrachtigd door onderstaande principes. De
hieronder benoemde principes kunnen gezien worden als functionele
inrichtingsprincipes voor API’s (specifiek opgesteld t.a.v. Basis- en
Kernregistraties). Op basis van deze functionele principes (als toevoeging op de
technische design/ontwerprules uit hoofdstuk 4) kunnen de API’s nauwkeurig
worden gedefinieerd. Bij wijziging van de principes geldt dat dit impact heeft
op alle API’s.

| Principe 1  | Een API in de categorie Notificeren faciliteert het melden van gebeurtenissen aan een afnemer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Toelichting | Een notificatie is een melding van een gebeurtenis die een procestrigger vormt. Een gebeurtenis kan een wijziging in de gegevens van de bronhouder tot gevolg hebben en daarom kan het zinvol zijn voor een afnemer hierover genotificeerd te worden. Gebeurtenissen worden te allen tijde door bronhouder gecommuniceerd richting een broker (bijvoorbeeld ESB/API-Gateway) zo kort mogelijk na het optreden van de gebeurtenis, ongeacht of er afnemers zijn. Indien er een afnemer is brengt de notificatie de afnemer op de hoogte van de gebeurtenis (een gegarandeerde aflevering is daarbij de verantwoordelijkheid van de broker). Dit triggert bij de afnemer een proces: De afnemer is aan zet om te oordelen wat de passende vervolgacties zijn bij het ontvangen van de notificatie.Omdat een notificatie zelf geen content bevat (wel identificerende functionele gegevens) is er geen historie aanwezig in notificaties.Notificaties worden toegezonden aan afnemers die middels afnemerindicaties hebben aangegeven notificaties te willen ontvangen. Het kenbaar maken en het beëindigen van deze wens vindt plaats middels een API binnen dit deze categorie. |
| Ratio       | \- De notificatie van een gebeurtenis is niet hetzelfde als de uitwisseling van gegevens die de gebeurtenis beschrijven.- De gegevens die de gebeurtenis beschrijven (de content) zijn beschikbaar via API’s in de categorie Opvragen.Voorbeeld gebeurtenis: Persoon met BSN 123456789 is overleden.- Een afnemer bepaalt de interesse in notificaties (via het plaatsen van afnemerindicaties). - De afnemer bepaalt de relevantie van een individuele notificatie. Dit is intelligentie binnen de functionaliteit van de afnemer. Het ontvangen van een gebeurtenissen kan voor de afnemer een trigger zijn voor het initiëren van een bedrijfsproces (en daarmee het opvragen van gegevens).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Implicaties | \- De afnemer is verantwoordelijk voor het afnemen van gegevens.--\> Door de afnemer middels een notificatie slechts te informeren over een gebeurtenis bepaalt de afnemer zelf of en hoe de gebeurtenis wordt opgevolgd.--\> Indien de afnemer na ontvangst/ van een notificatie gegevens wenst te ontvangen kan de afnemer – na bepaald te hebben welke gegevens – deze middels API’s uit categorie Opvragen verkrijgen. --\> Afnemers die enkel op basis van interne triggers acteren hebben geen behoefte aan notificaties m.b.t. wijzigingen op bestaande objecten. De actuele gegevens van deze objecten worden namelijk opgehaald indien een intern proces start. --\> De verantwoordelijkheid van de afnemer omvat de doelbinding. De afnemer is verantwoordelijk de opvolging van een gebeurtenis uit te voeren binnen zijn kader van doelbinding. - De afnemer volgt een vast patroon bij het notificeren (zie figuur 2 in hoofdstuk 3 voor de visuele weergave van dat patroon).                                                                                                                                                                                    |
| Principe 2  | Afnemer bepaalt relevantie van een notificatie.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Toelichting | Afnemers die via API Notificeren gegevens willen ontvangen nemen op het niveau van een resource (dus niet instelbaar op een specifiek data-object) in de breedte van het geografische verzorgingsgebied gebeurtenissen af.Uitzondering:Voor de BRP (en eventuele registraties of data waar privacy op rust) is hier gelet op de privacywetgeving een uitzondering op. Voor het afnemen van personen uit de BRP dient per persoon een specifieke afnemerindicatie geplaatst te zijn door de afnemer, in lijn met zijn doelbinding. Geadviseerd wordt afnemerindicaties te plaatsen door het uitwisselen van het 'BSN' en niet door het uitwisselen van een technische sleutel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Ratio       | \- De complexiteit van het binnengemeentelijk distribueren van gegevens uit basisregistraties wordt enorm vereenvoudigd door afnemers enkel te notificeren over gebeurtenissen.- De afnemer bepaalt de relevantie van de notificaties in het licht van zijn eigen bedrijfsprocessen, al deze wijzigen kan de afnemer zonder tussenkomst cq. zonder afhankelijkheid van een bronhouder zijn verwerkingsroutine hierop aanpassen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Implicaties | \- Bronhouder communiceert gebeurtenissen (vergelijk een radio-uitzending).- Het is niet aan de bronhouder van gegevens om te bepalen wie geïnteresseerd is in gegevens/gebeurtenissen. - Afnemers zijn bevoegd (als doelbinding aansluit) te luisteren naar de gebeurtenissen, maar zijn het niet verplicht. - De afnemer abonneert zich bij de bronhouder op alle of juist specifieke gebeurtenissen behorend bij een resource (zie visualisatie patronen).- Een uitzondering vormt het volgen van gebeurtenissen op persoonsgegevens (of objecten die persoonsgegevens bevatten). Afnemerindicaties worden hierbij wel op persoonsniveau geplaatst.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Principe 3  | Notificaties zijn gebaseerd op de informatiebehoefte van bedrijfsprocessen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Toelichting | Afhankelijk van de informatiebehoefte bij afnemers voor het triggeren van bedrijfsprocessen worden notificaties onderkend.In grote lijnen komt dit overeen met de gebeurtenissen die in de ontwerpdocumenten of berichtencatalogi van de basisregistraties zijn onderkend.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Ratio       | De overheid stuurt op gebeurtenis-gericht beschikbaar stellen van basisgegevens. De bronhouder is weliswaar de meest deskundige partij voor het bepalen van haar gebeurtenissen, echter weet de afnemer het beste in welke gebeurtenissen hij geïnteresseerd is. Aangezien bepaalde gebeurtenissen bij de bronhouder voor geen enkele afnemer interessant zullen zijn zal het aantal gebeurtenissen waarover genotificeerd wordt naar afnemers altijd kleiner zijn dan het daadwerkelijke aantal gebeurtenissen. Met deze regel wordt die deskundigheid maximaal benut. Bij wijzigingen in de gebeurtenissen is tevens geborgd dat het gegevensverkeer dit volgt.Niet alle gebeurtenissen uit de catalogi van de basisregistraties zijn echter voor binnengemeentelijk gebruik interessant. Inventariseer welke gebeurtenissen niet relevant zijn en neem die niet op in de te realiseren API’s.                                                                                                                                                                                                                                                                               |
| Implicaties | De definitie van API’s in de categorie Notificeren is bepaald door de behoefte van de afnemers in combinatie met de gebeurteniscatalogi van bronhouders.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Opvragen

| Principe 4  | Een API in de categorie Opvragen faciliteert het uitwisselen van gegevens op basis van een vraag-antwoord constructie.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Toelichting | De categorie Opvragen wordt gebruikt voor het op afroep verkrijgen van gegevens uit een bron via synchrone vraag-/antwoordcalls. De vragen die in RSGB-bevragingen zijn onderkend vormen de basis, deze worden één-op-één vertaald naar API’s, Voor de API's die daarin niet beschreven worden vormt het RSGB het kader voor het opstellen van API's. Voor kernregistraties (niet beschreven in het RSGB) zal een lokaal informatiemodel de basis vormen. Naargelang de informatiebehoefte van de afnemer kunnen API’s in de categorie Opvragen worden ingericht voor het verstrekken van actuele gegevens en/of materiële historie en/of formele historie.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Ratio       | \- De clusters Opvragen voor de verschillende basisregistraties zijn waar mogelijk gebaseerd op RSGB-bevragingen: deze bevragingen zijn opgesteld vanuit het perspectief van de afnemer, door deze afbakening over te nemen sluiten de API’s nauw aan op het perspectief van de afnemer.- In informatiemodellen zit de mogelijkheid om historie vast te leggen op specifieke gegevens. Dit wordt zeker niet door iedere afnemer veelvuldig gebruikt en de materie kan complex zijn, maar er zouden wel API’s in de clusters Opvragen moeten zijn die de historie kunnen opvragen indien die behoefte er is (dit geldt voor zowel formele als materiële historie).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Implicaties | \- De definitie van API’s in voor de clusters Opvragen is bepaald in de standaard RSGB-bevragen.- Index API's worden ondersteund om fuzzy search mogelijk te maken.- De afnemer (en ook uitsluitend de afnemer) kent de doelbinding van af te nemen gegevens.- Afnemers zijn verantwoordelijk voor, en deskundig in het feitelijk afnemen van gegevens uit basis- of kernregistraties, zij kennen de condities waaronder zij gegevens wel of niet willen afnemen.- Gegevensuitwisseling staat primair ten dienste van de afnemer maar volgt de mogelijkheden en beperkingen van de bron.- Een afnemer neemt gegevens af bij de bron. De basisregistratie worden in deze als bron gezien en niet bijvoorbeeld de afzonderlijke burgerzakenapplicaties.- Opvragen vindt per definitie synchroon plaats.- Door direct afnemen bij de bron te faciliteren is het afschaffen van lokale gegevensmagazijn mogelijk. Dit reduceert de beheerskosten aanzienlijk.- Door direct afnemen bij de bron te faciliteren is het afschaffen vertaalsoftware van landelijke naar gemeentelijke berichtenstandaarden mogelijk (in technische termen: transformaties op ESB-niveau, als voorbeeld hoe momenteel wordt getransformeerd tussen StUF-HR en StUF-BG). |
| Principe 5  | Een vraag/antwoord API ondersteunt het opvragen van een concreet afgebakende set gegevens.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Toelichting | Elke response van de categorie Opvragen omvat maximaal (afhankelijk van autorisatie, zie design decision BRP API) de attributen, relaties en de identificerende gegevens van de gerelateerde, maar niet de gerelateerde resources in zijn geheel. Het verkrijgen van de gerelateerde resources vereist het stellen van een nieuwe vraag (nieuwe API-call uit categorie Opvragen). Het gebruik van expand = true is niet toegestaan.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Ratio       | \- Opvragen van gerelateerde gegevens wordt geacht te worden gedaan door het initiëren van een aanvullende vraag-antwoordcall, of indien dit voordeel oplevert gerelateerden direct op te halen via een ‘expand’ in de call op te nemen.- Relaties uit dezelfde bron kunnen embed worden. Zie design decision BRP API. - Voor het gebruik van de API is het gebruiken van expand=true om alle relaties embed te krijgen niet toegestaan. Het embedden van gerelateerde resources moet bewust worden gebruikt. Zie design decision BRP API. - Relaties kunnen maximaal één niveau diep worden embed. Zie design decision BRP API. - Autorisatie wordt gerealiseerd in een specifiek daarvoor ingerichten autorisatie-mechanisme. Vaak wordt dit in een tussenlaag (broker) gerealiseerd. De bron beschikt niet over middelen om applicatie of zelfs gebruikers-specifiek autorisatie in te richten. Wel kan een bron dit op organisatie-niveau.                                                                                                                                                                                                                                                                                                 |
| Implicaties | \- De afnemer is verantwoordelijk voor het afnemen van gegevens.- De afnemer volgt een vast patroon bij het opvragen van gegevens (zie figuur 2 in hoofdstuk 3 voor de visuele weergave van dat patroon).- De provider bepaalt het maximum aantal responses en niet de consumer. De API geeft een foutmelding wanneer er teveel resultaten zijn op de vraag.- De afnemer kent de doelbinding van het verzoek en stuurt de aanduiding van de doelbinding mee in de call.- Met parameter ‘fields’ in de call is het mogelijk om op attribuutniveau aan te geven welke gegevens gewenst zijn in de response. Het is niet verplicht een fields-parameter op te geven. - Voor sommige API’s is het verplicht een combinatie van zoek parameters te gebruiken (zo mag de BRP bijvoorbeeld niet enkel op huisnummer bevraagd worden).- Er vindt een validatie plaats op zoek parameters. Voor het gebruik van invalide parameters wordt een foutmelding teruggegeven aan de consumer.- Een gemeente draagt zelf zorg voor een fijnmazig autorisatie-mechanisme om binnen de organisatie onderscheid te kunnen maken in autorisatie per applicatie en of gebruiker.                                                                                    |

###  Componenten

>   Hamvraag: zijn REST API’s bouwstenen (architectuur component)? Behandelen:
>   op welke wijze API’s eenduidig zijn te beschrijven en vindbaar te maken
>   zijn. Wat kunnen we (concreet) van hieruit aan richtinggevende normen/
>   regels voor API Register’s meegeven? Wie hebben er een use case rond een API
>   register?

###  Begrippen

>   Noemen/ overnemen begrippen uit document BFS over API’s. Proberen een steeds
>   meer gestandaardiseerd begrippenkader voor REST API’s neer te zetten

###  Standaarden

>   Updaten en overnemen lijst met API standaarden uit het document BFS
>   (Lancelot Schellevis)

###  Use cases

>   Iig: use case Drechtsteden. Overige? Let wel: use cases zijn in dit stadium
>   het uitgangspunt

### Architectuur bijlagen

[Werkgroep Architectuur\\Werkgroep_API_Architectuur Draft
D[29148].pdf](Werkgroep%20Architectuur/Werkgroep_API_Architectuur%20Draft%20D%5b29148%5d.pdf)
