**Verslag: Werkgroep API Architectuur 2020-10-15**



**Agenda**

**1 Welkom**

Op github is een indeling gemaakt voor de uitwerking van deelonderwerpen.

https://github.com/Geonovum/KP-APIs/tree/master/Werkgroep%20Architectuur

**2 Introductie**  

- Virtuele Meetup Kennisplatform API's
Hier is specifiek besproken raakvlak 'strategie en architectuur' 
en raakvlak 'architectuur en servicemanagement', dit krijgt nog vervolg

- EU rapport JRC over API"'s : API's in Governments : Why, what & how 
Zie https://ec.europa.eu/jrc/en/publication/eur-scientific-and-technical-research-reports/application-programming-interfaces-governments-why-what-and-how


**3 API thema in NORA**

Eric Brouwer : toelichtingen bij principes zullen worden geplaatst op noraonline
In de NORA worden momenteel de relaties tussen thema's in kaart gebracht (ook relaties met het API thema) - (Dit mbv het tool MIRO)

**4 API Architectuur onderwerpen (Ontwikkelingen & Invulling)**

- Algemeen

Opmerking bij algemene API plaat:
Interne API's zijn steeds vaker in de cloud , en lopen via besloten netwerken of publieke netwerken, dit zou ook in de plaat kunnen worden weergegeven;


- API Capability model

Kaders moeten nog worden geintegreerd met kader dat bij onderwerp 'api management' is opgesteld

- Typologie van API's

Toegevoegd is:

API Language styles

    Tunnel Style: XML-RPC, SOAP, gRPC, Avro
    Resource Style: OpenAPI/Swagger, RAML, API Blueprint
    Hypermedia Style: HAL, Siren, Atom, HATEOAS
    Query Style: GraphQL, OData, SPARQL
    Event-based Style: MQ, WebSub, MQTT, XMPP, AMQP, Kafka, AsyncAPI


- Informatiearchitectuur (koppeling informatiemodel en API):

  + Dit onderwerp kreeg ook op de SEMIC conferentie van vandaag aandacht, Hier werd het in de keynote discussie vereenvoudigd tot 'API's gaan over het HOE (kom je bij de data)' en het informatiemodel over het WAT (betekenis en structuur);
  + De mapping tussen API en informatiemodel kan vrij 1:1 zijn, maar in veel situaties is er in de mapping tussen api en acherliggende 1 of meer informatie modellen sprake van een complexere transformatie
  + Eelco Hotting gaf aan dat API's misschien juist een interessant middel zijn voor gegevens-integratie, omdat het op 1 lijn brengen van de achterliggende modellen een complex traject is (api's helpen silo's te doorbreken)
  + De vraag of voor uitwerking van dit onderwerp nog aanvullende input nodig is (bv middels enquete naar behoeftes rond dit onderwerp)
  + Binnen VNG wordt gewerkt met (via formeel proces) genereren via inverter tool maar er zijn ook teams die dit meer agile aanpakken en dit werkt ook
  + De vraag tot wat voor soort uitwerking dit voor deze werkgroep zou moeten leiden (?), bv is er naast het benoemen van het probleem een bruikbaar kader of best practice mee te geven ?


- Event Driven processen & Notificaties

Vanuit VNG is er een definitieve versie van het Notificatie stuk gemaakt;

- Beveiligingsarchitectuur

Gesproken is over wat voor soort invulling hiervoor wenselijk is en welk detailniveau
Frank van Es stelt voor een eerste opzet voor de discussie op te stellen
Eelco Hotting vraagt hierbij aandacht voor multi-level autorisatie (dwz autorisatie op organisatie niveau)

- API Management

Dennis de Wit werkt een algemeen bruikbaar kader uit en doet momenteel een eerste review met de mensen die zich hiervoor vorige keer hadden aangemeld

**5 Rondvraag**

Lijst met subgroepen zal worden geactualiseerd
