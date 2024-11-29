# Collection resources

TODO

## Collection request

<div class="rule" id="/batching/req-collection" data-type="technical">
   <p class="rulelab">Specify a list of collection requests when batching collection resources</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>When requesting a batch of collection resources, a list of collection requests must be specified.</p>
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
         TODO
      </dd>
      <dt>Implications</dt>
      <dd>
         TODO
      </dd>
   </dl>
</div>

## Collection response

TODO
