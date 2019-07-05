## Paginering

Voor paginering worden de hypermedia controls `self`, `first`, `prev`, `next` en `last` gebruikt zoals beschreven in de [RFC5988](https://tools.ietf.org/html/rfc5988).

Hieronder een voorbeeld van paginering voor het media type 'application/json':

```
{
	"count": 1500,
	"self": "https://.../api/registratie/v1/aanvragen?page=3",
	"first": "https://.../api/registratie/v1/aanvragen",
	"prev": "https://.../api/registratie/v1/aanvragen?page=2",
	"next": "https://.../api/registratie/v1/aanvragen?page=4",
	"last": "https://.../api/registratie/v1/aanvragen?page=5",
	results: [
		{
			"self": "https://.../api/registratie/v1/aanvragen/12",
			"titel": "Mijn dakkapel",
			"samenvatting": "Ik wil een dakkapel bouwen!",
			"aanvrager": "Bob"
		},
		...
	]
}
```
Het element `count` staat voor het totale aantal resultaten en is niet verplicht. De query-parameter `page` wordt gebruikt om te verwijzen naar een pagina binnen de resource-collectie. De resulaten binnen de pagina worden opgenomen in de `results` array. 

|Hypermedia control|Toelichting|
|-|-|
|`self` (verplicht)|Link naar de huidige pagina.|
|`first` (optioneel)|Link naar de eerste pagina.|
|`prev` (conditioneel verplicht)|Link naar de vorige pagina. Indien de huidige pagina de eerste pagina is, dan moet deze link worden weggelaten. In alle andere gevallen is deze link verplicht.|
|`next` (conditioneel verplicht)|Link naar de volgende pagina. Indien de huidige pagina de laatste pagina is, dan moet deze link worden weggelaten. In alle andere gevallen is deze link verplicht.|
|`last` (optioneel)|Link naar de laatste pagina.|

Er is besloten om de pagineringsinformatie op te nemen in de JSON-body in plaats van de HTTP Link header omdat het meer developers-friendly is:
* JSON is makkelijker te parsen dan tekstuele structuren in een Link header.
* HATEOAS-principe: door te klikken op de pagina-links kan de developer snel begrijpen hoe het mechanisme werkt.

Naast de bovenstaande JSON-response wordt de volgende metadata teruggegeven als HTTP headers.

|HTTP header|Toelichting|
|-|-|
|`X-Total-Count` (optioneel)|Totaal aantal resultaten|
|`X-Pagination-Count` (optioneel)|Totaal aantal pagina's|
|`X-Pagination-Page` (optioneel)|Huidige pagina|
|`X-Pagination-Limit` (optioneel)|Aantal resultaten per pagina

Bij grote datasets kunnen de berekeningen voor X-Total-Count en X-Pagination-Count behoorlijke impact hebben op de performance, voornamelijk als er niet of nauwelijks gefilterd wordt. De header `X-Total-Count` bevat dezelfde informatie als het element `count` in de JSON-body (alleen voor het tonen van het totale aantal resultaten is besloten om beide mogelijkheden te ondersteunen).

> [API principe: Voor het mediatype "application/json" wordt paginering gerealiseerd op basis van RFC5988 zoals hierboven beschreven. Voor andere mediatypes zoals "application/hal+json" wordt verwezen naar de desbetreffende standaard voor het omgaan met paginering.](#api-42)
