# Collection resources

TODO

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
   </dl>
</div>

## Collection response

TODO
