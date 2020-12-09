
**Huidige indeling in API Strategie**
- System API (werkt op het niveau van de databron);

- Process  API (doet aan orchestration door één of meerdere System API's aan te roepen);

- Convenience of Experience API (één specifieke gebruikersvraag beantwoorden);

(Vraag je altijd af welke informatievragen de gebruiker heeft -- in veel gevallen hangen deze vragen niet 1:1 samen met het datamodel)

Bron: NL API Strategie

### Aanvulling 1 : Business capability API vs Exposure API**

**Business API definitie:**

Een API die beschreven is in business termen , gebruik maakt van generieke modellen en welke bedrijfsprocessen ondersteund. (Hierbij wordt vermeden om terminology en payloads te gebruiken die specifiek zijn voor 3rd party software om afhankelijkheid van specifieke infrastructuur te voorkomen en te focussen op bedrijfsdoelstellingen;

**Exposure API**

Een API die toegang geeft tot de (basis)functionaliteit en data van een (specifiek) systeem

### Aanvulling 2 : Philosophy, Protocol, Encoding

- Design Philosophy 
(eg RESTful, GraphQL)
- Communications Protocol
(eg HTTP, Websockets)
- Encoding
(eg JSON, Protobuf (binary))

### Aanvulling 3 : API Virtualisatie
![](https://github.com/Geonovum/KP-APIs/raw/master/Werkgroep%20architectuur/uitwerkingen/media/api-virt.png)

### Aanvulling 4 : API Language styles


- Tunnel Style: XML-RPC, SOAP, gRPC, Avro
- Resource Style: OpenAPI/Swagger, RAML, API Blueprint
- Hypermedia Style: HAL, Siren, Atom, HATEOAS
- Query Style: GraphQL, OData, SPARQL
- Event-based Style: MQ, WebSub, MQTT, XMPP, AMQP, Kafka, AsyncAPI


