# Existing standards

A number of widely used APIs and standards support batching. Approaches vary along several axes: endpoint scope (per-collection vs global), payload shape (JSON envelope vs multipart/mixed), operation types (read-only vs mixed read/write), result mapping (position vs correlation IDs), and error semantics (uniform result vs per-subrequest HTTP response).

## Elasticsearch `Multi-Get`

Elasticsearch exposes a per-index and global `_mget` endpoint that retrieves multiple documents by ID in a single call. Clients submit an array of document identifiers in the request payload and receive a result per requested identifier. The model is read-only, index-scoped by default, and result order corresponds to the request order.

Example request payload:

```json
{
  "docs": [
    {
      "_id": "1"
    },
    {
      "_id": "2"
    }
  ]
}
```

## OData `$batch`

OData defines a global `$batch` endpoint that can combine heterogeneous operations (reads and writes) into a single HTTP request. Historically, batching used media type `multipart/mixed`; OData v4 additionally defines a JSON batch request/response format as part of the [[OData JSON Format]]. Responses contain per-subrequest status, headers, and bodies, effectively embedding multiple HTTP exchanges in one envelope. Ordering and dependencies can be expressed.

Example request payload (JSON batch format):

```json
{
  "requests": [
    {
      "id": "1",
      "method": "get",
      "url": "https://example.org/api/buildings/1"
    },
    {
      "id": "2",
      "method": "get",
      "url": "https://example.org/api/buildings/2"
    }
  ]
}
```

## Google APIs

Several Google APIs accept batch requests as a single HTTP call with media type `multipart/mixed`, where each part is a nested HTTP request. This enables combining multiple heterogeneous operations; responses mirror the embedded HTTP results. The format prioritizes transport flexibility but is more complex to implement efficiently than a pure-JSON envelope.

## Relation to this module

The working group analyzed the standards described above and made deliberate trade-offs to optimize for simplicity, predictability, and the specific needs of Dutch government APIs.

### What was adopted

| Aspect                              | Adopted from  | How it is applied                                                                                                                           |
| ----------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Per-collection endpoint             | Elasticsearch | Batch endpoints are scoped per collection (`/_batch` suffix), not global. This keeps semantics clear and avoids mixing unrelated resources. |
| JSON envelope with `requests` array | OData         | The request payload uses a top-level `requests` property containing an ordered array, similar to OData's JSON batch format.                 |
| Positional result mapping           | Elasticsearch | Results are returned in the same order as the requests, allowing clients to map responses by array index without correlation IDs.           |

### What was not adopted

| Aspect                        | Present in         | Reason for exclusion                                                                                                                                                                                           |
| ----------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Global batch endpoint         | OData, Google APIs | A single global endpoint that can address any resource increases complexity and reduces predictability. Per-collection endpoints are simpler to implement, document, and secure.                               |
| Multipart/mixed format        | OData, Google APIs | The `multipart/mixed` format embeds full HTTP requests and responses, adding parsing complexity. A pure JSON format is easier to implement, debug, and consume in modern client libraries.                     |
| Per-subrequest HTTP semantics | OData, Google APIs | Embedding HTTP status codes and headers per subrequest adds overhead and complexity. This module uses `null` for missing resources and a separate error response for batch-level failures, reducing ambiguity. |
| Correlation IDs               | OData              | Requiring clients to generate and match correlation IDs adds implementation burden. Positional mapping (by array index) achieves the same goal more simply.                                                    |
| Mixed read/write operations   | OData, Google APIs | Supporting heterogeneous operations (GET, POST, PUT, DELETE) in a single batch increases transactional complexity and error handling. This module focuses on read-only batching.                               |
| Dependency expressions        | OData              | OData allows expressing dependencies between subrequests (e.g., use the result of request 1 in request 2). This adds significant complexity and is not needed for the read-only use case.                      |

### Alternative considered: collection filtering

The working group also evaluated **collection filtering via query parameters** as an alternative to a dedicated batch endpoint. Batch support could be implemented by passing a series of criteria as filters to an existing collection endpoint. However, this approach has significant drawbacks compared to the standards above:

- URL length limitations may cause problems
- Expressing a list of complex criteria in a URL is difficult
- Clients would need to handle pagination
- Clients would need to detect which objects yield results and map results back to criteria
- Clients might need to re-group and/or re-sort results

A dedicated batch endpoint with a JSON request body avoids these issues while providing the same benefits as Elasticsearch and OData.
