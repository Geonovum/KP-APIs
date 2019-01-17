Getting Started
===============

In dit document kort samengevat hoe we samen gaan werken aan de documentatie van
het Kennis Platform API's Kort beschreven staat hoe je met GitHub werkt, hoe je
met Markdown werkt en welke afspraken (Golden Rules) het gezamenlijk werken
gemakkelijker maken.

GitHub Repository
-----------------

We gebruiken GitHub als samenwerk omgeving voor de documentatie. Er is een
centrale GitHub repository gemaakt op <https://github.com/Geonovum>, deze heet
KP-APIs, en is ingedeeld volgens onderstaande tabel:

### Mappenstructuur

In onderstaande tabel de hoofdinrichting van de mappenstructuur in de GitHub
Repository

| Repository | SubMap                                  | Bestand    | Opmerking                          |
|------------|-----------------------------------------|------------|------------------------------------|
| KP-APIs    |                                         |            | De Hoofdmap                        |
| ""         |                                         | index.html | index.html, eigenaar Redacteur     |
| ""         |                                         | config.js  | config.js, eigendaar Redacteur     |
| ""         |                                         | README.md  | Standaard readme bestand           |
| ""         |                                         | HowTo.md   | Dit bestand                        |
| ""         | media                                   |            | De Submap voor styling en plaatjes |
| ""         | ""                                      | style.css  | style.css, eigendaar Redacteur     |
| ""         | Stuurgroep                              |            | Submap voor Stuurgroep             |
| ""         | Werkgroep API Strategie                 |            | Submap voor Werkgroep              |
| ""         | Werkgroep API Architectuur              |            | Submap voor Werkgroep              |
| ""         | Werkgroep API Authenticatie Autorisatie |            | Submap voor Werkgroep              |
| ""         | Werkgroep API Communicatie en Beleid    |            | Submap voor Werkgroep              |
| ""         | Werkgroep API Gebruikwerswensen         |            | Submap voor Werkgroep              |

In de Werkgroepmappen is de structuur redelijk vrij, maar omdat het op te
leveren product (één of meer Markdown bestanden) wordt opgehangen in de centrale
kapstok, moet we wel een paar afspraken maken.

Elke werkgroep werkt aan een hoofdstuk in het hoofddocument. De bestandsnaam
staat al in de Werkgroepmap, en mag niet zo maar gewijzigd worden. Mocht het wel
gewijzigd moeten worden, dan in overleg met de Redacteur. Afbeeldigen worden
neergezet in de submap *media*, die in elke werkgroep map is aangemaakt.

Verplichte bestanden en mappen in de werkgroepmap:

| Bestand/map | Omschrijving                                                   |
|-------------|----------------------------------------------------------------|
| *naam*.MD   | *naam* is de naam van het hoofdstuk waaraan de werkgroep werkt |
| media       | de naam van de map waarin afbeeldingen komen te staan          |

### Installeren GitHub Client

Editen van de documenten doe je in principe lokaal op je eigen pc/laptop. Om de
verschillende wijzigingen te kunnen integreren in de GitHub Repository heb je de
GitHub Client nodig. Ga in je internet browser naar <https://desktop.github.com/>,
en Klik daar op download for Windows (64bit). De installer wordt nu gedownload.
Als de download klaar is, ga je naar de maps “downloads” met je windows
explorer. Je zoek het programma “GitHubDesktopSetup” op, en start dat door erop
te dubbelklikken. Volg nu de instructie van het installatieprogramma.

### GitHub Clone: Eerste keer ophalen van de centrale repository

Nadat de GitHub Client is geinstalleerd, moet je de centrale GitHub Repository
overhalen naar je PC/Laptop. Dit doe je door de Repository te "clonen".

Start de GitHub Client, en kies in het menu *File* voor *Clone Repository*. En
kies de Repository die je wil *clonen* (in dit geval Geonovum/KP-APIs). Als
*Local Path* kies je een logische plek op je PC/Laptop. (Tip: het is handig om
één plek voor je Github Repositories te maken, bijvoorbeeld C:. Na het
aanklikken van de knop *clone* wordt een lokale kopie gemaakt. Github weet welke
versie je hebt opgehaald, en zal de wijzingen die je maakt netjes voor je
bijhouden.

In de map die je als *local path* hebt opgegeven komt de mappen structuur te
staan zoals hierboven beschreven.

### GitHub *Pull origin:* Ophalen van wijzigingen

Een *pull* commando werkt de lokale versie van je GitHub Repository bij.
Wijzigingen die zijn gedaan in de centrale repository (dus op Github.com) worden
ook doorgevoerd in je lokale kopie. Het uitvoeren van een pull doe je door in
het menu *Repository* op *pull* te klikken.

### Github *Commit to Master:* Wijzigingen opslaan

Met de knop *Commit to master* zet je de wijzigingen die je hebt gedaan klaar om
te uploaden naar de Centrale GitHub Repository. GitHub maakt daartoe een versie
aan,  
die je verplicht voorziet van een *summary* en optioneel van een *Description*
Let op: met  
het committen heb je dus nog niks ge-upload.

### Github *Push origin* of *Pull request* Wijzigingen uploaden

Nadat je de wijzigen hebt gecommit, moeten ze richting de centrale repository.
Nu zijn er twee mogelijkheden. Ofwel je hebt schrijfrechten op de Centrale
Repository, of je hebt ze niet. In het eerste geval kan je een *Push Origin*
uitvoeren, dan worden de wijzigingen meteen in  
de Centrale GitHub Repository verwerkt. In het tweede geval doe je een *Pull
request* bij de eigenaar van de Repository om de wijzigingen door te voeren.
Github maakt dan een eigen versie voor je aan (dat heet een fork) en vraagt aan
de eigenaar van de Repository om die fork te verwerken in de Centrale
Repository.

Markdown Editors
----------------

Markdown is een "plat" bestandsformaat, dat maakt dat jezelf kan kiezen welke
editor of edit-omgeving je wil gebruiken, mits je je maar houdt aan het markdown
formaat. Een beschrijving van markdown vind je hier:
<https://nl.wikipedia.org/wiki/Markdown>. Een cheatsheet vind je hier:
<https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf>

Voor MS-Word bestaat een markdown plugin. Het voordeel daarvan is dat je niet na
hoeft te denken over de te gebruiken markdown-tags,  
en meteen kan zien hoe het document er uit komt te zien.

### Microsoft Word plugin

Om de plugin te installeren ga je naar Ga naar <http://www.writage.com/>, download
je het installatie bestand, en voer je het uit. Er wordt dan een stijl
aangemaakt voor Markdown bestanden, en bij *save as* kan je het bestand opslaan
als een markdown bestand. In Word zelf geef je gewoon met stijlen aan hoe de
tekst er uit moet zien, kopteksten, tabellen, standaard tekst, enz. Bij het
opslaan maakt de plugin er dan een Markdoen bestand van.

### Visual Studio Code

Een andere optie is om *Visual Studio Code* (VSC) te installeren. De download
vind je hier: <https://code.visualstudio.com/> VSC is meer een ontwikkelomgeving
dan een tekstverwerker, hier moet je wel de markdown tags kennen.

Golden Rules
------------

Hieronder komen de “Golden Rules” te staan. Deze gelden voor alle Werkgroepen,
en zijn bedoeld om het uiteindelijke document dezelfde look-and-feel te geven.
Ze zullen tijdens de looptijd van het project worden aangepast en uitgebreid.
Met de wetenschap van dat moment.

### Rule-1: Taal

> Technische documentatie schrijven we in het Engels, Niet-Technische
> Documentatie schrijven we in het Nederlands!

### Rule-2:

tbd

### Rule-3:

tbd
