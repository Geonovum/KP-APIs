## Customization

The user of an API does not always require the complete representation (i.e. all attributes) of a resource. Providing the option to select the required attributes in the request reduces network traffic (relevant for light-weight applications), simplifies the use of the API and makes it adjustable (fit-for-use). The query parameter `fields` supports this usage. The query parameter accepts a comma-separated list of field names. The result is a custom representation.

<div class="example">
  <p>The following example request retrieves sufficient information to show a sorted list of applications (*aanvragen*):</p>
  <pre>GET /aanvragen?fields=id,onderwerp,aanvrager,wijzigDatum&status=open&sorteer=wijzigDatum`</pre>
</div>

By applying the aforementioned `fields` parameter, the contents of the body can be customized as required.

<div class="rule" id="api-09">
  <p class="rulelab"><strong>API-09</strong>: Implement custom representation if supported</p>
  <p>Provide a comma-separated list of field names using the query parameter fields te retrieve a custom representation. In case non-existent field names are passed, a <code>400 Bad Request</code> error message is returned.</p>
</div>
