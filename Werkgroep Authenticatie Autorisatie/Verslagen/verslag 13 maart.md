# Werkgroep Authenticatie/Autorisatie

**Datum:** 13-03-2018 9:30-12:00

**Aanwezig:** 

Paul Dam(forum standaardisatie, voorzitter), Jan Jaap Zoutendijk(Enable-U/RWS Digitaal Stelsel Omgevingswet), Jan jaap zoutendijk(DSO), Marcel van den brink (KvK), Bob te Riele (RvIG), Hans Hendrikman(RvIG), Eelco Hotting(Gemeente Haarlem, VNG), Martin Borgman (Kadaster), Peter Haasnoot (Logius), Frank Terpstra (Geonovum), Erwin Reinhoud (Kennisnet)

**Afgemeld:** Frits bouma(DUO), Henri Korver(VNG realisatie), Remco schaar(Logius), Arnoud Quanjer (VNG), Rob Post (RvIG)
##	Introductie, mededelingen

Gestart wordt met een voorstel ronde. Mededeling door Frank Terpstra: Overige werkgroepen gaan op 26 april opgestart worden in startbijeenkomst. Uitnodiging volgt later deze week.

## Usecases 

Eelco heeft met RVIG samengezeten. Op Github zetten is nog niet gelukt. Eelco licht toe aan de hand van tekeningen op zijn laptop.
er zijn 5 gevallen:
1.	Overheid app( zonder user) -> overheid API
2.	Overheid app( Met User) -> overheid API
3.	Extern app(zonder user)  -> overheid API
4.	Extern app( Met User) -> overheid AI
5.	User  en overheid API in één domein

Voorstel is om 4 als basis te nemen van de eerste versie van het profiel OAuth. Dit wordt voorstel wordt door de groep geaccepteerd. Overige usecases worden in het profiel niet gestandaardiseerd en moeten buiten het toepassingsprofiel vallen. Daarvoor moet het functioneel toepassingsgebied zoals aaan bevolen door de expert groep verder worden aangescherpt.
Usecase 1 kan mogelijk op een later moment worden toegevoegd. Voorbeeld hiervoor is de gegevenscatalogus van het DSO waar decentrale overheden rechten hebben om hun eigen brgrippen op te voeren en muteren in een landelijke voorziening.
Usecases waarbij je individuele medewerkers van andere overheden wil autoriseren zijn niet wenselijk.
Eelco Hotting en RviG werken plaatjes uit in document. Zodra document bijgewerkt is doen alle organisaties een check of deze mappen op de door hen aangeleverde usecase. Dit ter verificatie of we niets gemist hebben bij de usecase. Organisatie specificieke usecase verdwijnen uit het document.

## Scope profiel OAuth
**Martin ligt profiel toe:**
Het profiel is op GitHub te vinden op https://github.com/Geonovum/KP-APIs-OAuthNL/blob/master/4-OAuth%202.0%20NL%20Profiel.md

Begrippen uit OAuth worden uitgelegd:
**Client** is belangrijk voor ons profiel en wordt daarom uitgebreid toegelicht. Client kan in veel gevallen ook intermediair zijn.
Vervolgens worden de interacties uitgelegd. 
Verkrijgen van autorisatie volgt verschillende mogelijke interacties om toegang tot gegevens te krijgen. Deze mogelijke interacties zijn gevat in Grant-Types.

**Grant types:**
Bij het onderwerp usecases is system to system interactie buiten scope geplaatst voor de eerste versie. Vanwege dezelfde usecase discussie zijn alleen implicit grant en authorization code flow relevante grant types in de eerste versie van het profiel.
Jan Jaap: Er missen nog interactie zoals UMA en indy Auth die we willen toevoegen. In het profiel staan de grant types die in de OAuth RFC zelf staan. Daarnaast is er een extra RFC om grant types toe te voegen. Die moeten we noemen maar zijn buiten scope.
We moeten aangeven welke grant types bestaan en welke binnen scope staan.
Actiepunt voor Martin: uitzoeken hoe CSRF op de lijst staat (waarschijnlijk via webrichtlijnen) en hiernaar verwijzen vanuit het profiel.

**Scopes:**
Gaat voorstel van URIs goed met URI strategie DSO? 
Je beschrijft in de URI de resource en het recht binnen de resource.
Voor nu nog niet standaardiseren. Het gebruik van URI als best practice aanraden.
Voor het profiel nemen we best practices “in line” mee, maar wel duidelijk aangegeven dat het een best practice is en niet verplicht.
Bij client registratie wordt vastgelegd welke scopes een client mag opvragen indien de gebruiker hem toestemming geeft. Best practice is dat de client zo min mogelijk vraagt(alleen dat wat noodzakelijk is om werk te doen).
Voor eerste versie profiel gaan we voorlopig uit van één authorization server.
Frank: voorstel om een paar standaard scopes overheid breed geldig te maken. Bijvoorbeeld: OIN/overheid, Burger, Bedrijf.
Eelco: werken met field delimiters (zoals facebook doet) niet helemaal REST maar zorgt ervoor dat je security by design kan doen(alleen dat opvragen wat je nodig hebt). Werk met ruime scopes en dwing middels audit logging af dat gebruikers van APIs alleen dat afnemen wat ze nodig hebben. Dit vereist voor externe partijen dat ze iets tekenen dat ze privacy by design toepassen.
Voor goede werking profiel is van belang dat er ook overheidsbrede afspraken zijn over data visibility.

**Tokens:**
Best practice, token niet eeuwig geldig laten zijn, hanteer 3600 seconden als standaard waarde wanneer er geen zwaarwegende redenen zijn om een andere waarde te kiezen. Voorstel Eelco: dataclassificatie koppelen aan aan te raden aantal seconden.
Ophalen van informatie horende bij een access token:
Gebruik JWT, gebruik als best practice maximaal één identifier.


## Fieldlab data visibility
Wat in het profiel te standaardiseren over scopes en claims is een van de ingewikkeldste vraagstukken voor het NEderlands profiel OAuth. Voor één specifieke API kan het heel aantrekkelijk zijn om veel scopes en claims te definieren. Echter om de aanpak schaalbaar te maken voor de hele nederlandse overheid is het juist beter om zo weinig mogelijk scopes en claims te hebben.
Hoe hiermee om te gaan kan het beste in de praktijk getest worden. Vandaar het voorstel van Eelco Hotting voor een, field lab, data visibility binnen kennisplatform API.
Datavisibility is een abstracte omschrijving voor wat scopes en claims in OAuth faciliteren. Hoe en met wat voor granulariteit maak je data zichtbaar voor gebruikers die er recht op hebben. Dwing je hierbij alle toegang technisch af (met bijvoorbeeld scopes en claims) of vertrouw je ook op afspraken tussen organisaties en eventueel bijbehorende audits om er zeker van te zijn dat er geen ongeautoriseerde toegang plaatsvind.
Idee voor het fieldlab is om het gebruik van scopes en claims in de praktijk te toetsen.
Drie mogelijke cases voorzien:
* DSO (werkt aan implementatie)
* Gemeente amsterdam Data punt (werkt aan implementatie)
* Hypothetisch/Utopische case uitwerken in Mockup.

Mogelijke deelnemers: 
* Common ground 2 developers
* DSO 3-4 developers
* Amsterdam ? developers
* RvIG 
* KvK MOVO

Actie Frank: opdracht formulering Datavisibility

Actie Eelco: mogelijkheid locatie bij gemeente Utrecht vragen.

Actie Frank: Gemeente Amsterdam datapunt vragen.

We mikken erop het fieldlab over twee maanden te houden. Voor het organiseren communiceren we via slack: https://datavisibility.slack.com/


## Afsluiting
Volgende bijeenkomst is gepland op dinsdag 14 mei 9:30-12:00 bij Geonovum.

## Actiepunten
* Eelco Hotting: plaatjes op github zetten
* Martin Borgman: Verwijzing naar CSRF op de pas toe of leg uit lijst openemen in Nederlands profiel OAuth
* Frank Terpstra: Formulering datavisibility aanleveren
* Frank Terpstra: Opzetten Slack voor fieldlab
* Frank Terpstra: opdracht formulering Datavisibility
* Eelco Hotting: mogelijkheid locatie bij gemeente Utrecht vragen.
* Frank Hotting: Gemeente Amsterdam datapunt vragen.
