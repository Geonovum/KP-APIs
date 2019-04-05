
# Bijlagen


## <a name="api-principes"></a>API Principes


### <a name="api-01"></a>API-01: API's garanderen dat operaties "Veilig" en/of "Idempotent" zijn

Operaties van een API zijn gegarandeerd "Veilig" en/of "Idempotent" als dat zo
is bepaald.

### <a name="api-02"></a>API-02: Toestandsinformatie wordt nooit op de server opgeslagen

De client-toestand wordt volledig bijgehouden door de client zelf.

### <a name="api-03"></a>API-03: Alleen standaard HTTP-operaties worden toegepast

Een RESTful API is een application programming interface die de standaard
HTTP-operaties GET, PUT, POST, PATCH en DELETE gebruikt.

### <a name="api-04"></a>API-04: Definitie van het koppelvlak is in het Nederlands tenzij er sprake is van een officieel Engelstalig begrippenkader

Resources en de achterliggende entiteiten, velden, etc. (het informatiemodel en
het externe koppelvlak) worden in het Nederlands gedefinieerd. Engels is
toegestaan indien er sprake is van een officieel Engelstalig begrippenkader.

### <a name="api-05"></a>API-05: Resource namen zijn zelfstandige naamwoorden in het meervoud

Namen van resources zijn zelfstandige naamwoorden en altijd in het meervoud,
zoals aanvragen, activiteiten, vergunningen. Ook als het om het een enkel
resource betreft.

### <a name="api-06"></a>API-06: Relaties van geneste resources worden bij voorkeur binnen het eindpunt gecreëerd

Als een relatie alleen kan bestaan binnen een andere resource (geneste
resource), wordt de relatie bij voorkeur binnen het eindpunt gecreëerd. De
afhankelijke resource heeft in dat geval geen eigen eindpunt

### <a name="api-09"></a>API-09: Indien representatie op maat wordt ondersteund, dan conform dit principe.

Het is mogelijk om een door komma's gescheiden lijst van veldennamen op te geven
met de query-parameter fields om een representatie op maat te krijgen. Als
niet-bestaande veldnamen worden meegegeven wordt een 400 Bad Request
teruggegeven.

### <a name="api-10"></a>API-10: Acties die niet passen in het CRUD model worden een sub-resource

"Acties die niet passen in het CRUD model worden op de volgende manieren
opgelost:

-   Behandel een actie als een sub-resource.

-   Alleen in uitzonderlijke gevallen wordt een actie met een eigen eindpunt
    opgelost."

### <a name="api-11"></a>API-11: De verbinding is ALTIJD versleuteld met minimaal TLS V1.2

De verbinding is ALTIJD versleuteld op basis van minimaal TLS V1.2. Geen
uitzonderingen, dus overal en altijd. In het geval van toegangsbeperking of
doelbinding wordt tweezijdig TLS toegepast. Doordat de verbinding altijd is
versleuteld maakt het authenticatiemechanisme eenvoudiger. Hierdoor wordt het
mogelijk om eenvoudige toegangstokens te gebruiken in plaats van toegangstokens
met encryptie.

### <a name="api-12"></a>API-12: API's zijn bij voorkeur alleen bruikbaar met behulp van een API-key

Voor alle API's wordt bij voorkeur minimaal een registratie inclusief acceptatie
van de fair use voorwaarden vereist. Op basis hiervan zal dan een API-key wordt
uitgegeven.

### <a name="api-13"></a>API-13: Tokens worden niet gebruikt in query parameters

Er is een inherent beveiligingsprobleem bij het gebruik van een query parameter
voor tokens omdat de meeste webservers queryparameters in de server logs
wegschrijven.

### <a name="api-14"></a>API-14: Autorisatie is waar nodig gebaseerd op OAuth 2.0

Een REST API mag geen state hebben. Elk verzoek moet daarom zijn voorzien van
een token. OAuth 2.0 is hiervoor de voorgeschreven standaard, hoofstuk
Beveiliging bevat meer informatie.

### <a name="api-15"></a>API-15: Authenticatie voor API's met toegangsbeperking of doelbinding is gebaseerd op PKIoverheid

In het geval van API's met toegangsbeperking of doelbinding zal er aanvullend
sprake zijn van authenticatie op basis PKIoverheid certificaten en tweezijdig
TLS.

### <a name="api-16"></a>API-16: Documentatie is gebaseerd op OAS 3.0 of hoger

Specificaties (documentatie) is beschikbaar als Open API Specification (OAS)
V3.0 of hoger.

### <a name="api-17"></a>API-17: Documentatie is in het Nederlands tenzij er sprake is van bestaande documentatie in het Engels of er sprake is van een officieel Engelstalig begrippenkader

De voertaal voor de API's is Nederlands. Het is wel toegestaan om te verwijzen
naar bestaande documentatie is het Engels en als er sprake is van een officieel
Engelstalig begrippenkader.

### <a name="api-18"></a>API-18: Wijzigingen worden gepubliceerd met een uitfaseringschema

Koppelvlak wijzigingen worden met bijbehorende planning op een publiek
toegankelijke blog als changelog bekendgemaakt en via een mailinglijst.

### <a name="api-19"></a>API-19: De overgangsperiode bij een nieuwe API versie is maximaal 1 jaar

Oude en nieuwe versies (max. 3) van een API worden voor een beperkte
overgangsperiode (1 jaar) naast elkaar aangeboden.

### <a name="api-20"></a>API-20: Alleen het major versienummer is onderdeel van de URI

In de URI wordt alleen het major versienummer opgenomen. Minor versienummer en
patch versienummer worden in de header van het bericht zelf opgenomen. Het
uitgangspunt dat hierbij wordt gehanteerd is dat minor versies en patches geen
impact hebben op bestaande code, maar major versies wel.

### <a name="api-21"></a>API-21 Gebruikers van een ‘deprecated' API worden actief gewaarschuwd

Met een `Warning` response-header in alle responses van de oude API's worden
gebruikers gewaarschuwd voor de aanstaande uitfasering.

### <a name="api-22"></a>API-22: JSON first - API's ontvangen en versturen JSON

API's ontvangen en versturen JSON.

### <a name="api-23"></a>API-23: API's zijn optioneel voorzien van een JSON Schema

API's ondersteunen JSON Schema (<http://json-schema.org),> zodat validatie
mogelijk (optioneel) is en vereenvoudigd wordt.

### <a name="api-24"></a>API-24: Content negotiation wordt volledig ondersteund

Andere representaties zoals XML en RDF worden naast JSON via het standaard HTTP
content negotiation mechanisme ondersteund. Als het gewenste formaat niet
geleverd kan worden zal er een 406 Not Acceptable worden teruggegeven.

### <a name="api-25"></a>API-25: API's controleren dat de Content-Type header is ingesteld

Er wordt gecontroleerd of het `Content-Type` header is ingesteld op
`application/json` of andere ondersteunde content types, anders wordt HTTP
statuscode `415 Unsupported Media Type` geretourneerd.

### <a name="api-26"></a>API-26: Woorden in veldnamen zijn gedefinieerd in `camelCase`

Een veldnaam begint met kleine letters (eerste woord) en ieder opvolgend woord
begint met een hoofdletter.

### <a name="api-27"></a>API-27: Pretty print is standaard uitgeschakeld

Het uitgangspunt is dat REST clients en browsers (al dan niet met extensies)
JSON netjes geformatteerd kunnen weergeven.

### <a name="api-28"></a>API-28: Een JSON-response heeft geen omhullende envelop

Er worden standaard geen enveloppen toegepast.

### <a name="api-29"></a>API-29: API's ondersteunen JSON gecodeerde POST, PUT en PATCH payloads

API's ondersteunen minimaal JSON gecodeerde `POST`, `PUT` en `PATCH` payloads.
Encoded form data (`application/x-www-form-urlencoded`) wordt niet ondersteund.

### <a name="api-30"></a>API-30: Filter query-parameters zijn gelijk aan de velden waarop gefilterd kan worden

Gebruik unieke query-parameters die gelijk zijn aan de velden waarop gefilterd
kan worden.

### <a name="api-31"></a>API-31: Voor sorteren wordt de query-parameter sorteer gebruikt

De generieke query-parameter `sorteer` wordt gebruikt voor het specificeren van
door komma's gescheiden velden waarop gesorteerd moet worden. Door een minteken
(`-`) voor de veldnaam te zetten wordt het veld in aflopende sorteervolgorde
gesorteerd.

### <a name="api-32"></a>API-32: Voor vrije-tekst zoeken wordt een query-parameter zoek gebruikt

API's die vrije-tekst zoeken ondersteunen doen dit middels de query-parameter
`zoek`.

### <a name="api-33"></a>API-33: API's die vrije-tekst zoeken ondersteunen kunnen overweg met twee soorten wildcard karakters: `*` en `?`

API's die vrije-tekst zoeken ondersteunen kunnen overweg met twee soorten
wildcard karakters:

-   `*` Komt overeen met nul of meer (niet-spatie) karakters

-   `?` Komt precies overeen met één (niet-spatie) karakter

### <a name="api-34"></a>API-34: GEO API's ontvangen en versturen bij voorkeur GeoJSON

Voor GEO API's wordt bij voorkeur de standaard GeoJSON
([RFC-7946](https://tools.ietf.org/html/rfc7946)) gebruikt.

### <a name="api-35"></a>API-35: GeoJSON is onderdeel van de embedded resource in de JSON response

Als een JSON (`application/json`) response een geometrie bevat, dan wordt deze
geometrie op dezelfde manier teruggegeven als het `geometry` object van GeoJSON
([RFC-7946](https://tools.ietf.org/html/rfc7946)):

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
{
  "type": "Point",
  "coordinates": [125.6, 10.1]
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### <a name="api-36"></a>API-36: Voor GEO queries is een POST end-point beschikbaar

Geometrische queries worden in een `POST` naar een apart endpoint verzonden.

### <a name="api-37"></a>API-37: POST end-points zijn uitbreidbaar voor gecombineerde vragen

De geometrie is uitbreidbaar met andere properties voor gecombineerde queries.

### <a name="api-38"></a>API-38: Resultaten van een globale geometrische zoekvraag worden in de relevante geometrische context geplaatst

In het geval van een globale zoekvraag `/api/v1/_zoek` is het noodzakelijk om de
resultaten in een relevante context te plaatsen, omdat resultaten van
verschillende collecties door elkaar teruggegeven worden. Met de property `type`
kan in enkelvoud de naam van de collectie waar het resultaat toe behoort
uitgedrukt worden.

### <a name="api-39"></a>API-39: Het voorkeur-coördinatenstelsels (CRS) is ETRS89, maar het CRS wordt niet impliciet geselecteerd

Algemeen gebruik van het Europese ETRS89 coördinatenstelsel (CRS) heeft sterk de
voorkeur, maar dit wordt niet door API's afgedwongen als de "default". Derhalve
moet het te gebruiken CRS in elke aanroep expliciet worden opgegeven.

### <a name="api-40"></a>API-40: Het coördinatenstelsel (CRS) van de vraag en het antwoord wordt in de header meegestuurd

Het gekozen coördinatenstelsel (CRS) voor zowel de vraag als het antwoord worden
meegestuurd als onderdeel van de request-header en de response-header. Bij het
ontbreken van deze headers wordt `412 Precondition Failed` teruggegeven. Hiermee
wordt voorkomen dat per abuis met het verkeerde CRS wordt gewerkt

### <a name="api-41"></a>API-41: Het gewenste coördinatenstelsel wordt op basis van content negotiation overeengekomen

Het gewenste CRS voor de geometrie in het antwoord (response body) wordt
aangeduid met een `Accept-Crs` header. Als het gewenste CRS niet geleverd kan
worden zal er een `406 Not Acceptable` worden teruggegeven.

### <a name="api-42"></a>API-42: Paginering wordt gerealiseerd op basis van JSON+HAL bij media type: application/hal+json

Aan de representatie worden twee gereserveerde velden `_links` (verplicht) en
`_embedded` (optioneel) toegevoegd. Daarnaast wordt paginerings-metadata als
HTTP headers meegegeven.

### <a name="api-43"></a>API-43: Waar relevant wordt caching toegepast

Voor caching wordt gebruikt van de HTTP standaard caching mechanismes door het
toevoegen van een aantal extra uitgaande HTTP headers (`ETag` of
`Last-Modified`) en functionaliteit om te bepalen of een aantal specifieke
inkomende HTTP headers (`If-None-Match` of `If-Modified-Since`).

### <a name="api-44"></a>API-44: Beperken van het aantal verzoeken per tijdsperiode wordt aangeraden

Aangeraden worden om het aantal verzoeken per tijdsperiode te beperken om
overbelasting van servers te voorkomen om een hoog serviceniveau te garanderen.

### <a name="api-45"></a>API-45: Begrenzingen worden proactief gemeld

Gebruik `X-Rate-Limit` headers om limieten aan de gebruiker te communiceren en
HTTP statuscode `429 Too Many Requests` als de limieten overschreden worden.

### <a name="api-46"></a>API-46: Foutafhandeling is gestandaardiseerd

API's ondersteunen de gestandaardiseerde foutmeldingen van de HTTP-statuscodes
400 en 500 reeks inclusief een verwerkbare JSON representatie in lijn met
RFC7807.

### <a name="api-47"></a>API-47: API's passen de verplichte HTTP-statuscodes toe

De volgende http-statuscodes worden minimaal toegepast: 200, 201, 204, 304, 400,
401, 403, 405, 406, 409, 410, 415, 422, 429, 500, 503.

### <a name="api-48"></a>API-48: API-endpoints mogen géén trailing slashes bevatten

URIs die gebruikt worden om collecties van resources of individuele resources op
te vragen eindigen nooit met een trailing slash. Een resource leeft op één
plek/path. Resource paths eindigen zonder slash.

### <a name="api-49"></a>API-49: Gebruik "publieke" API-Key

In JavaScript dient alleen gebruik te worden gemaakt van een zogenaamde
"restricted" API-key. Dit is API-key die gekoppeld is aan specifieke kenmerken
van de aanroeper (web-app, mobile-app), waaronder een clientId en/of
verwijzer-URL.

### <a name="api-50"></a>API-50: Controleer toegang en gebruik CORS-header

Controleer eerst het domein van de inkomende aanvraag en genereer de
response-header afhankelijk van of dit domein verzoeken mag verzenden of niet
(whitelist). In dat geval wordt alleen dit specifieke domein aan de
response-header `Access-Control-Allow-Origin` toegevoegd.

\*\*LET OP: Het is technisch mogelijk om in de Access-Control-Allow-Origin
responsheader een wildcard ("\*") terug geven en zo alle bronnen toe te staan.
Dit is een onveilige praktijk!\*\*

### <a name="api-51"></a>API-51: OAS via basis-URI beschikbaar in JSON-formaat

Om te zorgen dat de actuele documentatie altijd publiekelijk toegankelijk is, is
het advies om de inhoud van de Open API Specification op het "root endpoint" van
de API beschikbaar te maken in JSON-formaat:

`https://service.omgevingswet.overheid.nl/publiek/catalogus/api/raadplegen/v1`

Maakt de OAS behorend bij v1 van deze API beschikbaar.

Hiermee wordt een unieke plek (die altijd synchroon loopt met de features die de
API biedt) gekoppeld aan de actuele documentatie.
