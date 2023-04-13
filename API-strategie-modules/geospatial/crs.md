# Coordinate Reference System (CRS)

A Coordinate Reference System (CRS) or Spatial Reference System (SRS) is a framework to measure locations on the earth surface as coordinates. Geometries consist of coordinates. To be able to measure the geometry's coordinates on the earth surface a CRS is required in conjunction with the coordinates.

CRSs are uniquely identified by means of a Spatial Reference System Identifier (SRID).
SRIDs may refer to different standards, for example EPSG Geodetic Parameter Dataset or Open Geospatial Consortium (OGC).

CRSs may be grouped into ensemble CRSs, e.g. ETRS89 (EPSG:4258). The CRSs that are part of an ensemble CRS are called ensemble member CRSs or member CRSs that realize a ensemble CRS, e.g ETRF2000 (EPSG:9067) is a member of and realizes the ETRS89 (EPSG:4258) ensemble. When exchanging geometry an ensemble member CRS shall be used instead of an ensemble CRS when known and if accurate data is required. When transforming geometry from one CRS to another, use an ensemble member CRS (instead of an ensemble CRS) as input and output of coordinate transformation, when known and if accurate data is required.

For a detailed description of CRSs see [[hr-crs]].

## CRS discovery

A client shall be able to determine a list of CRSs supported by an API.

<div class="rule" id="api-geo-7">
  <p class="rulelab"><strong>API-GEO-7</strong>: Provide a list of all CRSs that are supported by the API</p>
  <p>If a REST API shall comply to the OGC API Features specification then the API must provide an endpoint to determine a list of supported CRSs.</p>
  <pre>
  // GET /api/v1/collections:</pre>
  <h4 class="rulelab">How to test</h4>
  <ul>
    <li>Issue an HTTP GET request to the <code>/collections</code> endpoint of the API.</li>
    <li>Validate that the returned document contains a <code>collections</code> object with the <code>crs</code> property.</li>
    <li>Validate that the <code>crs</code> property contains an array with CRS references in the form of URIs.</li>
    <li>Validate that the CRS URIs return a GML document with an <code>epsg:CommonMetadata</code> element (<code>xmlns:epsg="urn:x-ogp:spec:schema-xsd:EPSG:1.0:dataset</code>).</li>
  </ul>
  
  <p>If a REST API does not have to comply to the OGC API Features specification, e.g. when the API is used for administrative purposes, then the API shall also provide an endpoint to determine the supported CRSs.</p>
  <pre>
  // GET /api/v1/crss:</pre>
  <h4 class="rulelab">How to test</h4>
  <ul>
    <li>Issue an HTTP GET request to the <code>/crss</code> endpoint of the API.</li>
    <li>Validate that the returned document contains an object with a <code>crs</code> property.</li>
    <li>Validate that the <code>crs</code> property contains an array with CRS references in the form of URIs.</li>
    <li>Validate that the CRS URIs return a GML document with an <code>epsg:CommonMetadata</code> element (<code>xmlns:epsg="urn:x-ogp:spec:schema-xsd:EPSG:1.0:dataset</code>).</li>
  </ul>
</div>

According to [OGC API Features - part 1 - 7.13. Feature collections](https://docs.opengeospatial.org/is/17-069r3/17-069r3.html#_collections_) an OGC API Features API shall provide a GET operation on the `/collections` endpoint which returns a collections object.

OGC API Features - part 2 - Coordinate Reference Systems by Reference [[ogcapi-features-2]] describes how to support different CRSs in your geospatial API. According to [OGC API Features - part 2 - 6.2 Discovery](https://docs.ogc.org/is/18-058/18-058.html#crs-discovery) and in particular [Global list of CRS identifiers](https://docs.ogc.org/is/18-058/18-058.html#_global_list_of_crs_identifiers), a collections object provided by the API's `/collections` endpoint may contain a global list of supported CRSs by means of the `crs` property. This global CRS list applies to all feature collections delivered by the API, unless otherwise stated at a feature collection.

Each feature collection mentioned within the `collections` list may also contain a `crs` property if the set of supported CRSs differs from the global CRS list.
If a feature collection supports exactly the same CRSs as mentioned in the global CRS list, then the `crs` property may be omitted.

If a feature collection supports additional CRSs compared to the global CRS list in the collections object, then a reference to the global CRS list `#/crs` may be added in the feature collection object and the URIs of the additional CRSs are added to the CRS list in the `crs` property of the feature collection.

If a feature collection supports a different set of CRSs than the set defined in the global CRS list, then a reference to the global CRS list is omitted and only the URIs of the supported CRSs are added to the CRS list in the `crs` property of the feature collection.

For clients, it may be helpful to know the CRS identifier that may be used to retrieve features from that collection without the need to apply a CRS transformation. If all features in a feature collection are stored using a particular CRS, the property `storageCRS` shall be used to specify this CRS, in accordance with [OGC API Features - part 2 - 6.2.2 Storage CRS](https://docs.ogc.org/is/18-058/18-058.html#_storage_crs). The value of this property shall be one of the CRSs supported by the API and advertised in the CRS list as stated in requirement 4 of [OGC API Features - part 2 - 6.2.2 Storage CRS](https://docs.ogc.org/is/18-058/18-058.html#_storage_crs). If relevant, the epoch should also be specified, using the `storageCRSCoordinateEpoch` property. For an explanation of the use of epochs with CRS, see the CRS Guidelines [[hr-crs]]. 

<div class="rule" id="api-geo-8">
  <p class="rulelab"><strong>API-GEO-8</strong>: Make known in which CRS the geospatial data is stored by specifying the property <code>storageCrs</code> in the collection object. </p>
  <p>The value of this property shall be one of the CRSs the API supports.</p> 
  <h4 class="rulelab">How to test</h4>
  <ul>
    <li>Issue an HTTP GET request to each collection in the <code>/collections</code> endpoint of the API.</li>
    <li>Validate that each returned collection contains the <code>storageCRS</code> property.</li>
    <li>Validate that the value of the <code>storageCRS</code> property is one of the URIs from the list of supported CRSs.</li>
  </ul>
</div>

## CRS negotiation

The default CRS for GeoJSON and for OGC API Features is CRS84 (OGC:CRS84), this is WGS 84 with coordinate order longitude-latitude. This refers to an ensemble of global CRSs that can be applied world-wide. For accurate applications the use of the CRS84 ensemble is not suitable. For more information about coordinate reference systems, read the Geonovum guidelines on CRS [[hr-crs]].

<aside class="note">
When referring to a coordinate reference system using its code in the rest of this chapter, this is meant to refer to both the 2D and 3D variant of the system in question. E.g. when "RD" is mentioned, this should be taken to mean "RD or RDNAP"; when WGS 84 is mentioned, this should be taken to mean "CRS84 or CRS84h". Each variant has an identifier.
</aside>

Since most client-side mapping libraries use WGS 84 longitude-latitude (CRS84), the W3C/OGC [Spatial Data on the Web](https://www.w3.org/2021/sdw/) working group recommends to use this as the default coordinate reference system. The API strategy caters for this supporting not only ETRS89 and RD, but also CRS84.

The *default* CRS, i.e. the CRS which is assumed when not specified by either the API or the client, is CRS84, in line with GeoJSON and OGC API Features. 

<div class="rule" id="api-geo-9">
  <p class="rulelab"><strong>API-GEO-9</strong>: Use <a href="http://www.opengis.net/def/crs/OGC/1.3/CRS84">CRS84</a> as the default coordinate reference system (CRS). Support CRS84 in line with OGC API Features <a href="http://docs.ogc.org/is/17-069r3/17-069r3.html#_coordinate_reference_systems">Requirement 10</a>. </p>
  <p>The implication of this is, that if no CRS is explicitly included in the request, CRS84 is assumed. This rule also applies if the request uses POST.</p>
  <h4 class="rulelab">How to test</h4>
  <ul>
    <li>Issue an HTTP GET request to retrieve some spatial data from the API without specifying a coordinate reference system.</li>
    <li>Validate that the response includes a <code>Content-Crs</code> header with the URI for CRS84 or CRS84h.</li>
    <li>Validate the retrieved spatial data using the CRS84 reference system (for 2D geometries) or the CRS84h reference system (for 3D geometries).</li>
  </ul>
</div>

In addition, support for ETRS89 and/or RD is required. 

<div class="rule" id="api-geo-10">
  <p class="rulelab"><strong>API-GEO-10</strong>: Use ETRS89 and/or RD when required, as these are the preferred coordinate reference systems (CRS) for Dutch geospatial data. Follow the Dutch Guideline for the use of CRSs [[hr-crs]].</p>
  <p>General usage of the European ETRS89 coordinate reference system (CRS) or RDNAP is preferred, but is not the default CRS. Hence, one of these CRSs has to be explicitly included in each request when one of these CRSs is desired in the response or used in a request.</p>
  <h4 class="rulelab">How to test</h4>
  <ul>
    <li>Issue an HTTP GET request to retrieve some spatial data from the API, specifying ETRS89 and/or RD as coordinate reference system.</li>
    <li>Validate that the response includes a <code>Content-Crs</code> header with the URI for the requested CRS.</li>
    <li>Validate the retrieved spatial data using the coordinate reference system used in the request.</li>
  </ul>  
</div>

The guiding principles for CRS support:

- Source systems record coordinates as they enter the system;
- The default CRS, CRS84, is listed first in the list of supported CRSs in the API; if the consumer does not specify the CRS it is assumed it uses the default.
- Coordinate reference systems API strategy: request/response in RD; ETRS89; CRS84;
- Use the latest version of [RDNAPTRANS™](https://docs.geostandaarden.nl/crs/crs/#transformatie-en-conversie-tussen-rdnap-en-etrs89) to transform RD to ETRS89 (correction grid);
- Which CRSs are supported in an API depends on context (e.g. user requirements) - see [Spatial Data on the Web Best Practice 7: Choose coordinate reference systems to suit your user's applications](https://www.w3.org/TR/sdw-bp/#bp-crs-choice) [[sdw-bp]];
- Exchange format (notation) for ETRS89 and CRS84 (longitude, latitude) in decimal degrees, for example: (`5.96237626, 52.25502345`). The longitude and latitude are decimal numbers. The number of decimals in the fractional part may vary depending on the required accuracy. For an accuracy of 1 mm, 8 decimals in the fractional part are sufficient. See [Nauwkeurigheid van coördinaten](https://docs.geostandaarden.nl/crs/crs/#nauwkeurigheid-van-coordinaten) in [[hr-crs]].
- Exchange format (notation) for RD (X, Y) in meters, for example: (`195427.520, 311611.840`). The X and Y coordinates are decimal numbers. The number of decimals in the fractional part may vary depending on the required accuracy. For an accuracy of 1 mm, 3 decimal places in the fractional part are sufficient. See [Nauwkeurigheid van coördinaten](https://docs.geostandaarden.nl/crs/crs/#nauwkeurigheid-van-coordinaten) in [[hr-crs]].
- WGS 84 Pseudo Mercator (EPSG:3857) is rather inaccurate, but suitable for simple visualization of inprecise spatial data on the web, e.g. when it suffices if the data is recognizable on a map. WGS 84 Pseudo Mercator shall not be used for precise data that is meant for accurate spatial analysis.
- Use the CRS Guidelines [[hr-crs]] for coordinate transformations.
- Use an ensemble member CRS (instead of an ensemble CRS) for exchanging geometry, when known.
- Use an ensemble member CRS (instead of an ensemble CRS) as output of coordinate transformation, when known.
- APIs shall support and advertise both ensemble CRSs and ensemble member CRSs if geometry is exchanged and the CRS for the geometry is an ensemble member CRS.
- Under certain conditions WGS 84 can be made equal to e.g. ETRS89, this is called a 'null transformation', see [[hr-crs]]. If a null transformation is used to realize WGS 84, then the CRS (e.g. ETRS89) that is used to realize WGS 84 and the CRS for WGS 84 itself shall both be supported and advertised by an API.

div class="rule" id="api-geo-11">
  <p class="rulelab"><strong>API-GEO-11</strong>: When the API provides data in an ensemble CRS like WGS 84 or ETRS89 while it is known to what ensemble member CRS the data actually refers, this ensemble member should also be one of the CRSs supported by the API and advertised in the CRS list.</p>
  <p>For example when 2D data is transformed from RD with RDNAPTRANS not only ETRS89 (EPSG:4258) should be supported but also ETRF2000 (EPSG::9067).</p>
  <h4 class="rulelab">How to test</h4>
  <ul>
    <li>Issue an HTTP GET request to the <code>/collections</code> endpoint.</li>
    <li>Validate that the returned document contains a <code>collections</code> object with the <code>crs</code> property.</li>
    <li>Validate that the <code>crs</code> property contains an array with CRS references in the form of URIs.</li>
    <li>Validate that when the <code>crs</code> property contains a URL for a ensemble CRS like ETRS89 (EPSG:4258), it also contains a URL for a ensemble member CRS like ETRF2000 (EPSG:9067).</li>
  </ul>
</div>

The CRS can be specified for request and response individually using parameters or headers.

<div class="rule" id="api-geo-12">
  <p class="rulelab"><strong>API-GEO-12</strong>: Support passing the coordinate reference system (CRS) of the geometry in the request as a query parameter</p>
  <p>Support the <a href="http://docs.opengeospatial.org/is/18-058/18-058.html#_parameter_bbox_crs">OGC API Features part 2 <code>bbox-crs</code> parameter</a> in conformance to the standard.
  </p>
  <p>If a bounding box or geospatial filter is sent to the server without these parameters, the default CRS, CRS84, is assumed as specified in <a href="#api-geo-9">API-GEO-9</a>.</p>
  <p>If an invalid value, i.e. a CRS which is not in the list of supported CRSs, is given for one of these parameters, the server responds with an HTTP status code <code>400</code>.</p>
  <p>Additionally, if other types of geospatial filters are supported in the API besides <code>bbox</code>: </p>
  <p>Support the <a href="http://docs.ogc.org/DRAFTS/19-079r1.html#filter-filter-crs">OGC API Features part 3 <code>filter-crs</code> parameter</a> in conformance to the standard.
  </p>
  <h4 class="rulelab">How to test</h4>
  <uL>
    <li>Issue an HTTP GET request to the API, including the <code>bbox</code> parameter AND the <code>bbox-crs</code> parameter.</li>
    <li>Validate that a document was returned with a status code 200.</li>
    <li>Verify that the response includes a <code>Content-Crs</code> http header with the URI of the requested CRS identifier.</li>
  </ul>
  <p>Perform the same test  for the <code>filter-crs</code> parameter, if the server supports other types of geospatial filters.</p>
</div>

In an API that supports the creation and/or updating of items, POST, PUT or PATCH requests with geospatial content in the body may be sent by a client to the server. In that case, it is necessary to indicate the CRS used, unless CRS84 (OGC:CRS84), the default CRS, is used.

<div class="rule" id="api-geo-13">
  <p class="rulelab"><strong>API-GEO-13</strong>: When HTTP POST, PUT and/or PATCH requests are supported, pass the coordinate reference system (CRS) of geometry in the request body as a header</p>
  <p>Support the <a href="http://docs.ogc.org/DRAFTS/20-002.html#feature-crs">OGC API Features part 4 <code>Content-Crs</code> header</a> in conformance to the standard.</p>
  <p>Alternatively, if the feature representation supports expressing CRS information for each feature / geometry, the information can also be included in the feature representation. If no CRS is asserted, the default CRS, CRS84, is assumed, as stated in <a href="#api-geo-9">API-GEO-9</a>.<p>
  <h4 class="rulelab">How to test</h4>
  <p>In a request (i.e. when creating or updating an item on the server):</p>
  <uL>
    <li>Issue an HTTP POST request to the API with spatial data in the request body, including the <code>Content-Crs</code> header with the value of the CRS identifier for the spatial data in the body.</li>
    <li>Verify that a document was returned with status code <code>201</code> in case a new item was created, or with status code <code>200</code>.</li>
  </ul>
  <p>Repeat with a similar test voor PUT and/or PATCH if the server supports these.</p>
</div>

<div class="rule" id="api-geo-14">
  <p class="rulelab"><strong>API-GEO-14</strong>: Support passing the desired coordinate reference system (CRS) of the geometry in the response as a query parameter</p>
  <p>Support the <a href="http://docs.opengeospatial.org/is/18-058/18-058.html#_parameter_crs">OGC API Features part 2 <code>crs</code> parameter</a> in conformance to the standard.
  </p>
  <h4 class="rulelab">How to test</h4>
  <uL>
    <li>Issue an HTTP GET request to the API, including the <code>crs</code> parameter.</li>
    <li>Verify that the response has the status code <code>200</code>, and includes a <code>Content-Crs</code> http header with the value of the requested CRS identifier.</li>
  </ul>
</div>

<div class="rule" id="api-geo-15">
  <p class="rulelab"><strong>API-GEO-15</strong>: Assert the coordinate reference system (CRS) used in the response using a header</p>
  <p>Support the <a href="http://docs.opengeospatial.org/is/18-058/18-058.html#_coordinate_reference_system_information_independent_of_the_feature_encoding">OGC API Features part 2 <code>Content-Crs</code> header</a> in conformance to the standard.
  </p>
  <h4 class="rulelab">How to test</h4>
  <uL>
    <li>Issue an HTTP GET request to the API, requesting spatial data.</li>
    <li>Verify that the response includes the <code>Content-Crs</code> header with the URI of the requested CRS identifier if explicitly requested, or with the value <code>http://www.opengis.net/def/crs/OGC/1.3/CRS84</code> if no CRS was explicitly requested.</li>
  </ul>
</div>

The API should be able to handle the following scenarios based on the rules stated above: 

| Scenario                                        | Explanation |
| ----------------------------------------------- | ----------- |
| No geometry in request, no geometry in response | No CRS negotiation necessary |
| No geometry in request, geometry in response    | The client can request a specific CRS for the geometries in the response using the `crs` parameter. The server indicates the geometry CRS in the response using the `Content-Crs` header. |
| Geometry in request body, no geometry in response | The client indicates the CRS of the geometry in the request body using the `Content-Crs` header. |
| Geometry in request body, geometry in response | The client indicates the CRS of the geometry in the request body using the `Content-Crs` header, and can request a specific CRS for the geometries in the response using the `crs` parameter. The server indicates the geometry CRS in the response using the `Content-Crs` header. |
| Geometry filter in request, no geometry in response    | The client indicates the CRS of the geometry filter in the request using the `bbox-crs` parameter if a bounding box is used to filter geospatially, or the `filter-crs` parameter if another way of geospatial filtering is used.|
| Geometry filter in request, geometry in response       | The client indicates the CRS of the geometry filter in the request using `bbox-crs` or `filter-crs` as in the previous scenario, and requests a specific CRS for the geometries in the response using the `crs` parameter. The server indicates the geometry CRS in response using the `Content-Crs` header.|

Below is a list of the most commonly used CRSs in the Netherlands:

| Name | Code | Type | Dimension | Scope | URI |
|-|-|-|-|-|-|
| Amersfoort / RD New | 28992 | easting, northing (x, y) | 2D | Dutch | http://www.opengis.net/def/crs/EPSG/9.9.1/28992 |
| Amersfoort / RD New + NAP height | 7415 | easting, northing, height (x, y, h) | 3D | Dutch | http://www.opengis.net/def/crs/EPSG/9.9.1/7415 |
| ETRS89 | 4258 | latitude, longitude (&#966;, &#955;) |2D | European | http://www.opengis.net/def/crs/EPSG/9.9.1/4258 |
| ETRS89 | 4937 | latitude, longitude, height (&#966;, &#955;, h) | 3D | European | http://www.opengis.net/def/crs/EPSG/9.9.1/4937 |
| ETRF2000 | 7931 | latitude, longitude, height (&#966;, &#955;, h) | 3D | European | http://www.opengis.net/def/crs/EPSG/9.9.1/7931 |
| ETRF2000 | 9067 | latitude, longitude (&#966;, &#955;) | 2D | European | http://www.opengis.net/def/crs/EPSG/9.9.1/9067 |
| ITRF2014 | 7912 | latitude, longitude, height (&#966;, &#955;, h) | 3D | Global | http://www.opengis.net/def/crs/EPSG/9.9.1/7912 |
| ITRF2014 | 9000 | latitude, longitude (&#966;, &#955;) | 2D | Global | http://www.opengis.net/def/crs/EPSG/9.9.1/9000 |
| WGS 84 longitude-latitude | CRS84 | longitude, latitude (&#966;, &#955;) | 2D | Global | http://www.opengis.net/def/crs/OGC/1.3/CRS84 |
| WGS 84 longitude-latitude-height | CRS84h | longitude, latitude, height (&#966;, &#955;, h) | 3D | Global | http://www.opengis.net/def/crs/OGC/0/CRS84h |
| WGS 84 / Pseudo-Mercator | 3857 | easting, northing (x, y) | 2D | Global | http://www.opengis.net/def/crs/EPSG/9.9.1/3857 |

For a more extensive overview of CRSs see: https://docs.geostandaarden.nl/crs/crs/#bijlage-a-crs-overzicht-tabel.
Note that the URI of each CRS contains a version number and that new versions may be released in future.
Before using a URI verify if newer versions are available and use the latest version.

<aside class="note">
New ensemble member CRSs may be released in future (e.g. ITRF2020 has been released as a realization for  ITRF), these new realizations shall be used instead of older realizations (e.g. ITRF2014).
</aside>

<aside class="note">
Officially, WGS 84 longitude-latitude (OGC:CRS84) is the only CRS allowed in GeoJSON. However, GeoJSON does state that using another CRS is allowed, if this is agreed between provider and consumer of the data. The API functionality described above, to negotiate the CRS between client and server, can be viewed as such an agreement. Many GIS clients can deal with GeoJSON in other CRS than CRS84 (OGC:CRS84).

In addition, the Geonovum CRS guidelines [[hr-crs]] describe [how ETRS89 can be treated as equal to CRS84 (OGC:CRS84)under certain circumstances](https://docs.geostandaarden.nl/crs/cv-hr-crs-20211125/#wgs-84-gelijkstellen-aan-etrs89). 

[[JSON-FG]] is a proposed standard extension of GeoJSON that adds CRS support.
</aside>

## CRS transformation

If the requested CRS is not the same as the storage CRS, a coordinate transformation is needed. Performance is increased when the dataset is transformed in multiple CRSs and stored in advance, and not transformed at the moment the request has arrived. In case of a transformation between RD and ETRS89, it is required that this transformation uses the latest version of the procedure of [RDNAPTRANS™](https://docs.geostandaarden.nl/crs/cv-hr-crs-20211125/#transformatie-en-conversie-tussen-rd-nap-en-etrs89).