## Template document API Strategie Modulen

Deze folder bevat een template om nieuwe modulen te maken. Kopieer de files en pas de inhoud aan om een nieuw Respec document te maken wat de module specificeert.

### Gebruikers instructie
Om aanpassingen te maken zijn er 2 opties:
- De configuratie van het document aanpassing in de config files
- Markdown files toevoegen

De **configuratie files** bevat informatie over de organisatie en over 
de status van het document. Bekijk de [Logius ReSpec wiki](https://github.com/Logius-standaarden/respec/wiki) 
voor meer informatie over de configuratie opties. De files zijn gesplitst in 2 files:
[organisation-config.js](js/organisation-config.js) en [config.js](js/config.js)  

De *organisation_config* bevat informatie over de organisatie, de informatie in deze file 
zal bijna nooit veranderen zoals de naam van de organisatie. Het wordt aangeraden de file 
zelf te hosten zodat hij in alle documentatie van de organisatie gebruikt kan worden en
niet elke keer gekopieerd te worden.

De *document_config* zal informatie bevatten die alleen relevant is voor het huidige document.

**Markdown files** bevatten de content van het document. Alle content
kan in 1 document, maar het is aan te raden om de content te splitsen
in verschillende files met een toepasselijke naam om onderhoud 
makkelijker te maken.

Na het toevoegen van een nieuwe markdown file moet hij toegevoegd worden
aan de [index.html](index.html). Je voegt hem toe door  
```<section data-include-format="markdown" data-include="filenaam.md"></section>```  
toe te voegen aan de ```<body>``` van de index file. Vervang "filenaam.md" door de naam 
van de markdown file die je toe wilt voegen.
De volgorde van de sections bepaald de volgorde in het resulterende document.