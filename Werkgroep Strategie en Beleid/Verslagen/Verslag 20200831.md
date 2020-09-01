# Werkgroep API Strategie en Beleid
Verslag van de virtuele bijeenkomst van **31 augustus 2020**

Input: [agenda en presentatie](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20Strategie%20en%20Beleid/Presentaties/Agenda%2020200831.md)

## Aanwezig
René Bliekendaal (Centric), Arnold de Graaff (Belastingdienst), Jascha Gregorowitsch (Enable-U), Geer Haas (SVB), Peter Haasnoot (Logius), Pieter Hering (Logius), Richard Janssen (RDW), Raymond Kers (Justid), Marcel Krassenburg (MKidee), Gino Laan (minBZK), Arjen Monster (gemeente Den Haag), Martin van der Plas (VNG), Nils Vissenberg (gemeente Breda), Paul Zeef (minBZK), Peter Zandbergen (CBS), Han Zuidweg (Forum Standaardisatie)

## Afgemeld
Frank Terpstra (Geonovum), Pascal Thuis (RIVM)

Ian Duijff (CJIB) en Koos Boersma (Informatiehuis Water) hebben de agenda en inbelgegevens niet ontvangen. Het is vooralsnog onduidelijk wat er is misgegaan, ze stonden beiden in de verzendlijst.

## Verslag bijeenkomst van 16 juni 2020
Er waren geen aanvullingen of opmerkingen op het [verslag van de virtuele bijeenkomst op 16 juni 2020.](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20Communicatie%20en%20Beleid/Verslagen/verslag-sessie-api-strategie-en-beleid-20200304.md) 

## Samenstelling van de werkgroep
Sinds de bijeenkomsten in maart en juni hebben verschillende organisaties zich aangemeld voor de werkgroep. Nieuwe deelnemers zijn CBS, CJIB, de gemeenten Amsterdam, Breda en Den Haag, Informatiehuis Water, provincie Overijssel, RDW, RIVM, RvIG en SVB. De actuele [lijst van deelnemers](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20Strategie%20en%20Beleid/Leden/Leden%20WG%20Strategie%20en%20Beleid.md) is te vinden op de Github repository van deze werkgroep.

Het ligt in de lijn der verwachting dat de werkgroep groeit, omdat we proberen een strategie en beleid te maken met een breed draagvlak bij de overheid. Dat lukt alleen als een kritieke massa van belanghebbende partijen mee kan denken en praten.

### Welke organisaties missen nog

Tijdens de bijeenkomst werd besproken welke organisaties nog benaderd zouden moeten worden voor deze werkgroep. Genoemd werden:
- **J4**: Justid, CJIB en de Politie hebben zich al aangemeld. Raymond geeft aan dat hij graag **minJenV** bij de werkgroep betrekt omdat het kerndepartement ook bezig is met een API strategie. Justitie heeft veel gesloten netwerken maar voelt toch steeds meer noodzaak om gegevens te ontsluiten.
-  **UBR**: Paul en Gino suggereren dat minBZK deze organisatie zou kunnen benaderen.
- **Zorg**: **MedMij**, maar ook administratieve partijen als **CAK**, **CIZ**, **Nederlandse Zorgautoriteit** en mogelijk **IGJ** hebben belang bij data in de actualiteit. MedMij nam deel aan het expertonderzoek van de API Design Rules. Daar bleek wel dat ze sterk internationaal georiënteerd zijn en kritisch kijken naar Nederlandse afspraken over gegevens delen en APIs.
- **Onderwijs**: **DUO**, **Surf**, en de **koepels van het onderwijs**, vormen een groot veld met internationale contacten en datauitwisseling. Overweeg ook **minOCW** aan te haken.

### Niveau van participatie

Marcel vroeg op welk niveau organisaties het beste kunnen deelnemen aan deze werkgroep: op niveau van bestuurders, informatiemanagers of ontwikkelaars?

Enerzijds willen we het manifest laten tekenen door de bestuurders of hoger management van onze organisaties. Een evenement met mediamoment heeft bijvoorbeeld bij de [Veilig Email Coalitie](https://www.forumstandaardisatie.nl/sites/bfs/files/atoms/files/20170201a_Intentieverklaring_Veilige_E-mail_Coalitie.pdf) (VEC) bewezen effectief te zijn om bestuurders op de been te brengen en draagvlak te bouwen. Anderzijds kunnen we niet verwachten dat bestuurders de API strategie zelf gaan voorbereiden in deze werkgroep.

In deze werkgroep zijn vooral informatiemanagers actief om de (API) strategie en beleid voor te bereiden. Wat dat betreft heeft de werkgroep op dit moment al de juiste samenstelling. Later moeten wij de bestuurders van onze organisatie betrekken om het manifest te tekenen. Maar dat gebeurt pas als de (API) strategie en beleid beschreven zijn.

Deze werkgroep Strategie en Beleid richt zich niet op ontwikkelaars en architecten. Voor architecten is er de [werkgroep Architectuur](https://github.com/Geonovum/KP-APIs/tree/master/Werkgroep%20Architectuur). Voor ontwikkelaars zijn er de [werkgroep REST API Design Rules](https://github.com/Geonovum/KP-APIs/tree/master/Werkgroep%20API%20strategie) en de [werkgroep Authenticatie en Autorisatie](https://github.com/Geonovum/KP-APIs/tree/master/Werkgroep%20Authenticatie%20Autorisatie).


## Opzet strategie en beleid
In de bijeenkomst werd de algemene opzet besproken voor een nieuwe (API) strategie en beleid. Het idee is om de strategie in vijf delen te structureren:

 1. Probleemstelling 
 2. Manifest 
 3. Basisafspraken 
 4. Praktijkvoorbeelden
 5. Transities

Deze werden kort besproken. Hieronder een samenvatting van de discussies.

### Probleemstelling
De strategie start vanuit een beschrijving van het probleem dat de overheid wil aanpakken. Waarschijnlijk moeten we vermijden om APIs hier al als oplossing te benoemen. Hetzelfde geldt voor architectuurconcepten zoals het vijf lagenmodel. Het startpunt is het probleem, niet de mogelijke oplossingen.

Arjen stelt vast dat we wel degelijk aan architectuur en technologie refereren als we het in de probleemstelling hebben over '*gegevens verweven met applicaties*' en '*kopieën van basisregistraties*'. Hij waarschuwt dat als we consequent willen zijn, we de probleemstelling op een hoger abstractieniveau moeten formuleren.

Ook wordt opgemerkt dat het probleem breder is dan het ontsluiten van gegevens uit basisregistraties en andere bronnen. Het gaat om de toekomst van software integratie bij de overheid in meer algemene zin.

Paul signaleert dat het thema '*werken in de actualiteit*’  steeds meer aan belang wint en vraagt of we daar in de probleemstelling iets mee kunnen. Bijvoorbeeld door per sector een praktijkvoorbeeld te maken om bestuurders en informatiemanagers aan te spreken. Er is dan alleen op abstract (en moeilijk herkenbaar?) niveau één probleembeschrijving.

### Manifest
De kern van de strategie bestaat uit een manifest dat getekend wordt door de deelnemende organisaties. Het manifest verklaart dat de overheid het bovengenoemde probleem gaat aanpakken zonder in details te treden over technologie of architectuur. Het manifest moet concreet en uitvoerbaar zijn. Het moet een zodanig draagvlak hebben dat voldoende organisaties bereid zijn het te tekenen.

Peter Zandbergen merkt op dat de probleemstelling en het manifest moeten gaan over de uitwisseling van gegevens tussen organisaties, niet over hoe een organisatie de interne systemen inricht. De [concept teksten in de agenda](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20Strategie%20en%20Beleid/Presentaties/Agenda%2020200831.md#opzet-api-strategie) zijn daar niet eenduidig over en kunnen de indruk wekken dat het over interne systemen gaat. Als je uitspraken gaat doen over hoe organisaties hun systemen moeten inrichten, heb je minder kans om draagvlak op te bouwen.

### Basisafspraken
Bij het manifest kan een aantal basisafspraken gemaakt worden die uitgaan van bestaande afspraken in Common Ground, Haal Centraal, DSO. In deze werkgroep proberen we daarin de overeenkomsten te vinden.

De basisafspraken zijn werden deze bijeenkomsten niet verder besproken.

### Praktijkvoorbeelden
Waar mogelijk beschrijven we praktijkvoorbeelden uit bestaande initiatieven waaronder [Common Ground](https://commonground.nl),  [Haal Centraal](https://www.vngrealisatie.nl/producten/haal-centraal), [Digitaal Stelsel Omgevingswet](https://www.omgevingswetportaal.nl/wet-en-regelgeving/dso) en de  'J4' (minJenV, Justid, CJIB, Politie).


Op de vraag of er andere initiatieven en voorbeelden zijn waaraan we moeten refereren, werd met name [Toekomst Werk en Inkomen](https://www.digitaleoverheid.nl/actielijn/programma-toekomst-gegevensuitwisseling-werk-en-inkomen/) genoemd. Daarbij is ook [BKWI](https://www.bkwi.nl/) een relevante partij. Ook werd de zorgsector weer genoemd als mogelijke bron van initiatieven en praktijkvoorbeelden.

De private partijen vroegen of er ook kan worden gerefereerd aan initiatieven en praktijkvoorbeelden uit de private sector. Gino stelde dat APIs er zijn voor het ontsluiten en halen van gegevens. In de context van deze strategie moet tenminste één van de twee kanten een overheidspartij zijn.

Tenslotte werd nog [developer.overheid.nl](https://developer.overheid.nl/) gesuggereerd. Gino verduidelijkt dat developer.overheid.nl zelf geen strategie bepaalt en de overige initiatieven volgt, maar vindt het geen probleem om het als praktijkvoorbeeld op te nemen.

### Transities
De strategie beschrijft ook transitiepaden voor legacy techologie zoals [DigiKoppeling](https://www.logius.nl/diensten/digikoppeling), [StUF](https://www.gemmaonline.nl/index.php/StUF_Berichtenstandaard) en wellicht andere zoals Webservices (SOAP APIs). Deze werden deze bijeenkomsten niet verder besproken.

## Manier van samenwerken
Gezien de omvang en diverse samenstelling van de groep moeten we enige structuur brengen in de samenwerking:

-   We delen teksten en documenten op [Github](https://github.com/Geonovum/KP-APIs/tree/master/Werkgroep%20Strategie%20en%20Beleid)
-   We voeren discussies via [Github issues](https://github.com/Geonovum/KP-APIs/issues). We gebruiken daarbij het donkergele label [Strategie en Beleid](https://github.com/Geonovum/KP-APIs/labels) zodat onze discussies te onderscheiden zijn van de andere.
-   We plannen periodieke bijeenkomsten met een frequentie van ongeveer eens in de acht weken. Zolang de overheid een 'thuiswerken tenzij' beleid handhaaft, vinden de bijeenkomsten online plaats.

De aanwezigen konden zich vinden in deze werkwijze. Wel werd de vraag gesteld of we de [volledige functionaliteit van Github](https://guides.github.com/introduction/flow/) gaan gebruiken voor het versiebeheer van de teksten. De leercurve van Github kan stijl zijn voor degenen die niet gewend zijn om code te ontwikkelen op dit platform. Voorlopig gebruiken we Github daarom als een eenvoudige gedeelde documentopslag en doen we het versiebeheer van teksten handmatig (bijvoorbeeld door 'v1',  'v2' toe te voegen aan de bestandsnaam).

Ook werd opgemerkt dat issues globaal zijn voor het gehele Kennisplatform APIs. Je kan issues van een etiket (label) voorzien maar het is niet mogelijk om alleen e-mail notificaties voor issues met een bepaald label te krijgen. 

Willen deze werkgroep effectiever gebruik kunnen maken van Github, dan moeten we misschien overwegen een eigen repository aan te maken. De publicaties van het Kennisplatform APIs linken echter naar content in de mappen van de werkgroepen. We moeten dit dus eerst bespreken met het Kennisplatform.

## Vervolgstappen
De volgende stappen zijn om concreet te gaan werken aan de teksten voor de vijf onderdelen van de (API) strategie. Vooralsnog dienden er zich in de bijeenkomst geen vrijwilligers aan om concept teksten aan te leveren voor de probleemstelling, het manifest of de andere onderdelen. Han zal daarom eerste concepten voorstellen zodat we een basis hebben om te bewerken.

Han stuurt ook een datumprikker voor een vervolgbijeenkomst ergens in eind oktober of begin november.
