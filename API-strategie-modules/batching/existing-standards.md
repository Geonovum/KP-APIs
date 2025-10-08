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
