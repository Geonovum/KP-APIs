## Filtering

<p class='warning'>This extension is in development and may be modified at any time.</p>

Base URLs of resources should be as straightforward as possible. Complex result filters, sorting, and advanced querying (restricted to a single resource) are implemented as query paramters on top of the base URL.

Filtering uses unique query parameters that correspond to the queryable fields. If you would like to request a list of *applications* from the end point `/aanvragen/` and limit this to *open* applications, use the request `GET /aanvragen?status=open` gebruikt. In this example `status` is a queryable field.

> [API principle: Use query parameters corresponding to the queryable fields](#api-30)

This appreoach can be applied to nested properties as well. This is the collection:

```json
[{
  "id": 1,
  "status": "actief",
  "overheid": {
    "code": "0000",
    "naam": "Ministerie van BZK"
  }
}, {
  "id": 2,
  "status": "inactief",
  "overheid": {
    "code": "9901",
    "naam": "Provincie Gelderland"
  }
}]
```
All objects with the status *actief* can be filtered using `/?status=actief`. Filtering objects with code *0000* of the property *overheid* at the same time, this relates to a nested property. In this case, use the dot notation (like JavaScript): `/?status=actief&overheid.code=0000`.