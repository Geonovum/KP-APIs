## Paging

<p class='warning'>This extension is in development and may be modified at any time.</p>

For content identified with the media type 'application/hal+json', Hypertext Application Language (HAL) is used for paging. Two reserved fields, `_links` (required) and `_embedded` (optional) are added to retrieved objects. These fields represent hyperlinks and embedded resources respectively:

```json
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
```

In case of plain JSON, GeoJSON, or something different from HAL, the `_links` field is omitted. These may be added to the link response headers. Besides the representation the following metadata is returned using HTTP headers.

|HTTP header|Explanation|
|-|-|
|`X-Total-Count` (optional)|Total number of results|
|`X-Pagination-Count` (optional)|Total number of pages|
|`X-Pagination-Page` (optional)|Current page|
|`X-Pagination-Limit` (optional)|Number of results per page|

For large collections, the generation of `X-Total-Count` and `X-Pagination-Count` may have a considerable impact on the performance, particularly if there is no or limited filtering.

> [API principle: Use JSON+HAL with media type `application/hal+json` for pagination](#api-42)

All links in HAL are absolute. This relieves clients from the burder to resolve URLs to external links (to other endpoints, linked-data resources, etc.) for navigation.  
