# Agenda en Verslag 

Agenda en Verslag van de Werkgroep API Design Rules 9 mei 2023 - Online overleg via MS-Teams 14:00 - 15:00 uur. 

## Deelnemers (in de volgorde van het voorstelrondje) 
- Pieter Dijkstra (Kadaster)
- Mark Strijker (Kadaster)
- Laura Rutte (BKWI)
- Hugo Stijns (Geonovum)
- Martin van der Plas (Logius)
- Marcel Tulen (Sociale Verzekeringsbank)
- Edwin Wisse (Logius)
- Peter Haasnaat (Logius)
- Johan Radder (PSS Centric)
- Paul van der Zijden (Gemeente Rotterdam)
- Frank Terpstra (Geonovum) 
- Alexander Green (Logius) 

## Agenda/Verslag

1. Opening, welkom en voorstelrondje
   
2. Mededelingen
Er zijn geen mededelingen. 

3. Het toevoegen van condities (wellicht in rules) voor het optioneel of verplicht gebruik van modules. Bijvoorbeeld de geo en tls security modules.
Martin van der Plas geeft aan dat bij de modulaire opbouw de wens naar boven is gekomen om in de normatieve set van designrules op te nemen en te definiëren wanneer bepaalde modules relevant zijn, of zelfs verplicht. 

Martin vraagt of er voor de GEO-module voor de hand liggende condities zijn. 
Mark Strijker licht toe hoe de geomodule is opgezet. Hij geeft aan dat het de bedoeling is dat wanneer gezocht wordt met geometrie (bijvoorbeeld een bounding box) de geomodule van toepassing is. Als de API OGC-features complient is, moet die standaard gevolgd worden waarop de geomodule zoveel als mogelijk aansluit. De Geomodule is vooral geschikt voor administratieve API's die ook geoinformatie bevatten en niet voor OGC API's die vooral gebruikt worden in GIS-applicaties.
De geomodule is samengevat bedoeld voor twee situaties:
- het opvragen van geo in een administratieve API    
- het zoeken op geo in een administratieve API
Martin neemt dit mee in de uitwerking van de rules. 

Vervolgens worden de condities van de TLS module besproken. 
De vraag is of de TLS module niet altijd relevant zijn. 

Rule API-58 wordt besproken. Deze rule beschrijft dat er geen gevoelige informatie in de uri mag staan. 
Laura Rutte geeft aan dat er in de praktijk problemen zijn geweest die een relatie hebben met het niet toepassen van API-58. Deze praktijksituatie ondersteunt de gedachte dat het verstandig is voor te schrijven dat de TLS module altijd toegepast moet worden.
Mark Strijker geeft hierbij aan dat nog niet helemaal duidelijk is wat een goede toepassing van de rule is. Daarbij speelt ook dat gevoelige informatie ook uit de body gehaald kan worden. Martin geeft aan dat de rule wel voorkomt dat de gegevens in middleware applicaties gelogd kunnen worden. 
Mark Strijker vraagt of er een rule komt dat encrypten in de uri wel toegestaan is. Martin geeft aan dat dit een lastige semantische discussie oplevert. Het is niet duidelijk wanneer iets nog gevoelig is. 
Marcel Tulen geeft aan dat encrypten niet afdoende is om afleiding in middleware te voorkomen en dat daarom gevoelige informatie in de uri in alle gevallen verboden zou moeten zijn. 
Johan Radder merkt nog op dat het hoe dan ook lastig is een goede oplossing te vinden voor dit probleem. 

HTTP-level Security
Martin vraagt op het voorschrijven van het gebruik van CORS problemen oplevert. API-50
Hugo Stijns geeft aan dat de regel niet van toepassing is bij API's die niet in een browser gebruikt worden. Hij geeft aan dat de context van de API hierbij van belang is. Dit geldt mogelijk ook voor de security header. Als je geen webapplicatie hebt is dit niet relevant. 
Mark geeft aan dat een API via een browser aangeroepen kan worden. Hugo merkt op dat dit niet werkt als je geen CORS-policy hebt. Moet je dan een CORS-policy opnemen als je gebruik in een browser niet op zijn plaats is? Mark bevestigt dat je inderdaad kunt voorschrijven dat dit alleen nodig is als gebruik in een browser voorzien is. 
Hugo geeft aan dat het vanuit het kunnen testen van de rule voorgeschreven wordt waarop getest moet worden.   
Martin neemt de opmerkingen mee in de verdere uitwerking. 

4. Hoe en waar worden API's gedocumenteerd?
Open API Specification is verplicht, maar wat schrijven we voor als het gaat om aanvullende documentatie. 
Martin doet de suggestie voor te schrijven dat je in de OAS verwijst naar de aanvulllende documentatie. Mark geeft aan dat hij zich hier in kan vinden. 
Marcel geeft aan dat veel API-portals de mogelijkheid hebben aanvullende documentatie toe te voegen waarbij er geen directe relatie is met de OAS. 
Hugo merkt op dat er velden zijn in de OAS die je kunt gebruiken voor de verwijzing. Daar kun je dan ook op controleren. Laura geeft aan dat een verwijzing naar de locatie van de documentatie een goed idee is. Mark voegt toe dat een voordeel hiervan is dat je dit onafhankelijk van het formaat van de aanvullende documentatie kunt doen. Marcel vraagt zich af of deze verwijzing wel constant genoeg is. Frank Terpstra geeft dat dit binnen de inrichting van de OTAP-straat geregeld kan worden. 
Martin laat zien welke velden gebruikt kunnen worden voor deze relatie en spreekt zijn voorkeur uit dat voorgeschreven wordt welke velden gebruikt worden. Hier is iedereen het mee eens. 

5. Openstaande vragen/verzoeken over bestaande API-designrules:
   1. API-51 – openapi.json/openapi.yaml niet ondersteund door OGC - is versoepelen van de regel nodig? Onderzoek naar actualiteit ADR en het verband met de OGC invulling is op zijn plaats. 
Frank geeft aan dat deze rule niet onderschreven wordt bij OGC. Frank heeft dit voorgelegd aan het architectsboard. Het is nog even wachten op een uitspraak van het architectsboard. Voor nu wachten we de uitkomst van de discussie nog even en passen we de regel voorlopig nog niet aan. We laten dit punt op de agenda staan voor de volgende keer.    

   2. API-56 – versionering betaversies/releasecandidates als zodanig niet zichtbaar. Mogelijk extra laag toevoegen om dit inzichtelijk te maken. op versieniveau. 
   Er is overeenstemming dat de API-designrule aangepast kan worden waarbij we de standaard op het gebied van semantic versioning kunnen volgen. Joost merkt hierbij nog wel op dat de onderliggende vraag is wanneer er sprake is van een breaking change. 
Frank geeft aan dat dit is afgerond. Dit verzoek kan worden afgesloten. 

9. Rondvraag, nieuwe ontwikkelingen & wvttk
Op verzoek van Marcel Tulen halen we de rondvraag iets naar voren zodat er voldoende tijd is zijn vraag te bespreken. 
Marcel vraagt hoe designrules het beste hergebruikt kunnen worden binnen je eigen organisatie. 
Zijn er al ervaringen over het onderhouden van deze designrules? Frank meldt dat er atlijd een vastgestelde versie is en een werkversie. Je kunt je abonneren op de repository's om zo te kijken wat de wijzingen zijn. Hij geeft aan dat het niet raadzaam is een niewue versie automatisch over te nemen en adviseert bij een nieuwe versie na te gaan wat de gevolgen voor de designrules binnen de organisatie zijn. Martin geeft aan dat het mogelijk is vanuit de eigen API te verwijzen naar versies van de standaarden. Frankt vult nog aan dat het ook mogelijk is naar specifieke rules te verwijzen. 
Marcel neemt deze aanbevelingen mee.    

7. Stand van zaken modulaire opzet API DesignRules 
  - hernummeren rules. 
Vanuit de bespreking van de vraag van Marcel komen we geruisloos uit bij dit agendapunt. Martin laat zien wat de oorspronkelijke opzet van de designrules is https://publicatie.centrumvoorstandaarden.nl/api/adr/. Verder laat hij de nieuwe opzet zien https://logius-standaarden.github.io/API-Design-Rules/. De codering is aangepast van een nummer naar een betekenisvolle naam. Martin demonstreert ook nog uit welke lagen de modulaire opzet bestaat en wat de status van de verschillende modules is. 

8. Bijeenkomst API kennisplatform 11 mei 
Frank geeft aan dat op 11 mei de bijeenkomst van het kennisplatform is en vraagt aan de werkgroep wanneer we de modulaire opzet afvinden. Afgesproken wordt dat de modulaire opzet wordt besproken op de bijeenkomst van het kennisplatform en vervolgens kan worden afgevinkt in de stuurgroep. 
  
6. Bespreken status huidige subwerkgroepen:
   1. Geo: https://github.com/Geonovum/KP-APIs/blob/master/overleggen/Werkgroep%20API%20design%20rules/geo.md
Mark geeft aan dat de geomodule aan de stuurgroep is aangeboden ter vaststelling. Frank geeft aan dat de deadline voor de stuurgroep is verstreken en dat er geen bezwaren kenbaar zijn gemaakt waarmee de geomodule als vastgesteld kan worden beschouwd. 
   
9. Rondvraag, nieuwe ontwikkelingen & wvttk
Er zijn geen punten voor de rondvraag. De vergadering wordt gesloten. 

