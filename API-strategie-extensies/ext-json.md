## JSON

<p class='warning'>This extension is still in development and can be modified at any time.</p>

JavaScript Object Notation (JSON) [[rfc7159]] is a format, just like XML, to serialize, store and transfer data. JSON is the primary representation format for APIs. In contrast to XML, JSON has a compact notation, for example:

```json
{
  "naam": "Jan",
  "geboortejaar": 1983
}
```

<div class="rule" id="api-22">
  <p class="rulelab"><strong>API-22</strong>: JSON first - APIs receive and send JSON</p>
  <p>APIs receive and send JSON.</p>
</div>

<div class="rule" id="api-23">
  <p class="rulelab"><strong>API-23</strong>: APIs may provide a JSON Schema</p>
  <p>APIs may provide an additional JSON Schema for data validation by the consumer (not being the OAS file).</p>
</div>

<div class="rule" id="api-24">
  <p class="rulelab"><strong>API-24</strong>: Support content negotiation</p>
  <p>Besides JSON, APIs should support other representations like XML and RDF using the default HTTP content negotiation mechanism. In case the requested format cannot be provided, a <code>406 Not Acceptable</code> response is sent.</p>
</div>

<div class="rule" id="api-25">
  <p class="rulelab"><strong>API-25</strong>: Check the Content-Type header value</p>
  <p>Check the <code>Content-Type</code> header is <code>application/json</code> or another supported content types, otherwise send the HTTP status code <code>415 Unsupported Media Type</code>.</p>
</div>

<div class="rule" id="api-26">
  <p class="rulelab"><strong>API-26</strong>: Define field names in *camelCase*</p>
  <p>Define field names in such a way that the first word starts with a lower case letter and subsequent words start with a capital letter, with no intervening spaces or punctiation.</p>
</div>

<div class="rule" id="api-64">
  <p class="rulelab"><strong>API-64</strong>: Do not use compound words for nested objects</p>
  <p>Use nested JSON objects (eg. `adres.straat`) instead of compound words (eg. `adres_straat`) to represent information that is hierarchically related.</p>
</div>

<div class="rule" id="api-27">
  <p class="rulelab"><strong>API-27</strong>: Disable pretty print</p>
  <p>Most REST clients and browsers (whether or not using extensions) can display JSON nicely formatted, even if the response does not include white-space.</p>
</div>

<div class="rule" id="api-28">
  <p class="rulelab"><strong>API-28</strong>: Send a JSON-response without enclosing envelope</p>
  <p>Many APIs encapsulate responses in envelopes like below (incorrect):</p>
  <pre>
  {
    "persoon": {
      "naam": "Jan",
      "geboortejaar": 1983
    }
  }
  </pre>
  <p>A future-proof API does not have envelopes (correct):</p>
  <pre>
  {
    "naam": "Jan",
    "geboortejaar": 1983
  }
  </pre>
</div>

<div class="rule" id="api-29">
  <p class="rulelab"><strong>API-29</strong>: Support JSON request body for <code>POST</code> and <code>PUT</code> operations</p>
  <p>Request bodies for <code>POST</code> and <code>PUT</code> operations should at least support the JSON media type(<code>application/json</code>). Media types designed for use in HTML forms (<code>application/x-www-form-urlencoded</code> or <code>multipart/form-data</code>) should not be supported. Other media types are allowed.</p>
  <p>What is the difference? Media type <code>application/json</code> is encoded as:</p>
  <pre>
  {
    "Name": "John Smith",
    "Age": 23
  }
  </pre>
  <p>Whereas media type <code>application/x-www-form-urlencoded</code> is encoded as:
  <pre>Name=John+Smith&Age=23</pre>
</div>