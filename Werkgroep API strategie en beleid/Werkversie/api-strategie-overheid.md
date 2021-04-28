# API strategie voor de overheid
*Dit is een nieuwe versie van het werkdocument, gebaseerd op de feedback uit de bijeenkomst op 13 april en het commentaar op Github. De belangrijkste wijzigingen zijn:*
- *De Visie start nu vanuit het concept van de platformeconomie, zoals besproken in de bijeenkomst.*
- *Het Manifest en de Basisafspraken zijn samengevoegd in één hoofdstuk. De tijdlijn is hieruit verwijderd. Hierdoor komen de Basisafspraken nu overeen met hetgeen al verplicht is volgens het 'pas toe of leg uit' lijst van het Forum Standaardisatie. Dit zou de drempel voor organisaties moeten verlagen om deze API Strategie te ondertekenen.*
- *Het Stappenplan is verwijderd omdat het geen inhoud had. Het kan eventueel terugkomen als er alsnog inhoud voor geleverd wordt.*

## Visie

Wij leven in een maatschappij waarin ICT-platformen een steeds grotere rol spelen in het bij elkaar brengen van vraag en aanbod van producten en diensten. Denk aan AirBnB, Über, Funda en Thuisbezorgd. Maar ook aan publieke platformen zoals [OVChipkaart.nl](https://www.ov-chipkaart.nl/home.htm#/) en [Publieke Dienstverlening Op Kaart](https://www.pdok.nl/). Volgens de Kamer van Koophandel is er [geen weg meer terug](https://www.kvk.nl/advies-en-informatie/overheid/platformeconomie-er-is-geen-weg-terug/) uit deze platformeconomie.

Een belangrijk kenmerk van deze platformen is het gemak en de flexibiliteit waarmee gebruikers diensten kunnen aanbieden en afnemen. Burgers en bedrijven verwachten dit ook van de overheid.

Platformen hebben gestandaardiseerde  ICT koppelvlakken die applicaties en gegevensbronnen aan elkaar verbinden.  Hiervoor gebruiken zij APIs.
Een  [application programming interface](https://www.ensie.nl/dimitri-van-hees/api)  (API) is een gestructureerd en gedocumenteerd koppelvlak voor communicatie tussen applicaties. Je kan een API zien als een digitale stekkerdoos die applicaties met elkaar verbindt.

APIs bestaan al zo lang er computers zijn. De meeste platformen gebruiken APIs onder de motorkap zonder dat de eindgebruiker dat ziet. Als je bijvoorbeeld een app opent voor het weer, dan merk je niet dat deze app gegevens ophaalt bij het  [KNMI via een API](https://meteoserver.nl/real-time-KNMI-weer-API.php). Degene die het meest met een API te maken krijgt is de ontwikkelaar van de applicatie die de API gebruikt. Zij moet begrijpen hoe de API werkt en hoe je deze vanuit de applicatie moet bevragen.

Ook de overheid gebruikt steeds vaker APIs om applicaties en gegevensbronnen te ontsluiten en met elkaar te koppelen. Bijvoorbeeld in initiatieven zoals [Haal Centraal](https://www.vngrealisatie.nl/nieuws/start-programma-haal-centraal), [Common Ground](https://commonground.nl/) en het [Digitaal Stelsel Omgevingswet](https://aandeslagmetdeomgevingswet.nl/digitaal-stelsel/).

Toch heeft de overheid ook veel ICT systemen in gebruik die niet als platformen werken, maar als gesloten systemen waarin de gegevens helemaal met de applicatie verweven zijn. Vaak werken deze systemen met kopieën van cruciale gegevensbronnen zoals basisregistraties. Dat brengt een aantal nadelen met zich mee:
1. De kans op fouten en datalekken neemt toe bij het kopiëren en verspreid opslaan van gegevens.
2. Het kopiëren en synchroniseren van gegevens tussen systemen is vaak inefficiënt en kost meer geld dan nodig.
3. Personen en bedrijven hebben geen regie over hun gegevens als deze bij verschillende organisaties verspreid staan.
4. Systemen met maatwerkkoppelingen kunnen afhankelijkheid van leveranciers in de hand werken.

De digitale overheid wisselt veilig en efficiënt gegevens uit door applicaties zo veel mogelijk te scheiden van gegevens, en gegevens (waar juridisch en organisatorisch mogelijk) bij de bron te bewaren. Hiermee sluit de overheid beter aan bij de platformeconomie die al realiteit is en niet meer zal verdwijnen.

## Basisafspraken
Bij het realiseren van deze visie volgt de overheid een aantal basisafspraken:
1. Waar de overheid REST APIs inzet, gebeurt dat volgens de [REST API Design Rules](https://docs.geostandaarden.nl/api/API-Designrules/). Zo biedt de overheid haar REST APIs op een standaard manier en goed gedocumenteerd aan.
2. De overheid registreert haar REST APIs bij [developer.overheid.nl](https://developer.overheid.nl). Zo kunnen ontwikkelaars de APIs van de overheid altijd vinden.
3. Veilige autorisatie van toegang tot REST APIs realiseert de overheid met het [NL GOV Assurance Profile for OAuth 2.0](https://docs.geostandaarden.nl/api/oauth/). Dit profiel op de authorisatie standaard OAuth is speciaal ontwikkeld voor de Nederlandse overheid.
4. Voor het leggen van een veilige verbinding met een gegevensbron gebruikt de overheid de standaard [DigiKoppeling](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/basisregistraties-en-stelselafspraken/stelselvoorzieningen/digikoppeling/). Deze standaard maakt het mogelijk om een een REST API aan te bieden op een veilige manier die voldoet aan punten 1 en 3 hierboven.
5. Voor het [gebruik van TLS1.3](https://docs.geostandaarden.nl/api/API-Strategie-ext/#api-11-encrypt-connections-using-at-least-tls-v1-3)  met  [tweezijdige PKIoverheid certificaten](https://docs.geostandaarden.nl/api/API-Strategie-ext/#api-15-use-pkioverheid-certificates-for-access-restricted-or-purpose-limited-api-authentication) is de open-source implementatie [NLX](http://www.nlx.io) sterk aanbevolen.


## Praktijkvoorbeelden
In dit deel laten we een aantal domeinen zien waar de overheid al met succes APIs toepast om gegevens bij de bron te beheren en ontsluiten.


### De API op de Basisregistratie Personen (BRP) van Haal Centraal
Binnen het programma [Haal Centraal](https://www.vngrealisatie.nl/producten/haal-centraal) experimenteert de [Rijksdienst voor Identiteitsgegevens](https://www.rvig.nl/) (RvIG), de vijf grote gemeenten (Amsterdam, Den Haag, Eindhoven, Rotterdam en Utrecht) en [VNG Realisatie](https://www.vngrealisatie.nl/) met een API waarmee gemeenten direct de [Basisregistratie Personen](https://www.rvig.nl/brp) (BRP) kunnen raadplegen. In 2021 gaan 10 gemeenten deze API gebruiken en beproeven in een pilot.

Over de voordelen van de BRP API heeft Haal Centraal een heldere [video](https://youtu.be/1xzijzjA15A) gemaakt. De specificatie van de API is al te vinden op [Github repository van VNG](https://github.com/VNG-Realisatie/Haal-Centraal-BRP-bevragen). Wanneer de pilot slaagt, komt de API mogelijk later beschikbaar voor alle gemeenten en overige overheidsorganisaties die de BRP raadplegen.

### De API voor Zaakgericht Werken van Common Ground
De meeste gemeenten werken 'zaakgericht'. Deze manier van werken richt zich op het transparant afhandelen van *aanvragen* die een *samenhangende hoeveelheid werk* (een 'zaak') met zich meebrengen en een *duidelijk omschreven resultaat* hebben.  ICT systemen ondersteunen zaakgericht werken met als voordelen:
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

In de praktijk kan de overheid vaak niet naar behoren voldoen aan dit recht. Als je aan je gemeente vraagt welke instanties je persoonsgegevens uit de BRP hebben geraadpleegd, kan je meestal op niet meer rekenen dan een uitdraai van het logbestand uit het lokale ICT systeem. Zo'n logbestand is een lange lijst termen en codes waar je weinig aan hebt als je het ICT systeem niet kent. En dan weet je nog niet wie er in het centrale BRP bij je gegevens geweest is. Daarvoor moet je dan weer bij de RvIG zijn.

In 2017 liet het ministerie van Binnenlandse Zaken en Koninkrijksrelaties op verzoek van de Tweede Kamer door Berenschot een [onderzoek](https://zoek.officielebekendmakingen.nl/blg-817465.pdf) doen om inzicht te krijgen hoe, wanneer en met welk budget de overheid werkelijk kan voldoen aan het recht van inzage en correctie. Berenschot concludeerde in het onderzoek dat volledig digitale inzage in alle relevante persoonsgegevens die onder de AVG vallen, in het huidige gegevenslandschap niet haalbaar is.

In de [beleidsbrief regie op gegevens](https://www.rijksoverheid.nl/documenten/brieven/2019/07/11/beleidsbrief-regie-op-gegevens-nadere-uitwerking) van 2019 onderstreept het kabinet nog eens het beleidsvoornemen om serieus werk te maken van regie op gegevens. Maar er zal iets moeten gebeuren in het gegevenslandschap om dit mogelijk te maken.

Als de overheid gegevens bij de bron gaat beheren en ontsluiten met APIs, wordt het gemakkelijker om bij de bron volledige inzage te geven. De overheid kan dan digitale inzage geven in een uniform gebruiksvriendelijk format, en ook de correctie van gegevens wordt eenvoudiger.

## Ondertekening
De hieronder vermelde organisaties hebben bijgedragen aan deze API strategie voor de overheid en onderschrijven de basisafspraken:
... | [Forum Standaardisatie](https://forumstandaardisatie.nl/) | [ICTU](https://www.ictu.nl/)  | [Logius](https://www.logius.nl/) | [Ministerie van Binnenlandse Zaken en Koninkrijksrelaties](https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties) | [VNG Realisatie](https://www.vngrealisatie.nl/)  | ...
*Dit is nog geen officiële lijst van ondertekenaars, en hier moeten natuurlijk alle organisaties komen te staan die achter de API strategie staan en het manifest willen ondertekenen.*
