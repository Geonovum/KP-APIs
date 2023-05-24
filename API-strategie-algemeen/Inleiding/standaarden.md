# Standaarden
Binnen de Nederlandse publieke sector zijn meerdere standaarden die betrekking hebben op APIs. In dit hoofdstuk geven we verwijzingen naar de standaarden die zijn voortgekomen uit het Kennisplatform APIs. Hieronder zijn de meest relevante standaarden opgenomen. Kijk voor een actueel en volledig overzicht van alle standaarden altijd op [forum standaardisatie](https://www.forumstandaardisatie.nl/lijst-open-standaarden/in_lijst/verplicht-pas-toe-leg-uit). 

## API Designrules (Nederlandse API Strategie)
Deze sectie beschrijft de status en uitgangspunten voor de standaard "API Designrules". De standaard is een op zichzelfstaand document en is hier te vinden:

<!-- https://geonovum.github.io/API-Designrules/ (werkversie) -->
https://logius-standaarden.github.io/API-Design-Rules/ (werkversie)

<!-- https://docs.geostandaarden.nl/api/API-Designrules/ (stabiele versie) -->
https://publicatie.centrumvoorstandaarden.nl/api/adr/ (stabiele versie)

### Oorsprong standaard
De API designrules vinden hun oorsprong in de ["API strategie" van het digitaal stelsel omgevingswet (DSO)](https://aandeslagmetdeomgevingswet.nl/digitaal-stelsel/aansluiten/standaarden/api-en-uri-strategie/). Bij het opstellen van de API Designrules is de DSO API strategie het startpunt geweest en heeft de werkgroep API strategie gekeken hoe deze toepasbaar gemaakt kunnen worden voor de hele Nederlandse publieke sector.
### Status bij forum standaardisatie
De API designrules standaard is op 9 juli 2020 goedgekeurd door het OBDO voor opname op de "pas toe of leg uit lijst" van het [forum standaardisatie](https://www.forumstandaardisatie.nl/lijst-open-standaarden/in_lijst/verplicht-pas-toe-leg-uit). 
#### Werkingsgebied standaard
Bij aanmelding was het beoogd organisatorisch werkingsgebied:
Overheden, semi-overheden en instellingen uit de publieke sector
#### Toepassingsgebied standaard
Bij aanmelding was het beoogd functioneel toepassingsgebied:
Het aanbieden van RESTful APIs ten behoeve van het ontsluiten van overheids informatie/functionaliteit en enkelvoudige datasets aan eenieder waarvoor deze bedoeld is(burger, bedrijf, andere overheid, etc…). Het ontsluiten van meervoudige en/of statistische datasets via één API valt buiten het functioneel werkingsgebied hiervoor staat de standaard ODATA reeds op de lijst met aanbevolen standaarden. 

## API Designrules modulen 
Deze sectie beschrijft de status en uitgangspunten voor de standaard "API Designrules modulen". De (concept) modulen zijn  op zichzelfstaand document en te vinden op github & docs.geostandaarden.nl:

https://geonovum.github.io/KP-APIs/API-strategie-extensies/ (werkversie)

https://docs.geostandaarden.nl/api/vv-hr-API-Strategie-ext-20190715/ (stabiele versie)

### Oorsprong standaard
De API designrules modulen bevatten onderwerpen die bij het opstellen van de eerste versie van de API designrules nog niet als stabiel werden beschouwd. Er wordt nog actief gewerkt om deze modulen tot een stabiele versie te maken. Uiteindelijk zal een deel van de modulen mogelijk direct onderdeel worden van de normatieve API design rules. Een ander deel zal een set van optionele modulen blijven die gebruikt kunnen worden wanneer specifieke extra techniek of functionaliteit nodig is.
### Status 
De API designrules modulen zijn nog in ontwikkeling en hebben geen formele status.
#### Werkingsgebied standaard
Een werkingsgebied is (nog) niet van toepassing.
#### Toepassingsgebied standaard
Een toepassingsgebied (nog) niet van toepassing.

## Nederlands profiel OAuth

Deze sectie beschrijft de status en uitgangspunten voor het Nederlands profiel OAuth. het profiel zelf is een op zichzelfstaand document.
Het Nederlands profiel OAuth is hier te vinden:
<!-- https://geonovum.github.io/KP-APIs-OAuthNL/#dutch-government-assurance-profile-for-oauth-2-0 -->
https://publicatie.centrumvoorstandaarden.nl/api/oauth/

In aanvulling hierop is er een document dat de verschillen met iGOV kort samenvat en voorziet van rationales:

[Additional specification and constraints of iGov-NL to the iGov profile](https://github.com/Logius-standaarden/OAuth-NL-profiel/blob/master/Additional%20specification%20and%20constraints%20of%20iGov-NL%20to%20the%20iGov%20profile.md)

### Oorsprong standaard

Het opstellen van deze standaard is voortgekomen uit het Expert advies OAuth [[Expert]]. Daarin wordt aangeraden eerst een nederlands profiel op stellen alvorens OAuth op de pas toe of leg uit lijst van het forum standaardisatie te plaatsen. Het maken van dit Nederlandse profiel is opgepakt door de werkgroep Authenticatie/Autorisatie van het Kennisplatform API's.

### Status bij forum standaardisatie
Het Nederlands OAuth profiel is op 9 juli 2020 goedgekeurd door het OBDO voor opname op de "pas toe of leg uit lijst" van het [forum standaardisatie](https://www.forumstandaardisatie.nl/lijst-open-standaarden/in_lijst/verplicht-pas-toe-leg-uit). 
De internationale standaard OAuth is opgenomen op [de lijst met aanbevolen standaarden](https://www.forumstandaardisatie.nl/open-standaarden/lijst/aanbevolen).

#### Werkingsgebied standaard

Als organisatorisch werkingsgebied wordt in het expert advies geadviseerd:
Nederlandse overheden (Rijk, provincies, gemeenten en waterschappen)
en instellingen uit de (semi-) publieke sector

#### Toepassingsgebied standaard

Als functioneel toepassingsgebied wordt in het expert advies voorgesteld:
Het gebruik van OAuth 2.0 is verplicht voor applicaties waarbij gebruikers
(resource owner) toestemming geven (impliciet of expliciet) aan een
dienst (van een derde) om namens hem toegang te krijgen tot specifieke
gegevens via een RESTful API.
Het gaat dan om een RESTful API waar de resource owner recht tot
toegang heeft.

#### Bijzonderheden

##### OpenID connect buiten scope

de expertgroep van het forum standaardisatie is op 7 juli en op 22 september 2016 bijeengekomen
om de standaarden, de aandachtspunten en openstaande vragen uit
het voorbereidingsdossier te bespreken. Daarbij is vastgesteld dat
OpenID Connect niet voor opneming op de lijst open standaarden in
aanmerking komt. Inmiddels is OpenID connect apart voorgedragen voor opname op de "pas toe of leg uit" lijst van het forum standaardisatie. Voor deze standaard komt ook een Nederlands profiel. Dit zal ook gebaseerd zijn op iGOV zoals in de volgende sectie uitgelegd wordt.

##### Aansluiting op internationale standaard iGov
Het Nederlands profiel OAuth baseerd zich op het internationale iGOV OAuth 2.0 profiel [[iGOV.OAuth2]]. Niet alle keuzes van dit internationale profiel worden overgenomen aangezien dit een aantal keuzes bevat die sterk leunen op de amerikaanse situatie. Het kan het best beschouwd worden als een fork waarbij in het profiel aangeven wordt waar afwijkingen zijn.
iGov heeft naast het OAuth profiel ook een OpenID connect profiel [[iGOV.OpenID]]. Wanneer mogelijk ook OpenID connect op de pas toe of leg uit lijst van het Forum standaardisatie komt kan het Nederlandse profiel OAuth uitgebreid worden met een Nederlandse variant van het iGov OpenID Connect profiel. De usecase die wordt beschreven aan het begin van het Nederlands profiel OAuth sorteert daar al op voor.











