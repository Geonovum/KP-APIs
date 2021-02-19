## Security

<p class='warning'>This extension is in development and may be modified at any time.</p>

### Introduction
This section describes security principles, concepts and technologies to apply when working with APIs. Controls need to be applied for the security objectives of integrity, confidentiality and availability of the API and services and data provided thereby. The (new draft of the) [architecture section of the API strategy](https://geonovum.github.io/KP-APIs/Werkgroep%20API%20architectuur/) contains architecture patterns for implementing API security. This extension provides the details on the Authenication & authorization capability of the API capability model detailed in the (new draft of the) [architecture section of the API strategy](https://geonovum.github.io/KP-APIs/Werkgroep%20API%20architectuur/).

The scope of this section is limited to generic security controls that directly influence the visible parts of an API. Effectively, only security standards directly applicable to interactions are discussed here.
In order to meet the complete security objectives, every implementer MUST also apply a range of controls not mentioned in this section.

Note: security controls for signing and encrypting of application level messages will be part of a separate extension, [Signing and Encryption](#signing-and-encryption).

### Transport security
One should secure all APIs assuming they can be accessed from any location on the internet. Information MUST be exchanged over TLS-based secured connections. No exceptions, so everywhere and always. One SHOULD follow [the latest NCSC guidelines for TLS](https://english.ncsc.nl/publications/publications/2019/juni/01/it-security-guidelines-for-transport-layer-security-tls)

<div class="rule" id="api-11">
  <p class="rulelab"><strong>API-11</strong>: Secure connections using TLS</p>
  <p>Secure connections using TLS following the latest NCSC guidelines [[NCSC.TLS]].</p>
  <p>Since the connection is always secured, the access method can be straightforward. This allows the application of basic access tokens instead of encrypted access tokens.</p>
</div>

### API access patterns
Because security is about compromises one should first be aware of what access patterns need to be supported.

#### Machine to Machine
Two different machines negatioate a secure point to point connection. One side acts as the client the other as the server. Both sides identify and authenticate the other party. The server authorises access to its resources by the client based on the esteblished identity of the client. The rights of a client are determined by doing a lookup to an identity store based on the established identity of the client. 
In this pattern the server MUST completely rely on the information provided by the client, there is no third party involved at runtime. 
Note that in Dutch government we often only identify organizations and not individual machines or their users. Therefor the access rights or permissions associated with a given identity might be far greater than needed. This is breaking the least privilige principle.

#### Rights delegation

The rights delegation access pattern solves the problem of machines having greater permissions/priviliges/access rights than necessary for the task at hand. Retrieving a resource at runtime requires a resource owner, a client an authorization server and and a resource server.
The resource owner (often the end user) grants permissions to a client to access resources on its behalf. This grant is stored at the authorization server. After permissions are granted the client access resources on the resource server with or without the presence of an end user. To deny the client access to these resources, the resource owner MUST revoke the grant at the authorization server.
When a resource owner provides a grant to the client, this grant SHOULD only contain the permissions the client needs to perform its intended tasks.

#### Session based API access pattern
While this method is sometimes considered legacy it is in common use. Because this pattern is more a standard web application pattern we refer to [the latest NCSC guidelines on the subject of web application security](https://www.ncsc.nl/documenten/publicaties/2019/mei/01/ict-beveiligingsrichtlijnen-voor-webapplicaties) for security considerations.

We consider this method to be mostly outside the scope of this document and refer to the aforementioned NCSC document for security considerations. We do provide some additional considerations for web clients in the HTTP security section.

### Identification

**End Users and Organizations**
For Identification of individual users use a pseudonym when possible to avoid exposing sensitive information about a user.
This pseudonym can optionally be translatable to actual personal information in a separate service, but access to this service should be tightly controlled and limited only to cases where there is a legal need to use this information.

Use of a Burger Service Number (BSN) is only allowed when the organization has a legal ground to do so. Even when an organization is eligible to use BSN's it is still RECOMMENDED to use a pseudonym that is only translatable to a BSN for a limited number of services/users within the organization.
An example of this can be found in the [architecture of the "digitaalstelsel omgevingswet"](https://aandeslagmetdeomgevingswet.nl/publish/library/219/dso_-_gas_-_knooppunt_toegang_iam.pdf)

For identifying government organizations use the "organisatie-identificatienummer" (OIN).
For identifying non-government organizations (companies, associations, foundations etc...) use the Handelsregisternummer (HRN) or its OIN equivalent.
These are used in the PKIOverheid and e-Herkenning context. See https://www.logius.nl/diensten/oin for more information on these identifiers.

OINs can be queried using the COR API https://portaal.digikoppeling.nl/registers/corApi/index
HRNs are derived from the KvKNummer which can be queried in the "Handels register" https://developers.kvk.nl/documentation/search-v2

In the EU context use the eIDAS legal identifier. For more information see https://ec.europa.eu/digital-single-market/en/trust-services-and-eid.

**Clients**
When using authorization servers, the authorization server issues the registered client a client identifier - a unique string representing the registration information provided by the client. The client identifier is not a secret; it is exposed to the resource owner and MUST NOT be used alone for client authentication. The client identifier is unique to the authorization server.

Authorization servers MUST NOT allow clients to choose or influence their client_id value.

### Authentication
Authentication determines whether individuals and applications accessing APIs are really who they say they are. In the context of APIs, authentication is applicable to the *End-User*, i.e. the individual on behalf of whom API resources are being accessed, and to the *Client*, i.e. the application that accesses the API resources on behalf of the end-user.

Note that an End-User can be both a natural person as well as a legal person (organization). In case Client Authentication includes information about its governing organization, this may fulfill and obviate the need for End-User authentication. See the section "Client Credentials using OAuth 2.0" below.

#### End-User authentication
In most Use Cases that involve API interaction, authenticating the End-User on behalf of whom the API resources are accessed is required. End-User authentication is not required in situations where the API Client is solely accessing API resources on behalf of itself, without requiring an End-User context, but may be used nevertheless.

The following methods can be used for End-User authentication:

**SAML**
SAML is a standard for securely communicating assertions about an authenticated End-User from the Identity Provider to the Service Provider. Although it existed before APIs became mainstream and is not aimed at API authentication specifically, communicating Access Tokens that can be used to access API resources in the exchanged assertions is possible.

[SAML 2.0 is included on the list of required standards by Forum Standaardisatie](https://forumstandaardisatie.nl/open-standaarden/saml). It is expected, however, that the following standards will become preferred over SAML in Use Cases that involve access to API resources.

**OAuth**
Although technically an authorization method, OAuth [[OAuth2]] is used as well for authenticating End-Users themselves and providing the Client with an Access Token upon successful End-User (and Client) authentication. This Access Token can be used to make authorized API requests. Using OAuth is appropriate when authorization is not dependent on an identifiable subject, the subject is different from the End-User or the Client does not require authentication of the End-User itself.

The NL GOV Assurance profile for OAuth 2.0 is included on the list of required standards by Forum Standaardisatie. The latest version of the profile can be found at https://publicatie.centrumvoorstandaarden.nl/api/oauth/.

**OpenID Connect**
OpenID Connect [[OpenID.Core]] adds an identity layer on top of OAuth, making it into an actual authentication method. It enables API Clients to verify the identity of authenticated End-Users and to obtain profile information about the End-User.

A Dutch Assurance profile for OpenID Connect is currently being drafted. It is expected to be added to the list of required standards by Forum Standaardisatie. The latest version of the draft profile can be found at https://logius.gitlab.io/oidc/.

**Out of band**
For some Use Cases it may be appropriate to distribute Access Tokens using an Out of band method. Out of band authentication is generally appropriate when API resources are accessed via an application that already supports a client authentication method and the End-User is rather static. Based on an End-User authentication performed, the application subsequently is provided with an Access Token for API access via a secure method.

Depending on the technology used by the applications accessing the API the Access Token may technically be communicated using a secure cookie. This however limits the technologies used to create client applications.

Using sessions and secure cookies is outside the scope of this document. For security considerations please refer to [the latest NCSC guidelines on the subject of web application security](https://www.ncsc.nl/documenten/publicaties/2019/mei/01/ict-beveiligingsrichtlijnen-voor-webapplicaties).

#### Client authentication
Authenticating the Client application that accesses API resources, being it on behalf of an End-User or in a system-to-system setting, is required where possible. Also, although listed separately, the aforementioned methods for End-User authentication require Client authentication.

Note: Client Authentication is applicable to the Client accessing the API, the Client making request to the Authorization Server when applying OAuth/OpenID, or both. It is RECOMMENDED to apply Client Authentication for both usages.

It is RECOMMENDED to use asymmetric (public-key based) methods for client authentication such as mTLS [RFC8705](https://www.rfc-editor.org/info/rfc8705) or "private_key_jwt" [OpenID](https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication).

[The NL GOV Assurance profile for OAuth 2.0](https://publicatie.centrumvoorstandaarden.nl/api/oauth/) REQUIRES the use of private_key_jwt for full clients, native clients with dynamically registered keys, and direct access clients as mentioned in the profile.

The following methods can be used for Client authentication.

##### Mutual TLS authentication (mTLS)
Mutual TLS authentication, is a feature of TLS with which the Client authenticates itself to the Server using its X.509 certificate. Mutual TLS (mTLS) provides strong Client authentication for server-based Clients and cannot be used with Native or User-Agent-based Clients that are not backed with a server. Support for mTLS in combination with OAuth2 is specified in [RFC8705](https://www.rfc-editor.org/info/rfc8705).

In contexts where Dutch (semi) governmental organizations are involved, the X.509 certificate used for Client authentication MUST be a PKIOverheid certificate. These are x509 certificates derived from a root certificate owned by the Dutch Government. For more information on PKIOverheid see https://www.logius.nl/diensten/pkioverheid.

In the API context, only Server, Services certificates or extended Validation certificates (as used for websites) SHOULD be used. Please note that in the current standard of PKIO the TSPs are not obligated to fill the OIN / HRN in the Subject.Serialnumber field for the private services chain, as it is optional. See the [Programme of Requirements part 3h: CP Server certificaten – domein Private Services](https://www.logius.nl/sites/default/files/bestanden/website/PvE%20deel3h%20v4.8%20V1.0.pdf) for details. For the extended Validation certificates, the chamber of commerce number is given in the Serial.Subject field see [Programme of Requirements part 3f: Certificate Policy for Extended Validation certificates in EV (G1) Domain](https://www.logius.nl/sites/default/files/public/bestanden/diensten/PKIoverheid/PvE%20EN%20part3f%20v4.8%20DEF.pdf) or the [website of Logius](https://www.logius.nl/diensten/pkioverheid/aansluiten-als-tsp/pogramma-van-eisen) for details.

##### Private key JWT
With Private key JWT authentication [OpenID](https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication), the Client registers a public key with the Server and accompanies every API request with a JWT signed using this key. This Client Authentication method is part of the OpenID Connect standards for Clients authenticating to the OpenID Provider, but the use of Private key JWT Client authentication is not limited to this use case.

This authentication method may be used with Clients that are able to securely store asymmetric private keys and sign JWT's with this key.

In contexts where Dutch (semi) governmental organizations are involved, the certificate used for signing the Private key JWT's MUST be a PKIOverheid certificate. In case the certificate is included in the JWT header, it includes identification of the client and registration of the public key may not be necessary.

[The NL GOV Assurance profile for OAuth 2.0](https://publicatie.centrumvoorstandaarden.nl/api/oauth/) REQUIRES the use of private_key_jwt for full clients, native clients with dynamically registered keys, and direct access clients as mentioned in the profile.

##### Client secrets
Various methods exists for authenticating clients using secrets.

Note that methods using asymmetric keys are RECOMMENDED instead of client secrets, as they are both more secure and key management is easier, in particular when deployed at scale.

Note that Client authentication using HTTP Basic authentication or communicating client credentials in the request body are prone to credential theft and therefore NOT RECOMMENDED.

**Client_secret_jwt**
The Client secret JWT method (see [OpenID](https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication)) is similar to the private_key_jwt method, but uses a HMAC instead of a signature. This Client Authentication method is part of the OpenID Connect standards for Clients authenticating to the OpenID Provider, but the use of Private key JWT Client authentication is not limited to this use case.

This method is not as a strong as the private_key_jwt method, but offers better options against replay attacks than password based methods.

**Client Password**
Clients in possession of a client password MAY use the HTTP Basic authentication scheme as defined in [RFC7617](https://tools.ietf.org/html/rfc7617) to authenticate to the Server. The client identifier is encoded using the application/x-www-form-urlencoded encoding algorithm, and the encoded value is used as the username; the client secret is encoded using the same algorithm and used as the password. The Server MUST support the HTTP Basic authentication scheme for authenticating clients that were issued a client secret as password.

The Server MUST require the use of TLS when sending requests using client password authentication. Since this client authentication method involves a password, a Server MUST protect any endpoint utilizing it against brute force attacks.

**Client secret**
Alternatively, the authorization server MAY support including the client credentials in the request-body using the following parameters:

|client_id:|REQUIRED|The client identifier issued to the client during the registration process|
|client_secret:|REQUIRED|The client secret|

The Server MUST require the use of TLS when sending requests using client secret authentication. Since this client authentication method involves a password, a Server MUST protect any endpoint utilizing it against brute force attacks.

Including the client credentials in the request-body using the two parameters is NOT RECOMMENDED and SHOULD be limited to clients unable to utilize any other client authentication method. The parameters MUST only be transmitted in the request-body and MUST NOT be included in the request URI.

##### Client authentication and Public clients
In Use Cases that involve Native and User-Agent based Clients, strong Client authentication is generally not possible. Whereas it may be possible for individual Clients to implement a decent means of Client authentication (e.g. by using the Web Crypto API in User-Agent based Clients), the Server cannot make any assumptions about the confidentiality of credentials exchanged with such Clients.

When dealing with Use Cases involving Native and User-Agent based Clients, the policies and standards described in [Section HTTP level security](https://geonovum.github.io/KP-APIs/API-strategie-extensies/#http-level-security) SHOULD be followed, as well as best practices [[OAuth2.Browser-Based-Apps]] and [[RFC8252]], which are defined for use with OAuth but may be applicable for API communication in general.

##### Other Authentication Methods
An API Server (Resource Server) or Authorization Server MAY support any suitable authentication scheme matching their security requirements. When using other authentication methods, the authorization server MUST define a mapping between the client identifier (registration record) and authentication scheme.

Some additional authentication methods are defined in the [OAuth Token Endpoint Authentication Methods](https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml#token-endpoint-auth-method) registry, and may be useful as generic client authentication methods beyond the specific use of protecting the token endpoint.

#### Client Credentials using OAuth 2.0
In Use Cases where the Client is solely accessing API resources on behalf of itself or its governing organization, without requiring an End-User context, Client authentication using the OAuth 2.0 Client Credentials grant type can be appropriate. In such cases, the Authorization Server securely provides Client credentials to the Client upon registration (e.g. via an API Developer portal or out of bound process) and the Client uses these credentials to obtain an Access Token from the Authorization Server. The Access token than is used to access the API (Resource Server) using the Access Token.

Note that existing Client Credentials, such as a PKIoverheid X.509 certificate, MAY be used. This preempts the need for providing additional credentials. Any of the above mentioned Client Authentication methods can be applied with the Client Credential flow.

Usage of the Client Credential method with OAuth is RECOMMENDED over direct authorization by the API Server (Resource Server), even if the authorization decision can be based directly on Client Authentication. This externalizes the authorization decision from the API implementation, allowing for easier modifications and management of both the decision logic as well as client authentication methods.


### Authorization

It is RECOMMENDED to use token-based access to APIs. REST APIs SHOULD NOT maintain session state on the server. The authentication and authorization of a request SHOULD NOT depend on sessions. Instead, a token has to be sent with each request.

<div class="rule" id="api-13">
  <p class="rulelab"><strong>API-13</strong>: Accept tokens as HTTP headers only</p>
  <p>There is an inherent security issue when passing tokens as a query parameter, because most Web servers store query parameters in the server logs.</p>
</div>

Using tokens, a distinction is made between authorized and non-authorized services and related headers:

|||
|-|-|
|Authorized|`Authorization: Bearer <token>`|
|Non-authorized|`X-Api-Key: <api-key>`|

In case the proper headers are not sent, then there are no authentication details available and a status error code `403 Forbidden` is returned.

<div class="rule" id="api-52">
  <p class="rulelab"><strong>API-52</strong>: Use OAuth 2.0 for authorization with rights delegation</p>
  <p>This is in line with the way the OAuth standard appears on the comply or explain list of Forum Standaardisatie.</p>
</div>

See also [The NL GOV Assurance profile for OAuth 2.0](#api-security) for further explanation of the applicaton of OAuth.

The Digikoppeling standard [[??]] currently has a RESTful API profile in development that specifies how to use PKIOverheid x.509 certificates for authorization.

#### Authorization errors

In a production environment as little information as possible is to be disclosed. Apply the following rules for returning the status error code `401 Unauthorized`, `403 Forbidden`, and `404 Not Found`.

Note that authentication in the cases below is typically client authentication, and the Authorization header contains information on the End-User authorization and authentication, if applicable.

Note that usage of the Authorization header is part of the OAuth2 specifications.

**Implicit authentication**

When authentication is implicit or when just the presence of an Authorization header is enough for authentication and/or authorization: use the flow chart in figure 1 to determine the correct error code.

![](media/HTTP-FlowChart1.PNG)

Figure 1: authentication is implicit.

Links from flow chart in figure 1:

https://tools.ietf.org/html/rfc6750#section-3.1

https://tools.ietf.org/html/rfc7231#section-6.5.4

**Explicit authentication**

When authentication is explicit, that is the authentication credentials are actively verfied when present, use the flow chart in figure 2 to determine the correct error codes.

![](media/HTTP-FlowChart2.PNG)

Figure 2: authentication is explicit.

Links from flow chart in figure 2:

https://tools.ietf.org/html/rfc7235#section-3.1

https://tools.ietf.org/html/rfc6750#section-3.1

https://tools.ietf.org/html/rfc7231#section-6.5.4

**Explicit authentication while matching client authorization (`cnf`)**

When authentication is explicit and there is a check whether the provided authorization confirmation claim (`cnf`, see [[rfc7800]]) matches the credentials provided for authentication use the flow chart in figure 3 to esteblish the correct error codes.

![](media/HTTP-FlowChart3.PNG)

Figure 3: authentication is explicit, and client authorization confirmation claim (`cnf`) matches authentication.

Links from flow chart in figure 3:

https://tools.ietf.org/html/rfc7235#section-3.1

https://tools.ietf.org/html/rfc6750#section-3.1

https://tools.ietf.org/html/rfc7800

https://tools.ietf.org/html/rfc7231#section-6.5.4



<!--First, it is established whether the requester (principal) has a valid authorisation(i.e. token is valid) then it is established whether this authorisation is valid for a requested resource. In case the requester is not authorised or the authorisation cannot be established, for example, the resource is required to establish authorisation and the resource does not exist, then a status error code `403 Forbidden` is returned. In this way, no information is returned about the existence of a resource to a non-authorised principal.

An additional advantage of the strategy that establishes whether there is authorisation is the opportunity to separate access control logic from business logic.-->


### HTTP-level Security
The guidelines and principles defined in this extension are client agnostic. When implementing a client agnostic API, one SHOULD at least facilitate that multi-purpose generic HTTP-clients like browsers are able to securely interact with the API. When implementing an API for a specific client it may be possible to limit measures as long as it ensures secure access for this specific client. Nevertheless it is advised to review the following security measures, which are mostly inspired by the [OWASP REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)

Even while remaining client agnostic, clients can be classified in four major groups. This is much in line with common practice in OAuth2. The groups are:
1. Web applications.
2. Native applications.
3. Browser-based applications.
4. System-to-system applications.

This section contains elements that apply to the generic classes of clients listed above. Although not every client implementation has a need for all the specifications referenced below, a client agnostic API SHOULD provide these to facilitate any client to implement relevant security controls.

Most specifications referenced in this section are applicable to the first three classes of clients listed above.
Security considerations for native applications are provided in [OAUth2 for Native Apps]](https://tools.ietf.org/html/rfc8252), much of which can help non-OAuth2 based implementations as well.
For browser-based applications a subsection is included with additional details and information.
System-to-system (sometimes called machine-to-machine) may have a need for the listed specifications as well. Note that different usage patterns may be applicable in contexts with system-to-system clients, see above under Client Authentication.

#### Security Headers
There are a number of security related headers that can be returned in the HTTP responses to instruct browsers to act in specific ways. However, some of these headers are intended to be used with HTML responses, and as such may provide little or no security benefits on an API that does not return HTML. The following headers SHOULD be included in all API responses:

| Header                                            | Rationale                                                                                              |
|---------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| `Cache-Control: no-store`                         | Prevent sensitive information from being cached.                                                       |
| `Content-Security-Policy: frame-ancestors 'none'` | To protect against drag-and-drop style clickjacking attacks.                                           |
| `Content-Type`                                    | To specify the content type of the response. This SHOULD be `application/json` for JSON responses.     |
| `Strict-Transport-Security`                       | To require connections over HTTPS and to protect against spoofed certificates.                         |
| `X-Content-Type-Options: nosniff`                 | To prevent browsers from performing MIME sniffing, and inappropriately interpreting responses as HTML. |
| `X-Frame-Options: DENY`                           | To protect against drag-and-drop style clickjacking attacks.                                           |
| `Access-Control-Allow-Origin`                     | To relax the 'same origin' policy and allow cross-origin access. See CORS-policy below                 |


The headers below are only intended to provide additional security when responses are rendered as HTML. As such, if the API will never return HTML in responses, then these headers may not be necessary. However, if there is any uncertainty about the function of the headers, or the types of information that the API returns (or may return in future), then it is RECOMMENDED to include them as part of a defense-in-depth approach.

| Header                                        | Rationale                                                              |
|-----------------------------------------------|------------------------------------------------------------------------|
| `Content-Security-Policy: default-src 'none'` | The majority of CSP functionality only affects pages rendered as HTML. |
| `Feature-Policy: 'none'`                      | Feature policies only affect pages rendered as HTML.                   |
| `Referrer-Policy: no-referrer`                | Non-HTML responses SHOULD not trigger additional requests.             |

In addition to the above listed HTTP security headers, web- and browser-based applications SHOULD apply Subresource Integrity [SRI](https://www.w3.org/TR/SRI/). When using third-party hosted contents, e.g. using a Content Delivery Network, this is even more relevant. While this is primarily a client implementation concern, it may affect the API when it is not strictly segregated or for example when shared supporting libraries are offered.

#### CORS-policy

<div class="rule" id="api-50">
  <p class="rulelab"><strong>API-50</strong>: Use CORS to control access</p>
  <p>Use CORS to restrict access from other domains (if applicable).</p>
</div>

Modern web browsers use Cross-Origin Resource Sharing (CORS) to minimize the risk associated with cross-site HTTP-requests. By default browsers only allow 'same origin' access to resources. This means that responses on requests to another `[scheme]://[hostname]:[port]` than the `Origin` request header of the initial request will not be processed by the browser. To enable cross-site requests API's can return a `Access-Control-Allow-Origin` response header. It is RECOMMENDED to use a whitelist to determine the validity of different cross-site request. To do this check the `Origin` header of the incoming request and check if the domain in this header is on the whitelist. If this is the case, set the incoming `Origin` header in the `Access-Control-Allow-Origin` response header.

Using a wildcard `*` in the `Access-Control-Allow-Origin` response header is NOT RECOMMENDED, because it disables CORS-security measures. Only for an open API which has to be accessed by numerous other websites this is appropriate.

#### Browser-based applications
A specific subclass of clients are browser-based applications, that require the presence of particular security controls to facilitate secure implementation. Clients in this class are also known as _user-agent-based_ or _single-page-applications_ (SPA).
As with the (draft) [OAuth 2.0 for Browser-Based Apps](https://tools.ietf.org/html/draft-ietf-oauth-browser-based-apps-07), browser-based application can be split into three architectural patterns:
- JavaScript applications with a Backend; with this class of applications, the Backend is the confidential client and should intermediate any interaction, with tokens never ending up in the browser. Effectively, these are not different from regular web-application for this security facet, even though they leverage JavaScript for implementation.
- JavaScript applications that share a domain with the API (resource server); these can leverage cookies marked as HTTP-Only, Secure and SameSite.
- JavaScript applications without a Backend; these clients are considered public clients, are potentially more suspect to several types of attacks, including Cross-Site Scripting (XSS), Cross Site Request Forgery (CSRF) and OAuth token theft. In order to support these clients, the Cross-Origin Resource Sharing (CORS) policy mentioned above is critical and MUST be supported.

All browser-based application SHOULD follow the best practices specified in [OAuth 2.0 for Browser-Based Apps](https://tools.ietf.org/html/draft-ietf-oauth-browser-based-apps-07).

#### Restrict HTTP methods
Apply a whitelist of permitted HTTP Methods e.g. `GET`, `POST`, `PUT`. Reject all requests not matching the whitelist with HTTP response code `405 Method not allowed`.

#### Validate content types
A REST request or response body SHOULD match the intended content type in the header. Otherwise this could cause misinterpretation at the consumer/producer side and lead to code injection/execution.

- Reject requests containing unexpected or missing content type headers with HTTP response status `406 Unacceptable` or `415 Unsupported Media Type`.
- Avoid accidentally exposing unintended content types by explicitly defining content types e.g. Jersey (Java) `@consumes("application/json"); @produces("application/json")`. This avoids XXE-attack vectors for example.

It is common for REST services to allow multiple response types (e.g. `application/xml` or `application/json`, and the client specifies the preferred order of response types by the Accept header in the request.
- Do NOT simply copy the `Accept` header to the `Content-type` header of the response.
- Reject the request (ideally with a `406 Not Acceptable` response) if the Accept header does not specifically contain one of the allowable types.

Services (potentially) including script code (e.g. JavaScript) in their responses MUST be especially careful to defend against header injection attack.
- Ensure sending intended content type headers in your response matching your body content e.g. `application/json` and not `application/javascript`.

#### HTTP Return Code
HTTP defines status codes. When designing a REST API, don't just use `200` for success or `404` for error. Always use the semantically appropriate [status code](https://tools.ietf.org/html/rfc7231#section-6) for the response.

#### HTTP header filtering
Realizations may rely on internal usage of HTTP-Headers. Information for processing requests and responses can be passed between components, that can have security implications.
For instance, this is commonly practices between a reverse proxy or TLS-offloader and an application server. Additional HTTP headers are used in such example to pass an original IP-address or client certificate.

Implementations MUST consider filtering both inbound and outbound traffic for HTTP-headers used internally.
Primary focus for inbound filtering is to prevent injection of malicious headers on requests.
For outbound filtering, the main concern is leaking of information.


#### Error handling
- Respond with generic error messages - avoid revealing details of the failure unnecessarily.
- Do not pass technical details (e.g. call stacks or other internal hints) to the client.


