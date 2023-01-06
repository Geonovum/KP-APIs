# Appendix

## Old CRS negotiation method

An older method of specifying CRS in the headers of requests is described in this appendix. It was part of the first version of the "Geospatial Extension" which was never ratified. APIs that already support this old header method can add support for the current parameter method (see [CRS negotiation](./crs.md#crs-negotiation)) while still supporting the header method for a certain period. Supporting both the new method (using parameters) and the old (using headers) is trivial. 

If a client specifies CRS using a parameter AND in the header, the parameter takes precedence and the CRS in the header is ignored.

What follows is the original description of the rule in the old Geospatial Extension. 

<p class="rulelab"><strong>Rule</strong>: Pass the coordinate reference system (CRS) of the request and the response in the headers</p>

The coordinate reference system (CRS) for both the request and the response are passed as part of the request headers and response headers. In case this header is missing, send the HTTP status code <code>412 Precondition Failed</code>.

The following headers are purely meant for negotiation between the client and the server. Depending on the application, the request not only contains geometries but also specific meta data, e.g. the original realization including the collection date.

Request and response may be based on another coordinate reference system. This applies the HTTP-mechanism for content negotiation. The CRS of the geometry in the request (request body) is specified using the header `Content-Crs`.

|HTTP header|Value|Explanation|
|-|-|-|
|`Content-Crs`|EPSG:4326|WGS 84, global|
|`Content-Crs`|EPSG:3857|Pseudo Mercator, global|
|`Content-Crs`|EPSG:4258|ETRS89, European|
|`Content-Crs`|EPSG:28992|RD, Dutch|

The preferred CRS for the geometry in the response (response body) is specified using the header `Accept-Crs`.

|HTTP header|Value|Explanation|
|-|-|-|
|`Accept-Crs`|EPSG:4326|WGS 84, global|
|`Accept-Crs`|EPSG:3857|Pseudo Mercator, global|
|`Accept-Crs`|EPSG:4258|ETRS89, European|
|`Accept-Crs`|EPSG:28992|RD, Dutch|

<p class="rulelab"><strong>Rule</strong>: Use content negotiation to serve different CRSs</p>
  <p>The CRS for the geometry in the response body is defined using the <code>Accept-Crs</code> header. In case the API does not support the requested CRS, send the HTTP status code <code>406 Not Acceptable</code>.</p>
