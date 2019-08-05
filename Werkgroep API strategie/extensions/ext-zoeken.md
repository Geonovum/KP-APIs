## Zoeken

<p class='warning'>Deze extensie is nog in ontwikkeling en kan elk moment wijzigen.</p>

Soms zijn eenvoudige filters onvoldoende en is de kracht van vrije-tekst zoekmachines nodig. API's ondersteunen dit middels de query-parameter `zoek`. Het resultaat wordt in dezelfde representatie teruggegeven.

> [API principe: Use the query parameter `zoek` for full-text search](#api-32)

Voorbeelden van de combinatie filteren, sorteren en zoeken:

|Request|Toelichting|
|-|-|
|`GET /aanvragen?sorteer=-wijzigingDatum`|Haalt een lijst van recente aanvragen op|
|`GET /aanvragen?status=gesloten&sorteer=-wijzigingDatum`|Haalt een lijst van recent gesloten aanvragen op|
|`GET /aanvragen?zoek=urgent&status=open&sorteer=-prio,aanvraagDatum`|Haalt een lijst van aanvragen op met de status 'open' en waarin het woord 'urgent' voorkomt, gesorteerd van hoogste naar laagste prioriteit, en daarbinnen op aanvraagdatum van oud naar nieuw|

### Wildcards

API's die vrije-tekst zoeken ondersteunen kunnen overweg met twee soorten wildcard karakters:

- `*` Komt overeen met nul of meer (niet-spatie) karakters
- `?`  Komt precies overeen met één (niet-spatie) karakter

Bijvoorbeeld, `he*` zal overeenkomen met elk woord dat begint met `he`, zoals `hek`, `hemelwaterafvoer`, enzovoort. In het geval van `he?` komt dit alleen overeen met drie letterwoorden die beginnen met `he`, zoals `hek`, `heg`, enzovoort.

> [API principe: Support both `*` and `?` wildcard characters for full-text search APIs](#api-33)

Hieronder volgen nog een aantal basisregels voor wildcards in zoekopdrachten:

- Er kan meer dan één wildcard in één zoekterm of zin voorkomen.
- De twee wildcard karakters kunnen in combinatie worden gebruikt. Bijvoorbeeld `m*??` komt overeen met woorden die beginnen met `m` en drie of meer tekens hebben.
- Spaties (URL-encoded als `%20`) worden gebruikt als woordscheiding en wildcardmatching werkt alleen binnen een enkel woord. Bijvoorbeeld, `r*te*` komt overeen met de **`r`**`uim`**`te`**`lijk`, maar niet met **`r`**`uimte` **`te`**`kort`.
- Wildcards werken alleen op JSON-velden met tekst (string) waarden.  

### Aliassen voor terugkerende queries

Om de API ervaring verder te verbeteren is het mogelijk om terugkerende queries als endpoints aan te bieden. Zo kunnen onlangs gesloten aanvragen als volgt worden benaderd:

`GET /aanvragen/recent-gesloten`