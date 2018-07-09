# Werkgroep Authenticatie/Autorisatie

**Datum:** 22-06-2018 10:00-12:00

**Aanwezig:** 
Paul dam(bureau forum standaardisatie), Frank Terpstra(Geonovum), Peter Haasnoot(Logius), Marcel Moerman(gemeente Amsterdam), Evert Lammerts (gemeente Amsterdam), Erwin Reinhoud (Kennisnet), Han Zuidweg(Bureau forum standaardisatie), Bob te riele(RvIG), Hans Hendrikman (RvIG), Remco Schaar(Logius), Martin Borgman(Kadaster), Frits Bouma (DUO) 

**Afgemeld:** Marcel van den brink (KvK), Jan Jaap Zoutendijk(Enable-U/RWS Digitaal Stelsel Omgevingswet), Eelco Hotting(Gemeente Haarlem, VNG), Henri Korver(VNG realisatie), Arnoud Quanjer (VNG)
##	Introductie, mededelingen

Gestart wordt met een voorstel ronde. 

## Stand van zaken field lab data visibility
Het opzetten van het fieldlab heeft langer geduurd dan verwacht. Op dit moment wordt met DSO Knooppunt, DSO Catalogus, Common Ground, gemeente Amsterdam data ingepland.

## Terugkoppeling vanuit kennisplatform APIs
Mededeling door Frank Terpstra: Overige werkgroepen zijn op 26 april opgestart tijdens de startbijeenkomst. Meer informatie is te vinden in de nieuwsbrief:
https://mailchi.mp/686d9f775faa/bijeenkomst-kennisplatform-apis en op de website van Geonovum https://www.geonovum.nl/themas/kennisplatform-apis . Voor communicatie is er een Slack kanaal, aanmelden kan via:
https://join.slack.com/t/nlapistrategie/shared_invite/enQtMzc0Mjc4OTk5NzE4LTY2YzI5ZWMwMmZmYjA4MjdmNjMwOWQzM2EzMjBkMWY2MzZmOGZhZWVhYmE5NzI5NDE4ZGQ0Y2Y2N2M3MWEyZjk


## OAuth implementatie gemeente Amsterdam
De OAuth implementatie is onderdeel van Datapunt bij gemeente amsterdam. Marcel ligt datapunt kort toe. 
Data punt is gebouwd om snel en met performance (open) data te kunnen leveren. Interne IT organisatie kon niet leveren, dus zelf gaan bouwen. Groot succes, kan snel leveren. 
Er zijn ook plannen om nog meer gegevens, t/m BRP te gaan ontsluiten. Op dit moment zijn er 40-50 APIs beschikbaar. Veel maar niet alles is publiek beschikbaar. Voor de niet publieke data wordt OAuth ingezet.
De implementatie is gedaan op basis van OAuth 2.0. Er wordt een eigen datapunt IdP gebruikt omdat de active directory van gemeente Amsterdam nog niet ontsluitbaar is.
In de kern is er de volgend functionaliteit:

* Ontwikkelaars van APIs maken permissies aan
* Permissies worden gegroepeerd worden in profielen
* Profielen kunnen gegroepeerd worden in rollen
* Rollen aan gebruiker toekennen
* Permissies komen terug als claims, rollen en profielen niet.

Er is een proces voor het toekennen van rechten.
Gebruikers zijn altijd personen, systemen zijn nog buiten scope.
IDPs leveren UIDs, deze worden gekoppeld aan rollen. Rollen gekoppeld aan profielen
Alle clients zijn java script clients die in de browser draaien en bearer tokens gebruiken.
Tokens zijn gesignde JWTs 10 uur geldig met toegekende scopes en claims

Auditlogging wordt toegepast op basis van signatures en trace ids waarmee requests herleidbaar zijn tot ingelogde eindgebruiker.
De implementatie van audit logging is (nog) niet veilig:
Opgeslagen in elastic search, kan gemanipuleerd worden, daarmee niet betrouwbaar.

De ontwikkelstraat ziet er als volgt uit: Aparte OAuthservers voor acc en prod, daarnaast een testserver die altijd alles goed vindt.

Voor signing worden eigen keys gebruikt (niet PKI). Injecteren van public keys is een groot gevaar.

Alleen implicit-flow

Tokenflow wil je niet als alle gebruikers dezelfde data terugkijken. Wanneer er per gebruiker verschillende informatie wordt teruggegeven wil je dat wel.

Ideeën voor de toekomst:
* http tokenbinding heel interessant, token binden een TLS sessie
* ondersteunen single sign-on

Remco: SSO gaat eruit voor hogere betrouwbaarheidsniveaus, strijdig met AVG


## OpenID connect implementatie BZK
Aanleiding: de staatsecretaris BZK heeft wetsvoorstel digitale overheid naar de kamer gestuurd. Deze wet zegt onder andere over toegangverlening voor burgers dat voor gevoelige gevens niveau substantieel of hoog nodig is. Versterking van DigiD is nodig om dit te bereiken. 
Dit brengt verplichtingen met zich mee voor dienstverleners maar ook een verplichting aan ministerie: Een routeringsvoorziening voor alle toegang in het burgerdomein. 
De routeringsvoorziening kent een SAML variant en een OpenIDconnect voorziening (ondersteuning apps/mobiel).
Remco werkt nu aan OpenID connect ontwerp van routeringvoorziening. Uitgangspunt is authorization code flow. Het gaat om de toegang tot backend servers.
Er is geen userinfo endpoint voorzien. Clients moeten geregistreerd zijn. Client gaat met PKIo naar authz: vertel me wie het is geef me persoons informatie.
Dynamic client registration wordt geimplementeerd.

Discussie:
Verzoek zet geen privacy gevoelige informatie in scopes en vooral niet in URL vorm.
Gebruik geen URLs in scopes omdat eigenaarschap en daarmee URIs kunnen veranderen.
Bij veranderende URLs wordt het namelijk lastig om later te achterhalen wat in een auditlog staat.
Voorstel gebruik UUID, niet menselijk leesbaar maar wel uniek te houden en organisatorisch op de lange termijn te gebruiken
Nadeel UUIDs is dat ze lang zijn en mogelijk de tokens heel groot maken.
UUIDs betekenis kunnen in een dienstencatalogus van betekenis worden voorzien.
Suggestie: Epic (european persistent identifier consortium), pURL voordeel het is persistent en te resolven via een catalogus en je hoeft het niet zelf te onderhouden.
Er mag maar één subject in openidconnect. Welke is dat BSN? RSIN ?pseudoID herleidbaar naar meerdere?
Suggestie: Namespace aanmaken in subject.

## OAuth evaluatie voor Europese Commissie
Han Zuidweg ligt procedure voor evaluatie OAuth door europese commissie toe. OAuth is bij de EU aangemeld door nederland als standaard. Dit is nodig om hem in aanbestedingen e.d. te mogen gebruiken. Op basis van een evaluatie rapport wordt aan experts gevraagd om commentaar. Het evaluatie rapport is bijgevoegd. WErkgroepleden zijn welkom om hun commmentaar op het evaluatie rapport aan te leveren bij Frank Terpstra.  

## Afsluiting
Volgende bijeenkomst zal worden ingepland op een vrijdag nadat het fieldlab datavisibility heeft plaatsgevonden 

## Actiepunten
* Eelco Hotting: plaatjes op github zetten *open*
* Martin Borgman: Verwijzing naar CSRF op de pas toe of leg uit lijst openemen in Nederlands profiel OAuth *open*
* Frank Terpstra: Formulering datavisibility aanleveren *gesloten*
* Frank Terpstra: Opzetten Slack voor fieldlab *gesloten*
* Frank Terpstra: opdracht formulering Datavisibility *gesloten*
* Eelco Hotting: mogelijkheid locatie bij gemeente Utrecht vragen. *gesloten*
* Frank Hotting: Gemeente Amsterdam datapunt vragen. *gesloten*
