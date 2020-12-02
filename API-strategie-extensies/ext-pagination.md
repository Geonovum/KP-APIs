## Pagination

<p class='warning'>This extension is in development and may be modified at any time.</p>

<div class="rule" id="api-42">
  <p class="rulelab"><strong>API-42</strong>: Use JSON+HAL with media type <code>application/hal+json</code> for pagination</p>
  <p>For content identified with the media type <code>application/hal+json</code>, Hypertext Application Language (HAL) is used for paging. Two reserved fields, <code>_links</code> (required) and <code>_embedded</code> (optional) are added to retrieved objects. These fields represent hyperlinks and embedded resources respectively:</p>
  <pre>
  {
    "_links": {
      "self": {
        "href": "https://.../api/registratie/v1/aanvragen?pagina=3"
      },
      "first": {
        "href": "https://.../api/registratie/v1/aanvragen"
      },
      "prev": {
        "href": "https://.../api/registratie/v1/aanvragen?pagina=2"
      },
      "next": {
        "href": "https://.../api/registratie/v1/aanvragen?pagina=4"
      },
      "last": {
        "href": "https://.../api/registratie/v1/aanvragen?pagina=5"
      }
    },
    "id": "https://.../api/registratie/v1/aanvragen/12",
    "naam": "Mijn dakkapel",
    "samenvatting": "Ik wil een dakkapel bouwen!",
    "_embedded": {
      "aanvrager": {
        "naam": "Bob"
      }
    }
  }
  </pre>
</div>

In case of plain JSON, GeoJSON, or something different from HAL, the `_links` field is omitted. These may be added to the link response headers. Besides the representation the following metadata is returned using HTTP headers.

|HTTP header|Explanation|
|-|-|
|`X-Total-Count` (optional)|Total number of results|
|`X-Pagination-Count` (optional)|Total number of pages|
|`X-Pagination-Page` (optional)|Current page|
|`X-Pagination-Limit` (optional)|Number of results per page|

For large collections, the generation of `X-Total-Count` and `X-Pagination-Count` may have a considerable impact on the performance, particularly if there is no or limited filtering.

All links in HAL are absolute. This relieves clients from the burder to resolve URLs to external links (to other endpoints, linked-data resources, etc.) for navigation.
