## Sorteren

<p class='warning'>Deze extensie is nog in ontwikkeling en kan elk moment wijzigen.</p>

Voor sorteren wordt de query-parameter `sorteer` gebruikt. Deze query-parameter accepteert een lijst van velden waarop gesorteerd moet worden gescheiden door een komma. Door een minteken ("-") voor de veldnaam te zetten wordt het veld in aflopende sorteervolgorde gesorteerd. Een aantal voorbeelden:

|Request|Toelichting|
|-|-|
|`GET /aanvragen?sorteer=-prio`|Haalt een lijst van aanvragen op gesorteerd in aflopende volgorde van prioriteit.|
|`GET /aanvragen?sorteer=-prio,aanvraagDatum`|Haalt een lijst van aanvragen in aflopende volgorde van prioriteit op. Binnen een specifieke prioriteit, komen oudere aanvragen eerst.|

> [API principe: Use the query parameter `sorteer` to sort](#api-31)