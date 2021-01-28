## Signing and Encryption

<p class='warning'>This extension is in development and may be modified at any time.</p>

Signing and encryption are mechanisms that can provide additional security on top of the transport layer security that is provided by HTTP TLS in combination with some form of authentication and authorization.

In this API strategy we concern ourselves with RESTful APIs. In RESTful APIs you request the current value of a resource. This is different from SOAP based protocols where content is transported using messages. Using SOAP part of or all of the content is signed and/or encrypted by the sender of the message. This has utitlity as there are no pre conceptions about resources and their behaviour. When using REST you have to ask yourself what is being signed or encrypted. The value of a resource at a certain date and time. Does this have utility above and beyond the transport layer security thats already there?
[Opmerking: Je voert via een RESTful API een operatie uit op een resource, Het kan bv ook gaan om een update/delete/insert op een resource waarbij controle op integriteit van zowel operatie als resource URL wenselijk/zinvol is vanuit security perspectief]
Because in RESTful API's you operate on a resource with read, insert, update, delete commands it can be necessary to especially protect against manipulation by signing the http header containing the operation (eg. command GET/POST/PATCH/DELETE) and the resource-URI along with additional header and payload data. 

Be aware that signing and encryption are "expensive". There is a performance hit (especially for encryption), but most of all in the real world implementation of an API using these security methods will be more expensive. Knowledge among programmers is usually not complete, leading to extra time learning new skills. The added complexity leads to all manner of extra possibilities to create incorrect code, meaning testing will take longer.

Have a long hard look at alternatives to the technical solution of signing and encryption before commiting to using them.
* can the same goals be achieved using different (better) software architecture?
* can the goals be achieved using (business) contracts, audits etc... ?
The alternatives above may seem expensive as well but in practice could be cheaper.
 
 
### Signing
Signing can be used to achieve:
* **authentication:** Establishes the identity of the original sender of a request/response even when send through intermediaries.
* **integrity:** allows the receiver of a request/response to establish that the request/response (or parts there of) have not been tampered with 
* **non-repudiation:** ensures that the sender of a request/respons cannot plausibly deny that a request/reponse (or parts thereof) was sent by him. 

#### Detached, Enveloping and Enveloped signatures
Generally speaking there are three distinct types of signature: Detached, Enveloping and Enveloped.
A signature can be detached, that is the signature is separate from the content it is signing. 
Signatures can be enveloping, that is the content being signed is contained within the signature itself. The last option is an enveloped signature, that is the signature structure/element is contained wihin the content that is signed.

#### Canonicalization
Canonicalization(C14n) ensures that syntactically irrelavant information such as trailing whitespaces, different line terminators or tabs do not invalidate a signature. This is especially important with detached signatures where a different rendering of (semantically) the same content can invalidate a signature. A C14n algorithm ensures semantically identical content receives the same signature.

#### Signing within encoding formats
When signing takes place within an encoding format the way information is exchanged(e.g. through APIs) is not directly relevant to the way signatures are applied. The API design rules do not currently express any normative preference for encoding formats. We do have the JSON extension that expresses a non normative preference for JSON. Therefor we do include information on signing within the two most common encoding formats (XML & JSON) themselves even if it is not directly related to APIs. 
##### Signing XML
The standard for XML digital signatures allows for Detached, enveloping and enveloped signatures of any XML format. https://www.w3.org/TR/xmldsig-core1/
When using a specific XML encoding format (or instance GML for geograpic information) one should be aware that when this specific XML format was not made with digital signatures in mind it may be very difficult to implement digital signatures.
For instance for enveloped XML digital signatures most implementations expect the signature element as either the first or last element of the XML root element. An encoding standard such as GML currently does not allow users to add a signature element to the root of an xml document. Making XML signatures practically unimplementable using standard software.

##### Signing JSON


#### Signing requests/response

##### Signing requests/respone with knowledge of encoding format
JSON Web Token Best Current Practices: [RFC 8725](https://www.rfc-editor.org/rfc/rfc8725.html)

##### Signing requests/response without knowledge of encoding format

### Encryption

