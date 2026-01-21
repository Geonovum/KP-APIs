# Batch endpoints

Batch endpoints provide a standardized way to retrieve multiple resources in a single operation. They are designed to reduce the number of network round-trips and to mitigate the N+1 problem, where a client would otherwise need to issue many separate requests for related resources. Batch endpoints are exposed per collection and follow a uniform request and response format, ensuring predictable behavior across APIs.

## Endpoint path

<div class="rule" id="/batching/path" data-type="technical">
   <p class="rulelab">Expose a standardized batch endpoint for collections</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>Each collection resource that supports batch requests must expose a dedicated batch endpoint. The path of the batch endpoint must be constructed by appending the literal <code>/_batch</code> to the path of the collection resource. The batch endpoint must implement the <code>POST</code> method.</p>
         <div class="example">
            <p>For the <code>adressen</code> collection, the batch endpoint is:</p>
            <pre>POST /adressen/_batch</pre>
         </div>
         <p>Which collections require batch support depends on the context and client use cases, and is left up to the API designer.</p>
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Using a fixed suffix (<code>/_batch</code>) makes batch endpoints predictable and discoverable for clients. By scoping the batch endpoint directly under the collection, the semantics of the request are unambiguous: all items in the batch relate to resources of that collection. Restricting the method to <code>POST</code> ensures consistent support across frameworks and avoids limitations of <code>GET</code> requests with bodies or overly long query strings.</p>
      </dd>
      <dt>Implications</dt>
      <dd>
         <ul>
            <li>Clients can deterministically construct the batch endpoint URL once the collection path is known, without relying on documentation or discovery mechanisms.</li>
            <li>Servers must implement the batch endpoint as a distinct operation for each collection that supports batching.</li>
            <li>The rule does not mandate batch support for all collections; API designers must decide based on use cases and performance needs.</li>
         </ul>
      </dd>
      <dt>How to test</dt>
      <dd>
         <ul>
            <li>Identify a collection resource that supports batching (e.g. <code>/adressen</code>).</li>
            <li>Issue an HTTP POST request to the batch endpoint by appending <code>/_batch</code> to the collection path (e.g. <code>POST /adressen/_batch</code>).</li>
            <li>Validate that the server accepts the request and returns a valid response (status code <code>200</code>).</li>
            <li>Validate that issuing the same request with a different HTTP method (e.g. GET) returns status code <code>405 Method Not Allowed</code>.</li>
            <li>Validate that the batch endpoint path follows the pattern <code>{collection}/_batch</code> consistently across all batch-enabled collections.</li>
         </ul>
      </dd>
   </dl>
</div>

## Request format

<div class="rule" id="/batching/req-format" data-type="technical">
   <p class="rulelab">Use the standardized payload format for batch requests</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>A batch request must be sent as a JSON object containing a top-level <code>requests</code> property, whose value must be an ordered array of request items. Each entry in requests must be a JSON object that specifies exactly one selection criterion for that entry (see the specific rules for <a href="#singular-request">singular</a> and <a href="#collection-request">collection</a> requests). The order of the <code>requests</code> items is significant and preserved in the response.</p>
         <p>The batch request must be submitted using the <code>POST</code> method and content type <code>application/json</code>.
         <p>An implementation-defined maximum applies to the number of entries in <code>requests</code>. Requests that exceed this maximum must be <a href="#request-limit-exceeding">rejected</a>.
         <p>The payload may include an additional top-level <code>context</code> property alongside <code>requests</code>, to provide contextual request criteria to apply on all request items (such as time travelling).</p>
         <div class="example">
            <p>For the <code>adressen</code> collection, the batch endpoint is:</p>
            <pre>
            {
                "context": {
                    "peildatum": "2025-09-12"
                },
                "requests": [
                    { ... },
                    { ... },
                    { ... }
                ]
            }
            </pre>
         </div>
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Using a standardized JSON envelope with a <code>requests</code> property makes batch requests predictable and uniform across all collections. It ensures that client and server implementations can rely on a single pattern, reducing ambiguity and implementation errors. The use of <code>POST</code> with a request payload avoids limitations of URL length and tooling support for <code>GET</code> request bodies. The optional <code>context</code> property provides a forward-compatible mechanism for passing shared criteria without breaking the core structure.</p>
      </dd>
      <dt>Implications</dt>
      <dd>
         <ul>
            <li>Clients must always wrap batch input in a <code>requests</code> array and preserve the intended order of items.</li>
            <li>Servers must validate the request structure and enforce the maximum number of allowed items.</li>
            <li>Clients can depend on a deterministic mapping between request items and response items by array position.</li>
            <li>The optional <code>context</code> property allows cross-cutting parameters to be added without introducing new endpoints or breaking existing clients.</li>
         </ul>
      </dd>
      <dt>How to test</dt>
      <dd>
         <ul>
            <li>Issue an HTTP POST request to a batch endpoint with <code>Content-Type: application/json</code> and a JSON body containing a <code>requests</code> array.</li>
            <li>Validate that the server accepts the request and returns status code <code>200</code>.</li>
            <li>Validate that a request without a <code>requests</code> property is rejected with status code <code>400</code>.</li>
            <li>Validate that a request with an empty <code>requests</code> array is handled appropriately (either accepted with an empty <code>results</code> array, or rejected per server policy).</li>
            <li>If the server supports a <code>context</code> property, validate that it can be included alongside <code>requests</code> and affects the response as documented.</li>
         </ul>
      </dd>
   </dl>
</div>

## Response format

<div class="rule" id="/batching/res-format" data-type="technical">
   <p class="rulelab">Use the standardized payload format for batch responses</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>A batch response must be sent as a JSON object containing a top-level <code>results</code> property, whose value must be an ordered array of result items. The number of items in <code>results</code> must be exactly equal to the number of items in the input <code>requests</code> array. The order of the <code>results</code> items must be identical to the order of the corresponding request items.</p>
         <p>Each entry in <code>results</code> must correspond to exactly one request item:</p>
         <ul>
            <li>For singular requests, the entry must be the resource object if found, or <code>null</code> if not found or not accessible.</li>
            <li>For collection requests, the entry must be a JSON object with an <code>items</code> array, which may be empty if no resources matched the criteria.</li>
         </ul>
         <p>Servers may include additional top-level properties in the response (such as metadata), provided they do not alter the semantics of <code>results</code>.</p>
         <div class="example">
            <p>Example response for a batch request combining a singular and a collection criterion:</p>
            <pre>
            {
                "results": [
                    {
                        "identificatie": "12345",
                        "postcode": "1234AB",
                        "huisnummer": 1
                    },
                    {
                        "items": [
                            {
                                "identificatie": "34567",
                                "postcode": "3456AB",
                                "huisnummer": 3
                            }
                        ]
                    }
                ]
            }
            </pre>
         </div>
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Wrapping batch results in a <code>results</code> array guarantees a predictable, deterministic mapping between requests and responses. By enforcing equal length and order, clients can align response entries with their original requests by array index, without the need for correlation keys. Using <code>null</code> or empty arrays distinguishes clearly between "not found" and "no matches," improving client-side error handling and reducing ambiguity.</p>
      </dd>
      <dt>Implications</dt>
      <dd>
         <ul>
            <li>Clients can reliably map each request item to a result by array position, simplifying processing logic.</li>
            <li>Servers must always return a <code>results</code> array of the same length as <code>requests</code>, even if some entries are <code>null</code> or empty.</li>
            <li>Requests containing invalid keys must result in an <a href="#invalid-keys">error response</a>.</li>
            <li>Additional metadata can be included at the top level, but must not affect the semantics of the <code>results</code> property.</li>
         </ul>
      </dd>
      <dt>How to test</dt>
      <dd>
         <ul>
            <li>Issue an HTTP POST request to a batch endpoint with a valid <code>requests</code> array containing multiple items.</li>
            <li>Validate that the response contains a <code>results</code> array with exactly the same number of items as the <code>requests</code> array.</li>
            <li>Validate that the order of items in <code>results</code> corresponds to the order of items in <code>requests</code>.</li>
            <li>For singular requests, validate that found resources are returned as objects and missing or inaccessible resources are returned as <code>null</code>.</li>
            <li>For collection requests, validate that each result entry contains an <code>items</code> array (which may be empty if no resources matched).</li>
            <li>Validate that any additional top-level properties in the response do not interfere with the <code>results</code> array structure.</li>
         </ul>
      </dd>
   </dl>
</div>
