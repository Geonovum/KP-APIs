# API strategie voor de overheid
<!-- [comment]: <> ( *Dit is een nieuwe versie van het werkdocument, gebaseerd op de feedback uit de bijeenkomst op **29 juni** en het commentaar op Github. De belangrijkste wijzigingen zijn:* )

Verwerkt:
- *Termen als 'publiek' vs. 'open' vs. 'extern'. worden consistent gebruikt, conform de API strategie: https://docs.geostandaarden.nl/api/API-Strategie/#intern-extern-open-gesloten*
- *Voorbeeld, De API op de Basisregistratie Personen (BRP) van Haal Centraal is aangepast en in lijn met de andere voorbeelden.*
- *Voorbeeld, De API voor Zaakgericht Werken van Common Ground is aangescherpt.*
- *- Tekstvoorstel waarin de link wordt gelegd met Government as a Platform*

Nog todo (wacht op input):

- Voorbeeld waarin ook de relatie met de bestaande wetgeving wordt gelegd.

- Verkorte versie van voorbeeld: "een API voor regie op gegevens") -->

## Visie

In onze visie zal de digitale overheid de komende jaren gegevens steeds meer veilig en efficiënt uitwisselen door applicaties zoveel mogelijk te scheiden van de data, en deze gegevens bij de bron te bewaren, en ze zoveel mogelijk actueel te gaan halen - in een veilige infrastructuur -zodra het gegeven voor een zaak nodig is. Hiermee biedt de overheid een gedemocratiseerde toegang tot evenwichtige en consistente informatie, onafhankelijk van de complexiteit van achterliggende systemen, voor burgers, bedrijven en ketenpartners van de overheid. Wij leven bovendien in een maatschappij waarin ICT-platformen een steeds grotere rol spelen in het bij elkaar brengen van vraag en aanbod van producten en diensten. Denk aan AirBnB, Über, Funda en Thuisbezorgd. Maar ook aan publieke platformen zoals [OVChipkaart.nl](https://www.ov-chipkaart.nl/home.htm#/) en [Publieke Dienstverlening Op Kaart](https://www.pdok.nl/). Een belangrijk kenmerk van deze platformen is het gemak en de flexibiliteit waarmee gebruikers diensten kunnen aanbieden en afnemen. Zo kan Funda een applicatie als Google Maps gebruiken om op een kaart te laten zien waar in Nederland huizen te koop staan. Burgers en bedrijven verwachten dit ook van de overheid. Daarbij mogen zij verwachten dat iedereen binnen de overheid gebruik maakt van dezelfde gelijke data. Volgens de Kamer van Koophandel is er [geen weg meer terug](https://www.kvk.nl/advies-en-informatie/overheid/platformeconomie-er-is-geen-weg-terug/) uit deze platformeconomie. 

Door standaardisatie van berichtuitwisseling, het ontsluiten van brondata en het hergebruik van de data en informatieproducten, neemt de operabiliteit van de overheid enorm toe en is de overheid in staat om sneller dienstverlening aan het publiek te leveren. De overheid gaat zich meer als een platform gedragen, [Government as a platform](https://martijndewaal.nl/?p=1766). Daar waar de overheid traditioneel is georganiseerd als silo’s, worden grenzen doorbroken door het hergebruik van services over de silo’s heen te faciliteren. Diensten kunnen op deze manier meer rond de burger en ondernemer worden georganiseerd, in plaats van volgens de structuur van de organisaties binnen de overheid. 

Platformen hebben gestandaardiseerde  ICT koppelvlakken die applicaties en gegevensbronnen aan elkaar verbinden.  Hiervoor gebruiken zij APIs. Een  [application programming interface](https://www.ensie.nl/dimitri-van-hees/api)  (API) is een gestructureerd en gedocumenteerd koppelvlak voor communicatie tussen applicaties. Je kan een API zien als een digitale stekkerdoos die applicaties met elkaar verbindt. APIs bestaan al zo lang er computers zijn. De meeste platformen gebruiken APIs onder de motorkap zonder dat de eindgebruiker dat ziet. Als je bijvoorbeeld een app opent voor het weer, dan merk je niet dat deze app gegevens ophaalt bij het  [KNMI via een API](https://meteoserver.nl/real-time-KNMI-weer-API.php). Degene die het meest met een API te maken krijgt is de ontwikkelaar van de applicatie die de API gebruikt. Zij moet begrijpen hoe de API werkt en hoe je deze vanuit de applicatie moet bevragen. Ook de overheid gebruikt steeds vaker APIs om applicaties en gegevensbronnen te ontsluiten en met elkaar te koppelen. Bijvoorbeeld in initiatieven zoals [Haal Centraal](https://www.vngrealisatie.nl/nieuws/start-programma-haal-centraal), [Common Ground](https://commonground.nl/) en het [Digitaal Stelsel Omgevingswet](https://aandeslagmetdeomgevingswet.nl/digitaal-stelsel/). De overheid heeft door ervaring van deze initiatieven voldoende kennis en expertise voor het gebruik van APIs in een moderene informatiehuishouding. 

Toch heeft de overheid ook veel ICT systemen in gebruik die niet als platformen werken, maar als gesloten systemen waarin de gegevens helemaal met de applicatie verweven zijn. Vaak werken deze systemen met kopieën van cruciale gegevensbronnen zoals basisregistraties. Dat brengt een aantal nadelen met zich mee:
1. De kans op fouten en datalekken neemt toe bij het kopiëren en verspreid opslaan van gegevens.
2. Het kopiëren en synchroniseren van gegevens tussen systemen is vaak inefficiënt en kost meer geld dan nodig.
3. Bij nieuw beleid dat nieuwe uitwisselingen nodig maakt, moeten op veel plaatsen maatwerk koppelingen worden gebouwd, en geïmplementeerd, waardoor vernieuwing in beleid lange doorlooptijden van invoering kennen.
4. Personen en bedrijven hebben geen regie over hun gegevens als deze bij verschillende organisaties verspreid staan.
5. Systemen met maatwerkkoppelingen kunnen afhankelijkheid van leveranciers in de hand werken.

De platformeconomie is actueel en maatschappelijk relevant of het we het nu hebben over de Informatiehuishouding op orde (rapport ‘Ongekend onrecht’ de kinderopvangtoeslag problematiek en ‘Werk aan uitvoering’ de problemen bij uitvoeringsorganisaties), over de Interbestuurlijke Datastrategie, over de toekomstvisie op het stelsel van Basisregistraties, of de over doorontwikkeling van de GDI (meerjarig geprogrammeerd en onder architectuur): ze veronderstellen een modernisering van de binnenkant van de gegevensuitwisseling. Platformen, API’s en afgedwongen standaarden zijn daarin onmisbaar. 

[comment]: <> (hier moet nog het stuk rondom government as a platform, done 7-9-2021)
[comment]: <> (laatste alinea is eigenlijk de visie, mogelijk naar boven verhuizen ? )


## Intentieovereenkomst
Bij het realiseren van deze visie volgt de overheid een aantal bestaande afspraken (1 /tm 3) van het [Forum Standaardisatie](https://www.forumstandaardisatie.nl/open-standaarden/verplicht?domein=126) deze zijn al bekrachtigd in het Overheidsbreed Beleidsoverleg Digitale Overheid (OBDO) :

1. Waar de overheid REST APIs inzet, gebeurt dat volgens de [REST API Design Rules](https://docs.geostandaarden.nl/api/API-Designrules/). Zo biedt de overheid haar REST APIs op een standaard manier en goed gedocumenteerd aan.
2. Veilige autorisatie van toegang tot REST APIs realiseert de overheid met het [NL GOV Assurance Profile for OAuth 2.0](https://docs.geostandaarden.nl/api/oauth/). Dit profiel op de authorisatie standaard OAuth is speciaal ontwikkeld voor de Nederlandse overheid.
3. Voor het leggen van een veilige verbinding met een gegevensbron gebruikt de overheid de standaard [DigiKoppeling](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/basisregistraties-en-stelselafspraken/stelselvoorzieningen/digikoppeling/). Deze standaard maakt het ook mogelijk om een een REST API aan te bieden op een veilige manier die voldoet aan punten 1 en 3 hierboven.
4. De overheid registreert haar extern toegankelijke REST APIs bij [developer.overheid.nl](https://developer.overheid.nl). Zo kunnen ontwikkelaars de APIs van de overheid altijd vinden.

[comment]: <> (het expliciet onderschrijven van deze visie moet ook ergens in het document staan, wat is de beste plek ? )


## Praktijkvoorbeelden

[comment]: <> (In dit deel laten we een aantal domeinen zien waar de overheid al met succes APIs toepast om applicaties en gegevensbronnen te koppelen. )

### De API op de Basisregistratie Personen (BRP) van Haal Centraal
Persoonsgegevens uit de Basisregistratie Personen (BRP) worden nu vaak gesynchroniseerd met een lokale kopiedatabase bij een gemeente. In de processen van de gemeente wordt dan die kopiedatabase bevraagd in processen waar persoonsgegevens nodig zijn. Binnen het programma [Haal Centraal](https://www.vngrealisatie.nl/producten/haal-centraal) experimenteert de [Rijksdienst voor Identiteitsgegevens](https://www.rvig.nl/) (RvIG), de vijf grote gemeenten (Amsterdam, Den Haag, Eindhoven, Rotterdam en Utrecht) en [VNG Realisatie](https://www.vngrealisatie.nl/) met een API waarmee gemeenten in hun werkprocessen direct de Basisregistratie Personen (BRP) kunnen bevragen. In totaal 10 gemeenten gaan deze API gebruiken en beproeven in een pilot.

Over de voordelen van de BRP API heeft Haal Centraal een heldere [video](https://youtu.be/1xzijzjA15A) gemaakt. De specificatie van de API uit de pilot is te vinden op [Github repository van VNG](https://github.com/VNG-Realisatie/Haal-Centraal-BRP-bevragen). Wanneer de pilot slaagt, komt mogelijk een API beschikbaar voor alle gemeenten en andere overheidsorganisaties die de BRP nu via het huidige berichtenverkeer raadplegen.


### De API voor Zaakgericht Werken van Common Ground
Veel gemeenten werken zaakgericht. Dit betekent dat informatie over dienstverlening aan inwoners in zaken is geordend in een zaaksysteem. 
Deze manier van werken richt zich op het transparant afhandelen van een samenhangende hoeveelheid werk (een 'zaak'), welke een duidelijk omschreven aanleiding kent (bijvoorbeeld een aanvraag) en leidt tot een duidelijk omschreven resultaat. 

ICT systemen ondersteunen zaakgericht werken met als [voordelen](https://vng.nl/sites/default/files/2021-03/20210302-ledenbrief-bijlage-meer-informatie-over-api-standaarden.pdf) het automatische termijnbewaking en routeren van taken naar betrokken medewerkers of systemen.
Met daarbij ook het parallel kunnen uitvoeren van samenhangende taken, geautomatiseerd toekennen van metadata en het duurzaam toegankelijk bewaren van het zaakdossier. [De API-standaarden voor zaakgericht werken](https://www.vngrealisatie.nl/producten/api-standaarden-zaakgericht-werken) helpen bij het (ont)koppelen van zaaksystemen en de registers waar documenten en overige informatie in zijn opgeslagen. Als alle gemeenten de API-standaarden voor zaakgericht werken gebruiken, wordt de uitwisseling van gegevens voor deze systemen efficiënter. Het is bovendien een belangrijke stap in het realiseren van Common Ground, iets waar alle gemeenten naar streven.

### De API voor Basisregistratie Kadaster (BRK) - Publiekrechtelijke Beperkingen
De Wet kenbaarheid publiekrechtelijke beperkingen onroerende zaken (Wkpb) geeft inzicht in door de overheid opgelegde beperkingen op een stuk grond of een daarop staand gebouw. Sinds 2021 is de vernieuwde [Wet kenbaarheid publiekrechtelijke beperkingen](https://wetten.overheid.nl/BWBR0016876/2021-01-01) (Wkpb) van kracht. Deze vernieuwde wet schrijft wijzigingen voor in het systeem voor het kenbaar maken van [publiekrechtelijke beperkingen](https://www.kadaster.nl/publiekrechtelijke-beperkingen). Inwoners, ondernemers en overige partijen kunnen alle informatie over beperkingen en bijbehorende brondocumenten bij één partij kunnen vinden: het Kadaster.

In het oude systeem registreerden de gemeenten hun eigen gegevens terwijl andere overheden de basisregistratie van het Kadaster gebruikten. Deze twee langs elkaar werkende systemen brachten allerlei problemen met zich mee. Het was niet mogelijk om gemeentelijke brondocumenten bij het Kadaster op te vragen. En soms bleek de gemeentelijke situatie van een pand of object niet overeen te komen met de kenmerken zoals die in de basisregisters van het Kadaster zijn vastgelegd. Voorts konden overheden in het oude systeem alleen beperkingen opleggen op een kadastraal perceel, wat in veel gevallen niet aansloot op de praktijk. De vernieuwde Wkpb registreert en beheert alle publiekrechtelijke beperkingen in de Basisregistratie Kadaster publiekrechtelijke beperkingen (BRK-PB). Overheden en organisaties uit de private sector hebben zo een unieke bron waar ze alle gegevens kunnen raadplegen. En omdat beperkingen nu, behalve op een perceel, ook gelegd kunnen worden op objecten uit de de basisregistraties Adressen en Gebouwen (BAG) en Grootschalige Topografie (BGT), of via een zelf vervaardigde contour, sluit de registratie veel beter aan op de uitvoeringspraktijk.

De [BRK-PB](https://www.kadaster.nl/zakelijk/registraties/basisregistraties/brk) kan al benaderd worden met de [BRK-API](https://www.kadaster.nl/zakelijk/producten/eigendom/brk-bevragen). Het bij de bron registreren en beheren van gegevens heeft hier dus zichtbare meerwaarde, zowel voor de overheid als voor de private sector , zie ook dit [artikel in Binnenlands Bestuur](https://www.binnenlandsbestuur.nl/digitaal/nieuws/notarissen-niet-gelukkig-met-lakse-gemeenten.15795830.lynkx).

[comment]: <> (Is er een link naar de BRK-PB? Verder noemde Frans het portaal https://www.ruimtelijkeplannen.nl/ als mogelijk voorbeeld. )

### De API voor regie op gegevens
De [Wet bescherming persoonsgegevens](https://wetten.overheid.nl/BWBR0011468/2018-05-01) (Wrp) en z'n opvolger, de [Algemene verordening gegevensbescherming](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679&from=NL) (AVG) geven ons al bijna twintig jaar recht op inzage en correctie van de gegevens die de overheid over ons verzamelt en beheert. Dit betekent dat je als burger het recht hebt om te weten welke persoonsgegevens de overheid over je heeft vastgelegd en welke gegevens de overheid heeft gebruikt en uitgewisseld voor welk doel. Uit dit [onderzoek](https://zoek.officielebekendmakingen.nl/blg-817465.pdf) uit 2017 van Berenschot (uitgevoerd in opdracht van BZK) blijkt dat volledig digitale inzage in alle relevante persoonsgegevens die onder de AVG vallen, in het huidige gegevenslandschap niet haalbaar is.

In de [beleidsbrief regie op gegevens](https://www.rijksoverheid.nl/documenten/brieven/2019/07/11/beleidsbrief-regie-op-gegevens-nadere-uitwerking) regie op gegevens van 2019 onderstreept het kabinet nog eens het beleidsvoornemen om serieus werk te maken van regie op gegevens. Maar dan er zal er dus iets moeten gebeuren in het gegevenslandschap om dit mogelijk te maken.

Om het inzicht in de verstrekking van persoonsgegevens veel eenvoudiger te maken, is er door [VNG-Realisatie een model API opgesteld](https://commonground.nl/cms/view/c99f1789-adba-4fa7-bc2d-e1f8a96618c5/api-standaarden-voor-logging-en-verwerking), die overheden in staat kan stellen de verwerking van persoonsgegevens op een toegankelijke manier te tonen. Deze API haakt aan bij wat conform de AVG al tot stand komt: de organisatie-brede registers van verwerkingen van persoonsgegevens. Als de overheid gegevens bij de bron gaat beheren en ontsluiten met APIs, wordt het gemakkelijker om bij de bron volledige inzage te geven. De overheid kan dan digitale inzage geven in een uniform gebruiksvriendelijk format, en ook de correctie van gegevens wordt eenvoudiger.

## Samenvattend
De platformeconomie biedt nieuwe kansen voor de digitale overheid. Om deze kansen te benutten en tegelijkertijd de dienstverlening van de digitale overheid te verbeteren vindt er transitie plaats in het gegevenslandschap. Initiatieven zoals Common Ground, Haal Centraal en het Digitaal Stelsel Omgevingswet (DSO) willen de digitale overheid efficiënter, slimmer, veiliger en beter beheersbaar maken door applicaties beter te scheiden van de gegevens en de gegevens alleen bij de bron te beheren. Hierdoor hoeven gegevens niet meer op grote schaal gedupliceerd en gesynchroniseerd te worden. In deze ambitie spelen API’s als ondersteunende technologie een belangrijke rol. Nagenoeg alle organisaties binnen de overheid zijn de omslag van traditionele IT naar een API-ecosysteem aan het maken. Dit hoofdstuk biedt een kader aan waarbinnen de overheid zich kan committeren bij ontwikkeling en te realiseren beleid rondom API’s. Om die reden krijgen organisaties die aan deze API Strategie hebben bijgedragen het verzoek om de intentieovereenkomst te ondertekenen.

## Ondertekening
De hieronder vermelde organisaties hebben bijgedragen aan deze API strategie voor de overheid en onderschrijven de basisafspraken:
... | [Forum Standaardisatie](https://forumstandaardisatie.nl/) | [Geonovum](https://www.geonovum.nl) | [ICTU](https://www.ictu.nl/)  | [Logius](https://www.logius.nl/) | [Ministerie van Binnenlandse Zaken en Koninkrijksrelaties](https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties) | [VNG Realisatie](https://www.vngrealisatie.nl/)  | ...

*Dit is nog geen officiële lijst van ondertekenaars*

<!--*Dit is nog geen officiële lijst van ondertekenaars, en hier moeten natuurlijk alle organisaties komen te staan die achter de API strategie staan en het manifest willen ondertekenen.*  -->
