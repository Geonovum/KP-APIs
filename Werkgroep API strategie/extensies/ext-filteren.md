## Filteren

<p class='warning'>Deze extensie is nog in ontwikkeling en kan elk moment wijzigen.</p>

Er wordt gekozen om de basis URL's van resources zo eenvoudig mogelijk te houden. Complexe resultaatfilters, sorteren en geavanceerd zoeken (wanneer dit beperkt blijft tot een enkele resource) worden geïmplementeerd als query-parameters bovenop de basis URL.  

Om te filteren wordt gebruik gemaakt van unieke query-parameters die gelijk zijn aan de velden waarop gefilterd kan worden. Als je bijvoorbeeld een lijst met aanvragen wilt opvragen van het eindpunt `/aanvragen` en deze wilt beperken tot open aanvragen, dan wordt het verzoek `GET /aanvragen?status=open` gebruikt. Hier is `status` een veld waarop gefilterd kan worden.

> [API principe: Filter query-parameters zijn gelijk aan de velden waarop gefilterd kan worden](#api-30)

Dezelfde systematiek kan worden gehanteerd voor geneste properties. Zoals uitgewerkt met een voorbeeld op basis van de volgende collectie:

```json
[{
  "id": 1,
  "status": "actief",
  "overheid": {
    "code": "0000",
    "naam": "Ministerie van BZK"
  }
}, {
  "id": 2,
  "status": "inactief",
  "overheid": {
    "code": "9901",
    "naam": "Provincie Gelderland"
  }
}]
```

Alle objecten met de status "actief" kunnen worden gefilterd met `/?status=actief`. Maar als daarnaast ook op objecten met code "0000" van de overheid gefilterd moeten worden, heeft dit betrekking op een geneste property. Hier kan dan de puntnotatie (zoals bij Javascript) voor worden gebruikt: `/?status=actief&overheid.code=0000`.