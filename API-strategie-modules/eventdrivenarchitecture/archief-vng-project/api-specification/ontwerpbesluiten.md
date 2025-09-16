# Ontwerpbesluiten

Beknopte samenvatting van de belangrijkste ontwerpbesluiten.

## GOV NL profile for CloudEvents (berichtstandaard)

### Events resource, overzicht van attributen

Alle attributen volgen de [GOV NL profile for CloudEvents](https://vng-realisatie.github.io/NL-GOV-profile-for-CloudEvents/) specificatie tenzij expliciet is aangegeven dat er een aanvulling of afwijking is. 

Attribuut           | Opmerkingen
| :--- | :--- 
id                  | - (Initieel eis dat id een uuid MOET zijn, na overleg met Kadaster veranderd in SHOULD).
source              | Formaat MOET URN zijn.
specversion         | De OAS specificatie heeft al een versie numnmer. De CloudEvents versie zou afgeleid kunnen worden uit de beschrijving van de OAS. Om compatible te zijn met de CE berichtstandaard is besloten `specversion` toch expliciet op te nemen.
type                | -
datacontenttype     | Waarde MOET 'application/json' zijn.
dataschema          | -
subject             | - (Initieel niet opgenomen. Moet echter wel opgenomen worden om compatible te zijn met CE).
time                | -
dataref             | Deze CE extensie is toegestaan.
sequence            | Deze CE extensie is toegestaan.
sequencetype        | Deze CE extensie is toegestaan.
data                | -
data_base64         | Zoals gespecificeerd in _JSON Event Format for CloudEvents_.
domain              | Toelichting volgt na tabel.
subscription        | Zie description in OAS.
subscriberReference | Zie description in OAS.

### events.domain

Verplicht attribuut. MOET opgenomen worden om het domein waartoe events behoren aan te geven.
n.b. Was initieel optioneel. Het attribuut heeft echter de functie van een namespace. Events zullen gerouteerd worden over allerlei hubs (notificatiecomponenten). Daarbij is cruciaal dat er geen verwarring kan ontstaan over events. Vandaar de verplichting.

Voorbeeld: Conceptueel is besloten om zaken en documenten van elkaar te scheiden. Beiden vormen een apart domein. Er zijn zaaksystemen en documentsystemen. Het kan ook zijn dat een systeem functionaliteit voor beiden aanbied. In die situatie biedt een systeem (source) events over twee domeinen.

### events.data

Er is besloten om geen onderverdeling aan te brengen binnen het data attribuut. Indeling hiervan wordt overgelaten aan de verschillende domeinen.
(Achtergrond: Er is een discussie geweest of het zinvol zou zijn om binnen het data attribuut onderscheid te maken tussen identificerende gegevens en overige gegevens over een gebeurtenis).

## Subscription API

### Subscription resource, overzicht van attributen

Alle attributen volgen de draft specificatie van de CloudEvents subscription werkgroep tenzij expliciet is aangegeven dat er een aanvulling of afwijking is. 

Attribuut           | Opmerkingen
| :--- | :--- 
id                  | Formaat MOET UUID zijn.
sinkcredential      | Alleen `ACCESSTOKEN` en `REFRESHTOKEN` zijn toegestaan. `PLAIN` niet.
protocol            | Beperkt tot `HTTP`.
protocolsettings    | Beperkt tot `HTTPSettings`. Dus niet `MQTTSettings`, `AMQPSettings`, `ApacheKafkaSettings`, `NATSSettings`.
protocolsettings HTTPSettings.header | -
protocolsettings HTTPSettings.method | MOET 'POST' zijn.
source              | -
domain              | Niet aanwezig CE en dus ook niet in de CE draft voor abonneren. Wel logisch om, naar analogie van source, dit attribuut ook in de subscription op te nemen. Net zoals source is het een enkelvoudig attribuut. Per subscription kan dus 1 domain opgegeven worden. (Overigens zou je via het filters attribuut wel meerdere domains kunnen opgeven.
types               | -
filters             | De opties `Dialect` en `SQL filter` zijn niet toegestaan.
subscriberReference | Zie description in OAS.

## JSON Event Format for CloudEvents

Conform handreiking in GOV NL profile for CloudEvents.

Aanscherping:
- The _GOV NL profile for CloudEvents JSONSchema_ for the spec can be used to validate events in JSON.
- JSON Batch Format is niet toegestaan.

## HTTP Protocol Binding for CloudEvents

Conform handreiking in GOV NL profile for CloudEvents

Een aantal variaties is niet toegestaan. Om deze expliciet aan te geven zijn is de tekst uit de handreiking integraal overgenomen en zijn niet toegestane variaties doorgehaald.

Aanscherping:
- Event should be transferred using the YANA notifications_post operation.
  - ~~Events can be transferred with all standard or application-defined HTTP request methods that support payload body transfers. Events can be also be transferred in HTTP responses and with all HTTP status codes that permit payload body transfers.~~
- Only the structured mode is allowed.
  - structured (required): HTTP message body contains both event data and metadata attributes; an appropriate event format is used (non-batching) JSON is the only event format that MUST be supported)
  - ~~batched (optional): HTTP message body contains event data and metadata attributes from multiple events; an appropriate event format is used.~~
  - ~~binary (required): HTTP message body contains event data as-is; event attributes mapped to HTTP-headers; HTTP Content-Type header declares the media type.~~
- Received Content-Type header value is application/cloudevents+json
  - ~~application/cloudevents(+xxxx): structured mode (xxx denotes the used event format)~~
  - ~~application/cloudevents-batch: batched mode~~
  - ~~Otherwise: binary mode (Content-Type header declares the media type.)~~
- Structured content mode:
  - The HTTP message body MUST contain both event data and metadata attributes.
  - The HTTP Content-Type header MUST be set to the media type of an event format (E.g. application/cloudevents+json; charset=UTF-8)
  - The chosen event format defines how all attributes, and data, are represented in the HTTP message body.
  - ~~Implementations MAY include the same HTTP headers as defined for the binary mode (E.g. ce-id).~~
- Batched content mode: Niet toegestaan. Pas toestaan als er use cases voor zijn.
- Binary content mode: Niet toegestaan. Pas toestaan als er use cases voor zijn.

## HTTP 1.1 Web Hooks for Event Delivery

Deze passage is verplaatst naar de [gedragsbeschrijving](./gedrag.md).
