# Inhoudelijk deel van de Module

Bijvoorbeeld

- een introductie.
- context
- rules in de vorm:
  - Statement
  - Rationale
  - Implications
- Zie ook als voorbeeld:

## HTTP methods

Although the REST architectural style does not impose a specific protocol, REST APIs are typically implemented using HTTP [[rfc7231]].

<div class="rule" id="api-03">
   <p class="rulelab"><b>API-03</b>: Only apply standard HTTP methods</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         Resources must be retrieved or manipulated using standard HTTP methods.
      </dd>
      <dt>Rationale</dt>
      <dd>
         The HTTP specification [[rfc7231]] and the later introduced <code>PATCH</code> method specification [[rfc5789]] offer a set of standard methods, where every method is designed with explicit semantics. Adhering to the HTTP specification is crucial, since HTTP clients and middleware applications rely on standardized characteristics.
         <table>
            <thead>
               <tr>
                  <th scope="col">Method</th>
                  <th scope="col">Operation</th>
                  <th scope="col">Description</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td><code>GET</code></td>
                  <td>Read</td>
                  <td>Retrieve a resource representation for the given URI. Data is only retrieved and never modified.</td>
               </tr>
               <tr>
                  <td><code>POST</code></td>
                  <td>Create</td>
                  <td>Create a subresource as part of a collection resource. This operation is not relevant for singular resources. This method can also be used for <a href="#api-10">exceptional cases</a>.</td>
               </tr>
               <tr>
                  <td><code>PUT</code></td>
                  <td>Create/update</td>
                  <td>Create a resource with the given URI or replace (full update) a resource when the resource already exists.</td>
               </tr>
               <tr>
                  <td><code>PATCH</code></td>
                  <td>Update</td>
                  <td>Partially updates an existing resource. The request only contains the resource modifications instead of the full resource representation.</td>
               </tr>
               <tr>
                  <td><code>DELETE</code></td>
                  <td>Delete</td>
                  <td>Remove a resource with the given URI.</td>
               </tr>
            </tbody>
         </table>
      </dd>
      <dt>Implications</dt>
      <dd>
         Adherance to this rule needs to be manually verified.
      </dd>
   </dl>
   <div class="example">The following table shows some examples of the use of standard HTTP methods:
      <table>
      <thead>
      <tr>
      <th scope="col">
      Request</th>
      <th scope="col">Description</th>
      </tr>
      </thead>
      <tbody>
         <tr>
            <td><code>GET /rijksmonumenten</code></td>
            <td>Retrieves a list of national monuments.</td>
         </tr>
         <tr>
            <td><code>GET /rijksmonumenten/12</code></td>
            <td>Retrieves an individual national monument.</td>
         </tr>
         <tr>
            <td><code>POST /rijksmonumenten</code></td>
            <td>Creates a new national monument.</td>
         </tr>
         <tr>
            <td><code>PUT /rijksmonumenten/12</code></td>
            <td>Modifies national monument #12 completely.</td>
         </tr>
         <tr>
            <td><code>PATCH /rijksmonumenten/12</code></td>
            <td>Modifies national monument #12 partially.</td>
         </tr>
         <tr>
            <td><code>DELETE /rijksmonumenten/12</code></td>
            <td>Deletes national monument #12.</td>
         </tr>
      </tbody>
      </table>
   </div>
   <p class="note">HTTP also defines other methods, e.g. <code>HEAD</code>, <code>OPTIONS</code> and <code>TRACE</code>. For the purpose of this design rule, these operations are left out of scope.</p>
</div>


<div class="rule" id="api-01">
   <p class="rulelab"><b>API-01</b>: Adhere to HTTP safety and idempotency semantics for operations</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         The following table describes which HTTP methods must behave as safe and/or idempotent:</p>
         <table>
            <thead>
               <tr>
                  <th scope="col">Method</th>
                  <th scope="col">Safe</th>
                  <th scope="col">Idempotent</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td><code>GET</code></td>
                  <td>Yes</td>
                  <td>Yes</td>
               </tr>
               <tr>
                  <td><code>HEAD</code></td>
                  <td>Yes</td>
                  <td>Yes</td>
               </tr>
               <tr>
                  <td><code>OPTIONS</code></td>
                  <td>Yes</td>
                  <td>Yes</td>
               </tr>
               <tr>
                  <td><code>POST</code></td>
                  <td>No</td>
                  <td>No</td>
               </tr>
               <tr>
                  <td><code>PUT</code></td>
                  <td>No</td>
                  <td>Yes</td>
               </tr>
               <tr>
                  <td><code>PATCH</code></td>
                  <td>No</td>
                  <td>No</td>
               </tr>
               <tr>
                  <td><code>DELETE</code></td>
                  <td>No</td>
                  <td>Yes</td>
               </tr>
            </tbody>
         </table>
      </dd>
      <dt>Rationale</dt>
      <dd>
         The HTTP protocol [[rfc7231]] specifies whether an HTTP method should be considered safe and/or idempotent. These characteristics are important for clients and middleware applications, because they should be taken into account when implementing caching and fault tolerance strategies.
      </dd>
      <dt>Implications</dt>
      <dd>
         Request methods are considered <i>safe</i> if their defined semantics are essentially read-only; i.e., the client does not request, and does not expect, any state change on the origin server as a result of applying a safe method to a target resource. A request method is considered <i>idempotent</i> if the intended effect on the server of multiple identical requests with that method is the same as the effect for a single such request.
      </dd>
   </dl>
</div>


##

<p class="note" title="index">
Dit hoofdstuk is toegevoegd met `class="informative"` in `index.html`.
</p>
