# Orkestratie

Eerder dit jaar heeft Kadaster in samenwerking met Geonovum het IMX initiatief gestart. Dit initiatief heeft als ambitie om basisregistraties (en andere bronnen) in samenhang te kunnen bevragen door middel van API orkestratie. Om op een efficiënte manier te kunnen orkestreren moeten bron API’s voldoen aan diverse randvoorwaarden. Deze werkgroep is bedoeld om te onderzoeken welke randvoorwaarden dit zijn en op welke manier deze gestandaardiseerd zouden kunnen worden als design rules.

## Verslag bijeenkomst 30 november 2023

Actiepunten:

- Joost doet een aanzet voor een nieuwe design rule voor batch bevragingen.
- Frank en Martin zetten wat ideëen op papier voor beveiligingsarchitectuur in de context van orkestratie.
- Peter zoekt nog afstemming met Pano over begrippen.

De volgende bijeenkomst staat gepland op donderdag 21 december van 11u tot 12u.

## Verslag bijeenkomst 9 november 2023

Pano heeft het lineage model van IMX toegelicht.

## Verslag bijeenkomst 2 november 2023

Rondje langs de aanwezigen om wat te vertellen over de affiniteit met het onderwerp en wat we hopen te bereiken.

- Joost: Afgelopen jaar IMX concept ontwikkeld. Daar is een lijst randvoorwaarden gekomen die ervoor zorgen dat API's efficiënt gebruikt kunnen worden binnen een orkestratie context. Met de WG zouden we hier nieuwe standaarden & best practices voor op kunnen stellen.
- Frank: Gepromoveerd in workflow proces-automatisering. Op zoek naar standaarden voor het beschrijven van workflow processen. Het standaardiseren van lineage is van groot belang. En andere vragen, bijv: wie is eigenaar van de gegevens?
- Martin: Verleden als workflow consultant. Voorstel om scope te beperken tot bevragingen om het behapbaar te houden. Doel is om uiteindelijk dingen makkelijker te maken voor burgers, zoals dmv de "Mijn Gegevens" app.
- Peter: WG architectuur heeft een hoofdstuk over informatiemodellering in relatie tot APIs. Doel: uitbreiden architectuur document met orkestratie onderwerpen en bestaande inhoud aanscherpen waar nodig.
- Pano: Betrokken bij MIM en IMX. Model-gedreven werken. Hoe vertalen we een informatiemodel naar een API, zodat we in orkestratie automatische aannames kunnen doen om erachter te komen hoe we deze gegevens kunnen bevragen.

Frank oppert het idee om Anne van BZK te contacteren. Hij heeft de concrete opdracht om het mogelijk te maken om bij processen van de overheid erachter te komen wat de precieze herkomst is van gegevens. IMX heeft een lineage model ontwikkeld om herkomst van gegevens te beschrijven icm orkestratie. Pano zal hier in de vervolgbijeenkomst wat over vertellen.

Overeengekomen dat we de scope beperken tot enkel bevragen, omdat we het onderwerp niet te groot willen maken. Uitgangspunt is de bestaande registraties met de bestaande registratie-processen.

Met betrekking tot security zijn er diverse aandachtspunten:

- Data integriteit. Dmv signing zou van individuele gegevens kunnen worden aangetoond wat de authentieke bron is en of dat deze identiek zijn aan de authentieke gegevens. Interessant vraagstuk is wat dit betekent als gegevens tijdens het orkestreren worden getransformeerd. Mogelijk raakvlakken met de [RDF Dataset Canonicalization](https://www.w3.org/TR/rdf-canon/) standaard.
- Authenticatie/autorisatie. Bij orkestratie worden verschillende requests uitgevoerd vanuit mogelijk verschillende identiteiten, verschillende identity stores en verschillende scopes/audiences. Hierbij kan zowel een transparant als niet-transparant model worden toegepast. Deze willen we beiden beschrijven. Relevante standaarden zijn [FSC](https://commonground.gitlab.io/standards/fsc/) en [OAuth Token Exchange](https://datatracker.ietf.org/doc/html/rfc8693).

Use cases:

- [IMX-Geo](https://www.geonovum.nl/geo-standaarden/imx-geo-semantisch-model-basis-en-kernregistraties) (Geonovum), Bestuurlijke Gebieden (BZK), Gebouwdossier (Kadaster)
- Diverse Digital Twin use cases (navraag doen bij Bart en/of Koos)
- [Digilab](https://digilab.overheid.nl/) use cases: opkopersbescherming (RVIG/VNG), maximale huurverhoging (Belastingdienst)

Frank wil ook BKWI uitnodigen, omdat zij vergelijkbare dingen doen.

Design rules & best practices zouden functioneel beschreven moeten worden, technologie- en leveranciersonafhankelijk. Requirements zo scherp mogelijk formuleren om kwaliteit te waarborgen.

De werkgroep stelt de randvoorwaarden op, maar niet alles kan door de werkgroep zelf worden uitgewerkt. Mogelijk worden zaken gedelegeerd naar andere werkgroepen op geparkeerd om in een later stadium op te pakken. Het doel is om op te schrijven wat er nodig is om orkestratie implementeerbaar te maken en welke eisen we daaraan stellen.

Termen en definities opstellen of aanscherpen in het architectuurdocument. Pano en Peter pakken dit samen op en we bespreken dit de volgende sessie.
