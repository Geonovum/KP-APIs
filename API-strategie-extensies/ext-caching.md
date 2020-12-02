## Caching

<p class='warning'>This extension is in development and may be modified at any time.</p>

For some resources, caching is required. HTTP provides default mechanisms for caching. Furthermore, both clients and infrastructure already handle these mechanisms by default.

The requirements to leverage these default caching mechanisms:

- Add a few HTTP response headers;
- Handle a few HTTP request headers.

There are 2 ways to implement caching: `ETag` and `Last-Modified`.

### ETag

An ETag (Entity Tag) is a hash code or checksum of a resource. A modification of a resource results in another ETag. Hence, an ETag is unique to a particular version of a resource. Returning a resource, the ETag is added as the HTTP header `ETag`. The client caches both the resource and the ETag. Requesting the same resource, this ETag is supplied in the HTTP request header `If-None-Match`. The server matches the ETag in the HTTP request header `If-None-Match` to the ETag for the resource available to the server. In case these match, the server returns a HTTP response status code `304 Not Modified` terug. The client retrieves the resource from its own cache. This only applies to client-side caching, in case the client sends the request headers along, otherewise it receives an HTTP status code `200 OK`.

### Last-Modified

It works just like ETag, but uses timestamps instead. The response HTTP header `Last-Modified` contains a timestamp that corresponds to the RFC 1123 notation and is valided against the request HTTP header `If-Modified-Since`. The server checks whether the resource has been modified since the timestamp provided. If not, the server returns an HTTP status code `304 Not Modified`. The client retrieves the resource from its own cache. This only applies to client-side caching, in case the client sends the request headers along, otherewise it receives an HTTP status code `200 OK`.

<div class="rule" id="api-43">
  <p class="rulelab"><strong>API-43</strong>: Apply caching to improve performance</p>
  <p>For caching apply the default HTTP caching mechanisms using a few additional HTTP headers (<code>ETag</code> or <code>Last-Modified</code>) and functionality to determine wether a few specific HTTP headers are supplied (<code>If-None-Match</code> or <code>If-Modified-Since</code>).</p>
</div>
