## Paginering

<p class='warning'>Deze extensie is nog in ontwikkeling en kan elk moment wijzigen.</p>

Voor paginering wordt voor het media type 'application/hal+json' aangesloten op Hypertext Application Language (HAL). Aan geretourneerde objecten worden twee gereserveerde velden `_links` (verplicht) en `_embedded` (optioneel) toegevoegd. Deze velden vertegenwoordigen respectievelijk hyperlinks en embedded resources.  

Hier is een voorbeeld van een JSON+HAL representatie:

```json
{
  "_links": {
    "self": {
      "href": "https://.../api/registratie/v1/aanvragen?pagina=3"
    },
    "first": {
      "href": "https://.../api/registratie/v1/aanvragen"
    },
    "prev": {
      "href": "https://.../api/registratie/v1/aanvragen?pagina=2"
    },
    "next": {
      "href": "https://.../api/registratie/v1/aanvragen?pagina=4"
    },
    "last": {
      "href": "https://.../api/registratie/v1/aanvragen?pagina=5"
    }
  },
  "id": "https://.../api/registratie/v1/aanvragen/12",
  "naam": "Mijn dakkapel",
  "samenvatting": "Ik wil een dakkapel bouwen!",
  "_embedded": {
    "aanvrager": {
      "naam": "Bob"
    }
  }
}
```

Indien het "plain" JSON, GeoJSON of iets anders dan HAL betreft zijn er geen `_links`. Deze kunnen dan opgenomen worden in de link response headers. Naast de representatie wordt de volgende metadata teruggegeven als HTTP headers.

|HTTP header|Toelichting|
|-|-|
|`X-Total-Count` (optioneel)|Totaal aantal resultaten|
|`X-Pagination-Count` (optioneel)|Totaal aantal pagina's|
|`X-Pagination-Page` (optioneel)|Huidige pagina|
|`X-Pagination-Limit` (optioneel)|Aantal resultaten per pagina|

Bij grote datasets kunnen de berekeningen voor X-Total-Count en X-Pagination-Count behoorlijke impact hebben op de performance, voornamelijk als er niet of nauwelijks gefilterd wordt.

> [API principe: Use JSON+HAL with media type `application/hal+json` for pagination](#api-42)

Alle links in HAL zijn absoluut. Dit in verband met mogelijke externe links (naar andere endpoints, linked-data resources, etc.) en eenvoudigere navigatie door clients die dan niet zelf de URL hoeven op te bouwen.  
