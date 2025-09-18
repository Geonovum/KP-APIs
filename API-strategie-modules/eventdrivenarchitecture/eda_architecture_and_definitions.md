
# Definities

**Applicatie-event** : Iets dat binnen of buiten een applicatie is gebeurd en binnen die applicatie of daarbuiten gevolgen heeft. [bron](https://www.gemmaonline.nl/wiki/Id-9e48d727-8af0-4007-ac4e-5a27c0738f85)

**Gebeurtenis** : Iets dat binnen of buiten een organisatie is gebeurd en binnen die organisatie of daarbuiten gevolgen heeft. [bron](https://www.gemmaonline.nl/wiki/Id-a79cbfcb-6c58-4793-9fc9-4401a4c7aaf7)

**Notificatie** : Een bericht met als doel om iets of iemand ergens van op de hoogte te stellen. [bron](https://www.gemmaonline.nl/wiki/Id-08a2be25-75aa-4523-b29c-d4bfadeaa2cf)

## Architectuur

Event-driven architectuur (EDA) is een architectuurbenadering waarbij los gekoppelde componenten via 'events' informatie over plaatsgevonden gebeurtenissen met elkaar uitwisselen. Events fungeren daarbij vaak als trigger voor afnemers om in actie te komen. In business-termen spreken we over 'aanbieders' en 'afnemers' van events. Bij geautomatiseerde uitwisseling tussen applicaties gebruiken we de internationaal gangbare termen ‘producers’ voor applicaties die events publiceren, ‘consumers’ voor applicaties die events ontvangen en ‘intermediairs’ die verantwoordelijk zijn voor het distribueren van events naar consumers.

EDA is geschikt om een robuuste en schaalbare architectuur te realiseren met dynamische en responsieve systemen. Het detecteren en reageren op gebeurtenissen staat daarbij centraal. Iets dat fundamenteel anders is dan bij gegevens- of proces-gerichte benaderingen. EDA vraagt om anders ontwerpen, realiseren en gebruiken van oplossingen.

Het programma [Interbestuurlijke Datastrategie](https://www.digitaleoverheid.nl/interbestuurlijke-datastrategie/) probeert om beter gebruik te maken van beschikbare overheidsgegevens. Een van de verbeterpunten is om te zorgen dat als belangrijke gegevens wijzigen, dit via notificaties overal bekend wordt waar het van belang is. Om notificatieprocessen effectief en efficiënt te laten verlopen, is standaardisatie op verschillende vlakken nodig. Het [NL GOV profile for CloudEvents](https://www.logius.nl/domeinen/gegevensuitwisseling/nl-gov-profile-cloudevents/wat-nl-gov-profile-cloudevents) draagt hieraan bij door te standaardiseren hoe informatie over plaatsgevonden gebeurtenissen wordt uitgewisseld.

Event-driven architectuur (EDA) is een architectuurbenadering waarbij systemen worden ontworpen om te reageren als zich bepaalde gebeurtenissen hebben voorgedaan. Om op de hoogte te zijn van veranderingen hoeven systemen niet steeds zelf gegevens op te vragen ('polling'), maar worden ze na een plaatsgevonden gebeurtenis daarvan op de hoogte gesteld.

Een datarecord met gegevens over een plaatsgevonden gebeurtenis noemen we een 'event'. Events kunnen worden getransporteerd, opgeslagen en worden uitgewisseld tussen applicaties. Op basis van ontvangen events kunnen afnemende applicaties passende actie ondernemen.

Belangrijke rollen bij EDA zijn:

- **(Event)producers:** applicaties die informatie over plaatsgevonden gebeurtenissen publiceren.
- **Intermediairy:** applicaties die verantwoordelijk zijn voor het verstrekken van gepubliceerde events aan consumers. Producers en consumers communiceren niet direct met elkaar en hoeven, voor de distributie, elkaar niet te kennen. Voor invulling van deze rol wordt vaak gebruik gemaakt van speciale middleware-applicaties, zoals message- of event-brokers.
- **(Event)consumers:** applicaties die events ontvangen en er vervolgens op kunnen reageren.

Onderstaand diagram toont hoe producers events publiceren en consumers events ontvangen. De rechterkant van het diagram toont de veelvoorkomende situatie met een Intermediairy.

<figure>
  <object data="../../media/Event-driven_architectuur_1.png" type="image/png" id="eda"></object>
  <figcaption>Event Intermediairy</figcaption>
</figure>

### Meerwaarde

EDA maakt een wendbare, modulaire aanpak mogelijk waarbij applicaties direct kunnen reageren op bepaalde gebeurtenissen. Dit leidt tot  snellere en efficiëntere processen, beter gebruik van middelen en de  mogelijkheid om systemen eenvoudig te schalen en uit te breiden.

Door de flexibiliteit en modulariteit kunnen nieuwe diensten snel worden  toegevoegd of aangepast, en kunnen applicaties beter samenwerken. Dit  maakt betere dienstverlening mogelijk, kostenbesparingen en een grotere  wendbaarheid van organisaties.

EDA is vooral nuttig in situaties waar  snelheid, flexibiliteit en efficiënte verwerking van gebeurtenissen van  belangrijk zijn. Bijvoorbeeld bij industriële automatisering, Internet  of Things (IoT) toepassingen, communicatie tussen microservices of bij  het uitwisselen van informatie tussen overheidsorganisaties.

### Soorten event-verwerking

Afhankelijk van de doelen kan EDA verschillende manieren van event-verwerking ondersteunen, zoals:

- **Zelfstandige gebeurtenissen verwerking**: Hierbij gaat het om  gebeurtenissen die niet aan andere gebeurtenissen zijn gerelateerd en  zelfstandig kunnen worden afgehandeld. Bijvoorbeeld een plaatsgevonden  publicatie van een bericht op een social media platform.
- **Event-stream verwerking**:  Hierbij is sprake van een stroom  ('stream') aan gerelateerde events. Bij verwerking moet rekening worden  gehouden met eerdere events. Bijvoorbeeld als het events betreft met informatie over de wijziging van een verblijfsadres van een persoon waarbij de volgorde van verwerking van belang is.
- **Complexe event verwerking**: hierbij kunnen op basis van een reeks  events bepaalde patronen worden herkend. Bijvoorbeeld op basis van  events afkomstig van een passantensensor signaleren dat zich te veel  mensen in een gebiedszone bevinden.

De thema-architectuur Eventoriëntatie van de GEMMA besteedt extra aandacht aan de functie 'notificeren'.  Daarbij kan zowel sprake zijn van zelfstandig te verwerken events, als  van gerelateerde events.

### Begrippen

EDA kent een aantal termen die te maken hebben met het ontwerpen,  realiseren en werken met event-driven oplossingen. Hieronder staan een  aantal veelgebruikte begrippen met hun betekenis:

- **Change Data Capture**: Een techniek waarmee veranderingen in een database (zoals  toevoegingen, verwijderingen en wijzigingen) in real-time worden  vastgelegd en als event zijn te publiceren.
- **Messaging**: Een eenvoudige vorm van communicatie tussen systemen  waarbij gegevens in de vorm van berichten worden uitgewisseld. Events  worden vaak als bericht uitgewisseld.
- **Webhook**: Een mechanisme waarbij een applicatie een HTTP-verzoek (meestal een POST) naar een andere applicatie stuurt als er een bepaalde gebeurtenis heeft plaatsgevonden.
- **Event notificatie**: Een bericht met gegevens over een plaatsgevonden gebeurtenis, dat wordt verzonden naar geabonneerde applicaties. Binnen deze thema-[architectuur spreken we over 'notificeren' en 'notificaties'.
- **Event Carried State Transfer**: Een patroon waarbij events alle benodigde objectgegevens bevatten  ('informatierijk'), zodat ontvangers (consumers) de actuele staat kunnen reconstrueren zonder opvragingen bij de bron te hoeven doen.
- **Event streaming**: Het continue genereren, verwerken en consumeren van een reeks gebeurtenissen ('stream') in real-time, voor grote  dataverwerkings- en integratietaken.
- **Event processing**: Het interpreteren en verwerken van events voor een bepaald doel. Dat kan eenvoudig zijn (bijvoorbeeld filteren of  routeren) of complex (bijvoorbeeld patroonherkenning binnen meerdere  events).
- **Event sourcing**: Een patroon waarbij events onveranderlijk en duurzaam in een bronregister (‘event  store’) worden vastgelegd en als authentieke bron worden beschouwd. De  actuele staat van een object kan worden berekend door een reeks events  opnieuw af te spelen.
- **Command/Query Responsibility Segregation**: Een patroon waarbij het verantwoordelijkheidsgebied voor het verwerken van commando's (wijzigen van data) wordt gescheiden van het uitvoeren van queries (lezen van data). Hiermee is de schaalbaarheid en flexibiliteit te vergroten.
