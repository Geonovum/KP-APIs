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
  <p>For representing 2D geometric information in an API, preferably use the convention for describing geometry as defined in the GeoJSON format [[rfc7946]]. Support GeoJSON as described in OGC API Features <a href="https://docs.ogc.org/is/17-069r3/17-069r3.html#_requirements_class_geojson">Requirements class 8.3</a> [[ogcapi-features-1]]. Use the templates OGC provides for the definition of the schemas for the GeoJSON responses in OpenAPI definitions. These are available at <a href="http://schemas.opengis.net/ogcapi/features/part1/1.0/openapi/schemas/featureCollectionGeoJSON.yaml">featureCollectionGeoJSON.yaml</a> and <a href="http://schemas.opengis.net/ogcapi/features/part1/1.0/openapi/schemas/featureGeoJSON.yaml">featureGeoJSON.yaml</a>. </p>
  <h4 class="rulelab">How to test</h4>
  <ul>
    <li>Issue an HTTP GET request to the API and request a resource that includes feature content (i.e., coordinates) with response media type of <code>application/geo+json</code>. This must be answered with a 200-response.</li>
    <li>Validate that the returned document is a GeoJSON document using the OGC schema definitions <code>featureCollectionGeoJSON.yaml</code> and <code>featureGeoJSON.yaml</code>.</li>  
  </ul>
</div>

<aside class="note">
GeoJSON does not cover all use cases. For example, it is not possible to store circular arc geometries or solids in GeoJSON. In such cases, there are several valid options: 

- Use alternative standardized formats for geospatial data, such as [WKT](https://www.w3.org/TR/sdw-bp/#dfn-well-known-text-(wkt)) or its binary equivalent WKB; GML [iso-19136-2007]; or in future [OGC JSON-FG](https://docs.ogc.org/DRAFTS/21-045.html) (currently a draft standard). 
- When supporting GML, do this according to OGC API Features [Requirements class 8.4](https://docs.ogc.org/is/17-069r3/17-069r3.html#_requirements_class_geography_markup_language_gml_simple_features_profile_level_0) for GML Simple Features level 0, or [Requirements class 8.4](https://docs.ogc.org/is/17-069r3/17-069r3.html#_requirements_class_geography_markup_language_gml_simple_features_profile_level_2) for GML Simple Features level 2. 
- Use a workaround, e.g. convert circular lines / arcs to regular linestrings. 

</aside>

## Call (requests)

A simple spatial filter can be supplied as a bounding box. This is a common way of filtering spatial data and can be supplied as a parameter. We adopt the OGC API Features [[ogcapi-features-1]] bounding box parameter:

<div class="rule" id="api-geo-2">
  <p class="rulelab"><strong>API-GEO-2</strong>: Supply a simple spatial filter as a bounding box parameter</p>
  <p>Support the <a href="https://docs.ogc.org/is/17-069r4/17-069r4.html#_parameter_bbox">OGC API Features part 1 <code>bbox</code> parameter</a> in conformance to the standard.
  <pre>
   GET /api/v1/buildings?bbox=5.4,52.1,5.5,53.2</pre>
  </p>
  <h4 class="rulelab">How to test</h4>
  <ul>
    <li>Issue an HTTP GET request to the API, including the <code>bbox</code> parameter.</li>
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
  <p>In case of a global query <code>/api/v1/_search</code>, results should be placed in the relevant geometric context, because results from different collections are retrieved. Express the name of the collection to which the results belong in the singular form using the property <code>type</code>. For example:</p>
  <pre>
  // POST /api/v1/_zoek:
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
  <ul>
    <li>Issue an HTTP GET request to the API.</li>
    <li>Validate that the returned document contains the expected <code>type</code> property for each member.</li>
  </ul>
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
  <p>Issue an HTTP GET request to the API. Validate that the returned document represents coordinates using: </p>
  <ul>
    <li>a property <code>type</code> containing the name of one of the GeoJSON geometry types, and</li>
    <li>a property <code>coordinates</code> containing an array with a minimum of 2 numbers.</li>
  </ul>
</div>