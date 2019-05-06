## Communicatie en beleid
> *Dit hoofdstuk geeft een niet-technische inleiding voor bestuurders en managers. In dit hoofdstuk bekijken we:*  
> *- welk probleem willen we oplossen?*  
> *- wat zijn APIs en hoe helpen ze bij dit probleem?*  
> *- waarom zijn APIs relevant voor de overheid?*  
> *- wat kan mijn organisatie met APIs?*
> *- voorbeelden van het gebruik van APIs in Nederland*

Larissa gaat verhuizen van Den Haag naar Amsterdam. Ze gaat naar het gemeentehuis in Amsterdam om zich in te schrijven. Achter de schermen komt er nu een indrukwekkende gegevensstroom op gang.

Amsterdam en Den Haag houden elk hun eigen registratie van personen bij. De ICT systemen van Amsterdam vragen daarom eerst de persoonsgegevens van Larissa op bij de ICT systemen van Den Haag. Dan registreert Amsterdam Larissa als inwoner in z’n eigen basisregistratie personen. Vervolgens maakt Amsterdam verwijsgegevens voor Larissa aan en stuurt deze naar Den Haag.
Den Haag verwerkt de verwijsgegevens voor Larissa in z’n lokale basisregistratie personen. Zowel Amsterdam als Den Haag geven periodiek de mutaties van hun lokale basisregistratie personen door aan de [centrale basisregistratie personen van de Autoriteit Persoonsgegevens](https://www.autoriteitpersoonsgegevens.nl/nl/onderwerpen/gemeente/basisregistratie-personen-brp?qa=brp). Zo kan het drie werkdagen kosten om een eenvoudige verhuizing volledig te registreren.

Is het niet efficiënter om één basisregistratie personen bij te houden, in plaats van gegevens heen en weer te schuiven van de ene lokale registratie naar de andere? Natuurlijk. Dit idee zit achter het [nieuwe gegevenslandschap](https://www.gemmaonline.nl/images/gemmaonline/8/8b/Gemeentelijk_Gegevenslandschap_-_Beschrijving_informatiearchitectuur_v0_6.pdf) met als onderdelen [Haal Centraal](https://github.com/VNG-Realisatie/Haal-Centraal-BRP-bevragen) en [Common Ground](https://vng.nl/samen-organiseren/common-ground). En technisch kan het: met APIs.

![Visualisatie van de voordelen van het bij de bron houden van data met APIs](../media/visualisatie%20data%20bij%20de%20bron.png)
<img src="../media/visualisatie%20data%20bij%20de%20bron.png" alt="Visualisatie van de voordelen van het bij de bron houden van data met APIs" width="600" />

### Wat is een API eigenlijk?
Een [_application programming interface_ (API)](https://www.ensie.nl/dimitri-van-hees/api) is een gestructureerd en gedocumenteerd koppelvlak voor communicatie tussen applicaties. Je kan een API zien als een digitale stekkerdoos die applicaties met elkaar verbindt.

APIs bestaan al zo lang er computers zijn. Het besturingssysteem van je computer bijvoorbeeld heeft APIs die in computerjargon vaak [*libraries*](https://en.wikipedia.org/wiki/Library_%28computing%29) heten. De software pakketten die op je computer draaien gebruiken deze APIs voor basisfuncties zoals het lezen van een bestand van schijf of het openen van een venster op het scherm.

Sommige applicaties bieden data of functionaliteit aan met APIs die over het Internet bereikbaar zijn. Ook deze APIs bestaan al een tijdje. Sinds het eind van de jaren ‘90 stonden ze vooral bekend als [*web services*](https://nl.wikipedia.org/wiki/Webservice). Het bedrijf [Amadeus](https://developers.amadeus.com/) bijvoorbeeld biedt al decennia lang online web services (APIs) aan voor het boeken van vluchten.

APIs zijn dus niks nieuws. Maar de technologie om APIs mee te bouwen een aan te bieden ontwikkelt zich wel. Zo wordt het steeds makkelijker om APIs te bouwen, te publiceren en te gebruiken en kunnen APIs steeds grotere datasets en applicaties aan. Denk maar eens aan de [APIs van Google](https://developers.google.com/apis-explorer/) die overal gebruikt worden.

### Waarom hoor ik steeds over 'REST' en 'JSON'?
Websites zijn er voor mens-machine communicatie, APIs voor machine-machine communicatie. Websites presenteren informatie aan mensen, APIs maken gegevens en verwerkingsfuncties beschikbaar voor applicaties. De technologie voor websites en APIs heeft daarom veel overeenkomsten.

Je browser gebruikt [http](https://www.w3schools.com/whatis/whatis_http.asp) (*hypertext transfer protocol*) om informatie op te halen van een website. De website stuurt de informatie in het *hypertext markup language* ([HTML](https://www.w3schools.com/whatis/whatis_html.asp)) standaard format, dat je browser laat zien als een opgemaakte pagina. Zo werkt het ook voor de pagina die je nu leest.

APIs gebruiken dezelfde standaard http. Maar waar HTML bedoeld is voor webpagina's die zijn opgemaakt voor het menselijk oog, gebruiken APIs een machine leesbaar standaard format dat [JSON](https://www.w3schools.com/whatis/whatis_json.asp) (*JavaScript Object Notation*) heet. Net als HTML is JSON tekst met structuur. JSON heeft een nog eenvoudiger structuur dan HTML.

![Visualisatie van APIs tegenover web browsen](../media/visualisatie%20API%20vs%20web%20browsen.png)

Als je hoort praten over [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) (of *RESTful*) APIs dan gaat het over de manier waarop deze URLs (weblinks), http en JSON gebruikt. REST beschrijft een duidelijk gestructureerde, efficiënte en laagdrempelige manier om APIs over het Internet aan te bieden. [Meer over REST in hoofdstuk 4](#restful-principes).

### Wie gebruiken er APIs?
De meeste applicaties gebruiken APIs onder de motorkap zonder dat de eindgebruiker dat ziet. Als je een app opent voor het weer, dan merk je niet dat deze app gegevens ophaalt bij het [KNMI via een API](https://meteoserver.nl/real-time-KNMI-weer-API.php).

Degene die het meest direct met een API te maken krijgt is de ontwikkelaar van de applicatie die de API gebruikt. Zij moet begrijpen hoe de API werkt en hoe je deze vanuit de applicatie moet bevragen.

Hier verschillen APIs dus van websites. Een website bouw je voor de eindgebruiker die hem bezoekt. Een API maak je voor programmeurs die er applicaties mee bouwen. Daarom is het gewoonte geworden om APIs aan te bieden op het '*developer*' subdomein van een website zoals [developer.ns.nl](https://developer.ns.nl/) van de Nederlandse Spoorwegen.

Ook andere soorten gebruikers kunnen interesse hebben in een API. In een vroeg stadium van de planning van een product wil een *product manager* al APIs zoeken en weten wat hun mogelijkheden zijn. Een *architect* wil beoordelen of een API past in de architectuur. Met deze gebruikers moet je vooral rekening houden bij het documenteren en vindbaar maken van een API. [Meer over gebruikers in hoofdstuk 3](Werkgroep%20Gebruikerswensen/Gebruikerswensen%20v3.1.md).

### Wat betekenen APIs voor de Nederlandse overheden?
De [overheid voert beleid](https://www.open-overheid.nl/) om openbare gegevens die niet privacy gevoelig zijn zoveel mogelijk openbaar te maken. Deze gegevens wil je op een uniforme manier veilig en gebruiksvriendelijk aanbieden. Meestal zijn het software ontwikkelaars die gegevens van de overheid gebruiken om diensten of producten te bouwen. Het gebruik van APIs ligt dan voor de hand.

Overheden hebben zes goede redenen om hun gegevens met APIs te ontsluiten:
1. **API’s zorgen ervoor dat gegevens bij de bron blijven.** APIs voorkomen dat organisaties lokale kopieën gebruiken van centrale bronnen van gegevens zoals de basisregistraties. Dit maakt processen efficiënter, vermindert de kans op fouten door dupliceren en voorkomt dat kopieën van gegevensverzamelingen uit de pas lopen.
2. **APIs maken het mogelijk om specifieke vragen te bedienen.** Zo kun je gegevens op een [*need-to-know*](https://www.esd.whs.mil/portals/54/Documents/DD/issuances/dodm/520002_dodm_2017.pdf) basis aanbieden en voorkom je dat er onnodig veel gegevens worden uitgewisseld. Een applicatie die in de [Basisregistratie Adressen en Gebouwen](https://bag.basisregistraties.overheid.nl/) het adres opzoekt dat hoort bij een postcode en huisnummer hoeft niet het bouwjaar, oppervlakte en gebruiksdoel van het pand te krijgen.
3. **APIs maken lossere koppelingen tussen systemen mogelijk.** Vaste ketens maken steeds vaker plaats voor lossere koppelingen met een kortere levensduur. Bijvoorbeeld in [*smart cities*](https://ec.europa.eu/digital-single-market/en/smart-cities) zoals  [Amsterdam](https://amsterdamsmartcity.com/projects/dataamsterdamnl) waar een wisselende groep publieke en private organisaties dynamisch gegevens uitwisselt.
4. **APIs passen bij een 'Agile' aanpak van ICT projecten.** Steeds meer organisaties zoals [Logius](https://logius.nl/onze-organisatie/safe-bij-logius) ontwikkelen software volgens [Agile principes](https://www.agilealliance.org/agile101/). APIs helpen om snel in te spelen op veranderende eisen van de gebruikers van je gegevensbronnen. Ook maken APIs het mogelijk om ideeën uit te proberen zonder dat je de onderliggende gegevensbron hoeft aan te passen.
5. **APIs voorkomen leveranciersafhankelijkheid.** APIs kun je helemaal met [open standaarden](https://www.forumstandaardisatie.nl/thema/open-standaarden) zoals [https](https://www.forumstandaardisatie.nl/standaard/https-en-hsts), [JSON](https://www.forumstandaardisatie.nl/standaard/json) en [OAS](https://www.forumstandaardisatie.nl/standaard/openapi-specification) bouwen. Met APIs ben je niet meer aangewezen op maatwerk en producten van specifieke leveranciers om aan te sluiten op een gegevensbron.
6. **APIs bevorderen innovatie.** Door gegevens met een API aan te bieden kunnen zowel publieke als private ondernemingen ermee aan de slag. Zij gebruiken de gegevens soms op verrassende manieren die nieuwe kansen creëren. [APIs en bier](https://www.ratebeer.com/api-documentation.asp) bijvoorbeeld?

### Hebben APIs toegevoegde waarde voor mijn organisatie?
APIs zijn een middel, geen doel. De missie van je organisatie bepaalt of APIs toegevoegde waarde hebben in de ICT processen. Als je organisatie een dienstverlenende taak heeft en gegevens beheert die voor anderen bruikbaar zijn, dan hebben APIs mogelijk nut. Dat geldt ook als je organisatie deel uit maakt van een of meer ketens.

Je organisatie kan een rol hebben als aanbieder of gebruiker van APIs, of beiden. Inventariseer welke gegevens organisatie voortbrengt en welke gegevens je gebruikt van andere organisaties. Bekijk hoe de bestaande ICT koppelingen ingericht zijn. Is je organisatie daarbij afhankelijk van bepaalde producten of leveranciers? Kan het  efficiënter, flexibeler, veiliger en meer open met APIs?

Deze [API strategie](https://docs.geostandaarden.nl/api/API-Strategie/)  beschrijft de standaarden, ontwerpprincipes en veiligheidsmaatregelen die ervoor zorgen dat alle overheden hun APIs op een inzichtelijke, gebruikersvriendelijke, veilige en geharmoniseerde manier aanbieden. Door deel te nemen in het [Kennisplatform APIs](https://www.geonovum.nl/themas/kennisplatform-apis) krijgt je organisatie meer inzicht in de toegevoegde waarde die APIs voor jouw toepassing al dan niet kunnen bieden.

### Nederland heeft al schitterende  APIs
Veel publieke organisaties in Nederland bieden al APIs aan. De [Nederlandse Spoorwegen](https://www.ns.nl/reisinformatie/ns-api) bijvoorbeeld, die met APIs actuele vertrektijden, prijzen, storingen en reisadviezen publiceren om in apps te gebruiken. En de Rijksdienst voor het Wegverkeer die de [kentekenregistratie voor voertuigen](https://opendata.rdw.nl/resource/m9d7-ebf2.json) met een API aanbiedt.

In februari 2019 won de [Basisregistratie Adressen en Gebouwen (BAG) API](https://zakelijk.kadaster.nl/-/bag-api) van Kadaster de [Gouden API](https://www.geonovum.nl/over-geonovum/actueel/kadaster-wint-prijs-beste-api-van-de-overheid) die het [Kennisplatform APIs](https://www.geonovum.nl/themas/kennisplatform-apis) uitloofde voor de beste API van de overheid. De [BAG](https://zakelijk.kadaster.nl/bag) registreert voor elk adres in Nederland gegevens als de geografische coördinaten, het bouwjaar van het pand, de oppervlakte en het vergunde gebruiksdoel. Verzekeraars, hypotheekverstrekkers, hulpdiensten, milieudiensten en vele anderen gebruiken informatie uit de BAG. 

Ook bedrijven doen nuttige dingen met de BAG API. Veel webshops vullen meteen je adres in als je postcode en huisnummer invult. Dat kan dankzij APIs zoals die van [postcodeapi.nu](https://www.postcodeapi.nu/) die hun gegevens weer uit de BAG API halen. Dat de BAG API voldoet aan een behoefte blijkt wel uit de 300 miljoen consultaties die de BAG API in 2018 verwerkte.

De APIs van [Luchtmeetnet](https://api-docs.luchtmeetnet.nl/) en van de [Kamer van Koophandel](https://www.kvk.nl/producten-bestellen/koppeling-handelsregister/kvk-api/?msclkid=ec7b5b3fe30a10cb537907f53d6cd07f&utm_source=bing&utm_medium=cpc&utm_campaign=0.%20Brand%20-%20Combinaties&utm_term=%2bkvk%20%2bapi&utm_content=KVK%20-%20API%20%28bmm%29) kregen bij de [Gouden API](https://www.geonovum.nl/over-geonovum/actueel/kadaster-wint-prijs-beste-api-van-de-overheid) eervolle vermeldingen vanwege hun relevantie en gebruiksgemak. De API van de Kamer van Koophandel geeft applicaties  toegang tot de gegevens van het handelsregister. Hiermee kunnen bijvoorbeeld bedrijven en gemeenten CRM systemen, zaaksystemen en factureringssystemen aan het handelsregister koppelen. De API van Luchtmeetnet geeft bijvoorbeeld [weer-apps](https://www.buienradar.nl/nederland/gezondheid/luchtkwaliteit/index) de mogelijkheid om ook informatie over luchtkwaliteit voor astmatici te geven.

Heeft jouw organisatie gegevens waar bedrijven, burgers of andere overheden iets mee kunnen?





