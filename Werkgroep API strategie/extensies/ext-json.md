## JSON

<p class='warning'>Deze extensie is nog in ontwikkeling en kan elk moment wijzigen.</p>

JavaScript Object Notation (JSON) is een formaat, net zoals XML, om gegevens te serialiseren, op te slaan en te versturen. JSON is het primaire representatieformaat voor API's. Voor meer informatie over JSON zie https://json.org. In tegenstelling tot XML kent JSON een compacte notatie, bijvoorbeeld:

```json
{
  "persoon": {
    "naam": "Jan",
    "geboortejaar": 1983
  }
}
```

> [API principe: JSON first - API's ontvangen en versturen JSON](#api-22)

> [API principe: API's zijn optioneel voorzien van een JSON Schema](#api-23)

> [API principe: Content negotiation wordt volledig ondersteund](#api-24)

> [API principe: API's controleren dat de Content-Type header is ingesteld](#api-25)

### Veldnamen in `snake_case`, `camelCase`, `UpperCamelCase` of `kebab-case`?

Bij veldnamen wordt gebruik gemaakt van `camelCase`.

> [API principe: Woorden in veldnamen zijn gedefinieerd in `camelCase`](#api-26)

### Pretty print

De meeste REST clients en browsers (al dan niet met extensies) kunnen JSON netjes geformatteerd weergeven, ook als de response geen white-space bevat.

> [API principe: Pretty print is standaard uitgeschakeld](#api-27)

### Gebruik geen envelop

Veel API's wikkelen antwoorden in enveloppen zoals hieronder is weergegeven:

```json
{
  "persoon": {
    "naam": "Jan",
    "geboortejaar": 1983
  }
}
```

Een toekomstbestendig API is vrij van enveloppen.

> [API principe: Een JSON-response heeft geen omhullende envelop](#api-28)

### JSON gecodeerde `POST`, `PUT` en `PATCH` payloads

API's ondersteunen minimaal JSON gecodeerde `POST`, `PUT` en `PATCH` payloads. Encoded form data (`application/x-www-form-urlencoded`) payloads worden niet ondersteund. Wat is het verschil?

`Content-Type: application/json` resulteert in:

```json
{
  "Name": "John Smith",
  "Age": 23
}
```

en `Content-Type: application/x-www-form-urlencoded` resulteert in: `Name=John+Smith&Age=23`

> [API principe: API's ondersteunen JSON gecodeerde `POST`, `PUT` en `PATCH` payloads](#api-29)