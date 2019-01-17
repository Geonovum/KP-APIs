# Nederlandse Profiel OAuth 2.0

## Inleiding

Om tot een Nederlands Profiel voor OAuth 2.0 te komen beginnen we met de voornaamste keuzes die er in de specificatie zoals vastgelegd in RFC 6749 te maken zijn.

## OAuth 2.0; het framework RFC 6749

Het hogere doel van OAuth 2.0 is dat een eindegebruiker niet zijn credentials aan een applicatie of internet dienst hoeft te geven om informatie van hem in een andere internet dienst te kunnen gebruiken.
Met OAuth 2.0 legt de eindgebruiker vast welke rechten een applicatie of dienst op het internet heeft tot zijn informatie.

OAuth 2.0 maakt gebruik van REST API's, en wisselt in de meeste situaties informatie uit in JSON.

OAuth 2.0 is een autorisatie framework en onderkent een aantal actoren waarvan een aantal zich binnen het proces moeten kunnen identificeren. Het OAuth 2.0 framewerk legt echter alleen van de systeem actoren vast hoe ze zich identificeren. De identificatie van de eindgebruiker en de gegevens over die eindgebruiker maken geen deel uit van het OAuth 2.0 framework.
Er bestaat een OAuth 2.0 add-on die zich nadrukkelijk bezig houd met gegevens over de eindgebruiker en dat is OpenID Connect.

### Actoren

Binnen OAuth 2.0 zijn de volgende actoren gedefinieerd:

* Resource Owner: de eigenaar van informatie die door de Resource Server ontsloten wordt
* Resource Server: de server met een API waarmee informatie van één of meerdere Resource Owners ontsloten wordt
* Client: de applicatie of internet dienst die voor de Resource Owner iets met de door de Resource Server ontsloten informatie van de Resource Owner doet
* Authorization Server: de server die het autorisatie verzoek van de Client met de Resource Owner afhandelt en vastlegt. Daarnaast versterkt de Authorization Server 'tokens' waarmee de Client de Resource Server kan benaderen. De Resource Server gebruikt het door de Authorization Server uitgegeven token om te bepalen of het door de Client uitgevoerde verzoek, tot het benaderen van informatie van een Resource Owner, toegestaan is.

### Clients

Een Client is binnen OAuth een applicatie. Deze applicatie kan een native applicatie op een desktop computer zijn, een app op een mobiel device, maar ook een web applicatie in een browser.

In grondbeginsel is een Client bekend bij de Authorization Server en heeft credentials om zich te kunnen identificeren.

Afhankelijk van het soort client is er een mate van vertrouwen in hoe veilig de client met 'geheime' informatie kan omgaan.
Van een applicatie in de browser kun je eenvoudig de broncode in de browser zichtbaar maken en kun je ook eenvoudig 'geheime' informatie zichtbaar maken als die er in zou zitten.

Voor clients waar geen geheim aan toevertrouwd kan worden, verstrek je geen informatie die door kwaadwillenden misbruikt zou kunnen worden.

### Interacties

Los van de authorization flows kent OAuth de volgende interacties:

* Het verkrijgen van autorisatie
* Het ophalen van informatie bij de Resource Server
* Het ophalen van informatie behorende bij een access token zoals een unieke identificatie van de Resource Owner (RFC 7662)

#### Het verkrijgen van autorisatie

Binnen het verkrijgen van autorisatie spelen de volgende onderwerpen:

* Grant types
* Scopes
* Tokens

##### Grant types

Deze interactie kent binnen RFC 6749 4 Grant Types:

* Authorization Code Grant Type
* Implicid Grant Type
* Client Cedentials Grant Type
* Resource Owner Credentials Grant Type

Eigenlijk is het verversen van de grant d.m.v. een Refresh Token ook een grant type.

Welke Grant Type je kiest is afhankelijk van de Client en of er überhaupt sprake is van een Resource Owner.

###### Keuze 1

Alle Grant types hebben een Use-Case, het heeft geen zin om Grant types weg te laten in het Nederlandse profiel.

| Grant Type | Use-Case | Opmerkingen |
| ---------- | -------- | ----------- |
| Authorization Code | Traditionele web applicaties die op een server draaien of mobiele applicatie die gebruik maken van "Proof key for Code Exchange" (PKCE) (RFC 7636) | |
| Implicid | Javascript gebaseerde Web applicaties die in de web browser van de gebruiker draaien | Geen client secret en geen refresh token, de client heeft toegang |
| Resource Owner Credentials | Zeer vertrouwde (native) applicaties | De client heeft hierbij toegang tot de credentials van de Resource Owner |
| Client Credentials | Machine-naar-machine communicatie | De Client is tevens de Resource Owner |

###### Keuze 2

Bij de Authorization Code Grant en de Implicid Grant wordt een optioneel de parameter 'state' als http query parameter gebruikt. Deze parameter wordt gebruikt om Cross Site Reqest Forgery CSRF tegen te gaan. Aangezien CSRF onderdeel is van een pas-to-of-leg-uit standaard stellen we het gebruik van de 'state' query parameter als verplicht.

##### Scopes

De OAuth manier om rechten tot resources te definiëren heet scopes.

Scopes bevatten meestal iets wat de handeling omschrijft, denk aan lezen of schrijven.

Scopes geven soms toegang tot een beperkte set aan informatie. OpenID Connect definieert naast de openid scope de scopes profile, email, address en phone die een subset aan identity gegevens bevatten.

Omdat veel aanbieders verschillende diensten aanbieden is het best wel gebruikelijk de dienst in de naam van de scope op te nemen.

Een voorbeeld van de scopes gedefinieerd voor de Google Drive API v3:

> https://www.googleapis.com/auth/drive
> https://www.googleapis.com/auth/drive.appdata
> https://www.googleapis.com/auth/drive.file
> https://www.googleapis.com/auth/drive.metadata
> https://www.googleapis.com/auth/drive.metadata.readonly
> https://www.googleapis.com/auth/drive.photos.readonly
> https://www.googleapis.com/auth/drive.readonly
> https://www.googleapis.com/auth/drive.scripts

Het kan ook zijn dat er informatie is waar beperkingen op zitten of kosten aan zitten. In dat geval is het handig hier aparte scopes voor te definiëren. In overheidscontext kan dit bijvoorbeeld de toegang tot BSN nummers zijn.

###### Keuze 3

Het voorstel is om scope namen te hanteren zoals Google ze definieert. Dit is in de vorm van een URI.

##### Tokens

Het technische resultaat van het verkrijgen van autorisatie is een JSON document met de volgende attributen:

* access_token; verplicht; het token waarmee toegang verkregen wordt tot de resource.
* token_type; verplicht; zegt iets over het token en hoe het gebruikt moet worden. In de praktijk bevat token_type de string "bearer" gebruikt. Zie ook RFC 6750.
* expires_in; geadviseerd; verplicht als het token maar een beperkte tijd geldig is. In de praktijk zien we hier vaak 3600 staan. De eenheid is in seconden.
* refresh_token; optioneel; het token waarmee een nieuw token setje verkregen kan worden. Niet gebruiken bij Implicid Grant Type.
* scope; optioneel als de door de Resource Owner toegekende scopes gelijk zijn als de gevraagde scopes. Anders verplicht.

Het is mogelijk extra attributen aan deze lijst toe te voegen.

###### Keuze 4

Adviseer 3600 seconden als expires_in parameter. Dit heeft geen interoperability impact.

###### Keuze 5

Adviseer geen zelf extra attributen in het autorisatie antwoord. Dit heeft geen interoperability impact.

###### access_token

Voor de OAuth 2.0 standaard is het access_token niet meer dan een sleutel naar autorisatie informatie.

###### id_token

OpenID Connect voegt indien gevraagd het id_token toe aan deze lijst. Het id_token is een RFC 7519 JWT.
OpenID Connect voegt naast het ID token het UserInfo Endpoint toe aan de Authorisation Server. Het UserInfo Endpoint is een standaard Resource Server die informatie, claims, verstrekt over de eindgebruiker.

###### refresh_token

Een Refresh token is vergelijkbaar met de authorization code in de Authorization Code Grant, maar wordt gebruikt om de autorisatie te verlengen. Hierbij krijgt de Client een nieuwe set tokens.

#### Het ophalen van informatie bij de Resource Server

De Client gebruikt het verkregen Access Token om informatie, al dan niet van een Resource Owner, bij de Resource Server te kunnen raadplegen.
De Resource Server gebruikt vervolgens het Access Token om de Authorozation Server te vragen wie de Resource Owner is en welke autorisaties de Client heeft gekregen. De OAuth 2.0 Specificatie beschrijft verder niet hoe dit werkt.

#### Het ophalen van informatie behorende bij een access token (RFC 7662)

Het ophalen van informatie behorende bij het access token is in RFC 7662 gestandaardiseerd waarmee Cloud dienst providers standaard OAuth 2.0 diensten kunnen aanbieden waarbij er een Token Introspection service is waar de Resource Server gegevens over een token kan ophalen.
De Token Introspection service is een REST service waarbij de Resource Server met http basic of een Client Credentials Grant type de service benadert om de gegevens op te halen.

In een modern applicatie landschap met microservices wordt het Access Token doorgegeven tussen services. Elke microservice zou dan d.m.v. Token Introspection de benodigde gegevens behorende bij het token moeten ophalen. Daarmee krijgt een Token Introspection service het vrij snel heel erg druk.
Dit is de voornaamste reden waarom veel implementaties ervoor kiezen om het OAuth 2.0 Access Token van inhoud voorzien in de vorm van een RFC 7519 JSON Web Token (JWT).
Deze JWT bevat alle benodigde informatie voor een microservice om fijnmazige autorisatie beslissingen te kunnen nemen, zonder dat daarvoor eerste informatie opgehaald hoeft te worden.

##### Keuze 6

Maak gebruik van JWT's als Access Tokens. Dit vereist OpenID Connect core 1.0. Dit heeft geen interoperability impact voor de Client.

##### Keuze 7

Een JWT is bedoeld om zo compact mogelijk te zijn, dus stop er alleen die gegevens is die daadwerkelijk nodig zijn om een toegangsbesluit te kunnen nemen. Mochten er in een asynchroon afhandel proces adres of email gegevens van de Resource Owner nodig zijn, haal deze dan op op het moment dat ze nodig zijn.

##### Keuze 8

Pas minimaal RSA 256 bit signing toe. Dit vereist OpenID Connect discovery 1.0. Dit heeft geen interoperability impact voor de Client.

## Referenties

NCSC [ICT-Beveiligingsrichtlijnen voor Webapplicaties](https://www.ncsc.nl/actueel/whitepapers/ict-beveiligingsrichtlijnen-voor-webapplicaties.html)

* RFC 6749; The OAuth 2.0 Authorization Framework
* RFC 6750; The OAuth 2.0 Authorization Framework: Bearer Token Usage
* RFC 6819; OAuth 2.0 Threat Model and Security Considerations
* RFC 7519; JSON Web Token (JWT)
* RFC 7636; Proof Key for Code Exchange (PKCE) by OAuth Public Clients
* RFC 7662; OAuth 2.0 Token Introspection

De complete lijst van OAuth 2.0 RFC's https://datatracker.ietf.org/doc/search/?name=oauth&sort=&rfcs=on&activedrafts=on&by=group&group=
