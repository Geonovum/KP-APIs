# Batch bevragingen

Stel je voor dat bron 1 een lijst met 10 personen oplevert incl alleen het adres ID, en dat je van ieder indidueel persoon de bijbehorende adresgegevens uit een andere bron erbij wil voegen. Je hebt dan te maken met het zogeheten _N+1 probleem_. Dat wil zeggen dat je in totaal 11 requests nodig hebt, namelijk 1 request naar bron 1 en vervolgens 10 requests naar bron 2. Dit is slechts een voorbeeld van een situatie waarbij het aantal requests hard op kan lopen. Dit heeft nadelige gevolgen voor performance en gaat ten koste van schaalbaarheid.

Door middel van _request batching_ zou het aantal requests gereduceerd kunnen worden, in het eerder genoemde voorbeeld tot slechts 2 (1 per bron). Matching op gerelateerde objecten kan gebaseerd zijn op:

- Identificerende attributen (primary key)
  - Dit kan ook een samengengestelde sleutel zijn.
  - Voorafgaand aan de bevraging is niet met zekerheid te stellen dat een object daadwerkelijk bestaat. Er is altijd kans op een dode link. Dit is inherent aan een gedistribueerd gegevenslandschap.
- Filter op 1 of meerdere kenmerken, zoals relatie-kenmerken (foreign keys) of attributen (bijv. een type of geometrie)
  - Een relatie-kenmerk kan ook een samengengestelde sleutel van het doel-object zijn
  - Een combinatie van meerdere (soorten) kenmerken is ook mogelijk

## Voorstel: batch endpoint per collectie

Deze oplossing maakt het mogelijk om per collectie een batch request uit te voeren. Dit vereist een extra endpoint, bijvoorbeeld met de naam `_batch`; voor bovengenoemd voorbeeld zou dit bijvoorbeeld `/adressen/_batch` worden. Dit endpoint implementeert de `POST` operatie, waarbij als request payload een lijst met criteria wordt verwacht (De HTTP specificatie staat in principe ook een request payload voor `GET` operaties toe. Dit is echter zeer ongebruikelijk en ondersteuning vanuit tooling, frameworks en server applicaties is te beperkt).

De lijst met criteria wordt omsloten door een wrapper met de naam `requests`, om de mogelijkheid te hebben om extra contextuele parameters toe te kunnen voegen aan de payload. Om performance en beschikbaarheid te waarborgen dient wel een limitatie te gelden voor het aantal items per batch-bevraging. Dat zou bijvoorbeeld 100 of 1000 items kunnen zijn. Iedere lijst entry bevat 1 property. De naam en het schema van de property hangen af van het type criterium.

Voor het resultaat gelden de volgende eisen:

- Het endpoint levert één lijst met alle resultaten (zonder paginering).
- De lijst met resultaten wordt omsloten door een wrapper met de naam `results`.
- Het aantal resultaten dient exact gelijk te zijn aan het aantal items in de input.
- De volgorde van de resultaten dient exact gelijk te zijn aan de volgorde van de input.

## Matchen op identificatie

Voor het raadplegen van een object op basis van identificatie dient de property `key` gebruikt te worden.

- De waarde is de waarde(n) van de identificerende kenmerken van het object.
- Alleen bij samengestelde sleutels dienen de waarden in een array opgesomd te worden.
- Het datatype van de identificerende kenmerken kan verschillen, waardoor ook het schema per objecttype kan verschillen.

De request payload ziet er bijvoorbeeld als volgt uit:

```json
{
  "requests": [
    {
      "key": "12345"
    },
    {
      "key": "34567"
    }
  ]
}
```

Een voorbeeld resultaat zou kunnen zijn:

```json
{
  "results": [
    {
      "identificatie": "12345",
      "postcode": "1234AB",
      "huisnummer": 1
    },
    null
  ]
}
```

Objecten die niet gevonden worden, worden teruggeven als `null`.

### Matchen op relaties en/of attributen (filtering)

Als het gaat om het filteren op een relatie (foreign key) en/of ander kenmerk, dan kan een lijst met filter criteria worden aangeleverd, bijv:

```json
{
  "requests": [
    {
      "filter": {
        "type": "Spoor­baan",
        "ligtIn": {
          "identificatie": "12345"
        }
      }
    },
    {
      "filter": {
        "type": "Spoor­baan",
        "ligtIn": {
          "identificatie": "67890"
        }
      }
    }
  ]
}
```

Een voorbeeld resultaat zou dan kunnen zijn:

```json
{
  "results": [
    {
      "items": [
        {
          "identificatie": "12345",
          "postcode": "1234AB",
          "huisnummer": 1
        },
        {
          "identificatie": "34567",
          "postcode": "3456AB",
          "huisnummer": 3
        }
      ]
    },
    {
      "items": []
    }
  ]
}
```

Als er geen objecten gevonden worden, wordt een lege array van items teruggegeven.

@TODO: Paginering per result?? Next token of link opnemen?

### Combinatie

Beide manieren van selecteren kunnen ook gecombineerd worden, bijv:

```json
{
  "requests": [
    {
      "key": "12345"
    },
    {
      "filter": {
        "type": "Spoor­baan",
        "ligtIn": {
          "identificatie": "12345"
        }
      }
    }
  ]
}
```

Met als resultaat:

```json
{
  "results": [
    {
      "identificatie": "12345",
      "postcode": "1234AB",
      "huisnummer": 1
    },
    {
      "items": [
        {
          "identificatie": "12345",
          "postcode": "1234AB",
          "huisnummer": 1
        },
        {
          "identificatie": "34567",
          "postcode": "3456AB",
          "huisnummer": 3
        }
      ]
    }
  ]
}
```

## Alternatief overwogen: Collectie filtering

Batch support zou ook geïmplementeerd kunnen worden door de reeks met criteria als filter mee te geven aan een (bestaand) collectie endpoint.

Hieraan kleven echter wel een hoop nadelen, o.a.:

- Het aantal karakters van de URL levert mogelijk problemen op
- Het is lastig om een lijst van complexe criteria uit te drukken in een URL.
- De client moet gaan pagineren.
- De client moet zelf gaan detecteren welke objecten wel of geen resultaat opleveren, en/of welke resultaten bij welk filter criteria horen.
- De client moet mogelijk het resultaat gaan hersorteren (indien relevant voor implementatie/toepassing)

## Uitzoekpunten

- 1 globaal batch endpoint ipv een batch endpoint per objecttype?
- Implementatie voorbeelden / best practices
- Wanneer gebruik je het wel / niet
- Hoe bepaal je de max batch size? En wie?
- Check t.o.v. bestaande design rules
- Hypermedia links?
- Generalisatie
- Beveiliging

## Bestaande standaarden

### Elasticsearch

Elasticsearch kent een approach, vergelijkbaar met alternatief 1.

`GET /my-index/\_mget`

```json
{
  "docs": [
    {
      "_id": "1"
    },
    {
      "_id": "2"
    }
  ]
}
```

Als alternatief kan het `ids` element worden gebruikt.

`GET /my-index/_mget`

```json
{
  "ids": ["1", "2"]
}
```

Dit kan tevens globaal worden uitgevoerd over meerdere collecties heen:

`GET /_mget`

```json
{
  "docs": [
    {
      "_index": "my-index-1",
      "_id": "1"
    },
    {
      "_index": "my-index-2",
      "_id": "2"
    }
  ]
}
```

Er geldt geen limiet op het aantal documenten.

### OData Batching

Docs: https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_BatchRequestsandResponses

In OData heb je een globaal endpoint voor het bundelen van meerdere requests.

`POST https://example.org/api/$batch`

```json
{
  "requests": [
    {
      "id": "1",
      "method": "get",
      "url": "https://example.org/api/buildings/1"
    },
    {
      "id": "2",
      "method": "get",
      "url": "https://example.org/api/buildings/2"
    }
  ]
}
```

In de response krijg je voor ieder subrequest de volledige HTTP response terug, maar gebundeld in 1 document. Headers zijn hierbij opgenomen in de payload.

```json
{
  "responses": [
    {
      "id": "1",
      "status": 200,
      "body": {
        "@odata.context": "https://example.org/api/$metadata#Building/$entity",
        "Id": "1",
        "BuildingYear": 2024
      }
    },
    {
      "id": "2",
      "status": 200,
      "body": {
        "@odata.context": "https://example.org/api/$metadata#Building/$entity",
        "Id": "2",
        "BuildingYear": 2003
      }
    }
  ]
}
```

Het grote voordeel van deze aanpak is dat je alle vrijheid hebt in de bevragingen, of zelfs schrijf-operaties, die je wil combineren. Ook kun je per subrequest de exacte resultaat status zien, niet alleen wanneer iets niet bestaat, maar ook als men bijv niet is geautoriseerd.

In plaats van het uidrukken van requests/responses in JSON, kan ook het `multipart/mixed` media type worden gebruikt.

### Google Drive

Docs: https://developers.google.com/drive/api/guides/performance#batch-requests

Google Drive kent een vergelijkbare aanpak als OData, maar ondersteunt alleen het `multipart/mixed` media type. Dat kan functioneel hetzelfde, maar is lastiger te implementeren.
