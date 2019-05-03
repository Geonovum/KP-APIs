## Foutafhandeling

<p class='warning'>Deze extensie is nog in ontwikkeling en kan elk moment wijzigen.</p>

Net als een webpagina een bruikbare foutmelding toont aan bezoekers als een fout optreedt, moet een API een bruikbare foutmelding in een bekend en verwerkbaar formaat teruggeven. De representatie van een fout is niet anders dan de representatie van een willekeurige resource alleen met een eigen set van velden.

De API moet altijd zinvolle HTTP statuscodes teruggeven. HTTP statuscodes zijn opgesplitst in twee categorieën:

- 400 reeks: voor inhoudelijke fouten
- 500 reeks: voor server problemen

Een JSON representatie van een fout moet een aantal zaken bevatten om een ontwikkelaar, beheerder en eindgebruiker te helpen:  

- Een uniek fouttype in de vorm van een URI die verwijst naar informatie in externe (HTML) documentatie;
- Een korte maar nuttig foutmelding;
- Een gedetailleerde beschrijving van de fout (die helpt bij het oplossen);
- Een unieke identificatie in de vorm van een URI die hoort bij het specifieke voorkomen van de fout (de fout-instantie). Het strekt de voorkeur om een URN te gebruiken waarmee alleen daartoe gerechtigde gebruikers details kunnen opzoeken in de fout-log.  

De basis voor deze standaardformaten is [[rfc7807]]. Een JSON-representatie van een fout ziet er als volgt uit:

```json
{
  "type": "URI: https://content.omgevingswet.overheid.nl/id/<c>[/{categorie}]/{fout}",
  "title": "Hier staat wat er is misgegaan",
  "status": 401,
  "detail": "Meer details over de fout staan hier",
  "instance": "urn:uuid:ebd2e7f0-1b27-11e8-accf-0ed5f89f718b" // De fout-instantie  
}
```

Validatiefouten voor `POST`, `PUT` en `PATCH` verzoeken worden per veld gespecificeerd. De volledige lijst met fouten wordt in één keer teruggegeven. Dit wordt opgezet met een vast hoofdniveau en foutcode voor validatiefouten en extra foutvelden met gedetailleerde fouten per veld.  

Dit ziet er dan als volgt uit:

```json
{
  "type": "https://content.omgevingswet.overheid.nl/id/<c>/ValidatieFout",
  "title": "Hier staat wat er is misgegaan…",
  "status": 400,
  "invalid-params": [{
    "type": "https://content.omgevingswet.overheid.nl/id/<c>/validatie/Voornaam",
    "name": "voornaam",
    "reason": "De voornaam mag geen speciale karakters bevatten."
  }, {
    "type": " https://content.../<c>/fouten/validatie/Wachtwoord",
    "name": "wachtwoord",
    "reason": "Het wachtwoord is verplicht."
  }],
  "instance": "urn:uuid:4017fabc-1b28-11e8-accf-0ed5f89f718b" // De fout-instantie
}
```

> [API principe: Foutafhandeling is gestandaardiseerd](#api-46)

### HTTP statuscodes

HTTP definieert een hele reeks gestandaardiseerde statuscodes die gebruikt dienen te worden door API's. Deze helpen de gebruikers van de API's bij het afhandelen van fouten.  

> [API principe: API's passen de verplichte HTTP statuscodes toe](#api-47)

Samenvatting HTTP-operaties in combinatie met de primaire HTTP statuscodes:

|Operatie|CRUD|Gehele collectie (bijvoorbeeld /resource)<br>Specifieke item (bijvoorbeeld `/resource/\<id>`)|
|-|-|-|
|`POST`|Create|201 (Created), HTTP header `Location` met de URI van de nieuwe resource (`/resource/\<id>`)<br>405 (Method Not Allowed), 409 (Conflict) als de resource al bestaat|
|`GET`|Read|200 (OK), lijst van resources. Gebruik pagineren, filteren en sorteren om het werken met grote lijsten te vereenvoudigen<br>200 (OK) enkele resource, 404 (Not Found) als ID niet bestaat of ongeldig is|
|`PUT`|Update|405 (Method Not Allowed), behalve als het de bedoeling is om elke resource in een collectie te wijzigen of vervangen<br>409 als een wijziging niet mogelijk is vanwege de huidige toestand van de instantie<br>200 (OK) of 204 (No Content), 404 (Not Found) als ID niet bestaat of ongeldig is|
|`PATCH`|Update|405 (Method Not Allowed), behalve als het de bedoeling is de gehele collectie te vervangen. <br>409 als een wijziging niet mogelijk is vanwege de huidige toestand van de instantie.<br>200 (OK) of 204 (No Content), 404 (Not Found) als ID niet bestaat of ongeldig is|
|`DELETE`|Delete|405 (Method Not Allowed), behalve als het de bedoeling is de gehele collectie te verwijderen<br>200 (OK) of 404 (Not Found) als ID niet bestaat of ongeldig is|

Hieronder een korte lijst met een beschrijving van de HTTP statuscodes die minimaal worden toegepast:

|HTTP statuscode|Toelichting|
|-|-|
|200 OK|Reactie op een succesvolle `GET`, `PUT`, patch of `DELETE`. Ook geschikt voor `POST` die niet resulteert in een creatie|
|201 Created|Reactie op een `POST` die resulteert in een creatie. Moet worden gecombineerd met een locatie-header die wijst naar de locatie van de nieuwe resource|
|204 No Content|Reactie op een succesvol verzoek die geen inhoud zal teruggeven (zoals een `DELETE`)|
|304 Not Modified|Gebruikt wanneer HTTP caching headers worden toegepast|
|400 Bad Request|Het verzoek is onjuist, bijvoorbeeld als het verzoek (body) niet kan worden geïnterpreteerd|
|401 Unauthorized|Als er geen of ongeldige authenticatie details worden verstrekt. Ook handig om een authenticatie-venster te tonen als de API wordt gebruikt vanuit een browser |
|403 Forbidden|Als de authenticatie gelukt is maar de geverifieerde gebruiker geen toegangsrechten heeft voor de resource|
|404 Not Found|Wanneer een niet-bestaande resource is opgevraagd |
|405 Method Not Allowed|Wanneer een HTTP-methode wordt gebruikt die niet is toegestaan voor de geauthentiseerde gebruiker|
|406 Not Acceptable|Wordt teruggegeven als het gevraagde formaat niet ondersteund wordt (onderdeel van content negotiation)|
|409 Conflict|Het verzoek kon ik niet worden verwerkt als het gevolg van een conflict met de huidige toestand van de resource|
|410 Gone|Geeft aan dat de resource niet langer op het eindpunt beschikbaar is. Nuttig als een overkoepelend antwoord voor oude API versies|
|412 Precondition Failed|De preconditie die wordt gegeven door één of meer velden in de request-header, ontbraken of zijn na validatie op de server afgekeurd|
|415 Unsupported Media Type|Als een verkeerd content-type als onderdeel van het verzoek werd meegegeven|
|422 Unprocessable Entity|Gebruikt voor een verzoek (body) dat correct is maar dat de server niet kan verwerken|
|429 Too Many Requests|Wanneer een aanvraag wordt afgewezen als het aantal verzoeken per tijdsperiode is overschreden|
|500 Internal Server Error|Wanneer een onverwachte fout optreedt en het beantwoorden van het verzoek wordt verhinderd|
|503 Service Unavailable|Wordt gebruikt als de API niet beschikbaar is (bijv. door gepland onderhoud)|
