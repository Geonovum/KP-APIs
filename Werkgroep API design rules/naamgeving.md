# Naamgeving
## Generieke naamconventies
### Speciale tekens
- Diakrieten normaliseren naar basis-karakter
- Symbolen/leestekens (met uitzondering van een koppelteken) weglaten
 
## Resource namen en path segments
Omdat resources dingen beschrijven (in plaats van acties), worden resource namen als zelfstandig naamwoorden beschreven. Enkelvoudige resources worden in enkelvoud geschreven, collection resources in meervoud:
(etc--kan voortborduren op 3.1 Resources van de API Design Rules).

In het geval van samengestelde resource namen of path segments, wordt de kebab-case casing conventie gehanteerd.

### Voorbeelden:
- `/gebouw`
- `/vergunningen`
- `/organisatie-codes`
 
### Niet doen:
- Gebruik geen operaties zoals gebruikelijk is bij RPC-style API's (bv /getResource).
- Refereer niet in de naam dat iets een API is (bv /resource_api).
- Gebruik geen bestands extensies in de resource namen (bv /resource.json).
    - Het gebruik van Content Negotiation via de Accept header heeft de voorkeur, al zijn API aanbieders vrij om convenience endpoints aan te bieden op basis van extensies.
- Voorkom waar mogelijk het gebruik van afkortingen voor concepten, zoals `/coords` ipv `/coordinaten`. Een uitzondering hierop is het gebruik van breed bekende afkortingen als kwalificatie in veldnamen zoals `bagNummeraanduiding`. 
- Gebruik geen samengestelde namen voor geneste objecten (bv /adres_straat).
    - Gebruik hiervoor een sub-object 'adres' met daarin een 'straat' parameter.

## Resource bodies
- Gebruik JSON of JSON gebaseerde documenttypen (bv JSON+HAL)
- Gebruik camelCase elementen

## Request parameters
Het voorstel voor request parameters (query parameters en in de request body) is:

- Technische request parameters (gebruikt om te filteren, sorteren, etc) bij voorkeur Engelstalig (`sort`, `filter`, `expand` etc);
- GEEN gebruik van underscores (dus `sort` ipv `_sort`), omdat het anders zal betekenen dat (bijna) alle request parameters met een underscore worden geschreven.
    - Zeker wanneer complexere vormen van filtering worden toegestaan, bijvoorbeeld `/collectie?filter[status]=open` in plaats van `/collectie?status=open`. 
    - Tevens zullen conflicten tussen *technische* (bv. `sort`) en functionele (bv `status` in bovenstaand voorbeeld) beperkt blijven omdat technische request parameters Engelstalig zijn en functionele over het algemeen Nederlandstalig.
- Verdere uitwerking van het gebruik van de technische request parameters voor filteren en sorteren is onderdeel van de werkgroep Filters en Sorteringen.

## Enumeraties
Het voorstel voor enumeraties is:

- (MUST) Gebruik technische waarden in enumeraties die los staan van presentatie van deze waarden.
- In het geval dat het domeinmodel presentatie-specifieke waarden bevat (bijvoorbeeld BAG objectstatusen), gebruik daarvoor bij voorkeur GEEN enumeraties maar strings; documenteer wel de mogelijke waarden goed in de API documentatie.
    - Nadelen van het gebruik van presentatie-specifieke waarden als enums zijn:
        - het is voor Clients lastig om fouten te maken wanneer een waarde moet worden opgegeven of aangepast middels een `POST`, `PUT` of `PATCH` operatie.
        - wanneer een enum waarde moet worden aangepast omwille de behoefte om de presentatie te wijzigen, betekent dit een breaking API change.
        - in het geval van meertaligheid moeten API Clients verschillende logica hanteren om enum waarden uit te lezen of te wijzigen, afhankelijk van de geselecteerde taal.
    - Beter is om naast de presentatie-specifieke waarde ook een enum aan te bieden en de presentatie-specifieke waarde op basis van de (technische) enum waarde te laten berekenen door de API.
        - Als voorbeeld voor de BAG object statusen kan bijvoorbeeld worden gekozen voor een veld pand.status.naam, welke een string is met waarden als `Bouw gestart` en een veld pand.status.code, welke een enum is met waarden als `BOUW_GESTART`. Wanneer de enum door de Client wordt gewijzigd, berekent de API een nieuwe waarde voor de `pand.status.naam`. Dit maakt het tevens gemakkelijk om meertaligheid toe te passen, waarbij `pand.status.naam` afhankelijk van de geselecteerde taal wordt gepresenteerd.
- (SHOULD) Gebruik waar mogelijk UPPER_CAMEL_CASE, URI's voor enumeraties.

## Niet uitgewerkt:
- Het filteren en zoeken op sub-objecten in een resource (bv adres.straat om te zoeken op het veld straat in het object adres) --> onderdeel van werkgroep Filters & Sorteringen.
- Identifiers voor relaties naar andere datasets, in het object of in HAL envelop (bijvoorbeeld nummeraanduiding van de BAG).
- Het voorstel is om NIET te standaardiseren op OAS componenten, omdat dat slechts een technische implementatie is en verplichte standaardisatie problemen op kan leveren bij bijvoorbeeld OAS generatoren, frameworks etc. Hetgeen waar we op willen standaardiseren is het API ontwerp, dus hetgeen de OAS specificatie oplevert.
