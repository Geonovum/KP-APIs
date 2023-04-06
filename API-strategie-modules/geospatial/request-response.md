# Request and response

Providing requested resources is the essence of any API. This also applies to REST APIs that handle geospatial data. There are, however, some specific aspects when dealing with geospatial data in REST APIs. The most important aspects are described in this chapter: 
- how to encode geometries in APIs
- how to supply a spatial filter in the call (request)
- how to return results of a spatial search

When requesting information, for example about cadastral parcels, users do not necessarily require the geometry, even if they used a spatial filter. A name or parcel ID may be sufficient.

## GeoJSON

[[rfc7946]] describes the GeoJSON format, including a convention for describing 2D geometric objects in CRS84. In the Geospatial module of the API strategy we adopt the GeoJSON conventions for describing geometry objects. The convention is extended to allow alternative projections.
The GeoJSON conventions and extensions described in this module apply to both geometry passed in input parameters and responses.


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

</aside>

## Call (requests)

A simple spatial filter can be supplied as a bounding box. This is a common way of filtering spatial data and can be supplied as a parameter. We adopt the OGC API Features [[ogcapi-features-1]] bounding box parameter:

<div class="rule" id="bbox-query-parameter">
  <p class="rulelab"><strong>BBOX-QUERY-PARAMETER</strong>: Supply a simple spatial filter as a bounding box parameter</p>
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

However, until the filtering module is written, the geospatial module retains rule <a href="#geometric-context">geometric context</a> about dealing with results of a global spatial query. This rule may be moved to the filtering module at a later stage.
</aside>

<a name="api-38"></a>
<div class="rule" id="geometric-context">
  <p class="rulelab"><strong>GEOMETRIC-CONTEXT</strong>: Place results of a global spatial query in the relevant geometric context</p>
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

In case a REST API shall comply to the OGC API Features specification for creating, replacing, updating and deleting a resource, the following applies.

<a name="api-34"></a>
<div class="rule" id="geojson-request">
  <p class="rulelab"><strong>GEOJSON-REQUEST</strong>: Support GeoJSON for creating, replacing, updating or deleting resources in a geospatial APIs</p>
  <p>For representing geometric information in an API, use the convention for describing geometry as defined in the GeoJSON format [[rfc7946]]. Support GeoJSON as described in <a href="http://docs.ogc.org/DRAFTS/20-002.html">OGC API Features part 4</a>, but note that this standard is still in development.</p>
  Example: POST feature
  <pre>
  POST /collections/gebouwen/items   HTTP/1.1
  Content-Type: application/geo+json
  {
    "type": "Feature",
    "geometry":  {
      "type": "Point",
      "coordinates": [5.2795,52.1933]
    },
    "properties": {
      "naam": "Paleis Soestdijk",
      ...
    }
  }
  </pre>
  Example: POST feature collection
  <pre>
  POST /collections   HTTP/1.1
  Content-Type: application/geo+json
  {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "geometry":  {
        "type": "Point",
        "coordinates": [5.2795,52.1933]
      },
      "properties": {
        "naam": "Paleis Soestdijk",
        ...
      }
    }]
  }  
  </pre>
  <h4 class="rulelab">How to test</h4>
  <ul>
    <li>Create a new resource that includes feature content (i.e. coordinates) using the HTTP POST method with request media type <code>application/geo+json</code> in the <code>Content-Type</code> header.</li>
    <li>Validate that a response with status code <code>201</code> (Created) is returned.</li>
    <li>Validate that the response includes the <code>Location</code> header with the URI of the newly added resource.
  </ul>
</div>

In case a REST API does not have to comply to the OGC API Features specification, e.g. for usage in administrative applications, the REST API shall use the JSON data format. If a resource contains geometry, that geometry shall be embedded as a GeoJSON <code>Geometry</code> object within the resource. The media type <code>application/json</code> must be supported. This may also apply to other media types <code>application/*+json</code>, however this depends on the media type specification. If the media type specification prescribes that resource information must be embedded in a JSON structure defined in the media specification, then the media type should not be supported while it is impossible to comply to that specification with the method described below. The media type <code>application/geo+json</code> should not be supported while the resource does not comply to the GeoJSON specification, i.e. the request resource does not embed a feature or feature collection.
A template for the definition of the schemas for the GeoJSON <code>Geometry</code> object in the requests in OpenAPI definitions are available [geometryGeoJSON.yaml](https://schemas.opengis.net/ogcapi/features/part1/1.0/openapi/schemas/geometryGeoJSON.yaml).
In case a collection of resources is embedded in the request resource, the name of the array containing the resources should be the plural of the resource name.

<div class="rule" id="embed-geojson-geometry-request">
  <p class="rulelab"><strong>EMBED-GEOJSON-GEOMETRY-REQUEST</strong>: Embed GeoJSON <code>Geometry</code> object as part of the JSON resource</p>
  <p>When a JSON (<code>application/json</code>) request contains a geometry, represent it in the same way as the <code>Geometry</code> object of GeoJSON.</p>
  Example: POST resource containing geometry
  <pre>
  POST /collections/gebouwen/items   HTTP/1.1
  Content-Type: application/json
  {
    "naam": "Paleis Soestdijk",
    "geometrie": {
      "type": "Point",
      "coordinates": [5.2795,52.1933]
    }
  }
  </pre>
  Example: POST resource containing geometry collection
  <pre>
  POST /collections/gebouwen/items   HTTP/1.1
  Content-Type: application/json
  {
    "naam": "Paleis Soestdijk",
    "geometrie": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "coordinates": [5.2795,52.1933]
        }
      ]
    }
  }
  </pre>

  <h4 class="rulelab">How to test</h4>
  <ul>
    <li>Create a new resource that includes geometry of GeoJSON <code>Geometry</code> object type using the HTTP POST method with request media type <code>application/json</code> in the <code>Content-Type</code> header.</li>
    <li>Validate that a response with status code <code>201</code> (Created) is returned.</li>
    <li>Validate that the response includes the <code>Location</code> header with the URI of the newly added resource.
  </ul>
</div>

## Result (response)

In case a REST API shall comply to the OGC API Features specification, e.g. for usage in GIS applications, the following applies.

<div class="rule" id="geojson-response">
  <p class="rulelab"><strong>GEOJSON-RESPONSE</strong>: Support GeoJSON for geospatial APIs</p>
  <p>For representing 2D geometric information in an API, use the convention for describing geometry as defined in the GeoJSON format [[rfc7946]]. Support GeoJSON as described in OGC API Features <a href="https://docs.ogc.org/is/17-069r3/17-069r3.html#_requirements_class_geojson">Requirements class 8.3</a> [[ogcapi-features-1]]. </p>
  Example: feature
  <pre>
  Request:
  // GET /collections/gebouwen/items/0308100000022041   HTTP 1.1
  // Content-type: application/geo+json

  Response:
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
        "self": "/collections/gebouwen/items/0308100000022041"
      } 
    ]
  }</pre>

  Example: feature collection
  <pre>
  Request:
  // GET /collections/gebouwen   HTTP 1.1
  // Content-type: application/geo+json

  Response:
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
            "self": "/collections/gebouwen/0308100000022041"
          } 
        ]
      },
      {
      }
    ],
    "timeStamp" : "2023-02-22T10:32:23Z",
    "numberMatched" : "0308100000022041",
    "numberReturned" : "1",
    "links": [
      {
        "self": "/collections/gebouwen"
      },
      {
        "next": ""
      }
    ]
  }</pre>
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

In case a REST API does not have to comply to the OGC API Features specification, e.g. for usage in administrative applications, the REST API shall use the JSON data format. If resources contain geometry, the geometry shall be returned as a GeoJSON <code>Geometry</code> object embedded in the resource. The media type <code>application/json</code>  must be supported. This may also apply to other media types <code>application/\*+json</code>, however this depends on the media type specification. If the media type specification prescribes that resource information must be embedded in a JSON structure defined in the media type specification, then the media type should not be supported while it is impossible to comply to that specification with the method described below. The media type <code>application/geo+json</code> should not be supported while the resource does not comply to the GeoJSON specification, i.e. the response does not return a feature or feature collection.
A template for the definition of the schemas for the GeoJSON <code>Geometry</code> object in the responses in OpenAPI definitions are available [geometryGeoJSON.yaml](https://schemas.opengis.net/ogcapi/features/part1/1.0/openapi/schemas/geometryGeoJSON.yaml).
In case a collection of resources is returned, the name of the array containing the resources should be the plural of the resource name.

<a name="api-35"></a>
<div class="rule" id="embed-geojson-geometry-response">
  <p class="rulelab"><strong>EMBED-GEOJSON-GEOMETRY-RESPONSE</strong>: Embed GeoJSON <code>Geometry</code> object as part of the JSON resource</p>
  <p>When a JSON (<code>application/json</code>) response contains a geometry, represent it in the same way as the <code>Geometry</code> object of GeoJSON.</p>

  Example: resource containing geometry
  <pre>
  Request:
  // GET /gebouwen/0308100000022041   HTTP 1.1
  // Content-type: application/hal+json

  Response:
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
        "self": "/gebouwen/0308100000022041"
      }
    }
  }</pre>

 Example: resource containing geometry collection
  <pre>
  Request:
  // GET /gebouwen/0308100000022041   HTTP 1.1
  // Content-type: application/hal+json

  Response:
  {
    "identificatie": "0308100000022041",
    "naam": "Paleis Soestdijk",
    "geometrie": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point"
          "coordinates": [5.2795,52.1933]
        },
        {
          "type": "Polygon"
          "coordinates" : [...]
        }
      ]
    },
    ...,
    "_links": {
      {
        "self": "/gebouwen/0308100000022041"
      }
    }
  }</pre>

  Example: collection of resources containing geometry
  <pre>
  Request:
  // GET /gebouwen   HTTP 1.1
  // Content-type: application/hal+json

  Response:
  {
    "gebouwen": [
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
            "self": "/gebouwen/0308100000022041"
          }
        }
      }
    ],
    "_links": {
      {
        "self": "/gebouwen"
      },
      {
        "next": ""
      }
    }
  }</pre>
  <p>
  Note that:
  
  - The resource and resource collection may be [[HAL]] resources and therefore may contain a _links object. The _links object should contain a self link and in case of a collection also navigation links (e.g. first, next prev, last). In such cases the <code>application/hal+json</code> media type may be used.
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
