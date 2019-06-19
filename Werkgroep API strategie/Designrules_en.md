# API designrules

> *This chapter aims to describe a set of design rules for the unambiguous provision of RESTful APIs (henceforth abbreviated as APIs). This achieves a predictable governments so developers can easily start consuming and combining APIs. Until now, this chapter does not include rules for other types of APIs, e.g. SOAP. In the addendum *API-principles*, the set of rules has been condensed into a number of core principles to keep in mind for the design and creation of APIs.*

## Introduction

More and more government organisations implement and provide RESTful APIs. In many cases, these APIs provide access to data sets complementary to existing interfaces, e.g. SOAP and WFS. These APIs aim to be developer-friendly (see also paragraph 2.6 and chapter 3) and quick to implement. While this is a commendable aim, it does not shield a developer from a steep learning curve getting to know every new API. A developer has to understand how every API can be used, but there should have to not be a difference in the technical implementation. The Knowlegde Platform APIs aims to provide a set of design rules or prinicples for APIs to align their technical operation across government organisations and to facilitate their implementation. This chapter describes the widely applicable set of design rules. Hopefully, government organisations will adopt these design rules in their own API strategies and provide feedback about exceptions and additions to subsequently improve these design rules.

Keep in mind, these design rules should be applied in the creation of an API only if the functionality described is desirable.

All paragraphs in this chapter, except for paragraph 4.5 are **Normative**. Paragraph 4.5 is **Informative**.

## RESTful principles

The most important prinicple of REST is the seperation of the API in logical resources (*things*). The resources describe the information of the *thing*. These resources are manipulated using HTTP-requests and HTTP-operations. Each operation (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) has a specific meaning.
> HTTP also defines operations, e.g. `HEAD`, `TRACE`, `OPTIONS` en `CONNECT`. In the context of REST, these operations are hardly ever used and have been excluded from the rest of this chapter.


|Operation|CRUD|Description|
|-|-|-|
|`POST`|Create|Create resources that represent collections (i.e. `POST` adds a resource to a collection).|
|`GET`|Read|Retrieve a resource from the server. Data is only retrieved and not altered.|
|`PUT`|Update|Replace a specific resource. Is also used as a *create* " if the resource at the indicated identifier/URI does not exist yet.|
|`PATCH`|Update|Partially modify an existing resource. The request contains the data that have to be changed and the operations that modify the resource in the designated JSON merge patch format (RFC 7386).|
|`DELETE`|Delete|Remove the specific resource.|

For each operation one has to specify whether it has to be *safe* and/or *idempotent*. This is important, because clients and middelware rely on this.

> **Safe (read-only)**
>
> Safe (read-only) in this case means that the semantics has been defined as read-only. THis is important, because clients and middelware like to use caching.

> **Idempotent**
>
> Idempotent means that multiple, identical requests have the same effect as one request.

|Operation|Safe|Idempotent|
|-|-|-|
|`POST`|No|No|
|`GET`, `OPTIONS`, `HEAD`|Yes|Yes|
|`PUT`|No|Yes|
|`PATCH`|No|Optional|
|`DELETE`|No|Yes|

> [API principle: operations are *Safe* and/or *Idempotent*](#api-01)

REST makes use of the client stateless server design principle derived from client server with the additional constraint that it is not allowed to maintain the state at the server. Each request from the client to the server has to contain all information required to process the request without the need to use state-information at the server.

> [API principle: do not maintain state information at the server](#api-02)

### What are resources?

A fundamental concept in every RESTful API is the resource. A resource is an object with a type, attributes, relation with other resources and a number of operations to modify them. Resources are referred to using nouns (not verbs) that are relevant from the perspective of the user of the API. Operations are actions applied to these resources. Operations are referred to using verbs that are relevant from the perspectie of the user of the API.

One can translate internal data models as-is to resources, but not by definition. The point is to not hide all relevant implementation details. Some example resources are: *aanvragen* (applications), *activiteiten* (activities), *panden* (buildings), *rijksmonumenten* (national monuments), and *vergunningen* (permits).

Once the resources have been identified, one determines the operation that are applicable and how the API supports them. RESTful APIs perform CRUD (Create, Read, Update, Delete) operations using HTTP operations:

|Request|Description|
|-|-|
|`GET /rijksmonumenten`|Retrieves a list of national monuments|
|`GET /rijksmonumenten/12`|Retrieves a specific national monument|
|`POST /rijksmonumenten`|Creates a new national monument|
|`PUT /rijksmonumenten/12`|Modifies national monument #12 completely|
|`PATCH /rijksmonumenten/12`|Modified national monument #12 partially|
|`DELETE /rijksmonumenten/12`|Deletes national monument #12|

REST applies existing HTTP operations to implement functionality at one service endpoint. This removes the requirement for additional URI naming conventions and the URI structure remains clear.

> [API principle: Only apply default HTTP operations](#api-03)

> [API principle: Leave off trailing slashes at API endpoints](#api-48)

### Language usage

Since the exacy meaning of concepts are often lost in translation, resources are the underlying entities and attributes are defined in Dutch.

> [API principle: Define interfaces in Dutch unless these is an official English glossery](#api-04)

### Interface nomenclature: singular or plural?

Here, the *Keep It Simple Stupid* (KISS) rule is applicable. Although grammatically, it may feel wrong to request a single resource using the plural of the resource, it is a pragmatic choice to refer to endpoints consistently using plural. For the user it is much easier to not have to keep in mind singular and plural (*aanvraag/aanvragen, regel/regels*). Furthermore, this implementation is much more straightforward as most development frameworks are able to resolve both a single resource (`/aanvragen/12`) and multiple resources (`/aanvragen`) using one controller.

> [API principle: Use plural nouns to indicate resources](#api-05)

### How to go deal with relations?

If a relation can only exist in the contexst of another resource (1 to n relation), then the dependent resource (child) can only be retrieved through the parent. The next example explains this. A status belongs to one application. Statuses can be retrieved through the endpoint `/aanvragen`:

|Request|Description|
|-|-|
|`GET /aanvragen/12/statussen`|Retrieves a list of statuses of application #12|
|`GET /aanvragen/12/statussen/5`|Retrieves a specific status (#5) of application #12|
|`POST /aanvragen/12/statussen`|Creates a new status for application #12|
|`PUT /aanvragen/12/statussen/5`|Modifies status #5 of application #12 completely|
|`PATCH /aanvragen/12/statussen/5`|Modifies status #5 of application #12 partially|
|`DELETE /aanvragen/12/statussen/5`|Deletes status #5 of application #12|

> [API principle: Create relations of nested resources within the endpoint](#api-06)

In case of an n-to-n relation, there are various ways to retrieve a resource. The following requests respond identically:

|Request|Description|
|-|-|
|`GET /aanvragen/12/activiteiten`|Retrieves a list of activities for application #12|
|`GET /activiteiten?aanvraag=12`|Retrieves a list of activities, filtered by application #12|

In case of an n-to-m relation, the API supports the retrieval of individual resources anyway, at least providing the identifier of the related resource (relation). The user has to request the endpoint of the related resource (relation) to retrieve this one. This is referred to as *lazy loading*. The user decides whether to load the relation and when.

### Custom representation

The user of an API does not alway require the complete representation (i.e. all attributes) of a resource. Providing the option to select the required attributes in the requests reduces network traffic (relevant for light-weight applications), simplifies the use of the API and makes it adjustable (fit-for-use). The query parameter `fields` supports this usage. The query parameter accepts a comma-separated list of field names. The result is a custom representation. For example, the following request retrieves sufficient information to show a sorted list of applications (*aanvragen*):

In the case of HAL, linked resources are embedded in the default representation. Applying the aforementioned `fields` parameter, the contents of the  body can be customised as required. 

`GET /aanvragen?fields=id,onderwerp,aanvrager,wijzigDatum&status=open&sorteer=wijzigDatum`

> [API principle: Implement custom representation through the `fields` parameter](#api-09)

### How to implement operations that do not fit the CRUD model?

There are resource operations that are not related to data manipulation (CRUD). Examples of this kind of operations are: changing the state (activate and deactivate) of a resource and marking (starring) a resource. Depending on the type of operation there are three approaches:

1. Restructure the operation to incorporate it into the resource. This approach applies if the operation does not require any parameters. For example, an activation operation can be assigned to a boolean field `geactiveerd` that can be modified by a `PATCH` to the resource.

2. Treat the operation as a sub-resource. For example, mark an application by `PUT /aanvragen/12/markeringen` and remove a mark by `DELETE /aanvragen/12/markeringen`. To fully follow the REST principles, also provide the `GET` operation for this sub-resource.

3. Sometimes there is no logical way to link an operation to an existing resource. An example of this kind of operations is a search across multiple resources. This operation cannot be assigned to anyone specific resource. In this case, the creation of an independent service endpoint `/_zoek` is the most obvious solution. Use the imperative mood of a verb to distinguish these endpoints from *genuine*  endpoints that use the indicative mood of a verb.

The Dutch API strategy prefers approach 2 and 3.

> [API principle: Implement operations that do not fit the CRUD model as sub-resources](#api-10)

## Documentation

An API is as good as the accompanying documentation. The documentation has to be easily findable, searchable and publicly accessible. Most developers will first read the documentation before they start the implementation. Hiding the documentation in PDF documents and/or behind a login creates a barrier not only for developers but also for search engines. Specifications (documentation) are avaialble as Open API Specification (OAS) v3.0 or newer.

> [API principle: Documentation conforms to OAS v3.0 or newer](#api-16)

> [API principle: Documentation is in Dutch unless there is existing documentation in English or there is an official English glossary availble](#api-17)

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
