# Agenda en Verslag 

Agenda en Verslag van de Werkgroep API Design Rules 31 januari 2023 - Online overleg via MS-Teams 10:30 - 12:00 uur. 

## Deelnemers (in de volgorde van het voorstelrondje) 
- Pieter Dijkstra (Kadaster)
- Mark Strijker (Kadaster)
- Joost Farla (Kadaster)
- Alexander Green (Logius) 
- Edwin Wisse (Logius) 
- Laura Rutte (BKWI, Bureau Keteninformatisering Werk en Inkomen)
- Frank Terpstra (Geonovum)
- John Zwart (raad van de kinderbescherming)
- Linda van den Brink (Geonovum)
- Peter Haasnoot (Logius)
- Johan Radder (Centric)
- Paul van der Zijden (Gemeente Rotterdam)

Afwezig:
Martin van der Plas 

## Agenda/Verslag

1. Opening en welkom
   1. Opening en welkom door de voorzitter Pieter Dijkstra.

2. Mededelingen
   1. e-delivery (Martin van der Plas) 
   Edwin geeft aan dat e-delivery een Europese ontwikkeling is die interessant is om in de gaten te houden omdat er grote gelijkenissen met digikoppeling zijn. Zie ook: [Overleg/Digikoppeling at main · Logius-standaarden/Overleg (github.com)](https://github.com/Logius-standaarden/Overleg/blob/main/Digikoppeling/2022-12-08/eDeliveryAPI.md)

3. Vragen/verzoeken over bestaande API-designrules:
   Frank ligt beide vragen/verzoeken toe, waarna deze inhoudelijk worden besproken. 
   1. API-51 – openapi.json/openapi.yaml niet ondersteund door OGC - is versoepelen van de regel nodig? Onderzoek naar actualiteit ADR en het verband met de OGC invulling is op zijn plaats.    

   1. API-56 – versionering betaversies/releasecandidates als zodanig niet zichtbaar. Mogelijk extra laag toevoegen om dit inzichtelijk te maken. op versieniveau. 
   Er is overeenstemming dat de API-designrule aangepast kan wordenw waarbij we de standaard op het gebied van semantic versioning kunnen volgen. Joost merkt hierbij nog wel op dat de onderliggende vraag is wanneer er sprake is van een breaking change. 

   Het proces voor het doorvoeren van deze wijzigingen wordt besproken. Er blijkt nog geen duidelijk vastgesteld proces te zijn voor de wijziging van bestaande rules. Afgesproken dat wijzigingen in de werkversie op basis van goedgekeurde pullrequests doorgevoerd kunnen worden. Het formaliseren van de werkversie is een proces waarbij consultatie vereist is. Er is niet afgesproken wie deze wijziging door gaat voeren. De verantwoordelijkheid hiervoor is nog niet belegd.  
   
4. Bespreken status huidige subwerkgroepen:
   1. Geo: https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20design%20rules/geo.md
   De feedback die verkregen is uit de consultatie wordt verwerkt. De verwachting is dat het verwerken van alle input het hele eerste kwartaal van 2023 doorloopt. Tijdens het opstellen van de GEO-module zijn brede filteringsvraagstukken naar boven gekomen. Het ligt voor de hand dat na afronding van de geomodule gestart wordt met een module voor filtering. 
   1. Hypermedia: https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20design%20rules/hypermedia.md
De activiteiten van deze werkgroep zijn afgerond. 
   2. Naamgeving: https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20design%20rules/naamgeving.md
De activiteiten van deze werkgroep zijn afgerond.
   3. Profielen: https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20design%20rules/profielen.md
Deze subwerkgroep vindt zijn vervolg in het modulaire werken. 
   4. Relaties: https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20design%20rules/relaties.md
Deze werkgroep is op dit moment niet meer actief. 
   5. Tijdreizen: https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20design%20rules/tijdreizen.md
Deze werkgroep is op dit moment niet meer actief.
   6. Normatieve rules: https://github.com/Logius-standaarden/API-Design-Rules
De status van deze werkgroep is bekend bij Martin van der Plas. 

5. Stand van zaken modulaire opzet API DesignRules 
Besproken wordt hoe modules zich verhouden tot het normatieve deel. En hoe verplicht het gebruik van een module is. Opgemerkt wordt dat het wenselijk is dat zo veel mogelijk als normatief wordt vastgesteld. 

6. Bijeenkomst API kennisplatform 3 februari 
Er zijn geen specifieke aandachtspunten vanuit de werkgroep voor de bijeenkomst van 3 februari

7.  Rondvraag, nieuwe ontwikkelingen & wvttk
Joost merkt op dat Kadaster en Geonovum samen werken aan de orchestratie van API's. HEt doel hiervan is dat API's beter gebruikt kunnen worden bij het bevragen van verschillende bronnen. Dit wordt vanuit de werkgroep gezien als een interessante ontwikkeling. 
