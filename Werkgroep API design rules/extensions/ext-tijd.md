## Time travelling

<p class='warning'>This extension is in development and may be modified at any time.</p>

Information about a resource may change over time. Time travelling is a default mechanism to request information about a specific moment in time is. From the perspective of time travelling using an API, there are three important moments in time:

|Moment in time|Description|
|-|-|
|Geldig|This is a moment in time on which the data returned is valid (*geldig*) in reality.|
|Beschikbaar|This is a moment in time on which the data returned is available (*beschikbaar*) using the same API.|
|In werking (getreden op)|This is a moment in time on which the data returned became legally effective (*in werking getreden op*).|

The base principle for time travelling is as follows:

* If no specific date is supplied, tehn the most recent, valid information is returned. If no valid versions exists yet, then the most recent known version is returned;
* If a specific date is supplied, it is passed as a a query parameter in the URI.
* Supplying a specific date, use the following query parameters respectively:
  * date on which the data is valid (geldigOp);
  * date on which the data are available (beschikbaarOp);
  * date on which the date became legally effectiven (inWerkingOp).

The values of these three query parameters in the URI are structured like this (based on RFC3339 / ISO 8601):

|Parameter|Value|
|-|-|
|`geldigOp`|`YYYY-MM-DD`|
|`beschikbaarOp`|`YYYY-MM-DDThh:mm:ss.s`|
|`inWerkingOp`|`YYYY-MM-DD`|

|Value|Description|
|-|-|
|`YYYY`|Four-digit year|
|`MM`|Two-digit month (01 = January, etc.)|
|`DD`|Two-digit day of the month (01 to 31)|
|`hh`|Two-digit hour (00 to 23) (am / pm not allowed)|
|`mm`|Two-digit minute (00 to 59)|
|`ss`|Two-digit second (00 to 59)|
|`s`|One or more digits to represent the decimal fraction of a second|

### Level of support

Time travelling is an optional mechanism with optional features. It may be that:

- time travelling is not supported at all;
- the notion *legally effective* is not supported;
- time travelling to the future is not supported.

Users have to be informed of the invalid/not-supported requests when processing time travelling requests:

|Not supported?|HTTP status code and explanation|
|-|-|
|Time travelling|`HTTP/1.1 403 Content-Type: application/problem+json Content-Language: nl { "type": ".../id/<c>/parameter/TijdreizenNietOndersteund", "title": "{Het verzoek is begrepen, maar de tijdreisparameters worden niet ondersteund}", "status": 403, "detail": "{Tijdreizen wordt niet ondersteund, verwijder alle tijdreisparameters}", "instance": "/resource/#id"}`|
|Legally effective|`HTTP/1.1 403 Content-Type: application/problem+json Content-Language: nl { "type":".../id/<c>/parameter/InWerkingTredingNietOndersteund’", "title": "{Het verzoek is begrepen, maar de tijdreisparameter ‘inWerkingOp’ wordt niet ondersteund}", "status": 403, "detail": "{Tijdreizen met een inwerkingstredingsmoment wordt niet ondersteund, verwijder de parameter ‘inWerkingOp’}", "instance": "/resource/#id"}`|
|Future|`HTTP/1.1 403 Content-Type: application/problem+json Content-Language: nl { "type": ".../id/<c>/parameter/ToekomstNietOndersteund", "title": "{Het verzoek is begrepen, maar tijdreisparameters mogen geen tijdstip in de toekomst bevatten” }", "status": 403, "detail": "{Tijdreizen naar de toekomst wordt niet ondersteund, verwijder de tijdreisparameters of gebruik een tijdstip in het verleden}", "instance": "/resource/#id"}`|

### Robustness

Users have to be informed of the lack of historical data and general requests in a resource collection when processing time travelling requests:

|Request|HTTP status code and explanation|
|-|-|
|Specific resource|`HTTP/1.1 404 Content-Type: application/problem+json Content-Language: nl {"type": ".../id/<c>/BestaatNiet", "title": "De gevraagde versie bestaat niet.", "status": 404, "detail": "Versie 2017-01-01 van regeling 123 bestaat niet.", "instance": "/regelingen/v1/123?geldigOp=2017-01-01"}`|
|Resource-collectie|`GET .../regelingen/v1?beschikbaarOp=2017-01-01T00:00:00 HTTP/1.1 200 Content-Type: application/json+hal {"_links": {"self": {"href": "/r-n/v1/123?beschikbaarOp=2017-01-01T00:00:00" }, "items": [ { "href": "/r-n/v1/123?beschikbaarOp=2017-01-01T00:00:00" }, { "href": "/r-n/v1/456?beschikbaarOp=2017-01-01T00:00:00" }, { "href": "/r-n/v1/789?beschikbaarOp=2017-01-01T00:00:00" }] } }`|