# Batch bevragingen

Stel je voor dat bron 1 een lijst met 10 personen oplevert, en dat je van ieder indidueel persoon de bijbehorende adresgegevens uit een andere bron erbij wil voegen. Je hebt dan te maken met het zogeheten "N+1 probleem". Dat wil zeggen dat je in totaal 11 requests nodig hebt, namelijk 1 request naar bron 1 en vervolgens 10 requests naar bron 2. Dit zou voorkomen kunnen worden als bron 2 batch requests zou ondersteunen. In dat geval kan het aantal requests teruggebracht worden naar 2 (1 per bron).

Hierbij gelden de volgende uitgangspunten:

- Objecten kunnen samengestelde sleutels gebruiken (een combinatie van meerdere identificerende kenmerken)
- Voorafgaand aan de bevraging is niet met zekerheid te stellen dat een object daadwerkelijk bestaat. Er is altijd kans op een dode link. Dit is inherent aan een gedistribueerd gegevenslandschap.

## Voorstel

Voeg voor iedere collectie een extra endpoint toe met de naam `_batch`. Voor bovengenoemd voorbeeld zou dit bijvoorbeeld `/adressen/_batch` worden. Dit endpoint implementeert de `POST` operatie, waarbij als input een lijst met object identificaties wordt verwacht.

Voor de input gelden de volgende eisen:

- De lijst met sleutels wordt omsloten door een wrapper, om de mogelijkheid te hebben om extra contextuele parameters toe te kunnen voegen aan de input. De naam van de lijst property is `keys`.
- Om performance en beschikbaarheid te waarborgen dient wel een limitatie te gelden voor het aantal items per batch-bevraging. Dat zou bijvoorbeeld 100 of 1000 items kunnen zijn.

De request payload ziet er bijvoorbeeld als volgt uit:

```json
{
  "keys": [
    {
      "identificatie": "12345"
    },
    {
      "identificatie": "23456"
    },
    {
      "identificatie": "34567"
    }
  ]
}
```

Voor het resultaat gelden de volgende eisen:

- Het endpoint levert één lijst met alle resultaten (zonder paginering).
- De lijst met resultaten wordt omsloten door een wrapper, om de mogelijkheid te hebben om (in de toekomst) meta-gegevens toe te kunnen voegen aan het resultaat. De naam van de lijst property is `items`.
- Het aantal resultaten dient exact gelijk te zijn aan het aantal items in de input.
- De volgorde van de resultaten dient exact gelijk te zijn aan de volgorde van de input.
- Objecten die niet gevonden worden, worden teruggeven als `null`.

Een voorbeeld resultaat zou kunnen zijn:

```json
{
  "items": [
    {
      "identificatie": "12345",
      "postcode": "1234AB",
      "huisnummer": 1
    },
    null,
    {
      "identificatie": "34567",
      "postcode": "3456AB",
      "huisnummer": 3
    }
  ]
}
```

## Alternatieven

De volgende alternatieven zijn overwogen.

### Alternatief 1: Collectie filtering

Batch support zou geïmplementeerd kunnen worden door de reeks met sleutels als filter mee te geven aan een collectie endpoint.

Hiervoor is niet gekozen, omdat:

- Het aantal karakters van de URL mogelijk problemen oplevert.
- Het lastig is om een lijst van samengestelde keys als filter uit te drukken.
- De client moet gaan pagineren (indien de page size lager is dan de batch size).
- De client zelf moet detecteren welke objecten wel of geen resultaat opleveren.
- De client het resultaat moet gaan hersorteren (indien relevant voor implementatie/toepassing)

### Alternatief 2: Batch endpoint als GET operatie

De HTTP spec staat in principe ook een request payload voor `GET` operaties toe. Hier is echter niet voor gekozen, omdat dit ongebruikelijk is, en omdat de ondersteuning vanuit tooling, frameworks en server applicaties zeer beperkt is.

## Uitzoekpunten

- 1 globaal batch endpoint ipv een batch endpoint per objecttype?
- Batch bevragingen zonder primaire sleutel, bijv:
  - op basis van vreemde sleutels (kardinaliteit is van belang!)
  - matching op geometrie (bijv. intersectie)
- Implementatie voorbeelden / best practices
- Wanneer gebruik je het wel / niet
- Beveiliging
- Relatie tot andere API stijlen
- Hoe bepaal je de max batch size? En wie?
- Check t.o.v. bestaande design rules
- Analyse op bestaande standaarden / voorbeelden
