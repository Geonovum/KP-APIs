## GEO-ondersteuning

<p class='warning'>Deze extensie is nog in ontwikkeling en kan elk moment wijzigen.</p>

REST API's voor het werken met geometrieën kunnen een filter aanbieden op basis van geografische gegevens. Het is hierbij belangrijk om een onderscheid te maken tussen een geometrie in het resultaat (response) en een geografische filter in de aanroep (request). Het is immers niet vanzelfsprekend dat als iemand wil weten in welk perceel ik hij/zij zich momenteel bevindt, dat ook de geometrie in de response wordt teruggegeven; een naam of nummer kan dan al voldoende zijn.

> [API principe: Support GeoJSON for GEO APIs](#api-34)

Voor GEO API's wordt bij voorkeur de standaard GeoJSON [[rfc8142]] gebruikt.

### Resultaat (response)

In een JSON API wordt een geometrie teruggegeven als GeoJSON. We kiezen er voor om dit binnen de `application/json` te ‘wrappen' in een apart GeoJSON object.

> [API principe: Include GeoJSON as part of the embedded resource in the JSON response](#api-35)

### Aanroep (requests)

Een geografisch filter kan erg complex en groot zijn. Het is daarom een best practice om dergelijke complexe vragen niet in de request URI, maar in de body mee te sturen. Omdat `GET` geen payload mag hebben (hoewel sommige clients dit wel ondersteunen) moet hier dus een andere methode voor gebruikt worden.

In analogie met API's zoals die van Elasticsearch, is een `POST` naar een apart endpoint de juiste weg om te bewandelen. Het onderstaande voorbeeld doet een zogenaamde GEO-query naar alle panden waarin het veld `_geo` (er kunnen ook andere velden zijn, zoals `hoofdgeometrie`, `binnenOmtrek`, `buitenOmtrek`, etc.) het GeoJSON object (in dit geval een `Point`, dus één coördinaat) bevat:

```json
// POST /api/v1/panden/_zoek met request body:
{
  "_geo": {
    "contains": {
      "type": "Point",
      "coordinates": [5.9623762, 52.2118093]
    }
  }
}
```

> [API principe: Provide a `POST` endpoint for GEO queries](#api-36)

Omdat we ons met het geo endpoint beperken tot een GEO-query en we wellicht ook gecombineerde queries willen doen is het sterk aan te bevelen om een generiek query endpoint in te richten:

```json
// POST /api/v1/panden/_zoek met request body:
{
  "_geo": {
    "contains": {
      "type": "Point",
      "coordinates": [5.9623762, 52.2118093]
    }
  },
  "status": "Actief"
}
```

> [API principe: Support mixed queries at `POST` endpoints](#api-37)

Naast contains kan er ook `intersects` (snijdt) of `within` (valt binnen) als operators gebruikt worden. De benamingen van deze operators komen uit de GEO-wereld en die willen we niet opnieuw uitvinden. Zie voor meer details: https://www.w3.org/TR/sdw-bp/#entity-level-links  

Omdat we voor de geometrie een GeoJSON object gebruiken hoeven we hier geen syntax meer voor te verzinnen.

> [API principe: Put results of a global spatial query in the relevant geometric context](#api-38)

In het volgende voorbeeld wordt aangegeven hoe dit kan worden gerealiseerd:

```json
// POST /api/v1/_zoek:
{
  "_embedded": {
    "results": [{
      "type": "enkelbestemming",
      "_links": {
        "self": {
          "title": "Enkelbestemming 1234",
          "href": "/enkelbestemmingen/1234"
        }
      }
    }, {
      "type": "dubbelbestemming",
      "_links": {
        "self": {
          "title": "Dubbelbestemming 8765",
          "href": "/dubbelbestemmingen/8765"
        }
      }
    }]
  }
}
```

### CRS-negotiation

Het default CRS (Coordinate Reference System) van GeoJSON is WGS84. Dit is het globale coördinatenstelsel dat overal ter wereld redelijk goed bruikbaar is, maar vanwege het gebruikte model van de aarde en de verschuiving van de tektonische platen minder nauwkeurig is dan lokale coördinatenstelsels zoals ETRS89 (EPSG:4258, Europees) of RD (EPSG:28992, Nederlands).

Omdat de meeste client-bibliotheken met WGS84 werken, schrijft de W3C/OGC werkgroep "Spatial Data on the Web" voor om dit standaard te ontsluiten. Dit kan direct op een kaart geplot worden zonder moeilijke transformaties. De API-strategie voorziet hierin door naast ETRS89 en RD ook WGS84 of Web Mercator (EPSG:3857, voor rasterdata) te ondersteunen.

> [API principe: Use ETRS89 as the preferred coordinate reference system (CRS)](#api-39)

Het is mogelijk om het CRS voor vraag en antwoord via headers afzonderlijk te specificeren. Hierin zijn vervolgens drie opties (met voorgeschreven projecties) voorhanden: RD, ETRS89 en WGS84.

Een nadere opsomming van de uitgangspunten voor het CRS:

- Leg als bronsysteem binnenkomende formaat vast (juridische context);
- Coördinatenstelsels API-strategie: vraag/antwoord in RD; ETRS89; WGS84;
- Overweeg no-regret: vastleggen in ETRS89 én RD i.p.v. realtime bepalen;
- Hanteer RDNAPTRANS™ 2018 bij transformatie RD versus ETRS89 (correctiegrid);
- Presentatie afhankelijk van context (o.a. gebruikerswensen);
- Uitwisselingsformaat (notatie) ETRS89 en WGS84 X Y in decimale graden: DD.ddddddddd (voorbeeld: `52.255023450`)
- Uitwisselingsformaat (notatie) RD X Y in meters (niet afgerond): `195427.5200 311611.8400`

> [API principe: Pass the coordinate reference system (CRS) of the request and the response in the headers](#api-40)

De hier genoemde headers zijn puur bedoeld voor de onderhandeling tussen de client en de server. Afhankelijk van de toepassing zal naast de geometrieën ook specifieke metadata onderdeel vormen van het antwoord, bijvoorbeeld de oorspronkelijke realisatie inclusief een inwindatum.

Vraag en antwoord kunnen op een ander coördinatensysteem zijn gebaseerd. Hiervoor wordt het HTTP-mechanisme voor content negotiation gebruikt. Het CRS van de geometrie in de vraag (request body) wordt aangeduid met de header `Content-Crs`.

|HTTP header|Waarde|Toelichting|
|-|-|-|
|`Content-Crs`|EPSG:3856|WGS84, Wereld (Web-Mercator-projectie)|
|`Content-Crs`|EPSG:4258|ETRS89, Europees|
|`Content-Crs`|EPSG:28992|RD, Nederlands|

Het gewenste CRS voor de geometrie in het antwoord (response body) wordt aangeduid met de header `Accept-Crs`.  

|HTTP header|Waarde|Toelichting|
|-|-|-|
|`Accept-Crs`|EPSG:3856|WGS84, Wereld (Web-Mercator-projectie)|
|`Accept-Crs`|EPSG:4258|ETRS89, Europees|
|`Accept-Crs`|EPSG:28992|RD, Nederlands|

### CRS-transformatie

Voor het transformeren tussen coördinaatreferentiesystemen is binnen de Rijksoverheid software met een keurmerk beschikbaar.

> [API principe: Use content negotiation to serve different CRSs](#api-41)
