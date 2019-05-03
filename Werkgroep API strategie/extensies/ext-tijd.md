## Tijdreizen

<p class='warning'>Deze extensie is nog in ontwikkeling en kan elk moment wijzigen.</p>

Informatie over een resource is onderhevig aan verandering. Tijdreizen is een mechanisme waarmee het mogelijk is om op standaard manier informatie op te vragen over een bepaald moment in de tijd. De drie belangrijkste tijdsmomenten vanuit het perspectief van tijdreizen via een API zijn:

|Tijdsmoment|Omschrijving|
|-|-|
|Geldig|Dit is een tijdstip waarop de teruggegeven gegevens in de werkelijkheid geldig zijn.|
|Beschikbaar|Dit is een tijdstip waarop geldt dat de teruggegeven gegevens beschikbaar waren via dezelfde API.|
|In werking (getreden op)|Dit is een tijdstip waarop een besluit (of delen daarvan), dan wel de daarvan afgeleide gegevens (zoals de definitie van een begrip) juridische werking krijgt.|

Het basisprincipe voor het tijdreizen is daarbij als volgt:

* Indien er geen specifieke datum wordt meegegeven, dan wordt de meest actueel geldige informatie teruggegeven, zoals gebruikelijk op het internet. Indien er nog geen enkele geldige versie bestaat, dan wordt de meest actueel bekende versie teruggegeven;
* Indien een specifieke datum wordt meegegeven, wordt deze meegegeven als query-parameter die onderdeel is van de URI.
* Bij het opgeven van een specifieke datum wordt onderscheid gemaakt tussen:
  * welke gegevens op die datum geldig waren(geldigOp);
  * welke gegevens op die datum beschikbaar waren (beschikbaarOp);
  * welke regels op die datum juridisch in werking waren getreden (inWerkingOp).

De waarden van de drie query-parameters in de URI zijn als volgt opgebouwd (gebaseerd op RFC3339 / ISO 8601):

|Parameter|Waarde|
|-|-|
|`geldigOp`|`YYYY-MM-DD`|
|`beschikbaarOp`|`YYYY-MM-DDThh:mm:ss.s`|
|`inWerkingOp`|`YYYY-MM-DD`|

|Waarde|Betekenis|
|-|-|
|`YYYY`|Viercijferig jaar|
|`MM`|Tweecijferige maand (01 = januari, enz.)|
|`DD`|Tweecijferige dag van de maand (01 tot en met 31)|
|`hh`|Twee cijfers van het uur (00 tot 23) (am / pm niet toegestaan)|
|`mm`|Twee cijfers van de minuut (00 tot en met 59)|
|`ss`|twee cijfers van de seconden (00 tot en met 59)|
|`s`|Eén of meer cijfers die een decimale fractie van een seconde vertegenwoordigen|

### Mate van ondersteuning

Tijdreizen is een optioneel mechanisme met optionele features. Het kan dus voorkomen dat:

- tijdreizen in het geheel niet wordt ondersteund;
- het begrip inwerkingtreding niet wordt ondersteund;
- tijdreizen naar de toekomst niet wordt ondersteund.

Bij de verwerking van tijdreisvragen dient de afnemer geïnformeerd te worden over ongeldige/niet ondersteunde verzoeken. In de volgende specifieke gevallen wordt de bijbehorende statuscode en toelichting teruggegeven:

|Wat wordt niet ondersteund?|HTTP statuscode en toelichting|
|-|-|
|Tijdreizen|`HTTP/1.1 403 Content-Type: application/problem+json Content-Language: nl { "type": ".../id/<c>/parameter/TijdreizenNietOndersteund", "title": "{Het verzoek is begrepen, maar de tijdreisparameters worden niet ondersteund}", "status": 403, "detail": "{Tijdreizen wordt niet ondersteund, verwijder alle tijdreisparameters}", "instance": "/resource/#id"}`|
|Inwerkingtreding|`HTTP/1.1 403 Content-Type: application/problem+json Content-Language: nl { "type":".../id/<c>/parameter/InWerkingTredingNietOndersteund’", "title": "{Het verzoek is begrepen, maar de tijdreisparameter ‘inWerkingOp’ wordt niet ondersteund}", "status": 403, "detail": "{Tijdreizen met een inwerkingstredingsmoment wordt niet ondersteund, verwijder de parameter ‘inWerkingOp’}", "instance": "/resource/#id"}`|
|Toekomst|`HTTP/1.1 403 Content-Type: application/problem+json Content-Language: nl { "type": ".../id/<c>/parameter/ToekomstNietOndersteund", "title": "{Het verzoek is begrepen, maar tijdreisparameters mogen geen tijdstip in de toekomst bevatten” }", "status": 403, "detail": "{Tijdreizen naar de toekomst wordt niet ondersteund, verwijder de tijdreisparameters of gebruik een tijdstip in het verleden}", "instance": "/resource/#id"}`|

### Robuustheid

Bij de verwerking van tijdreisvragen dient ook rekening te worden gehouden met het ontbreken van historie en globale vragen in een resource-collectie. In volgende specifieke gevallen wordt de bijbehorende statuscode en toelichting teruggegeven:

|Soort verzoek|HTTP statuscode en toelichting|
|-|-|
|Specifieke resource|`HTTP/1.1 404 Content-Type: application/problem+json Content-Language: nl {"type": ".../id/<c>/BestaatNiet", "title": "De gevraagde versie bestaat niet.", "status": 404, "detail": "Versie 2017-01-01 van regeling 123 bestaat niet.", "instance": "/regelingen/v1/123?geldigOp=2017-01-01"}`|
|Resource-collectie|`GET .../regelingen/v1?beschikbaarOp=2017-01-01T00:00:00 HTTP/1.1 200 Content-Type: application/json+hal {"_links": {"self": {"href": "/r-n/v1/123?beschikbaarOp=2017-01-01T00:00:00" }, "items": [ { "href": "/r-n/v1/123?beschikbaarOp=2017-01-01T00:00:00" }, { "href": "/r-n/v1/456?beschikbaarOp=2017-01-01T00:00:00" }, { "href": "/r-n/v1/789?beschikbaarOp=2017-01-01T00:00:00" }] } }`|