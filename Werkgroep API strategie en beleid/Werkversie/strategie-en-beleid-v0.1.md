# Strategie en beleid voor moderne gegevensuitwisseling bij de overheid
[*Titel aangepast naar suggestie van Martin van der Plas. Suggesties nog welkom.*]

## Probleembeschrijving
In veel ICT systemen bij de overheid zitten de gegevens verweven in de applicatie. Deze systemen werken met kopieën van de 
basisregistraties en andere gegevensbronnen. De huidige situatie brengt een aantal problemen met zich mee:
1. De kans op fouten en datalekken neemt toe bij het kopiëren en gedupliceerd opslaan van gegevens.
2. Het kopiëren en synchroniseren van gegevens tussen systemen kost tijd en geld.
3. Personen en bedrijven hebben geen regie over hun gegevens als deze overal verspreid staan.
4. De huidige systemen en koppelingen kunnen afhankelijkheid van leveranciers in de hand werken.

### Voorbeeld: publiekrechtelijke beperkingen
Sinds 2021 is de nieuwe [Wet kenbaarheid publiekrechtelijke beperkingen](https://wetten.overheid.nl/BWBR0016876/2021-01-01) (Wkpb) van kracht. Deze nieuwe wet schrijft wijzigingen voor in het systeem voor het kenbaar maken van [publiekrechtelijke beperkingen](https://www.kadaster.nl/publiekrechtelijke-beperkingen)).

In het oude systeem registreerden de gemeenten hun eigen gegevens terwijl andere overheden de basisregistratie van het Kadaster gebruikten. Deze twee langs elkaar werkende systemen brachten allerlei problemen met zich mee. Overheden, notarissen en makelaars moesten vaak beide registraties raadplegen. Het was niet mogelijk om gemeentelijke brondocumenten bij het Kadaster op te vragen. En soms bleek de gemeentelijke situatie van een pand of object niet overeen te komen met de kenmerken zoals die in de basisregisters van het Kadaster zijn vastgelegd.

Het nieuwe systeem registreert en beheert alle publiekrechtelijke beperkingen in de Basisregistratie Kadaster publiekrechtelijke beperkingen (BRK-PB). Overheden en organisaties uit de private sector hebben zo een unieke bron waar ze alle gegevens kunnen raadplegen.

Het nieuwe systeem zorgt er tevens voor dat de BRK-BP beter aansluit bij de andere basisregistraties van het Kadaster zoals de BAG (bijvoorbeeld voor woningen) en de BGT (bijvoorbeeld voor monumentale infrastructuur).

Het bij de bron registreren en beheren van gegevens heeft hier dus zichtbare meerwaarde, zowel voor de overheid als voor de private sector , zie ook dit [artikel in Binnenlands Bestuur](https://www.binnenlandsbestuur.nl/digitaal/nieuws/notarissen-niet-gelukkig-met-lakse-gemeenten.15795830.lynkx).

[*Is er een link naar de BRP-PB? Verder noemde Frans het portaal [ruimtelijkeplannen.nl](https://www.ruimtelijkeplannen.nl/) als mogelijk voorbeeld.*]

### Voorbeeld: rijvaardigheid bewijzen

[*Dit voorbeeld is van Martin. Deze beschrijving kan verder uitgewerkt worden. Wat is precies het probleem van de overheid?*]

Als je met een auto de weg op wilt moet je je rijvaardigheid bewijzen bij de centrale overheid, bij het [CBR](https://www.cbr.nl/). Bij het CBR moet je je legitimeren met een identiteitsbewijs (paspoort of identiteitsbewijs) dat je gemeente uitgeeft.

Als je de weg op gaat moet je het rijbewijs bij je hebben zodat de politie je rijvaardigheid kan controleren. Dit is geen toonbeeld van efficiëntie. Het rijbewijs zou een verwijzing moeten zijn naar een gegevensbron waarin je rijvaardigheid is vastgelegd. De politie kan dit direct controleren bij de bron, en je kan deze gegevens ook online delen. En het CBR zou het rijbewijs direct kunnen sturen naar het adres wat bekend is bij de gemeente.

### Voorbeeld: regie op gegevens

[*Voorbeeld van Paul.*]

De [Wet bescherming persoonsgegevens](https://wetten.overheid.nl/BWBR0011468/2018-05-01) (Wrp) en z'n opvolger, de [Algemene verordening gegevensbescherming](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679&from=NL) (AVG) geven ons al bijna twintig jaar recht op inzage en correctie van de gegevens die de overheid over ons verzamelt en beheert. Dit betekent dat je als burger het recht hebt om te weten welke persoonsgegevens de overheid over je heeft vastgelegd en welke gegevens de overheid heeft gebruikt en uitgewisseld voor welk doel.

In de praktijk kan de overheid vaak niet naar behoren voldoen aan dit recht. Als je aan je gemeente vraagt welke instanties je persoonsgegevens uit de BRP hebben geraadpleegd, kan je meestal op niet meer rekenen dan een uitdraai van het logbestand uit het lokale ICT systeem. Zo'n logbestand is een lange lijst termen en codes waar je weinig aan hebt als je het ICT systeem niet kent. En dan weet je nog niet wie er in het centrale BRP bij je gegevens geweest is. Daarvoor moet je dan weer bij de RvIG zijn.

In 2017 liet het ministerie van Binnenlandse Zaken en Koninkrijksrelaties op verzoek van de Tweede Kamer door Berenschot een [onderzoek](https://zoek.officielebekendmakingen.nl/blg-817465.pdf) doen om inzicht te krijgen hoe, wanneer en met welk budget de overheid werkelijk kan voldoen aan het recht van inzage en correctie. Berenschot concludeerde in het onderzoek dat volledig digitale inzage in alle relevante persoonsgegevens die onder de AVG vallen, met het huidige gegevenslandschap niet haalbaar is.

In de [beleidsbrief regie op gegevens](https://www.rijksoverheid.nl/documenten/brieven/2019/07/11/beleidsbrief-regie-op-gegevens-nadere-uitwerking) van 2019 onderstreept het kabinet nog eens het beleidsvoornemen om serieus werk te maken van regie op gegevens. Maar er zal iets moeten gebeuren in het gegevenslandschap om dit mogelijk te maken.

Als de overheid gegevens bij de bron gaat beheren en ontsluiten, wordt het gemakkelijker om bij de bron volledige inzage te geven. De overheid kan dan digitale inzage geven in een uniform gebruiksvriendelijk format, en ook de correctie van gegevens wordt eenvoudiger.

## Visie en stappenplan
Als digitale overheid maken we onze dienstverlening veiliger, efficiënter en beter beheersbaar door applicaties beter te scheiden van gegevens en gegevens alleen bij de bron te beheren.

[*Martin stelt voor om een visie van de eindsituatie te geven, bijvoobreeld:*]

Alle basisregistraties zijn over 3 jaar realtime te bevragen en over 5 jaar gebruikt de overheid geen lokale kopieën meer van gegevensbronnen.

[*Martin stelt voor om een stappenplan te geven om naar deze eindsituatie toe te komen.*]

## Basisafspraken
[*Hier kunnen we afspraken maken over waar/wanneer/hoe de overheid (REST) API's inzet om de bovenstaande visie te bereiken. Voorbeelden (nog te bespreken):*
 - *Als de overheid REST APIs inzet, doen we dat volgens de [REST API Design Rules](https://docs.geostandaarden.nl/api/API-Designrules/).*
  - *De beveiliging van REST APIs doet de overheid met het [NL GOV Assurance Profile for OAuth 2.0](https://docs.geostandaarden.nl/api/oauth/).*
  - *Voor het leggen van een veilige, snelle en robuuste verbinding met een API gebruikt de overheid [_NLX_](http://www.nlx.io). Deze open source implementeert de extensie behorende bij de API Design Rules standaard voor het [gebruik van TLS1.3](https://docs.geostandaarden.nl/api/API-Strategie-ext/#api-11-encrypt-connections-using-at-least-tls-v1-3)  met  [_tweezijdige PKIoverheid certificaten_](https://docs.geostandaarden.nl/api/API-Strategie-ext/#api-15-use-pkioverheid-certificates-for-access-restricted-or-purpose-limited-api-authentication).*]

## Praktijkvoorbeelden
[*Hier zoeken we een aantal aansprekende succesvoorbeelden uit Haal Centraal, Common Ground, DSO, J4 en mogelijk andere.*]

## Transitiepaden
[*Hier geven we een visie op de transitie van bijvoorbeeld DigiKoppeling en StUF naar het nieuwe gegevenslandschap. 
Waarschijnlijk blijven deze standaarden nog geruime tijd bestaan naast API's. We kunnen advies geven over wanneer een organisatie 
moet overwegen om API's te gaan inzetten, en hoe deze naast de bestaande standaarden kan worden gebruikt.*]
