# Werkgroep Authenticatie/Autorisatie

**Datum:** 05-02-2018 9:30-12:00

**Aanwezig:** 

Paul Dam(forum standaardisatie, voorzitter), Jan Jaap Zoutendijk(Enable-U/RWS Digitaal Stelsel Omgevingswet), Jan jaap zoutendijk(DSO), Marcel van den brink (KvK), Bob te Riele (RvIG), Hans Hendrikman(RvIG), Bart Jeukendrup (VNG), Eelco Hotting(Gemeente Haarlem, VNG), Frits bouma(DUO), Martin Borgman (Kadaster), Remco schaar(Logius), Arnoud Quanjer (VNG), Peter Haasnoot (Logius), Frank Terpstra (Geonovum), Erwin Reinhoud (Kennisnet)

**Afgemeld:** Henri Korver(VNG realisatie)
##	Introductie ronde

Gestart wordt met een voorstel ronde voor alle nieuwe deelnemers.

## Usecases 

**Wat zijn de assen waarlangs we usecases kunnen bekijken(Remco Schaar)**

Remco licht de apsecten toe die logius heeft geidentificeerd voor usecases. Deze zijn te vinden in de draft standaard van 5 februari op https://geonovum.github.io/KP-APIs-OAuthNL/#logius

Marcel van den brink: Geeft als aandachtspunt mee de (identiteit van de) eindgebruiker die uiteindelijk geautoriseerd wordt expliciet te maken. Daarnaast zou ondertekenen buiten scope moeten vallen.

Bob te Riele: Je kan bij lijst van Logius aangeven wat direct onder OAuth valt en wat een randvoorwaarde is.

Remco: We hebben vanuit logius te maken met divers landschap, kan niet allemaal in 1x over naar OAuth en niet alles zal OAuth zijn.

Eelco: Remco merkte op dat een eerder voorstel het niet gehaald omdat het teveel vast legt in achterliggende landschappen. Dat is juist wat Eelco wil bereiken, een beperkt aantal usecases dat overal geïmplementeerd wordt.

Remco: idealiter mee eens, politiek is het echter een zeer complex probleem, alle ministeries op twee na hebben een belang.

Frits Bouma: Heeft in zijn usecases behoefte aan vorm van dienstbemiddeling.

Frank: gebruik de aspecten van Logius als eerste versie usecase waarbij je aangeeft wat context is en wat binnen specificatie valt.

Erwin Reinhoud: Binnen het onderwijs veld is er een usecase waarbij de omgang met meerdere IDP en resource servers in meerdere bijbehorende domeinen speelt. Erwin stelt het gebruik van de UMA standaard daarvoor voor.

**Discussie: Wat is een generieke grootste gemene deler voor het Nederlands profiel OAuth**

Jan Jaap Zoutendijk geeft de volgende vier usecases op hoofdlijnen aan: 

	1. pure autorisatie met resource server en authorization server in zelfde domein
	2. pure autorisatie met resource server en authorization server in verschillend domein
	3. authenticatie/autorisatie met resource server en authorization server in zelfde domein
	4. authenticatie/autorisatie met resource server en authorization server in verschillend domein

Voor 2 en 4 komt daarbij nog als variabele: wie doet de autorisatie, de eindgebruiker of de resourceserver (als resource owner).

Frits Bouma: Scholen hebben IDP federatie daarovereen voor dienstaanbieders. Daarbij behoefte aan attributen. Federatieve hub filtered attributen (op basis van ondertekende afspreken met dienstaanbieders).

Suggestie van Bart Jeukendrup/ Eelco Hotting is om Mutual TLS profiel als optie in usecase/profiel op te nemen voor authenticatie aanroepende applicatie. Hier is de werkgroep het mee eens.
Daarnaast is er een oproep om bij OASv3 het verzoek in te dienen om mutual TLS als authenticatie methode te ondersteunen.
dat kan bijvoorbeeld door hier https://github.com/OAI/OpenAPI-Specification/issues/1004 een reactie achter te laten.

## Scope profiel OAuth
**Wat zijn de assen waarlangs we scope kunnen afbakenen (Martin Borgman)**

Martin: bij authorization server gekoppeld aan resourcce server dan is vastleggen identiteitgegevens “verborgen in de oplossing”
Wanneer je gebruik maakt van een authorization server buiten het domein dan heb je identiteitsgegevens nodig.
Identiteitsgegevens kan je via token introspection of (JWT) tokens doorgeven.

Voorstel Martin: specificeren identity informatie, manier waarop OAuth gebruikt wordt. Hierbij kan je het beste volgen wat er wereldwijd gebeurd. Er zijn drie dominante profielen:

	* Google
	* OKTA 
	* Git

Eventueel kan je in Facebook een vierde zien. Dit zijn allemaal profielen voor Authorization servers buiten het domein van de resource server. Voor usecases waar de Authorization server binnen het domein van de resource server ligt kan je elementen van deze profielen hergebruiken.

**Discussie: wat is binnen scope eerste versie, wat is binnen scope doorontwikkeling en wat is buiten scope**

Paul Dam: Er lijkt een spanningsveld tussen ideale oplossing en grootste gemene deler. Groot denken maar klein beginnen kan daarbij de aanpak zijn.

Frank Terpstra: voorstel profiel met wat echt moet en een aantal best practices (ongeveer 4) die aangegeven hoe je dit het beste gebruikt waar mogelijk inclusief voorbeeld implementatie.
Dit biedt in de toekomst de mogelijkheid om één of meerdere best practices ook tot standaard te verheffen indien ze aanslaan.

## Aanpak schrijven profiel 
Voorstel is om in kleinere groepjes voorstellen op papier te zetten om de volgende bijeenkomst te bespreken.
Bob te riele wil graag de vraagkant aanhaken en stelt Mijnoverheid voor ondernemers voor als vraagkant. Hiervoor zou de startbijeenkomst van het kennisplatform APIs een goede mogelijkheid zijn.

### usecases
Voorstel Eelco Hotting: maak per usecase een simpel interactie diagram waarbij je technisch domein en organisatorisch domein aangeeft.
Eelco geeft eerste aanzet, RvIG werkt verder uit.

### specificatie
Eerste opzet specificatie voorstel Martin Borgman: OAuth legt al veel vast, daar waar de specificatie keuzes laat of met opzet niets zegt(Authenticatie) wordt in de eerste opzet aangegeven dat er een keus gemaakt moet worden en daar waar die voor de hand ligt al gemaakt. Expliciet kunnen de mogelijkheden voor openidconnect worden aangegeven omdat die in veel van de usecases terugkomt en de werkgroep daar graag iets over wil zeggen ook al was het oorspronkelijk buiten scope.
Martin Borgman doet een eerste voorzet voor de specificatie daar reageren Jan Jaap, Erwin Reinhoud, Remco Schaar (en Marcel van de Brink?) op.

### Best practices
Best practices wordt pas aan gewerkt nadat de usecases en eerste specificatie gereed zijn.

### Tijdspad plaatsen OAuth op Pas Toe of leg Uit lijst
Frank geeft aan dat het bureau forum standaardisatie het mooi zou vinden als het Nederlands profiel OAuth 26 maart gereed is voor publieke consultatie zodat OAuth nog dit voorjaar op de pas toe of leg uit lijst geplaatst kan worden.
De groep geeft aan dat dit echt te ambiteus is. Later dit jaar zou wel haalbaar moeten zijn.

## Afsluiting
Er zijn goede afspraken gemaakt om te werken aan het profiel.
Volgende bijeenkomst is gepland op dinsdag 13 maart 9:30-12:00 bij Geonovum.
