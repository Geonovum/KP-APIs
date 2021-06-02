## Pagination

<div class="rule" id="api-42">
  <p class="rulelab"><strong>API-42</strong>: Provide standard navigation controls for pagination</p>
  <p>For collection resources, navigation controls must be provided to simplify pagination for client applications. The standard link relation types <code>next</code> and <code>prev</code> (see [[IANA-RELATIONS]]) must be used if relevant. When no next or previous page exists, the link must be fully omitted. By providing standard links, clients can build and re-use generic pagination components, regardless of the pagination strategy (e.g. offset or cursor-based).</p>
  <div class="example">
    <p>For example, a collection resource for books provides a <code>self</code> and <code>next</code> link. Since this is the first page, no <code>prev</code> link is provided.</p>
    <pre>
// GET /books
{
  "currentPage": 1,
  "nextPage": 2,
  "pageSize": 10,
  "_embedded": {
    "item": [
      {
        "identifier": "14d3030c-3b61-4070-b902-342f80e99364",
        "title": "Da Vinci Code",
        "isbn": "902455991X",
        "_links": {
          "self": {
            "href": "https://api.example.org/v1/books/14d3030c-3b61-4070-b902-342f80e99364"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://api.example.org/v1/books"
    },
    "next": {
      "href": "https://api.example.org/v1/books?page=2"
    }
  }
}
    </pre>
  </div>
</div>

<p class="note">Providing the total count and/or last page of a collection should be avoided, since this may have a considerable impact on performance when dealing with larger collections. Therefore, providing such information or links is generally discouraged. Most often, this is not a problem since this does not add significant value for end users. Most modern user interfaces provide next/prev links only (e.g. a <em>load more</em> control).</p>
