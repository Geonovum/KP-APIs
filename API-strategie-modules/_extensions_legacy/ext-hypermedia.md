## Hypermedia

<p class="note">The working group has indicated this extension to be stable.</p>

Hypermedia relates to the use of hyperlinks (from now on called _links_) as part of a document's payload, which are essentially URIs pointing to other resources. Typically, but not necessarily, these links are retrievable (also called _dereferencable_) from the web over the HTTP protocol. We intentionally make a clear separation between navigation controls and external links. Both kinds can easily be combined as part of a single API.

<div class="rule" id="/hypermedia/absolute-uris">
  <p class="rulelab"><strong>/hypermedia/absolute-uris</strong>: Provide absolute URIs for hyperlinks</p>
  <p>Only absolute URIs may be provided since this enables simple traversal of links by following URIs. While relative links are more compact and may be practical when having multi-environment deployments, they introduce extra complexity for the client and may potentially result in erroneous behaviour (e.g. when dealing with trailing slashes or dot segments). For the same reasons, absolute URIs may not be templated.</p>
</div>

<p class="note">This design rule does explicitly NOT intend the use of hyperlinks as an implementation of the often debated HATEOAS constraint, as described in the well-known REST thesis (Roy Fielding) or the Richardson Maturity Model (Level 3). An API specification must offer a strict and stable contract between server and client, which should guarantee backwards compatiblity during the full lifetime of a given major version, whereas true HATEOAS advocates continually evolving interfaces requiring little to no prior knowledge about how to interact with the application.</p>

### Navigation controls

Navigation controls are references to URIs within the scope of the originating API, i.e. these paths are typically specified in the same OpenAPI specification and thus residing on the same domain within the same base path. The main (and only) purpose is to increase discoverability by providing navigation links, which can be leveraged by client applications or by developers while building applications or evaluating APIs. Since internal links only serve a navigational purpose, they can only be provided as part of response messages.

<p class="note">The only exception when navigation controls are allowed to point to other APIs is when they share governance and security context. When doing so, the governing party must guarantee stability of links between the APIs, which means the target operation of navigational links may never change during the lifetime of (a major version of) the originating API. They must also share the same security context, otherwise clients have to exchange mixed credentials for different endpoints.</p>

<div class="rule" id="/hypermedia/support-hal">
  <p class="rulelab"><strong>/hypermedia/support-hal</strong>: Support the HAL media type for every GET response</p>
  <p>The [[HAL]] standard is a universal and widely adopted standard for serializing hyperlinks in JSON responses. As standardized by the HAL specification, navigation controls must be provided in a dedicated links-container, named <code>_links</code>. This introduces a clear separation between the data and the interface controls, preventing possible naming conflicts. Link objects can reside on any level in the JSON tree. HAL response messages must explictly specify the corresponding media type.</p>
  <div class="example">
    <p>For example, a book resource may provide a self-referencing link.</p>
    <pre>
// Content-Type: application/hal+json
{
  "identifier": "14d3030c-3b61-4070-b902-342f80e99364",
  "title": "Da Vinci Code",
  "isbn": "902455991X",
  "_links": {
    "self": {
      "href": "https://api.example.org/v1/books/14d3030c-3b61-4070-b902-342f80e99364"
    }
  }
}
    </pre>
  </div>
</div>

<p class="note">Navigation controls should not be intermixed with functional identification. Information resources represent real-world entities, which are functionally identified outside the context of an individual API. The same entities may be exchanged via other channels or other (versions of) APIs, providing the same functional identifiers.</p>

<div class="rule" id="/hypermedia/link-href">
  <p class="rulelab"><strong>/hypermedia/link-href</strong>: Provide at least an <code>href</code> attribute for every link object</p>
  <p>A link object must at least contain an <code>href</code> attribute with an absolute URI as value. Additionally, a <code>title</code> attribute may be provided for providing a human-readable description of the link. Other attributes should not be used.</p>
</div>

<div class="rule" id="/hypermedia/self-link">
  <p class="rulelab"><strong>/hypermedia/self-link</strong>: Provide self-referencing links for all resources</p>
  <p>In case a JSON object represents an entity which is exposed as an individual resource within the API, a self-referencing link with relation type <code>self</code> must be provided. This includes resources which are (partially) embedded in other resources. Self-referencing links typically do not contain a <code>title</code> attribute.</p>
  <div class="example">
    <p>For example, a book resource may provide a self-reference for itself and for its author (which resides in a nested object).</p>
    <pre>
{
  "identifier": "14d3030c-3b61-4070-b902-342f80e99364",
  "title": "Da Vinci Code",
  "isbn": "902455991X",
  "_embedded": {
    "author": {
      "identifier": "8e1dbefc-452f-47f9-a104-3faa7eb217aa",
      "name": "Dan Brown",
      "_links": {
        "self": {
          "href": "https://api.example.org/v1/authors/8e1dbefc-452f-47f9-a104-3faa7eb217aa",
        }
      }
    }
  },
  "_links": {
    "self": {
      "href": "https://api.example.org/v1/books/14d3030c-3b61-4070-b902-342f80e99364"
    }
  }
}
    </pre>
  </div>
</div>

<div class="rule" id="/hypermedia/nav-get">
  <p class="rulelab"><strong>/hypermedia/nav-get</strong>: Provide navigational links pointing to GET operations only</p>
  <p>Navigation controls may be provided, only when pointing to read (GET) operations. Other operations require more prior knowledge for client applications to be able to use them in a meaningful manner.</p>
</div>

<div class="rule" id="/hypermedia/nav-functional">
  <p class="rulelab"><strong>/hypermedia/nav-functional</strong>: Only provide navigational links when there is a clear functional goal</p>
  <p>While it might be tempting to provide navigation controls for every possible client interaction, navigation links must be added sparingly. Only when there is a clear functional goal / added value, additional navigation controls should be provided.</p>
</div>

### External links

External links are references to URIs outside of the scope of the originating API. These links can point to literally any location on the web; they may even point to URIs which are not dereferencable at all (e.g. in case they are used as a universal identifier only). A few examples:

- Links to related documents, such as images, PDF documents etc.
- Links to HTML web pages, providing human-friendly content
- Links to universal standards, such as RDF vocabularies

<div class="rule" id="/hypermedia/external-links">
  <p class="rulelab"><strong>/hypermedia/external-links</strong>: Treat external links as regular resource attributes</p>
  <p>External links must be considered in the same way as regular resource attributes.</p>
  <div class="example">
    <p>For example, a book resource may provide a link to the cover image:</p>
    <pre>
{
  "identifier": "14d3030c-3b61-4070-b902-342f80e99364",
  "title": "Da Vinci Code",
  "isbn": "902455991X",
  "cover": "https://cdn.example.org/covers/davincicode.png",
  "website": "https://danbrown.com/the-davinci-code/",
  "_links": {
    "self": {
      "href": "https://api.example.org/v1/books/14d3030c-3b61-4070-b902-342f80e99364"
    }
  }
}
    </pre>
</div>
