
# Werkgroep Architectuur - Bijeenkomst 001
Kennisplatform API's
27 juni 2018, Den Haag, 14:00u - 16:00u

## Opening
- Dit is de eerste bijeenkomst. We focussen op het bepalen van de doelen en scope van deze werkgroep. Vanaf volgende keer wordt dit overleg voorgezeten door Emile van der Maas.
- Rondje wie is wie
  - Wat opvalt is dat veel gemeenten of aan gemeenten gerelateerde organisaties aanwezig zijn vandaag. Voor een volgende keer sturen op uitnodigen in de breedte.

## Doelen
### Overzicht doelen
  - Orde scheppen in de chaos
  - Komen tot Best practises rond gebruik van API's in architecturen
    - Let op: wel gericht op architectuur, niet op technieken
  - Standaardiseren / aansluiten van de verschillende (referentie)architecturen
  - Nastreven van meer interoperabiliteit tussen organisaties
     - Kennisniveau gelijk krijgen is subdoel / middel
  - Transitie van oude naar nieuwe technisch paradigma architectuurtechnisch begeleiden
    - Hoe ga je om met mix van architecturen
    - Afhankelijkheden minimaliseren
  - Concreet gevraagd doel: bijdrage hoofdstuk architectuur API strategie document, af op 1 januari 2019


### Gesprek over de doelen
  - Niet over referentiearchitectuur, iets abstracter blijven dan dat
    - Wel: Patronen in architecturen met API's identificeren
  - Open data: richtlijnen / ketens
  - Niet vooraf in architectuuren vastpinnen / dat lukt ook niet
    -> Ruimte voor de chaos houden, survival of the fittest
    -> Nieuwe werkwijze verhoudt zich slecht tot blauwdrukken
  - Voorbeeld VNG: Van topdown naar bottom up opbouw Informatiemodellen
  - Samenhang van de ontwikkelingen vinden / aantrekken en
    daar de structuur in vinden
  - Hoe verhouden we ons tot de Overheidsarchitecturen (WILMA, PETRA, NORA etc.)
    -> Proberen vertegenwoordigers aan tafel te krijgen
  - Semantiek: Als we API's van elkaar gebruiken is het veel belangrijker dan nu
    om eenduidige semantiek te hanteren.
    - Grote uitdaging, Kadaster heeft heel team zitten om ontologien te beheren
    - Buiten scope in deze groep, wel beschrijven als uitdaging / randvoorwaarde
  - **API is slechts technische uitwerking, het gaat om de API filosofie**
    - Definitie API, zeker weten dat iedereen hetzelfde bedoelt
      - Niet voor deze werkgroep, wel bezien of het er komt
    - Het gaat Kennisplatform (en ons) om veel meer dan alleen het verschijnsel API
       - Raadplegen in de bron etc.
  - Ontsluiten bronnen
    - Nuanceren statement "data bij de bron"
    - Hoe krijgen we alle bronnen mee?


  - Uitdaging: hoe voorkomen we een teveel aan overlap met de andere werkgroepen?
   - Werkgroep autorisatie, meer focus op techniek / solution architecture
   - Strategie - Principes
       -> Omzetten naar architectuurprincipes

## Procesafspraken
  - Hoe vaak vergaderen we?
    - 6x per jaar / 2 maanden
    - Datumprikkers voor hele jaar regelen
    - Voorkeur voor disndag, woensdag
  - Hoe bepalen we thema?
    - Elke keer thema volgende sessie bepalen
    - Bij voorkeur incl. toezegging inleider thema / presentatie

  - Hoe delen we informatie?
    - Er is een Github repository
    - Er is een Slack -> Voor alle vluchtige discussie
      - Iedereen uitnodigen
      - App installeren

  - Suggestie:  Confluence / Jira  (maar wie betaalt?)
      -> Signaal uit werkgroep naar Kennisplatform, graag beter


## Inhoudelijk gesprek

### Thema's
  - Wie heeft welke voorbeelden voor applicatie architectuur rondom APIs
  - Hoe komen we samen op basis daarvan tot best practices voor applicatie
    architectuur die in het API strategie document geplaatst kunnen worden.
  - Vervolgafspraken inhoud

### Gesprek inhoud
  - Andy: Verschuiving, van server naar browser
     - John: Herken dat niet direct
     - Bij kaartmateriaal zeker wel
     - Uitdagingen authenticatie / autorisatie

  - Ophalen uit de bron
     - Wellicht onderwerp voor themasessie  (Common Ground?)
     - Lidwien: Zeker ook notificaties nodig
       - Huidig: DigiLevering etc  (eBMS)
       - Joost, 2 soorten notificaties:
         - callbacks via een server / eigen API
         - websocket-achtige dingen
      --> Dit is wel een onderwerp om standaardisatie na te streven

       - NOTIFICATIES: Dit is een onderwerp voor onze groep
          - Proberen patronen voor use cases te identificeren
          - Agenderen dat dit een uitdaging is om op te lossen

          - Link naar Migratie: Welke aspecten spelen in migratie
          van oude naar nieuwe patronen?

     - High availability nodig     (voor ophalen uit de bron)
     - Verwevenheid neemt toe, je wordt afhankelijker van elkaar

     - Lidwien: Wat moet ik nu met alle "Digi*" dingen? Waar investeer ik nu nog in?
       Of kijken we wat overleeft? Centrale regie is wellicht niet mogelijk.
        - Gaan we eBMS 3.0 nog doen dan?
        - Gaan we DigiKoppeling voorzien van een API profiel?
      -> Wie voert de regie op dit soort dingen?
      -> Welke rol heeft deze werkgroep daarin?

     - Beveiliging:
        - Patronen in identificatie / authenticatie / autorisatie
        - Componenten die daarbij een rol spelen (API Management / Gateway)

### Genoteerde acties

- [ ] Rondsturen API filosofie
- [ ] Actie iedereen: Eigen uitdagingen formuleren rond thema
- [ ] Locatie in Utrecht regelen (BKWI?)

## W.V.T.T.K
  - Nuanceren statement "data bij de bron", is te kort door de bocht. Interessant om volgende keer in thema uit te werken.

## Rondvraag
  - Lancelot:
     - OAS3 onderwerp hier?  Waarschijnlijk niet
     - Wie mist aan tafel? (rondje onder aanwezigen)
        - Logius
        - Dataland
        - Rinis
        - Provincies / Waterschappen /
        - Uitvoeringsorganisaties (Belastingdienst, UWV etc.)
  - Tonkie:
     - Kan link naar referentiearchitectuur KARWEI leggen
  - Shinta:
     - Thema agenderen bij ketenpartners / UWV / SVB / etc., mening meenemen naar groep
     - BKWI volgt wat partners nodig hebben
  - Andy:
     - Bedrijfsleven uitnodigen om input te geven op onderwerpen (banken etc.)


## Agenda volgende keer
Voorzitter: Emile van der Maas

- Toelichting relatie NORA - Emile van der Maas
- Thema volgende keer: Notificaties
    - Inleiding Joost Farla
       - Mutatieleveringen BAG: Hoe zou je die willen consumeren?
       - Zowel technische als informatiekundige aspecten (welke events)
    - Iedereen opleveren: uitdagingen / use cases richting Joost
