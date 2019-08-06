## Rate limiting

<p class='warning'>This extension is in development and may be modified at any time.</p>

APIs limit the amount of requests that can be sent within a particular time frame to prevent server overload and to guarantee a high service level. APIs may track a rate limit (quota) per month that is enforced per 60 second time interval.

HTTP headers communicate the rate limit to the users.

|HTTP header|Explanation|
|-|-|
|`X-Rate-Limit-Limit`|Amount of client requests per time frame|
|`X-Rate-Limit-Remaining`|Amount of remaining client request in the current time frame|
|`X-Rate-Limit-Reset`|Amount of remaing seconds in the current time frame|

> [API principe: Apply rate limiting](#api-44)

[[rfc6585]] introduces an HTTP status code `429 Too Many Requests` to inform users the rate limit has been reached.

> [API principe: Provide rate limiting information](#api-45)