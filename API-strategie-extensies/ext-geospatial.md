## Geospatial

<p class='warning'>This extension is in development and may be modified at any time.</p>

REST APIs for handling geospatial features may provide spatial filtering. There is a distinction between retrieving geometries in the result (response) and supplying a spatial filter in the call (request). When requesting parcel information, users do not necessarily require the geometry. A name or parcel ID may be sufficient.

[[rfc7946]] describes the GeoJSON format, including a convention for describing 2D geometric objects in WGS84 (EPSG:4326). In this extension we adopt the conventions for describing geometry objects. The convention is extended to allow alternative projections.  

<div class="rule" id="api-34">
  <p class="rulelab"><strong>API-34</strong>: Support GeoJSON for geospatial APIs</p>
  <p>For representing 2D geometric information in an API, preferably use the convention for describing geometry as defined in the GeoJSON format [[rfc7946]]. Support GeoJSON as described in OGC API Features Requirements class 8.3](https://docs.ogc.org/is/17-069r3/17-069r3.html#_requirements_class_geojson) [[ogcapi-features-1]]. </p>
</div>

<aside class="note">
GeoJSON does not cover all use cases. For example, it is not possible to store circular arc geometries or solids in GeoJSON. In such cases, there are two valid options: 

- Use alternative standardized formats for geospatial data, such as [WKT](https://www.w3.org/TR/sdw-bp/#dfn-well-known-text-(wkt)) or its binary equivalent WKB; GML [iso-19136-2007]; or in future [OGC JSON-FG](https://docs.ogc.org/DRAFTS/21-045.html) (currently a draft standard). 
- When supporting GML, do this according to OGC API Features [Requirements class 8.4](https://docs.ogc.org/is/17-069r3/17-069r3.html#_requirements_class_geography_markup_language_gml_simple_features_profile_level_0) for GML Simple Features level 0, or [Requirements class 8.4](https://docs.ogc.org/is/17-069r3/17-069r3.html#_requirements_class_geography_markup_language_gml_simple_features_profile_level_2) for GML Simple Features level 2. 
- Use a workaround, e.g. convert circular lines / arcs to regular linestrings. 

</aside>

### Call (requests)

A simple spatial filter can be supplied as a bounding box. This is a common way of filtering spatial data and can be supplied as a parameter: 

<div class="rule" id="api-36">
  <p class="rulelab"><strong>API-36</strong>: Supply a simple spatial filter as a bounding box parameter</p>
  <p>Support the <a href="https://docs.ogc.org/is/17-069r4/17-069r4.html#_parameter_bbox">OGC API Features part 1 <code>bbox</code> parameter</a> in conformance to the standard.
  <pre>
   GET /api/v1/panden?bbox=5.4,52.1,5.5,53.2
  </pre>
  </p>
</div>

<aside class="note">
Spatial filtering is an extensive topic. There are use cases for geospatial operators like <code>intersects</code> or <code>within</code>. Geospatial filters can be large and complex, which sometimes causes problems since `GET` may not have a payload (although supported by some clients). 

A new API Design Rules extension on filtering will address spatial as well as non-spatial filtering.
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

### Result (response)

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

### Coordinate Reference System (CRS)

A Coordinate Reference System (CRS) or Spatial Reference System (SRS) is a framework to measure locations on the earth surface as coordinates. Geometries consist of coordinates. To be able to measure the geometry's coordinates on the earth surface a CRS is required in conjunction with the coordinates.

CRSs are uniquely identified by means of a Spatial Reference System Identifier (SRID).
SRIDs may refer to different standards, for example European Petroleum Survey Group (EPSG) or Open Geospatial Consortium (OGC).

### CRS discovery

A client shall be able to determine a list of CRSs supported by an API.

<div class="note" id="api-xx">
  <p class="rulelab"><strong>API-xx</strong>: Provide a list of all CRSs that are supported by the API</p>
  <pre>
  // GET /api/v1/collections:
  </pre>
</div>

According to [OGC API Features - part 1 - 7.13. Feature collections](https://docs.opengeospatial.org/is/17-069r3/17-069r3.html#_collections_) an OGC API Features API shall provide a GET operation on the `/collections` endpoint which returns a collections object.

According to [OGC API Features - part 2 - 6.2 Discovery](https://docs.ogc.org/is/18-058/18-058.html#crs-discovery) and in particular [Global list of CRS identifiers](https://docs.ogc.org/is/18-058/18-058.html#_global_list_of_crs_identifiers), a collections object provided by the API's `/collections` endpoint may contain a global list of supported CRSs by means of the `crs` property. This global CRS list applies to all feature collections delivered by the API, unless otherwise stated at a feature collection.

Each feature collection mentioned within the `collections` list may also contain a `crs` property if the set of supported CRSs differs from the global CRS list.
If a feature collection supports exactly the same CRSs as mentioned in the global CRS list, then the `crs` property may be omitted.

If a feature collection supports additional CRSs compared to the global CRS list in the collections object, then a reference to the global CRS list `#/crs` may be added in the feature collection object and the URIs of the additional CRSs are added to the CRS list in the `crs` property of the feature collection.

If a feature collection supports a different set of CRSs than the set defined in the global CRS list, then a reference to the global CRS list is omitted and only the URIs of the supported CRSs are added to the CRS list in the `crs` property of the feature collection.

For clients, it may be helpful to know the CRS identifier that may be used to retrieve features from that collection without the need to apply a CRS transformation.

<div class="note" id="api-xx">
  <p class="rulelab"><strong>API-xx</strong>: Make known in which CRS the geospatial data is stored.</p>    
</div>

If all features in a feature collection are stored using a particular CRS, the property `storageCRS` shall be used to specify this CRS, in accordance with [OGC API Features - part 2 - 6.2.2 Storage CRS](https://docs.ogc.org/is/18-058/18-058.html#_storage_crs). The value of this property shall be one of the CRSs supported by the API and advertised in the CRS list. If relevant, the epoch should also be specified, using the `storageCRSCoordinateEpoch` property. For an explanation of the use of epochs with CRS, see the CRS Guidelines [[hr-crs]]. 

### CRS negotiation

The default CRS for GeoJSON and for OGC API Features is WGS84 with coordinate order longitude-latitude, also referred to as "CRS84". This is the global CRS that can be applied world-wide. Due the datum and the tectonic displacements it is not accurate enough for local coordinate reference systems like ETRS89 (EPSG:4258, European), or RD/Amersfoort (EPSG:28992, Dutch). For more information about coordinate reference systems, read the Geonovum guidelines on CRS [[hr-crs]].

Since most client-side mapping libraries use WGS84, the W3C/OGC working group *Spatial Data on the Web* recommends to use this as the default coordinate reference system. Thus, spatial data can be mapped without any complex transformations. The API strategy caters for this supporting not only ETRS89 and RD/Amersfoort, but also WGS84 and Web Mercator (EPSG:3857).

The *default* CRS, i.e. the CRS which is assumed when not specified by either the API or the client, is CRS84, in line with GeoJSON and OGC API Features. 

<div class="rule" id="api-xx">
  <p class="rulelab"><strong>API-xx</strong>: Use <a href="http://www.opengis.net/def/crs/OGC/1.3/CRS84">CRS84</a> as the default coordinate reference system (CRS). Support CRS84 in line with OGC API Features <a href="http://docs.ogc.org/is/17-069r3/17-069r3.html#_coordinate_reference_systems">Requirement 10</a>. </p>
  <p>If no CRS is explicitly included in the request, CRS84 is assumed.</p>
</div>

In addition, support for ETRS89 is required. 

<div class="rule" id="api-40">
  <p class="rulelab"><strong>API-40</strong>: Use ETRS89 when required, as this is the preferred coordinate reference system (CRS) for Dutch geospatial data.</p>
  <p>General usage of the European ETRS89 coordinate reference system (CRS) is preferable, but is not the default CRS. Hence, this CRS has to be explicitly included in each request.</p>
</div>

The CRS can be specified for request and response individually using parameters or headers.

The guiding principles for CRS support:

- Source systems record coordinates as they enter the system (legal context);
- The default CRS, CRS84, is listed first in the list of supported CRSs in the API; if the consumer does not specify the CRS it is assumed it uses the default.
- Coordinate reference systems API strategy: request/response in RD; ETRS89; CRS84; Web Mercator;
- Consider no-regret: record in multiple much-requested CRSs instead of on-the-fly transformation;
- Use RDNAPTRANS™ 2018 to transform RD/Amersfoort to ETRS89 (correction grid);
- Presentation depending on context (e.g. user requirements);
- Exchange format (notation) ETRS89 and WGS84 longitude latitude in decimal degrees: DD.ddddddddd (for example: `5.962376256, 52.255023450`)
- Exchange format (notation) RD and Web Mercator X Y in meters: `195427.5200 311611.8400`

<div class="rule" id="api-41">
  <p class="rulelab"><strong>API-41</strong>: Pass the coordinate reference system (CRS) of the geometry in a request parameter as a parameter</p>
  <p>Support the <a href="http://docs.opengeospatial.org/is/18-058/18-058.html#_parameter_bbox_crs">OGC API Features part 2 <code>bbox-crs</code> parameter</a> in conformance to the standard.
  </p>
  <p>Additionally, if other types of geospatial filters are supported in the API besides <code>bbox</code>: </p>
  <p>Support the <a href="http://docs.ogc.org/DRAFTS/19-079r1.html#filter-filter-crs">OGC API Features part 3 <code>filter-crs</code> parameter</a> in conformance to the standard.
  </p>
</div>

If a bounding box or geospatial filter is sent to the server without these parameters, the default CRS, CRS84, is assumed.

If an invalid value, i.e. a CRS which is not in the list of supported CRSs, is given for one of these parameters, the server responds with an HTTP status code `400`.

<div class="rule" id="api-42">
  <p class="rulelab"><strong>API-42</strong>: Pass the coordinate reference system (CRS) of geometry in the request body as a header</p>
  <p>Support the <a href="http://docs.ogc.org/DRAFTS/20-002.html#feature-crs">OGC API Features part 4 <code>Content-Crs</code> header</a> in conformance to the standard.</p>
  <p>Alternatively, if the feature representation supports expressing CRS information for each feature / geometry, the information can also be included in the feature representation.<p>
</div>

<div class="rule" id="api-43">
  <p class="rulelab"><strong>API-43</strong>: Pass the desired coordinate reference system (CRS) of geometry in the response as a parameter</p>
  <p>Support the <a href="http://docs.opengeospatial.org/is/18-058/18-058.html#_parameter_crs">OGC API Features part 2 <code>crs</code> parameter</a> in conformance to the standard.
  </p>
</div>

<div class="rule" id="api-44">
  <p class="rulelab"><strong>API-44</strong>: Assert the coordinate reference system (CRS) used in the response using a header</p>
  <p>Support the <a href="http://docs.opengeospatial.org/is/18-058/18-058.html#_coordinate_reference_system_information_independent_of_the_feature_encoding">OGC API Features part 2 <code>Content-Crs</code> header</a> in conformance to the standard.
  </p>
</div>

The API should be able to handle the following scenarios based on the rules stated above: 

| Scenario                                        | Explanation |
| ----------------------------------------------- | ----------- |
| No geometry in request, no geometry in response | No CRS negotiation necessary |
| No geometry in request, geometry in response    | The client can request a specific CRS for the geometries in the response using the `crs` parameter. The server indicates the geometry CRS in the response using the `Content-Crs` header. |
| Geometry in request body, no geometry in response | The client indicates the CRS of the geometry in the request body using the `Content-Crs` header. |
| Geometry filter in request, no geometry in response    | The client indicates the CRS of the geometry filter in the request using the `bbox-crs` parameter if a bounding box is used to filter geospatially, or the `filter-crs` parameter if another way of geospatial filtering is used.|
| Geometry filter in request, geometry in response       | The client indicates the CRS of the geometry filter in the request using `bbox-crs` or `filter-crs` as in the previous scenario, and requests a specific CRS for the geometries in the response using the `crs` parameter. The server indicates the geometry CRS in response using the `Content-Crs` header.|

Use the following URIs to specify the CRS:

|Name|Dimension|Scope|URI|
|-|-|-|-|
|ETRS89 | 2D | European | http://www.opengis.net/def/crs/EPSG/9.9.1/4258|
|ETRS89 | 3D | European | http://www.opengis.net/def/crs/EPSG/9.9.1/4937|
|WGS 84 longitude-latitude | 2D | Global | http://www.opengis.net/def/crs/OGC/1.3/CRS84|
|WGS 84 / Pseudo-Mercator | 2D | Global | http://www.opengis.net/def/crs/EPSG/9.9.1/3857|
|Amersfoort / RD New | 2D | Dutch | http://www.opengis.net/def/crs/EPSG/9.9.1/28992|
|Amersfoort / RD New + NAP height | 3D | Dutch | http://www.opengis.net/def/crs/EPSG/9.9.1/7415|

For backwards compatibility, an older method of specifying CRS in the headers of requests is retained as a deprecated method. APIs that already support the (deprecated) header method can add support for the parameter method while still supporting the header method for a certain period.  Supporting both the new method (using parameters) and the old (using headers) is trivial. 

If a client specifies CRS using a parameter AND in the header, the parameter takes precedence and the CRS in the header is ignored.

### CRS transformation

Certified software is available to the national government to transform between coordinate reference systems.


<div class="rule" id="api-43">
  <p class="rulelab"><strong>API-43</strong>: Pass the desired coordinate reference system (CRS) of geometry in the response as a parameter</p>
  <p>Support the <a href="http://docs.opengeospatial.org/is/18-058/18-058.html#_parameter_crs">OGC API Features part 2 <code>crs</code> parameter</a> in conformance to the standard.
  </p>
</div>

<div class="note" id="api-41-dep">
  <p><strong>API-41-dep</strong>: Pass the coordinate reference system (CRS) of the request and the response in the headers</p>

  <p><strong>Deprecated</strong></p>
  <p>The coordinate reference system (CRS) for both the request and the response are passed as part of the request headers and response headers. In case this header is missing, send the HTTP status code <code>412 Precondition Failed</code>.</p>

The following headers are purely meant for negotiation between the client and the server. Depending on the application, the request not only contains geometries but also specific meta data, e.g. the original realization including the collection date.

Request and response may be based on another coordinate reference system. This applies the HTTP-mechanism for content negotiation. The CRS of the geometry in the request (request body) is specified using the header `Content-Crs`.

|HTTP header|Value|Explanation|
|-|-|-|
|`Content-Crs`|EPSG:4326|WGS84, global|
|`Content-Crs`|EPSG:3857|Web Mercator, global|
|`Content-Crs`|EPSG:4258|ETRS89, European|
|`Content-Crs`|EPSG:28992|RD/Amersfoort, Dutch|

The preferred CRS for the geometry in the response (response body) is specified using the header `Accept-Crs`.

|HTTP header|Value|Explanation|
|-|-|-|
|`Accept-Crs`|EPSG:4326|WGS84, global|
|`Accept-Crs`|EPSG:3857|Web Mercator, global|
|`Accept-Crs`|EPSG:4258|ETRS89, European|
|`Accept-Crs`|EPSG:28992|RD/Amersfoort, Dutch|

<div class="rule" id="api-45">
  <p class="rulelab"><strong>API-45</strong>: Use content negotiation to serve different CRSs</p>
  <p>The CRS for the geometry in the response body is defined using the <code>Accept-Crs</code> header. In case the API does not support the requested CRS, send the HTTP status code <code>406 Not Acceptable</code>.</p>
</div>

<p>&nbsp;</p>

</div>
