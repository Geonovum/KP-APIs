# Agenda en Verslag 

Agenda en Verslag van de Werkgroep API Design Rules (dit omvat ook het Technisch Overleg (TO) van de Technische Architectuur Groep (TAG) inzake de API Design Rules Governance).
> dd 17-03-2022 - Online overleg via MS-Teams

## Deelnemers

- Pieter Dijkstra (Kadaster) - Voorzitter
- Martin van der Plas (Logius) - notulen
- Alexander Green (Logius)
- Edwin Wisse (Logius)
- Huub de Jong (Waterschap Vallei en Veluwe)
- Laura Rutte (BKWI)
- Johan Radder (Centric)
- Henri Korver (VNG)
- Jasper Roes (Kadaster)
- Joost Farla (Kadaster)
- Linda van den Brink (Geonovum)
- Martijn Blokker (Nationale Bibliotheek)

## Agenda

1. Opening en welkom
   1. Opening en welkom door de nieuwe voorzitter Pieter Dijkstra.

2. Mededelingen
   1. Intentieverklaring ondertekend (Toelichting Frank Terpstra of Martin van der Plas)
   1. Doorontwikkeling testbaarheid Design Rules (toelichting martin van der Plas)
   1. Save the date: Op maandag 9 mei 2022  is er een seminar voor het kennisplatform API’s gepland.  Dit zal plaatsvinden in de Horeca Academie in Den Haag.

3. Besluitvorming en producten van de subwerkgroepen:
   1. zie verslag
4. eerdere oproepen:
   1. Oproep aan de werkgroep: geef commentaar bij de issue's uit de openbare consultatie [Lijst issue's gefilterd](https://github.com/Geonovum/KP-APIs/issues?q=is%3Aopen+is%3Aissue+label%3AConsultatie)
   1. er wordt opgeroepen na te gaan welke rules men normatief op wil nemen.  

5. Rondvraag, nieuwe ontwikkelingen & wvttk 

## Verslag

### Agendapunt 2:

> Mededelingen

1. Intentieverklaring ondertekend (Toelichting Frank Terpstra of Martin van der Plas)
   - Zie de website van Geonovum [link](https://www.geonovum.nl/themas/kennisplatform-apis/intentie-overeenkomst)
1. Doorontwikkeling testbaarheid Design Rules (toelichting martin van der Plas)
   - zie ook de [repository met de python scripts](https://github.com/VNG-Realisatie/api-test-platform-code/tree/master/src/vng/design_rules/tests/tasks/dr_20200709)  die de tests uitvoeren en [de visualisatie op developer.overheid.nl](https://developer.overheid.nl/apis/logius-cor/score-detail)
1. Save the date: Op maandag 9 mei 2022  is er een seminar voor het kennisplatform API’s gepland.  Dit zal plaatsvinden in de Horeca Academie in Den Haag.
      - Het concept-programma is:
         - Ochtend        :      bijeenkomsten werkgroepen
         - Lunch
         - Middag        :        plenaire sessie
         - Borrel


### Agendapunt 3 : 

> Besluitvorming en producten van de subwerkgroepen

- [Profielen en capabilities](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20design%20rules/profielen.md) (trekker Jasper Roes)
   - Jasper Roes: Normatieve regels vormen Core en extensies worden Modules. Modules kunnen keuzes bevatten.
   - Een profiel bestaan uit de Core en een selectie van de modules.
   - De extensies gaan we labellen als modules zodat organisaties profielen/patronen op kunnen stellen waarbij ze de verplichte normatieve module uitbreiden met extra modules waaraan hun API's moeten voldoen. Zie ook de presentatie op https://github.com/Geonovum/KP-APIs/tree/master/Werkgroep%20API%20design%20rules/presentaties
   - Radder: Wanneer switch je van versie? 
   - Van de Plas: Semantic versioning komt later ook nog aan bod. De modules worden naar verwachting geversioneerd op basis van SEMVER overeenkomstig de versionering van de Normatieve module. 
- [Tijdreizen](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20design%20rules/tijdreizen.md) (trekker Tony Sloos) - uitwerking combineren met DIS Geo / SOR sessies en daarna extensie updaten
   - Geen reactie en update gehad tijdens dit overleg
- [Omgaan met relaties](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20design%20rules/relaties.md) (voormalig put/patch/post/delete) (trekker Henri Korver)
   - Het onderzoek wat is gepubliceerd op https://github.com/Geonovum/KP-APIs/blob/master/API-strategie-extensies/ext-many-to-many-relations.md is kort doorgenomen en besproken.
   - Henri Korver: De ADR is nog te veel gericht op bevragingen. Te weinig overeenstemming; nadruk verlegd naar omgaan met relaties. Nog geen harde regels kunnen destilleren. Scenario’s uitgeschreven als best-practice.
   - Vraag Henri: Is er ergens een plek waar we deze development kunnen plaatsen?
   - Dijkstra: Dit zou mooi in een module
   - Farla: Er is meer behoefte aan een plek voor dit soort achtergrondverhalen. Design Rules dienen prominenter gepresenteerd te worden en daarvanuit verwijzen naar achtergrondtekst om de leesbaarheid te verbeteren. Modules zijn voor concrete regels.
   - Actiepunt werkgroep Profielen en capabilities: zoek een plekje voor: https://github.com/Geonovum/KP-APIs/blob/master/API-strategie-extensies/ext-many-to-many-relations.md
   - van der Plas: Het is onduidelijk wat me met dergelijke achtergronden doen. Voorstel is om een folder achtergronden aan te maken waarin we research/best practices/opvattingen over andere standaarden/code/voorbeelden en andere zaken kunnen opnemen.
   - van der Plas: ook is het van belang dat we in beeld brengen hoe de structuur van de API Strategie nu is opgebouwd. (wellicht een schematisch model opstellen zoals bij BOMOS of Digikoppeling)
- [Geo](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20design%20rules/geo.md) (trekker Linda van den Brink)
   - Linda van den Brink: Er wordt netjes gewerkt met issues op GitHub.
   - Issue #184 (“Spatial operator als value”) vraagt aandacht buiten Geo.
   - de vorderingen van de sub werkgroep zijn doorgenomen met behulp van de  presentatie op https://github.com/Geonovum/KP-APIs/tree/master/Werkgroep%20API%20design%20rules/presentaties
   - Interessant: Open Geospatial Consortium OGC API Features part 3 filtering: http://docs.ogc.org/DRAFTS/19-079r1.html
   - Korte discussie over complexe filtering , operatoren en combinaties van filters. 
   - Joost Farla: https://www.ietf.org/id/draft-ietf-httpbis-safe-method-w-body-02.html
- [Normatieve Rules](https://github.com/Logius-standaarden/API-Design-Rules) (trekker Martin van der Plas)
   - Uitleg over het gebruik van labels om werkgroep aan te geven.
   
   - Feature: Uitwerking Semantic versioning voor het Normatieve deel (Martin van der Plas)
     Redelijk gevorderd met semantic versioning in Digikoppeling, dit wordt doorgevoerd naar ADR.
   
   - developer.overheid.nl verwijst nog naar laatste versie i.p.v. versienummer.
   
   - Uitleg over het gebruik van branches in git en het mogelijk aanleveren van een release candidate om voor release de impact te kunnen toetsen.
   
   - Feature: Implicaties en testbaarheid Rules
   
     - Python scripts waarmee Rules worden getest: https://github.com/VNG-Realisatie/api-test-platform-code/tree/master/src/vng/design_rules/tasks/dr_20200709
   
   - Aandachtspunt: Meerdere organisaties dienen betrokken te zijn alvorens beslissingen gemaakt kunnen worden. Laura, Joost, Henri en (bij verstek) Frank Terpstra worden betrokken door Martin om RFC's voor te bespreken die de issue's mbt het normatieve gedeelte oplossen.
   

* NB: Profielen en capabilities betreft de stuctuur wijziging "van extensies naar een modulaire opbouw van de NL API Design Rules"

### Agendapunt 5: 

> Rondvraag

- Henri: Onduidelijkheid over extensies. Wanneer dienen ze gevolgd te worden? Het waarschuwingsblokje over “unstable” wordt ook soms gemist.
