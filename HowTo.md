# Getting Started

In dit document kort samengevat hoe we samen gaan werken aan de documentatie van
het Kennis Platform API's Kort beschreven staat hoe je met GitHub werkt, hoe je
met Markdown werkt en welke afspraken (Golden Rules) het gezamenlijk werken
gemakkelijker maken.

## GitHub Repository

We gebruiken GitHub als samenwerk omgeving voor de documentatie. Er is een
centrale GitHub repository gemaakt op https://github.com/Geonovum, deze heet
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
GitHub Client nodig. Ga in je internet browser naar https://desktop.github.com/,
en Klik daar op download for Windows (64bit). De installer wordt nu gedownload.
Als de download klaar is, ga je naar de maps “downloads” met je windows
explorer. Je zoek het programma “GitHubDesktopSetup” op, en start dat door erop
te dubbelklikken. Volg nu de instructie van het installatieprogramma.

### GitHub Clone: Eerste keer ophalen van de centrale repository

Nadat de GitHub Client is geinstalleerd, moet je de centrale GitHub Repository
overhalen naar je PC/Laptop. Dit doe je door de Repository te "clonen".

Start de GitHub Client, en kies in het menu **File** voor **Clone Repository**.
En kies de Repository die je wil **clonen** (in dit geval Geonovum/KP-API). Als
**Local Path** kies je een logische plek op je PC/Laptop. (Tip: het is handig om
één plek voor je Github Repositories te maken, bijvoorbeeld C:. Na het
aanklikken van de knop **clone** wordt een lokale kopie gemaakt. Github weet
welke versie je hebt opgehaald, en zal de wijzingen die je maakt netjes voor je
bijhouden.

In de map die je als *local path* hebt opgegeven komt de mappen structuur te
staan zoals hierboven beschreven.

### GitHub Pull: Ophalen van wijzigingen

Een **pull** request werkt de lokale versie van je GitHub Repository bij.
Wijzigingen die zijn gedaan in de centrale repository (dus op Github.com) worden
ook doorgevoerd in je lokale kopie. Het uitvoeren van een pull doe je door in
het menu **Repository** op **pull** te klikken.

### GitHub Push: Uploaden van wijzigingen

Zodra je klaar bent met het editen van je documenten **commit** je die
wijzingen, en doe je vervolgens een **push** naar de centrale repository. Bij de
**commit** geef je een commit-tekst mee, waarmee je aan de rest van de
werkgroep(en) in een paar woorden kan aangeven wat je hebt gewijzigd. Na het
uitvoeren van de **push** is de Centrale GitHub Repositiry weer bijgewerkt.

Markdown Editors
----------------

Markdown is een "plat" bestandsformaat, dat maakt dat jezelf kan kiezen welke
editor of edit-omgeving je wil gebruiken, mits je je maar houdt aan het markdown
formaat. Een beschrijving van markdown vind je hier:
https://nl.wikipedia.org/wiki/Markdown

Voor MS-Word bestaat een markdown plugin. Het voordeel daarvan is dat je niet na
hoeft te denken over de te gebruiken markdown-tags,  
en meteen kan zien hoe het document er uit komt te zien.

### Microsoft Word plugin

Om de plugin te installeren ga je naar Ga naar http://www.writage.com/, download
je het installatie bestand, en voer je het uit. Er wordt  
dan stijl aangemaakt voor Markdown, en bij *save as* kan je het bestand opslaan
als een markdown bestand.

### Visual Studio Code

Een andere optie is om *Visual Studio Code* (VSC) te installeren. De download
vind je hier: https://code.visualstudio.com/ VSC is meer een ontwikkelomgeving
dan een tekstverwerker, hier moet je wel de markdown tags kennen.

## Golden Rules

Hieronder komen de “Golden Rules” te staan. Deze gelden voor alle Werkgroepen,
en zijn bedoeld om het uiteindelijke document dezelfde look-and-feel te geven.
Ze zullen tijdens de looptijd van het project worden aangepast en uitgebreid.
Met de wetenscahp van dat moment.

### Rule-1:

### Rule-2:

### Rule-3:
