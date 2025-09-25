# Notificeren introductie

"Notificeren" betekent iemand of iets via een bericht op de hoogte brengen van iets. De term wordt vaak gebruikt om aan te geven dat iemand officieel geïnformeerd wordt over een bepaalde gebeurtenis of verplichting. In digitale context betekent het vaak dat een applicatie een melding stuurt aan een gebruiker of aan een andere applicatie. Bijvoorbeeld wanneer er een nieuw bericht is ontvangen en dit aan een gebruiker of een applicatie wordt meegedeeld. Notificeren is een belangrijk onderdeel van een event-georiënteerde aanpak, waarbij systemen of mensen direct geïnformeerd worden wanneer er iets gebeurt dat relevant is voor hen. Het stelt hen in de gelegenheid om proactief of reactief passende actie te ondernemen.

Een belangrijke onderdeel van het [project Omnichannel](https://www.gemmaonline.nl/wiki/Project_omnichannel) is het notificeren van burgers, waarbij op de achtergrond ook notificaties tussen applicaties een rol spelen. Gemeenten sturen notificaties om hun dienstverlening klantvriendelijker te maken. Ontwikkelingen zoals de Wet modernisering elektronisch bestuurlijk verkeer (Wmebv) maken het bovendien steeds vaker verplicht om burgers te informeren. Bijvoorbeeld wanneer er nieuwe formele berichten beschikbaar zijn, zoals een besluit. Daardoor worden effectieve notificatievoorzieningen voor gemeenten steeds belangrijker, wat vraagt om een ondersteunende informatievoorziening die hierop goed is afgestemd.
> [Zie ook de animatie op YouTube die hierover door de VNG is gemaakt.](https://youtu.be/AVGwTXzyCjk)

## Notificaties

Met een 'notificatie' bedoelen het bericht met gegevens die bij notificeren worden verstrekt. Een notificatie kan allerlei soorten informatie bevatten. Op basis van de opgenomen informatie is onderscheid te maken in notificaties over een:

- **'Seintje':** er wordt een signaal afgegeven wanneer er iets is gebeurd. Deze vorm van notificatie is gebruikelijk in de wereld van sensoren (IoT), maar komt minder vaak voor binnen administratieve omgevingen.
- **Gegevensmutatie:** deze notificaties zijn gericht op het doorgeven van oude en nieuwe gegevens na een verandering ('was-wordt'). De aanleiding en context ontbreekt vaak, waardoor de gebruiker zelf moet afleiden welke gebeurtenis er heeft plaatsgevonden. Dit kan leiden tot foute conclusies en onjuiste acties.
- **Gegevensmutatie + Aanleiding:** naast de gegevensmutatie wordt ook de aanleiding voor de gebeurtenis meegegeven. Gebruikers begrijpen beter wat er precies is gebeurd en kunnen er beter op reageren.
- **Gebeurtenis + Gegevens:** In plaats van een aantal 'was-wordt gegevens' worden relevante gegevens over de plaatsgevonden gebeurtenis verstrekt. Afnemers weten op basis hiervan precies wat er is gebeurd. Als alle relevante gegevens zijn verstrekt ('informatierijke notificatie') kunnen consumers daarmee passende actie(s) uitvoeren.
- **Gebeurtenis + Identificatie:** Bij zo'n 'informatiearme notificatie' worden minimaal gebeurtenisgegevens verstrekt. Met behulp van verstrekte identificerende gegevens kan een consumer eventueel aanvullende gegevens gaan opvragen.

Binnen de overheid komen al deze soorten notificaties voor. Bij een gegevensgerichte werkwijze wordt bijvoorbeeld vaak gebruik gemaakt van 'was-wordt gegevens', die de toestand van gegevensobjecten voor en na een plaatsgevonden gebeurtenis beschrijven, terwijl bij meer event georiënteerd werken vaak de gebeurtenis zelf wordt beschreven. De context bepaalt welke vorm van notificeren wanneer het geschiktst is. Daarbij spelen inhoudelijke aspecten een rol (bijvoorbeeld of privacygevoelige gegevens onderdeel van een notificatie mogen zijn) en praktische aspecten (bijvoorbeeld of afnemende applicaties in staat zijn om bepaalde soorten notificaties te verwerken).

Notificaties kunnen verschillende vormen aannemen, zoals een pushmelding op een smartphone, een e-mail of sms-bericht, een melding op een beeldscherm binnen een applicatie, of elektronische berichten die via API-calls worden verstuurd.

### Brongegevens en notificeren

De afgelopen jaren is binnen de overheid veel energie gestoken in het gemakkelijker kunnen opvragen van brongegevens via moderne Application Programming Interfaces ([API's). In lijn met het principe 'Informeer bij de bron' wordt het daarmee beter mogelijk om gebruik te maken van gegevens in bronregistraties. Uitsluitend kunnen opvragen van brongegevens is voor veel processen echter niet genoeg om er optimaal gebruik van te maken. (Ook) notificeren is nodig om proactief te kunnen handelen of om tijdig actie te ondernemen als eerder opgevraagde brongegevens zijn gewijzigd. Voor optimaal gebruik van bronregistraties moeten bronhouders afnemers dus ook via notificaties informeren over relevante plaatsgevonden gebeurtenissen. Bijvoorbeeld als die hebben geleid tot wijziging van bepaalde brongegevens. Afnemers op hun beurt moeten zorgen dat door hen gebruikte applicaties ontvangen notificaties goed kunnen verwerken.

### Standaardisatie

Bij notificeren wordt allerlei soorten informatie tussen allerlei soorten partijen en applicaties uitgewisseld. Om te voorkomen dat organisaties te maken krijgen met veel, vaak onnodige, verschillen is standaardisatie op meerdere vlakken nodig. De [NL GOV Profile for CloudEvents](https://gitdocumentatie.logius.nl/publicatie/notificatieservices/CloudEvents-NL/) standaard beschrijft hoe plaatsgevonden gebeurtenissen door middel van een aantal standaard attributen, met een vast formaat en betekenis, zijn te beschrijven. Overheidsbreed gebruik van deze standaard vergemakkelijkt het maken, uitwisselen en verwerken van notificaties.

Mede omdat notificaties vaak domeingrenzen overschrijden is ook semantische standaardisatie nodig. Het moet voor alle partijen duidelijk zijn wat de precieze betekenis van de gegevens binnen notificatie is. Een belangrijke eerste stap daarvoor is het zorgvuldig definiëren en documenteren van gebeurtenistypes. Gelet op de grote hoeveelheid betrokken partijen en mogelijke soorten notificaties is het wenselijk dat informatie over beschikbare notificaties op een gestandaardiseerde manier wordt gepubliceerd. Al dan niet via een of meer overheidsbreed toegankelijk catalogi.

### Intern en extern notificeren

Er zijn verschillende situaties waarin applicaties elkaar kunnen notificeren over bepaalde plaatsgevonden gebeurtenissen. Notificeren kan bijvoorbeeld plaatsvinden binnen 1 applicatie (bijvoorbeeld om geautomatiseerd de juiste acties in de juiste volgorde te laten uitvoeren), tussen applicaties binnen 1 organisatie (bijvoorbeeld om interne applicaties te informeren als in een Burgerzakenapplicatie wordt geregistreerd dat een inwoner is overleden) of tussen applicaties van verschillende organisaties (bijvoorbeeld als vanuit de RDW externe applicaties worden geïnformeerd dat een voertuig een nieuwe eigenaar heeft gekregen). Gemeenten hebben te maken met alle 3 soorten use cases.

## Publish-subscribe patroon

Het publish-subscribe patroon (pub/sub) is een veelgebruikt patroon binnen event-driven architecturen. Het patroon scheidt zenders (publishers) van events van ontvangers (subscribers) van events. Toepassing van dit patroon maakt het mogelijk om flexibele en schaalbare systemen te maken waarmee informatie over plaatsgevonden gebeurtenissen is uit te wisselen.

Het patroon is een bekend voorbeeld van toepassing van eventoriëntatie. Vooral toegepast in situaties waarin meerdere applicatie graag op de hoogte willen worden gebracht ('genotificeerd') als er bepaalde gebeurtenissen hebben plaatsgevonden (zie [Notificeren introductie](https://www.gemmaonline.nl/wiki/Notificeren_introductie)).

### Terminologie

Binnen deze thema-architectuur gebruiken we de temen 'producer' en 'consumer' voor het aanduiden van de rol die applicaties spelen bij het uitwisselen van events. Vanwege de belangrijke rol die 'abonneren' speelt binnen het patroon spreekt het publish-subscribe patroon over de rollen:

- **Publisher:** de rol verantwoordelijk voor het publiceren ('publish') van events, en
- **Subscriber:** de rol verantwoordelijk voor het abonneren ('subscribe') op het ontvangen van bepaalde soorten events.

'Publisher' is te zien als 'producer' (waarbij vaak aanvullende eisen gelden voor publishers). 'Subscriber' is een 'consumer' die via een abonnement aangeeft welke events hij wil ontvangen.

Net als bij andere vormen van event-uitwisseling wordt vaak gebruik gemaakt van een 'intermediairy': een tussenliggende applicatie die door producers gepubliceerde events verwerkt. In de praktijk wordt bij toepassing van het publish-subscribe protocol ook vaak een meer specifieke aanduiding gebruikt, zoals 'message broker' of 'event broker'.

### Werking

Subscribers geven via een abonnement ('subscription') aan over welke soorten plaatsgevonden gebeurtenissen zij events willen ontvangen. Publishers publiceren events naar een intermediair, die zorgt voor verstrekking van de juiste events aan geabonneerde consumers. Subscribers ontvangen zo de events waarin zij zijn geïnteresseerd.  

<figure>
  <object data="../../media/Publish-subscribe_patroon.png" type="image/png" id="Publish-subscribe"></object>
  <figcaption>Publish-subscribe patroon</figcaption>
</figure>

Toelichting:

- Abonnementsgegevens worden veelal handmatig ingebracht. Het kan ook (deels) geautomatiseerd plaatsvinden. Daarvoor is nog geen standaard. Er wordt hiervoor gewerkt aan een [een internationale standaard.](https://github.com/cloudevents/spec/blob/main/subscriptions/spec.md)
- De rollen van publisher, intermediair en subscriber kunnen worden ingevuld door 1 of meerdere applicaties (en eigendom zijn van 1 of meer organisaties).
- Door gebruik te maken van een aparte applicatie in de rol van intermediair kunnen publishers en subscribers los van elkaar functioneren. Publishers hoeven dan bijvoorbeeld niet te weten welke soorten gepubliceerde events aan welke 'subscribers' events moeten worden verstrekt.
- De rol van intermediair wordt vaak vervuld door gespecialiseerde applicaties ('middleware') waarmee events veilig en betrouwbaar zijn uit te wisselen.
- Bij het uitwisselen van events wordt meestal asynchroon gecommuniceerd, zodat applicaties zo onafhankelijk mogelijk van elkaar kunnen werken.
- Bij het uitwisselen van events kan een keten aan betrokken applicaties ontstaan. Bijvoorbeeld als meerdere intermediairs met elkaar communiceren of als een applicatie in de rol van subscriber een ontvangen event in de rol van publisher of intermediair naar andere applicaties doorstuurt. Met name in cloudomgevingen wordt veel gebruik gemaakt van events die door verschillende soorten applicaties worden verwerkt.

### Voorbeelden

Het publish-subscribe patroon is toe te passen in uiteenlopende situaties, zoals:  

- Een nieuwssite publiceert een event met gegevens over een plaatsgevonden sportwedstrijd. De intermediair stuurt het event vervolgens als pushbericht naar de smartphones van gebruikers die zijn geabonneerd op events in de categorie 'sport'.
- Een overheidsportaal publiceert een event met gegevens over een aangevraagde vergunning. De intermediair verstrekt het event vervolgens aan een betaalsysteem, een vergunningenapplicatie en een klantnotificatiesysteem.
- Het Kadaster publiceert een event met informatie over een plaatsgevonden perceelsplitsing, zoals vastgelegd in de Basisregistratie Kadaster (BRK). De applicatie Digilevering verstrekt in de rol van intermediair het event aan alle op dit soort events geabonneerde applicaties.

### Mogelijke voordelen

Gebruik van het patroon kan veel voordelen opleveren:

- **Losse koppeling:** Publishers en subscribers kunnen onafhankelijk van elkaar functioneren.
- **Schaalbaarheid:** Het aantal subscribers kan eenvoudig toenemen, zonder dat dit gevolgen heeft voor de publisher.
- **Asynchrone verwerking:** Events hoeven niet allemaal direct verwerkt te worden, waardoor systemen niet overbelast raken.
- **Realtime updates:** Gebruikers of systemen kunnen snel op de hoogte worden gebracht van plaatsgevonden gebeurtenissen.
- **Modulariteit:** Door de scheiding tussen eventproductie en eventconsumptie kunnen nieuwe functionaliteiten worden toegevoegd, zonder dat de bestaande infrastructuur moet worden aangepast.

Het publish-subscribe patroon is heel geschikt voor gebruik binnen gedistribueerde omgevingen waarin registraties en applicaties over meerdere organisaties verspreid zijn. Omdat gemeenten met veel partijen samenwerken, daarmee intensief gegevens uitwisselen en belang hebben bij snelle informering over bepaalde gebeurtenissen, is het voor hen een patroon dat vaak bruikbaar is.

### Mogelijke nadelen

Net als bij andere patronen geldt ook voor het publish-subscribe patroon dat gebruik ervan ook een aantal nadelen kan kennen:

- Verlies van berichten: events kunnen verloren gaan. Bijvoorbeeld als een verstrekking van een event aan een subscriber niet is gelukt.
- Onjuiste volgorde: afhankelijk van de implementatie kunnen berichten in een andere volgorde bij subscribers aankomen dan ze zijn verstuurd. Dit kan bij sommige toepassingen tot problemen leiden.
- Vertraging: events kunnen vertraagd worden verwerkt. Bijvoorbeeld als het gaat om grote volumes aan events of als een betrokken applicatie tijdelijk offline is.
- Complexiteit: het is moeilijker om fouten te traceren dan bij directe communicatie tussen publishers en subscribers. Debugging en monitoring is uitdagender.
- Abonnementsbeheer: het kan ingewikkeld zijn om in abonnementen vast te leggen aan welke subscribers welke events moeten worden verstrekt.

De genoemde nadelen zijn via de juiste maatregelen op te heffen. De inzet van gespecialiseerde applicaties voor de rol van intermediair is een voorbeeld daarvan. Via bijvoorbeeld queuing en (tijdelijke of permanente) opslag van events kunnen optredende fouten of verstoringen dan goed worden afgehandeld. Naast lokale voorzieningen om nadelen op te heffend wordt in toenemende mate gebruik gemaakt van door cloudproviders aangeboden voorzieningen.

### Opmerkingen

In de praktijk wordt niet altijd hetzelfde bedoeld met 'het publish-subscribe patroon':

- Soms wordt asynchrone verwerking gezien als een voorwaarde om te kunnen spreken over gebruik van het publish-subscribe patroon. Synchrone communicatie kan echter ook een rol spelen. Bijvoorbeeld als een publisher snelle terugkoppeling nodig heeft en daarvoor wacht op feedback van de intermediair of als een intermediair na verstrekking van een event bereid is te wachten op feedback van een consumer.
- Bij gebruik van het patroon is gebruik te maken van zowel push- als pull-mechanismen en een combinatie van beide:
  - **Push:** het meest toegepaste mechanisme, waarbij nieuwe events actief richting subscribers worden gestuurd. Bijvoorbeeld via het webhook-patroon, waar afnemers bij abonneren opgeven welke service kan worden aangeroepen om events af te leveren (zie ook de [handreiking](https://gitdocumentatie.logius.nl/publicatie/notificatieservices/guidelines/#guideline-for-the-use-of-the-webhook-pattern-for-cloudevents) voor gestandaardiseerd gebruik van webhooks).
  - **Pull:** bijvoorbeeld toegepast als subscribers geen push-mechanisme kunnen ondersteunen of als het voor consumers niet nodig is om events snel te ontvangen. Een publisher kan dan bijvoorbeeld events vastleggen die subscribers later, op een zelf te kiezen moment, via een service ophalen.
  - **Push en pull:** een voorbeeld hiervan is de situatie dat een subscriber het initiatief neemt om een verbinding op te zetten met een publisher ('pull'), waarna de publisher de verbinding gebruikt om beschikbaar komende events direct te verstrekken ('push'). Protocollen die dit mechanisme ondersteunen zijn bijvoorbeeld het [Advanced Message Queuing Protocol](https://en.wikipedia.org/wiki/Advanced_Message_Queuing_Protocol) (AMQP) en [Server-sent events](https://en.wikipedia.org/wiki/Server-sent_events).
- Uitwisseling van events via een publish-subscribe patroon kan plaatsvinden met gebruik van verschillende gegevensformaten, transportprotocollen en technologiecomponenten. Qua protocol kan bijvoorbeeld gebruik worden gemaakt van een breed toepasbaar protocol zoals HTTP of van specifiek voor event-verwerking ontwikkelde protocollen zoals AMQP of MQTT. Door gebruik te maken van een standaard zoals CloudEvents,, en het daarvan afgeleide NL GOV for Cloudevents profiel, wordt het mogelijk om met events te werken binnen een divers technologisch landschap.

## Randvoorwaarden voor notificeren

 Voor een bredere adoptie binnen de Nederlandse overheid van notificeren, en meer algemeen eventoriëntatie, moet aan verschillende soorten randvoorwaarden worden voldaan:

- **Mindset**: er is een verschuiving nodig van een gegevens- naar een meer gebeurtenisgerichte benadering. Veel organisaties baseren hun processen nog op statische gegevens, terwijl een notificatie juist reageert op gebeurtenissen. Zowel aanbieders als afnemers moeten nut en noodzaak ervan gaan inzien. Waar de noodzaak al wordt ingezien is dit vaak meer vanuit technische- dan vanuit business-motieven.
- **Begrippen**: een eenduidig begrippenkader is nodig om te zorgen dat alle betrokkenen dezelfde taal spreken en elkaar begrijpen. Dit document sluit aan bij de terminologie die wordt gebruikt bij landelijke ontwikkelingen zoals de GDI-domeinarchitectuur Gegevensuitwisseling en de [NL GOV for CloudEvents standaard](https://www.logius.nl/domeinen/gegevensuitwisseling/nl-gov-profile-cloudevents).
- **Juridisch**: juridische vraagstukken, zoals rondom de privacywetgeving, spelen een belangrijke rol bij het verstrekken van notificaties. Wanneer er persoonsgegevens bij betrokken zijn moet toetsbaar zijn of voldoende grondslag bestaat om een verzoek tot ontvangen van notificaties in te willigen. Het redeneren vanuit gebeurtenissen sluit goed aan bij de notitie van de 'verwerkingsactiviteit', zoals beschreven in de AVG. Hier liggen dan ook kansen om uitdagingen op dit gebied beter te organiseren.
- **Techniek**: bronnen moeten niet meer alleen informatie verstrekken over wat er is gewijzigd, maar ook waarom dit is gebeurd. Veel bronnen zijn hier nu niet toe in staat en dus zijn technische aanpassingen nodig. Voor afnemers geldt dat zij applicaties geschikt moeten (laten) maken om goed om te kunnen gaan met verstrekte notificaties.
- **Standaardisatie**: vanwege de diversiteit aan betrokken partijen, gegevens en technische middelen is op verschillende vlakken standaardisatie nodig. Naarmate het gebruik van elders vastgelegde brongegevens toeneemt, neemt de noodzaak hiervan toe omdat afnemers uit steeds meer bronnen notificaties ontvangen.
- **Betrouwbaarheid**: Er is een gebrek aan vertrouwen in de gegevenskwaliteit van sommige bronregistraties. Reden waarom afnemers brongegevens lokaal opslaan en werken met bestandsvergelijkingen in plaats van notificaties. Waar nodig moet de kwaliteit van bronregistraties worden verbeterd en er op vertrouwd worden dat brongegevens betrouwbaar zijn.
- **Inzicht**: Afnemers moeten kunnen opvragen welke soorten notificaties er binnen de overheid worden aangeboden. Met deze informatie moet inzichtelijk worden wat de voorwaarden voor gebruik zijn en moeten specificaties voor gebruik (door mensen en machines) zijn op te vragen.
- **Kosten**: Vanuit de 1-overheidsgedachte is het wenselijk dat alle overheidsorganisaties die er belang bij hebben om te weten dat bepaalde gebeurtenissen hebben plaatsgevonden, dit tijdig weten. De grootste meerwaarde van notificaties ligt vaak buiten de organisaties die events publiceren en daarvoor kosten moeten maken. Huidige kostenstructuren werken nog te vaak belemmerend voor het overheidsbreed optimaliseren van notificeren.
- **Samenwerking**: Notificaties zijn pas echt bruikbaar als ze aansluiten bij de behoeften van afnemers. Aanbieders moeten daarom vroegtijdig overleggen met (potentiële) afnemers over het soort te leveren notificaties en de inhoud daarvan. Aanbieders zijn vanuit hun taakstelling nu nog vaak, teveel gericht op vastlegging en beheer van brongegevens. Definiëren van gebeurtenistypes geeft een handreiking voor het benoemen van te notificeren gebeurtenissen.

Veel van deze randvoorwaarden zijn niet uniek voor notificeren, maar gaan over het gebruik van gegevens in het algemeen. Programma's als de [Interbestuurlijke Datastrategie](https://www.digitaleoverheid.nl/interbestuurlijke-datastrategie/), met als onderdeel het project [Federatief Datastelsel](https://realisatieibds.nl/page/view/564cc96c-115e-4e81-b5e6-01c99b1814ec/de-ontwikkeling-van-het-federatief-datastelsel), hebben als doel om hier als overheid beter in te worden. Gebruik van event-driven architectuur kan een belangrijke bijdrage leveren aan realisatie van doelen zoals 'het faciliteren van zoeken, delen en in samenhang toepassen van hoogwaardige data uit verschillende databronnen voor meervoudig gebruik'.

Bovenstaande opsomming richt zich vooral op de overheidsbrede toepassing van notificeren. Maar individuele organisaties kunnen ook zelf stappen zetten door te bezien hoe gebruik van events de eigen informatievoorziening kan verbeteren. Denk aan het meervoudig gebruik van bronregistraties in plaats van gegevens vaker op slaan, het vervangen van periodieke bestandsuitwisselingen door notificaties of het binnen applicaties werken met notificaties in plaats van complexe voorgedefinieerde workflows.

## Informatiearme en informatierijke notificaties

 Om afnemers op de hoogte te brengen dat er een bepaalde gebeurtenis heeft plaatsgevonden kan gebruik worden gemaakt van zogenaamde 'informatiearme' of 'informatierijke' notificaties. De termen verwijzen naar de hoeveelheid informatie die is opgenomen in een notificatiebericht.

### Informatiearme notificaties

Een informatiearme notificatie bevat de minimale set aan gegevens over een plaatsgevonden gebeurtenis die consumers nodig hebben. Een informatiearme notificatie bevat identificerende gegevens die een afnemer kan gebruiken om om aanvullende detailgegevens op te halen. Een voorbeeld hiervan is een notificatie waarin naast een gebeurtenisbron en gebeurtenistype alleen een gebeurtenis-identificatie is opgenomen. Bijvoorbeeld "[Basisregistratie Kadaster", "KadastraleGroottePerceelGewijzigd", "KPC024453"]. Na ontvangst van zo'n notificatie kan een consumer beslissen om een service bij het Kadaster aan te roepen waarmee aanvullende detailinformatie over de plaatsgevonden wijziging is op te vragen.

### Informatierijke notificaties

Een informatierijke notificatie bevat de volledige informatie over een plaatsgevonden gebeurtenis. Een afnemer hoeft dan na ontvangst geen aanvullende gegevens meer op te vragen. Ten opzichte van het informatiearme voorbeeld zijn binnen de notificatie dan ook beschrijvende gebeurtenisgegevens opgenomen. Bijvoorbeeld "KadastraleGrootteOud=3000, KadastraleGrootteNieuw=3500".

### Informatiearm of informatierijk?

Een voordeel van informatiearm notificeren is dat er niet meer gegevens worden uitgewisseld dan minimaal nodig is. Iets dat nodig kan zijn om privacy en beveiliging te borgen of om bij een beperkte bandbreedte overbelasting te voorkomen. Een voordeel van informatierijk notificeren voor afnemers is dat ze geen aanvullende gegevens meer op hoeven te vragen, maar direct kunnen overgaan tot verwerking. Het ontlast ook de aanbieder die geen aparte service voor opvraging van detailgegevens hoeft aan te bieden.

Beide soorten notificaties hebben bestaansrecht. Welke type notificatie in een bepaalde situatie het meest geschikt is wordt bepaald door de context. Daarbij kunnen factoren een rol spelen zoals wetgeving, mogelijkheden, gemak en kosten.

### Notificeren van gewijzigde brongegevens

In lijn met het principe 'Data bij de bron' is de wens om brongegevens niet onnodig lokaal op te slaan, maar gebruik te maken van verwijzingen. Voor beide situaties geldt dat het vaak nodig is om notificaties te ontvangen als bepaalde brongegevens zijn gewijzigd. Wanneer naar elders vastgelegde brongegevens wordt verwezen kan informatiearm vaak volstaan. Zijn gegevens lokaal vastgelegd dan kan het efficiënter zijn om gewijzigde gegevens direct te ontvangen via informatierijke notificaties.

## ZGW Notificaties API-standaard

De [ZGW Notificaties API](https://vng-realisatie.github.io/gemma-zaken/standaard/notificaties/) is een API-standaard die behoort tot de [API-standaarden voor zaakgericht werken](https://vng-realisatie.github.io/gemma-zaken/standaard/). De standaard is ontwikkeld om bij zaakgericht werken gestandaardiseerd notificaties te kunnen gebruiken. Bij zaakgericht werken worden notificaties met name gepubliceerd door de [zaakregistratiecomponent](https://www.gemmaonline.nl/wiki/GEMMA/id-a97b6545-d5a7-485d-9b13-3ce22db5b9cf) en de [documentregistratiecomponent](https://www.gemmaonline.nl/wiki/GEMMA/id-0e99ec6c-283a-4ec9-8efa-e11468e6b878). Notificaties kunnen worden verstrekt aan alle applicaties die zich hebben geabonneerd op een bepaald soort plaatsgevonden gebeurtenissen waarover wordt genotificeerd.

Op langere termijn is het de bedoeling om de standaard door te ontwikkelen tot een breed toepasbare API voor notificeren in het algemeen. Mede hiervoor heeft VNG Realisatie, in opdracht van het Ministerie van Binnenlandse Zaken, in 2021 het project 'Notificatieservices' uitgevoerd. Binnen het project is de concept standaard voor overheidsbreed notificeren ontwikkeld: de NL GOV Standaard for CloudEvents. Deze is onder andere beproefd tijdens een Hackathon waar gemeenten en leveranciers aan deelnamen. Een van de uitkomsten was dat de ZGW Notificaties API standaard relatief eenvoudig was [aan te passen](https://github.com/VNG-Realisatie/notificatieservices/tree/main/docs/api-specification) om te voldoen aan de beoogde overheidsbrede notificatie-standaard.

Gelet op het feit dat gemeenten groot belang hebben bij overheidsbreed standaardiseren van notificeren, draagt de VNG nu actief bij aan het doorontwikkelen van de [NL GOV for CloudEvents standaard](https://www.gemmaonline.nl/wiki/NL_GOV_Profile_for_CloudEvents_introductie). De standaard is in behandeling bij het Forum Standaardisatie om opgenomen te worden in de verzameling overheidsbrede [pas-toe-leg-uit standaarden](https://www.forumstandaardisatie.nl/open-standaarden/verplicht) en wordt al op beperkte schaal gebruikt binnen de overheid en door leveranciers op de gemeentemarkt.
