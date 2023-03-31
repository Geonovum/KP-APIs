## Search

<p class='warning'>This extension is in development and may be modified at any time.</p>

Sometimes, straightforward filters are not sufficient and the capabilities of full-text search engines are required. APIs support full-text search using the query parameter `search` (used to be 'zoek' which is now deprecated). The result is returned in the same representation.

<div class="rule" id="api-32">
  <p class="rulelab"><strong>API-32</strong>: Use the query parameter <code>search</code> for full-text search</p>
  <p>APIs support full-text searching using the query parameter <code>zoek</code>.</p>
</div>

Examples combining filtering, sorting, and searching:

|Request|Explanation|
|-|-|
|`GET /aanvragen?sort=-wijzigingDatum`|Retrieves a list of *aanvragen* sorted by *wijzigingsDatum*  in descending order|
|`GET /aanvragen?status=gesloten&sort=-wijzigingDatum`|Retrieves a list of *aanvragen* filtered by the *status* property set to *gesloten* and sorted by *wijzigingsDatum*  in descending order|
|`GET /aanvragen?search=urgent&status=open&sort=-prio,aanvraagDatum`|Retrieves a list of *aanvragen* containing the word *urgent* and filtered by the *status* property set to *open*. The list is sorted by *prio*  in descending order and subsequently sorted by *aanvraagDatum*  in ascending order.|

### Wildcards

<div class="rule" id="api-33">
  <p class="rulelab"><strong>API-33</strong>: Support both <code>*</code> and <code>?</code> wildcard characters for full-text search APIs</p>
  <p>Full-text search APIs should support two wildcard characters:</p>
  <ul>
    <li><code>*</code> Matches zero or more (non-space) characters</li>
    <li><code>?</code> Matches exactly one (non-space) character</li>
  </ul>
</div>

For example, `he*` matches any string starting with `he`, like `hek`, `hemelwaterafvoer`, et cetera. The search string `he?` only matches 3-letter strings that start with `he`, like `hek`, `heg`, et cetera.

Find below some base rules for wildcard searches:

- A search term may contain multiple wildcard characters.
- A search term may contain a combination of wildcard characters. For example `m*??` matches any string that starts with `m` and has three or more characters.
- Spaces (URL-encoded as `%20`) are used as word boundaries and wildcard matching only operates within a single word. For example, `r*te*` matches the string **`r`**`uim`**`te`**`lijk`, but not the phrase **`r`**`uimte` **`te`**`kort`.
- Wildcards only operate on fields that contain alphanumerical values.

### Aliases for common queries

To improve the API experience, common queries should be provided as end point. For example, *aanvragen* that have the *status* property set to *gesloten* and sorted by *wijzigingsDatum* in descending order, i.e. recently closed applications, can be retrieved using the following end point:

`GET /aanvragen/recent-gesloten`
