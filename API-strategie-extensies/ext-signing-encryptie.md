## Signing and Encryption
Signing and encryption are mechanisms that can provide additional security on top of the transport layer security that is provided by HTTP TLS in combination with some form of authentication and authorization.

In this API strategy we concern ourselves with RESTful APIs. In RESTful APIs you request the current value of a resource. This is different from SOAP based protocols where content is transported using messages. Using SOAP part of or all of the content is signed and/or encrypted by the sender of the message. This has utitlity as there are no pre conceptions about resources and their behaviour. When using REST you have to ask yourself what is being signed or encrypted. The value of a resource at a certain date and time. Does this have utility above and beyond the transport layer security thats already there?

Be aware that signing and encryption are "expensive". There is a performance hit (especially for encryption), but most of all in the real world implementation of an API using these security methods will be more expensive. Knowledge among programmers is ussually not complete, leading to extra time learning new skills. The added complexity leads to all manner of extra possibilities to create incorrect code, meaning testing will take longer.

Have a long hard look at alternatives to the technical solution of signing and encryption before commiting to using them.
* can the same goals be achieved using different (better) software architecture?
* can the goals be achieved using (business) contracts, audits etc... ?
The alternatives above may seem expensive as well but in practice could be cheaper.
 
 
### Signing
Signing can be used to achieve:
* **authentication:** Establishes the identity of the original sender of a request/response even when send through intermediaries.
* **integrity:** allows the receiver of a request/response to establish that the request/response (or parts there of) have not been tampered with 
* **non-repudiation:** ensures that the sender of a request/respons cannot plausibly deny that a request/reponse (or parts thereof) was sent by him. 

#### Enveloping vs Enveloped signatures

#### Detached vs Attached signatures

#### Signing encoding formats

##### Signing XML

##### Signing JSON

#### Signing requests/response

##### Signing requests/respone with knowledge of encoding format
JWT security best practices:
https://datatracker.ietf.org/doc/draft-ietf-oauth-jwt-bcp/


##### Sigingn requests/response without knowledge of encoding format

### Encryption