# Beveiliging


> *Doel van dit hoofdstuk: Hoe kan je je applicatie landschap inrichten zodat je APIs kan aanbieden. Welke componenten zijn hiervoor nodig. Hoe ga je om met opschalen, beschikbaarheid. Wat zijn afwegingen om beveiliging al dan niet toe te passen.*



Voor de eerste versie van de Nederlandse API strategie bevat dit hoofdstuk alleen het onderwerp OAuth. voor toekomstige versies voorzien we mogelijk de volgende onderwerpen.
wettelijke kaders en hun uitwerking in de praktijk: 
* AVG
* Wet digitale overheid (concept)

Generieke beveiligingsonderwerpen: 
* Privacy by Design
* BIR
* VIR(BI)
* Indentificatie & Autorisatie
* Authenticatie (OpenID-Connect)
* Ondertekening en versleuteling (wanneer en waarom pas je deze technieken toe)


## Nederlands profiel OAuth

Deze sectie beschrijft de uitgangspunten voor het Nederlands profiel OAuth. het profiel zelf is een op zichzelfstaand document.

### Expert advies OAuth forum standaardisatie 

Het opstellen van deze standaard is voortgekomen uit het Expert advies OAuth [[Expert]]. Daarin wordt aangeraden eerst een nederlands profiel op stellen alvorens OAuth op de pas toe of leg uit lijst van het forum standaardisatie te plaatsen.

### Werkingsgebied standaard

Als organisatorisch werkingsgebied wordt geadviseerd:
Nederlandse overheden (Rijk, provincies, gemeenten en waterschappen)
en instellingen uit de (semi-) publieke sector

### Toepassingsgebied standaard

Als functioneel toepassingsgebied wordt voorgesteld:
Het gebruik van OAuth 2.0 is verplicht voor applicaties waarbij gebruikers
(resource owner) toestemming geven (impliciet of expliciet) aan een
dienst (van een derde) om namens hem toegang te krijgen tot specifieke
gegevens via een RESTful API.
Het gaat dan om een RESTful API waar de resource owner recht tot
toegang heeft.

### OpenID connect buiten scope

de expertgroep is op 7 juli en op 22 september 2016 bijeengekomen
om de standaarden, de aandachtspunten en openstaande vragen uit
het voorbereidingsdossier te bespreken. Daarbij is vastgesteld dat
OpenID Connect niet voor opneming op de lijst open standaarden in
aanmerking komt.

### Aansluiting op internationale standaard iGov
Het Nederlands profiel OAuth baseren we het internationale iGOV OAuth 2.0 profiel [[iGOV.OAuth2]] we nemen niet alle keuzes van dit internationale profiel over aangezien dit een aantal keuzes bevat die sterk leunen op de amerikaanse situatie. Het kan het best beschouwd worden als een fork waar we in ons profiel aangeven waar we afwijken.
iGov heeft twee naast het OAuth profiel ook een OpenID connect profiel [[iGOV.OpenID]] wanneer mogelijk ook OpenID connect op de pas toe of leg uit lijst van het Forum standaardisatie komt kan dit Nederlandse profiel uitgebreid worden met een Nederlandse variant van het iGov OpenID Connect profiel. De usecase die hieronder wordt beschreven sorteerd daar al op voor.

Het Nederlands profiel OAuth is hier te vinden:
https://geonovum.github.io/KP-APIs-OAuthNL/#dutch-government-assurance-profile-for-oauth-2-0









