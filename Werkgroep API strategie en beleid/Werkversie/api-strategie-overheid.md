# API strategie voor de overheid
*Dit is een nieuwe versie van het werkdocument, gebaseerd op de feedback uit de bijeenkomst op **3 juni** en het commentaar op Github. De belangrijkste wijzigingen zijn:*
- *De Visie start vanuit het concept van de platformeconomie, en is aangevuld en verder aangescherpt in de laatste alinea.*
- *Basisafspraken is nu **intentieovereenkomst** en is nu minder hard. Ook nuances aangebracht in enkele afspraken. En afspraak verwijderd van het NLX afspraak.
- *De tijdlijn ontbreekt nog (hebben we die wel nodig?) 
- *Praktijkvoorbeeld 'Een API voor regie op gegevens is aangevuld en sluit ook aan op het VNG-R model API
- *Praktijkvoorbeeld 'De API voor Zaakgericht Werken van Common Ground' is aangescherpt.
- *Toevoeging HF 'Samenvattend' om een brug te vormen tussen de HF Praktijkvoorbeelden en HF Ondertekening. 

## Visie

Wij leven in een maatschappij waarin ICT-platformen een steeds grotere rol spelen in het bij elkaar brengen van vraag en aanbod van producten en diensten. Denk aan AirBnB, Über, Funda en Thuisbezorgd. Maar ook aan publieke platformen zoals [OVChipkaart.nl](https://www.ov-chipkaart.nl/home.htm#/) en [Publieke Dienstverlening Op Kaart](https://www.pdok.nl/). Een belangrijk kenmerk van deze platformen is het gemak en de flexibiliteit waarmee gebruikers diensten kunnen aanbieden en afnemen. Zo kan Funda een applicatie als Google Maps gebruiken om op een kaart te laten zien waar in Nederland huizen te koop staan. Burgers en bedrijven verwachten dit ook van de overheid. Daarbij mogen zij verwachten dat iedereen binnen de overheid gebruik maakt van dezelfde gelijke data. Volgens de Kamer van Koophandel is er geen weg meer terug uit deze platformeconomie. Volgens de Kamer van Koophandel is er [geen weg meer terug](https://www.kvk.nl/advies-en-informatie/overheid/platformeconomie-er-is-geen-weg-terug/) uit deze platformeconomie. 

De platformeconomie is actueel en maatschappelijk relevant of het we het nu hebben over de Informatiehuishouding op orde (rapport ‘Ongekend onrecht’ de kinderopvangtoeslag problematiek en ‘Werk aan uitvoering’ de problemen bij uitvoeringsorganisaties), over de Interbestuurlijke Datastrategie, over de toekomstvisie op het stelsel van Basisregistraties, of de over doorontwikkeling van de GDI (meerjarig geprogrammeerd en onder architectuur): ze veronderstellen een modernisering van de binnenkant van de gegevensuitwisseling. Platformen, API’s en afgedwongen standaarden zijn daarin onmisbaar. Platformen hebben gestandaardiseerde  ICT koppelvlakken die applicaties en gegevensbronnen aan elkaar verbinden.  Hiervoor gebruiken zij APIs. Een  [application programming interface](https://www.ensie.nl/dimitri-van-hees/api)  (API) is een gestructureerd en gedocumenteerd koppelvlak voor communicatie tussen applicaties. Je kan een API zien als een digitale stekkerdoos die applicaties met elkaar verbindt.

APIs bestaan al zo lang er computers zijn. De meeste platformen gebruiken APIs onder de motorkap zonder dat de eindgebruiker dat ziet. Als je bijvoorbeeld een app opent voor het weer, dan merk je niet dat deze app gegevens ophaalt bij het  [KNMI via een API](https://meteoserver.nl/real-time-KNMI-weer-API.php). Degene die het meest met een API te maken krijgt is de ontwikkelaar van de applicatie die de API gebruikt. Zij moet begrijpen hoe de API werkt en hoe je deze vanuit de applicatie moet bevragen.

Ook de overheid gebruikt steeds vaker APIs om applicaties en gegevensbronnen te ontsluiten en met elkaar te koppelen. Bijvoorbeeld in initiatieven zoals [Haal Centraal](https://www.vngrealisatie.nl/nieuws/start-programma-haal-centraal), [Common Ground](https://commonground.nl/) en het [Digitaal Stelsel Omgevingswet](https://aandeslagmetdeomgevingswet.nl/digitaal-stelsel/).

Toch heeft de overheid ook veel ICT systemen in gebruik die niet als platformen werken, maar als gesloten systemen waarin de gegevens helemaal met de applicatie verweven zijn. Vaak werken deze systemen met kopieën van cruciale gegevensbronnen zoals basisregistraties. Dat brengt een aantal nadelen met zich mee:
1. De kans op fouten en datalekken neemt toe bij het kopiëren en verspreid opslaan van gegevens.
2. Het kopiëren en synchroniseren van gegevens tussen systemen is vaak inefficiënt en kost meer geld dan nodig.
3. Bij nieuw beleid dat nieuwe uitwisselingen nodig maakt, moeten op veel plaatsen maatwerk koppelingen worden gebouwd, en geïmplementeerd, waardoor vernieuwing in beleid lange doorlooptijden van invoering kennen.
4. Personen en bedrijven hebben geen regie over hun gegevens als deze bij verschillende organisaties verspreid staan.
5. Systemen met maatwerkkoppelingen kunnen afhankelijkheid van leveranciers in de hand werken.

In onze visie zal de digitale overheid de komende jaren gegevens steeds meer veilig en efficiënt uitwisselen door applicaties zoveel mogelijk te scheiden van de data, en deze gegevens bij de bron te bewaren, en ze zoveel mogelijk actueel te gaan halen - in een veilige infrastructuur -zodra het gegeven voor een zaak nodig is. Hiermee biedt de overheid een gedemocratiseerde toegang tot evenwichtige en consistente informatie, onafhankelijk van de complexiteit van achterliggende systemen, voor burgers, bedrijven en ketenpartners van de overheid.

## Intentieovereenkomst
Bij het realiseren van deze visie volgt de overheid een aantal afspraken:
1. Waar de overheid REST APIs inzet, gebeurt dat volgens de [REST API Design Rules](https://docs.geostandaarden.nl/api/API-Designrules/). Zo biedt de overheid haar REST APIs op een standaard manier en goed gedocumenteerd aan.
2. De overheid registreert haar publieke toegankelijke REST APIs bij [developer.overheid.nl](https://developer.overheid.nl). Zo kunnen ontwikkelaars de APIs van de overheid altijd vinden.
3. Veilige autorisatie van toegang tot REST APIs realiseert de overheid met het [NL GOV Assurance Profile for OAuth 2.0](https://docs.geostandaarden.nl/api/oauth/). Dit profiel op de authorisatie standaard OAuth is speciaal ontwikkeld voor de Nederlandse overheid.
4. Voor het leggen van een veilige verbinding met een gegevensbron gebruikt de overheid de standaard [DigiKoppeling](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/basisregistraties-en-stelselafspraken/stelselvoorzieningen/digikoppeling/). Deze standaard maakt het ook mogelijk om een een REST API aan te bieden op een veilige manier die voldoet aan punten 1 en 3 hierboven.


## Praktijkvoorbeelden
In dit deel laten we een aantal domeinen zien waar de overheid al met succes APIs toepast om applicaties en gegevensbronnen te koppelen.


### De API op de Basisregistratie Personen (BRP) van Haal Centraal
Binnen het programma [Haal Centraal](https://www.vngrealisatie.nl/producten/haal-centraal) experimenteert de [Rijksdienst voor Identiteitsgegevens](https://www.rvig.nl/) (RvIG), de vijf grote gemeenten (Amsterdam, Den Haag, Eindhoven, Rotterdam en Utrecht) en [VNG Realisatie](https://www.vngrealisatie.nl/) met een API waarmee gemeenten direct de [Basisregistratie Personen](https://www.rvig.nl/brp) (BRP) kunnen raadplegen. In 2021 gaan 10 gemeenten deze API gebruiken en beproeven in een pilot.

Over de voordelen van de BRP API heeft Haal Centraal een heldere [video](https://youtu.be/1xzijzjA15A) gemaakt. De specificatie van de API is al te vinden op [Github repository van VNG](https://github.com/VNG-Realisatie/Haal-Centraal-BRP-bevragen). Wanneer de pilot slaagt, komt de API mogelijk later beschikbaar voor alle gemeenten en overige overheidsorganisaties die de BRP raadplegen.

### De API voor Zaakgericht Werken van Common Ground
Deze manier van werken richt zich op het transparant afhandelen van een samenhangende hoeveelheid werk (een 'zaak'), welke een duidelijk omschreven aanleiding kent (bijvoorbeeld een aanvraag) en leidt tot een duidelijk omschreven resultaat. ICT systemen ondersteunen zaakgericht werken met als voordelen:
- Automatische termijnbewaking.
- Automatisch routeren van taken naar betrokken medewerkers of systemen.
- Het parallel kunnen uitvoeren van samenhangende taken.
- Geautomatiseerd toekennen van metadata.
- Duurzaam toegankelijk bewaren van het zaakdossier.

*Moet nog verder worden uitgewerkt.*

### De BRK Publiekrechtelijke Beperkingen
Sinds 2021 is de nieuwe [Wet kenbaarheid publiekrechtelijke beperkingen](https://wetten.overheid.nl/BWBR0016876/2021-01-01) (Wkpb) van kracht. Deze nieuwe wet schrijft wijzigingen voor in het systeem voor het kenbaar maken van [publiekrechtelijke beperkingen](https://www.kadaster.nl/publiekrechtelijke-beperkingen).

In het oude systeem registreerden de gemeenten hun eigen gegevens terwijl andere overheden de basisregistratie van het Kadaster gebruikten. Deze twee langs elkaar werkende systemen brachten allerlei problemen met zich mee. Overheden, notarissen en makelaars moesten vaak beide registraties raadplegen. Het was niet mogelijk om gemeentelijke brondocumenten bij het Kadaster op te vragen. En soms bleek de gemeentelijke situatie van een pand of object niet overeen te komen met de kenmerken zoals die in de basisregisters van het Kadaster zijn vastgelegd.

Het nieuwe systeem registreert en beheert alle publiekrechtelijke beperkingen in de Basisregistratie Kadaster publiekrechtelijke beperkingen (BRK-PB). Overheden en organisaties uit de private sector hebben zo een unieke bron waar ze alle gegevens kunnen raadplegen.

De [Basisregistratie Kadaster](https://www.kadaster.nl/zakelijk/registraties/basisregistraties/brk) (BRK) kan al benaderd worden met de [BRK-API](https://www.kadaster.nl/zakelijk/producten/eigendom/brk-bevragen). De BRK-BP sluit zo beter aan bij de andere basisregistraties van het Kadaster zoals de [Basisregistratie Adressen en Gebouwen](https://www.kadaster.nl/zakelijk/registraties/basisregistraties/bag) (bijvoorbeeld voor woningen) en de [Basisregistratie Grootschalige Topografie](https://www.kadaster.nl/zakelijk/registraties/basisregistraties/bgt) (bijvoorbeeld voor monumentale infrastructuur).

Het bij de bron registreren en beheren van gegevens heeft hier dus zichtbare meerwaarde, zowel voor de overheid als voor de private sector , zie ook dit [artikel in Binnenlands Bestuur](https://www.binnenlandsbestuur.nl/digitaal/nieuws/notarissen-niet-gelukkig-met-lakse-gemeenten.15795830.lynkx).

*Is er een link naar de BRP-PB? Verder noemde Frans het portaal [ruimtelijkeplannen.nl](https://www.ruimtelijkeplannen.nl/) als mogelijk voorbeeld.*

### Een API voor regie op gegevens

De [Wet bescherming persoonsgegevens](https://wetten.overheid.nl/BWBR0011468/2018-05-01) (Wrp) en z'n opvolger, de [Algemene verordening gegevensbescherming](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679&from=NL) (AVG) geven ons al bijna twintig jaar recht op inzage en correctie van de gegevens die de overheid over ons verzamelt en beheert. Dit betekent dat je als burger het recht hebt om te weten welke persoonsgegevens de overheid over je heeft vastgelegd en welke gegevens de overheid heeft gebruikt en uitgewisseld voor welk doel.

In de praktijk kan de overheid vaak niet eenvoudig voldoen aan dit recht. Als je aan je gemeente vraagt welke instanties je persoonsgegevens uit de BRP hebben geraadpleegd, kan je meestal op niet meer rekenen dan een uitdraai van het logbestand uit het lokale ICT systeem. Zo'n logbestand is een lange lijst termen en codes waar je weinig aan hebt als je het ICT systeem niet kent. En dan weet je nog niet wie er in het centrale BRP bij je gegevens geweest is. Daarvoor moet je dan weer bij de RvIG zijn. Om het inzicht in de verstrekking van persoonsgegevens veel eenvoudiger te maken, is er door [VNG-Realisatie een model API opgesteld](https://commonground.nl/cms/view/c99f1789-adba-4fa7-bc2d-e1f8a96618c5/api-standaarden-voor-logging-en-verwerking), die overheden in staat kan stellen de logging op verwerking van persoonsgegevens op een toegankelijke manier te tonen. Tonen aan de eigen FG (functionaris gegevensbescherming), of aan toezichthouders, en op aanvraag dus ook de betrokkene zelf. Deze API haakt aan bij wat conform de AVG al tot stand komt: de organisatie-brede registers van verwerkingen van persoonsgegevens. De model API is opgesteld met de veelheid van gemeentelijk taken en systemen in het achterhoofd, maar is nadrukkelijk organisatie-neutraal in zijn modellering. Implementatie van API’s volgens dit model is een belangrijke uitdaging voor de komende jaren.

In 2017 liet het ministerie van Binnenlandse Zaken en Koninkrijksrelaties op verzoek van de Tweede Kamer door Berenschot een [onderzoek](https://zoek.officielebekendmakingen.nl/blg-817465.pdf) doen om inzicht te krijgen hoe, wanneer en met welk budget de overheid werkelijk kan voldoen aan het recht van inzage en correctie. Berenschot concludeerde in het onderzoek dat volledig digitale inzage in alle relevante persoonsgegevens die onder de AVG vallen, in het huidige gegevenslandschap niet haalbaar is.

In de [beleidsbrief regie op gegevens](https://www.rijksoverheid.nl/documenten/brieven/2019/07/11/beleidsbrief-regie-op-gegevens-nadere-uitwerking) van 2019 onderstreept het kabinet nog eens het beleidsvoornemen om serieus werk te maken van regie op gegevens. Zowel voor het digitaal delen van gegevens met derden onder regie van de betrokkene, als voor het inzicht krijgen in de verstrekking van je persoonsgegevens aan andere overheidsinstanties. Maar dan er zal er dus iets moeten gebeuren in het gegevenslandschap om dit mogelijk te maken. En de model API van VNG-R is daarin een heel waardevol ingrediënt.

Als de overheid gegevens bij de bron gaat beheren en ontsluiten met APIs, wordt het gemakkelijker om bij de bron volledige inzage te geven. De overheid kan dan digitale inzage geven in een uniform gebruiksvriendelijk format, en ook de correctie van gegevens wordt eenvoudiger.

## Samenvattend
De platformeconomie biedt nieuwe kansen voor de digitale overheid. Om deze kansen te benutten en tegelijkertijd de dienstverlening van de digitale overheid te verbeteren vindt er transitie plaats in het gegevenslandschap. Initiatieven zoals Common Ground, Haal Centraal en het Digitaal Stelsel Omgevingswet (DSO) willen de digitale overheid efficiënter, veiliger en beter beheersbaar maken door applicaties beter te scheiden van de gegevens en de gegevens alleen bij de bron te beheren. Hierdoor hoeven gegevens niet meer op grote schaal gedupliceerd en gesynchroniseerd te worden. In deze ambitie spelen API’s als ondersteunende technologie een belangrijke rol. Nagenoeg alle organisaties binnen de overheid zijn de omslag van traditionele IT naar een API-ecosysteem aan het maken. Dit hoofdstuk biedt een kader aan waarbinnen de overheid zich committeert bij het ontwikkelen en te realiseren beleid rondom API’s. Om die reden krijgen publieke en private partijen die hebben bijgedragen aan deze API strategie het verzoek om de intentieovereenkomst te ondertekenen.

## Ondertekening
De hieronder vermelde organisaties hebben bijgedragen aan deze API strategie voor de overheid en onderschrijven de basisafspraken:
... | [Forum Standaardisatie](https://forumstandaardisatie.nl/) | [ICTU](https://www.ictu.nl/)  | [Logius](https://www.logius.nl/) | [Ministerie van Binnenlandse Zaken en Koninkrijksrelaties](https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties) | [VNG Realisatie](https://www.vngrealisatie.nl/)  | ...
*Dit is nog geen officiële lijst van ondertekenaars, en hier moeten natuurlijk alle organisaties komen te staan die achter de API strategie staan en het manifest willen ondertekenen.*
