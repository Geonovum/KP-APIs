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

Principes ondersteunen het proces om te komen tot nauwkeurige afbakening en definities van API’s van eenzelfde type. Daarnaast bevorderen zij over de verschillende bronnen heen het eenduidig gebruik van API’s voor overeenkomstige concepten.
In de visualisatie hieronder is de structuur van de principes zichtbaar. Het blauw gekleurde principe is overkoepelend. Verder passen de overige principes binnen verschillende architectuurpatronen van API’s die ook in onderstaand figuur wordt weergegeven (zie oranje gekleurde principes).  

<figure id='principes'>
	<img src='media/visualisatie%20principes.png' width="400" />
	<figcaption>Structuur tussen de principes.</figcaption>
 </figure>
<BR>
Bij wijziging van de principes geldt dat dit impact heeft op ontwikkelde API’s.
	
#### Herbruikbaarheid
API-01: Gepubliceerde API’s zijn herbruikbaar
API’s die worden ontwikkeld moeten in lijn zijn met de opgestelde principes, hierdoor ontstaat er uniformiteit. Voorafgaand aan publicatie voor hergebruik toetst Forum Standaardisatie dit.
- Voor feitelijk hergebruik kan plaatsvinden moet een onpartijdig oordeel over de kwaliteit van de API uitgesproken worden. Forum Standaardisatie kan die onpartijdige toets uitvoeren op de gerealiseerde API's.
- Consumer wil bij hergebruik weten wat de kwaliteit is en de zekerheid hebben dat het werkt en beheerd wordt. 
- De provider van een API toont de kwaliteit van de API aan bij publicatie. 
- Door hergebruik van eenmalig ontwikkelde API's kan een softwareleverancier zich juist focussen op het bieden van toegevoegde waarde in de functionele ondersteuning van processen in taakgebieden. Het doel is om een situatie te bereiken waarin API's hergebruikt en gedeeld worden (generiek inzetbaar).
- Enkel API’s worden gemaakt waarvoor nog geen API aanwezig is, waardoor er niet méér API's gemaakt worden dan nodig zijn. 

#### Patroon ‘Bijhouden’
Een levens- of systeemgebeurtenis (zoals een geboorte of het verstrijken van tijd) triggert een proces. Dit proces leidt (in veel gevallen) tot het bijwerken van de data in de registratie van de bronhouder. De volgende principes worden benoemd binnen dit patroon.
<BR>
<BR>
API-01: Een gebeurtenis zorgt voor een proces waarin een bijhoudingstaak zit voor de bronhouder
Bronhouders hebben de verantwoordelijkheid om hun bronregistratie actueel te houden. Gebeurtenissen die effect hebben op de data in de bronregistratie triggeren een bijhoudingstaak.
<BR>
<BR>
API-02: Een API van type ‘POST’ faciliteert het bijhouden van data in de bronregistratie.
Restful API’s op basis van JSON van het type ‘POST’ worden toegepast om data te actualiseren in een registratie. 

#### Patroon ‘Afnemen’ 
Een systeemgebeurtenis (zoals een bijhouding van de bronhouder) triggert een proces. Dit proces leidt (in veel gevallen) tot het notificeren van gebeurtenissen richting (eventuele) afnemers. Afnemers bepalen zelf of zij op basis van ontvangen notificaties data op gaan halen. De volgende principes worden benoemd binnen dit patroon.
<BR>
<BR>
API-01: Een API in de categorie Notificeren faciliteert het melden van gebeurtenissen aan een afnemer.  
Een notificatie is een melding van een gebeurtenis die een procestrigger vormt. Een gebeurtenis kan een wijziging in de gegevens van de bronhouder tot gevolg hebben en daarom kan het zinvol zijn voor een afnemer hierover genotificeerd te worden. Gebeurtenissen worden te allen tijde door bronhouder gecommuniceerd richting een broker (bijvoorbeeld ESB/API-Gateway) zo kort mogelijk na het optreden van de gebeurtenis, ongeacht of er afnemers zijn. Dit is de verantwoordelijkheid van de bronhouder. Indien er een afnemer is brengt de notificatie de afnemer op de hoogte van de gebeurtenis. Dit triggert bij de afnemer een proces: De afnemer is aan zet om te oordelen wat de passende vervolgacties zijn bij het ontvangen van de notificatie. 
Een notificatie bevat geen content anders dan identificerende (functionele) gegevens.
Notificaties worden toegezonden aan afnemers die middels afnemerindicaties hebben aangegeven notificaties te willen ontvangen. 
<BR>
<BR>
API-02: Een API in de categorie Notificeren faciliteert het melden van gebeurtenissen aan een afnemer.  
Afnemers die via API Notificeren gegevens willen ontvangen nemen op het niveau van een resource (dus niet instelbaar op een specifiek data-object) in de breedte van het geografische verzorgingsgebied gebeurtenissen af.
Uitzondering:
Voor de BRP (en eventuele registraties of data waar privacy op rust) is hier gelet op de privacywetgeving een uitzondering op. Voor het afnemen van personen uit de BRP dient per persoon een specifieke afnemerindicatie geplaatst te zijn door de afnemer, in lijn met zijn doelbinding. Geadviseerd wordt afnemerindicaties te plaatsen door het uitwisselen van het 'BSN' en niet door het uitwisselen van een technische sleutel.
<BR>
<BR>
API-03: Notificaties zijn gebaseerd op de informatiebehoefte van bedrijfsprocessen.
Afhankelijk van de informatiebehoefte bij afnemers voor het triggeren van bedrijfsprocessen worden notificaties onderkend. 
In grote lijnen komt dit overeen met de gebeurtenissen die in de ontwerpdocumenten of berichtencatalogi van bronregistraties zijn onderkend.
<BR>
<BR>
API-04: Een API in de categorie Opvragen faciliteert het uitwisselen van gegevens op basis van een vraag-antwoord constructie.
De categorie Opvragen wordt gebruikt voor het op afroep verkrijgen van gegevens uit een bron, of diensten vanuit een dienstenaanbieder via synchrone calls. 
Naargelang de informatiebehoefte van de afnemer kunnen API’s in de categorie Opvragen worden ingericht voor het verstrekken van gegevens (voor zowel raadplegen, zoeken als massaal bevragen t.b.v. synchroniseren) of het aanroepen van een dienst. Het informatiemodel van de bronhouder is leidend bij het ophalen van gegevens.
<BR>
<BR>
API-05: Een vraag/antwoord API ondersteunt het opvragen van een concreet afgebakende set gegevens.
Elke response van de categorie Opvragen omvat maximaal (afhankelijk van autorisatie, zie design decision BRP API) de attributen, relaties en de identificerende gegevens van de gerelateerde, maar niet de gerelateerde resources in zijn geheel. Het verkrijgen van de gerelateerde resources vereist het stellen van een nieuwe vraag (nieuwe API-call uit categorie Opvragen).  
- De bronhouder is verantwoordelijk voor de autorisatie op organisatie-niveau.
- De provider bepaalt het maximum aantal responses en niet de consumer. De API geeft een foutmelding wanneer er teveel resultaten zijn op de vraag.
- De afnemer kent de doelbinding van het verzoek en stuurt de aanduiding van de doelbinding mee in de call.

#### Patroon ‘Terugmelden’
Een systeemgebeurtenis (zoals het verwerken van een antwoord door de afnemer) triggert een proces. Dit proces kan leiden tot het verrichten van een terugmelding, aangezien de afnemer twijfelt aan de juistheid van de gegevens. De afnemer signaleert dit richting bronhouder.
<BR>
<BR>
API-01: Een afnemer verricht een terugmelding bij gerede twijfel aan de juistheid van de gegevens.
Gegevens in bronregistraties moeten actueel en betrouwbaar zijn. Terugmelden is één van de instrumenten om de kwaliteit van registraties te borgen. Iedere terugmelding draagt bij aan het verbeteren van een overheidsadministratie. 
Afnemers van de registraties hebben daarom de wettelijke plicht om mogelijk onjuiste gegevens te melden als het gaat om authentieke gegevens. Voor niet-authentieke gegevens geldt die verplichting niet. 
Het proces van terugmelden zorgt ervoor dat de fout in de registratie wordt gesignaleerd en na onderzoek door de bronhouder zo nodig wordt hersteld, waardoor alle afnemers vervolgens het juiste gegeven kunnen gebruiken.
Het proces van Terugmelden onderscheidt 3 fasen:
- De signalering van mogelijk onjuiste gegevens door de afnemer of de betrokkene (correctierecht).
- Het in onderzoek nemen van het gemelde gegeven door de bronhouder.
- De correctie en beschikbaarstelling van het gemelde gegeven aan de afnemer die het gegeven had gesignaleerd en afnemers die zijn geabonneerd op wijzigingen van de desbetreffende gegevens (dit behoort weer tot het patroon ‘Bijhouden’).

De verschillende patronen zijn aan elkaar gerelateerd en hebben een duidelijke afhankelijkheid. Dit is in onderstaand figuur afgebeeld. Per patroon is ook aangegeven hoe gebeurtenissen, processen en datastromen zich tot elkaar verhouden.
	
<figure id='patronen'>
	<img src='media/visualisatie%20patronen.png' width="400" />
	<figcaption>Visualisatie patronen (gelaagdheid tussen real life, proces en data).</figcaption>
 </figure>
<BR>


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
