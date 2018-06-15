# Usecases
Eerste versie van het hoofdstuk usecases met de aangeleverde usecases per deelnemer

## Logius
Hieronder even een hele kort overzicht van een paar aspecten voor de interfaces waar wij aan werken. Vanuit onze context gaan we hierbij alleen uit van use cases waarbij een burger/natuurlijk persoon zich richting een dienst (in het publieke domein) authenticeert. Use cases met bedrijven/organisaties/rechtspersonen, interne medewerkers e.d. zijn voor ons (nu) buiten scope.

Use Cases
* DV-perspectief
	* authentication for single service
	* authentication for service set (dienstensets)
	* authentication with multiple recipients / relying parties
	* authentication with attributes
		* verplicht/optioneel van attributen
		* authentication without identity/pseudonym, just attributes (e.g. 18+)
	* (mogelijkheid) authentication with IDP preselection (en/of MR preselectie (?))
	* follow-up authentication (re-authentication, step-up, other representation) (?)
	* ondertekenen (?)
* User-perspectief
	* authentication for self
	* authentication with representation
	* remember IDP selection
	* authenticate using browser or app from IDP; app-2-app waar mogelijk ondersteunen
* IT/applicatie-architectuur perspectief
	* web-based applicatie
	* native app
	* refresh token / langduriger “sessies”
	* m2m / dienstbemiddeling

Benodigde specificaties
*	berichten (functioneel, technisch)
*	flow / interfaces
*	bijbehorende processing rules
*	metadata specificaties
 
## Kennisnet
De twee use cases van DSO, client credentials grant en OIDC met authorization code grant, sluiten hoog over aan bij use cases binnen de onderwijssector. Voor met name de onderwijssectoren  VO en MBO zorgt de federatieve hub van Kennisnet, Entree Federatie, er voor dat de authenticatiedienst van een onderwijsinstelling niet met alle service providers hoeft te koppelen, maar slechts één SAML koppeling heeft met Entree Federatie. Dezelfde constructie geldt voor een service provider. In de toekomstvisie toegang van de Educatieve contentketen wordt voorgesteld om een dergelijke centrale hub uit te breiden met standaarden als Oauth en OpenID Connect. Er zijn nog onderzoeksvragen die met de toekomstvisie samenhangen. Een relevante voor de werkgroep is of we het binnen de werkgroep het onderkennen van een federatieve hub wenselijk vinden (afwegen voor- en nadelen) en wat is mogelijk de impact op een bepaald profiel. 

## Kamer van koophandel

### Use Case 1 Inzien eigen overheidsgegevens 

Een persoon logt in bij een uitvoeringsinstantie en wil zijn eigen overheidsgegevens inzien. Voor het ophalen van eigen overheidsgegevens uit een basisregister is het nodig dat de gebruiker geïdentificeerd wordt zodat autorisatie en authenticatie mogelijk is. 

### Use Case 2 Eigen overheidsgegevens hergebruiken

Een persoon logt in bij een uitvoeringsinstantie en wil een dienst afnemen. Hiervoor zijn gegevens nodig uit andere basisregisters. Voor het ophalen van eigen overheidsgegevens uit een basisregister is het nodig dat de gebruiker geïdentificeerd wordt zodat autorisatie en authenticatie mogelijk is. 

### Use Case 3 Ophalen privacy gevoelige gegevens door derden

Enkele basisregisters kennen semi open informatie die als (digitale) informatie producten tegen een vergoeding verstrekt worden aan derden. Voor specifieke beroepsgroepen is het mogelijk om privacy gevoelige gegevens in te zien op een informatie product. Voor het ophalen van privacy gevoelige overheidsgegevens uit een basisregister is het nodig dat de gebruiker geïdentificeerd wordt zodat autorisatie en authenticatie mogelijk is.

## Digitaal stelsel omgevingswet

### Use Case 1
De eerste en tevens eenvoudigste use case, bestaat uit koppelingen tussen applicaties onderling. Een voorbeeld is een loket met een content API. De communicatie verloopt via een api gateway. Hierbij is het alleen van belang dat de applicatie zelf informatie nodig heeft en is er geen sprake van bijvoorbeeld ingelogde eindgebruikers die een bevraging doen. De identiteit die gepropageerd wordt is in dit geval die van een applicatie. Dit is een technische identiteit. Omdat de services blootgesteld worden via de api gateway met API store zullen partijen bij aanmelden in de API store kenbaar moeten maken dat ze geautoriseerd zijn op de API’s die ze bevragen. Dit word afgedwongen door de API gateway.
### Use Case 2
De tweede use case betreft, naast applicaties, ook ingelogde eindgebruikers. Deze gebruikers kunnen ingelogd zijn met bijvoorbeeld DigiD, eHerkenning of een organisatie specifiek inlogmiddel. Een voorbeeld van deze use case is een gebruiker die ingelogd is in een loket, en een aanvraag in wil dienen naar een achterliggende toepassing die niet in het loket zelf maar ergens anders binnen de overheid gehost wordt. De identiteit van de eindgebruiker door de keten heen worden doorgeven. In deze use-case werken meerdere samen en wordt gebruik gemaakt van de GDI componenten DigiD / EHerkenning. Deze use case is dus een uitbreiding/ specialisatie van de eerste usecase.