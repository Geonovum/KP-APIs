## Rate limiting

<p class='warning'>This extension is in development and may be modified at any time.</p>

APIs limit the amount of requests that can be sent within a particular time frame to prevent server overload and to guarantee a high service level. APIs may track a rate limit (quota) per month that is enforced per 60 second time interval.

HTTP headers communicate the rate limit to the users.

|HTTP header|Explanation|
|-|-|
|`X-Rate-Limit-Limit`|Amount of client requests per time frame|
|`X-Rate-Limit-Remaining`|Amount of remaining client request in the current time frame|
|`X-Rate-Limit-Reset`|Amount of remaing seconds in the current time frame|

<div class="rule" id="api-44">
  <p class="rulelab"><strong>API-44</strong>: Apply rate limiting</p>
  <p>To prevent server overload and to guarantee a high service level, apply rate limiting to API requests.</p>
</div>

[[rfc6585]] introduces an HTTP status code `429 Too Many Requests` to inform users the rate limit has been reached.

<div class="rule" id="api-45">
  <p class="rulelab"><strong>API-45</strong>: Provide rate limiting information</p>
  <p>Use the HTTP header <code>X-Rate-Limit</code> to inform users of rate limits. In case the rate limits are exceeded, send the HTTP status code <code>429 Too Many Requests</code>.</p>
</div>

#### Expose API-key

API keys are "unrestricted" by default. There are no usage restrictions and these API keys should therefore not be exposed in a web application. Using API keys without usage restrictions in JavaScript creates a real change for abuse and quota theft. To prevent this, restricted API keys should be issued and used.

<div class="rule" id="api-49">
  <p class="rulelab"><strong>API-49</strong>: Use *public* API-keys</p>
  <p>In JavaScript, only use *restricted* API-keys, linked to specific characteristics of the client-application (web application or mobile
application), e.g. a clientId and/or referring URL.</p>
</div>
