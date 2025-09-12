# Error handling

Batch endpoints must use the standardized Problem Details (`problem+json`) [[rfc7807]] format to represent errors. Problem details provide a machine-readable structure while still being human-readable, ensuring interoperability and consistency across APIs.

Errors are reported using an HTTP error status and a `problem+json` body. Item-level errors within a batch response must not trigger a batch-level error but must be represented in the `results` array.

## Invalid request

<div class="rule" id="/batching/err-req-invalid" data-type="technical">
   <p class="rulelab">Reject invalid batch requests using problem+json</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>If a batch request is malformed, contains invalid JSON, or fails schema validation, the server must reject it with status code <code>400 Bad Request</code> and return a <code>problem+json</code> body.</p>
         <div class="example">
            <pre>
                // HTTP/1.1 400 Bad Request
                // Content-Type: application/problem+json
                {
                    "type": "https://api.example.org/problems/invalid-request",
                    "title": "Invalid request",
                    "status": 400,
                    "detail": "The request payload is missing the required property 'requests'."
                }
            </pre>
        </div>
    </dd>
    <dt>Rationale</dt>
    <dd>
        <p>Explicitly rejecting invalid requests ensures clients receive clear feedback on how to correct errors, instead of undefined or partial behavior. Using the standardized problem+json format promotes interoperability across APIs.</p>
    </dd>
    <dt>Implications</dt>
    <dd>
        <ul>
        <li>Clients must validate requests before submission to avoid unnecessary rejections.</li>
        <li>Servers must consistently return problem+json for all 400-level errors in batch requests.</li>
        <li>Error responses must include human-readable details and machine-readable fields for automated handling.</li>
        </ul>
    </dd>
</div>

## Request limit exceeding

<div class="rule" id="/batching/err-req-limit" data-type="technical">
   <p class="rulelab">Reject batch requests that exceed the maximum number of items</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>If the number of entries in <code>requests</code> exceeds the server-defined maximum, the server must reject the request with status code <code>400 Bad Request</code> and return a <code>problem+json</code> body.</p>
         <div class="example">
            <pre>
                // HTTP/1.1 400 Bad Request
                // Content-Type: application/problem+json
                {
                    "type": "https://api.example.org/problems/request-limit-exceeded",
                    "title": "Request limit exceeded",
                    "status": 400,
                    "detail": "Batch requests are limited to 100 items, but 114 items were submitted."
                }
            </pre>
         </div>
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Exceeding the maximum number of request items is a client-side input error, not a payload overflow. Returning <code>400 Bad Request</code> clarifies that the client must correct the request, while still using the standardized <code>problem+json</code> format for machine-readable feedback.</p>
      </dd>
      <dt>Implications</dt>
      <dd>
         <ul>
            <li>Servers must document their maximum batch size and enforce it consistently.</li>
            <li>Clients must be prepared to split large batches into multiple smaller ones.</li>
            <li>Validation of request size becomes part of standard request validation logic, not just transport-level checks.</li>
         </ul>
      </dd>
   </dl>
</div>

## Response limit exceeding

<div class="rule" id="/batching/err-res-limit" data-type="technical">
   <p class="rulelab">Reject batch requests that would produce oversized responses</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>If fulfilling a batch request would result in a response exceeding server-defined limits (for example, too many results or an oversized payload), the server must reject the request with status code <code>400 Bad Request</code> and return a <code>problem+json</code> body.</p>
         <div class="example">
            <pre>
                // HTTP/1.1 400 Bad Request
                // Content-Type: application/problem+json
                {
                    "type": "https://api.example.org/problems/response-limit-exceeded",
                    "title": "Response limit exceeded",
                    "status": 400,
                    "detail": "The response would exceed the maximum allowed size of 10 MB."
                }
            </pre>
         </div>
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Requests that would result in an oversized response represent invalid client input rather than an infrastructure failure. Using <code>400 Bad Request</code> makes it clear that the client must adjust filters or batch size. The standardized <code>problem+json</code> body provides actionable details.</p>
      </dd>
      <dt>Implications</dt>
      <dd>
         <ul>
            <li>Servers must define reasonable response size limits and enforce them consistently across batch endpoints.</li>
            <li>Clients must anticipate possible rejections and adapt (e.g., by narrowing filter criteria or splitting requests).</li>
            <li>Clear feedback helps prevent repeated oversized queries and supports monitoring of misuse or misconfiguration.</li>
         </ul>
      </dd>
   </dl>
</div>

## Invalid or unauthorized keys

<div class="rule" id="/batching/err-invalid keys" data-type="technical">
   <p class="rulelab">Reject singular batch requests with invalid or unauthorized keys</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>If a singular batch request contains invalid identifiers (for example, an invalid UUID) or identifiers for which the client is not authorized, the server must reject the entire batch with status code <code>400 Bad Request</code> and return a <code>problem+json</code> body. The response must indicate which keys caused the failure.</p>
         <div class="example">
            <pre>
                // HTTP/1.1 400 Bad Request
                // Content-Type: application/problem+json
                {
                    "type": "https://api.example.org/problems/invalid-keys",
                    "title": "Invalid or unauthorized keys",
                    "status": 400,
                    "detail": "One or more provided keys are invalid or unauthorized.",
                    "invalidKeys": [
                        "not-a-uuid",
                        "3b9710c4-6614-467a-ab82-36822cf48db9"
                    ]
                }
            </pre>
         </div>
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Invalid or unauthorized keys represent client input errors. Rejecting the entire batch avoids returning mixed results that could confuse clients and ensures that request validation is strict and predictable. Including the list of failing keys helps clients identify and correct errors efficiently.</p>
      </dd>
      <dt>Implications</dt>
      <dd>
         <ul>
            <li>Servers must validate all keys before processing and reject the batch if any are invalid or unauthorized.</li>
            <li>Clients must ensure that all identifiers conform to the expected format and that they are authorized to access them before submitting the request.</li>
            <li>The error response may include an <code>invalidKeys</code> array or equivalent field to indicate which keys failed, enabling corrective actions.</li>
         </ul>
      </dd>
   </dl>
</div>
