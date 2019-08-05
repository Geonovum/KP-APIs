## API Beveiliging

<p class='warning'>Deze extensie is nog in ontwikkeling en kan elk moment wijzigen.</p>

API's zijn vanaf elke locatie vanaf het internet te benaderen. Om uitgewisselde informatie af te schermen wordt altijd gebruik gemaakt van een versleutelde verbinding op basis van TLS. Geen uitzonderingen, dus overal en altijd.

Doordat de verbinding altijd is versleuteld is het authenticatiemechanisme eenvoudiger. Hierdoor wordt het mogelijk om eenvoudige toegangstokens te gebruiken in plaats van toegangstokens met encryptie.

> [API principe: Encrypt connections using at least TLS v1.3](#api-11)

> [API principe: Allow access to an API only if an API key is provided](#api-12)

Voor meer informatie over beveiliging zie ook hoofdstuk 5.

### Authenticatie en autorisatie
Een REST API mag geen toestand (state) bijhouden. Dit betekent dat authenticatie en autorisatie van een verzoek niet mag afhangen van cookies of sessies. In plaats daarvan wordt elk verzoek voorzien van een token. Binnen het Kennisplatform APIs is gekozen voor OAuth 2.0 als de standaarden voor het autorisatiemechanisme waar dit nodig is, in hoofdstuk 5 is meer informatie te vinden over deze keuze en het gebruik van OAuth 2.0.

> [API principe: Accept tokens as HTTP headers only](#api-13)

Bij het gebruik van tokens wordt onderscheid gemaakt tussen geauthentiseerde en niet-geauthentiseerde services met de bijhorende headers:

|||
|-|-|
|Geauthentiseerd|`Authorization: Bearer <token>`|
|Niet-geauthentiseerd|`X-Api-Key: <api-key>`|

Bij het ontbreken van de juiste headers zijn geen authenticatiedetails beschikbaar en dient de statuscode `403 Forbidden` terug te worden gegeven.

> [API principe: Use OAuth 2.0 for authorisation](#api-14)

Zie ook [Het Nederlands profiel OAuth in het hoofdtuk beveiliging](#Beveiliging) voor een nadere uitwerking van de toepassing van OAuth.

> [API principe: Use PKIoverheid certificates for access-restricted or purpose-limited API authentication](#api-15)

#### Autorisatiefouten

In een productieomgeving is het wenselijk om voor het (kunnen) autoriseren zo min mogelijk informatie weg te geven. Met dit in het achterhoofd is het advies om voor statuscode `401 Unauthorized`, `403 Forbidden` en `404 Not Found`, de volgende regels te hanteren:

|Bestaat de resource?|Kan de autorisatie worden bepaald?|Geautoriseerd?|HTTP statuscode|
|-|-|-|-|
|Ja|Ja|Ja|`20x (200 OK)`|
|Ja|Ja|Nee|`401 Unauthorized`|
|Ja|Nee|?|`403 Forbidden`|
|Nee|Ja|Ja|`404 Not Found`|
|Nee|Ja|Nee|`403 Forbidden`|
|Nee|Nee|?|`403 Forbidden`|

Het idee van deze regels is dat eerst wordt bepaald of de aanroeper (principal) gerechtigd is voor een resource. Is het antwoord ‘nee' of kan dat niet worden bepaald, bijvoorbeeld omdat de resource nodig is om deze beslissing te kunnen nemen en de resource niet bestaat, dan wordt 403 Forbidden teruggegeven. Op deze manier wordt geen informatie teruggegeven over het al dan niet bestaan van een resource aan een niet-geautoriseerde principal.

Een bijkomend voordeel van de strategie om eerst te bepalen of er toegang is, meer ruimte biedt om de access control logica te scheiden van de business code.

#### Openbare identifiers

Openbaar zichtbare identifiers (ID's), zoals die veelal in URI's van RESTful API's voorkomen, zouden onderliggende mechanismen (zoals een nummergenerator) niet bloot moeten leggen en zeker geen zakelijke betekenis moeten hebben.

> **UUID**
>
> Het wordt aanbevolen om voor resources die een vertrouwelijk karakter hebben het concept van een UUID (Universally-Unique IDentifier) te gebruiken. Dit is een 16-bytes (128-bits) binaire representatie, weergegeven als een reeks van 32 hexadecimale cijfers, in vijf groepen gescheiden door koppeltekens en in totaal 36 tekens (32 alfanumerieke tekens plus vier afbreekstreepjes):
>
> `550e8400-e29b-41d4-a716-446655440000`
>
> Om te zorgen dat de UUID's korter en gegarandeerd "web-veilig" zijn, is het advies om alleen de base64-gecodeerde variant van 22 tekens te gebruiken. De bovenstaande UUID ziet er dan als volgt uit:
>
> `abcdEFh4520juieUKHWgJQ`

#### Blootstellen API-key

De API-key's die standaard worden uitgegeven zijn "unrestricted". Dat wil zeggen dat er geen gebruiksbeperkingen op zitten en ze niet blootgesteld mogen worden via een webapplicatie. Door API-key's zonder gebruiksbeperkingen toe te passen in JavaScript, is er een reële kans op misbruik en quotum-diefstal. Om dit te voorkomen dienen in dit geval zogenaamde "restricted" API-key's te worden uitgegeven en gebruikt.

> [API principe: Use *public* API-keys](#api-49)

#### CORS-policy

Webbrowsers implementeren een zogenaamde "same origin policy", een belangrijk beveiligingsconcept om te voorkomen dat verzoeken naar een ander domein gaan dan waarop het is aangeboden. Hoewel dit beleid effectief is in het voorkomen van aanroepen in verschillende domeinen, voorkomt het ook legitieme interactie tussen een API's en clients van een bekende en vertrouwde oorsprong.

> [API principe: Use CORS to control access](#api-50)