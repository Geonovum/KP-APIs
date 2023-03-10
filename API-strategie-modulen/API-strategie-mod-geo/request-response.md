# Request and response

Providing requested resources is the essence of any API. This also applies to REST APIs that handle geospatial data. There are, however, some specific aspects when dealing with geospatial data in REST APIs. The most important aspects are described in this chapter: 
- how to encode geometries in APIs
- how to supply a spatial filter in the call (request)
- how to return results of a spatial search

When requesting information, for example about cadastral parcels, users do not necessarily require the geometry, even if they used a spatial filter. A name or parcel ID may be sufficient.

<aside class="note">
This module does not describe how to supply a geometry as part of a resource for storage, i.e. when creating, replacing or updating resources. [OGC API Features part 4](http://docs.ogc.org/DRAFTS/20-002.html), which is still in development, will address this. In general, this would be done using a POST request with `Content-crs` header to indicate the CRS used.
</aside>

## GeoJSON

[[rfc7946]] describes the GeoJSON format, including a convention for describing 2D geometric objects in CRS84. In the Geospatial module of the API strategy we adopt the GeoJSON conventions for describing geometry objects. The convention is extended to allow alternative projections.  

<div class="rule" id="api-geo-1">
  <p class="rulelab"><strong>API-GEO-1</strong>: Support GeoJSON for geospatial APIs</p>
  <p>For representing 2D geometric information in an API, preferably use the convention for describing geometry as defined in the GeoJSON format [[rfc7946]]. Support GeoJSON as described in OGC API Features <a href="https://docs.ogc.org/is/17-069r3/17-069r3.html#_requirements_class_geojson">Requirements class 8.3</a> [[ogcapi-features-1]]. </p>
  <h4 class="rulelab">How to test</h4>
  <ul>
    <li>Request a resource that includes feature content (i.e., coordinates) with response media type of <code>application/geo+json</code>. This must be answered with a 200-response.</li>
    <li>Validate that the returned document is a GeoJSON document.</li>  
  </ul>
</div>

<aside class="note">
GeoJSON does not cover all use cases. For example, it is not possible to store circular arc geometries or solids in GeoJSON. In such cases, there are several valid options: 

- Use alternative standardized formats for geospatial data, such as [WKT](https://www.w3.org/TR/sdw-bp/#dfn-well-known-text-(wkt)) or its binary equivalent WKB; GML [iso-19136-2007]; or in future [OGC JSON-FG](https://docs.ogc.org/DRAFTS/21-045.html) (currently a draft standard). 
- When supporting GML, do this according to OGC API Features [Requirements class 8.4](https://docs.ogc.org/is/17-069r3/17-069r3.html#_requirements_class_geography_markup_language_gml_simple_features_profile_level_0) for GML Simple Features level 0, or [Requirements class 8.4](https://docs.ogc.org/is/17-069r3/17-069r3.html#_requirements_class_geography_markup_language_gml_simple_features_profile_level_2) for GML Simple Features level 2. 
- Use a workaround, e.g. convert circular lines / arcs to regular linestrings. 

Example of embedding WKT in a JSON object using the following definition for a JSON object:
<pre>
building:
  type: object
  required:
    - geometry
  properties:
    geometry:
      type: string
      format: wkt
</pre>
Sample response:
<pre>
{
  "building": {
    "geometry": "POLYGON Z((194174.445 465873.676 0, 194174.452 465872.291 0, 194158.154 465872.213 0, 194158.226 465856.695 0, 194223.89 465856.969 0, 194223.821 465872.48 0, 194207.529 465872.415 0, 194207.505 465882.528 0, 194207.498 465883.902 0, 194223.799 465883.967 0, 194223.732 465899.48 0, 194216.55 465899.45 0, 194215.15 465899.445 0, 194213.85 465899.439 0, 194158.068 465899.211 0, 194158.148 465883.685 0, 194174.42 465883.767 0, 194174.445 465873.676 0))"
  }
}
</pre>

Example of embedding WKB in a JSON object using the following definition for a JSON object:
<pre>
building:
  type: object
  required:
    - geometry
  properties:
    geometry:
      type: string
      format: wkb
</pre>
Sample response:
<pre>
{
  "building": {
    "geometry": "01030000A0F71C00000100000012000000F6285C8FF3B30741105839B4466F1C4100000000000000000E2DB29DF3B307416DE7FB29416F1C4100000000000000001D5A643B71B3074108AC1CDA406F1C4100000000000000008716D9CE71B307417B14AEC7026F1C410000000000000000EC51B81E7FB50741378941E0036F1C410000000000000000B07268917EB50741B81E85EB416F1C4100000000000000001D5A643BFCB407418FC2F5A8416F1C410000000000000000A4703D0AFCB407413108AC1C6A6F1C4100000000000000008B6CE7FBFBB4074154E3A59B6F6F1C410000000000000000AC1C5A647EB507417D3F35DE6F6F1C410000000000000000E5D022DB7DB50741B81E85EBAD6F1C4100000000000000006666666644B50741CDCCCCCCAD6F1C4100000000000000003333333339B507417B14AEC7AD6F1C410000000000000000CDCCCCCC2EB507414C3789C1AD6F1C4100000000000000008195438B70B307414E6210D8AC6F1C410000000000000000BE9F1A2F71B30741D7A370BD6E6F1C410000000000000000C3F5285CF3B30741B07268116F6F1C410000000000000000F6285C8FF3B30741105839B4466F1C410000000000000000"
  }
}
</pre>

Example of embedding GML as a base64 string in a JSON object using the following definition for a JSON object:
<pre>
terrain:
  type: object
  required:
    - geometry
  properties:
    geometry:
      type: string
      format: byte
</pre>
Sample response:
<pre>
{
  "terrain": {
    "geometry": "PGdtbDpQb2x5Z29uIHhtbG5zOmdtbD0iaHR0cDovL3d3dy5vcGVuZ2lzLm5ldC9nbWwiIHNyc05hbWU9IkVQU0c6Mjg5OTIiPgogPGdtbDpleHRlcmlvcj4KICA8Z21sOlJpbmc+CiAgIDxnbWw6Y3VydmVNZW1iZXI+CiAgICA8Z21sOkN1cnZlPgogICAgIDxnbWw6c2VnbWVudHM+CiAgICAgIDxnbWw6TGluZVN0cmluZ1NlZ21lbnQ+CiAgICAgICA8Z21sOnBvc0xpc3Qgc3JzRGltZW5zaW9uPSIyIj4xMzE0NzIuNTc5IDU0MDkwNy41NTcgMTMxNDc1LjMyMyA1NDA5MDguOTI5IDEzMTQ3Ni4xNDYgNTQwOTA5LjM0MSAxMzE0NzUuNzA2IDU0MDkxMC4yMTk8L2dtbDpwb3NMaXN0PgogICAgICA8L2dtbDpMaW5lU3RyaW5nU2VnbWVudD4KICAgICAgPGdtbDpBcmM+CiAgICAgICA8Z21sOnBvc0xpc3Qgc3JzRGltZW5zaW9uPSIyIj4xMzE0NzUuNzA2IDU0MDkxMC4yMTkgMTMxNDc1LjE4MSA1NDA5MTAuNTQzIDEzMTQ3NC41NjcgNTQwOTEwLjQ4ODwvZ21sOnBvc0xpc3Q+CiAgICAgIDwvZ21sOkFyYz4KICAgICAgPGdtbDpMaW5lU3RyaW5nU2VnbWVudD4KICAgICAgIDxnbWw6cG9zTGlzdCBzcnNEaW1lbnNpb249IjIiPjEzMTQ3NC41NjcgNTQwOTEwLjQ4OCAxMzE0NzIuNjA4IDU0MDkwOS41MDc8L2dtbDpwb3NMaXN0PgogICAgICA8L2dtbDpMaW5lU3RyaW5nU2VnbWVudD4KICAgICAgPGdtbDpBcmM+CiAgICAgICA8Z21sOnBvc0xpc3Qgc3JzRGltZW5zaW9uPSIyIj4xMzE0NzIuNjA4IDU0MDkwOS41MDcgMTMxNDcyLjE5NSA1NDA5MDkuMDQ5IDEzMTQ3Mi4xNDAgNTQwOTA4LjQzNTwvZ21sOnBvc0xpc3Q+CiAgICAgIDwvZ21sOkFyYz4KICAgICAgPGdtbDpMaW5lU3RyaW5nU2VnbWVudD4KICAgICAgIDxnbWw6cG9zTGlzdCBzcnNEaW1lbnNpb249IjIiPjEzMTQ3Mi4xNDAgNTQwOTA4LjQzNSAxMzE0NzIuNTc5IDU0MDkwNy41NTc8L2dtbDpwb3NMaXN0PgogICAgICA8L2dtbDpMaW5lU3RyaW5nU2VnbWVudD4KICAgICA8L2dtbDpzZWdtZW50cz4KICAgIDwvZ21sOkN1cnZlPgogICA8L2dtbDpjdXJ2ZU1lbWJlcj4KICA8L2dtbDpSaW5nPgogPC9nbWw6ZXh0ZXJpb3I+CjwvZ21sOlBvbHlnb24+"
  }
}
</pre>

</aside>

## Call (requests)

A simple spatial filter can be supplied as a bounding box. This is a common way of filtering spatial data and can be supplied as a parameter. We adopt the OGC API Features [[ogcapi-features-1]] bounding box parameter:

<div class="rule" id="api-geo-2">
  <p class="rulelab"><strong>API-GEO-2</strong>: Supply a simple spatial filter as a bounding box parameter</p>
  <p>Support the <a href="https://docs.ogc.org/is/17-069r4/17-069r4.html#_parameter_bbox">OGC API Features part 1 <code>bbox</code> query parameter</a> in conformance to the standard. 
  <pre>
   GET /api/v1/buildings?bbox=5.4,52.1,5.5,53.2</pre>
  </p>
  <p>Note that if a resource contains multiple geometries, it is up to the provider to decide if a single or multiple geometries are returned and that the provider shall clearly document this behavior.
  </p>
  <p> The default spatial operator 'intersects' is used to determine which resources are returned.
  </P>
  <p> Due to possible performance issue, especially when a combination of filters is used, a provider may decide to limit the size of the bounding box or the number of results. It is also up to the provider to decide if an error is returned in such cases. 
  The provider shall clearly document this behavior.
  </P>
  <p>
  The provider shall be able to provide resources that do not have a geometry property and are related to resources that match the bounding box filter.
  </p>
  <p> An error shall be given if the provided coordinates are outside the specified coordinate reference system.
  </p>
  <h4 class="rulelab">How to test</h4>
  <ul>
    <li>Issue an HTTP GET request to the API, including the <code>bbox</code> query parameter.</li>
    <li>Validate that a document was returned with a status code 200.</li>
    <li>Verify that only features that have a spatial geometry that intersects the bounding box are returned as part of the result set.</li>
  </ul>
</div>

<aside class="note">
Spatial filtering is an extensive topic. There are use cases for geospatial operators like <code>intersects</code> or <code>within</code>. Geospatial filters can be large and complex, which sometimes causes problems since <code>GET</code> may not have a payload (although supported by some clients). 

More complex spatial filtering is not addressed in this module. A new API Design Rules module on filtering will address spatial as well as non-spatial filtering. [[ogcapi-features-3]] will provide input for this.

However, until the filtering module is written, the geospatial module retains rule API-GEO-3 about dealing with results of a global spatial query. This rule may be moved to the filtering module at a later stage.
</aside>

<div class="rule" id="api-geo-3">
  <p class="rulelab"><strong>API-GEO-3</strong>: Place results of a global spatial query in the relevant geometric context</p>
  <p>In case of a global query <code>/api/v1/_search</code>, results should be placed in the relevant geometric context, because results from different <a href="https://publicatie.centrumvoorstandaarden.nl/api/adr/#resources">collections</a>, i.e. different sets of resources of the same type, are retrieved. Express the name of the collection to which the results belong in the singular form using the property <code>type</code>. For example:</p>
  <pre>
  // POST /api/v1/_search:
  {
    "currentPage": 1,
    "nextPage": 2,
    "pageSize": 10,
    "_embedded": {
      "items": [
        {
          "type": "enkelbestemming",
          "_links": {
            "self": {
              "href": "https://api.example.org/v1/enkelbestemmingen/1234"
            }
          }
        },
        {
          "type": "dubbelbestemming",
          "_links": {
            "self": {
              "href": "https://api.example.org/v1/dubbelbestemmingen/8765"
            }
          }
        }
      ]
    }
  }</pre>
  <h4 class="rulelab">How to test</h4>
  <p>Validate that the returned document contains the expected <code>type</code> property for each member.</p>
</div>

## Result (response)

In a REST API that uses JSON as the data format, the geometry is returned as a GeoJSON Geometry object.

<div class="rule" id="api-geo-4">
  <p class="rulelab"><strong>API-GEO-4</strong>: Embed GeoJSON Geometry object as part of the JSON resource</p>
  <p>When a JSON (<code>application/json</code>) response contains a geometry, represent it in the same way as the <code>Geometry</code> object of GeoJSON.</p>
  <pre>
  {
    "naam": "Paleis Soestdijk",
    "locatie":  {
      "type": "Point",
      "coordinates": [5.2795,52.1933]
    }
  }</pre>
  <h4 class="rulelab">How to test</h4>
  <p>Validate that the returned document represents coordinates using: </p>
  <ul>
    <li>a property <code>type</code> containing the name of one of the GeoJSON geometry types, and</li>
    <li>a property <code>coordinates</code> containing an array with a minimum of 2 numbers.</li>
  </ul>
</div>