
# API designrules (ontwerpregels)

> *Het doel van dit hoofdstuk is een set van regels te beschrijven op basis waarvan de hele overheid op eenduidige manier RESTful APIs (afgekort tot APIs) aan kan bieden. Hiermee wordt bereikt dat de overheid voorspelbaar is en ontwikkelaars makkelijk aan de slag kunnen en APIs kunnen consumeren en combineren. Vooralsnog is niet voorzien dat in dit hoofdstuk ook regels worden opgenomen voor ander type APIs zoals SOAP. In bijlage API-principes is de set van regels samengevat in een aantal principes die in de kern beschrijven waarmee rekening moet worden gehouden bij het ontwerpen en realiseren van API's*

## Inleiding

Binnen de overheid zijn meer en meer organisaties bezig met het implementeren en aanbieden van RESTful APIs, in veel gevallen worden deze APIs naast bestaande koppelvlakken zoals SOAP en WFS aangeboden om bestaande datasets te ontsluiten. Eén van de doelen die hiermee vaak nagestreefd wordt is het aanbieden van een API die developer friendly is (zie voor de uitleg hierover paragraaf 2.6 en hoofdstuk 3) en waarmee een developer snel aan de slag kan. Dit is uiteraard een mooi streven, maar het borgt nog niet dat een developer voor iedere nieuwe API niet alsnog een flinke leercurve heeft. Een developer moet uiteraard bij iedere nieuwe API wel begrijpen waarvoor de API ingezet kan worden, echter zou het niet nodig moeten zijn dat ook de technische werking tussen APIs sterk verschilt. Het Kennisplatform APIs heeft zich daarom als doel gesteld om te komen tot een set met designrules/ontwerpregels voor APIs waarmee APIs overheidsbreed technisch gezien vergelijkbaar werken en daarmee eenvoudiger worden om te implementeren. Dit hoofdstuk beschrijft de set met designrules die breed toepasbaar zijn. Vanuit het Kennisplatform APIs hopen we dat organisaties deze designrules gaan inzetten in hun eigen API strategie, dat eventuele uitzonderingen of aanvullingen terug gegeven worden aan het platform zodat de designrules verbeterd kunnen worden.

Belangrijk om in het achterhoofd te houden bij het realiseren van een API is dat de design rules die in dit hoofdstuk worden geschreven alleen toegepast dienen te worden als de beschreven functionaliteit gewenst is.

Alle paragrafen in dit hoofdstuk, met uitzondering van paragraaf 4.5 zijn **"Normatief"**. Paragraaf 4.5 is **"Informatief"**

## RESTful principes

Het belangrijkste principe van REST is het scheiden van de API in logische resources ("dingen"). De resources beschrijven de informatie van het "ding". Deze resources worden gemanipuleerd met behulp van HTTP-verzoeken en HTTP-operaties. Elke operatie (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) heeft een specifieke betekenis.
> HTTP definieert ook operaties als `HEAD`, `TRACE`, `OPTIONS` en `CONNECT`. Deze worden echter in de context van REST vrijwel niet gebruikt en zijn daarom in de verdere uitwerking weggelaten.

|Operatie|CRUD|Toelichting|
|-|-|-|
|`POST`|Create|Wordt gebruik als een "create" voor resources die collecties representeren (ofwel `POST` voegt een resource toe aan de collectie).|
|`GET`|Read|Wordt gebruikt om een resource op te vragen van de server. Data wordt alleen opgevraagd en niet gewijzigd.|
|`PUT`|Update|Wordt gebruikt om een specifieke resource te vervangen. Is óók een "create" wanneer de resource op aangegeven identifier/URI nog niet bestaat.|
|`PATCH`|Update|Wordt gebruikt om een bestaande resource gedeeltelijk bij te werken. Het verzoek bevat de gegevens die gewijzigd moeten worden en de operaties die de resource muteren in het daarvoor bedoelde JSON merge patch formaat (RFC 7386).|
|`DELETE`|Delete|Verwijdert een specifieke resource.|

Per operatie is tevens bepaald of deze gegarandeerd "veilig" en/of "idempotent" moet zijn. Dit is van belang omdat afnemers en tussenliggende middleware hierop rekenen.

> **Veilig (alleen-lezen)**
>
> Veilig (alleen-lezen) betekent in dit geval dat de semantiek is gedefinieerd als alleen-lezen. Dit is van belang als afnemers en tussenliggende systemen gebruik willen maken van caching.

> **Idempotent**
>
> Onder idempotent wordt verstaan dat meerdere identieke verzoeken exact hetzelfde effect hebben als één verzoek.

|Operatie|Veilig|Idempotent|
|-|-|-|
|`POST`|Nee|Nee|
|`GET`, `OPTIONS`, `HEAD`|Ja|Ja|
|`PUT`|Nee|Ja|
|`PATCH`|Nee|Optioneel|
|`DELETE`|Nee|Ja|

> [API principe: API's garanderen dat operaties "Veilig" en/of "Idempotent" zijn](#api-01)

REST maakt gebruik van het client stateless server ontwerpprincipe dat is afgeleid van client server met als aanvullende beperking dat het niet toegestaan is om toestand (state) op de server bij te houden. Elk verzoek van de client naar de server moet alle informatie bevatten die nodig is om het verzoek te verwerken, zonder gebruik te hoeven maken van toestand-informatie op de server.

> [API principe: Toestandsinformatie wordt nooit op de server opgeslagen](#api-02)

### Wat zijn resources?

Het fundamenteel concept in elke RESTful API is de resource. Een resource is een object met een type, bijbehorende data, relaties met andere resources en een aantal operaties om deze te bewerken. Resources worden aangeduid met zelfstandige naamwoorden (niet werkwoorden!) die relevant zijn vanuit het perspectief van de afnemer van de API. Dus resources zijn zelfstandige naamwoorden en operaties zijn werkwoorden. Operaties zijn acties die op resources worden uitgevoerd.

Het is mogelijk om interne datamodellen één-op-één toe te wijzen aan resources, maar dit hoeft niet per definitie zo te zijn. De crux is om alle niet relevante implementatiedetails te verbergen. Enkele voorbeelden van resources zijn: aanvraag, activiteit, pand, rijksmonument en vergunning.

Als de resources geïdentificeerd zijn, wordt bepaald welke operaties van toepassing zijn en hoe deze worden ondersteund door de API. RESTful API's realiseren CRUD (Create, Read, Update, Delete) operaties met behulp van HTTP-operaties:

|Request|Omschrijving|
|-|-|
|`GET /aanvragen`|Haalt een lijst van aanvragen op|
|`GET /aanvragen/12`|Haalt een specifieke aanvraag op|
|`POST /aanvragen`|Creëert een nieuwe aanvraag|
|`PUT /aanvragen/12`|Wijzigt aanvraag #12 als geheel|
|`PATCH /aanvragen/12`|Wijzigt een gedeelte van aanvraag #12|
|`DELETE /aanvragen/12`|Verwijdert aanvraag #12|

Het mooie van REST is dat er gebruik wordt gemaakt van de bestaande HTTP operaties om de functionaliteit te implementeren met één enkel eindpunt. Hierdoor zijn er geen aanvullende naamgevingsconventies nodig in de URI en blijft de URIstructuur eenvoudig.

> [API principe: Alleen standaard HTTP-operaties worden toegepast](#api-03)

> [API principe: API-endpoints mogen géén trailing slashes bevatten](#api-48)

### Welke taal?

Omdat de exacte betekenis van concepten en begrippen vaak in een vertaling verloren gaan, worden resources en de achterliggende entiteiten, velden, etc. in het Nederlands gedefinieerd.

> [API principe: Definitie van het koppelvlak is in het Nederlands tenzij er sprake is van een officieel Engelstalig begrippenkader](#api-04)

### Naamgeving eindpunten in enkelvoud of meervoud?

De Keep It Simple Stupid (KISS) regel is hier van toepassing. Hoewel grammaticaal gezien het verkeerd aanvoelt om bij het opvragen van een enkele resource gebruik te maken van een resource naam in het meervoud, is het pragmatisch om te kiezen voor consistente eindpunten en altijd meervoud te gebruiken. Voor de afnemer is het gebruik veel eenvoudiger als er geen rekening gehouden hoeft te worden met enkel- en meervoud (aanvraag/aanvragen, regel/regels). Daarnaast is de implementatie eenvoudiger omdat de meeste ontwikkel frameworks het afhandelen van enkele resource (`/aanvragen/12`) en meervoudige resources (`/aanvragen`) met één controller kunnen oplossen.

> [API principe: Resource namen zijn zelfstandige naamwoorden in het meervoud](#api-05)

### Hoe omgaan met relaties?

Als een relatie alleen kan bestaan binnen een andere resource (1-op-n relatie), dan kan de afhankelijke resource (kind) alleen via de ouder benaderd worden. Het volgende voorbeeld maakt dit duidelijk. Een status hoort bij één aanvraag. De statussen worden als volgt benaderd via het eindpunt `/aanvragen`:

|Request|Omschrijving|
|-|-|
|`GET /aanvragen/12/statussen`|Haalt een lijst van statussen op van aanvraag #12|
|`GET /aanvragen/12/statussen/5`|Haalt een specifieke status (#5) van aanvraag #12 op|
|`POST /aanvragen/12/statussen`|Creëert een nieuwe status voor aanvraag #12|
|`PUT /aanvragen/12/statussen/5`|Wijzigt status #5 van aanvraag #12|
|`PATCH /aanvragen/12/statussen/5`|Wijzigt een gedeelte van status #5 van aanvraag #12|
|`DELETE /aanvragen/12/statussen/5`|Verwijdert status #5 uit aanvraag #12|

> [API principe: Relaties van geneste resources worden binnen het eindpunt gecreëerd](#api-06)

Indien er sprake is van een n-op-n relatie zijn er verschillende manieren om de resources te benaderen. De onderstaande verzoeken leveren hetzelfde resultaat op:

|Request|Omschrijving|
|-|-|
|`GET /aanvragen/12/activiteiten`|Haalt een lijst van activiteiten op van aanvraag #12|
|`GET /activiteiten?aanvraag=12`|Haalt een lijst van activiteiten op, gefilterd op aanvraag #12|

Bij een n-op-m relatie wordt het opvragen van de individuele resources sowieso ondersteund, waarbij minimaal de identificatie van gerelateerde resources (relatie) wordt teruggegeven. De afnemers moet zelf het eindpunt van de gerelativeerde resource (relatie) aanroepen om deze op te vragen. Dit wordt ook wel aangeduid als lazy loading. De afnemer bepaalt zelf of de relatie geladen wordt en op welk moment.

### Aanpasbare representatie

De gebruiker van een API heeft niet altijd de volledige representatie (lees: alle velden) van een resource nodig. De mogelijkheid bieden om de gewenste velden te selecteren helpt bij het beperken van het netwerkverkeer (relevant voor lichtgewicht toepassingen), vereenvoudigt het gebruik van de API en maakt deze aanpasbaar (op maat). Om dit mogelijk te maken wordt de query-parameter `fields` ondersteund. De query-parameter accepteert een door komma's gescheiden lijst met veldnamen. Het resultaat is een representatie op maat. Het volgende verzoek haalt bijvoorbeeld voldoende informatie op om een gesorteerde lijst van open aanvragen te tonen.

In het geval van HAL zijn de gelinkte resources embedded in de standaard representatie. Met de hier beschreven `fields` parameter ontstaat de mogelijkheid om de inhoud van de body naar behoefte aan te passen.

`GET /aanvragen?fields=id,onderwerp,aanvrager,wijzigDatum&status=open&sorteer=wijzigDatum`

> [API principe: Indien representatie op maat wordt ondersteund, dan conform dit principe](#api-09)

### Hoe om te gaan met acties die niet passen in het CRUD model?

Er zijn ook resource-acties die niet data manipulatie (CRUD) gerelateerd zijn. Een voorbeeld van dit soort acties zijn: het wijzigen van de status (activeren en deactiveren) van een resource of het markeren (star) van een resource. Afhankelijk van het type actie zijn er drie manieren om dit aan te pakken:

1. Herstructureer de actie zodat deze onderdeel wordt van een resource. Dit werkt als de actie geen parameters nodig heeft. Bijvoorbeeld een activeeractie kan worden toegewezen aan een booleaans veld `geactiveerd` dat bijgewerkt wordt via een `PATCH` op de resource.

2. Behandel de actie als een sub-resource. Bijvoorbeeld, een aanvraag markeren met `PUT /aanvragen/12/markeringen` en verwijderen van de markering met `DELETE /aanvragen/12/markeringen`. Om de REST principes volledig te volgen moet ook de `GET` methode voor deze sub-resource beschikbaar zijn.

3. Soms is er geen logische manier om een actie aan een bestaande resource te koppelen. Een voorbeeld hiervan is een zoekopdracht over meerdere resources heen. Deze actie kan niet worden toegekend aan een specifieke resource. In dit geval is de keuze voor een zelfstandig service-eindpunt `/_zoek` het meest logische. Gebruik werkwoorden in gebiedende wijs om het onderscheid t.o.v. "echte" resource endpoints zo duidelijk mogelijk te maken. Dit is vanuit het perspectief van de gebruiker het meest logisch ontwerp.

In de Nederlandse API-strategie wordt gekozen voor manier 2 en 3.

> [API principe: Acties die niet passen in het CRUD model worden een sub-resource](#api-10)

## Documentatie

Een API is zo goed als de bijbehorende documentatie. De documentatie moet gemakkelijk te vinden, te doorzoeken en publiekelijk toegankelijk zijn. De meeste ontwikkelaars zullen eerst de documenten doornemen voordat ze starten met de implementatie. Wanneer de documentatie is weggestopt in pdf-bestanden en achter een inlog, dan vormt dit een drempel voor ontwikkelaars om aan de gang te gaan en de documentatie is niet vindbaar met zoekmachines.
Specificaties (documentatie) zijn beschikbaar als Open API Specification (OAS) V3.0 of hoger.

> [API principe: Documentatie is gebaseerd op OAS 3.0 of hoger](#api-16)

> [API principe: Documentatie is in het Nederlands tenzij er sprake is van bestaande documentatie in het Engels of er sprake is van een officieel Engelstalig begrippenkader](#api-17)

De documentatie dient voorzien te zijn van voorbeelden inclusief complete request en response cycli. Het moet mogelijk zijn om direct vanuit de documentatie verzoeken te testen (uit te voeren). Daarnaast is elke fout beschreven en voorzien van een unieke foutcode die gebruikt kan worden om de fout op te zoeken.

Als een API in productie is mag het "contract" (koppelvlak) niet zonder voorafgaande kennisgeving worden gewijzigd. De documentatie moet voorzien zijn van een uitfaseringsplanning (deprecation schedule) en alle details van de wijziging bevatten. Wijzigingen worden via een publiek toegankelijke blog als changelog bekendgemaakt en via een mailinglijst. Hierbij wordt primair gebruik gemaakt van de emailadressen die zijn gekoppeld aan de uitgifte van API-keys.

> [API principe: Wijzigingen worden gepubliceerd met een uitfaseringschema](#api-18)

### Best practice(s)

> [API principe: OAS via basis-URI beschikbaar in JSON-formaat](#api-51)

## Versionering

API's zijn altijd geversioneerd. Versioneren zorgt voor een soepele overgang bij wijzigingen. De oude en nieuwe versies worden voor een beperkte overgangsperiode (één jaar) aangeboden. Er worden bovendien maximaal 3 versies van een API ondersteund. Afnemers kiezen zelf het moment dat ze overschakelen van de oude naar de nieuwe versie van een API, als ze het maar voor het einde van de overgangsperiode is.

> [API principe: De overgangsperiode bij een nieuwe API versie is maximaal 1 jaar](#api-19)
>
> Oude en nieuwe versies (max. 3) van een API worden voor een beperkte overgangsperiode (1 jaar) naast elkaar aangeboden.

In de URI van de API wordt alleen het major versienummer opgenomen. Hierdoor is het mogelijk om verschillende versies van een API via de browser te verkennen.

Het versienummer begint bij 1 en wordt met 1 opgehoogd voor elke major release waarbij het koppelvlak niet backward compatible wijzigt. De minor en patch versienummers staan altijd in de response-header van het bericht zelf in het formaat `major.minor.patch`.

De header (zowel request als response) is als volgt gedefinieerd:

|HTTP header|Toelichting|
|-|-|
|`API-Version`|Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Bijvoorbeeld: `API-version: 1.2.56`|

Via de optionele request-header kan één minor/patch-versie worden aangewezen. Hiermee wordt bedoeld dat in (pre)productie- of aansluitomgeving naast bijvoorbeeld v1 en v2 (de aangewezen versies die alleen bereikbaar zijn via de URI's) ook nog de mogelijkheid bestaat om één "oudere" of "nieuwere" versie van deze API's aan te wijzen en via de request-header te benaderen. De onderstaande URI's wijzen bijvoorbeeld naar de aangewezen productie-release van de API die alleen bereikbaar zijn via de URI:

`https://service.omgevingswet.overheid.nl/publiek/catalogus/api/raadplegen/v1`

`API-version: 1.0.2` (response header)

`https://service.omgevingswet.overheid.nl/publiek/catalogus/api/raadplegen/v2`

`API-version: 2.1.0` (response header)

Het weglaten van de request-header (`API-version: x.y.z`) selecteert altijd de "aangewezen" productieversie. Indien er voor V2 ook één andere aangewezen versie beschikbaar is, met bijvoorbeeld versienummer V2.1.1, dan kan deze via hetzelfde basis endpoint worden aangeboden en geselecteerd door het meegeven van de juiste request-parameter:

`API-version: 2.1.1` (request header)

`https://service.omgevingswet.overheid.nl/publiek/catalogus/api/raadplegen/v2`

`API-version: 2.1.1` (response header)

Het toevoegen van een endpoint of een niet verplichte attribuut aan de payload zijn voorbeelden van wijzigingen die backward compatible zijn.

> [API principe: Alleen het major versienummer is onderdeel van de URI](#api-20)
>
> In de URI wordt alleen het major versienummer opgenomen. Minor versienummer en patch versienummer worden in de header van het bericht zelf opgenomen. Het uitgangspunt dat hierbij wordt gehanteerd is dat minor versies en patches geen impact hebben op bestaande code, maar major versies wel.

Een API zal nooit helemaal stabiel zijn. Verandering is onvermijdelijk. Het is belangrijk hoe met deze verandering wordt omgegaan. Goed gedocumenteerde en tijdig gecommuniceerde uitfaseringsplanningen zijn in het algemeen voor veel APIgebruikers werkbaar.  


Klik op de onderstaande link om het document, waarin de extensies worden beschreven, te openen.

<section data-format="markdown" class="informative">
## Extensies
        [Extensies](https://geonovum.github.io/KP-APIs/Werkgroep%20API%20strategie/extensies/)
</section>