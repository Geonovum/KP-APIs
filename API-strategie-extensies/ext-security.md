## Security

<p class='warning'>This extension is in development and may be modified at any time.</p>

### Introduction
This section describes security principles, concepts and technologies to apply when working with APIs. Controls need to be applied for the security objectives of integrity, confidentiality and availability of the API and services and data provided thereby.

The scope of this section is limited to generic security controls that directly influence the visible parts of an API. Effectively, only security standards directly applicable to interactions are discussed here.
In order to meet the complete security objectives, every implementer MUST also apply a range of controls not mentioned in this section.

Note: security controls for signing and encrypting of application level messages will be part of a separate extension, [Signing and Encryption](#signing-and-encryption).

### Transport security
APIs can be accessed from any location on the internet. Information is only exchanged over TLS-based encrypted connections. No exceptions, so everywhere and always. One should follow [the latest NCSC guidelines for TLS](https://www.ncsc.nl/documenten/publicaties/2019/mei/01/ict-beveiligingsrichtlijnen-voor-transport-layer-security-tls)

<div class="rule" id="api-11">
  <p class="rulelab"><strong>API-11</strong>: Encrypt connections using TLS</p>
  <p>Encrypt connections using TLS following the latest NCSC guidelines [[NCSC.TLS]].</p>
  <p>Since the connection is always encrypted, the authentication method is straightforward. This allows the application of basic authentication tokens instead of encrypted authentication tokens.</p>
</div>

### API usage patterns
Because security is about compromises one should first be aware of what usage patterns need to be supported.

#### Session based API access pattern
While this method is sometimes considered legacy it is in common use. Typical characteristics are:
* The access to the API is strictly bound to a end user session
* The session ends when the end user logs out
* The end users credentials are exchanged for a token, usually stored in a cookie
* tokens have a limited lifetime
* tokens are no longer valid when the end user logs out

In most cases the tokens used are a reference to session data. Retrieving session data can be expensive in particular when microservices are used. The obvious solution to this problem is caching and the choice you have to make is how and when you invalidate cache entries. You typically want the cash entry related to a session to be invalidated when the end user logs out of the application.

One important thing to consider in this pattern is that the token represents the identity of the end user. Anyone or anything in possession of this token has the same permissions as the end user within the same security domain. This is breaking the least privilege principle.

Because this pattern is more a standard web application pattern we refer to [the latest NCSC guidelines on the subject of web application security](https://www.ncsc.nl/documenten/publicaties/2019/mei/01/ict-beveiligingsrichtlijnen-voor-webapplicaties) for security considerations.

We consider this method to be outside the scope of this document and refer to the aforementioned NCSC document. for security considerations.

#### mTLS or Client Certificate based API access pattern
As of this writing, this method is to be included in an upcoming release of the Open API specification. It is however widely used for both end user, B2B and a2a patterns.

The important thing to remember when using certificates is that the certificate only identifies the requester. During authentication we typically do a lookup of some subject information in an identity store to retrieve the requesters permissions. In PKIOverheid certificates we typically use the subject.serialNumber for this purpose.
The problem here is that the identity identified by the certificate may have significantly more permissions than required by the client doing the request. This is breaking the least privilege principle.

Another use case for the use of Client certificates is in the world of microservices where we want to control access to services. Terms used are zero trust, micro segmentation and service mesh. Proposed standards are [SPIFFE](https://spiffe.io). The proposed standard is not limited to the use of Client certificates but also describes the use of JWT's. This topic is outside the scope of this document.

#### OAuth 2.0 token based API access pattern
The important thing to remember about OAuth is its intended use. In Oauth the end user grants permissions to a client to access resources on its behalf. This grant is stored at the authorization server. After permissions are granted the client can perform its duties with or without the presence of an end user. To deny the client access to the end users resources, the end user MUST remove the grant at the authorization Server.

While both the end user and the client need to identify themselves OAuth typically does not use sessions or support logout. Its sole purpose is solving the problem of authorizing a client with the least amount of privileges required.

OAuth is usually extended with OpenID Connect or OIDC. OIDC adds identity and identity federation.

When using OAuth within the Dutch Government sector, you are required to use [the OAuth 2.0 profile for the Dutch Government](https://docs.geostandaarden.nl/api/oauth/). In the security section you will find security considerations using the OAuth 2.0 profile for the Dutch Government.

The flow described here is what is known as the Authorization Code Grant. This is currently the only Grant type supported by the Dutch OAuth 2.0 profile.

#### JWT based API access pattern
To the resource server, serving the API, this method appears identical to the OAuth 2.0 based API access pattern because we use JWT access tokens in the Dutch Government OAuth 2.0 profile. In this pattern the resource server MUST completely rely on the information provided in the JWT. It has no notion of an end user session, client grant[??]. It performs the requested action based on the request and the provided token for as long as the token is valid.

### Identification

**End Users and Organizations**
For Identification of individual users use a pseudonym when possible to avoid exposing sensitive information about a user.
This pseudonym can optionally be translatable to actual personal information in a separate service, but access to this service should be tightly controlled and limited only to cases where there is a legal need to use this information.

Use of a Burger Service Number (BSN) is only allowed when the organization has permission to do so. Even when an organization has permission to use BSN's it is still recommended to use a pseudonym that is only translatable to a BSN for a limited number of services/users within the organization.
An example of this can be found in the [architecture of the "digitaalstelsel omgevingswet"](https://aandeslagmetdeomgevingswet.nl/publish/library/219/dso_-_gas_-_knooppunt_toegang_iam.pdf)

For identifying government organizations use the "organisatie-identificatienummer" (OIN)
For identifying non-government organizations (companies, associations, foundations etc...) use the Handelsregisternummer (HRN)
These are used in the PKIOverheid and e-Herkenning context. See https://www.logius.nl/diensten/oin for more information on these identifiers.
OINs can be queried using the COR API https://portaal.digikoppeling.nl/registers/corApi/index
HRNs are derived from the KvKNummer which can be queried in the "Handels register" https://developers.kvk.nl/documentation/search-v2

In the EU context use the eIDAS legal identifier. for more information see https://ec.europa.eu/digital-single-market/en/trust-services-and-eid

**Clients**
When using authorization servers, the authorization server issues the registered client a client identifier - a unique string representing the registration information provided by the client. The client identifier is not a secret; it is exposed to the resource owner and MUST NOT be used alone for client authentication. The client identifier is unique to the authorization server.

Authorization servers SHOULD NOT allow clients to choose or influence their client_id value.

### Authentication
Authentication determines whether individuals and applications accessing APIs are really who they say they are. In the context of APIs, authentication is applicable to the *End-User*, i.e. the individual on behalf of whom API resources are being accessed, and to the *Client*, i.e. the application that accesses the API resources on behalf of the end-user.

#### End-User authentication
In most Use Cases that involve API interaction, authenticating the End-User on behalf of whom the API resources are accessed is required. End-User authentication is not required in situations where the API Client is solely accessing API resources on behalf of itself, without requiring an End-User context, but may be used nevertheless.

The following methods can be used for End-User authentication:

**SAML**
SAML is a standard for securely communicating assertions about an authenticated End-User from the Identity Provider to the Service Provider. Although it existed before APIs became mainstream and is not aimed at API authentication specifically, communicating Access Tokens that can be used to access API resources in the exchanged assertions is possible.

[SAML 2.0 is included on the list of required standards by Forum Standaardisatie](https://forumstandaardisatie.nl/open-standaarden/saml). It is expected, however, that the following standards will become preferred over SAML in Use Cases that involve access to API resources.

**OAuth**
Although technically an authorization method, OAuth[[OAuth2]] is used for End-Users authenticating themselves and providing the Client with an Access Token upon successful End-User (and Client) authentication. This Access Token can be used to make authorized API requests. Using OAuth is appropriate when the Client does not need to know the identity of the authenticated End-User.

A Dutch OAuth 2.0 Assurance profile is included on the list of required standards by Forum Standaardisatie. The latest version of the profile can be found at https://publicatie.centrumvoorstandaarden.nl/api/oauth/.

**OpenID Connect**
OpenID Connect[[OpenID.Core]] adds an identity layer on top of OAuth, making it into an actual authentication method. It enables API Clients to verify the identity of authenticated End-Users and to obtain profile information about the End-User.

A Dutch OpenID Connect Assurance profile is currently being drafted. It is expected to be added to the list of required standards by Forum Standaardisatie. The latest version of the profile can be found at https://logius.gitlab.io/oidc/.

**Out of band**
For some Use Cases it may be appropriate to distribute Access Tokens using an Out of band authentication method. Out of band authentication is generally appropriate when API resources are accessed via an application that already provides an authentication method. Based on an End-User authentication performed, the application subsequently requests an Access Token for API access from the Identity Provider via a secure channel.

Depending on the technology used by the applications accessing the API the Access Token may technically be communicated using a secure cookie. This however limits the technologies used to create client applications.

Using sessions and secure cookies is outside the scope of this document. For security considerations please refer to [the latest NCSC guidelines on the subject of web application security](https://www.ncsc.nl/documenten/publicaties/2019/mei/01/ict-beveiligingsrichtlijnen-voor-webapplicaties).

#### Client authentication
Authenticating the Client application that accesses API resources, being it on behalf of an End-User or in a system-to-system setting, is required when possible. Also, although listed separately, the aforementioned methods for End-User authentication require Client authentication.

It is RECOMMENDED to use asymmetric (public-key based) methods for client authentication such as mTLS [RFC8705](https://www.rfc-editor.org/info/rfc8705) or "private_key_jwt" [OpenID](https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication).

[The OAuth 2.0 profile for the Dutch Government](https://docs.geostandaarden.nl/api/oauth/) REQUIRES the use of private_key_jwt for full clients, native clients with dynamically registered keys, and direct access clients as mentioned in this profile.

The authorization server MUST require the use of TLS when sending requests using password authentication.

Since this client authentication method involves a password, the authorization server MUST protect any endpoint utilizing it against brute force attacks.

The following methods can be used for Client authentication.

<p class='warning'>De zin hieronder is een suggestie van Jaron, die conflicteerd mogelijk met de aanvulling van Martin</p>

Note that Client authentication using HTTP Basic authentication or communicating client credentials in the request body are prone to credential theft and therefore not recommended and not listed as options below.



**Mutual TLS authentication (mTLS)**
Mutual TLS authentication [RFC8705](https://www.rfc-editor.org/info/rfc8705), is a feature of TLS with which the Client authenticates itself to the Server using its X.509 certificate. mTLS provides a strong Client authentication for server-based Clients and cannot be used with Native or User-Agent-based Clients that are not backed with a server.

In contexts where Dutch (semi) governmental organizations are involved, the X.509 certificate used for Client authentication MUST be a PKIOverheid certificate. These are x509 certificates derived from a root certificate owned by the Dutch Government. for more information on PKIOverheid see https://www.logius.nl/diensten/pkioverheid.

In the API context, only Server or Services certificates should be used as these include an OIN/HRN for identification; Extended Validation certificates (as used for websites) do not include this identifier and are therefore not suitable to use with APIs.

**Private key JWT**
With Private key JWT authentication [OpenID](https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication), the Client registers a public key with the Server and accompanies every API request with a JWT signed using this key. This Client Authentication method is part of the OAuth 2.0 and OpenID Connect standards for Clients authenticating to the token endpoint, but the use of Private key JWT Client authentication is not limited to these Use Cases.

This authentication method may be used with Clients that are able to securely store private keys and sign JWT's with this key.

In contexts where Dutch (semi) governmental organizations are involved, the certificate used for signing the Private key JWT's MUST be a PKIOverheid certificate.

[The OAuth 2.0 profile for the Dutch Government](https://publicatie.centrumvoorstandaarden.nl/api/oauth/) REQUIRES the use of private_key_jwt for full clients, native clients with dynamically registered keys, and direct access clients as mentioned in this profile.


<p class='warning'>hieronder volgen eerst twee authenticatie methode toevoegingen van Jaron, daarna twee van Martin</p>

**Client Credentials using OAuth 2.0**
In Use Cases where the Client is solely accessing API resources on behalf of itself, without requiring an End-User context, Client authentication using the OAuth 2.0 Client Credentials grant type can be appropriate. In such cases, the Server securely communicates Client credentials to the Client upon registration (e.g. via an API Developer portal) and the Client uses these credentials to obtain an Access Token from the Identity provider.

**Client authentication and Public clients**
In Use Cases that involve Native and User-Agent based Clients, strong Client authentication is generally not possible. Whereas it may be possible for individual Clients to implement a decent means of Client authentication (e.g. by using the Web Crypto API in User-Agent based Clients), the Server cannot make any assumptions about the confidentiality of credentials exchanged with such Clients.

When dealing with Use Cases involving Native and User-Agent based Clients, the policies and standards described in [Section 4.4](#security-for-webbrowser-api-clients) should be followed, as well as best practices [[OAuth2.Browser-Based-Apps]] and [[RFC8252]], which are defined for use with OAuth but may be applicable for API communication in general.

**Client Password**
Clients in possession of a client password, also known as a client secret, MAY use the HTTP Basic authentication scheme as defined in [RFC2617](https://www.rfc-editor.org/info/rfc2617) to authenticate with the authorization server. The client identifier is encoded using the application/x-www-form-urlencoded encoding algorithm, and the encoded value is used as the username; the client secret is encoded using the same algorithm and used as the password. The authorization server MUST support the HTTP Basic authentication scheme for authenticating clients that were issued a client secret.

Alternatively, the authorization server MAY support including the client credentials in the request-body using the following parameters:

||||
|-|-|-|
|client_id:|REQUIRED|The client identifier issued to the client during the registration process|
|client_secret:|REQUIRED|The client secret|

Including the client credentials in the request-body using the two parameters is NOT RECOMMENDED and SHOULD be limited to clients unable to directly utilize the HTTP Basic authentication scheme (or other password-based HTTP authentication schemes). The parameters can only be transmitted in the request-body and MUST NOT be included in the request URI.

**Other Authentication Methods**
The authorization server MAY support any suitable authentication scheme matching its security requirements. When using other authentication methods, the authorization server MUST define a mapping between the client identifier (registration record) and authentication scheme.

Some additional authentication methods are defined in the [OAuth Token Endpoint Authentication Methods](https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml#token-endpoint-auth-method) registry, and may be useful as generic client authentication methods beyond the specific use of protecting the token endpoint.

### Authorization

It is RECOMMENDED to use token-based access to APIs. REST APIs should not maintain session state on the server. The authentication and authorization of a request should not depend on sessions. Instead, a token has to be sent for each request.

<div class="rule" id="api-13">
  <p class="rulelab"><strong>API-13</strong>: Accept tokens as HTTP headers only</p>
  <p>There is an inherent security issue when passing tokens as a query parameter, because most Web servers store query parameters in the server logs.</p>
</div>

Using tokens, a distinction is made between authorized and non-authorized services and related headers:

|||
|-|-|
|Authorized|`Authorization: Bearer <token>`|
|Non-authorized|`X-Api-Key: <api-key>`|

In case the proper headers are not sent, then there are no authentication details available and the a status error code `403 Forbidden` is returned.

<div class="rule" id="api-52">
  <p class="rulelab"><strong>API-52</strong>: Use OAuth 2.0 for authorization with rights delegation</p>
  <p>This is in line with the way the OAuth standard appears on the comply or explain list of Forum Standaardisatie.</p>
</div>

See also [The Dutch profile OAuth in the chapter Security](#api-security) for further explanation of the application of OAuth.

<div class="rule" id="api-15">
  <p class="rulelab"><strong>API-15</strong>: Use PKIoverheid certificates for access-restricted or purpose-limited API authentication</p>
  <p>In the case of APIs that have access-restrictions or purpose-limitations, additional authentication based on PKIoverheid certificates and mutual TLS authentication should be provided.</p>
</div>

#### Authorization errors

In a production environment as little information as possible is to be disclosed. Apply the following rules for returning the status error code `401 Unauthorized`, `403 Forbidden`, and `404 Not Found`.

**Implicit authentication**
When authentication is implicit or when just the presence of an Authorization header (API-Key) is enough for authentication: use the flow chart in figure 1 to determine the correct error code.

![](media/HTTP-FlowChart1.PNG)

Figure 1: authentication is implicit

Links from flow chart in figure 1:

https://tools.ietf.org/html/rfc6750#section-3.1

https://tools.ietf.org/html/rfc7231#section-6.5.4

**Explicit authentication**
When authentication is explicit, that is the authentication credentials are actively verified when present use the flow chart in figure 2 to determine the correct error codes.

![](media/HTTP-FlowChart2.PNG)

Figure 2: authentication is explicit

Links from flow chart in figure 2:

https://tools.ietf.org/html/rfc7235#section-3.1

https://tools.ietf.org/html/rfc6750#section-3.1

https://tools.ietf.org/html/rfc7231#section-6.5.4

**Explicit authentication while matching client authorization CNF**

When authentication is explicit and there is a check whether the provided authorization confirmation claim (CNF) matches the credentials provided for authentication use the flow chart in figure 3 to establish the correct error codes.

![](media/HTTP-FlowChart3.PNG)

Figure 3: authentication is explicit, and client authorization confirmation claim matches authentication

Links from flow chart in figure 3:

https://tools.ietf.org/html/rfc7235#section-3.1

https://tools.ietf.org/html/rfc6750#section-3.1

https://tools.ietf.org/html/rfc7800

https://tools.ietf.org/html/rfc7231#section-6.5.4



<!--First, it is established whether the requester (principal) has a valid authorisation(i.e. token is valid) then it is established whether this authorisation is valid for a requested resource. In case the requester is not authorised or the authorisation cannot be established, for example, the resource is required to establish authorisation and the resource does not exist, then a status error code `403 Forbidden` is returned. In this way, no information is returned about the existence of a resource to a non-authorised principal.

An additional advantage of the strategy that establishes whether there is authorisation is the opportunity to separate access control logic from business logic.-->


### HTTP-level Security
The guidelines and principles defined in this extensions are client agnostic. When implementing a client agnostic API, one should at least facilitate that multi-purpose generic HTTP-clients like browsers are able to securely interact with the API. When implementing an API for a specific client it is possible to limit measures as long as it ensures secure access for this specific client. Nevertheless it is advised to review the following security measures, which are mostly inspired by the [OWASP REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)

#### Security Headers
There are a number of security related headers that can be returned in the HTTP responses to instruct browsers to act in specific ways. However, some of these headers are intended to be used with HTML responses, and as such may provide little or no security benefits on an API that does not return HTML. The following headers should be included in all API responses:

| Header                                            | Rationale                                                                                              |
|---------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| `Cache-Control: no-store`                         | Prevent sensitive information from being cached.                                                       |
| `Content-Security-Policy: frame-ancestors 'none'` | To protect against drag-and-drop style clickjacking attacks.                                           |
| `Content-Type`                                    | To specify the content type of the response. This should be `application/json` for JSON responses.     |
| `Strict-Transport-Security`                       | To require connections over HTTPS and to protect against spoofed certificates.                         |
| `X-Content-Type-Options: nosniff`                 | To prevent browsers from performing MIME sniffing, and inappropriately interpreting responses as HTML. |
| `X-Frame-Options: DENY`                           | To protect against drag-and-drop style clickjacking attacks.                                           |
| `Access-Control-Allow-Origin`                     | To relax the 'same origin' policy and allow cross-origin access. See CORS-policy below                 |


The headers below are only intended to provide additional security when responses are rendered as HTML. As such, if the API will never return HTML in responses, then these headers may not be necessary. However, if there is any uncertainty about the function of the headers, or the types of information that the API returns (or may return in future), then it is recommended to include them as part of a defence-in-depth approach.

| Header                                        | Rationale                                                              |
|-----------------------------------------------|------------------------------------------------------------------------|
| `Content-Security-Policy: default-src 'none'` | The majority of CSP functionality only affects pages rendered as HTML. |
| `Feature-Policy: 'none'`                      | Feature policies only affect pages rendered as HTML.                   |
| `Referrer-Policy: no-referrer`                | Non-HTML responses should not trigger additional requests.             |

#### CORS-policy

<div class="rule" id="api-50">
  <p class="rulelab"><strong>API-50</strong>: Use CORS to control access</p>
  <p>Use CORS to restrict access from other domains (if applicable).</p>
</div>

Modern web browsers use Cross-Origin Resource Sharing (CORS) to minimize the risk associated with cross-site HTTP-requests. By default browsers only allow 'same origin' access to resources. This means that responses on requests to another `[scheme]://[hostname]:[port]` than the `Origin` request header of the initial request will not be processed by the browser. To enable cross-site requests API's can return a `Access-Control-Allow-Origin` response header. It is recommended to use a whitelist to determine the validity of different cross-site request. To do this check the `Origin` header of the incoming request and check if the domain in this header is on the whitelist. If this is the case, set the incoming `Origin` header in the `Access-Control-Allow-Origin` response header.

Using a wildcard `*` in the `Access-Control-Allow-Origin` response header is not recommended, because it disables CORS-security measures. Only for an open API which has to be accessed by numerous other websites this is appropriate.

#### Restrict HTTP methods
Apply a whitelist of permitted HTTP Methods e.g. `GET`, `POST`, `PUT`. Reject all requests not matching the whitelist with HTTP response code `405 Method not allowed`.

#### Validate content types
A REST request or response body should match the intended content type in the header. Otherwise this could cause misinterpretation at the consumer/producer side and lead to code injection/execution.

- Reject requests containing unexpected or missing content type headers with HTTP response status `406 Unacceptable` or `415 Unsupported Media Type`.
- Avoid accidentally exposing unintended content types by explicitly defining content types e.g. Jersey (Java) `@consumes("application/json"); @produces("application/json")`. This avoids XXE-attack vectors for example.

It is common for REST services to allow multiple response types (e.g. `application/xml` or `application/json`, and the client specifies the preferred order of response types by the Accept header in the request.
- Do NOT simply copy the `Accept` header to the `Content-type` header of the response.
- Reject the request (ideally with a `406 Not Acceptable` response) if the Accept header does not specifically contain one of the allowable types.

Services including script code (e.g. JavaScript) in their responses must be especially careful to defend against header injection attack.
- Ensure sending intended content type headers in your response matching your body content e.g. `application/json` and not `application/javascript`.

#### HTTP Return Code
HTTP defines status codes. When designing a REST API, don't just use `200` for success or `404` for error. Always use the semantically appropriate [status code](https://tools.ietf.org/html/rfc7231#section-6) for the response.

#### Error handling
- Respond with generic error messages - avoid revealing details of the failure unnecessarily.
- Do not pass technical details (e.g. call stacks or other internal hints) to the client.


