# Naamgeving
## Casing conventie
Wij hebben het gehad over camelCase, snake_case en kebab-case. Deze hebben allen voor- en nadelen:

<table>
    <tr>
        <th>Casing conventie</th>
        <th>Voordelen</th>
        <th>Nadelen</th>
    </tr>
    <tr>
        <td>camelCase</td>
        <td>
            <ul>
                <li>Meest gehanteerde casing conventie bij JSON objecten<li>
                <li>Gebruikelijk in programmeertalen als Java, JavaScript en C#</li>
                <li>Sluit het beste aan bij DSO API Strategie voor JSON objecten</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Niet alle webservers en frameworks kunnen goed overweg met camelCase in URLs</li>
                <li>Dit kan tevens een impact op SEO hebben</li>
            </ul>
        </td>
    <tr>
    <tr>
        <td>snake_case</td>
        <td>
            <ul>
                <li>Gebruikelijk in programmeertalen als Python en Ruby</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Minder gebruikelijk in JSON</li>
                <li>Minder gebruikelijk in programmeertalen als Java, JavaScript en C#</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>kebab-case (spinal-case)</td>
        <td>
            <ul>
                <li>Sluit het beste aan bij DSO API Strategie voor URLs</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Minder gebruikelijk in JSON</li>
                <li>Niet alle programmeertalen (bv JavaScript) kunnen goed overweg met het gebruik van koppeltekens in namen van identifiers</li>
            </ul>
        </td>
    </tr>
</table>

Gezien de voor- en nadelen en omdat dit het beste aansluit bij de DSO API Strategie, is het voorstel om een combinatie te gebruiken van camelCase voor JSON objecten en kebab-case voor URLs.
 
## Speciale tekens
- Diakrieten normaliseren naar basis-karakter
- Symbolen/leestekens (met uitzondering van een koppelteken) weglaten
 
## Resource namen
Omdat resources dingen beschrijven (in plaats van acties), worden resource namen als zelfstandig naamwoorden beschreven. Enkelvoudige resources worden in enkelvoud geschreven, collection resources in meervoud:
(etc--kan voortborduren op 3.1 Resources van de API Design Rules).
 
### Voorbeelden:
- `/gebouw`
- `/vergunningen`
 
### Niet doen:
- Gebruik geen operaties zoals gebruikelijk is bij RPC-style API's (bv /getResource).
- Refereer niet in de naam dat iets een API is (bv /resource_api).
- Gebruik geen bestands extensies in de resource mamen (bv /resource.json).
    - Het gebruik van Content Negotiation via de Accept header heeft de voorkeur, al zijn API aanbieders vrij om convenience endpoints aan te bieden op basis van extensies.
- Voorkom waar mogelijk het gebruik van afkortingen voor concepten, zoals `/coords` ipv `/coordinaten`. Een uitzondering hierop is het gebruik van breed bekende afkortingen als kwalificatie in veldnamen zoals `bagNummeraanduiding`. 
- Gebruik geen samengestelde namen voor geneste objecten (bv /adres_straat).
    - Gebruik hiervoor een sub-object 'adres' met daarin een 'straat' parameter.
 
## Metadata velden
In lijn met de DSO API Strategie is het voorstel om operaties en metadata velden die niet onderdeel zijn van de resource met een underscore te laten starten. Dit om clashes te voorkomen in het geval van veldselecties en filters te voorkomen.
 
Als voorbeeld het volgende geval:

```
{
  "naam": "sportpark xyz",
  "velden": [...]
}
```
 
Om aan te geven dat je de response met alleen het object `velden` terug wil krijgen, doe je de volgende request:
`/resource?velden=velden`
 
Om te filteren op specifieke velden, doe je de volgende request:
`/resource?velden=veld1,veld2`
 
In beide gevallen is de query parameter `velden`, maar wordt deze in een andere context gebruikt.
 
### Voorbeelden in het toepassen van dit voorstel:
•	Operaties _zoeken, _sorteren, _expand, _uitbreiden, _velden etc.
•	Hypermedia sectie: _links
 
 
## Niet uitgewerkt:
•	Het filteren en zoeken op sub-objecten in een resource (bv adres.straat om te zoeken op het veld straat in het object adres) --> onderdeel van werkgroep Filters & Sorteringen.
•	Taalgebruik van metadata filters. De strategie schrijft nu Nederlands voor, maar het kan beter zijn qua compatibiliteit om Engels te gebruiken (_sort, _expand, _search) --> Nader te bespreken met werkgroep
•	Identifiers voor relaties naar andere datasets, in het object of in HAL envelop (bijvoorbeeld nummeraanduiding van de BAG).
