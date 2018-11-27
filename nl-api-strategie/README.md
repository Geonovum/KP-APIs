# Inhoud
## RESTful principes
De belangrijkste principe van REST is het scheiden van de API in logische resources ("dingen"). De resources beschrijven de informatie van het "ding". Deze resources worden gemanipuleerd met behulp van HTTP-verzoeken en HTTP-operaties. Elke operatie (GET, POST, PUT, PATCH, DELETE) heeft een specifieke betekenis.
> HTTP definieert ook operaties als HEAD, TRACE, OPTIONS en CONNECT. Deze worden echter in de context van REST vrijwel niet gebruikt en zijn daarom in de verdere uitwerking weggelaten.

|Operatie|CRUD|Toelichting|
|-|-|-|
|POST|Create|Wordt gebruik als een "create" voor resources die collecties representeren (ofwel POST voegt een resource toe aan de collectie).|
|GET|Read|Wordt gebruikt om een resource op te vragen van de server. Data wordt alleen opgevraagd en niet gewijzigd.|
|PUT|Update|Wordt gebruikt om een specifieke resource te vervangen. Is óók een "create" wanneer de resource op aangegeven identifier/URI nog niet bestaat.|
|PATCH|Update|Wordt gebruikt om een bestaande resource gedeeltelijk bij te werken. Het verzoek bevat de gegevens die gewijzigd moeten worden en de operaties die de resource muteren in het daarvoor bedoelde JSON merge patch formaat (RFC 7386).|
|DELETE|Delete|Verwijdert een specifieke resource.|

Per operatie is tevens bepaald of deze gegarandeerd "veilig" en/of "idempotent" moet zijn. Dit is van belang omdat afnemers en tussenliggende middleware hierop rekenen. 

> **Veilig (alleen-lezen)** 
> 
> Veilig (alleen-lezen) betekent in dit geval dat de semantiek is gedefinieerd als alleen-lezen. Dit is van belang als afnemers en tussenliggende systemen gebruik willen maken van caching.

> **Idempotent**
> 
> Onder idempotent wordt verstaan dat meerdere identieke verzoeken exact hetzelfde effect hebben als één verzoek..

|Operatie|Veilig|Idempotent|
|-|-|-|
|POST|Nee|Nee|
|GET, OPTIONS, HEAD|Ja|Ja|
|PUT|Nee|Ja|
|PATCH|Nee|Optioneel|
|Delete|Nee|Ja|

> **API’s garanderen dat operaties “Veilig” en/of “Idempotent” zijn.**
> 
> Operaties van een API zijn gegarandeerd “Veilig” en/of “Idempotent” als dat zo is bepaald (zie tabel).

REST maakt gebruik van het client stateless server ontwerpprincipe dat is afgeleid van client server met als aanvullende beperking dat het niet toegestaan is om toestand (state) op de server bij te houden. Elk verzoek van de client naar de server moet alle informatie bevatten die nodig is om het verzoek te verwerken, zonder gebruik te hoeven maken van toestand-informatie op de server.

> **Toestandsinformatie wordt nooit op de server opgeslagen.**
> 
>  De client-toestand wordt volledig bijgehouden door de client zelf.

### Wat zijn resources?
Het fundamenteel concept in elke RESTful API is de resource. Een resource is een object met een type, bijbehorende data, relaties met andere resources en een aantal operaties om deze te bewerken. Resources worden aangeduid met zelfstandige naamwoorden (niet werkwoorden!) die relevant zijn vanuit het perspectief van de afnemer van de API. Dus resources zijn zelfstandige naamwoorden en operaties zijn werkwoorden. Operaties zijn acties die op resources worden uitgevoerd. 
  
Het is mogelijk om interne datamodellen één-op-één toe te wijzen aan resources, maar dit hoeft niet per definitie zo te zijn. De crux is om alle niet relevante implementatiedetails te verbergen. Enkele voorbeelden van resources van het DSO zijn: aanvraag, activiteit, juridische regel, toepasbare regel, vergunning. 
 
Als de resources geïdentificeerd zijn, wordt bepaald welke operaties van toepassing zijn en hoe deze worden ondersteund door de API. RESTful API’s realiseren CRUD (Create, Read, Update, Delete) operaties met behulp van HTTP-operaties:

|Request|Omschrijving|
|-|-|
|`GET /aanvragen`|Haalt een lijst van aanvragen op|
|`GET /aanvragen/12`|Haalt een specifieke aanvraag op|
|`POST /aanvragen`|Creëert een nieuwe aanvraag|
|`PUT /aanvragen/12`|Wijzigt aanvraag #12 als geheel|
|`PATCH /aanvragen/12`|Wijzigt een gedeelte van aanvraag #12|
|`DELETE /aanvragen/12`|Verwijdert aanvraag #12|

Het mooie van REST is dat er gebruik wordt gemaakt van de bestaande HTTPoperaties om de functionaliteit te implementeren met één enkele eindpunt. Hierdoor zijn er geen aanvullende naamgevingsconventies nodig in de URI en blijft de URIstructuur eenvoudig.

> **Alleen standaard HTTP-operaties worden toegepast**
> 
> Een RESTful API is een application programming interface die de standaard HTTP-operaties GET, PUT, POST, PATCH en DELETE gebruikt.

### Welke taal?
Omdat de exacte betekenis van concepten en begrippen vaak in een vertaling verloren gaan, worden resources en de achterliggende entiteiten, velden, etc. (het informatiemodel en externe koppelvlak) in het Nederlands gedefinieerd.

> **Definitie van het koppelvlak is in het Nederlands tenzij er sprake is van een officieel Engelstalig begrippenkader**
> 
> Resources en de achterliggende entiteiten, velden, etc. (het informatiemodel en het externe koppelvlak) worden in het Nederlands gedefinieerd. Engels is toegestaan indien er sprake is van een officieel Engelstalig begrippenkader.

### Naamgeving eindpunten in enkelvoud of meervoud?
De Keep It Simple Stupid (KISS) regel is hier van toepassing. Hoewel grammaticaal gezien het verkeerd aanvoelt om bij het opvragen van een enkele resource gebruik te maken van een resource naam in het meervoud, is het pragmatisch om te kiezen voor consistente eindpunten en altijd meervoud te gebruiken. Voor de afnemer is het gebruik veel eenvoudiger als er geen rekening gehouden hoeft te worden met enkel- en meervoud (aanvraag/aanvragen, regel/regels). Daarnaast is de implementatie eenvoudiger omdat de meeste ontwikkel frameworks het afhandelen van enkele resource (`/aanvragen/12`) en meervoudige resources (`/aanvragen`) met één controller kan oplossen.

> **Resource namen zijn zelfstandige naamwoorden in het meervoud**
> 
> Namen van resources zijn zelfstandige naamwoorden en altijd in het meervoud, zoals aanvragen, activiteiten, vergunningen. Ook als het om het een enkel resource betreft.

### Hoe omgaan met relaties?
Als een relatie alleen kan bestaan binnen een andere resource (1-op-n relatie), dan kan de afhankelijke resource (kind) alleen via de ouder benaderd worden. Het volgende voorbeeld maakt dit duidelijk. Een activiteit hoort bij één aanvraag. De activiteiten wordt als volgt benaderd via het eindpunt `/aanvragen`:

|Request|Omschrijving|
|-|-|
|`GET /aanvragen/12/statussen`|Haalt een lijst van statussen op van aanvraag #12|
|`GET /aanvragen/12/statussen/5`|Haalt een specifieke status (#5) van aanvraag #12 op|
|`POST /aanvragen/12/statussen`|Creëert een nieuwe status voor aanvraag #12|
|`PUT /aanvragen/12/statussen/5`|Wijzigt status #5 van aanvraag #12|
|`PATCH /aanvragen/12/statussen/5`|Wijzigt een gedeelte van status #5 van aanvraag #12|
|`DELETE /aanvragen/12/statussen/5`|Verwijdert status #5 uit aanvraag #12|

> **Relaties van geneste resources worden binnen het eindpunt gecreëerd**
> 
> Als een relatie alleen kan bestaan binnen een andere resource (geneste resource), wordt de relatie binnen het eindpunt gecreëerd. De afhankelijke resource heeft geen eigen eindpunt.

Indien er sprake is van een n-op-n relatie zijn er verschillende manieren om de resources te benaderen. De onderstaande verzoeken leveren hetzelfde resultaat op: 

|Request|Omschrijving|
|-|-|
|`GET /aanvragen/12/activiteiten`|Haalt een lijst van activiteiten op van aanvraag #12|
|`GET /activiteiten?aanvraag=12`|Haalt een lijst van activiteiten op, gefilterd op aanvraag #12|

Bij een n-op-m relatie wordt het opvragen van de individuele resources sowieso ondersteund, waarbij minimaal de identificatie van gerelateerde resources (relatie) wordt teruggegeven. De afnemers moet zelf het eindpunt van de gerelativeerde resource (relatie) aanroepen om deze op te vragen. Dit wordt ook wel aangeduid als lazy loading. De afnemer bepaalt zelf of de relatie geladen wordt en op welk moment.  
 
De resource dient naast “lazy loading” (de standaard) ook “eager loading” te ondersteunen, zodat de afnemer kan aangeven dat relaties direct meegeladen moeten worden. Dit wordt gerealiseerd middels de standaard query-parameter expand=true. Dit voorkomt dat er twee of meer aparte aanroepen nodig zijn. In beide gevallen is de afnemer in control. 

> **Resources ondersteunen “lazy” en “eager” laden van relaties**
> 
> Resources die een n-op-n relatie kennen ondersteunen zowel het teruggeven van identificaties van gerelateerde resources (lazy loading) als het teruggeven van de resources zelf (eager loading).

### Automatische laden van gelinkte resources
Vaak wordt er vanuit één resource verwezen (gelinkt) naar andere (geneste) resources. De RESTful manier om dit op te lossen is de verwijzing naar andere resources als URI op te nemen in een resource. Op basis hiervan kan de afnemer, indien gewenst, de gelinkte resources zelf opvragen. Dit is vergelijkbaar met “lazy loading” in een ORM oplossing: resources worden alleen opgehaald als ze nodig zijn.  In sommige gevallen, als de afnemer alle resources nodig heeft, is het efficiënter als de geneste resources in één keer opgehaald worden. Dit is vergelijkbaar met “eager loading” patroon in een ORM-oplossing.  
 
Omdat dit tegen de REST principes in gaat, moet het toepassen van dit mechanisme een expliciete keuze zijn. De keuze wordt bij de afnemers van de API belegd, zij weten immers of ze extra informatie nodig hebben en welke informatie precies. Dit mechanisme wordt mogelijk gemaakt met de `expand` query-parameter. 
 
Als `expand=true` wordt meegegeven, dan worden alle geneste resources geladen en embedded in het resultaat teruggegeven. Om de hoeveelheid informatie die geretourneerd wordt te beperken, is verplicht om te specificeren welke resources en zelfs welke velden van een resource teruggeven moeten worden. Hiermee wordt voorkomen dat de hele database wordt leeg getrokken. 

Dit wordt gedaan door de resources als een komma's gescheiden lijst te specificeren, bijvoorbeeld: `expand=aanvrager,bevoegdGezag`. De dot-notatie wordt gebruikt om specifieke velden van resources te selecteren. In het onderstaande voorbeeld wordt van de aanvrager alleen het veld “naam” teruggeven en van het bevoegd gezag de complete resource. Conform de HAL-standaard zijn de gelinkte resources embedded in de standaard representatie (zie ook aanpasbare representatie).  

`GET /aanvragen/12?expand=aanvrager.naam,bevoegdGezag`

Dit levert het volgende resultaat op:

```JSON
{
  "id": "12",
  "naam": "Mijn dakkapel",
  "samenvatting": "Ik wil een dakkapel bouwen!",
  "_embedded": {
    "aanvrager": {
      "naam": "Bob",
      "_links": {
        "self": {
          "href": "https: //.../api/register/v1/aanvragers/847",
          "title": "Bob"
        }
      }
    },
    "bevoegdGezag": {
      "id": "42",
      "soort": "Gemeente",
      "naam": "Rotterdam",
      "_links": {
        "self": {
          "href": "https: //.../api/register/v1/bevoegde-gezagen/42",
          "title": "Rotterdam"
        }
      }
    }
  },
  "_links": {
    "self": {
      "href": "https: //.../api/register/v1/aanvragen/12",
      "title": "Mijn dakkapel"
    }
  }
}
```

Afhankelijk van de implementatie zal door het selectief kunnen laden van gelinkte resources in veel gevallen de overhead van database selecties, hoeveelheid serialisatie en hoeveelheid uitgewisselde data worden beperkt.

> **Gelinkte resources worden expliciet en selectief mee-geladen**
> 
> Gelinkte resources worden expliciet en selectief mee-geladen als onderdeel van een resource verzoek middels de expand query-parameter. 

### Aanpasbare representatie
De gebruiker van een API heeft niet altijd de volledige representatie (lees alle velden) van een resource nodig. De mogelijkheid bieden om de gewenste velden te selecteren helpt bij het beperken van het netwerkverkeer (relevant voor lichtgewicht toepassingen), vereenvoudigt het gebruik van de API en maakt deze aanpasbaar (op maat). Om dit mogelijk te maken wordt de query-parameter `fields` ondersteund. De query-parameter accepteert een door komma's gescheiden lijst met veldnamen. Het resultaat is een representatie op maat. Het volgende verzoek haalt bijvoorbeeld voldoende informatie om een gesorteerde lijst van open aanvragen te tonen.
 
In het geval van HAL zijn de gelinkte resources embedded in de standaard representatie. Met de hier beschreven fields parameter ontstaat de mogelijkheid om de inhoud van de body naar behoefte aan te passen.

`GET /aanvragen?fields=id,onderwerp,aanvrager,wijzigDatum&status=open&sorteer=wijzigDatum`

> **Representatie op maat wordt ondersteund**
> 
> Het is mogelijk om een door komma's gescheiden lijst van veldennamen op te geven met de query-parameter fields om een representatie op maat te krijgen. Als niet-bestaande veldnamen worden meegegeven wordt een 400 Bad Request teruggegeven. 

### Hoe om te gaan met acties die niet passen in het CRUD model?
Er zijn ook resource-acties die niet data manipulatie (CRUD) gerelateerd zijn. Een voorbeeld van dit soort acties zijn: het wijzigen van de status (activeren en deactiveren) van een resource of het markeren (star) van een resource. Afhankelijk van het type actie zijn er drie manieren om dit aan te pakken: 
 
1. Herstructureer de actie zodat deze onderdeel wordt van een resource. Dit werkt als de actie geen parameters nodig heeft. Bijvoorbeeld een activeeractie kan worden toegewezen aan een booleaans veld `geactiveerd` dat bijgewerkt wordt via een PATCH op de resource. 

2. Behandel de actie als een sub-resource. Bijvoorbeeld, een aanvraag markeren met `PUT /aanvragen/12/markeringen` en verwijderen van de markering met `DELETE /aanvragen/12/markeringen`. Om de REST principes volledig te volgen moet ook de GET methode voor deze sub-resource beschikbaar zijn. 

3. Soms is er geen logische manier om een actie aan een bestaande resource te koppelen. Een voorbeeld hiervan is een zoekopdracht over meerdere resources heen. Deze actie kan niet worden toegekend aan een specifieke resource. In dit geval is de keuze voor een zelfstandig service-eindpunt `/_zoek` het meest logische. Gebruik werkwoorden in gebiedende wijs om het onderscheid t.o.v. "echte" resource end-points zo duidelijk mogelijk te maken. Dit is vanuit het perspectief van de gebruiker het meest logisch ontwerp. In de URI-strategie is voor dit doel het fragment `<service>` opgenomen. Dit fragment volgt na de “/api” en maakt daarmee de routering eenvoudig.  
 
In de DSO API-strategie wordt gekozen voor manier 2 en 3. 

> **Acties die niet passen in het CRUD model worden een sub-resource**
> 
> Acties die niet passen in het CRUD model worden op de volgende manieren opgelost:
> - Behandel een actie als een sub-resource.
> - Alleen in uitzonderlijke gevallen wordt een actie met een eigen eindpunt opgelost.

## Interactiepatronen
### Asynchrone calls
- Callbacks
### Synchrone calls
### Best practice(s)
## API Design
### "Your API is not your datamodel"
### experience/convenience endpoints
### Best practice(s)
## Relaties tussen resources
- n:m etc.
## identificatie resources
## Beveiliging
API’s zijn vanaf elke locatie vanaf het internet te benaderen. Om uitgewisselde informatie af te schermen wordt altijd gebruik gemaakt van een versleutelde verbinding op basis van TLS. Geen uitzonderingen, dus overal en altijd. 
 
Doordat de verbinding altijd is versleuteld maakt het authenticatiemechanisme eenvoudiger. Hierdoor wordt het mogelijk om eenvoudige toegangstokens te gebruiken in plaats van toegangstokens met encryptie.  

> **De verbinding is ALTIJD versleuteld met minimaal TLS V1.2**
> 
> De verbinding is ALTIJD versleuteld op basis van minimaal TLS V1.2. Geen uitzonderingen, dus overal en altijd. In het geval van toegangsbeperking of doelbinding wordt tweezijdig TLS toegepast. 
 
> **API’s zijn alleen bruikbaar met behulp van een API-key**
>
> Voor alle DSO API’s wordt minimaal een registratie inclusief acceptatie van de fair use voorwaarden vereist. Op basis hiervan zal dan een API-key wordt uitgegeven. 
 
### Authenticatie en autorisatie
Een REST API mag geen toestand (state) bijhouden. Dit betekent dat authenticatie en autorisatie van een verzoek niet mag afhangen van cookies of sessies. In plaats daarvan wordt elk verzoek voorzien van een token. Binnen het DSO is gekozen voor OAuth 2.0 als de standaarden voor het autorisatiemechanisme.  

> **Tokens worden niet gebruikt in query parameters**
> 
> Er is een inherent beveiligingsprobleem bij het gebruik van een query parameter voor tokens omdat de meeste webservers queryparameters in de server logs wegschrijven. 
 
Bij het gebruik van tokens wordt onderscheid gemaakt tussen geauthentiseerde en niet-geauthentiseerde services met de bijhorende headers:

|||
|-|-|
|Geauthentiseerd|`Authorization: Bearer <token>`|
|Niet-geauthentiseerd|`X-Api-Key: <api-key>`|

Bij het ontbreken van de juiste headers zijn geen authenticatiedetails beschikbaar en dient de statuscode `403 Forbidden` terug te worden gegeven. 
 
> **Autorisatie is gebaseerd op OAuth 2.0**
> 
> Een REST API mag geen state hebben. Elk verzoek moet daarom zijn voorzien van een token. OAuth 2.0 is hiervoor de voorgeschreven standaard. 
 
> **Authenticatie voor API’s met toegangsbeperking of doelbinding is gebaseerd op PKIoverheid**
> 
> In het geval van API’s met toegangsbeperking of doelbinding zal er aanvullend sprake zijn van authenticatie op basis PKIoverheid certificaten en tweezijdig TLS. In de URI-strategie is vastgelegd welke kaders gelden voor API’s die gebruik maken van tweezijdig TLS.  

### digid/oauth, oauth: werkgroep auth
### architectuur werkgroep uitwerken, hier technische implementatie
### Best practice(s)
#### Autorisatiefouten
In een productieomgeving is het wenselijk om voor het (kunnen) autoriseren zo min mogelijk informatie weg te geven. Met dit in het achterhoofd is het advies om voor statuscode `401 Unauthorized`, `403 Forbidden` en `404 Not Found`, de volgende regels te hanteren:

|Bestaat de resource?|Kan de autorisatie worden bepaald?|Geautoriseerd?|HTTP statuscode|
|-|-|-|-|
|Ja|Ja|Ja|`20x (200 OK)`| 
|Ja|Ja|Nee|`401 Unauthorized`|
|Ja|Nee|?|`403 Forbidden`| 
|Nee|Ja|Ja|`404 Not Found`|
|Nee|Ja|Nee|`403 Forbidden`| 
|Nee|Nee|?|`403 Forbidden`|

Het idee van deze regels is dat eerst wordt bepaald of de aanroeper (principal) gerechtigd is voor een resource. Is het antwoord ‘nee’ of kan dat niet worden bepaald, bijvoorbeeld omdat de resource nodig is om deze beslissing te kunnen nemen en de resource niet bestaat, dan wordt 403 Forbidden teruggegeven. Op deze manier wordt geen informatie teruggegeven over het al dan niet bestaan van een resource aan een niet-geautoriseerde principal.  
 
Een bijkomend voordeel van de strategie om eerst te bepalen of er toegang is, meer ruimte biedt om de access control logica te scheiden van de business code.  

#### Openbare identifiers
Openbaar zichtbare identifiers (ID's), zoals die veelal in URI’s van RESTful API’s voorkomen, zouden onderliggende mechanismen (zoals een nummergenerator) niet bloot moeten leggen en zeker geen zakelijke betekenis moeten hebben. 

> **UUID**
> 
> Het wordt aanbevolen om voor resources die een vertrouwelijk karakter hebben het concept van een UUID (Universally-Unique IDentifier) te gebruiken. Dit is een 16-bytes (128-bits) binaire representatie, weergegeven als een reeks van 32 hexadecimale cijfers, in vijf groepen gescheiden door koppeltekens en in totaal 36 tekens (32 alfanumerieke tekens plus vier afbreekstreepjes):
> 
> `550e8400-e29b-41d4-a716-446655440000`
>
> Om te zorgen dat de UUID’s korter en gegarandeerd “web-veilig” zijn, is het advies om alleen de base64-gecodeerde variant van 22 tekens te gebruiken. De bovenstaande UUID ziet er dan als volgt uit:
>
> `abcdEFh4520juieUKHWgJQ`

#### Blootstellen API-key
De API-key’s die standaard worden uitgegeven zijn “unrestricted”. Dat wil zeggen dat er geen gebruiksbeperkingen op zitten en ze niet blootgesteld mogen worden via een webapplicatie. Door API-key’s zonder gebruiksbeperkingen toe te passen in JavaScript, is er een reële kans op misbruik en quotum-diefstal. Om dit te voorkomen dienen in dit geval zogenaamde “restricted” API-key’s te worden uitgegeven en gebruikt. 

> **Gebruik “publieke” API-Key**
> 
> In JavaScript dient alleen gebruik te worden gemaakt van een zogenaamde “restricted” API-key. Dit is API-key die gekoppeld is aan specifieke kenmerken van de aanroeper (web-app, mobile-app), waaronder een clientId en/of verwijzer-URL. 

#### CORS-policy
Webbrowsers implementeren een zogenaamde “same origin policy”, een belangrijk beveiligingsconcept om te voorkomen dat verzoeken naar een ander domein gaan dan waarop het is aangeboden. Hoewel dit beleid effectief is in het voorkomen van aanroepen in verschillende domeinen, voorkomt het ook legitieme interactie tussen een API’s en clients van een bekende en vertrouwde oorsprong. 

> **Controleer toegang en gebruik CORS-header**
> Controleer eerst het domein van de inkomende aanvraag en genereer de response-header afhankelijk van of dit domein verzoeken mag verzenden of niet (whitelist). In dat geval wordt alleen dit specifieke domein aan de response-header `Access-Control-Allow-Origin` toegevoegd. 
> 
> **LET OP: Het is technisch mogelijk om in de Access-Control-Allow-Origin responsheader een wildcard ("*") terug geven en zo alle bronnen toe te staan.  Dit is een onveilige praktijk!**

## Documentatie
Een API is zo goed als de bijbehorende documentatie. De documentatie moet gemakkelijk te vinden, te doorzoeken en publiekelijk toegankelijk zijn. De meeste ontwikkelaars zullen eerst de documenten doornemen voordat ze starten met de implementatie. Wanneer de documentatie is weggestopt in pdf-bestanden en achter een inlog, dan vormt dit een drempel voor ontwikkelaars om aan de gang te gaan en de documentatie is niet vindbaar met zoekmachines. 

> **Documentatie is gebaseerd op OAS 3.0 of hoger**
> 
> Specificaties (documentatie) is beschikbaar als Open API Specification (OAS)9 V3.0 of hoger.

> **Documentatie is in het Nederlands tenzij er sprake is van bestaande documentatie in het Engels of er sprake is van een officieel Engelstalig begrippenkader**
> 
> De voertaal voor de API’s is Nederlands. Het is wel toegestaan om te verwijzen naar bestaande documentatie is het Engels en als er sprake is van een officieel Engelstalig begrippenkader. 

De documentatie dient voorzien te zijn van voorbeelden inclusief complete request en response cycli. Het moet mogelijk zijn om direct vanuit de documentatie verzoeken te testen (uit te voeren). Daarnaast is elke fout beschreven en voorzien van een unieke foutcode die gebruikt kan worden om de fout op te zoeken. 

Als een API in productie is mag het “contract” (koppelvlak) niet zonder voorafgaande kennisgeving worden gewijzigd. De documentatie moet voorzien zijn van een uitfaseringsplanning (deprecation schedule) en alle details van de wijziging bevatten. Wijzigingen worden via een publiek toegankelijke blog als changelog bekendgemaakt en via een mailinglijst. Hierbij wordt primair gebruik gemaakt van de emailadressen die zijn gekoppeld aan de uitgifte van API-keys. 

> **Wijzigingen worden gepubliceerd met een uitfaseringschema**
> 
>  Koppelvlak wijzigingen worden met bijbehorende planning op een publiek toegankelijke blog als changelog bekendgemaakt en via een mailinglijst. 

### Best practice(s)
> **OAS via basis-URI beschikbaar in JSON-formaat**
>
> Om te zorgen dat de actuele documentatie altijd publiekelijk toegankelijk is, is het advies om de inhoud van de Open API Specification op het “root end-point” van de API beschikbaar te maken in JSON-formaat: 
> 
> `https://service.omgevingswet.overheid.nl/publiek/catalogus/api/raadplegen/v1`
> 
> Maakt de OAS behorend bij v1 van deze API beschikbaar.
>
> Hiermee wordt een unieke plek (die altijd synchroon loopt met de features die de API biedt) gekoppeld aan de actuele documentatie.

## Versionering
API’s zijn altijd geversioneerd. Versioneren zorgt voor een soepele overgang bij wijzigingen. De oude en nieuwe versies worden voor een beperkte overgangsperiode (één jaar) aangeboden. Er worden bovendien maximaal 3 versies van een API ondersteund. Afnemers kiezen zelf het moment dat ze overschakelen van de oude naar de nieuwe versie van een API, als ze het maar voor het einde van de overgangsperiode is. 
 
> **De overgangsperiode bij een nieuwe API versie is maximaal 1 jaar**
> 
> Oude en nieuwe versies (max. 3) van een API worden voor een beperkte overgangsperiode (1 jaar) naast elkaar aangeboden. 
 
Er zijn verschillende meningen over de vraag of de versie in de URI of in de header hoort. De URI-strategie heeft hier een keuze in gemaakt: alleen het major versienummer wordt in de URI opgenomen. Hierdoor is het mogelijk om verschillende versies van een API via de browser te verkennen. Hiermee wordt ook voldaan aan het derde punt van de vijf basiseisen in paragraaf 2.3.

Het versienummer begint bij 1 en wordt met 1 opgehoogd voor elke major release waarbij het koppelvlak niet backward compatible wijzigt. De minor en patch versienummers staan altijd in de response-header van het bericht zelf in het formaat `major.minor.patch`.

De header (zowel request als response) is als volgt gedefinieerd:

|HTTP-header|Toelichting|
|-|-|
|`API-Version`|Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Bijvoorbeeld: `API-version: 1.2.56`|

Via de optionele request-header kan één minor/patch-versie worden aangewezen. Hiermee wordt bedoeld dat in (pre)productie- of aansluitomgeving naast bijvoorbeeld v1 en v2 (de aangewezen versies die alleen bereikbaar zijn via de URI’s) ook nog de mogelijkheid bestaat om één "oudere" of "nieuwere" versie van deze API’s aan te wijzen en via de request-header te benaderen. De onderstaande URI’s wijzen bijvoorbeeld naar de aangewezen productie-release van de API die alleen bereikbaar zijn via de URI:



- Best practice(s)
## JSON
- Best practice(s)
## HAL/HATEOAS
- Best practice(s)
## Filteren, sorteren en zoeken
- Best practice(s)
- wildcards
## Tijdreizen
- DSO tijdreisnotitie (link)
- VNG periodes (van, tot en met)
- RCE periodes (middeleeuwen, pleistoceem)
- Best practice(s)
## Geo ondersteuning
- Best practice(s)
## Paginering
- Best practice(s)
## Caching
- Best practice(s)
## Beperken van het aantal verzoeken per tijdsperiode
- Best practice(s)
## Foutafhandeling
- Best practice(s)
## URI strategie
- Best practice(s)
## Includen van guidelines
- https://cdn.jsdelivr.net/gh/dvh/KP-APIs@0.1/
- Versiebeheer
- Best practice(s); (eerst resolven in productie etc.)