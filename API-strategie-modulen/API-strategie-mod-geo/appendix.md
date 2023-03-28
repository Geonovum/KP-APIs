# Appendix - deprecated rules
This appendix contains some of the rules that were described in the [first version](https://docs.geostandaarden.nl/api/API-Strategie-ext/#geospatial) of the "Geospatial Extension", which was never ratified. Only those rules that are still relevant in some situations or do not have a good replacement in the current Geospatial model are retained here. They are shown here only as information. 

## POST endpoint for geospatial queries

<aside class="note">Two rules related to using a POST endpoint for geospatial queries were deprecated because it is expected that a new API Design Rules module "Filtering" will address the issue of using POST for geospatial queries. Until then, the old rules may still be of use.

What follows is the original description of the rules in the old Geospatial Extension. 
</aside>

A spatial filter can be complex and large. It is best practice to supply complex queries in the body, not in the request URI. Since `GET` may not have a payload (although supported by some clients) use a `POST` request to a separate endpoint. For example, a GEO query to all *panden* where the geometry in the field `_geo` (there may be multiple geometry fields) contains a GeoJSON object (in this case a `Point`, so one coordinate pair):

<p class="rulelab"><strong>Deprecated rule (was: API-36)</strong>: Provide a <code>POST</code> endpoint for geo queries</p>

Spatial queries are sent in a `POST` to a dedicated endpoint.
  <pre>
  // POST /api/v1/panden/_zoek with request body:
  {
    "_geo": {
      "contains": {
        "type": "Point",
        "coordinates": [5.9623762, 52.2118093]
      }
    }
  }
  </pre>

Other geospatial operators like `intersects` or `within` can be used as well.

<p class="rulelab"><strong>Deprecated rule (was: API-37)</strong>: Support mixed queries at <code>POST</code> endpoints</p>

The `POST` endpoint is preferably set up as a generic query endpoint to support combined queries:

  <pre>
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
  </pre>

## Old CRS negotiation method

<aside class="note">An older method of specifying CRS in the headers of requests was part of the first version of the "Geospatial Extension" which was never ratified. APIs that already support this old header method can add support for the current parameter method (see [CRS negotiation](./crs.md#crs-negotiation)) while still supporting the header method for a certain period. Supporting both the new method (using parameters) and the old (using headers) is trivial. 

If a client specifies CRS using a parameter AND in the header, the parameter takes precedence and the CRS in the header is ignored.

What follows is the original description of the rule in the old Geospatial Extension. 
</aside>

<p class="rulelab"><strong>Deprecated rule (was: API-40)</strong>: Pass the coordinate reference system (CRS) of the request and the response in the headers</p>

The coordinate reference system (CRS) for both the request and the response are passed as part of the request headers and response headers. In case this header is missing, send the HTTP status code `412 Precondition Failed`.

The following headers are purely meant for negotiation between the client and the server. Depending on the application, the request not only contains geometries but also specific meta data, e.g. the original realization including the collection date.

Request and response may be based on another coordinate reference system. This applies the HTTP-mechanism for content negotiation. The CRS of the geometry in the request (request body) is specified using the header `Content-Crs`.

|HTTP header|Value|Explanation|
|-|-|-|
|`Content-Crs`|EPSG:4326|CRS84, global|
|`Content-Crs`|EPSG:3857|WGS 84 Pseudo Mercator, global|
|`Content-Crs`|EPSG:4258|ETRS89, European|
|`Content-Crs`|EPSG:28992|RD, Dutch|

The preferred CRS for the geometry in the response (response body) is specified using the header `Accept-Crs`.

|HTTP header|Value|Explanation|
|-|-|-|
|`Accept-Crs`|EPSG:4326|CRS84, global|
|`Accept-Crs`|EPSG:3857|WGS 84 Pseudo Mercator, global|
|`Accept-Crs`|EPSG:4258|ETRS89, European|
|`Accept-Crs`|EPSG:28992|RD, Dutch|

<p class="rulelab"><strong>Deprecated rule (was: API-41)</strong>: Use content negotiation to serve different CRSs</p>

The CRS for the geometry in the response body is defined using the `Accept-Crs` header. In case the API does not support the requested CRS, send the HTTP status code `406 Not Acceptable`.
