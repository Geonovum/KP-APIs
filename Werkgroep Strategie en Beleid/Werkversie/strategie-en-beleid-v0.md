# Strategie en beleid voor een modern gegevenslandschap van de overheid
[*Dit is nog een werktitel. We zoeken een betere titel, waarin we de term 'API's' het liefst vermijden omdat het probleem
centraal staat, en niet de oplossing.*]

## Probleembeschrijving
Bij de meeste ICT systemen van de overheid zitten de gegevens verweven in de applicatie. Veel systemen werken met kopieën van de 
basisregistraties en andere gegevensbronnen. De huidige situatie brengt een aantal problemen met zich mee:
1. De kans op fouten en datalekken neemt toe bij het kopiëren en gedupliceerd opslaan van gegevens.
2. Het kopiëren en synchroniseren van gegevens tussen systemen kost tijd en geld.
3. Personen en bedrijven hebben geen regie over hun gegevens als deze overal verspreid staan.
4. De huidige systemen en koppelingen kunnen afhankelijkheid van leveranciers in de hand werken.

Een voorbeeld. Als je gaat verhuizen van gemeente A naar gemeente B, dan moet je je inschrijven bij de gemeente B. Achter de schermen 
komt er dan een ingewikkelde gegevensstroom op gang.

Beide gemeenten houden hun eigen registratie van personen bij. De ICT systemen van gemeente A moeten daarom je persoonsgegevens 
opvragen bij de ICT systemen van gemeente B. Met de ontvangen gegevens kan gemeente B je als nieuwe bewoner registreren in z'n 
basisregistratie personen. Maar gemeente A moet weten dat je nu staat ingeschreven in gemeente B. Dus stuurt gemeente B verwijsgegevens 
naar gemeente A. Gemeente A verwerkt deze verwijsgegevens in z’n basisregistratie personen.

Daarna moeten zowel gemeente A als gemeente B de mutaties van hun lokale basisregistratie personen nog doorgeven aan de 
[centrale basisregistratie personen van de Autoriteit Persoonsgegevens](https://www.autoriteitpersoonsgegevens.nl/nl/onderwerpen/gemeente/basisregistratie-personen-brp?qa=brp). Zo kan het drie werkdagen kosten om een verhuizing volledig te registreren. En er komen drie registraties aan te pas die deels kopieën van elkaar zijn en met elkaar synchroon gehouden moeten worden.

Is het niet efficiënter en veiliger om één basisregistratie personen bij te houden, in plaats van gegevens heen en weer te 
schuiven van de ene registratie naar de andere?

[*Dit voorbeeld is nogal abstract. Andere en betere voorbeelden zijn welkom! Vooral een aansprekend voorbeelden van waar 
iets echt misgegaan is door de huidige praktijk van gegevens rondpompen.*]

## Verklaring
Als digitale overheid maken we onze dienstverlening veiliger, efficiënter en beter beheersbaar door applicaties beter te 
scheiden van gegevens en gegevens alleen bij de bron te beheren.

[*Dit moeten we verder uitwerken. Willen we dit SMARTer maken en iets zeggen over de termijn waarin de overheid dit wil 
bereiken? Willen we hier al APIs noemen als oplossing?*]

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
