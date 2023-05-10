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

4. Hoe en waar worden API's gedocumenteerd?

5. Openstaande vragen/verzoeken over bestaande API-designrules:
   1. API-51 – openapi.json/openapi.yaml niet ondersteund door OGC - is versoepelen van de regel nodig? Onderzoek naar actualiteit ADR en het verband met de OGC invulling is op zijn plaats.    

   2. API-56 – versionering betaversies/releasecandidates als zodanig niet zichtbaar. Mogelijk extra laag toevoegen om dit inzichtelijk te maken. op versieniveau. 
   Er is overeenstemming dat de API-designrule aangepast kan worden waarbij we de standaard op het gebied van semantic versioning kunnen volgen. Joost merkt hierbij nog wel op dat de onderliggende vraag is wanneer er sprake is van een breaking change. 
  
6. Bespreken status huidige subwerkgroepen:
   1. Geo: https://github.com/Geonovum/KP-APIs/blob/master/overleggen/Werkgroep%20API%20design%20rules/geo.md
   
7. Stand van zaken modulaire opzet API DesignRules 
   - hernummeren rules. 

8. Bijeenkomst API kennisplatform 11 mei 

9. Rondvraag, nieuwe ontwikkelingen & wvttk

