Verslag: Werkgroep API Architectuur 2021-02-22

Agenda

1 Welkom_

- Op github is een indeling gemaakt voor de uitwerking van deelonderwerpen.
https://github.com/Geonovum/KP-APIs/tree/master/Werkgroep%20API%20architectuur

- Tijdpad voor volgende versie API strategie : 1 juni 2021 start publieke consultatie, 1 mei 2021 aangeven welke onderdelen meegaan
(Dus ook voor hoofdstuk API Architectuur moeten we de komende weken komen tot een versie die gereed is voor consultatie)

- NORA : Eric Brouwer geeft aan dat de eerder gemaakte opzet voor de ranking van voor API's relevante Algemen Principes op NORA is geplaatst.
https://www.noraonline.nl/wiki/API/Principes

- API Keys : API Keys zijn in de huidige versie van api strategie niet ver uitgewerkt (worden wel genoemd)
In werkgroep beveiliging is de vraag gesteld of in werkgroep Architectuur dit onderwerp aandacht kan krijgen.

Uit de discussie:
Toepassing,
rate limiting, 
quota theft,
billing,
communication / informeren,
know your customers,

API Keys kunnen ook gebruikt worden om verschillende groepen te onderscheiden (en bv verschillende service niveaus te bieden.
API Keys voor open data, is het dan een gesloten dienst of een open dienst. Een argument om het te zien als een 'open dienst' is de mogelijkheid om voor iedereen eenvoudig (bv self service) toegang te krijgen,

Afspraak is dat met groepsleden uit de thema's API Management/API Capability besproken zal worden waar dit evt kan worden uitgewerk.

optie is:
- https://geonovum.github.io/KP-APIs/Werkgroep%20API%20architectuur/#13-functionaliteit-api-gateway
- https://geonovum.github.io/KP-APIs/Werkgroep%20API%20architectuur/#api--gateway-beheer



_2 Event Driven processen & Notificaties_

Uit de discussie:

- Gershon Janssen geeft aan dat hij in een volgende verdiepende sessie een presentatie/toelichting kan geven 
- Ervaring met het (recente) Fieldlab is dat er al veel functionele aandachtspunten zijn bij een event driven/gebeurtenis driven architectuur, nog los van technische aspecten/vraagstukken
- Zaken als Event Sourcing, Informatie rijke of Informatie arme events zijn concepten die geschikt zijn om op te nemen in het hoofdstuk
- Voordelen/nadelen mbt ontkoppeling via event-bus mbt robuustheid, schaalbaarheid kunnen besproken worden
- Een aandachtspunt hierbij is mogelijk de relatie met REST API's, de huidige focus van de API strategie/API Design Rules is resource gericht.
- Een architectuur visie die in deze context (mogelijk) geplaatst kan worden is het 'op maat' aanbieden van events/data door een aanbieder. 
(De architectuur van de afnemer strekt zich uit tot aan/over de aanbieder is een manier om hiernaar te kijken), Dit hangt samen met de semantiek van events en data in verschillende domeinen.

Afspraak is dat er een sessie komt over 3/4 weken;


_4 API Architectuur onderwerpen (Ontwikkelingen & Invulling)_

Ontwikkelingen:

* Beveiligingsarchitectuur

Frank van Es heeft een review uitstaan van een pull request / update van dit onderdeel

* API Management / API Capability

Met subgroepen zal nog gesproken worden over aansluiting van onderwerpen (en over API keys zoals eerder besproken)
 
* Deelnemers subgroepen / indeling onderwerpen

Lijst deelnemers is geactualiseerd

* Draft Hoofdstuk Architectuur 

De huidige stukken/inputs zullen in de totale API strategie worden opgenomen
