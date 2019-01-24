# API Principes

## API-01: Bestaande API's voldoen waar mogelijk aan de API-strategie

Er wordt een kosten baten afweging gemaakt of bestaande API's noodzakelijk zijn en eventueel dienen te worden omgezet om te voldoen aan de API-strategie.

## API-02: Product- en leverancier-specifieke API's worden nooit direct aangeroepen

Hierdoor is het mogelijk om een onderliggend systeem en/of bijbehorende technische API's te vervangen met geen of minimale impact voor de afnemers. Dit geldt niet voor producten die een gestandaardiseerde API aanbieden.

## API-03: API's garanderen dat operaties "Veilig" en/of "Idempotent" zijn

Operaties van een API zijn gegarandeerd "Veilig" en/of "Idempotent" als dat zo is bepaald (zie tabel in DSO API Strategie) .

## API-04: Toestandsinformatie wordt nooit op de server opgeslagen

De client-toestand wordt volledig bijgehouden door de client zelf.

## API-05: Communicatie met API's verloopt alleen via het Stelselknooppunt

Het Stelselknooppunt is het centrale punt waarop alle API's beschikbaar worden gesteld. Het is niet toegestaan API's direct te benaderen. Het Stelselknooppunt is verantwoordelijk voor het verlenen van toegang en afdwingen van fair-use policies (indien van toepassing).

## API-06: Alleen standaard HTTP-operaties worden toegepast

Een RESTful API is een application programming interface die de standaard HTTP-operaties GET, PUT, POST, PATCH en DELETE gebruikt.

## API-07: Definitie van het koppelvlak is in het Nederlands tenzij er sprake is van een officieel Engelstalig begrippenkader

Resources en de achterliggende entiteiten, velden, etc. (het informatiemodel en het externe koppelvlak) worden in het Nederlands gedefinieerd. Engels is toegestaan indien er sprake is van een officieel Engelstalig begrippenkader.

## API-08: Resource namen zijn zelfstandige naamwoorden in het meervoud

Namen van resources zijn zelfstandige naamwoorden en altijd in het meervoud, zoals aanvragen, activiteiten, vergunningen. Ook als het om het een enkel resource betreft.

## API-09: Relaties van geneste resources worden binnen het eindpunt gecreëerd

Als een relatie alleen kan bestaan binnen een andere resource (geneste resource), wordt de relatie binnen het eindpunt gecreëerd. De afhankelijke resource heeft geen eigen eindpunt

## API-10: Resources ondersteunen "lazy" en "eager" laden van relaties

Resources die een n-op-n relatie kennen ondersteunen zowel het teruggeven van identificaties van gerelateerde resources (lazy loading) als het teruggeven van de resources zelf (eager loading).

## API-11: Gelinkte resources worden expliciet en selectief mee-geladen

Gelinkte resources worden expliciet en selectief mee-geladen als onderdeel van een resource verzoek middels de expand query-parameter.

## API-12: Representatie op maat wordt ondersteund

Het is mogelijk om een door komma's gescheiden lijst van veldennamen op te geven met de query-parameter fields om een representatie op maat te krijgen. Als niet-bestaande veldnamen worden meegegeven wordt een 400 Bad Request teruggegeven.

## API-13: Acties die niet passen in het CRUD model worden een sub-resource

"Acties die niet passen in het CRUD model worden op de volgende manieren opgelost:

- Behandel een actie als een sub-resource.
- Alleen in uitzonderlijke gevallen wordt een actie met een eigen eindpunt opgelost."

## API-14: De verbinding is ALTIJD versleuteld met minimaal TLS V1.2

De verbinding is ALTIJD versleuteld op basis van minimaal TLS V1.2. Geen uitzonderingen, dus overal en altijd. In het geval van toegangsbeperking of doelbinding wordt tweezijdig TLS toegepast. Doordat de verbinding altijd is versleuteld maakt het authenticatiemechanisme eenvoudiger. Hierdoor wordt het mogelijk om eenvoudige toegangstokens te gebruiken in plaats van toegangstokens met encryptie.

## API-15: API's zijn alleen bruikbaar met behulp van een API-key

Voor alle DSO API's wordt minimaal een registratie inclusief acceptatie van de fair use voorwaarden vereist. Op basis hiervan zal dan een API-key wordt uitgegeven.

## API-16: Tokens worden niet gebruikt in query parameters

Er is een inherent beveiligingsprobleem bij het gebruik van een query parameter voor tokens omdat de meeste webservers queryparameters in de server logs wegschrijven.

## API-17: Autorisatie is gebaseerd op OAuth 2.0

Een REST API mag geen state hebben. Elk verzoek moet daarom zijn voorzien van een token. OAuth 2.0 is hiervoor de voorgeschreven standaard.

## API-18: Authenticatie voor API's met toegangsbeperking of doelbinding is gebaseerd op PKIoverheid

In het geval van API's met toegangsbeperking of doelbinding zal er aanvullend sprake zijn van authenticatie op basis PKIoverheid certificaten en tweezijdig TLS. In de URI-strategie [2] is vastgelegd welke kaders gelden voor API's die gebruik maken van tweezijdig TLS.

## API-19: Documentatie is gebaseerd op OAS 2.0 of hoger

Specificaties (documentatie) is beschikbaar als Open API Specification (OAS)9 V2.0 of hoger. De nieuwere variant V3.0 is beschikbaar en het gebruik van deze versie wordt sterk aangeraden.

## API-20: Documentatie is in het Nederlands tenzij er sprake is van bestaande documentatie in het Engels of er sprake is van een officieel Engelstalig begrippenkader

De voertaal voor de API's is Nederlands. Het is wel toegestaan om te verwijzen naar bestaande documentatie is het Engels en als er sprake is van een officieel Engelstalig begrippenkader.

## API-21: Documentatie wordt getest en geaccepteerd

De API-manager van het Stelselknooppunt biedt de mogelijk om direct vanuit de documentatie de API te testen. Hier dient bij het opzetten van de documentatie rekening mee gehouden te worden en dit dient getest te worden.

## API-22: Wijzigingen worden gepubliceerd met een uitfaseringschema

Koppelvlak wijzigingen worden met bijbehorende planning op een publiek toegankelijke blog als changelog bekendgemaakt en via een mailinglijst.

## API-23: De overgangsperiode bij een nieuwe API versie is maximaal 1 jaar

Oude en nieuwe versies (max. 3) van een API worden voor een beperkte overgangsperiode (1 jaar) naast elkaar aangeboden.

## API-24: Alleen het major versienummer is onderdeel van de URI

In de URI wordt alleen het major versienummer opgenomen. Minor versienummer en patch versienummer worden in de header van het bericht zelf opgenomen. Het uitgangspunt dat hierbij wordt gehanteerd is dat minor versies en patches geen impact hebben op bestaande code, maar major versies wel.

## API-25: Gebruikers van een ‘deprecated' API worden actief gewaarschuwd

Met een Warning response-header in alle responses van de oude API's worden gebruikers gewaarschuwd voor de aanstaande uitfasering.

## API-26: JSON first - API's ontvangen en versturen JSON

API's ontvangen en versturen JSON.

## API-27: API's zijn optioneel voorzien van een JSON Schema

API's ondersteunen JSON Schema (<http://json-schema.org),> zodat validatie mogelijk (optioneel) is en vereenvoudigd wordt.

## API-28: Content negotiation wordt volledig ondersteund

Andere representaties zoals XML en RDF worden naast JSON via het standaard HTTP content negotiation mechanisme ondersteund. Als het gewenste formaat niet geleverd kan worden zal er een 406 Not Acceptable worden teruggegeven.

## API-29: API's controleren dat de Content-Type header is ingesteld

"Er wordt gecontroleerd of het Content-Type header is ingesteld op application/json of andere ondersteunde content types, anders wordt HTTP-status code 415 Unsupported Media Type geretourneerd.
Veldnamen in snake_case"

## API-30: Woorden in veldnamen zijn gedefinieerd in camelCase

Een veldnaam begint met kleine letters (eerste woord) en ieder opvolgend woord begint met een hoofdletter.

## API-31: Pretty print is standaard uitgeschakeld

Het uitgangspunt is dat REST clients en browsers (al dan niet met extensies) JSON netjes geformatteerd kunnen weergeven.

## API-32: Een JSON-response heeft geen omhullende envelop

Er worden standaard geen enveloppen toegepast.

## API-33: API's ondersteunen JSON gecodeerde POST, PUT en PATCH payloads

API's ondersteunen minimaal JSON gecodeerde POST, PUT en PATCH payloads. Encoded form data (application/x-www-form-urlencoded) wordt niet ondersteund.

## API-34: Filter query-parameters zijn gelijk aan de velden waarop gefilterd kan worden

Gebruik unieke query-parameters die gelijk zijn aan de velden waarop gefilterd kan worden.

## API-35: Voor sorteren wordt de query-parameter sorteer gebruikt

De generieke query-parameter sorteer wordt gebruikt voor het specificeren van door komma's gescheiden velden waarop gesorteerd moet worden. Door een minteken ("-") voor de veldnaam te zetten wordt het veld in aflopende sorteervolgorde gesorteerd.

## API-36: Voor vrije-tekst zoeken wordt een query-parameter zoek gebruikt

API's die vrije-tekst zoeken ondersteunen doen dit middels de query-parameter zoek.

## API-37: API's die vrije-tekst zoeken ondersteunen kunnen overweg met twee soorten wildcard karakters: `*` en `?`

API's die vrije-tekst zoeken ondersteunen kunnen overweg met twee soorten wildcard karakters:

- `*` Komt overeen met nul of meer (niet-spatie) karakters
- `?` Komt precies overeen met één (niet-spatie) karakter

## API-38: GEO API's ontvangen en versturen GeoJSON

Voor GEO API's wordt de standaard GeoJSON gebruikt.

## API-39: GeoJSON is onderdeel van de embedded resource in de JSON response

GeoJSON wordt in een JSON response (application/json) geplaatst waarbij geo attributen als GeoJSON-compatible object in de resource ge-embed zijn.

## API-40: Voor GEO queries is een POST end-point beschikbaar

Geometrische queries worden in een POST naar een apart end-point verzonden.

## API-41: POST end-points zijn uitbreidbaar voor gecombineerde vragen

De geometrie is uitbreidbaar met andere properties voor gecombineerde queries.

## API-42: Resultaten van een globale geometrische zoekvraag worden in de relevante geometrische context geplaatst

In het geval van een globale zoekvraag …/api/zoek/v1 is het noodzakelijk om de resultaten in een relevante geometrische context te plaatsen.

## API-43: Het voorkeur-coördinatenstelsels (CRS) is ETRS89, maar het CRS wordt niet impliciet geselecteerd

Algemeen gebruik van het Europese ETRS89 coördinatenstelsel (CRS) heeft sterk de voorkeur, maar dit wordt niet door API's afgedwongen als de "default". Derhalve moet het te gebruiken CRS in elke aanroep expliciet worden opgegeven.

## API-44: Het coördinatenstelsel (CRS) van de vraag en het antwoord wordt in de header meegestuurd

Het gekozen coördinatenstelsel (CRS) voor zowel de vraag als het antwoord worden meegestuurd als onderdeel van de request-header en de response-header. Bij het ontbreken van deze headers wordt 412 Precondition Failed teruggegeven. Hiermee wordt voorkomen dat per abuis met het verkeerde CRS wordt gewerkt.

## API-45: Het gewenste coördinatenstelsel wordt op basis van content negotiation overeengekomen

Het gewenste CRS voor de geometrie in het antwoord (response body) wordt aangeduid met een accept header. Als het gewenste CRS niet geleverd kan worden zal er een 406 Not Acceptable worden teruggegeven.

## API-46: Paginering wordt gerealiseerd op basis van JSON+HAL

Aan de representatie worden twee gereserveerde velden (gedefinieerd door RFC5988) "_links" (verplicht) en _embedded (optioneel) toegevoegd. Daarnaast wordt paginerings-metadata als HTTP-headers meegegeven.

## API-47: Waar relevant wordt caching toegepast

Voor caching wordt gebruikt van de HTTP standaard caching mechanismes door het toevoegen van een aantal extra uitgaande HTTP-headers (ETag of Last-Modified) en functionaliteit om te bepalen of een aantal specifieke inkomende HTTP-headers (Is-None_Match of Is-Modified-Since).

## API-48: Beperken van het aantal verzoeken per tijdsperiode wordt centraal opgelost door het Stelselknooppunt

Alle verzoeken naar API's lopen via het Stelselknooppunt. Het Stelselknooppunt lost het beperken van het aantal verzoeken per tijdsperiode centraal op om overbelasting van servers te voorkomen om een hoog serviceniveau te garanderen.

## API-49: Begrenzingen worden proactief gemeld

Gebruik X-Rate-Limit headers om limieten aan de gebruiker te communiceren en HTTP-statuscode 429 Too Many Requests als de limieten overschreden worden.

## API-50: Foutafhandeling is gestandaardiseerd

API's ondersteunen de gestandaardiseerde foutmeldingen van de HTTP-statuscodes 400 en 500 reeks inclusief een verwerkbare JSON representatie in lijn met RFC7807.

## API-51: API's passen de verplichte HTTP-statuscodes toe

De volgende http-statuscodes worden minimaal toegepast: 200, 201, 204, 304, 400, 401, 403, 405, 406, 409, 410, 415, 422, 429, 500, 503.

## NLA-01: API-endpoints dienen géén trailing slashes te bevatten

URIs die gebruikt worden om collecties van resources of individuele resources op te vragen eindigen nooit met een trailing slash. Een resource leeft op één plek/path. Resource paths eindigen zonder slash.