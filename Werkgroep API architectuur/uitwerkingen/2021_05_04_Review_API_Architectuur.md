# Review 04-05-2021 Hoofdstuk API Architectuur #

### Met 3 sterren '***' is aangegeven welke opmerkingen zijn verwerkt, svp bij verwerking van opmerkingen dit in de lijst aangeven ###

1.  ***Sectie 5.2 (en alle paragrafen daarbinnen) is naar mijn idee nog niet af. Er staat een hoop informatie in, **bullet gewijs,** maar leest nog niet als een 'af' hoofdstuk.
2.  Ik ben vanuit Logius ook bezig met het opstellen van een API strategie. Hiervoor heb ik een aantal wijzigingen gemaakt op het API capability model, welke wellicht ook doorgevoerd moeten worden op degene in het architectuurhoofdstuk van deze API strategie. De **capabilities zijn iets anders ingedeeld** en hier en daar hernoemd, ook om ze beter af te stemmen met het hoofdstuk API Management.
3.  Ik heb waar nodig aanpassingen gemaakt in het API capability model om af te stemmen met het stuk over API Management. In een paar gevallen vind ik het stuk over API Management minder duidelijk in de termen, dus wellicht moet daar ook eea worden afgestemd naar **terminologieen in het API capability model**. Voorbeelden:

-   API Billing -> Doorbelasting
-   Dashboard & Analytics -> Analytics
-   API Docs -> Dynamische Documentatie
-   Service Registratie / Store -> API Resource Registratie

+----------------------------------------------------------------------------------+

Over H5 **Architectuur** heb ik nog een paar opmerkingen:

5.1

***"REST" zou ik vervangen door "REST of RESTful" (Forum Standaardisatie en NORA gebruiken die termen ook).

5.2.2

"Exposure API" wordt slechts 1 keer genoemd. Wordt wellicht "Experience API" bedoeld.

***klopt

***5.3.1.3 API Discovery

Hier wordt naar een specifieke versie van de OpenAPI verwezen (3). Alternatief: Verwijs naar de meest recente OpenAPI-versie van het Forum Standaardisatie.

***5.4.2

"Binnen de integratielaag opereert veelal ook een organisatiebrede servicebus..."

"Bij middelgrote en grote overheidsorganisaties opereert in de integratielaag veelal ook een organisatiebrede servicebus..."

5.4.4

Engelse en Nederlandse termen door elkaar. Zou ik naar Nederlands overzetten.

Algemeen: Ik zou de tekst nog een keer door de MS Word spelling checker halen. Sommige zinnen zoals b.v. in 5.3.4.8. lopen grammaticaal niet.

En spelling b.v.:

applicatie landschap     = applicatielandschap

geintroduceerd             = geïntroduceerd

definieren                    = definiëren

authenticeren               = authentiseren

5.7.4

In de componenten-plaat zou ik ook een lijn van de API Gateway naar de Identity Provider voor identificatie en authenticatie (in lijn met de tekst onder 5.7.4.2).

+----------------------------------------------------------------------------------+

1.  H5 gaat nu in op hoe je het applicatielandschap van een organisatie kan inrichten voor **aanbieden van API's.**\
    Is dat hetzelfde als voor **het gebruik van API's?\
    **Zo nee, wat zijn dan de verschillen en waar staan die beschreven?

2.  Figuur 1 lijkt een uitwerking te zijn van Figuur 3: Org B naar Org A.

3.  Paragraaf 5.1 lijkt dan ook logischer op z'n plaats na de huidige paragraaf 5.3

4.  Bij Figuur 1 verwacht ik dat de Dienst Afnemer een blok **API gebruik** heeft (en niet Diensten gebruik) en dat de Dienst Aanbieder bij het lichtblauwe gedeelte ook **Processen** heeft ipv Diensten.

5.  **Is er altijd een 1 op 1 verbinding tussen aanbieder en gebruiker van de API?**\
    Of kan / moet er Nationaal nog een API-rotonde oid zijn om het gebruik van API's tussen organisaties te standaardiseren en faciliteren?

6.  Hoe verhoudt de onderlinge gegevensuitwisseling via API's zich tot een dienst aan burgers / bedrijven?\
    Valt dat altijd onder een Generieke Functie (capability) Gegevensuitwisseling?\
    Zie <https://www.noraonline.nl/wiki/Gegevensuitwisseling_(Generieke_Functie)>\
*(**JA)**\
 *

1.  Paragraaf 5.2\
    Bij Figuur 3: een API direct naar burger / bedrijf (G2B / G2C) is niet logisch: een API is software, dus zit er altijd een medium tussen, zoals een mobieltje oid.\
    ***(Figuur dan mogelijk drukker/minder duidelijk)***

1.  ***Paragraaf 5.2.2\
    Hier graag een zin toevoegen om de relatie met overheidsbrede capabilities aan te geven:\
    "Zorg er voor dat deze Business API's gebaseerd zijn op de Generieke Functies (capabilities) van de Nederlandse Overheid, zie <https://www.noraonline.nl/wiki/Generieke_functies>, en de capabilities van de eigen organisatie.

2.  Het API Capability Model ziet er goed uit als kapstok.\
    De toelichting erop in de 1^e^ alinea van paragraaf 5.3 mag wel strakker: het is geen "aandacht schenken" maar de noodzaak om als organisatie deze capabilities beschikbaar te hebben.

3.  In de NORA zijn ook algemene aanbevelingen opgenomen voor het toepassen van API's in de Enterprise Architectuur, zie [Aanbevelingen_voor_API's_in_de_Enterprise_Architectuur](https://www.noraonline.nl/wiki/Aanbevelingen_voor_API%E2%80%99s_in_de_Enterprise_Architectuur)\
    Kan daar aub een verwijzing naar worden opgenomen?

    Zodra de nieuwe API Architectuur de review heeft doorlopen zullen we een verwijzing in de NORA ernaar opnemen, zodat de verwijzingen naar elkaar zijn en we de inhoud makkelijker afgestemd kunnen houden.

4.  ***Bij paragraaf 5.3.1.3\
    Prima de verwijzing naar de plek waar de ontwikkelaars van de Overheid hun kennis delen, te weten DON: <https://developer.overheid.nl/>\
    Zet die aub niet als voorbeeld neer, maar als dé place-to-be !

5.  Paragraaf 5.3.4 is een verwarrende titel als onderdeel van H5 Architectuur voor het inrichten van het applicatielandschap.\
    Noem het eventueel **"Ontwerpkeuzes".**\
    Leg aub het verschil uit tussen Applicatie landschap en API landschap.

6.  Het onderdeel Beveiliging is ook onderwerp van gesprek bij de NORA expertgroep IAM.\
    Hoe hangt paragraaf 5.3.4.8 Authenticatie / Autorisatie samen met bijvoorbeeld  [Authenticatie(middelen)beheer](https://www.noraonline.nl/wiki/Authenticatie(middelen)beheerAuthenticatie) van het thema IAM in de NORA?\
    Of met de Generiek Functie [Identificatie_en_Authenticatie_van_burgers_en_bedrijven](https://www.noraonline.nl/wiki/Identificatie_en_Authenticatie_van_burgers_en_bedrijven)?\
    Kan dit eventueel door de beide expertgroepen worden uitgewerkt?\
    ***(Mogelijk, ook relatie met Werkgroep beveiliging)***

7.  **Hoe hangt API Management samen met het API Capability Model**?\
    Dat zou daar toch onderdeel van moeten zijn?\
    Of zijn bijvoorbeeld de onderdelen Beveiliging, Authenticatie en Autorisatie weer andere zaken dan bij paragrafen 5.3.4.7 en 5.3.4.8 ?

8.  Paragraaf 5.4.5 Functionaliteit API-Portal lijkt erg op de randvoorwaardelijke zaken die nodig zijn voor API Management.\
    Zie ook de eerder opmerking over DON bij paragraaf 5.3.1.3 irt Serviceregistratie.

9.  ***Paragraaf 5.4 Informatiemodel is niet specifiek voor API's. De niveau's 1, 2 en 3 zijn algemeen van aard en passen bij het gedachtegoed van het Nationaal Semantisch Vlak (NSV), als onderdeel van de [Informatielaag](https://www.noraonline.nl/wiki/Vijflaagsmodel#Laag_3:_Informatielaag) van het NORA Vijflaagsmodel.\
    Kan daar a.u.b. een verwijzing naar worden opgenomen?\
    ***(Ja)***

10. De uitwerking van niveau 4 is een goede stap vooruit en herkenbaar van onze discussie in de expertgroep API's. De aanbeveling in paragraaf 5.5.4 borgt de relatie met het NSV, dus dat ondersteunen we van harte !

11. Paragraaf 5.6 Processen en Notificaties zal een relatie hebben met de [Organisatorische_laag](https://www.noraonline.nl/wiki/Vijflaagsmodel#Laag_2:_Organisatorische_laag) van het NORA Vijflaagsmodel en het thema [Business_Proces_Management_(BPM)](https://www.noraonline.nl/wiki/Business_Proces_Management_(BPM)) en een Generieke Functie van de GO. Ook dat behoeft nog nadere uitwerking.\
    De resultaten van de expertgroep API verwerken wij graag voor jullie in de NORA !

12. Paragraaf 5.7 API Security Architectuur lijkt een herhaling van eerdere onderdelen van het API Capability Model en API Management.\
    Met weer een nieuw schematisch overzicht.\
    Zo ook het schematische overzicht in paragraaf 5.8 met de componenten van het API-Management.\
    Al deze **verschillende figuren in 1 stijl en meer op 1 lijn brengen** zal zeker verhelderend werken !

13. Paragraaf 5.7.5 Principes is nu alleen beschreven voor het aspect API Security. In de NORA zijn ook meer algemene aanbevelingen opgenomen voor het toepassen van API's in het ontwerp van een dienst, zie [Aanbevelingen_voor_API's_in_het_ontwerp_van_een_dienst](https://www.noraonline.nl/wiki/Aanbevelingen_voor_API%27s_in_het_ontwerp_van_een_dienst)\
    Kan daar aub een verwijzing naar worden opgenomen?   

+----------------------------------------------------------------------------------+

1.  ***5.2 "In deze figuur wordt ook het belang van standaardisatie van API's duidelijk: wanneer de verschillende 'API contactoppervlakken' uniform zijn (ook over organisaties heen) kunnen dienstafnemers gemakkelijker (en dus sneller en met minder kosten) gebruik maken van 'Overheids API's'" - deze bewering onderschrijf ik wel, maar blijkt wat mij betreft niet direct uit de illustratie waarnaar verwezen wordt.
2.  ***'5.2.1 Systeem, Proces, Convenience' en '5.2.2 Business / Exposure' - wat is de relatie tussen deze twee categoriseringen? Is er een relatie? Zo ja, dan zou ik die toelichten.
3.  '5.2.3 Philosophy, Protocol, Encoding' -- niet uitgewerkte delen zou ik weglaten uit een publicatieversie. Of expliciet nog te beantwoorden vragen benoemen.
4.  5.2.4 API Virtualisatie -- hoort de illustratie onder deze kop? Volgens mij laat die niet per se een virtualisatiesituatie zien.
5.  5.2.5 API Language styles -- niet uitgewerkte delen zou ik weglaten uit een publicatieversie. Of expliciet nog te beantwoorden vragen benoemen.
6.  5.3.2.1 "worden API's ontworpen met de gebruikers (ontwikkelaars) centraal, in plaats van gebaseerd op de inrichting van back-ends" -- volgens mij wordt hier bedoeld dat API's worden ontworpen met de behoeften van afnemers als uitgangspunt. Die komen niet per se van ontwikkelaars die in opdracht van afnemers software ontwikkelen. En onder 'ontwerp' wellicht ook aandacht besteden aan API-architectuur en landelijke/domeinspecifieke kaders?
7.  5.3.2.2 "[...] microservices API's aanbieden waarvan een deel via de API Gateway as-is wordt ontsloten, of het gebruik van een middleware oplossing." -- een API Gateway is toch (een specifieke vorm van) middleware?
8.  5.3.2.5 -- 'Semantic versioning' wordt hier gepresenteerd als oplossing voor het wendbaarheidsvraagstuk, terwijl het volgens mij gaat om een middel dat inzicht geeft in verschillende soorten nieuwe versies. Tekstvoorstel: "Om toch wendbaar te kunnen zijn, wordt bij nieuwe versies onderscheid gemaakt tussen major versies, die breaking changes omvatten, en niet-breaking minor versies en patches. Om het onderscheid tussen deze verschillende 'soorten' versies inzichtelijk te maken wordt vaak gebruikgemaakt van 'semantic versioning (semver)'.
9.  5.3.3.6 API Monitoring & Alerting en 5.3.3.9 Resource health status -- kunnen/horen deze niet bij elkaar?
10. 5.5.1 -- voor de duidelijkheid zou ik de namen bij de niveaus uit het MIM overnemen, die zijn makkelijker te interpreteren dan cijferaanduidingen. Geldt ook voor de verdere tekst.
11. ***5.5.4 -- 'Verbindt het Resource Model met een bestaand Informatiemodel' -- waarom is het van belang dat het om een bestaand informatiemodel gaat? En op welke manier draagt dit bij aan het feit dat 'de API beheersbaar wordt gehouden'? 'Wanneer een API informatie uit een stelsel van gegevensbronnen ontsluit bevordert dit interoperabiliteit in het stelsel.' Dit klopt wel, maar is dit een direct gevolg van de verbinding met een informatiemodel? Alinea onder de bullets leest nog niet echt lekker weg, en duidt eigenlijk de bovenliggende punten. Nog even goed naar te kijken.
12. 5.7.5 -- "Versleutel alle data in opslag (at rest) en in uitwisseling (in transit)." Geldt dit ook voor open data? "Least privilege: API clients krijgen alleen de toegang die zij minimaal nodig hebben om hun functie uit te oefenen." Volgens kan het woord 'minimaal' hier vervallen. Clients (of consumenten) krijgen alleen de toegang die zij nodig hebben, niet meer, maar ook niet minder.
