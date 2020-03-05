## JSON

<p class='warning'>This extension is still in development and can be modified at any time.</p>

JavaScript Object Notation (JSON) is a format, just like XML, to serialise, store and transfer data. JSON is the primary representation format for APIs. For more information about JSON, read https://json.org. In contrast to XML, JSON has a compact notation, for example:

```json
{
  "persoon": {
    "naam": "Jan",
    "geboortejaar": 1983
  }
}
```

> [API principle: JSON first - APIs receive and send JSON](#api-22)

> [API principle: APIs may provide an additional JSON Schema for data validation by the consumer (not being the OAS file)](#api-23)

> [API principle: Support content negotiation](#api-24)

> [API principle: Check the Content-Type header settings](#api-25)

### Field names in `snake_case`, `camelCase`, `UpperCamelCase`, or `kebab-case`?

Use `camelCase` for field names.

> [API principe: Define field names in in `camelCase`](#api-26)

### Pretty print

Most REST clients and browsers (whether or not using extensions) can display JSON nicely formatted, even if the response does not include white-space.

> [API principle: Disable pretty print](#api-27)

### Do not use envelope

Many APIs encapsulate responses in envelopes like below:

```json
{
  "persoon": {
    "naam": "Jan",
    "geboortejaar": 1983
  }
}
```

A future-proof API does not have envelopes.

> [API principle: Send a JSON-response without enclosing envelope](#api-28)

### JSON-encoded `POST`, `PUT`, and `PATCH` payloads

APIs should at least support JSON-encoded `POST`, `PUT`, and `PATCH` payloads. Encoded form data (`application/x-www-form-urlencoded`) payloads are not supported. Other encodings are allowed. What is the difference?

`Content-Type: application/json` results in:

```json
{
  "Name": "John Smith",
  "Age": 23
}
```

and `Content-Type: application/x-www-form-urlencoded` results in: `Name=John+Smith&Age=23`

> [API principle: Support JSON-encoded `POST`, `PUT`, and `PATCH` payloads, do not support encode form data payloads](#api-29)
