
## URI's & query strings

Although accoring to the URI specification [[rfc3986]] URI's are case sensitive, except the scheme/protocol (eg. `https://`) and domain (eg. `api.example.org`) parts, this section describes design rules related to URI's to ensure interoperability.

<div class="rule" id="api-59">
  <p class="rulelab"><strong>API-59</strong>: Use spinal-case for path segments</p>
  <p>In case path segments include compound words, the individual words are written in lower case and separated with hyphens. For example, a resource representing a collection of organisatie codes, results in a path segment `organisatie-codes`.</p>
</div>
