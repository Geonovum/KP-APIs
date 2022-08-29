# Request and response
REST APIs for handling geospatial features may provide spatial filtering. There is a distinction between retrieving geometries in the result (response) and supplying a spatial filter in the call (request). When requesting information, for example about cadastral parcels, users do not necessarily require the geometry. A name or parcel ID may be sufficient.

## GeoJSON

[[rfc7946]] describes the GeoJSON format, including a convention for describing 2D geometric objects in WGS84 (EPSG:4326). In this extension we adopt the GeoJSON conventions for describing geometry objects. The convention is extended to allow alternative projections.  

<div class="rule" id="api-34">
  <p class="rulelab"><strong>API-34</strong>: Support GeoJSON for geospatial APIs</p>
  <p>For representing 2D geometric information in an API, preferably use the convention for describing geometry as defined in the GeoJSON format [[rfc7946]]. Support GeoJSON as described in OGC API Features <a href="https://docs.ogc.org/is/17-069r3/17-069r3.html#_requirements_class_geojson">Requirements class 8.3</a> [[ogcapi-features-1]]. </p>
</div>

<aside class="note">
GeoJSON does not cover all use cases. For example, it is not possible to store circular arc geometries or solids in GeoJSON. In such cases, there are several valid options: 

- Use alternative standardized formats for geospatial data, such as [WKT](https://www.w3.org/TR/sdw-bp/#dfn-well-known-text-(wkt)) or its binary equivalent WKB; GML [iso-19136-2007]; or in future [OGC JSON-FG](https://docs.ogc.org/DRAFTS/21-045.html) (currently a draft standard). 
- When supporting GML, do this according to OGC API Features [Requirements class 8.4](https://docs.ogc.org/is/17-069r3/17-069r3.html#_requirements_class_geography_markup_language_gml_simple_features_profile_level_0) for GML Simple Features level 0, or [Requirements class 8.4](https://docs.ogc.org/is/17-069r3/17-069r3.html#_requirements_class_geography_markup_language_gml_simple_features_profile_level_2) for GML Simple Features level 2. 
- Use a workaround, e.g. convert circular lines / arcs to regular linestrings. 

</aside>

## Call (requests)

A simple spatial filter can be supplied as a bounding box. This is a common way of filtering spatial data and can be supplied as a parameter. We adopt the OGC API Features [[ogcapi-features-1]] bounding box parameter:

<div class="rule" id="api-36">
  <p class="rulelab"><strong>API-36</strong>: Supply a simple spatial filter as a bounding box parameter</p>
  <p>Support the <a href="https://docs.ogc.org/is/17-069r4/17-069r4.html#_parameter_bbox">OGC API Features part 1 <code>bbox</code> parameter</a> in conformance to the standard.
  <pre>
   GET /api/v1/panden?bbox=5.4,52.1,5.5,53.2
  </pre>
  </p>
</div>

<aside class="note">
Spatial filtering is an extensive topic. There are use cases for geospatial operators like <code>intersects</code> or <code>within</code>. Geospatial filters can be large and complex, which sometimes causes problems since <code>GET</code> may not have a payload (although supported by some clients). 

More complex spatial filtering is not addressed in this extension. A new API Design Rules extension on filtering will address spatial as well as non-spatial filtering. [[ogcapi-features-3]] will provide input for this.
</aside>

<div class="rule" id="api-39">
  <p class="rulelab"><strong>API-39</strong>: Place results of a global spatial query in the relevant geometric context</p>
  <p>In case of a global query <code>/api/v1/_zoek</code>, results should be placed in the relevant geometric context, because results from different collections are retrieved. Express the name of the collection to which the results belongs in the singular form using the property <code>type</code>. For example:</p>
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
  }
  </pre>
</div>

## Result (response)

In a JSON API the geometry is returned as a GeoJSON Geometry object.

<div class="rule" id="api-35">
  <p class="rulelab"><strong>API-35</strong>: Embed GeoJSON Geometry object as part of the JSON resource</p>
  <p>When a JSON (<code>application/json</code>) response contains a geometry, represent it in the same way as the <code>Geometry</code> object of GeoJSON.</p>
  <pre>
  {
    "naam": "Paleis Soestdijk",
    "locatie":  {
      "type": "Point",
      "coordinates": [5.2795,52.1933]
    }
  }
  </pre>
</div>