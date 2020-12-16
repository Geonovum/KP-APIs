## API Capability Model

Om als organisatie API's aan te bieden aan andere partijen op een gecontroleerde beheersbare manier moet je bepaalde functionaliteit bieden, processen inregelen en ondersteuning aanbieden. Het onderstaande API Capability model geeft weer aan welke onderwerpen men aandacht moet schenken bij het inrichten van dienstverlening via API's


![alt text](media/API-Capability.png)



### Ontwikkelaarsondersteuning
Ontwikkelaarsondersteuning gaat over de capabilitlies die er voor moeten zorgen dat ontwikkelaars eenvoudig aan de slag kunnen met het ontwikkelen van API Clients en kennis kunnen opdoen en uitwisselen bij de bouw van de API Clients. 

Over het algemeen biedt een API leverancier capabilities ten behoeve van ontwikkelaarsondersteuning in een ontwikkelaarsportaal.

#### Ontwikkelaar onboarding
Voordat een ontwikkelaar applicaties kan ontwikkelen die gebruik maken van aangeboden API's, moet deze ontwikkelaar zich registreren bij de API aanbieder. Hierbij is het belangrijk dat een goede balans wordt gezocht tussen het bieden van een zo eenvoudig en snel mogelijk onboarding proces (bij voorkeur self-service) en het borgen van afspraken voor het gebruik van de API's door de ontwikkelaar, bijvoorbeeld door het ondertekenen van gebruikersvoorwaarden en het valideren van de rechtmatigheid van de ontwikkelaar.

Bij ontwikkelaar onboarding moet ook worden gedacht aan het zich kunnen afmelden van ontwikkelaars, of het afsluiten van ontwikkelaars in het geval gebruikersvoorwaarden worden overschreden.
#### Applicatie & Sleutel beheer
Clients/applicaties die gebruik maken van API's moeten over het algemeen worden geregistreerd bij de aanbieder van deze API's.

Applicatie & sleutel beheer houdt zich bezig met het kunnen beheren van geregistreerde API Clients en daarbij behorende credentials en sleutels. 

Hierbij kan worden gedacht aan het toekennen of afnemen van privileges door de API aanbieder en het kunnen inzien van informatie over de API Client, zoals bijvoorbeeld credentials of certificaten waarmee de API Client zich bij de API aanbieder kan authenticeren, door ontwikkelaars van de API Client.
#### API Discovery
Aangeboden API's moeten vindbaar zijn voor partijen die er gebruik van willen maken. API Discovery richt zich op deze vindbaarheid van API's.

API Discovery kan op verschillende manieren toegepast worden. Allereerst kan API Discovery worden toegepast door een API aan te bieden welke referenties biedt naar de verschillende API's of kan de lijst met aangeboden API's in developer documentatie worden opgenomen. De op de ‘Pas toe of leg uit-lijst’ van het Forum Standaardisatie opgenomen OpenAPI 3 (OAS 3) specificatie voorziet in deze beide manieren.

Ook bestaan er zoekmachines die aangeboden API's op een centrale locatie toegankelijk maken, waardoor de vindbaarheid van API's nog meer wordt vergroot. Een voorbeeld van een dergelijke zoekmachine die wordt gebruikt binnen de overheid is [developer.overheid.nl](https://developer.overheid.nl).

#### Dynamische documentatie
Traditioneel worden webservice endpoints beschreven middels statische documentatie welke (bijvoorbeeld als PDF document) beschikbaar wordt gesteld aan aansluitende partijen. Door de dynamische aard van API's en de mogelijkheden die door tools worden geboden, is het bij API's gebruikelijk documentatie dynamisch aan te bieden. Hierbij is het mogelijk om direct vanuit de documentatie API verzoeken op te stellen en uit te voeren.

API specificaties op basis van OpenAPI 3 bieden de mogelijkheid om dynamische documentatie te genereren.

#### Sandbox
Traditioneel worden webservice client implementaties op basis van documentatie en wsdl definities ontwikkeld, waarbij een volledig ontwikkelde client applicatie toegang krijgt tot een preproductie omgeving om de implementatie te toetsen.

Bij API Client ontwikkeling is het gebruikerlijk om, naast het gebruik van dynamische documentatie, gebruik te maken van sandbox API's. Dit zijn API's welke al vanaf de start van de app ontwikkeling (of zelfs daarvoor, vanuit de dynamische documentatie) natuurgetrouwe API verzoeken kunnen worden uitgevoerd. Hierdoor krijgen app ontwikkelaars direct feedback over hoe hun applicaties aansluiten op de geboden API's.

Bij het aanbieden van sandbox API's, is het goed om na te gaan hoe natuurgetrouw deze sandbox moet zijn. Uitersten zijn enerzijds een stub met daarin een aantal basis Use Cases uitgewerkt en anderzijds een proefomgeving met een kleine subset aan productie-like geanonimiseerde data welke al dan niet per client gescheiden is en regelmatig wordt ververst indien data vanuit de sandbox aanpasbaar is.

#### Community Samenwerking
Naast het kunnen inzien van documentatie en het gebruik maken van sandbox API's, is het belangrijk dat ontwikkelaars van API Clients terecht kunnen met vragen of opmerkingen. Hierbij kan in het meest rudimentaire geval bijvoorbeeld worden gedacht aan een feedback formulier en een veelgestelde vragen pagina, maar ook aan een forum waarbij gebruikers elkaar kunnen helpen en de aanwezigheid van de API aanbieder op publieke fora (bijvoorbeeld Stack Overflow of Super User), social media (bijvoorbeeld Twitter) of invite-only discussie platformen (bijvoorbeeld Discord of Slack).

### API Registratie

- API Resource Registratie

- API ResourceDiscovery

- Versionering

- Resource health status

- API Typologieën (Intern, Partner, Open)

- Registratie API

### API Lifecycle Management

- Versiebeheer

- Teamsamenwerking

- ContinuousDeployment

- ReleaseManagement

- Werkstroommanagement

- ContinuousIntegration

- Issue Tracking

- API Ontwerp

- API Ontwikkeling

### API Architectuur

- DataTransformaties

- Mediatie /Orkestratie

- Caching

- API Beveiliging

- Analytics

- ProtocolConversies

- Logging / Audit

- Trail

- Policyenforcement

- Back-endAdapters

- Authenticatie /Authorisatie

- Verbinding /Sessie beheer

- Rate Limiting /Throttling

- SLA Management

- Routing

### API Management

- API PolicyDefinitie

- GatewayBeheer

- SleutelManagement

- API Monitoring& Alerting

- Beheer API

- Foutafhandeling

- Gebruikers en Rol Beheer


>Opmerking: Zie ook huidige vulling op : https://geonovum.github.io/KP-APIs/API-strategie-algemeen/#diensten-toegang-api-management 
(De capabilities kunnen mogelijk gebruikt worden om dit model uit te breiden)

