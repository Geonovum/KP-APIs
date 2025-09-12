# Singular resources

TODO

## Singular request

<div class="rule" id="/batching/req-singular" data-type="technical">
   <p class="rulelab">Specify a list of singular requests when batching singular resources</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>When requesting a batch of singular resources, a list of singular requests must be specified.</p>
         <p>Each singular request must contain at least the unique identifier of the thing that the singular resource represents, using the <code>key</code> property. In most cases, things are identified by a single scalar value (string or number). However, they could also be identified by a compound value, consisting of multiple scalar values (in the resource URI, they would typically be represented by multiple path segments).</p>
         <div class="example">
            <p>An example request for requesting two building resources in a single batch operation:</p>
            <pre>
               // POST https://api.example.org/v1/gebouwen/_batch
               {
                  "requests": [
                     { "key": "3b9710c4-6614-467a-ab82-36822cf48db1" },
                     { "key": "609b0651-acad-4091-9144-432621df8bf8" }
                  ]
               }
            </pre>
         </div>
         <p>In case of a compound identifier, the value of the <code>key</code> property must be an array, in the exact same order as the path segments of the corresponding resource URI. The value type of the <code>key</code> property must be identical to the original value of the identifier. In case of a compound identifier, this could differ per part.</p>
         <div class="example">
            <p>When a singular resource has a compound identifier, an array value must be provided. In this example, the first identifier part is a string, and the second part is numeric.</p>
            <pre>
               // POST https://api.example.org/v1/gebouwen/_batch
               {
                  "requests": [
                     { "key": ["key-1-part-1", 123] },
                     { "key": ["key-2-part-1", 456] }
                  ]
               }
            </pre>
         </div>
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Using a standardized <code>key</code> property for singular requests ensures consistency across all batch-enabled collections. It mirrors the way singular resources are addressed in URIs, making the mapping intuitive for both clients and server implementers. Supporting both scalar and compound identifiers provides flexibility for resources that require multi-part keys, while preserving strict typing and ordering prevents ambiguity in request processing.</p>
      </dd>
      <dt>Implications</dt>
      <dd>
         <ul>
            <li>Clients must always supply the <code>key</code> property for singular requests, with either a scalar or an ordered array depending on the resource’s identifier model.</li>
            <li>Clients must use the same data types for identifier values as the canonical resource definition (e.g., string vs. integer), ensuring compatibility with singular endpoints.</li>
            <li>Servers must validate the structure and types of the <code>key</code> property, and <a href="#invalid-request">reject requests</a> with malformed or incomplete identifiers.</li>
            <li>By preserving the exact order of identifier parts, clients and servers avoid mismatches and maintain consistency with URI path semantics.</li>
         </ul>
      </dd>
   </dl>
</div>

## Singular response

TODO
