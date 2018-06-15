# Errors

## JSON
Foutmeldingen in JSON worden teruggegeven in het `application/problem+json` formaat ([RFC 7807](https://tools.ietf.org/html/rfc7807)). De response ziet er als volgt uit:

```json
{
    "type": "about:blank",
    "title": "Resource not found",
    "status": 401,
    "detail": "Resource 123 doesn't exist",
    "instance": "/logs/requests/123"
}
```

|property|required|description|
|-|-|-|
|type|true|URI naar human-readable informatie over de fout die de developer kan helpen met debuggen|
|title|true|Titel van de foutmelding|
|detail|true|Uitgebreide omschrijving waarom de foutmelding gegeven wordt|
|status|true|Numerieke HTTP status code van de foutmelding|
|instance|true|Unieke URI om de foutmelding te identificeren, welke bijvoorbeeld gebruikt kan worden om de error in logfiles op te zoeken|

## 401 Unauthorized
Geen geldige autorisatie, bijvoorbeeld bij het meegeven van verkeerde credentials. Zie ook: http://webconcepts.info/concepts/http-status-code/401.

## 403 Forbidden
Geen authenticatie, bijvoorbeeld bij geldige credentials maar te weinig rechten. Zie ook: http://webconcepts.info/concepts/http-status-code/403.

## 404 Not Found
Resource niet gevonden. Zie ook: http://webconcepts.info/concepts/http-status-code/404

## 406 Not Acceptable
Server kan niet voldoen aan `Accept` voorkeur van de client, bijvoorbeeld als de client XML vraagt maar de server alleen JSON terug kan geven. Zie ook: http://webconcepts.info/concepts/http-status-code/406.

## 503 Service Unavailable
Service is (tijdelijk) niet beschikbaar. Als men zich hiervan bewust is, bijvoorbeeld tijdens (gepland) onderhoud, dient er een `Retry-After` meegestuurd te worden met een instructie voor de client wanneer deze de request het beste opnieuw kan proberen. Zie ook: http://webconcepts.info/concepts/http-status-code/503.

