## Error handling

<p class='warning'>This extension is in development and may be modified at any time.</p>

Like a Web page displays useful error messages to visitors in case of an error, an API should return useful error message in a known and manageable format. The representation of an error is no different from the representation of a random resource, but with a particular set of fields.

APIs should always return useful HTTP status codes. HTTP status codes are divided in two categories:

- 400 range: content errors
- 500 range: internal server errors

A JSON representation of an error should contain a few details to assist developers, operators, and users:  

- A unique error type formulated as a URI pointing to further informtion in external (HTML) documentation;
- A short, but useful error message;
- A detailed description of the error (that assists in solving the issue);
- A unique identifier formulated as a URI point to the specific occurence of the error (the error instance). Preferably, the URN should only allow authorized users to search the error logs.  

The base for these default formats is [[rfc7807]]. A JSON-representation of an error is formulated like the following object:

```json
{
  "type": "URI: https://content.omgevingswet.overheid.nl/id/<c>[/{categorie}]/{fout}",
  "title": "Hier staat wat er is misgegaan",
  "status": 401,
  "detail": "Meer details over de fout staan hier",
  "instance": "urn:uuid:ebd2e7f0-1b27-11e8-accf-0ed5f89f718b" // The error instance  
}
```

Validation errors for `POST`, `PUT`, and `PATCH` requests are specified per field. The full list of errors is returned concurrently. The response consists of a fixed top level and error code for validation error and additional error fields with detailed errors per field:

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

> [API principle: Use default error handling](#api-46)

### HTTP status codes

HTTP defines a range of default status codes for APIs. These assist users to of the APIs to handle errors.  

> [API principle: Use the required HTTP status codes](#api-47)

Summary of HTTP operations and the primary HTTP status codes:

|Operation|CRUD|Full collection (e.g. `/resource`) <br/> specific item (e.g. `/resource/\<id>`)|
|-|-|-|
|`POST`|Create|201 (Created), HTTP header `Location` with the URI to the new resource (`/resource/\<id>`)<br>405 (Method Not Allowed), 409 (Conflict) in case the resource already exists|
|`GET`|Read|200 (OK), list of resources. Use paging, filtering and sorting to ease the handling of large collections<br>200 (OK) single resource, 404 (Not Found) if the ID does not exist or is invalid|
|`PUT`|Update|405 (Method Not Allowed), except for the purpose to modify or replace every resource in a collection<br>409 in case a modification is not possible due to the current state of an instance<br>200 (OK) or 204 (No Content), 404 (Not Found) if the ID does not exist or is invalid|
|`PATCH`|Update|405 (Method Not Allowed), except for the purpose to replace the full collection. <br>409 if a modification is not possible due to the current state of an instance.<br>200 (OK) or 204 (No Content), 404 (Not Found) if the ID does not exist or is invalid|
|`DELETE`|Delete|405 (Method Not Allowed), except for the purpose to remove the full collection.<br>200 (OK) or 404 (Not Found) if the ID does not exist or is invalid|

A short list and description of HTTP status codes:

|HTTP status code|Description|
|-|-|
|200 OK|Response to a successful `GET`, `PUT`, patch or `DELETE`. Also suitable for `POST` that does not result in a creation|
|201 Created|Response to a `POST` that results in a creation. Should be combined with a location header that points to the location of the newly created resource|
|204 No Content|Response to a successful request that does not return content (e.g. a `DELETE`)|
|304 Not Modified|If HTTP caching headers are applied|
|400 Bad Request|The request is invalid, e.g. in case the request (body) cannot be interpreted|
|401 Unauthorized|If no or invalid authentication credentials are supplied. Also useful to display an authentication window if the API is used in a Web browser|
|403 Forbidden|Response to a successful authentication, but the verified users is not authorised to access the resource|
|404 Not Found|Response to a request for a non-existing resource |
|405 Method Not Allowed|Response to an HTTP method that is not allowed for the authenticated user|
|406 Not Acceptable|Reponse to an unsupported format request (part of content negotiation)|
|409 Conflict|The request cannot be handled due to a conflict with the current state of the resource|
|410 Gone|Indicates the resource is no longer available at the requested endpoint. Useful top level response to requests for previous API versions|
|412 Precondition Failed|The preconditions supplied in one or more fields in the request header have been omitted or failed upon validation by the server|
|415 Unsupported Media Type|If the wrong content type is supplied as part of the request|
|422 Unprocessable Entity|Response to a request (body) that is correct but that cannot be handled by the server|
|429 Too Many Requests|Response if the rate limit has been exceeded.|
|500 Internal Server Error|If an unexpected error occured and server cannot respond.|
|503 Service Unavailable|If an API is not available (e.g. due to planned maintenance)|
