## Sorting

<p class='warning'>This extension is in development and may be modified at any time.</p>

To sort, use the query parameter `sorteer`. This query parameter takes a comma-separated list of field names to be used in the sort. Prefixing a filed name with a minus sign (*-*), the field is sorted in descending order. A few examples:

|Request|Explanation|
|-|-|
|`GET /aanvragen?sorteer=-prio`|Retrieves a list of *aanvragen* sorted by the property *prio* in descending order.|
|`GET /aanvragen?sorteer=-prio,aanvraagDatum`|Retrieves a list of *aanvragen* sorted by the property *prio*  in descending order. Within a specific value of *prio*, the objects are sorted by *aanvraagDatum* in ascending order.|

> [API principle: Use the query parameter `sorteer` to sort](#api-31)