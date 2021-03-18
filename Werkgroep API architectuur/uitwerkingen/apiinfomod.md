In dit hoofdstuk wordt ingegaan op de relatie tussen informatiemodel en API

### Informatiemodellen

Een informatiemodel beschrijft een werkelijkheid. We onderscheiden vier niveaus in variërend van een zo getrouw mogelijke beschrijving van die werkelijkheid tot een specificatie van de wijze van vastlegging van die werkelijkheid in een database of uitwisselformaat [MIM](https://www.geonovum.nl/geo-standaarden/metamodel-informatiemodellering-mim) [NEN3610](https://www.geonovum.nl/geo-standaarden/nen-3610-basismodel-voor-informatiemodellen) :

**Niveau 1:** een model van begrippen waarin de werkelijkheid wordt beschreven door middel van de daarin gehanteerde begrippen en de relaties tot elkaar.

**Niveau 2:** een conceptueel informatiemodel waarin de werkelijkheid wordt beschreven door middel van de informatie die voor dit domein relevant is, onafhankelijk van het ontwerp en de implementatie in systemen. Het geeft een zo getrouw mogelijke beschrijving van die werkelijkheid en is in natuurlijke taal geformuleerd.

**Niveau 3:** een logisch informatie- of gegevensmodel waarin de werkelijkheid wordt beschreven door middel van de representatie van de informatie in de systemen en de uitwisseling tussen systemen en gebruikers. Een logisch informatiemodel is implementatie onafhankelijk en kan in meerdere technische modellen worden geïmplementeerd.

**Niveau 4:** een fysiek of technisch gegevens- of datamodel waarin de werkelijkheid wordt beschreven door middel van de structuur en eigenschappen van de technologie die wordt gebruikt bij de opslag of uitwisseling. Een fysiek of technisch datamodel is afhankelijk van de gekozen techniek of tooling die wordt gebruikt en kan daarvoor geoptimaliseerd zijn.

### Definities

De volgende begrippen worden gehanteerd in dit hoofdstuk:

* Informatiemodel : Logisch gegevensmodel / datamodel - niveau 3
* Resource model :  Fysiek / technisch datamodel - niveau 4  (directe datamodel van een API)
* Applicatie data model : Fysiek / technisch datamodel - niveau 4  (datamodel van een achterliggend systeem)


## API, Informatiemodel en Resource model.

Via een API ontsluit een applicatie data en functionaliteit. Hierbij helpt het om onderscheid te maken tussen het 'interne' Applicatie Data Model en het Resource Model dat via de API wordt aangeboden.

Het Resource Model is als het ware een logische view op het achterliggende Data Model.

![alt text](https://github.com/Geonovum/KP-APIs/raw/master/Werkgroep%20API%20architectuur/uitwerkingen/media/API-Informatiemodel.png)

Wanneer het Resource Model 1 op 1 gelijk is aan het achterliggende Data Model is de vertaling/mapping eenvoudig en kan dit ook geautomatiseerd worden : het Resource Model en de API kunnen bijvoorbeeld worden gegenereerd vanuit het Applicatie Data Model.

**Ontkoppeling**

Door Applicatie Data Model en Resource Model te ontkoppelen kunnen deze apart van elkaar evolueren. Dit heeft een aantal voordelen:

*Breaking changes*

Liefst wil je voorkomen dat een aanpassing aan het Applicatie Data Model welke verder geen waarde heeft voor de afnemers / clients van de data leidt tot verplichte aanpassingen/updates. Door te ontkoppelen kunnen breaking changes worden voorkomen voor bestaande clients;

*Verbergen complexiteit*

Voor complexe Domeinen of gecombineerde Diensten waarbij meerdere bronnen worden gecombineeerd is het waardevol om het Resource Model zo eenvoudig en duidelijk mogelijk te houden. In het Resource Model kan de achterliggende complexiteit verborgen blijven en kan de interface gebruikersvriendelijk worden gemaakt. Het Resource mode is hier dan een abstraherende laag die alleen die zaken aanbiedt die de gebruiker nodig heeft en die aansluiten op de belevingswereld van de gebruiker.

*Integreren & Innoveren*

Het Resource Model als logische view op achterliggende datamodellen heeft ook als voordeel dat op de laag van het Resource Model al integratie van data modellen kan plaatsvinden nog voordat de achterliggende modellen zijn aangepast of volledig geïntegreerd. Een (nieuw) geïntegreerd Resource model over meerdere achterliggende datamodellen heen kan zo databronnen integreren en aanbieden. Met behulp van een geïntegreerd resourcemodel op het niveau van API's kan sneller gestandaardiseerd worden en kan men ook sneller innoveren.

![alt text](https://github.com/Geonovum/KP-APIs/raw/master/Werkgroep%20API%20architectuur/uitwerkingen/media/API-Infomodel2.png)


### Aanbevelingen

**Verbindt het Resource Model met een bestaand Informatiemodel**

Bij het aanbieden van data via een API is het van groot belang om de verbinding met een informatiemodel te hebben en deze verbinding ook te beschrijven en te publiceren bij de API documentatie.
* Dit bevordert begrip bij afnemers, zodat zij de ruwe data goed kunnen interpreteren.
* Dit houdt de API beheersbaar en zorgt dat de API gemakkelijker kan mee-evolueren met het informatielandschap
* Wanneer een API informatie uit een stelsel van gegevensbronnen ontsluit bevordert dit interoperabiliteit in het stelsel.

Het Resource Model van een API is een (of mogelijk meerdere, afhankelijk van uitwisselformaat) niveau 4 informatiemodel(len). Het is namelijk een model van de uitwisseling van gegevens in een concreet uitwisselformaat. Bijvoorbeeld gespecificeerd in een OAS document. [OAS](https://www.openapis.org/).
Het is echter belangrijk om de verbinding met een niveau 3 model uit te drukken, omdat dit een implementatie-onafhankelijk model is, wat begrip, maar ook interoperabiliteit, bevordert. Het bevordert interoperabiliteit met andere niveau 3 informatiemodellen in een stelsel, maar biedt ook één overkoepelend informatiemodel wanneer er sprake is van gegevensuitwisseling conform verschillende niveau 4 informatiemodellen gebaseerd op hetzelfde niveau 3 informatiemodel.

