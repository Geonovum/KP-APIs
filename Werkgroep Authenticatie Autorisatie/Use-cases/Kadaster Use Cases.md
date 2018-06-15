# Kadaster

## Use cases
### Use case 1: Mendix Cloud
In het AD ingelogde gebruiker gaat vanuit zijn Windows/Citrix werkplek naar de Mendix applicatie in de cloud en kan daar BW informatie waar hij voor geautoriseerd is inzien.

#### Details
Standaard OAuth 2.0 met OIDC Authorization code grant met:
* Client; een Mendix app draaien in de Mendix Cloud
* Resource Owner; een interne medewerker die ingelogd is in AD domain
* Resource; informatie opgeslagen in SAP BW
* Authorization Server; CA API Gateway OTK
* Resource Server: CA API Gateway + SAP Gateway + SAP BW

#### Bijzonderheden
* Er wordt gebruik gemaakt van het standaard Windows kerberos token voor SSO, Mendix app haalt identity gegevens op bij het OIDC userinfo endpoint.
* De gebruiker is voor starten van de Mendix app niet bekend bij de Mendix app.
* De Mendix app bewaart geen gegevens van de gebruiker.
* De Resource Owner krijgt geen consent pagina.
* Authorized scopes worden bepaalt aan de hand van AD rollen.
* Identity propagation naar het SAP landschap is een uitdaging

### Use case 2: ServiceNow
Het Kadaster heeft ServiceNow als ITSM tool binnen gehaald en er is behoefte aan het uitwisselen van incidenten, problemen en wijzigingen tussen diverse diensten.
We hebben ervoor gekozen één centraal systeem voor routering van deze stromen te gebruiken zijnde de CA API Gateway.
ServiceNow kent hiervoor twee oplossingsrichtingen, SOAP of REST gebaseerd. Afhankelijk van deze keuze worden een beperkte set aan identificatie middelen ondersteund.
Voor SOAP is dat enkel en alleen username/password (http basic).
Voor REST is er naast username/password ook OAuth 2.0 mogelijk.
Omdat we niet zo gelukkig waren met username/password hebben we voor REST met OAuth gekozen.
Op het moment dat we hieraan begonnen ondersteunde ServiceNow alleen de Resource Owner credentials flow wat niet onze keuze was. In de huidige ServiceNow versie is ook Client credentials mogelijk wat beter past voor service achtige accounts waarbij er geen sprake is van een Resource Owner.
Koppelingen naar andere systemen vallen nog niet onder OAuth use cases

#### Use case 2a: naar ServiceNow
ServiceNow ontsluit hierbij de Resources en is ook de Authorization Server.
De Kadaster CA API Gateway is hierbij de Client.

#### Use case 2b: van ServiceNow
Het Kadaster ontsluit hierbij de resources en is ook de Authorization Server.
ServiceNow is hierbij de client.

### Use case 3: OGC Testbed 13
Kadaster ontsluit Beeldmateriaal t.b.v. OGC Testbed 13.
OGC Testbed 13 is een poging om standaard op het internet beschikbare authenticatie en autorisatie middelen toe te kunnen passen binnen OGC standaarden. Het voornaamste probleem zit hem aan de kant van de GIS clients. Voor de POC is QGIS als client gebruikt. De OAuth 2 client voor QGIS is een QGIS plugin.
Het Kadaster heeft hiervoor Beeldmateriaal ontsloten d.m.v. OAuth 2.0 Resource Owner Credentials grant type, en later op verzoek met het Authorization Code grant type.

### Use case 4: KLIC WIN API voor Netbeheerders en Serviceproviders
De KLIC WIN API voor netbeheerders en Serviceproviders geeft Netbeheerders en Serviceproviders de mogelijkheid om verzoeken waar zij een belang hebben liggen kunnen inzien en beantwoorden met netinformatie.
Netbeheerders zijn wettelijk verplicht om meldingen in een gebied waarvan zij hebben aangegeven een belang te hebben liggen binnen 24 uur te hebben beantwoord. Netbeheerders kunnen deze taak laten uitvoeren door een Serviceprovider.
Voor de API's wordt gebruik gemaakt van OAuth met Authorization code grant type omdat er heel nadrukkelijk sprake is van een Resource Owner. De Client is software die bij de Netbeheerder of Serviceprovider draait.

#### Bijzonderheden
De Resource Server is er verantwoordelijk voor dat de Client alleen die informatie kan zien waar de Resource Owner hem toestemming voor gegeven heeft. De Resource owner kan op zich wel een organisatie zijn, maar een Serviceprovider is een andere organisatie die door de Resource owner geautoriseerd is om namens hem werk te doen. Dit is niet iets wat OAuth voor je oplost.
In het KLIC geval moet de Resource Server dus eerst uitzoeken door welke Netbeheerders de Serviceprovider hij gemandateerd is.

### Use case 5: Omgevingswet Catalogus
Het Kadaster realiseert en host de Catalogus functie binnen de Omgevingswet.
Voor het gebruik van de Catalogus is geen autorisatie nodig maar voor het beheer van de Catalogus uiteraard wel. Hierbij is sprake ven een Resource Owners die hun eigen gegevens kunnen beheren.
Binnen de context van DSO zijn er een aantal discussiepunten waaronder:
* Wordt alles binnen de omgevingswet centraal gehost of host elk informatiehuis zijn eigen gegevens?
* Wordt de informatie centraal gehost dan ligt het voor de hand dat er centraal iet aan authenticatie/autorisatie gedaan wordt, maar hoe zit dat als elk informatiehuis zijn eigen gegevens host?
* Als we voor decentrale hosting kiezen, maar voor een centrale Authorization Server, hoe propageren we dan identity informatie om de juiste beslissingen te kunnen nemen bij het ontsluiten van gegevens?

### Use case 6: Identity provisioning naar o.a. Azure AD en ServiceNow
Beide platformen hebben een REST API en gebruiken OAuth. Onze IDM oplossing (NetIQ) lost dit voor ons op.

## Identity Propagation
Sinds het Kadaster met Layer 7, nu CA API Gateway, in zee ging voor onze Generieke Authenticatie Autorisatie (GAA) oplossing, gebruiken we voor Identity Propagation een GAA token.
Dit GAA Token heeft een SAML 2 Token structuur en bevat informatie over de ingelogde gebruiker en de klant waar de gebruiker toe behoort. Het Token wordt gezipt en base64 gecodeerd als Authorization bearer token toegevoegd aan een intern http request.
In ons Java Applicatie Platform (JAP) wordt dit GAA Token omgezet naar een JAAS context met een met Kadaster attributen verrijkte User Principal. Hierdoor hoeft de applicatie zelf niet te weten hoe de informatie uitgewisseld wordt en is er zonder callout naar een IDP rijke identity informatie voorhanden.
Het GAA Token wordt ook voor interne medewerkers gebruikt als ze gebruik maken van Web Applicaties in ons landschap.
Omdat deze methode niet standaard is en nog wel eens problemen geeft door de lengte van het token, zijn we bezig dit GAA Token te vervangen door een signed JWT (JWS) met een veel beperktere set informatie.

## API Developer Portal
OAuth gebruiken we natuurlijk omdat we onze informatie beschikbaar willen stellen via Apps van derden. Als we dat niet zelf doen, dan zijn we ook niet in controle voor wat betreft juistheid en de actualiteit van deze informatie.
Om derden zo goed mogelijk te kunnen ondersteunen onze informatie te gebruiken is een API Developer Portal niet meer weg te denken.
Als Kadaster zijn we bezig met een CA API portal implementatie al was het maar dat we daarmee onze DevOps teams zelf de mogelijkheid geven hun API's te ontsluiten op een vooraf vastgestelde set methodes.
