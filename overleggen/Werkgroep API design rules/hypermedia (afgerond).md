# Hypermedia working group notes

This document describes the thoughts, discussions and agreements that have been addressed in the hypermedia working group meetings. This document has no formal status and should be considered a living document that is still subject to discussion and can change anytime.

## JSON

This subject should be part of the JSON extension, but the following concerns were mentioned during our discussions:
* The top-level (root entity) of a resource, including collection resources, is always a JSON object. This is necessary to have the possibility to add resource (meta-)attributes, including links.
* When a resource describes multiple separately identifiable entities, every entity MUST reside in its own nested JSON object.

## Content negotiation

This subject deserves a paragraph on its own, but the following concerns were mentioned during our discussions:
* When supporting multiple response media types for a given resource, HTTP content negotiation must be used for determining the response media type for each individual transaction.
* When supporting multiple response media types for a given resource, every API is free to choose a default response media type.

## Navigational links

We have agreed that supporting navigational links is optional and that HAL should be exclusively used for navigational purposes within the scope of an individual API. The following rules only apply when implementing navigational links.

* Use the HAL media type for providing navigational links
* HAL links may only be used in API response payloads, not requests
* HAL links may only contain URLS, not URNs
* HAL links may only contain resource URLs within the scope of the originating API. APIs should not contain navigational links to other APIs, since this would introduce tight coupling.
* API responses may contain URLs as regular attribute values to refer to external non-API documents (e.g. web pages, images or PDFs).

To be discussed:
* Is plain JSON always required? Or is it okay to support at least JSON or JSON-HAL?
* How do we define which parts of HAL is relevant, since we're not implementing the full spec (CURIes, templating, profile, etc).
* Should we incorporate the `_embedded` attribute, since this introduces extra nesting, redundant links, and breaks compatibility with other standards (like JSON-LD).
* How does HAL relate to expand/fields parameters? We probably have to make these parameters HAL-independent?
* When (and when not) to provide links? For every possible action? Also for collection members or other embedded resources? is `_links` always required?
* Should we allow relative URLs? This might simplify implementation for service providers.
* Should we define standardized link relations? HAL states that link relations should be URIs when not registered by IANA.
* How to deal with operations which allow modifications (like sorting)?
* Should we incorporate non-GET operations?
* Clarify relationship with HATEOAS
* Is there a need for "resolver" endpoints?

## Semantic links

We have agreed that supporting semantic links is optional and is specifically targeted at providing semantics (meaning of the data). Semantic linking is based on existing Linked Data standards and addresses the following concerns:
* Globally unique identification of resources (URIs)
* Machine-readable typing information of resources
* Machine-readable metadata

The following rules only apply when implementing semantic links.

* Use URIs to refer to related non-API resources.
* Global identifiers should be placed in a JSON attribute with the key `@id` (compliant with the JSON-LD standard).
* Type identifiers should be placed in a JSON attribute with the key `@type` (compliant with the JSON-LD standard).
* The `@type` attribute may be a single value or array value (an entity could have more than one type).
* API responses having a JSON-based media type not being JSON-LD may contain a Link header for externally providing semantic context of the data. As stated by the JSON-LD specification, the standard link relation `http://www.w3.org/ns/json-ld#context` must be used.

To be discussed:
* How to distinguish between semantic links and non-semantic links (like web pages, images etc).

## Examples (for discussion)

JSON (`application/json`):

```
{
  "@id": "nen3610:NL.IMBAG.Nummeraanduiding.0200200000075716",
  "identificatie": "0200200000075716",
  "postcode": "7334DP",
  "huisnummer": 701,
  "status": "Naamgeving uitgegeven",
  "ligtAan": {
    "@id": "nen3610:NL.IMBAG.OpenbareRuimte.0200300022472362",
    "identificatie": "0200300022472362",
    "naam": "Laan van Westenenk"
  }
}
```

JSON-HAL (`application/hal+json` zonder gebruik `_embedded`):

```
{
  "@id": "nen3610:NL.IMBAG.Nummeraanduiding.0200200000075716",
  "identificatie": "0200200000075716",
  "postcode": "7334DP",
  "huisnummer": 701,
  "status": "Naamgeving uitgegeven",
  "ligtAan": {
    "@id": "nen3610:NL.IMBAG.OpenbareRuimte.0200300022472362",
    "identificatie": "0200300022472362",
    "naam": "Laan van Westenenk",
    "_links": {
      "self": {
        "href": "/api/v1/openbare-ruimten/0200300022472362"
      }
    }
  },
  "_links": {
    "self": {
      "href": "/api/v1/nummeraanduidingen/0200200000075716"
    }
  }
}
```

JSON-HAL (`application/hal+json` met gebruik `_embedded`):

```
{
  "@id": "nen3610:NL.IMBAG.Nummeraanduiding.0200200000075716",
  "identificatie": "0200200000075716",
  "postcode": "7334DP",
  "huisnummer": 701,
  "status": "Naamgeving uitgegeven",
  "_embedded": {
    "ligtAan": {
      "@id": "nen3610:NL.IMBAG.OpenbareRuimte.0200300022472362",
      "identificatie": "0200300022472362",
      "naam": "Laan van Westenenk",
      "_links": {
        "self": {
          "href": "/api/v1/openbare-ruimten/0200300022472362"
        }
      }
    }
  },
  "_links": {
    "self": {
      "href": "/api/v1/nummeraanduidingen/0200200000075716"
    },
    "ligtAan": {
      "href": "/api/v1/openbare-ruimten/0200300022472362"
    }
  }
}
```

JSON-LD (`application/ld+json`):

```
{
  "@context": {
    "@vocab": "http://bag.basisregistraties.overheid.nl/def/bag#"
  },
  "@id": "nen3610:NL.IMBAG.Nummeraanduiding.0200200000075716",
  "@type": "Nummeraanduiding",
  "identificatie": "0200200000075716",
  "postcode": "7334DP",
  "huisnummer": 701,
  "status": "Naamgeving uitgegeven",
  "ligtAan": {
    "@id": "nen3610:NL.IMBAG.OpenbareRuimte.0200300022472362",
    "@type": "OpenbareRuimte",
    "identificatie": "0200300022472362",
    "naam": "Laan van Westenenk"
  }
}
```

## Related issues

* https://github.com/Geonovum/KP-APIs/issues/6
* https://github.com/Geonovum/KP-APIs/issues/133
* https://github.com/Geonovum/KP-APIs/issues/283
* https://github.com/Geonovum/KP-APIs/issues/327
* https://github.com/Geonovum/KP-APIs/issues/352
