# Collection resources

Collection resource requests allow clients to retrieve multiple resources that match a set of filter criteria. In batch operations, these requests are expressed with a standardized `filter` object. This chapter describes how such requests are structured, how results are returned, and how empty matches are represented. The rules align with existing collection query semantics while ensuring deterministic mapping between requests and responses.

## Collection request

<div class="rule" id="/batching/req-collection" data-type="technical">
   <p class="rulelab">Specify a list of collection requests when batching collection resources</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>When requesting a batch of collection resources, a list of collection requests must be specified.</p>
         <p>Each collection request must contain a <code>filter</code> property, whose value is an object containing one or more filter criteria. These criteria must correspond to valid query parameters or attributes defined for the collection resource. A combination of multiple filter criteria in a single request is allowed, if the collection request supports it.</p>
         <p>The structure of the <code>filter</code> object must follow the same typing rules as the underlying resource attributes, ensuring that values match the expected data types. An empty result set must be returned when no resources match the given filter criteria.</p>
         <div class="example">
            <p>Example request when requesting two address collection resources in a single batch operation:</p>
            <pre>
               // POST https://api.example.org/v1/adressen/_batch
               {
                  "requests": [
                     { "filter": { "postcode": "1234AB", "huisnummer": 1 }},
                     { "filter": { "postcode": "3456XY", "huisnummer": 32 }}
                  ]
               }
            </pre>
         </div>
      </dd>
       <dt>Rationale</dt>
      <dd>
         <p>Using a standardized <code>filter</code> object for collection requests ensures consistency with existing collection endpoints, where filtering is already a core concept. This approach allows multiple sets of filter criteria to be evaluated in a single request, reducing the number of round-trips and eliminating the need for clients to reassemble paginated or mixed results manually. It also enables flexible querying while keeping batch requests predictable and self-contained.</p>
      </dd>
      <dt>Implications</dt>
      <dd>
         <ul>
            <li>Clients must provide a <code>filter</code> object for each collection request, with criteria that are valid for the targeted collection resource.</li>
            <li>Servers must validate the filter object against the allowed fields and <a href="#invalid-request">reject requests</a> with unsupported or malformed filter criteria.</li>
            <li>Each collection request in the batch produces exactly one result entry in the <code>results</code> array, containing an <code>items</code> array of zero or more matching resources.</li>
            <li>Clients can rely on the position of results in the response to map back to the corresponding filter criteria without additional correlation logic.</li>
            <li>If no resources match a filter, servers must return an empty <code>items</code> array rather than omitting the result.</li>
         </ul>
      </dd>
      <dt>How to test</dt>
      <dd>
         <ul>
            <li>Issue an HTTP POST request to a batch endpoint (e.g. <code>/adressen/_batch</code>) with a JSON body containing a <code>requests</code> array, where each item has a <code>filter</code> object with valid filter criteria.</li>
            <li>Validate that a response with status code <code>200</code> is returned.</li>
            <li>Validate that the response contains a <code>results</code> array with the same number of items as the <code>requests</code> array.</li>
            <li>Validate that each result entry contains an <code>items</code> array (which may be empty if no resources match).</li>
            <li>Issue a request with an invalid or unsupported filter criterion and validate that the server returns a <code>400 Bad Request</code> response.</li>
         </ul>
      </dd>
   </dl>
</div>

## Collection response

<div class="rule" id="/batching/res-collection" data-type="technical">
   <p class="rulelab">Return a list of collection results when batching collection resources</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>When returning the results of a batch of collection requests, the response must contain a top-level <code>results</code> property. The value of <code>results</code> must be an array with exactly the same number of items, and in the same order, as the <code>requests</code> array in the corresponding request.</p>
         <p>Each entry in <code>results</code> must correspond to exactly one collection request and must be a JSON object containing an <code>items</code> property. The value of <code>items</code> must be an array of zero or more resource objects that match the specified filter criteria.</p>
         <p>If no resources match a filter, the corresponding <code>items</code> array must be empty. The result entry itself must never be omitted.</p>
         <p>Pagination of <code>items</code> within a result entry is currently not standardized. Implementations that support pagination may include additional fields (e.g. <code>nextToken</code> or <code>nextLink</code>) in the result entry. Such extensions must not alter the semantics of <code>items</code> and must be optional for clients to consume.</p>
         <div class="example">
            <p>Example response for two address collection requests, where the first returns matches and the second none:</p>
            <pre>
               {
                  "results": [
                     {
                        "items": [
                           {
                              "identificatie": "12345",
                              "postcode": "1234AB",
                              "huisnummer": 1
                           },
                           {
                              "identificatie": "67890",
                              "postcode": "1234AB",
                              "huisnummer": 2
                           }
                        ]
                        // optional, implementation-specific
                        "nextToken": "eyJwYWdlIjoxfQ=="
                     },
                     {
                        "items": []
                     }
                  ]
               }
            </pre>
         </div>
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Standardizing collection results as objects with an <code>items</code> array ensures predictable and uniform handling across all batch-enabled collections. It distinguishes clearly between “no results” (<code>items</code> is empty) and “request missing” (not allowed). Preserving array length and order maintains deterministic mapping between request filters and result sets. Optional pagination fields allow flexibility for large collections without constraining implementations to a single standard prematurely.</p>
      </dd>
      <dt>Implications</dt>
      <dd>
         <ul>
            <li>Clients can reliably map each collection request to its result by array position, simplifying client-side processing.</li>
            <li>Servers must always return a result entry for each request, even if <code>items</code> is empty.</li>
            <li>Clients must be prepared to handle large <code>items</code> arrays; servers may <a href="#response-limit-exceeding">enforce limits</a> per batch to protect performance.</li>
            <li>Implementations that support pagination must document their chosen approach and ensure that clients can still consume <code>items</code> without using pagination extensions.</li>
            <li>The lack of a standardized pagination mechanism means interoperability may vary until a common approach is agreed upon.</li>
         </ul>
      </dd>
      <dt>How to test</dt>
      <dd>
         <ul>
            <li>Issue an HTTP POST request to a batch endpoint with multiple collection requests (each containing a <code>filter</code> object).</li>
            <li>Validate that the response contains a <code>results</code> array with exactly the same number of items as the <code>requests</code> array.</li>
            <li>Validate that each entry in <code>results</code> is a JSON object containing an <code>items</code> property.</li>
            <li>Validate that the order of results matches the order of the original requests.</li>
            <li>Issue a request with a filter that matches no resources and validate that the corresponding result entry contains an empty <code>items</code> array (not <code>null</code> or omitted).</li>
         </ul>
      </dd>
   </dl>
</div>
