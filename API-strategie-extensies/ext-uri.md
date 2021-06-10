
## URI's & query strings

Although according to the URI specification [[rfc3986]] URI's are case sensitive, except the scheme/protocol (e.g. `https://`) and domain (e.g. `api.example.org`) parts, this section describes design rules related to URI's to ensure interoperability.

<div class="rule" id="api-59">
  <p class="rulelab"><strong>API-59</strong>: Use spinal-case for path segments</p>
  <p>In case path segments include compound words, the individual words are written in lower case and may be separated with hyphens. For example, a resource representing a collection of organisatie codes, results in either a path segment <code>organisatie-codes</code> or <code>organisatiecodes</code>.</p>
</div>

<div class="rule" id="api-60">
  <p class="rulelab"><strong>API-60</strong>: Normalize characters with diacritics to their base characters for path segments</p>
  <p>In case path segments include diacritics (e.g. accents), these characters are normalized to their base characters. For example, a resource <code>scènes</code> results in path segment <code>scenes</code>.</p>
</div>

<div class="rule" id="api-67">
  <p class="rulelab"><strong>API-67</strong>: Omit symbols and punctuation marks other than hyphens from path segments</p>
  <p>Symbols and punctuation marks, other than hypens, must be omitted from path segments. For example:
  <ul>
    <li><code>https://api.example.org/v1/schemas</code> (<code>'</code> of schema's is omitted)</li>
    <li><code>https://api.example.org/v1/hotel-restaurants</code> (<code>-</code> is preserved)</li>
  </ul>
  </p>
</div>

<div class="rule" id="api-61">
  <p class="rulelab"><strong>API-61</strong>: Do not explicitly indicate that a resource is an API</p>
  <p>Use resource names as path segments (e.g. <code>gebouwen</code>) and do not explicitly mention that the resource is an API in the name (e.g. <code>gebouwen_api</code>).</p>
</div>

<div class="rule" id="api-62">
  <p class="rulelab"><strong>API-62</strong>: Do not use file extensions in path segments</p>
  <p>Preferably use content negotiation using the <code>Accept</code> header</p>
</div>

<div class="rule" id="api-63">
  <p class="rulelab"><strong>API-63</strong>: Do not use nonstandard abbreviations as resource names</p>
  <p>Avoid using nonstandard abbreviations for naming resources (e.g. <code>/coords</code> instead of <code>/coordinates</code>). This does not apply to standard or broadly used abbreviations (e.g. <code>bagNummeraanduiding</code>).</p>
</div>

<div class="rule" id="api-69">
  <p class="rulelab"><strong>API-69</strong>: Use spinal-case for query parameters</p>
  <p>Analogously to path segments, when query parameters include compound words, the individual words are written in lower case and may be separated with hyphens. This also means that query parameters must not be prefixed with an underscore (e.g. <code>_sort</code>).</p>
</div>