
## Summary

<aside class="note">
Design rules have unique and permanent numbers. In the event of design rules being deprecated or restructured, they are removed from the list. Therefore, gaps in the sequence can occur. New design rules will always get a new and higher number.
</aside>

### Informative Design Rules

* <a href="#api-09">API-09</a>: Implement custom representation if supported
* <a href="#api-11">API-11</a>: Encrypt connections using TLS
<!-- * <a href="#api-12">API-12</a>: Allow access to an API only if an API key is provided -->
* <a href="#api-13">API-13</a>: Accept tokens as HTTP headers only
<!-- * <a href="#api-14">API-14</a>: Use OAuth 2.0 for authorization -->
* <a href="#api-15">API-15</a>: Use PKIoverheid certificates for access-restricted or purpose-limited API authentication
* <a href="#api-21">API-21</a>: Inform users of a deprecated API actively
* <a href="#api-22">API-22</a>: JSON first - APIs receive and send JSON
* <a href="#api-23">API-23</a>: APIs may provide a JSON Schema
* <a href="#api-24">API-24</a>: Support content negotiation
* <a href="#api-25">API-25</a>: Check the Content-Type header value
* <a href="#api-26">API-26</a>: Define field names in *camelCase*
* <a href="#api-27">API-27</a>: Disable pretty print
* <a href="#api-28">API-28</a>: Send a JSON-response without enclosing envelope
* <a href="#api-29">API-29</a>: Support JSON request body for `POST` and `PUT` operations
* <a href="#api-30">API-30</a>: Use query parameters corresponding to the queryable fields
* <a href="#api-31">API-31</a>: Use the query parameter `sort` to apply sorting
* <a href="#api-32">API-32</a>: Use the query parameter `search` for full-text search
* <a href="#api-33">API-33</a>: Support both `*` and `?` wildcard characters for full-text search APIs
* <a href="#api-34">API-34</a>: Support GeoJSON for geospatial APIs
* <a href="#api-35">API-35</a>: Include GeoJSON as part of the embedded resource in the JSON response
* <a href="#api-36">API-36</a>: Provide a `POST` endpoint for geo queries
* <a href="#api-37">API-37</a>: Support mixed queries at `POST` endpoints
* <a href="#api-38">API-38</a>: Put results of a global spatial query in the relevant geometric context
* <a href="#api-39">API-39</a>: Use ETRS89 as the preferred coordinate reference system (CRS)
* <a href="#api-40">API-40</a>: Pass the coordinate reference system (CRS) of the request and the response in the headers
* <a href="#api-41">API-41</a>: Use content negotiation to serve different CRSs
* <a href="#api-42">API-42</a>: Provide standard navigation controls for pagination
* <a href="#api-43">API-43</a>: Apply caching to improve performance
* <a href="#api-44">API-44</a>: Apply rate limiting
* <a href="#api-45">API-45</a>: Provide rate limiting information
* <a href="#api-46">API-46</a>: Use default error handling
* <a href="#api-47">API-47</a>: Use the required HTTP status codes
* <a href="#api-49">API-49</a>: Use *public* API-keys
* <a href="#api-50">API-50</a>: Use CORS to control access
* <a href="#api-52">API-52</a>: Use OAuth 2.0 for authorization with rights delegation
* <a href="#api-58">API-58</a>: Do not put any sensitive information in URIs when communicating over shared networks
* <a href="#api-59">API-59</a>: Use spinal-case for path segments
* <a href="#api-60">API-60</a>: Normalize characters with diacritics to their base characters for path segments
* <a href="#api-61">API-61</a>: Do not explicitly indicate that a resource is an API
* <a href="#api-62">API-62</a>: Do not use file extensions in path segments
* <a href="#api-63">API-63</a>: Do not use nonstandard abbreviations as resource names
* <a href="#api-64">API-64</a>: Do not use compound words for nested objects
* <a href="#api-65">API-65</a>: Use enumerations only for fixed sets of values that will not change
* <a href="#api-66">API-66</a>: Use UPPER_SNAKE_CASE for enumeration values
* <a href="#api-67">API-67</a>: Omit symbols and punctuation marks other than hyphens from path segments
* <a href="#api-68">API-68</a>: Use meaningful enumeration values
* <a href="#api-69">API-69</a>: Use lowerCamelCase for query parameter keys


<!-- ### <a name="api-12"></a>API-12: Allow access to an API only if an API key is provided

Preferrably, APIs should require at least a sign-up process that involves
accepting its fair use policy before an API key is issued. -->

<!-- ### <a name="api-14"></a>API-14: Use OAuth 2.0 for authorization

A RESTful API should not maintain state. A token has to be sent for each
request. OAuth 2.0 is the recommended standard. Chapter *Beveiliging* contains
further information. -->
