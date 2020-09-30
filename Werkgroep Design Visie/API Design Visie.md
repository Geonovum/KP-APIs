---
description: een praktische gids voor jouw API journey
---

# API Design Visie

Deze API Design Visie is bedoeld om iedereen die API’s ontwerpt voor de overheid te helpen met de vraag: “wat wil ik met mijn API bereiken?” We willen handvatten aanreiken die je kunnen helpen om die doelen ook echt te halen. Niet door voor te schrijven hoe het moet, maar door inzicht te geven in de keuzes die je moet maken tijdens jouw API design reis. Onze bijdrage is hopelijk dat je deze keuzes minder automatisch en bewuster kunt maken. Daarbij nemen we je zoveel mogelijk mee in wat we tot nu toe als team hebben geleerd in het programma Haal Centraal, o.a. door voorbeelden uit onze ervaringen te delen. Als deze visie hier en daar onbedoeld gekleurd is door het domein en de doelen van Haal Centraal, dan weet je waar dat vandaan komt. Weet dan dat het ons niet gaat om het delen van onze visie voor het realiseren van onze \(programma\)doelstellingen, maar om het tot leven brengen van die van jou.

### Waarom API's?

Het gebruik van API’s is geen doel op zich. API’s zijn een middel om een aantal belangrijke strategische lange termijn doelen te bereiken. Al deze strategische doelen kunnen worden gerealiseerd met behulp van API's, ongeacht de gekozen stijl. Anders gezegd: als je hele andere doelen op je verlanglijstje hebt staan dan die hieronder zijn opgesomd, is het maken van een API waarschijnlijk geen goed idee.

## Strategische doelen

_Betere interoperabiliteit_  
De belangrijkste intrinsieke eigenschap van een API is interoperabiliteit. Doel van een API is immers om applicaties te laten samenwerken en data uit te wisselen. API’s kunnen eenvoudig steeds opnieuw in applicaties worden verwerkt om nieuwe business requirements vorm te geven \(service composability\).

_Meer Federatie_  
Federatie is de eenwording van verschillende omgevingen die onafhankelijk van elkaar worden bestuurd en gemanaged. Omdat API’s een **contract** hebben waarin is vastgelegd welke functionaliteit de API aanbiedt, blijft de achterliggende implementatie voor afnemers verborgen. Dat maakt het mogelijk om API’s individueel te besturen en door te ontwikkelen. De levensloop van de API wordt immers niet bepaald door het systeem dat de API aanbiedt. Je kun de achterliggende implementatie vervangen \(door software van een ander leverancier\) of verplaatsen \(naar de cloud!\) zonder dat een consumer daar iets van merkt. Daarom is het gebruik van API’s niet alleen goedkoper, maar vaak ook een duurzamer alternatief voor zelfbouw. Mits de besturing, het beheer en de doorontwikkeling van API’s goed geregeld is natuurlijk. Zo ontstaat er met iedere API een nieuwe mogelijkheid om functionaliteit te outsourcen naar een ander systeem, domein, agile development team, organisatie etc. die de API/microservice aanbiedt en onderhoudt. Daarom is er bij iedere nieuwe API sprake van meer federatie.

_Meer leverancier-afwisselingsmogelijkheden_  
Door API’s met een gestandaardiseerd en een “leverancier neutraal” contract aan te bieden vergroot je de mogelijkheden om voor \(delen van\) een oplossing of applicatie een andere leverancier te nemen. Dit vergroot jouw opties en die van jouw afnemer om zoveel mogelijk “best of breed” software in huis te halen, en vermindert jullie afhankelijkheid van leveranciers van legacy.

_Betere wendbaarheid en afstemming van technologie op de business_  
Hoe snel en hoe goed zijn jouw systemen in staat om invulling te geven aan nieuwe businesswensen? Complexe businesslogica kun je opdelen in flexibele API’s die je ieder afzonderlijk relatief snel kunt verbeteren, uitbreiden en combineren, zodat jij en jouw afnemers sneller en beter in staat zijn de business te volgen. Want stel je voor dat je het allemaal zelf moet bouwen en onderhouden.

_Hogere Return On Investment \(ROI\)_  
ROI representeert de waarde van iets in relatie tot de kosten van ontwikkeling en beheer. Voor agnostische API’s \(agnostisch ten opzichte van het gebruiksdoel\) geldt dat ze “multi purpose” zijn en in heel veel verschillende domeinen kunnen worden ingezet en gebruikt. Zo kan die ene Haal Centraal API die NAW van een persoon levert alleen al in 350 gemeenten voor tientallen verschillende processen worden gebruikt. Hoe meer \(her\)gebruik, hoe hoger de ROI.

_Lagere IT last_  
Het gebruik van API’s leidt tot een lagere IT last voor organisaties door minder redundantie \(want hergebruik!\) en lagere operationele kosten. Daarnaast wordt de omvang van de IT last kleiner omdat minder overhead is gemoeid met bestuur en doorontwikkeling.

## API Styles

De eerste echte keuze bij het ontwerp van jouw API is de keuze voor een bepaalde API style. Welke style kies je voor jouw eerst volgende API project? Een REST API met JSON of XML, of kies je voor gRPC, GraphQL of toch iets anders? De vraag is niet welke API style de beste is, maar welke API style het beste is voor het realiseren van jouw doelstelling. Iedere API style zal jouw API andere eigenschappen geven. Het gaat er om een API Style te kiezen die jouw API de beste uitrusting geeft om jouw specifieke probleem op te lossen, en jouw strategische doelen in te vullen.

Realiseer je daarnaast dat dit document een momentopname is, en dat er steeds nieuwe API’s styles bij komen, terwijl andere uit de mode raken. Daarnaast wordt er door de community rond een API style vaak hard gewerkt aan doorontwikkeling, bijvoorbeeld om bepaalde nadelen van een API style op te heffen. Wat we vandaag opschrijven over een bepaalde API Style, kan morgen dus helemaal anders zijn. _**\#\#\#\#grafiek over de populariteit van API styles?\#\#\#\#\#**_

Wat bedoelen we met API styles, en welke API styles komen aan bod? We willen in ieder geval de volgende API styles behandelen:

1. Web API’s \(REST API’s, RESTachtige API’s en de query API GraphQL\)
2. Publish subscribe API’s \( Websub, Webhooks, Solace, Google Cloud Pub/Sub\)
3. Event Sourcing \(Kafka, MS Event Hubs\)
4. RPC API’s \(gRPC\)

In het bovenstaande lijstje staan architectuurstijlen, protocollen en frameworks kris kras door elkaar. En ja inderdaad, daarmee vergelijken we appels met peren met koeien. Het is de vraag hoe erg dat is. Want hoe je het ook wendt of keert, uiteindelijk zul je er één moeten kiezen voor jouw volgende API project!

Wat is een API architectural style? Een API architecural style is een set beperkingen of “constraints” die jouw API impliciet bepaalde eigenschappen geven als je ze toepast. Als je bijvoorbeeld loose coupling toepast, krijg je daar _evolvability_ of _modifiability_ voor terug. Als je het “stateless” constraint toepast, dan krijg je daar zelfs twee goede eigenschappen voor terug: _reliability_ \(betrouwbaarheid\), omdat je idempotente vragen probleemloos kunt herhalen, en _scalability_ \(schaalbaarheid\) omdat de server de toestand van de client niet hoeft te onthouden. Maar zoals altijd heeft ook hier ieder voordeel z’n nadelen, en zijn de eigenschappen die je afdwingt door de toepassing van een bepaalde constraint niet altijd positief. Zie het als een geneesmiddel met bijwerkingen. Bijvoorbeeld, het toepassen van het REST uniform interface contraint levert eenvoud of complexiteitsreductie \(_simplicity_\) op maar gaat ook ten koste van de efficiëntie van de API calls. Denk maar eens aan het aantal requests die je met REST API’s moet doen voordat je het hele antwoord hebt op een complexe vraag.

M.a.w. ieder product heeft andere eigenschappen nodig en een daar bij passende API style die voor die eigenschappen zorgt. Uitgangspunt is steeds dat deze eigenschappen moeten zorgen dat jouw strategische doelen en jouw business requirements worden ingevuld.

### API Product Constraints

De ideale set eigenschappen van een API worden bepaald door de product constraints. Bijvoorbeeld, de product owner geeft aan dat het product veel verschillende externe consumers heeft en dat er veel releases te verwachten zijn. In dat geval is het erg belangrijk dat de API “evolvable” is. Je wil klanten waar je weinig controle over hebt graag goed bedienen, en niet om de haverklap opzadelen met breaking changes. Om de evolvability eigenschap te krijgen moet je de API Style constraints “loose coupling” en “service abstraction” toepassen.

Het begint dus bij het werk van de Product Owner: het maken van een inventarisatie van de API product constraints. Die gaan met name over de business, maar ook over de omgeving en de \(cultuur van de\) organisatie of het domein waarin je opereert:

* Wat zijn de user stories van de klanten die je met jouw product gaat bedienen?
* Wat zijn de niet functionele business en product requirements van deze klanten?
* Wat zijn de consumer constraints? Heb je consumers die heel veel of juist weinig ervaring hebben met API’s, vormen ze een homogene groep, scoren ze uniform of heel verschillend op het capability maturity model?
* Zijn jouw klanten bekend met een bepaalde API style? Of zullen ze zich op de API style moeten inleren? Hebben ze daar zin in? Is daar tijd voor?
* Verwacht je veel doorontwikkeling en wijzigingen in het domein of op het product?
* Wat zijn de eisen aan de time to market? Hoe snel moet je in staat zijn om wijzigingen aan klanten beschikbaar te stellen? 
* Hoeveel geld is er beschikbaar voor het API project, wat mag het kosten? Het maakt nogal wat uit of je een simpele REST API implementeert of een Kafka implementatie gaat opleveren.
* Is er bestuurlijke en/of domeinspecifieke regelgeving waaraan je compliant moet zijn of waarmee je rekening mee moet houden? Denk bijvoorbeeld aan de AVG of andere wetgeving.
* Met welke technologie heeft de organisatie die jouw API gaat ontwikkelen en beheren de meeste kennis en ervaring? Een Kafka implementatie is misschien beter op z'n plaats in een Java omgeving dan in een op C\# en Microsoft georiënteerde organisatie.
* Wat is hip en happening, welke technologie is supercool en wil ik echt graag uitproberen!?  Dat is dus GEEN product constraint 😂! Het zal je echter verbazen hoe vaak dit de echte reden is waarom voor een API style wordt gekozen. Cool... let's do Kafka!   

Er zijn ongetwijfeld nog andere "beperkende" factoren die een rol spelen in jouw project. Luister er naar, en neem ze mee in jouw inventarisatie en overwegingen!

### API Style matching

Op basis van de product constraints zoek je als architect, designer of ontwikkelaar de beste match met een API Style. Het recept daarvoor is eenvoudig. Ieder API product heeft andere eigenschappen nodig. Daarvoor hoef je van iedere API Style alleen maar te weten:

1. welke API basis eigenschappen je met welke API Style afdwingt
2. wat de status is van het ecosysteem rondom de API Style

Hieronder zijn de gewenste eigenschappen, de ecosysteemoverwegingen en de API style constraints in een overzichtje gezet:

| Eigenschappen | Eco-systeem/overwegingen | Constraints |
| :--- | :--- | :--- |
|  |  |  |
| Performance | Maturity | Client-server |
| Scalability | Enterprise readiness | Stateless |
| Simplicity | Tooling | Cache |
| Modifiability/ Evolvability | Community | Layered System |
| Visibility | Resources on API Style | Code-On-Demand |
| Portability | Ease of publication | Uniform Contract |
| Reliability |  |  |
| Discoverability |  |  |
| Type Safety |  |  |
| Ease of development |  |  |
| Costs |  |  |

### API ecosysteem

Het ecosysteem rondom de API Style, deze gaan meer over de sociale omgeving van de API style dan over techniek. Let hierbij op:

1. Volwassenheid  Hoe volwassen is de API Style? De volwassenheid van de API style zegt vaak ook iets over de kans dat jouw klanten er mee bekend zijn.
2. Enterprise Readiness   Is deze style klaar voor gebruik in grote ondernemingen of overheden? Of wordt er nog volop geëxperimenteerd en is er nog geen ervaring met toepassing van de API Style in grote organisaties?
3. Beschikbare tooling  Hoeveel tooling is er beschikbaar om er mee te werken, en hoe geavanceerd is die?
4. Grootte van de community   Hoeveel van jouw klanten zijn bekend met de toepassing van de API style? Zijn er boeken en andere publicaties? De grootte van de community zegt vaak veel over het aantal oplossingen en de beschikbare hulp die je kunt inroepen/verwachten als je ergens tegenaan loopt.
5. Ease of publication   Hoe gemakkelijk is het om de API extern te publiceren en opbrengsten te genereren met een API op basis van deze API style? 

## WebAPI's

### REST

Representational State Transfer is een gedistribueerde architectuurstijl gebaseerd op de onderliggende architectuur van het World Wide Web. Het doel was een schaalbare en robuuste architectuur. Het bereiken van deze eigenschappen is ook het ontwerpdoel van REST.

| Eigenschappen | Eco-systeem/overwegingen | Constraints |
| :--- | :--- | :--- |
|  |  |  |
| Performance | **Maturity** | **Client-server** |
| **Scalability** | **Enterprise readiness** | **Stateless** |
| **Simplicity** | Tooling | **Cache** |
| **Modifiability/ Evolvability** | **Community** | **Layered System** |
| **Visibility** | **Resources on API Style** | **Code-On-Demand \(niet verplicht\)** |
| **Portability** | **Ease of publication** | **Uniform Contract** |
| **Reliability** |  | **HATEOAS \(niet verplicht\)** |
| **Discoverability?** |  | **Content Negotiation \(niet verplicht\)** |
| Type Safety |  |  |
| Ease of development |  |  |
| Costs |  |  |
|  |  |  |
|  |  |  |

Over de super schaalbaarheid van REST en andere open deuren is genoeg geschreven. We pikken de wat lastigere te bereiken eigenschappen er uit om op in te zoomen.

**Performance**

REST beoogt een hoge performance te halen door het gebruik van caches om data dichtbij de verwerking te houden, en door elke interactie met de API simpel en op zichzelf staand te houden \(als een simpele request-response\). Verantwoordelijke constraints: _cache, client-server, stateless._

#### Evolvability/Modifiability

Door het toepassen van het Uniform Contract constraint is een REST service contract al op natuurlijke wijze ontkoppeld van andere aspecten van zijn onderliggende implementatie omgeving. Namen van de REST API zitten in de resource Identifiers, in plaats van specifieke hosts, en technologische afhankelijkheden worden niet zichtbaar gemaakt via methodes, media types of resource identifiers. Behalve het uniform contract constraint heeft REST nog een middel voor het nog verder abstraheren van het contract en loose coupling tussen consumer en provider te vergroten, nl. Hypermedia as the Engine of Application State \(HATEOAS\). Het gebruik van hypermedia kan helpen bij het reduceren van de hoeveelheid hard coded referenties naar resource identifiers in de consumer software. Wijziging van de “gehyperlinkte” resource kan dan minder impact hebben op de consumer. Zie level 3 Hypermedia controls in[ **https://martinfowler.com/articles/richardsonMaturityModel.html**](https://martinfowler.com/articles/richardsonMaturityModel.html)

REST heeft op zichzelf dus al goede kaarten voor het maken van een evolvable API. Echter, wil je een maximaal evolvable REST API, dan moet je daar in het designproces echt je best voor doen door het toepassen van Loose coupling en service abstraction design principles, bijvoorbeeld door het toepassen van het gebruikersperspectief, waarover later meer.

**Simplicity**

REST versimpelt gedistribueerde architecturen door toepassing van het Uniform Contract constraint en het gebruik van gestandaardiseerde media types \(bijvoorbeeld application/JSON\). Hiermee wordt heel succesvol allerlei variatie op dit gebied ontmoedigd. Verantwoordelijke constraint: _Uniform Contract ._

### GraphQL

GraphQL is een RPC query taal voor APIs, waarvoor de laatste tijd heel veel aandacht is en waarvan het gebruik in een stroomversnelling terecht is gekomen. Niet in de laatste plaats door fantastische tooling en Developer Experience. Het is heel goed toepasbaar bij de implementatie van het zgn "backend for frontend pattern" [https://docs.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends](https://docs.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends). Nadelen zijn dat het niet bijzonder goed schaalt, en zeker niet zo evolvable is als REST.   
Omdat het zo gemakkelijk te ontwikkelen en te consumeren is, is het ook een handig middel om feedback te verzamelen over wat klanten precies willen van jouw API.

| Eigenschappen | Eco-systeem/overwegingen | Constraints |
| :--- | :--- | :--- |
|  |  |  |
| Performance | Maturity | **Client-server** |
| Scalability | Enterpride readiness | **Stateless** |
| Simplicity | **Tooling** | Cache |
| Modifiability/ Evolvability | **Community** | **Layered System** |
| Visibility | **Resources on API Style** | Code-On-Demand |
| Portability | **Ease of publication** | **Uniform Contract** |
| Reliability |  |  |
| Discoverability |  |  |
| **Type Safety** |  |  |
| **Ease of development** |  |  |
| **Costs** |  |  |

## Pubsub API Styles

Publish-subscribe API styles worden toegepast als de consumer \(subscriber\) op de hoogte gehouden wil worden van wijzigingen bij de provider \(publisher\). Hiermee voorkom je dat jouw consumer moet gaan pollen om wijzigingen te krijgen en wordt jij als provider niet belast met onnodige bevragingen. Systemen die deze API style implementeren worden ook wel event gedreven systemen genoemd.

Er zijn twee patterns waarmee je een publish-subscribe API style kunt implementeren:

1. Event Notification. De publisher stuurt een event dat er een wijziging heeft plaatsgevonden. Kenmerkend voor de event notification pattern is dat het bericht weinig data bevat, meestal een event type en een link waarmee de wijziging kan worden bevraagd bij de publisher;
2. Event-Carried State Transfer. Het bericht dat de publisher stuurt bij een wijziging bevat direct alle data die nodig is om te weten wat bij de publisher is gewijzigd. Voordeel hiervan is dat een consumer in principe geen extra bevragingen meer hoeft te doen om de wijziging op te halen;

### Webhooks

Bij deze API Style registreert een consumer zijn callback url bij de provider waarmee de provider wijzigingen in het systeem kan doorgeven. Het is in OAS mogelijk om WebHooks voor een API te specificeren d.m.v. het CallBack object.

### Websub

Websub is een W3C recommendation, en is gebaseerd op WebHooks. De API style is niet zo heel erg bekend, wordt ook niet heel veel gebruikt, maar is gestandaardiseerd en heeft veel van REST geleend, waardoor het prima werkt voor het extern aanbieden van publish-subscribe functionaliteit.  
Binnen WebSub is er notie van Hubs die zorgt voor het registreren van subscribers op topics en het notificeren van subscribers wanneer de publisher heeft laten weten dat er een event heeft plaatsgevonden. Een WebSub implementatie kan worden gespecificeerd met behulp van AsyncAPI. Dat is vergelijkbaar met OpenAPI, maar dan voor event gedreven API's.

| Eigenschappen | Eco-systeem/overwegingen | Constraints |
| :--- | :--- | :--- |
|  |  |  |
| Performance | **Maturity** | **Client-server** |
| **Scalability** | **Enterprise readiness** | **Stateless** |
| **Simplicity** | Tooling | **Cache** |
| **Modifiability/ Evolvability** | Community | **Layered System** |
| **Visibility** | Resources on API Style | **Code-On-Demand** |
| **Portability** | **Ease of publication** | **Uniform Contract** |
| **Reliability** |  |  |
| **Discoverability** |  |  |
| Type Safety |  |  |
| Ease of development |  |  |
| Costs |  |  |

## Event Sourcing

Bij Event-Sourcing worden wijzigingen als event opgenomen in een zgn. "append-only store", met als belangrijkste kenmerk dat de data in de store niet kan worden gewijzigd. Voordeel van dit pattern is dat er door alle wijzigingen in de store heel mooi bevraagbare historie aanwezig is, en dat jouw consumers zelf kunnen bepalen wanneer ze de wijzigingen willen bevragen.

### Apache Kafka

Een framework voor event sourcing dat fantastische performance levert, en bovendien betrouwbaar en schaalbaar is. Er zijn wel een paar problemen: het is heel sterk gebaseerd op Java. Je hebt dus echt Java kennis nodig, anders wordt het lastig. Het is ook best lastig om extern aan te bieden omdat het een Kafka native communicatie protocol gebruikt. Er zijn wel manieren voor, evenals bedrijven die zich daarin specialiseren, maar het is allemaal nog erg in ontwikkeling.

| Eigenschappen | Eco-systeem/overwegingen | Constraints |
| :--- | :--- | :--- |
|  |  |  |
| **Performance** | Maturity | **Client-server** |
| **Scalability** | **Enterprise readiness** | **Stateless** |
| Simplicity | Tooling | Cache |
| Modifiability/ Evolvability | Community | Layered System |
| **Visibility** | Resources on API Style | Code-On-Demand |
| Portability | Ease of publication | **Uniform Contract** |
| **Reliability** |  |  |
| **Discoverability** |  |  |
| **Type Safety** |  |  |
| Ease of development |  |  |
| Costs |  |  |

## RPC API's

### gRPC

gRPC is een modern RPC API Style framework, gesteund door Google.

| Eigenschappen | Eco-systeem/overwegingen | Constraints |
| :--- | :--- | :--- |
|  |  |  |
| **Performance** | **Maturity** | **Client-server** |
| Scalability | **Enterprise readiness** | Stateless |
| **Simplicity** | Tooling | Cache |
| Modifiability/ Evolvability | **Community** | Layered System |
| Visibility | Resources on API Style | Code-On-Demand |
| Portability | Ease of publication | Uniform Contract |
| **Reliability** |  |  |
| Discoverability |  |  |
| **Type Safety** |  |  |
| Ease of development |  |  |
| Costs |  |  |

## Design principes

Als je er uit bent en een API Style hebt gekozen, en de bijbehorende constraints implementeert, krijg je een API die in de basis de eigenschappen heeft om jouw strategische doelen te halen en invulling te geven aan jouw product requirements.  
Maar is dat genoeg? Helaas ben je er dan nog niet. Door de keuze van de API style heb je een goed fundament. Je zult echter tijdens het hele design proces je best moeten blijven doen om de door jou gewenste eigenschappen te behouden en te versterken. Een evolvable REST API krijg je echt niet alleen door je te houden aan het uniform contract constraint en hier en daar wat HATEOAS toe te passen. Daar is veel meer voor nodig.

Om de door jou gewenste eigenschappen te behouden en te versterken is een bepaalde aanpak nodig. Die aanpak wordt vaak “service oriëntatie” genoemd en bestaat uit een aantal design principes. Deze principes zijn niet alleen nodig om je te verzekeren van de juiste eigenschappen van je API, maar ook om de strategische doelen te halen waar dit document mee begint.

### Gestandaardiseerd Contract

API’s binnen eenzelfde domein \(bijvoorbeeld de overheid\) conformeren zich aan dezelfde contract design standaarden. Je houden aan de regels leidt tot consistentie binnen en tussen contracten, ook al zijn ze door verschillende teams in verschillende organisaties gemaakt. Developers binnen het domein of land die zo'n gestandaardiseerd contract gebruiken, begrijpen daardoor sneller wat de mogelijkheden van de API zijn.

> _De keuze voor een REST API Style zorgt al voor generieke herbruikbare en gestandaardiseerde methodes en media types. Ook de syntax die je gebruikt om resource identifiers uit te drukken is gestandaardiseerd. De basis is er dus al. Door toepassing van het "gestandaardiseerd contract" principe wordt het API contract nog verder gestandaardiseerd. Voorbeelden hiervan zijn de [API Designrules](https://docs.geostandaarden.nl/api/API-Designrules/), en de [API Designrules Extensions](https://docs.geostandaarden.nl/api/API-Strategie-ext/). Andere voorbeelden zijn: afspreken om een bepaalde http methode beperkt te gebruiken, of het standaardiseren van custom media types in een bepaald domein._


### Loose coupling

“Coupling” gaat over de connectie tussen twee dingen. De mate van “coupling” gaat over de mate van afhankelijkheid tussen die dingen. Dit design principe gaat vooral over het service contract en de achterliggende implementatie. Met de implementatie bedoelen we het systeem dat er voor zorgt dat de provider het servicecontract nakomt. Dat kan code zijn die speciaal voor de API ontwikkeld is op basis van een informatiemodel, maar ook een “ingekapseld” legacysysteem, of een compositie van een aantal andere onderliggende API’s.

Het principe schrijft voor dat _een consumer van de API uitsluitend aan het contract van de API gekoppeld mag zijn, en niet direct aan de onderliggende implementatie_. Dit moet je voorkomen om onafhankelijke beheer en doorontwikkeling van je API contract mogelijk te maken. Hoe meer negatieve “coupling” vormen in het servicecontract terecht komen, hoe groter de beheerlast wordt voor jouw API EN de systemen van afnemers. Heb je een agnostische API die door een groot aantal consumers wordt hergebruikt? Dan kan een negatieve vorm van coupling serieuze problemen en hoge kosten veroorzaken bij jou en bij al jouw afnemers. Met een volledig ontkoppeld contract voorkom je onvoorspelbaar gedrag van je API \(zonder dat het contract breekt\) en onnodige breaking changes bij wijzigingen in de achterliggende implementatie.

> _Een voorbeeld van “tight coupling” waarmee je onnodig een breaking change kunt vooroorzaken is het geven van een speciale betekenis aan specifieke waarden, zoals “00-00-0000” uit de database van jouw bron als “onbekende datum” in je API contract. Wijzigt de bron, dan worden al jouw afnemers opgezadeld met een breaking change en moeten zij hun koppeling opnieuw maken._

> _Een negatieve vorm van coupling ontstaat bijvoorbeeld als je aan de volgorde waarin de bron iets levert een bepaalde betekenis toekent omdat jouw bron dat altijd zo doet. Bijvoorbeeld, OUDER1 is altijd de vader en OUDER2 is altijd de moeder. Je kunt je voorstellen wat er gebeurt als daar \(onbedoeld\) iets aan verandert. Dit wordt ook wel “implementation bleed” genoemd, en is erger dan het onnodig veroorzaken van een breaking change die van tevoren wordt aangekondigd en gemanaged. Omdat het contract niet breekt, merk je de fout vaak niet op, of te laat als er iets fout is gegaan. Bijvoorbeeld in de dienstverlening van jouw afnemer… 😥_

### API Abstractie

_Het API contract bevat alleen essentiële informatie en de informatie over de API beperkt zich tot wat is gepubliceerd in het service contract._  
De nadruk van dit principe ligt op het zo veel mogelijk verbergen van onderliggende details. Het zal je niet verbazen dat dit principe direct het principe van Loose Coupling ondersteunt, en mede bepaalt in welke mate dit haalbaar is. Door het contract te beperken tot de essentie verleng je de houdbaarheid van het API contract zo veel mogelijk en geef je de maker van de API zo veel mogelijk vrijheid om de onderliggende implementatie door te ontwikkelen.

De crux van API abstraction zit hem in het antwoord op de vraag: wat is essentiële informatie? Abstractie van technologie gaat over de metadata die de technische implementatie van de onderliggende service logica beschrijft \(bijvoorbeeld: deze API kun je aanroepen met een op JSON gebaseerd media type\). In welke taal de implementatie is geprogrammeerd \(bijv. Java\) blijft voor jouw afnemer verborgen. Abstractie van programmalogica gaat over de metadata die beschrijft hoe de API zijn mogelijkheden voor de afnemer uitvoert \(GetIets, UpdateIets etc.\) terwijl de uitvoering zelf verborgen blijft \(validatie, authenticatie etc.\). Over beide vormen van abstractie is voldoende geschreven, ook binnen het kennisplatform.

> _Wanneer de API specificaties erg veel details communiceren over het formaat en inhoud van berichten, leiden wijzigingen daaraan snel tot breaking changes in de API. Het is dan erg moeilijk om de API nog uit te breiden. Bijvoorbeeld wanneer het veld “straatnaam” volgens de API specificaties een maximale lengte van 40 tekens heeft, omdat de provider die maximale lengte in haar database heeft gedefinieerd, dan betekent uitbreiding van de maximale lengte een breaking change. De vraag is dus of het echt noodzakelijk is om in het contract de maximale lengte vast te leggen._

Functionele abstractie gaat over wat de API aanbiedt, en is het meest onderbelicht en misschien ook wel het lastigste, omdat het een andere aanpak vereist dan we gewend zijn. Daarom gaat het nog vaak mis. Veel overheidsstandaarden zijn gebaseerd op het idee om vooral alles te leveren wat je hebt. Je weet maar nooit of iemand het nodig heeft en dan is het er maar alvast. Toch? En we leveren de gegevens het liefst exact zoals de bron het heeft opgeslagen, in hun meest “pure vorm”. Dan “kan iedereen er mee doen wat hij wil”. Klinkt bekend?

_**Gebruikersperspectief- povider perspectief \#\#\#\#\#\#\#\#\#\#\#\#\#uitwerken waarom dit invulling geeft aan service abstraction\#\#\#\#\#\#\#\#\#\#\#. Misschien een hele paragraaf wijden aan gebruikersperspectief op zich als design principe, los van service abstraction/loose coupling?**_

> _Twee voorbeelden van functionele abstractie:_
>
>
> _**Weergave van adressen**  
In de basisregistratie adressen en gebouwen zijn adressen gemodelleerd vanuit nummeraanduidingen, openbare ruimten en woonplaatsen, met relaties daartussen. Veel gebruikers zijn in essentie geïnteresseerd in het adres, dus de samenstelling van nummeraanduiding \(postcode en huisnummer\), straatnaam \(openbare ruimte\) en woonplaatsnaam. Levert de API adressen, dan hoeft een gebruiker niets te weten over nummeraanduidingen, openbare ruimten en woonplaatsen en hoeft de gebruiker minder requests te doen om tot de benodigde informatie te komen. Bovendien kan de provider haar modellering en registratie vrij aanpassen zonder dat de gebruiker daar iets van merkt._
>
>
> _**Aanschrijfwijze**  
Veel gebruikers van basisregistraties hebben een samengestelde naam nodig om een persoon te kunnen aanschrijven. De basisregistratie personen heeft hiervoor een code naamgebruik \(bijvoorbeeld “V”, wat betekent dat de achternaam van de partner voor de achternaam van de persoon zelf moet worden gezet\), naamgegevens, adellijke titel, en gegevens van de eventuele \(ex\)partner. De gebruiker moet dan al deze gegevens opvragen en een algoritme maken voor het hieruit samenstellen van de naam. Wanneer de API deze samengestelde naam al levert, kan de API veel compacter en eenvoudiger zijn en hoeft een gebruiker veel minder gegevens op te vragen. Dit komt ook de evolvability van de API ten goede: de onderliggende gegevens kunnen totaal veranderen \(geslachtsaanduidingen krijgen bijvoorbeeld andere waarden\), zonder dat de consumer zijn koppeling moet aanpassen of vernieuwen._

De conclusie is dat functionele abstractie essentieel is voor de houdbaarheidsdatum van je API contract. Het design van het API contract op basis van het gebruikersperspectief is de allerbeste truc om dit voor elkaar te krijgen.

### Service Autonomie

Service autonomie is een design principe dat API’s onafhankelijker maakt van hun omgeving. Er zijn twee soorten autonomie:

1. “run time autonomy": de mate waarin een API voor het verwerken van zijn eigen proceslogica onafhankelijk is van de omgeving waar hij op draait. Dit leidt tot een hogere betrouwbaarheid, omdat de API minder afhankelijk is van hulpbronnen waar hij geen controle over heeft. Door bijvoorbeeld gecashte kopiedata beschikbaar te stellen is de API minder afhankelijk van een database die hij deelt met 10 andere API’s en een processysteem. Die zou het wel eens heel erg druk kunnen hebben als de API hem nodig heeft, waardoor de API traag of onvoorspelbaar gedrag kan gaan vertonen.
2. "design time autonomy” refereert aan de mate waarin een API kan worden doorontwikkeld zonder impact op haar consumers. Bijvoorbeeld als onderliggende legacy aan revisie toe is, logica beter en efficiënter moet worden geïmplementeerd of als je wilt schalen. Het toepassen van loose coupling en service abstraction helpen bij het maken van autonome API’s omdat het contract wordt afgeschermd van implementatie en logica.

### Statelessness

Dit principe richt zich net als het service autonomy principe meer op het ontwerp van de onderliggende logica dan op het contract. Het management van toestandsinformatie \(tijdelijke, activiteit specifieke informatie\) kan een enorm negatieve invloed hebben op de beschikbaarheid en performance van een API. Ontwerp je API’s daarom zo dat ze zoveel mogelijk in een stateless toestand verkeren. In de REST architectuurstijl is dit een harde eis, ofwel “een REST constraint”, maar daarover later meer.

### API hergebruik

Als je business logica die door heel veel verschillende processen wordt gebruikt in een API giet, heb je een bedrijfsmiddel dat je eindeloos kunt hergebruiken. Je moet er wel voor waken dat er geen specifieke businesslogica van een van je afnemers insluipt. Een agnostische API \(zonder kennis van het specifieke business van de gebruiker\) bevat generieke logica en wordt als herbruikbaar geclassificeerd. Aan de andere kant wordt logica met specifieke kennis voor een specifieke taak als “niet agnostisch” bestempeld. Dat betekent niet dat alle API’s agnostisch zijn. Microservices zijn vaak niet agnostisch, omdat de nadruk veel meer ligt op het uitvoeren van een vaak specifieke taak met een hoge performance en beschikbaarheid dan op herbruikbaarheid. Service autonomie, statelessness, composability, loose coupling en abstraction zijn dan veel belangrijker. _**\#\#\#\#\#misschien stukje over microservices in een ander hoofdstuk? Of toch gewoon lekker door elkaar heen behandelen?\#\#\#\#\#\#\#\#\#\#**_

_\*\*\*\*_

