## GEO support

<p class='warning'>This extension is in development and may be modified at any time.</p>

REST APIs for handling spatial geometries may provide spatial filtering. There is a distinction between retrieving geometries in the result (response) and supplying a spatial filter in the call (request). When requesting parcel information, users do not necessarily require the geometry. A name or parcel ID may be sufficient.

> [API principle: Support GeoJSON for GEO APIs](#api-34)

For GEO APIs, preferably use the GeoJSON standard [[rfc8142]].

### Result (response)

In a JSON API the geometry is returned as GeoJSON, wrapped in a separate GeoJSON object.

> [API principle: Include GeoJSON as part of the embedded resource in the JSON response](#api-35)

### Call (requests)

A spatial filter can be complex and large. It is best practice to supply complex queries in the body, not in the request URI. Since `GET` may not have a payload (although supported by some clients) use a `POST` request to a separate endpoint. For example, a GEO query to all *panden* where the geometry in the field `_geo` (there may be multiple geometry fields) contains a GeoJSON object (in this case a `Point`, so one coordinate pair):

```json
// POST /api/v1/panden/_zoek with request body:
{
  "_geo": {
    "contains": {
      "type": "Point",
      "coordinates": [5.9623762, 52.2118093]
    }
  }
}
```

> [API principle: Provide a `POST` endpoint for GEO queries](#api-36)

The `POST` endpoint is preferably set up as a generic query endpoint to support combined queries:

```json
// POST /api/v1/panden/_zoek with request body:
{
  "_geo": {
    "contains": {
      "type": "Point",
      "coordinates": [5.9623762, 52.2118093]
    }
  },
  "status": "Actief"
}
```

> [API principle: Support mixed queries at `POST` endpoints](#api-37)

Other GEO queries like `intersects` or `within` operators can be used as well. For further information, read: https://www.w3.org/TR/sdw-bp/#entity-level-links  

> [API principle: Put results of a global spatial query in the relevant geometric context](#api-38)

For example:

```json
// POST /api/v1/_zoek:
{
  "_embedded": {
    "results": [{
      "type": "enkelbestemming",
      "_links": {
        "self": {
          "title": "Enkelbestemming 1234",
          "href": "/enkelbestemmingen/1234"
        }
      }
    }, {
      "type": "dubbelbestemming",
      "_links": {
        "self": {
          "title": "Dubbelbestemming 8765",
          "href": "/dubbelbestemmingen/8765"
        }
      }
    }]
  }
}
```

### CRS-negotiation

The default CRS (Coordinate Reference System) for GeoJSON is WGS84. This is the global coordinate reference system that can b applied world-wide. Due the datum and the tectonic displacements it is not accurate enough for local coordinate reference systems like ETRS89 (EPSG:4258, European), or RD/Amersfoort (EPSG:28992, Dutch).

Since most client-side mapping libraries use WGS84, the W3C/OGC working group *Spatial Data on the Web* recommends to use this as the default coordinate reference system. Thus, spatial data can be mapped without any complex transformations. The API strategy caters for this supporting not only ETRS89 and RD/Amersfoort, but also WGS84 and Web Mercator (EPSG:3857).

> [API principle: Use ETRS89 as the preferred coordinate reference system (CRS)](#api-39)

The CRS can be specified for request and response individually using custom headers: RD/Amersfoort, ETRS89, WGS84, and Web Mercator.

The guiding priciples for CRS support:

- Source systems record coordinates as they enter the system (legal context);
- Coordinate reference systems API strategy: request/response in RD; ETRS89; WGS84; Web Mercator;
- Consider no-regret: record both in ETRS89 and RD/Amersfoort instead of on-the-fly transformation;
- Use RDNAPTRANS™ 2018 to transform RD/Amersfoort to ETRS89 (correction grid);
- Presentation depending on context (e.g. user requirements);
- Exchange format (notation) ETRS89 and WGS84 X Y in decimal degrees: DD.ddddddddd (for example: `5.962376256, 52.255023450`)
- Exchange format (notation) RD and Web Mercator X Y in meters: `195427.5200 311611.8400`

> [API principe: Pass the coordinate reference system (CRS) of the request and the response in the headers](#api-40)

The following headers are purely meant for negotiation between the client and the server. Depending on the application, the request not only contains geometries but also specific meta data, e.g. the original realistion including the collection date. 

Request and response may be based on another coordinate reference system. This applies the HTTP-mechanism for content negotiation. The CRS of the geometry in the request (request body) is specified using the header `Content-Crs`.

|HTTP header|Value|Explanation|
|-|-|-|
|`Content-Crs`|EPSG:4326|WGS84, global|
|`Content-Crs`|EPSG:3857|Web Mecator, global|
|`Content-Crs`|EPSG:4258|ETRS89, European|
|`Content-Crs`|EPSG:28992|RD/Amersfoort, Dutch|

The preferred CRS for the geometry in the response (response body) is specified using the header `Accept-Crs`.  

|HTTP header|Value|Explanation|
|-|-|-|
|`Accept-Crs`|EPSG:4326|WGS84, global|
|`Accept-Crs`|EPSG:3857|Web Mercator, global|
|`Accept-Crs`|EPSG:4258|ETRS89, European|
|`Accept-Crs`|EPSG:28992|RD/Amersfoort, Dutch|

### CRS transformation

Certified software is available to the national government to transform between coordinate reference systems.

> [API principle: Use content negotiation to serve different CRSs](#api-41)
