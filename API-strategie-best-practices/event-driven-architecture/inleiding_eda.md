# Event Driven Architecture (EDA) introductie

Deze handreiking bundelt de huidige content over Event Driven Architecture. Naast deze handreiking is het aan te bevelen om kennis te nemen van De bronnen bij Gemmaonline, de internationale cloudevents standaard, het Nederlandse profiel hierop en de bijbehorende guidelines. Zie ook de onderstaande Bronnen en verwijzingen

## Bronnen en verwijzingen

1. [Gemma Thema pagina Eventoriëntatie](https://www.gemmaonline.nl/wiki/Thema-architectuur_Eventorientatie)
2. [Logius Dienstverlening pagina NL GOV profile for Cloudevents](https://www.logius.nl/onze-dienstverlening/gegevensuitwisseling/nl-gov-profile-cloudevents/wat-nl-gov-profile-cloudevents)
3. [Eventoriëntatie introductie](https://www.gemmaonline.nl/wiki/Eventori%C3%ABntatie_introductie)
4. [Event-driven architectuur introductie](https://www.gemmaonline.nl/wiki/Event-driven_architectuur_introductie)
5. [Definiëren van gebeurtenistypes](https://www.gemmaonline.nl/wiki/Defini%C3%ABren_van_gebeurtenistypes)
6. [Uitdagingen en maatregelen](https://www.gemmaonline.nl/wiki/Uitdagingen_en_maatregelen)
7. [Cloudevents NL documentatie op Github](https://gitdocumentatie.logius.nl/publicatie/notificatieservices/CloudEvents-NL/)
8. [Internationale CloudEvents standaard](https://cloudevents.io/)
9. [NL GOV profile for CloudEvents](https://gitdocumentatie.logius.nl/publicatie/notificatieservices/cloudevents-nl/)
10. [Guidelines for NL-GOV profile CloudEvents (Handreiking)](https://gitdocumentatie.logius.nl/publicatie/notificatieservices/guidelines/)

## Eventoriëntatie introductie

Eventoriëntatie is een benadering waarbij gebeurtenissen centraal staan en systemen gebeurtenisgedreven ('event-driven') werken. Event driven architectuur (EDA) is de architectuurstijl die hierbij past. EDA kent eigen uitgangspunten en patronen en leidt tot systemen waarin los gekoppelde applicaties informatie over plaatsgevonden gebeurtenissen met elkaar uitwisselen.

### Events

In lijn met internationale standaarden gebruiken we de term 'event' als aanduiding voor een datarecord met gegevens over een plaatsgevonden gebeurtenis. Events zijn onder andere te gebruiken voor:

- **publiceren** (bijvoorbeeld een event met informatie over een naamswijziging)
- **filteren** (bijvoorbeeld door events op basis van een selectiecriterium te selecteren)
- **routeren** (bijvoorbeeld door events op basis van een kenmerk naar de juiste bestemming te sturen)
- **verstrekken** (bijvoorbeeld door een event naar een afnemende applicatie te sturen)
- **bewaren** (bijvoorbeeld door gepubliceerde events in een registratie vast te leggen).

#### Architectuur van gebeurtenissen

Werken met events vereist een architectuur die hier op is ingericht: event-driven architectuur. Binnen dit type architectuur draait het om gebeurtenissen die zaken in gang zetten. Na het plaatsvinden van een gebeurtenis worden events geproduceerd door '(event)producers' en, al dan niet via een 'intermediair', verstrekt aan '(event)consumers'. Event-driven architectuur introductie licht toe wat kenmerkend is voor dit type architectuur.

#### Architectuur van notificaties

Met 'notificeren' bedoelen we het via events ('notificaties') op de hoogte stellen van applicaties dat er een bepaalde gebeurtenis heeft plaatsgevonden. Notificeren is een voorbeeld van het werken met events. Voor overheidsorganisaties is het belangrijk om anderen te notificeren als er belangrijke gebeurtenissen hebben plaatsgevonden en is het belangrijk om op de hoogte te worden gesteld als er elders relevante gebeurtenissen hebben plaatsgevonden. Notificeren krijgt momenteel veel aandacht binnen de overheid, maar is zeker niet het enige doel van event-driven werken.

### Standaardisatie

Events kunnen gegevens over allerlei soorten plaatsgevonden gebeurtenissen bevatten. Het kan bijvoorbeeld gaan om een muisklik door een gebruiker, een door een sensor geregistreerde waarde, een ontvangen betaling, een voltrokken huwelijk of een plaatsgevonden gegevensmutatie. Het is cruciaal dat ieder type gebeurtenis nauwkeurig worden beschreven (zie ook [[[#definiëren-van-gebeurtenistypes]]]). Om effectief met events te kunnen werken moeten beschrijvende gegevens gestandaardiseerd worden vastgelegd. Voor dit doel is [de internationale CloudEvents standaard](https://cloudevents.io/) ontwikkeld. Het [NL GOV profile for CloudEvents](https://gitdocumentatie.logius.nl/publicatie/notificatieservices/cloudevents-nl/) bouwt hierop voort en bevat afspraken over gebruik van de standaard binnen de Nederlandse overheid.

#### Voordelen van Eventoriëntatie

Eventoriëntatie kan belangrijke voordelen opleveren, zoals:

- **Snelle reacties:** door snel te notificeren kunnen consumers tijdig en proactief reageren op veranderingen. Dit leidt tot betere dienstverlening en het voorkomen van vervelende situaties door het werken met verouderde en foutieve gegevens.
- **Effectiviteit:** organisaties kunnen beschikken over actuele en goed te interpreteren gegevens. Dit maakt betere besluitvorming mogelijk.
- **Inzicht:** doorlopend beschikken over actuele informatie maakt realtime analyses en voorspellingen mogelijk. Bijvoorbeeld om proactieve maatregelen te nemen.
- **Robuustheid en Schaalbaarheid:** door de ontkoppeling van producers en consumers zijn systemen robuust en goed op te schalen.
- **Flexibiliteit:** veranderingen zoals het toevoegen van nieuwe consumers is eenvoudig mogelijk.

#### Meerwaarde voor overheden

Voor overheden geldt dat zij voor het uitvoeren van haar taken over betrouwbare gegevens moet kunnen beschikken. Daarvoor is het nodig om tijdig op de hoogte te zijn wanneer zich bepaalde gebeurtenissen hebben voorgedaan. Daarbij kan het gaan om gebeurtenissen binnen de eigen organisatie (bijvoorbeeld een plaatsgevonden verhuizing van een inwoner die ook een uitkering krijgt) of om elders plaatsgevonden gebeurtenissen (bijvoorbeeld een inschrijving bij de Kamer van Koophandel van bedrijf binnen de gemeente).

Gemeenten werken met gegevens en processen die snel kunnen veranderen, zoals aanvragen van vergunningen, meldingen van bewoners, of het beheren van infrastructuur zoals verkeer en afvalinzameling. Event Driven Architecture stelt overheden in staat om wendbaarder, efficiënter en responsiever te zijn in hun dienstverlening en betere service aan burgers en bedrijven te bieden. Bijvoorbeeld door snel gepersonaliseerde dienstverlening, zoals het automatisch versturen van meldingen of proactief aanbieden van gemeentelijke diensten wanneer relevante gebeurtenissen optreden, zoals het bijna verlopen van een paspoort.

Gemeenten werken vaak samen met externe partijen, zoals waterschappen, vervoersbedrijven of andere overheden. Event Driven Architecture maakt het gemakkelijker om systemen van verschillende organisaties op elkaar aan te sluiten en gebeurtenisgegevens te delen, wat samenwerking en coördinatie verbetert. Om vaker als **'1 overheid'** naar buiten te kunnen treden en proactief diensten te leveren richting burgers en bedrijven (“van aanvragen, naar aanbieden”) moeten overheidsorganisaties elkaar vaker en sneller informeren over plaatsgevonden gebeurtenissen. Bijvoorbeeld bij plaatsgevonden levensgebeurtenissen, zoals een kind krijgen, gaan studeren of overlijden.

Het uitgangspunt **“van aanvragen, naar aanbieden”** kan ook toegepast worden op het uitwisselen van gegevens tussen organisaties. Bijvoorbeeld waar het gaat om eenmalig vastgelegde brongegevens (**'data bij de bron'**). Voor afnemers daarvan volstaat het kunnen opvragen daarvan vaak niet om bedrijfsprocessen verantwoord uit te kunnen voeren. Wanneer eerder opgevraagde gegevens door een gebeurtenis zijn gewijzigd moet dit snel bekend worden gemaakt om te voorkomen dat te nemen besluiten op verouderde gegevens zijn gebaseerd.

### Paradigmaverschuiving (“van aanvragen, naar aanbieden”)

Eventoriëntatie verschilt in een aantal opzichten fundamenteel van andere benaderingen. In plaats van synchroon en procedureel denken, moet er bijvoorbeeld meer dynamisch en asynchroon worden gedacht. De praktijk leert dat zo'n paradigma-verandering niet vanzelf gaat. Naast technische maatregelen moet daarom ook worden gezorgd voor voldoende kennis. Uitdagingen en maatregelen beschrijft in welke opzichten eventoriëntatie wezenlijk verschilt van andere benaderingen en wat bij toepassing ervan uitdagingen en mogelijke maatregelen zijn.

## Aanleiding

De hoeveelheid data die elke dag wordt geproduceerd, groeit exponentieel. Of die data nu bestaat uit updates van sensoren, klikken op een website of wijzigingen binnen elders beheerde brongegevens, van applicaties wordt verwacht dat ze deze stroom van informatie tijdig verwerken. Om dat mogelijk te maken moet informatie over relevante plaatsgevonden gebeurtenissen tijdig geautomatiseerd worden verstrekt aan partijen die daar belang bij hebben.

Gemeenten werken steeds meer in gedistribueerde omgevingen, waar gegevens op verschillende plaatsen worden vastgelegd. De afgelopen jaren is veel energie gestoken in het toegankelijk maken van gegevens in bronregistraties via **Application Programming Interfaces (API's)**. Om tijdig en adequaat diensten te kunnen leveren, volstaat opvragen van brongegevens vaak niet. Bij veel bedrijfsprocessen moeten afnemers op de hoogte worden gesteld als brongegevens wijzigen, zodat zij er snel en adequaat op kunnen reageren.

> "Veel organisaties zijn afhankelijk van de gegevens van anderen, hebben hun handen vol aan het verkrijgen hiervan en kunnen daar in veel gevallen niet snel genoeg over beschikken. Hoe meer up-to-date de IT van de overheid, hoe groter de mogelijkheden om als overheid proactief en responsief op te treden. En hoe effectiever gegevensuitwisseling, hoe beter professionals in de uitvoering gefundeerde besluiten kunnen nemen." - _Bron: Staat van de Uitvoering 2024_

## Doel

‘Eventoriëntatie" heeft als doel om overheden en leveranciers te ondersteunen bij het ontwerpen, realiseren en gebruiken van (meer) event-georiënteerde oplossingen. Werken met events vereist specifieke afspraken, standaarden en voorzieningen. Maar het vereist zeker ook een andere mindset om vraagstukken event-gericht in plaats van proces- of gegevensgericht te benaderen. Waar we het als consument al heel normaal vinden dat we via de smartphone snel op de hoogte worden gebracht als een besteld artikel is verzonden, is elkaar informeren over belangrijke gebeurtenissen binnen de overheid nog geen vanzelfsprekendheid.

Bij 'gebeurtenissen' kan het om allerlei soorten gebeurtenissen gaan. Bijvoorbeeld om 'discrete gebeurtenissen', die op een specifiek moment in de tijd plaatsvinden (bijvoorbeeld een sensor die een meting heeft verricht of een boete die is opgelegd). 'Statusveranderingen' waarbij de toestand van een object wijzigt (bijvoorbeeld de huwelijkse staat van een persoon), of ['levensgebeurtenissen'](https://www.rijksoverheid.nl/onderwerpen/levensgebeurtenissen/overzicht-levensgebeurtenissen) die van belang zijn voor meerdere overheidsorganisaties (bijvoorbeeld met pensioen gaan of verhuizen).

Eventoriëntatie is voor verschillende doelen bruikbaar. Het volgende hoofdstuk [[[#notificeren-introductie]]] besteedt extra aandacht aan 'notificeren': het geautomatiseerd verstrekken van informatie over plaatsgevonden gebeurtenissen aan applicaties die daar belang bij hebben. Binnen de Nederlandse overheid komt steeds meer behoefte aan notificeren. Onder andere om proactieve dienstverlening te bieden en om verantwoord gebruik te maken van elders beheerde brongegevens.

## Uitdagingen en maatregelen

Een event georiënteerde benadering wijkt in een aantal opzichten af van bijvoorbeeld een gegevens- of procesgerichte benadering. Onderstaande tabel toont aspecten waarop oplossingen die vooral met het request-response patroon werken, verschillen van event-driven oplossingen.

| **Aspect**      | **Request-response patroon**                                        | **Event-driven patroon**                              |
| --------------- | ------------------------------------------------------------------- | ----------------------------------------------------- |
| Communicatie    | 1-weg (van A naar B)                                                | 2-weg (van A naar B en B naar A)                      |
| Koppeling       | Sterk gekoppeld (afhankelijk van elkaar)                            | Los gekoppeld (onafhankelijk van elkaar)              |
| Tijdigheid      | Synchroon (A wacht op verwerking en resultaat van B)                | Veelal asynchroon (A wacht niet op verwerking door B) |
| Schaalbaarheid  | Moeilijker schaalbaar (B krijgt het drukkers als aantal A’s groeit) | Makkelijk schaalbaar (via toevoegen nieuwe consumers) |
| Consistentie    | Strong consistentie (altijd consistent)                             | Eventual consistency (tijdelijk niet consistent)      |
| Foutafhandeling | Eenvoudig (door synchroniciteit)                                    | Complex (door a-synchroniciteit)                      |

### Uitdagingen

Realiseren van event-driven oplossingen brengt een aantal uitdagingen met zich mee. Bij het ontwerpen en realiseren van oplossingen moet daar rekening mee worden gehouden om te voorkomen dat er in de praktijk problemen optreden.

- **Complexiteit in architectuur en beheer:** Events worden vaak gebruikt om informatie uit te wisselen tussen applicaties in gedistribueerde omgevingen. Naarmate het aantal events en applicaties toeneemt, wordt lastig om overzicht te houden over aan wie, wanneer, welke events zijn verstrekt. Dit kan leiden tot fouten of inconsistenties.
- **Debuggen en foutafhandeling:** Het debuggen van event-driven systemen kan lastig zijn omdat events vaak asynchroon worden verwerkt. Het is moeilijker om de exacte volgorde van events te bepalen en te analyseren wat er precies gebeurd tijdens verwerking.
- **Foutafhandeling:** Wanneer er fouten optreden moeten die goed worden afgehandeld. Een van de risico's als dit niet gebeurd, is dat events vaker worden verstrekt of, erger nog, verloren gaan en afnemers nooit bereiken.
- **Volgordelijkheid:** Het kan belangrijk zijn dat afnemers events in de juiste volgorde ontvangen. Bijvoorbeeld bij applicaties waar de volgorde belangrijk is, zoals financiële of administratieve systemen.
- **Inconsistentie:** Mede door het asynchroon verwerken van events, kunnen gegevens tijdelijk inconsistent zijn. Na verloop van tijd moeten gegevens weer consistent zijn ('eventual consistency').
- **Correcties:** Wanneer aanbieders fouten maken en die later corrigeren, ontvangen afnemers eerst een event met foutieve informatie en daarna een event met de juiste informatie.
- **compenserende transactie:** Afnemers moeten rekening houden met de mogelijkheid dat een event foutieve informatie kan bevatten. Bijvoorbeeld door eerst een periode te wachten voor een kritische transactie wordt uitgevoerd of door een compenserende transactie uit te voeren als later een event met gecorrigeerde gegevens volgt.
- **Vertraging:** event-driven systemen moeten snelle verwerking van informatie ondersteunen. Maar er kan soms vertraging optreden bij het uitwisselen van events. Dit kan een negatieve invloed hebben op de reactietijd van het systeem of, bij samenwerking tussen meerdere applicaties, tot inconsistenties.
- **Overbelasting:** Een plotselinge stroom van events kan leiden tot overbelasting van applicaties. Event-verstrekking moet in die gevallen tijdelijk kunnen worden vertraagd ('throttling').
- **Systeemaanpassingen:** Veel bestaande (legacy)systemen werken gegevens-georiënteerd. Het aanpassen van deze systemen om events te kunnen verwerken kost tijd en geld.
- **Monitoring en auditing:** Continu monitoren is ingewikkelder bij gedistribueerde systemen en gebeurtenissen die asynchroon worden verwerkt. Dit kan auditing en logging uitdagend maken, vooral als er een nauwkeurige audit trail nodig is.

### Maatregelen

Om aanwezige uitdagingen het hoofd te bieden zijn verschillende soorten maatregelen mogelijk. Hieronder worden een aantal te treffen maatregelen beschreven.

- **Kennis opdoen:** Zorg voor kennis van event-driven architectuur. Zonder voldoende kennis is er een (te) groot risico dat projecten niet succesvol verlopen. Onder andere binnen de financiële en logistieke sector is al veel ervaring opgedaan met event georiënteerd werken en zijn er best-practices waar gebruik van kan worden gemaakt. EDA is vaak onderdeel van een API First aanpak en daarom ook onderdeel van het [Kennisplatform API's](https://developer.overheid.nl/communities/kennisplatform-apis/).
- **Consistentie borgen:** Pas mechanismen toe om events altijd in de juiste volgorde te verwerken. Bijvoorbeeld via versienummering, timestamping en het gebruik van vaker uit te voeren (idempotente) operaties. Als er tijdelijk inconsistenties kunnen zijn, moet hier bij verwerking rekening mee worden gehouden.
- **Betrouwbaarheid verbeteren:** Gebruik specialistische (middleware)applicaties die de benodigde complexe technische functionaliteit bieden. Bijvoorbeeld voor message queues waarmee events kunnen worden opgeslagen voordat ze worden verwerkt, retry-mechanismen die zorgen voor automatische her-verzending van events na verstoringen of fouten en dead-letter queues om events die niet zijn te verwerken te bewaren voor later onderzoek en afhandeling, rate limiting en throttling om het aantal events dat per seconde wordt verstrekt te beperken. Veelal zijn deze functionaliteiten standaard beschikbaar in API-Gateway's, [zie ook de referentiecomponenten in de NL API Strategie architectuur](https://geonovum.github.io/KP-APIs/API-strategie-algemeen/Architectuur/#referentiecomponenten).
- **Inzicht en robuustheid verbeteren:** Gebruik gespecialiseerde systeemtools, zoals monitoringtools voor continu toezicht op de verwerking van gebeurtenissen, logging tools voor voor uitgebreide logging van verwerking, 'circuit breakers' die zorgen dat bij disfunctioneren van een bepaalde component de rest van het systeem blijft werken, tracing om de volledige reis van een event te kunnen volgen.
- **Events aggregeren:** Aggregeer veel kleine, snel opeenvolgende events zodat het aantal verstrekkingen naar afnemers beperkt blijft. Hierdoor blijft het aantal event en de bijbehorende systeembelasting beperkt.

### implicaties

Event-georiënteerde oplossingen kunnen grote voordelen bieden, maar zijn niet altijd eenvoudig te realiseren. Net zoals bij andersoortige oplossingen moet rekening worden gehouden met de omstandigheden waarbinnen een toepassing moet werken. Welke mogelijkheden hebben betrokken organisaties en applicaties? Wat voor onvoorziene omstandigheden kunnen zich voordoen? Hoe erg is het als er bepaalde fouten optreden? Antwoorden op dit soort vragen bepalen sterk mee of en hoe event-driven oplossingen geschikt zijn.

## Definiëren van gebeurtenistypes

Om effectief notificeren mogelijk te maken is een van de eerste stappen het onderkennen van belangrijke gebeurtenissen die binnen het domein van een publisher plaatsvinden.
Het onderkennen van de gebeurtenissen, en daarmee inspelen op de gebruikerswensen sluit aan bij de [NL API Strategie - gebruikerswensen](https://geonovum.github.io/KP-APIs/API-strategie-algemeen/Gebruikerswensen/).
Hieronder staat een 3-staps aanpak voor het bepalen en beschrijven van gebeurtenistypes waarvoor notificaties verstrekt gaan worden.

### Stap 1: Inventariseren van gebeurtenissen

De eerste stap is het identificeren van plaatsvindende gebeurtenissen binnen het domein, of een deel daarvan, bij de aanbieder. Daarbij is onderscheid te maken in

- 'business gebeurtenissen' die herkenbaar zijn voor zakelijke vertegenwoordigers, zoals 'Offerte ontvangen' of 'Factuur betaald', ,en
- 'technische gebeurtenissen' die herkenbaar zijn voor IT'ers, zoals 'Gebouwgegevens gewijzigd' of 'Klantrecord toegevoegd'.

Vanwege de bredere herkenbaarheid is het meestal wenselijk om gebeurtenissen uit de eerste categorie te bepalen, maar in bepaalde gevallen kunnen ook meer technische gebeurtenissen meerwaarde hebben. Hierbij kan gebruik worden gemaakt van een techniek als '[event storming]' waarbij via workshops alle gebeurtenissen die binnen een specifiek domein worden geïnventariseerd en geordend.

### Stap 2: Bepalen van relevante gebeurtenistypes

Bij deze stap wordt bepaald welke soorten gebeurtenissen het meest relevant zijn voor derden om notificaties over te ontvangen. Hierbij is het van belang dat consumers hun wensen kunnen inbrengen op basis waarvan een producer kan besluiten voor welke gebeurtenistypes hij events gaat publiceren. Ook bij deze stap is het van belang dat zowel domein-experts als technici zijn vertegenwoordigd en zij zoveel mogelijk dezelfde taal spreken.

### Stap 3: Documenteren van gebeurtenistypes

De laatste stap is het gedetailleerd beschrijven van de benoemde soorten gebeurtenissen. Dit omvat het definiëren van algemene kenmerken zoals de naam, korte omschrijving, en specifieke attributen die altijd aanwezig moeten zijn in notificaties. Het belang van een goede beschrijving is groot, omdat consumers verstrekte notificaties correct moeten interpreteren en op basis daarvan gaan verwerken. Bij voorkeur is de betekenis van de gebeurtenistypes zodanig vastgelegd dat hij opvraagbaar is voor zowel mensen als applicaties.

## De CloudEvents standaard

CloudEvents is een open standaard voor het beschrijven van gebeurtenisgegevens. Het doel van deze standaard is om de interoperabiliteit tussen verschillende diensten en platforms te verbeteren door informatie over plaatsgevonden gebeurtenissen ('events') op een gestandaardiseerde manier uit te wisselen. Dit maakt het eenvoudiger om na het optreden van een gebeurtenis met elkaar te communiceren. Het doel is om interoperabiliteit en consistentie in event-driven omgevingen te bevorderen.

Kenmerken van de standaard zijn:

- Gestandaardiseerd formaat: CloudEvents definieert een minimaal formaat voor metagegevens over een gebeurtenis (bijvoorbeeld tijdstempel, bron, type). Waar nodig kunnen uitbreidingen ('extensies') op de basisstructuur worden gedefinieerd.
- Techniek-neutraal: De standaard is ontworpen om te werken met verschillende gegevensformaten (bijvoorbeeld JSON en XML) en transportprotocollen (bijvoorbeeld HTTP en AMQP). Gebruikers houden hierdoor de vrijheid om gebruik te maken van technologie waarmee zij vertrouwd zijn.
- Inhoud-onafhankelijk: de standaard definieert uitsluitend de meta-[informatie om gebeurtenissen te beschrijven en legt geen beperkingen op aan de voor consumers bestemde inhoud ('payload') van een event.
- Modulaire opbouw: De standaard kent een basis-specificatie en aanvullend daarop specificaties voor gebruik bij verschillende formaten en protocollen.

### Status

CloudEvents is gestart om te komen tot een standaard voor het gestandaardiseerd beschrijven van gebeurtenisgegevens binnen cloud gebaseerde systemen. De standaard is echter ook bij andere soorten systemen bruikbaar. CloudEvents is in 2018 geaccepteerd door de [Cloud Native Computing Foundation](https://www.cncf.io/). De standaard kreeg in 2019 het volwassenheidsniveau 'Incubating'. In 2024 is het hoogste volwassenheidsniveau '[Graduated](https://www.cncf.io/projects/cloudevents/)' bereikt. De standaard wordt door steeds meer leveranciers ondersteund.

Het [NL GOV profile for CloudEvents](https://www.logius.nl/domeinen/gegevensuitwisseling/nl-gov-profile-cloudevents) is ontwikkeld voor gebruik binnen de Nederlandse overheid. Het profiel voegt een aantal binnen de overheid geldende afspraken toe aan de CloudEvents-specificatie. Het profiel is in beheer bij Logius en nu in behandeling bij het Forum Standaardisatie om te worden toegevoegd aan de [pas-toe-of-leg-uit lijst met open standaarden](https://www.forumstandaardisatie.nl/open-standaarden).

### Inhoud

Binnen CloudEvents wordt onder een 'event' een datarecord met gegevens over een plaatsgevonden gebeurtenis verstaan. De CloudEvents Core Specificatie beschrijft de meest voorkomende event-attributen:

- Context attributen: een beperkte set verplichte en optionele attributen om een gebeurtenis te beschrijven:
  - **ID** (verplicht): Een unieke identifier voor het event.
  - **Source** (verplicht): De bron van het event (bijv. het systeem of de service die het event genereert).
  - **Type** (verplicht): Het type van het event (bijv. "bestelling geplaatst").
  - **Specversion** (verplicht): De versie van de CloudEvents specificatie die wordt gebruikt.
  - **Time** (optioneel): Het tijdstip waarop het event is gegenereerd.
  - **Contenttype** (optioneel): Het type van de data-payload (bijv. application/json).
  - **Data** (optioneel): De daadwerkelijke inhoud van het event (payload) met voor afnemers bestemde domeinspecifieke informatie over de plaatsgevonden gebeurtenis. Er zijn geen beperkingen qua structuur en formaat van opgenomen gegevens.
- Aanvullende attributen (optioneel): zelf te definiëren kenmerken die nodig zijn binnen specifieke toepassingen of domeinen.

### Voorbeeld

Onderstaand voorbeeld toont een bericht in JSON-formaat dat voldoet aan de CloudEvents standaard. Het bericht is een voorbeeld van een event dat bruikbaar is om applicaties te notificeren dat een bepaalde gebeurtenis heeft plaatsgevonden (in dit geval een verhuizing van een persoon).

```json
{
  "id": "6a6800cc-5d30-42d2-9078-cf28fd038e58",
  "source": "urn:nld:oin:00000001823288444000:systeem:BRP-component",
  "specversion": "1.0",
  "type": "nl.brp.persoon-verhuisd",
  "time": "2021-10-27T14:35:00.042Z",
  "prioriteit": "hoog",
  "datacontenttype": "application/json",
  "data": {
    "abonnementId": "d7c5fc0a-f7c9-4376-b54a-32df4756059e",
    "bsn": "012345678"
  }
}
```

## NL GOV Profile for CloudEvents introductie

Het NL GOV profile for CloudEvents is een profiel met een aantal Nederlandse afspraken over het gebruik van de internationale standaard CloudEvents.

### Afspraken

Gestandaardiseerde metadata voor events, zoals om wat voor soort event het gaat en waar het vandaan komt, maakt uitwisseling en gebruik van events eenvoudiger.

CloudEvents heeft als doel om het beschrijven van plaatsgevonden gebeurtenissen te standaardiseren via een beperkte set afgesproken metadata. CloudEvents is als standaard breed toepasbaar en bruikbaar bij verwerking binnen verschillende services, platforms en infrastructuren.

Het NL GOV profile for CloudEvents heeft als doel om binnen de Nederlandse overheid optimaal gebruik te maken van de CloudEvents-standaard. Het profiel bevat aanvullende afspraken over het gebruik van CloudEvents door overheidsorganisaties. Bijvoorbeeld afspraken over hoe bepaalde door CloudEvents voorgeschreven attributen moeten worden gebruikt, zoals:

- 'id' om over een unieke identificatie voor events te beschikken.
- 'type' om te beschrijven om wat voor soort gebeurtenis het gaat.
- 'source' om te beschrijven uit welke bron een event afkomstig is.

Internationale standaardisatie vormt zo de basis, die wordt aangevuld met afspraken die binnen de Nederlandse context nodig of wenselijk zijn.

### Gebruik

CloudEvents kent een gelaagde architectuur. De kern wordt gevormd door de ['CloudEvents core specificatie'](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md), waar het NL GOV profiel op voortbouwt. Maar de CloudEvents-community heeft ook aanvullende producten gemaakt. Daarin staan afspraken over hoe de core specificatie moet worden gebruikt wanneer bepaalde technologie wordt toegepast. Daarbij kan het gaan om bepaalde gegevensformaten (bijvoorbeeld JSON of XML) of om bepaalde transportprotocollen (bijvoorbeeld HTTP, AMQP of AVRO). Doel hiervan is om gebruik in de praktijk maximaal te standaardiseren.

In lijn met de gelaagde CloudEvents-architectuur zijn als aanvulling op het NL GOV profiel [Guidelines for NL-GOV profileCloudEvents](https://gitdocumentatie.logius.nl/publicatie/notificatieservices/guidelines/) gepubliceerd. De guidelines zijn te zien als handreiking voor toepassing van het NL GOV profiel bij gebruik van van bepaalde technologie. Aansluitend bij de actuele behoeften binnen de Nederlandse overheid gaat het daarbij om het protocol HTTP, het gegevensformaat JSON en het vaak toegepaste patroon Webhook.

### Status en governance

Het NL GOV Profile for CloudEvents wordt beheerd en doorontwikkeld door de afdeling Standaarden van Logius. Aan het door Logius georganiseerde Technisch Overleg Notificeren nemen verschillende overheidsorganisaties deel en worden wensen en vragen met betrekking tot de standaard besproken. Het NL GOV Profile for CloudEvents is voorgedragen bij het Forum voor Standaardisatie voor opname op de overheidsbrede pas-toe-of-leg-uit lijst van open standaarden.

Gemeenten kennen sinds enkele jaren een notificatiestandaard, bedoeld voor ondersteuning van zaakgericht werken. De VNG heeft als doel om die standaard op termijn breder toepasbaar te maken dan alleen voor zaakgericht werken. Los van het wel of niet opnemen op de lijst van open standaarden zal het NL GOV Profile for CloudEvents daarbij een belangrijke rol spelen. Gemeenten hebben immers veel belang bij het gestandaardiseerd kunnen uitwisselen van events met andere overheidsorganisaties. Binnen een eerder uitgevoerde pilot is vastgesteld dat de huidige notificatiestandaard voor zaakgericht werken relatief eenvoudig is door te ontwikkelen, om te kunnen voldoen aan het NL GOV Profile for CloudEvents.
