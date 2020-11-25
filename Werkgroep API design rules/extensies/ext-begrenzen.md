## Begrenzingen

<p class='warning'>Deze extensie is nog in ontwikkeling en kan elk moment wijzigen.</p>

API's beperken het aantal verzoeken dat per tijdsperiode gedaan kan worden, om te voorkomen dat de servers overbelast worden om een hoog serviceniveau te garanderen. API's kunnen een bevragingslimiet (quota) per maand bijhouden en die wordt afgedwongen per tijdsperiode van 60 seconden.

HTTP headers worden gebruikt om de bevragingslimit naar de gebruiker te communiceren.

|HTTP header|Toelichting|
|-|-|
|`X-Rate-Limit-Limit`|Geeft aan hoeveel verzoeken een applicatie mag doen per tijdsperiode|
|`X-Rate-Limit-Remaining`|Geeft aan hoeveel verzoeken nog gedaan kunnen worden in de huidige tijdsperiode|
|`X-Rate-Limit-Reset`|Geeft aan hoeveel seconden over zijn in de huidige tijdsperiode|

> [API principe: Apply rate limiting](#api-44)

[[rfc6585]] introduceert een HTTP statuscode `429 Too Many Requests` die wordt gebruikt om het overschrijden van het aantal verzoeken te melden aan de gebruiker.

> [API principe: Provide rate limiting information](#api-45)