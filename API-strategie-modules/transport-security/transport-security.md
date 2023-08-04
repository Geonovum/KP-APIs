# Transport Security

<p class="note">The working group has indicated this module to be stable.</p>

## Introduction
This section describes security principles, concepts and technologies to apply when working with APIs. Controls need to be applied for the security objectives of integrity, confidentiality and availability of the API and services and data provided thereby. The (new draft of the) [architecture section of the API strategy](https://docs.geostandaarden.nl/api/cv-hr-API-Strategie-20210628/#architectuur) contains architecture patterns for implementing Transport security.

The scope of this section is limited to generic security controls that directly influence the visible parts of an API. Effectively, only security standards directly applicable to interactions are discussed here.
In order to meet the complete security objectives, every implementer MUST also apply a range of controls not mentioned in this section.

Note: security controls for signing and encrypting of application level messages will be part of a separate extension, [Signing and Encryption](#signing-and-encryption).

## Transport security
One should secure all APIs assuming they can be accessed from any location on the internet. Information MUST be exchanged over TLS-based secured connections. No exceptions, so everywhere and always. This is [required by law](https://wetten.overheid.nl/BWBR0048156/2023-07-01). One SHOULD follow [the latest NCSC guidelines for TLS](https://english.ncsc.nl/publications/publications/2021/january/19/it-security-guidelines-for-transport-layer-security-2.1)

<span id="api-11"></span>
<div class="rule" id="/transport/TLS">
  <p class="rulelab"><strong>/transport/TLS</strong>: Secure connections using TLS</p>
  <p>Secure connections using TLS following the latest NCSC guidelines [[NCSC.TLS]].</p>
  <p>Since the connection is always secured, the access method can be straightforward. This allows the application of basic access tokens instead of encrypted access tokens.</p>
</div>

Even when using TLS-based secured connections information in URIs is not secured. URIs can be cached and logged outside of the servers controlled by clients and servers. Any information contained in them should therfor be considered readable by anyone with access to the netwerk being used (in case of the internet the whole world) and MUST NOT contain any sensitive information. Neither client secrets used for authentication, privacy sensitive informations suchs as BSNs nor any other information which should not be shared. Be aware that queries (anything after the '?' in a URI) are also part of an URI.

<span id="api-58"></span>
<div class="rule" id="/transport/no-sensitive-URIs">
  <p class="rulelab"><strong>/transport/no-sensitive-URIs</strong>: No sensitive information in URIs</p>
  <p>Do not put any sensitive information in URIs</p>
  <p>Even when the connection is secure URIs can be cached and logged, in systems outside the control of client and/or server.</p>
</div>

**How to test**
Sensitive information URIS is not machine testable and therfor not part of automated tests. It should be part of any security audit performed by human experts. 

The usage of TLS is machine testable. The test is designed for maximum automation. To test, adherence to NCSC reccomendations should be tested. The serverside is what will be tested, only control over the server is assumed for testing. A testing client will be employed to test adherence of the server. Supporting any protocols, algorithms, key sizes, options or ciphers dat are deemed insufficient or phase out by NCSC will lead to failure on the automated test. Both positive and negative scenario's are part of the test. Testing that a subset of good and sufficient reccomendations are supported and testing that phase out and insufficient reccomendations are not. A manual exception to the automated test results can be made when phase out reccomendations are supported. The API provider will have to provide clear documentation for the phase out schedule.  

## HTTP-level Security
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

### Security Headers

<div class="rule" id="/transport/security-headers">
  <p class="rulelab"><strong>/transport/security-headers</strong>: Use mandatory security headers in API all responses</p>
  <p>Return API security headers in all server responses to instruct the client to act in a secure manner</p>
</div>

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

Note that strict transport security is not only mandated by this module [but also by law](https://wetten.overheid.nl/BWBR0048156/2023-07-01). 

The headers below are only intended to provide additional security when responses are rendered as HTML. As such, if the API will never return HTML in responses, then these headers may not be necessary. However, if there is any uncertainty about the function of the headers, or the types of information that the API returns (or may return in future), then it is RECOMMENDED to include them as part of a defense-in-depth approach.

| Header                                        | Rationale                                                              |
|-----------------------------------------------|------------------------------------------------------------------------|
| `Content-Security-Policy: default-src 'none'` | The majority of CSP functionality only affects pages rendered as HTML. |
| `Feature-Policy: 'none'`                      | Feature policies only affect pages rendered as HTML.                   |
| `Referrer-Policy: no-referrer`                | Non-HTML responses SHOULD not trigger additional requests.             |

In addition to the above listed HTTP security headers, web- and browser-based applications SHOULD apply Subresource Integrity [SRI](https://www.w3.org/TR/SRI/). When using third-party hosted contents, e.g. using a Content Delivery Network, this is even more relevant. While this is primarily a client implementation concern, it may affect the API when it is not strictly segregated or for example when shared supporting libraries are offered.

**How to test**
The precense of the mandatory security headers can be tested in an automated way. A test client makes a call to the API root. The response is tested for the precense of mandatory headers.

### CORS-policy

<span id="api-50"></span>
<div class="rule" id="/transport/CORS">
  <p class="rulelab"><strong>/transport/CORS</strong>: Use CORS to control access</p>
  <p>Use CORS to restrict access from other domains (if applicable).</p>
</div>

Modern web browsers use Cross-Origin Resource Sharing (CORS) to minimize the risk associated with cross-site HTTP-requests. By default browsers only allow 'same origin' access to resources. This means that responses on requests to another `[scheme]://[hostname]:[port]` than the `Origin` request header of the initial request will not be processed by the browser. To enable cross-site requests API's can return a `Access-Control-Allow-Origin` response header. It is RECOMMENDED to use a whitelist to determine the validity of different cross-site request. To do this check the `Origin` header of the incoming request and check if the domain in this header is on the whitelist. If this is the case, set the incoming `Origin` header in the `Access-Control-Allow-Origin` response header.

Using a wildcard `*` in the `Access-Control-Allow-Origin` response header is NOT RECOMMENDED, because it disables CORS-security measures. Only for an open API which has to be accessed by numerous other websites this is appropriate.

**How to test**
Tests of this design rule can only be performed when the intended client is known to the tester. A thest can be performed when this information is provided by the API provider. Otherwise no conclusive test result can be reached. 

### Browser-based applications
A specific subclass of clients are browser-based applications, that require the presence of particular security controls to facilitate secure implementation. Clients in this class are also known as _user-agent-based_ or _single-page-applications_ (SPA).
As with the (draft) [OAuth 2.0 for Browser-Based Apps](https://tools.ietf.org/html/draft-ietf-oauth-browser-based-apps-07), browser-based application can be split into three architectural patterns:
- JavaScript applications with a Backend; with this class of applications, the Backend is the confidential client and should intermediate any interaction, with tokens never ending up in the browser. Effectively, these are not different from regular web-application for this security facet, even though they leverage JavaScript for implementation.
- JavaScript applications that share a domain with the API (resource server); these can leverage cookies marked as HTTP-Only, Secure and SameSite.
- JavaScript applications without a Backend; these clients are considered public clients, are potentially more suspect to several types of attacks, including Cross-Site Scripting (XSS), Cross Site Request Forgery (CSRF) and OAuth token theft. In order to support these clients, the Cross-Origin Resource Sharing (CORS) policy mentioned above is critical and MUST be supported.

All browser-based application SHOULD follow the best practices specified in [OAuth 2.0 for Browser-Based Apps](https://tools.ietf.org/html/draft-ietf-oauth-browser-based-apps-07).

### Restrict HTTP methods
Apply a whitelist of permitted HTTP Methods e.g. `GET`, `POST`, `PUT`. Reject all requests not matching the whitelist with HTTP response code `405 Method not allowed`.

### Validate content types
A REST request or response body SHOULD match the intended content type in the header. Otherwise this could cause misinterpretation at the consumer/producer side and lead to code injection/execution.

- Reject requests containing unexpected or missing content type headers with HTTP response status `406 Unacceptable` or `415 Unsupported Media Type`.
- Avoid accidentally exposing unintended content types by explicitly defining content types e.g. Jersey (Java) `@consumes("application/json"); @produces("application/json")`. This avoids XXE-attack vectors for example.

It is common for REST services to allow multiple response types (e.g. `application/xml` or `application/json`, and the client specifies the preferred order of response types by the Accept header in the request.
- Do NOT simply copy the `Accept` header to the `Content-type` header of the response.
- Reject the request (ideally with a `406 Not Acceptable` response) if the Accept header does not specifically contain one of the allowable types.

Services (potentially) including script code (e.g. JavaScript) in their responses MUST be especially careful to defend against header injection attack.
- Ensure sending intended content type headers in your response matching your body content e.g. `application/json` and not `application/javascript`.

### HTTP Return Code
HTTP defines status codes. When designing a REST API, don't just use `200` for success or `404` for error. Always use the semantically appropriate [status code](https://tools.ietf.org/html/rfc7231#section-6) for the response.

### HTTP header filtering
Realizations may rely on internal usage of HTTP-Headers. Information for processing requests and responses can be passed between components, that can have security implications.
For instance, this is commonly practices between a reverse proxy or TLS-offloader and an application server. Additional HTTP headers are used in such example to pass an original IP-address or client certificate.

Implementations MUST consider filtering both inbound and outbound traffic for HTTP-headers used internally.
Primary focus for inbound filtering is to prevent injection of malicious headers on requests.
For outbound filtering, the main concern is leaking of information.

### Error handling
- Respond with generic error messages - avoid revealing details of the failure unnecessarily.
- Do not pass technical details (e.g. call stacks or other internal hints) to the client.
