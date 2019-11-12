## API Security

<p class='warning'>This extension is in development and may be modified at any time.</p>

APIs can be accessed from any location on the internet. Information is only exchanged over TLS-based encrypted connections. No exceptions, so everywhere and always.

Since the connection is always encrypted, the authentication mechanism is straightforward. This facilitates the use for simple accesss tokens instead of encrypted access tokens.

> [API principle: Encrypt connections using at least TLS v1.3](#api-11)

> [API principle: Allow access to an API only if an API key is provided](#api-12)

For further information about security, see chapter 5.

### Authentication and authorisation
A RESTful API should not maintain the state at the server. The authentication and authorisation of a request cannot depend on cookies or sessions. Instead, a token has to be sent for each request.  OAuth 2.0 is the recommended standard. Chapter 5 contains further information about this choice and the use of OAuth 2.0.

> [API principle: Accept tokens as HTTP headers only](#api-13)

Using tokens a distinction is made between authorised and non-authorised services and related headers:

|||
|-|-|
|Authorised|`Authorization: Bearer <token>`|
|Non-authorised|`X-Api-Key: <api-key>`|

In case the proper headers are not sent, then there are no authentication details available and the a status error code `403 Forbidden` is returned.

> [API principle: Use OAuth 2.0 for authorisation](#api-14)

See also [The Dutch profile OAuth in the chapter Security](#Security) for further explanation of the applicaton of OAuth.

> [API principle: Use PKIoverheid certificates for access-restricted or purpose-limited API authentication](#api-15)

#### Authorisation errors

In a production environment as little information as possible is to be disclosed. Apply the following rules for returned the status error code `401 Unauthorized`, `403 Forbidden`, and `404 Not Found`:

|Does the resource exist?|Can authorisaton be determined?|Authorised?|HTTP statuscode|
|-|-|-|-|
|Yes|Yes|Yes|`20x (200 OK)`|
|Yes|Yes|No|`401 Unauthorized`|
|Yes|No|?|`403 Forbidden`| 
|No|Yes|Yes|`404 Not Found`|
|No|Yes|No|`403 Forbidden`|
|No|No|?|`403 Forbidden`|

First, it is established whether the requester (principal) is authorised for a resource. In case the requester is not authorised or the authorisation cannot be established, for example, the resource is required to establish authorisation and the resource does not exist, then a status error code `403 Forbidden` is returned. In this way, no information is returned about the existence of a resource to a non-authorised principal.

An additional advantage of the stategy that establishes whether there is authorisation is the opportunity to separate access control logic from business logic.

#### Public identifiers

Publicly visible identifiers (IDs), that are frequently part of URLs a RESTful APIs shouldn't expose the underlying mechanisms (like number generations) and should certainly not have business logic.

> **UUID**
>
> Preferrably use UUIDs (Universally-Unique IDentifier) for confidential resources. This is a 16-bytes (128-bits) binary representation, a sequence of 32 hexadecimal digits, in five groups separated by hyphens and consists of 36 characters (32 alphanumerical characters and 4 hyphens]):
>
> `550e8400-e29b-41d4-a716-446655440000`
> 
> To ensure UUIDs are shorter and guaranteed *web-safe*, be advised to only use the base64-encoded variant consisting of 22 tokens. The above UUID looks like this:
>
> `abcdEFh4520juieUKHWgJQ`

#### Expose API-key

API keys are "unrestricted" by default. There are no usage restrictions and these API keys should therefore not be exposed in a web application. Using API keys without usage restrictions in JavaScript creates a real change for abuse and quota theft. To prevent this, restricted API keys should be issued and used.

> [API principe: Use *public* API-keys](#api-49)

#### CORS-policy

Web browsers implement a so-called "same origin policy", an important security conect to prevent requests go to another domain than where they are provided. While this policy is effective to prevent requests in different domain, it prevent ligitimate interaction between an API and clients from a known and trusted origin.

> [API principle: Use CORS to control access](#api-50)