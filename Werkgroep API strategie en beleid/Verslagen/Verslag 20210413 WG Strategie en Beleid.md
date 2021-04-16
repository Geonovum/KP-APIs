# Werkgroep API Strategie en Beleid
Verslag van de virtuele bijeenkomst van **26 januari 2021**

## Aanwezig
Publieke sector, op alfabetische volgorde van organisatie:

Tony Sloos (ArchitecIT/DSO/minBZK), Redouan Ahaloui en Han Zuidweg (Forum Standaardisatie), Jeroen Temme en Michel Trimpe (gemeente Amsterdam), Trudi Zegveld (gemeente Venlo), Frank Terpstra (Geonovum), Koos Boersma  (Informatiehuis Water), Frans Smit (Inspectie O&E), Richard Jansen (RDW), Gershon Janssen (VNG).

Private sector, op alfabetische volgorde naar organisatie:
Marcel Krassenburg (MKIdee)

## Afgemeld
Gino Laan, Paul Zeef (minBZK)

## Wijzigingen
Gerard Kreuk en Marc Tulen van de Sociale Verzekeringsbank (SVB) vervangen Geer Haas in deze groep. Geer blijft de voortgang van de groep wel volgen.

## Verslag bijeenkomst van 26 januari 2021
De aanwezigen hadden geen aanvullingen of opmerkingen op het [verslag van de virtuele bijeenkomst op 26 januari 2021](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20strategie%20en%20beleid/Verslagen/Verslag%2020210126%20WG%20Strategie%20en%20Beleid.md).

## Waar staan we
Aan het begin van de bijeenkomst gaf Han een korte samenvatting van de voortgang in het afgelopen jaar en een beeld van waar we nu staan in de werkgroep.

Eerst schetst Han de tijdlijn sinds de publicatie van de eerste versie van de Nederlandse API Strategie:
- 4 februari 2020: Kennisplatform APIs publiceert de eerste [API Strategie](https://docs.geostandaarden.nl/api/API-Strategie/)
- 3 maart 2020: Kennisplatform APIs organiseert de [kick-off API Strategie 2.0](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20strategie%20en%20beleid/Verslagen/Verslag%2020200304%20WG%20Strategie%20en%20Beleid.md) in Amersfoort
- maart 2020-april 2021: [5 bijeenkomsten](https://github.com/Geonovum/KP-APIs/tree/master/Werkgroep%20API%20strategie%20en%20beleid/Verslagen) van de werkgroep Strategie en Beleid
- juli 2021: Kennisplatform APIs wil een nieuwe versie van de API Strategie publiceren

Het afgelopen jaar richtte de werkgroep zich op de belangrijkste punten die uit de [bijeenkomst van 3 maart 2020](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20strategie%20en%20beleid/Verslagen/Verslag%2020200304%20WG%20Strategie%20en%20Beleid.md) naar voren kwamen:
- Start vanuit het probleem (niet de oplossing: APIs)
- Een strategie moet een **visie** (stip op de horizon) en een **stappenplan** (het pad er naartoe) bevatten
- Geef **duidelijkheid** over de positie van de overheid

Dit resulteert in de [werkversie](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20strategie%20en%20beleid/Werkversie/api-strategie-overheid.md) van het hoofdstuk Strategie en Beleid voor de nieuwe API Strategie. Sommige organisaties zetten ook kritische kanttekeningen bij de huidige oriëntatie van het werkdocument. RvIG stelt:
- Deze groep zoekt nog steeds een probleem bij een oplossing.
- Het werkdocument richt zich teveel op de technische voordelen van data bij de bron. Bestuurlijke en juridische aspecten geven een complexere realiteit.
- We moeten ons niet met het gegevenslandschap van de overheid bemoeien. Blijf bij de kern, APIs, en maak duidelijk wat je met 'APIs' precies bedoeld.

RDW voegt hier aan toe:
- RDW richt zich meer op processen dan op data.
- RDW biedt verschillende informatieproducten en diensten zoals APIs, web services, applicaties, bestanden en open data.
- 'Ontsluit data bij de bron met APIs' is te kort door de bocht voor de realiteit bij RDW. Het gaat meer om 'koppelvlakken van de overheid herijken'.

Daarom bespreken we in deze bijeenkomst het [manifest](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20strategie%20en%20beleid/Werkversie/api-strategie-overheid.md#manifest) en [stappenplan](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20strategie%20en%20beleid/Werkversie/api-strategie-overheid.md#stappenplan), de kern van het hoofdstuk over Strategie en Beleid in de Nederlandse API Strategie.

## Manifest en stappenplan
Vooraf aan de bijeenkomst gaven enkele deelnemers al commentaar op het werkdocument. Dit commentaar is te zien in de [issues op de Github repository van de werkgroep](https://github.com/Geonovum/KP-APIs/issues?q=is%3Aissue+is%3Aopen+label%3A%22API+strategie+en+beleid%22). In de bijeenkomst werden het manifest en stappenplan inhoudelijk verder besproken. In de discussie kwamen de volgende punten naar voren:

- Tony stelt dat het om meer gaat dan data bij de bron ontsluiten. Het gaat om stelsels die functionaliteit aan elkaar bieden. Hiervoor is een architectuur van microservices nodig in een open stelsel, waardoor de digitale overheid een platform wordt. De overheid zou zich moeten positioneren als platform-aanbieder. We moeten van "toegang tot basis*registraties*" naar "toegang tot basis*gegevens*" toe. Hiervoor is een goede API strategie noodzakelijk.

- Marcel kan zich vinden in de platformvisie en merkt op dat Common Ground het platformconcept mist. Applicaties spelen in de Common Ground visie een te ondergeschikte rol.

- Michiel vindt ook dat REST APIs een te nauwe oriëntatie is en denkt meer aan federatief stelsel dat mutatiestromen ondersteunt.

- Jeroen stelt dat microservices niet noodzakelijk (REST) APIs impliceren en vice versa. Hij vindt dat we ons teveel richten op het *halen* van gegevens (de 'GET' in REST) terwijl het vooral gaat om functionaliteit delen.

- Frank merkt op dat de platformeconomie al meer dan 10 jaar een realiteit is. De burger verwacht uiteindelijk dat de digitale overheid op die manier zal functioneren. Onze eigenlijke boodschap is dat de digitale overheid de boot dreigt te missen, en dat is niet een boodschap die bestuurders met open armen ontvangen. Zij zien het probleem vaak liever niet benoemd.

- Richard ziet dat veel bestuurders pas in beweging komen als iets wettelijk verplicht wordt, dus we moeten niet verwachten dat bestuurders de API strategie gemakkelijk zullen omarmen.

- Frans waarschuwt dat bestuurders ons waarschijnlijk als techno-optimisten beschouwen. Platformen ok, maar je moet kunnen uitleggen *waarvoor*. Bijvoorbeeld om burgers en bedrijven beter van digitale diensten te kunnen voorzien.

- Koos suggereert dat we onze visie bij bestuurders onder de aandacht kunnen brengen door het te koppelen aan thema's zoals FAIR data principes die op bestuurlijk niveau leven.

- Richard waarschuwt dat platformen ook een risico met zich meebrengen en in de publieke opinie niet altijd in een positief daglicht staan. Zie de kritiek die Google, Facebook, Twitter en andere platformen krijgen op hun macht en privacy-beleid. Hij stelt voor om het niet abstract over platformen te hebben maar vooral de voordelen van platformen duidelijk te benoemen.

- Gershon pleit ervoor om weg te blijven van programmering en tijdlijn. Ga het in een strategie niet over uitvoering hebben.

- Frank suggereert om het inzetten op APIs te koppelen aan het inkoopmoment, zoals dat het geval is met open standaarden met een 'pas toe of leg uit' status.

Han zal proberen het werkdocument met het commentaar uit deze discussie te actualiseren, en vraagt daarvoor om tekstvoorstellen van de werkgroep leden.

## Overig
Kennisplatform APIs wil tegen de zomer een nieuwe versie van de API Strategie publiceren. Daarom stelt Han voor om regelmatiger met deze werkgroep bij elkaar te komen, zodat we meer voortgang kunnen maken met het werkdocument. De voorgestelde frequentie is elke 4-5 weken (was elke 8-10 weken).

Verder geeft Han aan dat zijn collega Redouan Ahaloui van Forum Standaardisatie het voorzitterschap van deze groep in mei zal overnemen.
