# Request and response

Providing requested resources is the essence of any API. This also applies to REST APIs that handle geospatial data. There are, however, some specific aspects when dealing with geospatial data in REST APIs. The most important aspects are described in this chapter: 
- how to encode geometries in APIs
- how to supply a spatial filter in the call (request)
- how to return results of a spatial search

When requesting information, for example about cadastral parcels, users do not necessarily require the geometry, even if they used a spatial filter. A name or parcel ID may be sufficient.

<aside class="note">
This module does not describe how to supply a geometry as part of a resource for storage, i.e. when creating, replacing or updating resources. [OGC API Features part 4](http://docs.ogc.org/DRAFTS/20-002.html), which is still in development, will address this. In general, this would be done using a POST request with <code>Content-Crs</code> header to indicate the CRS used.
</aside>

## GeoJSON

[[rfc7946]] describes the GeoJSON format, including a convention for describing 2D geometric objects in CRS84. In the Geospatial module of the API strategy we adopt the GeoJSON conventions for describing geometry objects. The convention is extended to allow alternative projections.
The GeoJSON conventions and extensions described in this module apply to both geometry passed in input parameters and responses.


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
  <p>Support the <a href="https://docs.ogc.org/is/17-069r4/17-069r4.html#_parameter_bbox">OGC API Features part 1 <code>bbox</code> query parameter</a> in conformance to the standard.</p> 
  <pre>
    GET /api/v1/buildings?bbox=5.4,52.1,5.5,53.2</pre>
  <p>Note that if a resource contains multiple geometries, it is up to the provider to decide if a single or multiple geometries are returned and that the provider shall clearly document this behavior.
  </p>
  <p> The default spatial operator <code>intersects</code> is used to determine which resources are returned.
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
    <li>Issue an HTTP GET request to the API, including the <code>bbox</code> query parameter and using <a href="https://docs.geostandaarden.nl/api/API-strategie-modulen/API-strategie-mod-geo/#crs-negotiation">CRS Negotiation</a>.</li>
    <li>Validate that a response with status code 200 is returned.</li>
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
  }
  </pre>
  <h4 class="rulelab">How to test</h4>
  <ul>
    <li>Issue an HTTP GET request to the API.</li>
    <li>Validate that the returned document contains the expected <code>type</code> property for each member.</li>
  </ul>
</div>

## Result (response)

In case a REST API shall comply to the OGC API Features specification, e.g. for usage in GIS applications, the following applies.

<div class="rule" id="api-geo-1">
  <p class="rulelab"><strong>API-GEO-1</strong>: Support GeoJSON for geospatial APIs</p>
  <p>For representing 2D geometric information in an API, use the convention for describing geometry as defined in the GeoJSON format [[rfc7946]]. Support GeoJSON as described in OGC API Features <a href="https://docs.ogc.org/is/17-069r3/17-069r3.html#_requirements_class_geojson">Requirements class 8.3</a> [[ogcapi-features-1]]. </p>
  Example: feature
  <pre>
  {
    "type": "Feature",
    "id": "0308100000022041",
    "geometry":  {
      "type": "Point",
      "coordinates": [5.2795,52.1933]
    },
    "properties": {
      "naam": "Paleis Soestdijk",
      ...
    },
    "links": [
    {
      "self": ""
    } 
    ]
  }
  </pre>

  Example: feature collection
  <pre>
  {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "id": "0308100000022041",
      "geometry":  {
        "type": "Point",
        "coordinates": [5.2795,52.1933]
      },
      "properties": {
        "naam": "Paleis Soestdijk",
        ...
      },
      "links": [
      {
        "self": ""
      } 
      ]
    }],
    "timeStamp" : "2023-02-22T10:32:23Z",
    "numberMatched" : "0308100000022041",
    "numberReturned" : "1",
    "links": [
    {
      "self": ""
    } ,
    {
      "next": ""
    } ,
    ]
  }
  </pre>
  <p>
  Note that:
  
  - The resources' properties (e.g. <code>naam</code>) are passed in the properties object. Depending on the implemented filter capabilities the properties object may contain all or a selection of the resources' properties.
  - The OGC API Fearures specification provides the possibility to add an array of links to a feature and feature collection, which may contain a self link and in case of a feature collection may contain navigation links.
  </p>
  <h4 class="rulelab">How to test</h4>
  <p>
  Test case 1:
  </p>
  <ul>
    <li>Request a single resource that includes feature content (i.e. coordinates) with response media type <code>application/geo+json</code> in the <code>Accept</code> header.</li>
    <li>Validate that a response with status code 200 is returned.</li>
    <li>Validate that <code>Content-Type</code> header contains <code>application/geo+json</code></li> 
    <li>Validate that the returned document is a GeoJSON Feature document.</li> 
  </ul>
  <p>
  Test case 2:
  </p>
  <ul>
    <li>Request a collection of resources that includes feature content (i.e. coordinates) with response media type <code>application/geo+json</code> in the <code>Accept</code> header.</li>
    <li>Validate that a response with status code 200 is returned.</li>
    <li>Validate that <code>Content-Type</code> header contains <code>application/geo+json</code></li> 
    <li>Validate that the returned document is a GeoJSON FeatureCollection document.</li> 
  </ul>
  <p>
  Test case 3:
  </p>
  <ul>
    <li>Request a single resource that does not include feature content (i.e. coordinates) with response media type <code>application/geo+json</code> or <code>application/json</code> in the <code>Accept</code> header.</li>
    <li>Validate that a response with status code 200 is returned.</li>
    <li>Validate that <code>Content-Type</code> header contains <code>application/json</code></li> 
    <li>Validate that the returned document is a JSON document.</li> 
  </ul>
  <p>
  Test case 4:
  </p>
  <ul>
    <li>Request a collection of resources that do not include feature content (i.e. coordinates) with response media type <code>application/geo+json</code> or <code>application/json</code> in the <code>Accept</code> header.</li>
    <li>Validate that a response with status code 200 is returned.</li>
    <li>Validate that <code>Content-Type</code> header contains <code>application/json</code></li> 
    <li>Validate that the returned document is a JSON document.</li> 
  </ul>
</div>

In case a REST API does not have to comply to the OGC API Features specification, e.g. for usage in administrative applications, the REST API shall use the JSON data format. If resources contain geometry, the geometry shall be returned as a GeoJSON <code>Geometry</code> object embedded in the resource. The media type <code>application/json</code> must be supported. The media type <code>application/geo+json</code> should not be supported while the resource does not comply to the GeoJSON specification, i.e. the response does not return a feature or feature collection.
A template for the definition of the schemas for the GeoJSON <code>Geometry</code> object in the responses in OpenAPI definitions are available [geometryGeoJSON.yaml](https://schemas.opengis.net/ogcapi/features/part1/1.0/openapi/schemas/geometryGeoJSON.yaml).
In case a collection of resources is returned, the name of the array containing the resources should be the plural of the resource name.

<div class="rule" id="api-geo-4">
  <p class="rulelab"><strong>API-GEO-4</strong>: Embed GeoJSON <code>Geometry</code> object as part of the JSON resource</p>
  <p>When a JSON (<code>application/json</code>) response contains a geometry, represent it in the same way as the <code>Geometry</code> object of GeoJSON.</p>

  Example: resource containing geometry
  <pre>
  {
    "identificatie": "0308100000022041",
    "naam": "Paleis Soestdijk",
    "geometrie":  {
      "type": "Point",
      "coordinates": [5.2795,52.1933]
    },
    ...,
    "_links": {
      {
        "self": ""
      }
    }
  }</pre>

 Example: resource containing geometry collection
  <pre>
  {
    "identificatie": "0308100000022041",
    "naam": "Paleis Soestdijk",
    "geometrie": {
      "type": "GeometryCollection",
      "geometries": [
        "type": "Point"
        "coordinates": [5.2795,52.1933]
      ]
    },
    ...,
    "_links": {
      {
        "self": ""
      }
    }
  }</pre>

  Example: collection of resources containing geometry
  <pre>
  {
    "&lt;plural of resource name&gt;": [
    {
      "identificatie": "0308100000022041",
      "naam": "Paleis Soestdijk",
      "geometrie":  {
        "type": "Point",
        "coordinates": [5.2795,52.1933]
      }
      ...
      "_links": {
        {
          "self": ""
        }
      }
    } ],
    "_links": {
      {
        "self": ""
      },
      {
        "next": ""
      }
    }
  }</pre>
  <p>
  Note that:
  
  - The resource and resource collection may be [[HAL]] resources and therefore may contain a _links object. The _links object should contain a self link and in case of a collection also navigation links (e.g. first, next prev, last).
  </p>
  <h4 class="rulelab">How to test</h4>
  <p>
  Test case 1:
  </p>
  <ul>
    <li>Request a single resource that contains geometry of GeoJSON <code>Geometry</code> object type: <code>Point</code>, <code>MultiPoint</code>, <code>LineString</code>, <code>MultiLineString</code>, <code>Polygon</code> or <code>MultiPolygon</code> and with response media type <code>application/json</code> in the <code>Accept</code> header.</li>
    <li>Validate that a response with status code 200 is returned.</li>
    <li>Validate that <code>Content-Type</code> header contains <code>application/json</code></li> 
    <li>Validate that the returned document is a JSON document.</li> 
    <li>Validate that the returned document contains a property that complies to one of the GeoJSON <code>Geometry</code> objects mentioned above and contains:</li>
    <ul>
      <li>a property <code>type</code> containing the name of one of the GeoJSON <code>Geometry</code> object types mentioned above, and</li>
      <li>a property <code>coordinates</code> containing an array with the coordinates. Depending on the type of geometry object, the content of the array differs.</li>
    </ul>
  </ul>
  <p>
  Test case 2:
  </p>
  <ul>
    <li>Request a collection of resources that contain geometry of GeoJSON <code>Geometry</code> object type: <code>Point</code>, <code>MultiPoint</code>, <code>LineString</code>, <code>MultiLineString</code>, <code>Polygon</code> or <code>MultiPolygon</code> and with response media type <code>application/json</code> in the <code>Accept</code> header.</li>
    <li>Validate that a response with status code 200 is returned.</li>
    <li>Validate that <code>Content-Type</code> header contains <code>application/json</code></li> 
    <li>Validate that the returned document is a JSON document.</li> 
    <li>Validate that the returned document contains an array of resources and that each resource contains a property that complies to one of the GeoJSON <code>Geometry</code> objects mentioned above and contains:</li>
    <ul>
      <li>a property <code>type</code> containing the name of one of the GeoJSON <code>Geometry</code> object types mentioned above, and</li>
      <li>a property <code>coordinates</code> containing an array with the coordinates. Depending on the type of geometry object, the content of the array differs.</li>
    </ul>
  </ul>
  <p>
  Test case 3:
  </p>
  <ul>
    <li>Request a single resource that contains geometry of GeoJSON <code>Geometry</code> object type: <code>GeometryCollection</code> and with response media type <code>application/json</code> in the <code>Accept</code> header.</li>
    <li>Validate that a response with status code 200 is returned.</li>
    <li>Validate that <code>Content-Type</code> header contains <code>application/json</code></li> 
    <li>Validate that the returned document is a JSON document.</li> 
    <li>Validate that the returned document contains a property that complies to the GeoJSON <code>Geometry</code> object mentioned above and contains: </li>
    <ul>
      <li>a property <code>type</code> containing the name of the GeoJSON <code>Geometry</code> object type: <code>GeometryCollection</code>, and</li>
      <li>a property <code>geometries</code> containing an array of GeoJSON <code>Geometry</code> objects.</li>
    </ul>
  </ul>
  <p>
  Test case 4:
  </p>
  <ul>
    <li>Request a collection of resources that contain geometry of GeoJSON <code>Geometry</code> object type: <code>GeometryCollection</code> and with response media type <code>application/json</code> in the <code>Accept</code> header.</li>
    <li>Validate that a response with status code 200 is returned.</li>
    <li>Validate that <code>Content-Type</code> header contains <code>application/json</code></li> 
    <li>Validate that the returned document is a JSON document.</li> 
    <li>Validate that the returned document contains an array of resources and that each resource contains a  property that complies to the GeoJSON <code>Geometry</code> object mentioned above and contains: </li>
    <ul>
      <li>a property <code>type</code> containing the name of the GeoJSON <code>Geometry</code> object type: <code>GeometryCollection</code>, and</li>
      <li>a property <code>geometries</code> containing an array of GeoJSON <code>Geometry</code> objects.</li>
    </ul>
  </ul>
</div>



