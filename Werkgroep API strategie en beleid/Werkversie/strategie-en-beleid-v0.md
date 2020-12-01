# Strategie en beleid voor moderne gegevensuitwisseling bij de overheid
[*Titel aangepast naar suggestie van Martin van der Plas. Suggesties nog welkom.*]

## Probleembeschrijving
Bij de meeste ICT systemen van de overheid zitten de gegevens verweven in de applicatie. Veel systemen werken met kopieën van de 
basisregistraties en andere gegevensbronnen. De huidige situatie brengt een aantal problemen met zich mee:
1. De kans op fouten en datalekken neemt toe bij het kopiëren en gedupliceerd opslaan van gegevens.
2. Het kopiëren en synchroniseren van gegevens tussen systemen kost tijd en geld.
3. Personen en bedrijven hebben geen regie over hun gegevens als deze overal verspreid staan.
4. De huidige systemen en koppelingen kunnen afhankelijkheid van leveranciers in de hand werken.

### Voorbeeld: verhuizing naar een andere gemeente
Als je gaat verhuizen van gemeente A naar gemeente B, dan moet je je inschrijven bij de gemeente B. Achter de schermen 
komt er dan een ingewikkelde gegevensstroom op gang.

Beide gemeenten houden hun eigen registratie van personen bij. De ICT systemen van gemeente A moeten daarom je persoonsgegevens 
opvragen bij de ICT systemen van gemeente B. Met de ontvangen gegevens kan gemeente B je als nieuwe bewoner registreren in z'n 
basisregistratie personen. Maar gemeente A moet weten dat je nu staat ingeschreven in gemeente B. Dus stuurt gemeente B verwijsgegevens 
naar gemeente A. Gemeente A verwerkt deze verwijsgegevens in z’n basisregistratie personen.

Daarna moeten zowel gemeente A als gemeente B de mutaties van hun lokale basisregistratie personen nog doorgeven aan de 
[centrale basisregistratie personen van de Autoriteit Persoonsgegevens](https://www.autoriteitpersoonsgegevens.nl/nl/onderwerpen/gemeente/basisregistratie-personen-brp?qa=brp). Zo kan het drie werkdagen kosten om een verhuizing volledig te registreren. En er komen drie registraties aan te pas die deels kopieën van elkaar zijn en met elkaar synchroon gehouden moeten worden.

Is het niet efficiënter en veiliger om één basisregistratie personen bij te houden, in plaats van gegevens heen en weer te 
schuiven van de ene registratie naar de andere?

### Voorbeeld: rijvaardigheid bewijzen

[*Dit voorbeeld is van Martin. Is dit voldoende overtuigend? Wat is in dit voorbeeld precies het probleem van de overheid?*]

Als je met een auto de weg op wilt moet je je rijvaardigheid bewijzen bij de centrale overheid, bij het [CBR](https://www.cbr.nl/). Bij het CBR moet je je legitimeren met een identiteitsbewijs (paspoort of identiteitsbewijs) dat je gemeente uitgeeft. En als je de weg op gaat moet je het rijbewijs bij je hebben zodat de politie je rijvaardigheid kan controleren. Dit is geen toonbeeld van efficiëntie. Het rijbewijs zou een verwijzing moeten zijn naar een gegevensbron waarin je rijvaardigheid is vastgelegd. De politie kan dit direct controleren bij de bron, en je kan deze gegevens ook online delen. En het CBR zou het rijbewijs direct kunnen sturen naar het adres wat bekend is bij de gemeente.

### Voorbeeld: regie op gegevens

[*Voorbeeld van Paul.*]

De [Wet bescherming persoonsgegevens](https://wetten.overheid.nl/BWBR0011468/2018-05-01) (Wrp) en z'n opvolger, de [Algemene verordening gegevensbescherming](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679&from=NL) (AVG) geven ons al bijna twintig jaar recht op inzage en correctie van de gegevens die de overheid over ons verzamelt en beheert. Dit betekent dat je als burger het recht hebt om te weten welke persoonsgegevens de overheid over je heeft vastgelegd en welke gegevens de overheid heeft gebruikt en uitgewisseld voor welk doel.

In de praktijk kan de overheid vaak niet naar behoren voldoen aan dit recht. Als je aan je gemeente vraagt welke instanties je persoonsgegevens uit de BRP hebben geraadpleegd, kan je meestal op niet meer rekenen dan een uitdraai van het logbestand uit het lokale ICT systeem. Zo'n logbestand is een lange lijst termen en codes waar je weinig aan hebt als je het ICT systeem niet kent. En dan weet je nog niet wie er in het centrale BRP bij je gegevens geweest is. Daarvoor moet je dan weer bij de RvIG zijn.

In 2017 liet het ministerie van Binnenlandse Zaken en Koninkrijksrelaties op verzoek van de Tweede Kamer door Berenschot een [onderzoek](https://zoek.officielebekendmakingen.nl/blg-817465.pdf) doen om inzicht te krijgen hoe, wanneer en met welk budget de overheid werkelijk kan voldoen aan het recht van inzage en correctie. Berenschot concludeerde in het onderzoek dat volledig digitale inzage in alle relevante persoonsgegevens die onder de AVG vallen, met het huidige gegevenslandschap niet haalbaar is.

In de [beleidsbrief regie op gegevens](https://www.rijksoverheid.nl/documenten/brieven/2019/07/11/beleidsbrief-regie-op-gegevens-nadere-uitwerking) van 2019 onderstreept het kabinet nog eens het beleidsvoornemen om serieus werk te maken van regie op gegevens. Maar er zal iets moeten gebeuren in het gegevenslandschap om dit mogelijk te maken.

Als de overheid gegevens bij de bron gaat beheren en ontsluiten, wordt het gemakkelijker om bij de bron volledige inzage te geven. De overheid kan dan digitale inzage geven in een uniform gebruiksvriendelijk format, en ook de correctie van gegevens wordt eenvoudiger.

### Voorbeeld: publiekrechtelijke beperkingen

[*Frans suggereerde het voorbeeld van de [Basisregistratie Kadaster publiekrechtelijke beperkingen](https://www.kadaster.nl/zakelijk/registraties/landelijke-voorzieningen/wkpb-wordt-brk-pb/beter-kenbaar-en-brk-pb) die het oude systeem voor kenbaarheid publiekrechtelijke beperkingen vanaf 2021 gaat vervangen. Hiermee wordt onder andere voorkomen dat gegevens zowel door het Kadaster als door gemeenten worden bewaard, en tussen de verschillende systemen gekopieerd moeten worden.

Verder noemde Frans het portaal [ruimtelijkeplannen.nl](https://www.ruimtelijkeplannen.nl/) als mogelijk voorbeeld.*]

## Visie en stappenplan
Als digitale overheid maken we onze dienstverlening veiliger, efficiënter en beter beheersbaar door applicaties beter te 
scheiden van gegevens en gegevens alleen bij de bron te beheren.

[*Martin stelt voor om een visie van de eindsituatie te geven, bijvoobreeld:*]

Alle basisregistraties zijn over 3 jaar realtime te bevragen en over 5 jaar gebruikt de overheid geen lokale kopieën meer van gegevensbronnen.

[*Martin stelt voor om een stappenplan te geven om naar deze eindsituatie toe te komen.*]

## Basisafspraken
[*Hier kunnen we afspraken maken over waar/wanneer/hoe de overheid (REST) API's inzet om het bovenstaande doel uit het 
manifest te bereiken. En verder bijvoorbeeld:*
 - *Als de overheid REST APIs inzet, doen we dat volgens de [REST API Design Rules](https://docs.geostandaarden.nl/api/API-Designrules/).*
  - *De beveiliging van REST APIs doet de overheid met het [NL GOV Assurance Profile for OAuth 2.0](https://docs.geostandaarden.nl/api/oauth/).*
  ]

## Praktijkvoorbeelden
[*Hier zoeken we een aantal aansprekende succesvoorbeelden uit Haal Centraal, Common Ground, DSO, J4 en mogelijk andere.*]

## Transitiepaden
[*Hier geven we een visie op de transitie van bijvoorbeeld DigiKoppeling en StUF naar het nieuwe gegevenslandschap. 
Waarschijnlijk blijven deze standaarden nog geruime tijd bestaan naast API's. We kunnen advies geven over wanneer een organisatie 
moet overwegen om API's te gaan inzetten, en hoe deze naast de bestaande standaarden kan worden gebruikt.*]
