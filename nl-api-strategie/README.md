# Inhoud
## RESTful principes
De belangrijkste principe van REST is het scheiden van de API in logische resources ("dingen"). De resources beschrijven de informatie van het "ding". Deze resources worden gemanipuleerd met behulp van HTTP-verzoeken en HTTP-operaties. Elke operatie (GET, POST, PUT, PATCH, DELETE) heeft een specifieke betekenis.
> HTTP definieert ook operaties als HEAD, TRACE, OPTIONS en CONNECT. Deze worden echter in de context van REST vrijwel niet gebruikt en zijn daarom in de verdere uitwerking weggelaten.

|Operatie|CRUD|Toelichting|
|-|-|-|
|POST|Create|Wordt gebruik als een "create" voor resources die collecties representeren (ofwel POST voegt een resource toe aan de collectie).|
|GET|Read|Wordt gebruikt om een resource op te vragen van de server. Data wordt alleen opgevraagd en niet gewijzigd.|
|PUT|Update|Wordt gebruikt om een specifieke resource te vervangen. Is óók een "create" wanneer de resource op aangegeven identifier/URI nog niet bestaat.|
|PATCH|Update|Wordt gebruikt om een bestaande resource gedeeltelijk bij te werken. Het verzoek bevat de gegevens die gewijzigd moeten worden en de operaties die de resource muteren in het daarvoor bedoelde JSON merge patch formaat (RFC 7386).|
|DELETE|Delete|Verwijdert een specifieke resource.|

Per operatie is tevens bepaald of deze gegarandeerd "veilig" en/of "idempotent" moet zijn. Dit is van belang omdat afnemers en tussenliggende middleware hierop rekenen. 

>Veilig (alleen-lezen) betekent in dit geval dat de semantiek is gedefinieerd als alleen-lezen. Dit is van belang als afnemers en tussenliggende systemen gebruik willen maken van caching.

>Idempotent betekent dat meerdere identieke verzoeken exact hetzelfde effect hebben als één verzoek.

|Operatie|Veilig|Idempotent|
|-|-|-|
|POST|Nee|Nee|
|GET, OPTIONS, HEAD|Ja|Ja|
|PUT|Nee|Ja|
|PATCH|Nee|Optioneel|
|Delete|Nee|Ja|

### Best practice(s)

## Interactiepatronen
### Asynchrone calls
- Callbacks
### Synchrone calls
### Best practice(s)
## API Design
### "Your API is not your datamodel"
### experience/convenience endpoints
### Best practice(s)
## Relaties tussen resources
- n:m etc.
## identificatie resources
## Beveiliging
- digid/oauth, oauth: werkgroep auth
- architectuur werkgroep uitwerken, hier technische implementatie
- Best practice(s)
## Documentatie
- OAS locatie
- Best practice(s)
## Versionering
- Best practice(s)
## JSON
- Best practice(s)
## HAL/HATEOAS
- Best practice(s)
## Filteren, sorteren en zoeken
- Best practice(s)
- wildcards
## Tijdreizen
- DSO tijdreisnotitie (link)
- VNG periodes (van, tot en met)
- RCE periodes (middeleeuwen, pleistoceem)
- Best practice(s)
## Geo ondersteuning
- Best practice(s)
## Paginering
- Best practice(s)
## Caching
- Best practice(s)
## Beperken van het aantal verzoeken per tijdsperiode
- Best practice(s)
## Foutafhandeling
- Best practice(s)
## URI strategie
- Best practice(s)
## Includen van guidelines
- https://cdn.jsdelivr.net/gh/dvh/KP-APIs@0.1/
- Versiebeheer
- Best practice(s); (eerst resolven in productie etc.)