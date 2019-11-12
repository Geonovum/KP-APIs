
## **Normative API Principles**

<aside class="note">
API principles have unique numbers, depricated principles are removed from the list, new principles
will get a new and higher nunmber. Thus gaps in the sequence can occur 
</aside>

<!-- ## <a name="api-principes"></a>API Principles -->

### <a name="api-01"></a>API-01: Operations are *Safe* and/or *Idempotent*
Operations of an API are guaranteed to be *safe* and/or *idempotent* if that has
been specified.

### <a name="api-02"></a>API-02: Do not maintain state information at the server

The client state is tracked fully at the client.

### <a name="api-03"></a>API-03: Only apply default HTTP operations

A RESTful API is an application programming interface that supports the default
HTTP operations GET, PUT, POST, PATCH and DELETE.

### <a name="api-04"></a>API-04: Define interfaces in Dutch unless there is an official English glossary

Define resources and the underlying entities, fields and so on (the information
model ad the external interface) in Dutch. English is allowed in case there is
an official English glossary.

### <a name="api-05"></a>API-05: Use plural nouns to indicate resources

Names of resources are nouns and always in the plural form, e.g. *aanvragen* ,
*activiteiten*, *vergunningen*, even when it applies to single resources.

### <a name="api-06"></a>API-06: Create relations of nested resources within the endpoint

Preferrably, create relation within the endpoint if a relation can only exist
with another resource (nested resource). In that case, the dependent resource
does not have its own endpoint.

### <a name="api-09"></a>API-09: Implement custom representation if supported

Provide a comma-separated list of field names using the query parameter `fields`
te retrieve a custom representation. In case non-existent field names are
passed, a 400 Bad Request error message is returned.

### <a name="api-10"></a>API-10: Implement operations that do not fit the CRUD model as sub-resources

"Operations that do not fit the CRUD model are implemented as follows:

-   Treat an operation as a sub-resource.

-   Only in exceptional cases, an operator is implemented as an endpoint."

<!-- ### <a name="api-11"></a>API-11: Encrypt connections using at least TLS v1.3
Encrypt connections using at least TLS v1.3. Use TLS v1.2 as a fall-back option
only. In case of access restrictions use two-way TLD. Since the connection is
always encrypted, the authentication method is straightforward. This allows the
application of basic authentication tokens instead of encrypted authentication
tokens.
-->

<!-- ### <a name="api-12"></a>API-12: Allow access to an API only if an API key is provided

Preferrably, APIs should require at least a sign-up process that involves
accepting its fair use policy before an API key is issued.
-->

<!-- ### <a name="api-13"></a>API-13: Accept tokens as HTTP headers only

There is an inherent security issue when passing tokens as a query parameter,
because most Web servers store query parameters in the server logs.
-->

<!-- ### <a name="api-14"></a>API-14: Use OAuth 2.0 for authorisation

A RESTful API should not maintain state. A token has to be sent for each
request. OAuth 2.0 is the recommended standard. Chapter *Beveiliging* contains
further information.
-->

<!-- ### <a name="api-15"></a>API-15: Use PKIoverheid certificates for access-restricted or purpose-limited API authentication

In the case of APIs that have access-restrictions or purpose-limitations,
additional authentication based on PKIoverheid certificates and mutual TLS
authentication should be provided.
-->

### <a name="api-16"></a>API-16: Use OAS 3.0 for documentation

Publish specifications (documentation) as Open API Specification (OAS) 3.0 or
higher.

### <a name="api-17"></a>API-17: Publish documentation in Dutch unless there is existing documentation in English or there is an official English glossary available

Publish API documentation in Dutch. You may refer to existing documentation in
Engelish and in case there is an official English glossary avaialble.

### <a name="api-18"></a>API-18: Include a deprecation schedule when publishing API changes

API changes and a deprecation schedule should be published not only as a
changelog on a publicly available blog but also through a mailing list.

### <a name="api-19"></a>API-19: Allow for a maximum 1 year transition period to a new API version

Old and new versions (maximum 3) of an API should be provided concurrently for a
limited, maximum 1 year transition period.

### <a name="api-20"></a>API-20: Include the major version number only in ihe URI

The URI of an API should include the major version number only. The minor and
patch version numbers are in the response header of the message. Minor and patch
versions have no impact on existing code, but major version do.

<!-- ### <a name="api-21"></a>API-21: Inform users of a deprecated API actively

Using the `Warning` response header in all responses of the deprecated APIs,
users are informed of the deprecation and upcoming removal date.
-->

<!-- ### <a name="api-22"></a>API-22: JSON first - APIs receive and send JSON

APIs receive and send JSON.
-->

<!-- ### <a name="api-23"></a>API-23: APIs may provide a JSON Schema

APIs may support JSON Schema (<http://json-schema.org)> to allow and facilitate
validation.
-->

<!-- ### <a name="api-24"></a>API-24: Support content negotiation

Besides JSON, APIs should support other representations as XML and RDF using the
default HTTP content negotiation mechanism. In case the requested format cannot
be provided, a `406 ot Acceptable` response is sent.
-->

<!-- ### <a name="api-25"></a>API-25: Check the Content-Type header settings

Check the `Content-Type` header is `application/json` or another supported
content types, otherwise send the HTTP status code `415 Unsupported Media Type`.
-->

<!-- ### <a name="api-26"></a>API-26: Define field names in in *camelCase*

Define field names in a such a way that the first word starts with a lower case
and subsequent words start with a capital letter, with no intervening spaces or
punctiation.
-->

<!-- ### <a name="api-27"></a>API-27: Disable pretty print

The assumption is that REST clients and Web browsers (either with or without
add-ons or extensions) can pretty print JSON.
-->

<!-- ### <a name="api-28"></a>API-28: Send a JSON-response without enclosing envelope

By default, don't apply an envelope.
-->

<!-- ### <a name="api-29"></a>API-29: Support JSON-encoded `POST`, `PUT`, and `PATCH` payloads

APIs support at least JSON-encoded `POST`, `PUT`, and `PATCH` payloads. Encoded
form data (`application/x-www-form-urlencoded`) is not supported.
-->

<!-- ### <a name="api-30"></a>API-30: Use query parameters corresponding to the queryable fields

Use uniqe query parameters that correspond to the fields that can be queried.
-->

<!-- ### <a name="api-31"></a>API-31: Use the query parameter `sorteer` to sort

Specify the comma-separated field to sort using the generic query parameter
`sorteer`. Placing a minus sign (`-`) in front of a field name, the field is
sorted in descending order.
-->

<!-- ### <a name="api-32"></a>API-32: Use the query parameter `zoek` for full-text search

APIs support full-text searching using the query parameter `zoek`.
-->

<!-- ### <a name="api-33"></a>API-33: Support both `*` and `?` wildcard characters for full-text search APIs

Full-text search APIs should support two wildcard characters:

-   `*` Matches zero or more (non-space) characters

-   `?` Matches exactly one (non-space) character
-->

<!-- ### <a name="api-34"></a>API-34: Support GeoJSON for GEO APIs

Preferrably, GEO APIs should support the GeoJSON standard
([RFC-7946](https://tools.ietf.org/html/rfc7946)).
-->

<!-- ### <a name="api-35"></a>API-35: Include GeoJSON as part of the embedded resource in the JSON response

In case a JSON (`application/json`) response contains a geometry, represent it
in the same way as the `geometry` object of GeoJSON
([RFC-7946](https://tools.ietf.org/html/rfc7946)):

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
{
  "type": "Point",
  "coordinates": [125.6, 10.1]
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-->

<!-- ### <a name="api-36"></a>API-36: Provide a `POST` endpoint for GEO queries

Spatial queries are sent in a `POST` to a dedicated endpoint.
-->

<!-- ### <a name="api-37"></a>API-37: Support mixed queries at `POST` endpoints

Mixed queries may include both spatial and property queries.
-->

<!-- ### <a name="api-38"></a>API-38: Put results of a global spatial query in the relevant geometric context

In case of a global query `/api/v1/_zoek`, results should be placed in the
relevant geometric context, because results from different collections are
retrieved. Express the name of the collection to which the results belongs in
the singular form using the property `type`.
-->

<!-- ### <a name="api-39"></a>API-39: Use ETRS89 as the preferred coordinate reference system (CRS)

General usage of the European ETRS89 coordinate reference system (CRS) is
preferable, but is not necessarily the default CRS. Hence, the CRS has to be
explicitly included in each request.
-->

<!-- ### <a name="api-40"></a>API-40: Pass the coordinate reference system (CRS) of the request and the response in the headers

The coordinate reference system (CRS) for both the request and the response are
passed as part of the request headers and reponse headers. In case this header
is missing, send the HTTP status code `412 Precondition Failed`.
-->

<!-- ### <a name="api-41"></a>API-41: Use content negotiation to serve different CRSs

The CRS for the geometry in the response body is defined using the `Accept-Crs`
header. In case the API does not support the requested CRS, send the HTTP status
code `406 Not Acceptable`.
-->

<!-- ### <a name="api-42"></a>API-42: Use JSON+HAL with media type `application/hal+json` for pagination

Add two reserved fields `_links` (required) and `_embedded` (optional) to the
representation. Pass pagination meta data as HTTP headers.
-->

<!-- ### <a name="api-43"></a>API-43: Apply caching to improve performance

For caching apply the default HTTP caching mechanisms using a few additional
HTTP headers (`ETag` or `Last-Modified`) and functionality to determine wether
a few specific HTTP headers are supplied (`If-None-Match` or
`If-Modified-Since`).
-->

<!-- ### <a name="api-44"></a>API-44: Apply rate limiting

To prevent server overload and to guarantee a high service level, apply rate
limiting to API requests.
-->

<!-- ### <a name="api-45"></a>API-45: Provide rate limiting information

Use the HTTP header `X-Rate-Limit` to inform users of rate limits. In case the
rate limits are exceeded, send the HTTP status code `429 Too Many Requests`.
-->

<!-- ### <a name="api-46"></a>API-46: Use default error handling

API support the default error messages of the HTTP 400 and 500 status code
ranges, including the parsable JSON representation
([RFC-7807](https://tools.ietf.org/html/rfc7807)).
-->

<!-- ### <a name="api-47"></a>API-47: Use the required HTTP status codes

APIs should at least support the following HTTP status codes: 200, 201, 204,
304, 400, 401, 403, 404, 405, 406, 409, 410, 415, 422, 429, 500, and 503.
-->

### <a name="api-48"></a>API-48: Leave off trailing slashes from API endpoints

URIs to retrieve collections of resources or individual resources don't include
a trailing slash. A resource is only available at one endpoint/path. Resource
paths end without a slash.

<!-- ### <a name="api-49"></a>API-49: Use *public* API-keys

In JavaScript, only use *restricted* API-keys, linked to specific
characteristics of the client-application (web application or mobile
application), e.g. a clientId and/or referring URL.
-->

<!-- ### <a name="api-50"></a>API-50: Use CORS to control access

Check the domain of the incoming request and generate the response header
depending on whether this domain may send requests or not (whitelist). In that
case, only add this particular domain to the response header
`Access-Control-Allow-Origin`.

\*\*NOTE: It is technically possible to pass a wildcard ("\*") in the response
header `Access-Control-Allow-Origin` to allow all sources. However, this is
malpractice!\*\*
-->


### <a name="api-51"></a>API-51: Publish OAS at the base-URI in JSON-format

Publish up-to-date documentation in the Open API Specification (OAS) at the
publicly accessible root endpoint of the API in JSON format:

`https://service.omgevingswet.overheid.nl/publiek/catalogus/api/raadplegen/v1`

Makes the OAS relevant to v1 of the API available.

Thus, the up-to-date documentation is linked to a unique location (that is
always concurrent with the features available in the API).