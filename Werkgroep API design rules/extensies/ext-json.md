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

> [API principe: JSON first - APIs receive and send JSON](#api-22)

> [API principe: APIs may provide a JSON Schema](#api-23)

> [API principe: Support content negotiation](#api-24)

> [API principe: Check the Content-Type header settings](#api-25)

### Veldnamen in `snake_case`, `camelCase`, `UpperCamelCase` of `kebab-case`?

Bij veldnamen wordt gebruik gemaakt van `camelCase`.

> [API principe: Define field names in in `camelCase`](#api-26)

### Pretty print

De meeste REST clients en browsers (al dan niet met extensies) kunnen JSON netjes geformatteerd weergeven, ook als de response geen white-space bevat.

> [API principe: Disable pretty print](#api-27)

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

> [API principe: Send a JSON-response without enclosing envelope](#api-28)

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

> [API principe: Support JSON-encoded `POST`, `PUT`, and `PATCH` payloads](#api-29)