# Architectuur

> *Dit hoofdstuk gaat in op de vraag: Hoe kan je je applicatie landschap inrichten zodat je APIs kan*
> *aanbieden. Welke componenten zijn hiervoor nodig. Hoe ga je om met opschalen, beschikbaarheid.*
> *Wat zijn afwegingen om beveiliging al dan niet toe te passen.*





*Website:*

*De impact van API's op de architectuur van alle organisaties die hier serieus
mee aan de slag gaan is groot, net als de behoefte aan kennis op dit gebied. De
werkgroep Architectuur buigt zich over vragen rond de volgende onderwerpen: de
impact van het gebruik van API’s op de gehele informatievoorziening van een
organisatie, de kennisopbouw over benodigde architectuur in
overheidsorganisaties en het overzicht en sturing van gewenste beweging naar het
gebruiken van data in plaats van het bezitten van data.*

Sec:

\-beschrijving van de impact van (gebruiken van ) API’s op de eigen
informatievoorziening (vanuit bestaande use-cases)

\-Werken aan kennis opbouw over de benodigde architectuur voor het kunnen werken
met API’s

\-sturing en richting geven aan de noodzakelijke beweging van data ‘hebben’ naar
data ‘gebruiken’ bij het werken met API’s.

1.  De GitHub tekst over REST API architectuur wordt een tekst over
    architectuurthema’s (beveiliging, logging, semantiek, doelbinding etc) om
    organisaties en mensen die zich aan het informeren zijn over REST API’s ’s
    om hen te helpen bij beslissingsondersteuning

2.  De architectuur tekst in GitHub wordt nog **geen** referentie architectuur:
    daarvoor zijn API , methodieken, technieken, standaarden etc op dit moment
    in 2018 nog teveel in ontwikkeling en onvoldoende stabiel

3.  Daar waar mogelijk meer stabiele architectuur elementen worden voorzien,
    kunnen deze van bv principes, begrippen, bouwstenen, standaarden, wettelijke
    grondslagen, beleid en kaders voorzien. Dit is een eerste stap richting in
    een nog uit te werken referentie architectuur

4.  Hoofdmoot van het stuk zal zijn om stapsgewijs voor te sorteren op die
    elementen, methodieken en technieken die mogelijk stabiel genoeg **kunnen**
    gaan worden

5.  Bijvoorbeeld rond NLX: <https://nlx.io/about/>

6.  Daarmee geeft de werkgroep Architectuur API inrichting van de NORA
    Applicatielaag vanuit API persperctief:
    <https://www.noraonline.nl/wiki/Applicatielaag>

>   De werkgroep leden hebben in november 2018 gekozen voor de volgende
>   thematische indeling:

### <!-- 6.2.1 --> Beveiliging

<redactie>Blijft deze paragraaf? Heel Hoofdstuk *Beveiliging* is eraan gewijd.</redactie>

### <!-- 6.2.2 --> Autorisatie

### <!-- 6.2.3 --> Semantiek

>   Noemen: ontwikkelingen op het gebied van Linked (open) Data, stelsel van
>   overheidsgegevens en link: <https://www.noraonline.nl/wiki/Semantiek>

### <!-- 6.2.4 --> Metadata

>   ?Noemen: Toepassingsprofiel Metadata Rijk, TMLO? Relatie leggen.
>   <https://www.noraonline.nl/wiki/Metagegevens_Duurzame_Toegankelijkheid>

### <!-- 6.2.5 --> Interoperabiliteit

>   ?Benadrukken voordelen voor interoperabiliteit.
>   <https://www.noraonline.nl/wiki/Interoperabiliteit>

### <!-- 6.3.3 --> Patronen

Voor het notificeren en opvragen van gegevens worden patronen gevolgd. Deze patronen worden hieronder visueel weergegeven. Merk op dat het patroon van opvragen ook terugkomt bij notificeren, dit is een resultaat van de ontwikkeling: "Van kopiëren van data naar bevragen bij de bron" (zie hoofstuk 2.7).

<figure id='patronen'>
	<img src='media/visualisatie%20patronen.png' width="400" />
	<figcaption>Visualisatie patronen (gelaagdheid tussen real life, proces en data).</figcaption>
 </figure>
<BR>

Toelichting bij de visualisatie: 
Real-life gebeurtenissen liggen ten grondslag aan alles wat in systemen processen triggert. Indien een gebeurtenis wordt gevolgd door een afnemer (via een geplaatste afnemerindicatie) ontvangt de afnemer hierover notificaties. Op basis van ontvangen notificaties bepaalt een afnemer of de gebeurtenis voor hem interessant is. Indien de notificatie voldoende interessant is kan het leiden tot het opstarten van een vraag/antwoord verwerking. De afnemer stopt met het stellen van vragen als er geen verdere informatiebehoefte is. Merk op dat het verkrijgen van data enkel via vraag/antwoord plaatsvindt.


#### Notificeren
Voor Basisregistraties geldt: Afnemerindicaties worden geplaatst op niveau van gebeurtenis en verzorgingsgebied. Hierdoor ontvangt de afnemer de gebeurtenissen van alle resources in dat geografische gebied. Het ontvangen van deze gebeurtenissen kan voor de afnemer een trigger zijn voor het opvragen van gegevens. 

BRP (en eventueel ook HR) vormt een uitzondering, hiervoor geldt dat afnemerindicaties op persoonsniveau i.c.m. gebeurtenis worden geplaatst (het verzorgingsgebied is niet van belang en is dus gelijk aan heel Nederland). Hieronder wordt dit visueel weergegeven. 

<figure id='notificeren'>
	<img src='media/visualisatie%20notificeren.png' width="500" />
	<figcaption>Visualisatie notificeren (de wijze van notificeren en plaatsen van afnemerindicaties)</figcaption>
 </figure>

Toelichting op de voorbeelden:
- BAG: een afnemer volgt één of meerdere BAG-gebeurtenissen uit een bepaald verzorgingsgebied (zoals hierboven gemeente Dordrecht). Een voorbeeld van een BAG-gebeurtenis is een wijziging gebruiksdoel (zie 4.2 voor de lijst met gebeurtenissen voor de BAG). Een notificatie wordt verzonden naar de afnemer indien de combinatie gebeurtenis/verzorgingsgebied optreedt en gevolgd wordt door de afnemer.
- BRP: een afnemer volgt één of meerdere BRP-gebeurtenissen van een bepaald ingeschreven natuurlijk persoon. Een voorbeeld van een BRP-gebeurtenis is een wijziging adresgegevens (zie 4.1 voor de lijst met gebeurtenissen voor de BRP). Een notificatie wordt verzonden naar de afnemer indien de combinatie persoon/gebeurtenis optreedt en gevolgd wordt door de afnemer.

De bovenstaande patronen worden bekrachtigd door onderstaande principes. De hieronder benoemde principes kunnen gezien worden als functionele inrichtingsprincipes voor API’s (specifiek opgesteld t.a.v. Basis- en Kernregistraties). Op basis van deze functionele principes (als toevoeging op de technische design/ontwerprules uit hoofdstuk 4) kunnen de API’s nauwkeurig worden gedefinieerd. Bij wijziging van de principes geldt dat dit impact heeft op alle API’s. 

|Principe 1|Een API in de categorie Notificeren faciliteert het melden van gebeurtenissen aan een afnemer. |
|-|-|
|Toelichting|Een notificatie is een melding van een gebeurtenis die een procestrigger vormt. Een gebeurtenis kan een wijziging in de gegevens van de bronhouder tot gevolg hebben en daarom kan het zinvol zijn voor een afnemer hierover genotificeerd te worden. Gebeurtenissen worden te allen tijde door bronhouder gecommuniceerd richting een broker (bijvoorbeeld ESB/API-Gateway) zo kort mogelijk na het optreden van de gebeurtenis, ongeacht of er afnemers zijn. Indien er een afnemer is brengt de notificatie de afnemer op de hoogte van de gebeurtenis (een gegarandeerde aflevering is daarbij de verantwoordelijkheid van de broker). Dit triggert bij de afnemer een proces: De afnemer is aan zet om te oordelen wat de passende vervolgacties zijn bij het ontvangen van de notificatie.<BR>Omdat een notificatie zelf geen content bevat (wel identificerende functionele gegevens) is er geen historie aanwezig in notificaties.<BR><BR>Notificaties worden toegezonden aan afnemers die middels afnemerindicaties hebben aangegeven notificaties te willen ontvangen. Het kenbaar maken en het beëindigen van deze wens vindt plaats middels een API binnen dit deze categorie.|
|Ratio|- De notificatie van een gebeurtenis is niet hetzelfde als de uitwisseling van gegevens die de gebeurtenis beschrijven.<BR>- De gegevens die de gebeurtenis beschrijven (de content) zijn beschikbaar via API’s in de categorie Opvragen.<BR>Voorbeeld gebeurtenis: Persoon met BSN 123456789 is overleden.<BR>- Een afnemer bepaalt de interesse in notificaties (via het plaatsen van afnemerindicaties). <BR>- De afnemer bepaalt de relevantie van een individuele notificatie. Dit is intelligentie binnen de functionaliteit van de afnemer. Het ontvangen van een gebeurtenissen kan voor de afnemer een trigger zijn voor het initiëren van een bedrijfsproces (en daarmee het opvragen van gegevens).|
|Implicaties|- De afnemer is verantwoordelijk voor het afnemen van gegevens.<BR>--> Door de afnemer middels een notificatie slechts te informeren over een gebeurtenis bepaalt de afnemer zelf of en hoe de gebeurtenis wordt opgevolgd.<BR>--> Indien de afnemer na ontvangst/ van een notificatie gegevens wenst te ontvangen kan de afnemer – na bepaald te hebben welke gegevens – deze middels API’s uit categorie Opvragen verkrijgen. <BR>--> Afnemers die enkel op basis van interne triggers acteren hebben geen behoefte aan notificaties m.b.t. wijzigingen op bestaande objecten. De actuele gegevens van deze objecten worden namelijk opgehaald indien een intern proces start. <BR>--> De verantwoordelijkheid van de afnemer omvat de doelbinding. De afnemer is verantwoordelijk de opvolging van een gebeurtenis uit te voeren binnen zijn kader van doelbinding. <BR>- De afnemer volgt een vast patroon bij het notificeren (zie figuur 2 in hoofdstuk 3 voor de visuele weergave van dat patroon).|

|Principe 2|Afnemer bepaalt relevantie van een notificatie.|
|-|-|
|Toelichting|Afnemers die via API Notificeren gegevens willen ontvangen nemen op het niveau van een resource (dus niet instelbaar op een specifiek data-object) in de breedte van het geografische verzorgingsgebied gebeurtenissen af.<BR><BR>Uitzondering:<BR>Voor de BRP (en eventuele registraties of data waar privacy op rust) is hier gelet op de privacywetgeving een uitzondering op. Voor het afnemen van personen uit de BRP dient per persoon een specifieke afnemerindicatie geplaatst te zijn door de afnemer, in lijn met zijn doelbinding. Geadviseerd wordt afnemerindicaties te plaatsen door het uitwisselen van het 'BSN' en niet door het uitwisselen van een technische sleutel.|
|Ratio|- De complexiteit van het binnengemeentelijk distribueren van gegevens uit basisregistraties wordt enorm vereenvoudigd door afnemers enkel te notificeren over gebeurtenissen.<BR>- De afnemer bepaalt de relevantie van de notificaties in het licht van zijn eigen bedrijfsprocessen, al deze wijzigen kan de afnemer zonder tussenkomst cq. zonder afhankelijkheid van een bronhouder zijn verwerkingsroutine hierop aanpassen.|
|Implicaties|- Bronhouder communiceert gebeurtenissen (vergelijk een radio-uitzending).<BR>- Het is niet aan de bronhouder van gegevens om te bepalen wie geïnteresseerd is in gegevens/gebeurtenissen. <BR>- Afnemers zijn bevoegd (als doelbinding aansluit) te luisteren naar de gebeurtenissen, maar zijn het niet verplicht. <BR>- De afnemer abonneert zich bij de bronhouder op alle of juist specifieke gebeurtenissen behorend bij een resource (zie visualisatie patronen).<BR>- Een uitzondering vormt het volgen van gebeurtenissen op persoonsgegevens (of objecten die persoonsgegevens bevatten). Afnemerindicaties worden hierbij wel op persoonsniveau geplaatst.|

|Principe 3|Notificaties zijn gebaseerd op de informatiebehoefte van bedrijfsprocessen.|
|-|-|
|Toelichting|Afhankelijk van de informatiebehoefte bij afnemers voor het triggeren van bedrijfsprocessen worden notificaties onderkend.<BR>In grote lijnen komt dit overeen met de gebeurtenissen die in de ontwerpdocumenten of berichtencatalogi van de basisregistraties zijn onderkend.|
|Ratio|De overheid stuurt op gebeurtenis-gericht beschikbaar stellen van basisgegevens. De bronhouder is weliswaar de meest deskundige partij voor het bepalen van haar gebeurtenissen, echter weet de afnemer het beste in welke gebeurtenissen hij geïnteresseerd is. Aangezien bepaalde gebeurtenissen bij de bronhouder voor geen enkele afnemer interessant zullen zijn zal het aantal gebeurtenissen waarover genotificeerd wordt naar afnemers altijd kleiner zijn dan het daadwerkelijke aantal gebeurtenissen. Met deze regel wordt die deskundigheid maximaal benut. Bij wijzigingen in de gebeurtenissen is tevens geborgd dat het gegevensverkeer dit volgt.<BR>Niet alle gebeurtenissen uit de catalogi van de basisregistraties zijn echter voor binnengemeentelijk gebruik interessant. Inventariseer welke gebeurtenissen niet relevant zijn en neem die niet op in de te realiseren API’s. |
|Implicaties|De definitie van API’s in de categorie Notificeren is bepaald door de behoefte van de afnemers in combinatie met de gebeurteniscatalogi van bronhouders.|

#### Opvragen

|Principe 4|Een API in de categorie Opvragen faciliteert het uitwisselen van gegevens op basis van een vraag-antwoord constructie.|
|-|-|
|Toelichting|De categorie Opvragen wordt gebruikt voor het op afroep verkrijgen van gegevens uit een bron via synchrone vraag-/antwoordcalls. De vragen die in RSGB-bevragingen zijn onderkend vormen de basis, deze worden één-op-één vertaald naar API’s, Voor de API's die daarin niet beschreven worden vormt het RSGB  het kader voor het opstellen van API's. Voor kernregistraties (niet beschreven in het RSGB) zal een lokaal informatiemodel de basis vormen. Naargelang de informatiebehoefte van de afnemer kunnen API’s in de categorie Opvragen worden ingericht voor het verstrekken van actuele gegevens en/of materiële historie en/of formele historie.|
|Ratio|- De clusters Opvragen voor de verschillende basisregistraties zijn waar mogelijk gebaseerd op RSGB-bevragingen: deze bevragingen zijn opgesteld vanuit het perspectief van de afnemer, door deze afbakening over te nemen sluiten de API’s nauw aan op het perspectief van de afnemer.<BR>- In informatiemodellen zit de mogelijkheid om historie vast te leggen op specifieke gegevens. Dit wordt zeker niet door iedere afnemer veelvuldig gebruikt en de materie kan complex zijn, maar er zouden wel API’s in de clusters Opvragen moeten zijn die de historie kunnen opvragen indien die behoefte er is (dit geldt voor zowel formele als materiële historie).|
|Implicaties|- De definitie van API’s in voor de clusters Opvragen is bepaald in de standaard RSGB-bevragen.<BR>- Index API's worden ondersteund om fuzzy search mogelijk te maken.<BR>- De afnemer (en ook uitsluitend de afnemer) kent de doelbinding van af te nemen gegevens.<BR>- Afnemers zijn verantwoordelijk voor, en deskundig in het feitelijk afnemen van gegevens uit basis- of kernregistraties, zij kennen de condities waaronder zij gegevens wel of niet willen afnemen.<BR>- Gegevensuitwisseling staat primair ten dienste van de afnemer maar volgt de mogelijkheden en beperkingen van de bron.<BR>- Een afnemer neemt gegevens af bij de bron. De basisregistratie worden in deze als bron gezien en niet bijvoorbeeld de afzonderlijke burgerzakenapplicaties.<BR>- Opvragen vindt per definitie synchroon plaats.<BR>- Door direct afnemen bij de bron te faciliteren is het afschaffen van lokale gegevensmagazijn mogelijk. Dit reduceert de beheerskosten aanzienlijk.<BR>- Door direct afnemen bij de bron te faciliteren is het afschaffen vertaalsoftware van landelijke naar gemeentelijke berichtenstandaarden mogelijk (in technische termen: transformaties op ESB-niveau, als voorbeeld hoe momenteel wordt getransformeerd tussen StUF-HR en StUF-BG).|

|Principe 5|Een vraag/antwoord API ondersteunt het opvragen van een concreet afgebakende set gegevens.|
|-|-|
|Toelichting|Elke response van de categorie Opvragen omvat maximaal (afhankelijk van autorisatie, zie design decision BRP API) de attributen, relaties en de identificerende gegevens van de gerelateerde, maar niet de gerelateerde resources in zijn geheel. Het verkrijgen van de gerelateerde resources vereist het stellen van een nieuwe vraag (nieuwe API-call uit categorie Opvragen). Het gebruik van expand = true is niet toegestaan.|
|Ratio|- Opvragen van gerelateerde gegevens wordt geacht te worden gedaan door het initiëren van een aanvullende vraag-antwoordcall, of indien dit voordeel oplevert gerelateerden direct op te halen via een ‘expand’ in de call op te nemen.<BR>- Relaties uit dezelfde bron kunnen embed worden. Zie design decision BRP API. <BR>- Voor het gebruik van de API is het gebruiken van expand=true om alle relaties embed te krijgen niet toegestaan. Het embedden van gerelateerde resources moet bewust worden gebruikt. Zie design decision BRP API. <BR>- Relaties kunnen maximaal één niveau diep worden embed. Zie design decision BRP API. <BR>- Autorisatie wordt gerealiseerd in een specifiek daarvoor ingerichten autorisatie-mechanisme. Vaak wordt dit in een tussenlaag (broker) gerealiseerd. De bron beschikt niet over middelen om applicatie of zelfs gebruikers-specifiek autorisatie in te richten. Wel kan een bron dit op organisatie-niveau.|
|Implicaties|- De afnemer is verantwoordelijk voor het afnemen van gegevens.<BR>- De afnemer volgt een vast patroon bij het opvragen van gegevens (zie figuur 2 in hoofdstuk 3 voor de visuele weergave van dat patroon).<BR>- De provider bepaalt het maximum aantal responses en niet de consumer. De API geeft een foutmelding wanneer er teveel resultaten zijn op de vraag.<BR>- De afnemer kent de doelbinding van het verzoek en stuurt de aanduiding van de doelbinding mee in de call.<BR>- Met parameter ‘fields’ in de call is het mogelijk om op attribuutniveau aan te geven welke gegevens gewenst zijn in de response. Het is niet verplicht een fields-parameter op te geven. <BR>- Voor sommige API’s is het verplicht een combinatie van zoek parameters te gebruiken (zo mag de BRP bijvoorbeeld niet enkel op huisnummer bevraagd worden).<BR>- Er vindt een validatie plaats op zoek parameters. Voor het gebruik van invalide parameters wordt een foutmelding teruggegeven aan de consumer.<BR>- Een gemeente draagt zelf zorg voor een fijnmazig autorisatie-mechanisme om binnen de organisatie onderscheid te kunnen maken in autorisatie per applicatie en of gebruiker. |


### <!-- 6.4.4 --> Componenten

>   Hamvraag: zijn REST API’s bouwstenen (architectuur component)? Behandelen:
>   op welke wijze API’s eenduidig zijn te beschrijven en vindbaar te maken
>   zijn. Wat kunnen we (concreet) van hieruit aan richtinggevende normen/
>   regels voor API Register’s meegeven? Wie hebben er een use case rond een API
>   register?

### <!-- 6.5.5 --> Begrippen

>   Noemen/ overnemen begrippen uit document BFS over API’s. Proberen een steeds
>   meer gestandaardiseerd begrippenkader voor REST API’s neer te zetten

### <!-- 6.6.6 --> Standaarden

>   Updaten en overnemen lijst met API standaarden uit het document BFS
>   (Lancelot Schellevis)

### <!-- 6.7.7 --> Use cases

>   Iig: use case Drechtsteden. Overige? Let wel: use cases zijn in dit stadium
>   het uitgangspunt
