# Beschrijving gedrag van API

## /events post

- Het binnengekomen event wordt gecontroleerd. Zie _Controleren event_ hieronder.
- Het binnengekomen event wordt opgeslagen. (Mag na doorsturen verwijderd worden).
- Direct na het opslaan wordt statuscode `200` geretourneerd.

Zie _processen in de notificatie component_ voor de verdere verwerking van het event.

### Controleren event

Regels:
- Of het `data` attribuut is gevuld of het `data_base64` attribuut is gevuld, niet beiden. (XOR)
- Sequence / SequenceType moeten ofwel beiden voorkomen of beiden niet.
- Er mogen alleen extra attributen in het event voorkomen die gedefinieerd zijn in het `filterAttributes` van het `domein`.
  Voorbeeld: Stel `domain.filterAttributes = {bronorganisatie, vertrouwelijkheid}`. Stel er komt een event binnen met daarin de attributen `vertrouwelijkheid` en `test`. Het attribuut `vertrouwelijkheid` is toegestaan, `test` niet. Merk op dat niet alle bij het `domein` gespecificeerde `filterAttributen` in het event voor hoeven te komen.

Wat we _NIET_ controleren:
- `Domain` is eigenlijk een namespace. Eigenlijk zouden attributen zoals `type` moeten beginnen met het domein. (Voorbeeld: domain = nl.vng.zaken, type = nl.vng.zaken.status_gewijzigd) 
- Domainspecifieke extension attributen zouden kunnen beginnen met het domein. Voorbeeld: nl.brp.bsn ipv bsn.
- Of de `data` voldoet aan een eventueel opgegeven `dataschema`.

### Processen in de notificatie component

In hoofdlijnen worden de volgende stappen uitgevoerd:
1. Bepalen welke subscriptions in aanmerking komen om het binnengekomen event te ontvangen
2. Event klaarmaken voor aflevering
3. Afleveren van event

In de implementatie kunnen deze stappen mogelijk los van elkaar/deels parallel uitgevoerd worden. Hierbij is het belangrijk dat events altijd op volgorde van binnenkomst bij een afnemer afgeleverd worden.

De drie stappen worden hieronder stuk voor stuk beschreven:

#### 1 Bepalen relevante subscriptions

- Alle subscriptions worden langsgelopen
- Per subscription wordt gekeken of het event voldoet aan de opgegeven filtercriteria (zie specificatie _beoordelen filtercriteria_)
- Als een event voldoet kan dit event klaargemaakt worden voor aflevering (stap 2)

#### 2 Event klaarmaken voor aflevering

- Maak een copy van het event
- Vul in het attribuut `subscription` het id van de subscription van de afnemer in
- Vul in het attribuut `subscriberReference` de subscriber reference van de subscription van de afnemer in. Is er in de subscription geen subscriber reference opgenomen, maak het attribuut dan leeg.
- Het event kan nu afgeleverd worden bij de afnemer (Stap 3)

#### 3 Event afleveren

- Het event wordt afgeleverd door een POST te doen op het door de afnemer opgegeven endpoint. Dit endpoint is te vinden in het `sink` attribute van de subscription.
- Als de afnemer in de protocolSettings http headerattributes heeft opgenomen dan moeten deze worden overgenomen in de POST

In het afleveren kunnen naar eigen inzicht zekerheden rond de aflevering ingebouwd worden. Bijvoorbeeld herhaling van aflevering indien een node tijdelijk niet beschikbaar is. En inzet van deadletter queue's als een node bij herhaling niet bereikbaar is. Et cetera.

#### Beoordelen filtercriteria

Een subscription kent vier attributen voor filtering: `source`, `domain`, `types` en `filters`. De attributen `source` en `domain` kunnen 1 waarde bevatten. Het attribuut `types` kan een array van typen bevatten. Daarbij voldoet het event als het een type heeft dat in deze array voorkomt. Het `filters` attribuut kan een geneste logische structuur bevatten (zie specificatie _Toelichting subscription.filters attribuut_).

Regels:
- Een event mag pas doorgestuurd worden als aan de criteria van al deze filterattributen voldaan is.
- Geen van de attributen is verplicht.
  - Als geen enkel attribuut is ingevuld voldoet ieder event
  - Als bijvoorbeeld alleen `domain` en `types` zijn ingevuld voldoet een event als het domain overeenkomt en het typen voorkomt in de opgegeven lijst met typen.

De werking is het meest eenvoudig te illustreren aan de hand van een voorbeeld. Stel een afnemer wil alleen events ontvangen uit het 'personen' domein en dan alleen de events van het type 'persoon_verhuisd' en 'persoon_overleden'. Dit filter kan als volgt opgegeven worden:

`{
	"domain": "personen",
	"types": [
		"persoon_verhuisd",
		"persoon_overleden"
	]
}`

als logische expressie ziet dit filer er alsvolgt uit:

`(domain = "persoon") AND ( (type = "persoon_verhuisd") OR (type = "persoon_overleden"))`

#### Het `filters` attribuut

De attributen `source`, `domain` en `types` zijn eigenlijk niet nodig. De filters die met deze attributen te maken zijn kunnen namelijk ook met behulp van het filters attribuut uitgedrukt worden. Via het filters attribuut kan een logische espressie doorgegeven worden. Om dit te illustreren is hieronder een voorbeeld uitgewerkt:

Stel we alleen events ontvangen die:
of afkomstig zijn uit het zaken domein en dan alleen als een status is gewijzigd of een zaak gesloten is,
of afkomstig zijn uit het documenten domein waarbij ons beperken tot vertrouwelijke documenten.

Als logische expressie ziet dit criterium er alsvolgt uit:

```
(
  domain = "nl.vng.zaken" 
  and 
  (
    type = "nl.vng.zaken.status_gewijzigd" 
    or 
    type = "nl.vng.zaken.zaak_gesloten"
  )
)

or 

(
  domain = "nl.vng.documenten" 
  and 
  vertrouwelijkheid = "normaal"
)
```

In deze vorm is het voor mensen redelijk leesbaar. Voor executie door software is een andere structurering echter handiger. Daarbij wordt eerst de operator opgegeven (AND, OR...) en dan de operanden. (Zie [Polish Notation](https://en.wikipedia.org/wiki/Polish_notation))

De expressie komt er, zonder allerlei haakjes maar met zorgvuldig inspringen, alsvolgt uit te zien:

```yaml
any:
- all:
  - exact:
      domain: nl.vng.zaken
  - any:
    - exact:
        type: nl.vng.zaken.status_gewijzigd
    - exact:
        type: nl.vng.zaken.zaak_gesloten
- exact:
    domain: nl.vng.documenten
    vertrouwelijkheid: normaal
```

vertaald naar een JSON-structuur krijgen we vervolgens:

```json
{
	"any": [
		{
			"all": [
				{
					"exact": {
						"domain": "nl.vng.zaken"
					}
				},
				{
					"any": [
						{
							"exact": {
								"type": "nl.vng.zaken.status_gewijzigd"
							}
						},
						{
							"exact": {
								"type": "nl.vng.zaken.zaak_gesloten"
							}
						}
					]
				}
			]
		},
		{
			"exact": {
				"domain": "nl.vng.documenten",
				"vertrouwelijkheid": "normaal"
			}
		}
	]
}
```
Bovenstaande expressie kan gevalideerd worden in het van het OAS afgeleide [JSON schema](https://github.com/VNG-Realisatie/notificatieservices/blob/main/docs/api-specification/filters_schema.json). In deze laatste vorm zal de expressie aangeleverd moeten worden.

Waarschijnlijk is deze vorm door de CE werkgroep gekozen omdat de expressie in deze vorm direct uit te voeren is (en niet eerst geparseerd hoeft te worden). Het zou wel bijzonder handig zijn als er iets van een hulpmiddel zou komen waarmee logische expressie omgezet zouden kunnen worden in dit soort json structuren.

n.b. 
- De interne logica van subscriptions wordt niet gevalideerd. Het is dus mogelijk een syntactisch valide filter op te geven dat inhoudelijk zinloos is (en daardoor geen enkel event doorstuurt).
- Operatoren zoals de `exact` mogen een lege value hebben. Het attribuut moet dan voorkomen EN leeg zijn.
- Bij operatoren zoals de `exact` wordt case insensitive gezocht naar het attribuut. De vergelijking van de `value` gebeurt case sensitive.

## /subscriptions post

Bij een post op de subscription resource moet o.a. het eindpoint (de sink) gevalideerd worden. Hierbij volgende we de webhooks specificatie van CloudEvent. Deze is voor de volledigheid hieronder overgenomen.

```
Delivering notifications
- A delivery request MUST use a HTTP POST request via HTTPS.
- A delivery response MUST have the appropriate status code: 
  - 200 OK of 200 Created if delivery had been accepted and processed and response carries a payload
  - 201 Created of 204 No Content when accepted and processed but carries no payload
  - 202 Accepted if accepted but not yet processed or processing status is unknown
  - 410 Gone if delivery target has been retired
  - 429 Too Many Requests when exceeding a request rate limit and MUST include the Retry-After header.
  - 415 Unsupported Media Type wehen notification format is not understood.
  - other error status codes apply as specified in RFC7231.

Authorization
- The delivery request MUST use one of the following two methods (both of which lean on the OAuth 2.0 Bearer Token RFC6750 model):
- The access token is sent in the Authorization request header field; for OAuth 2.0 Bearer tokens, the "Bearer" scheme MUST be used.
- The access token is added to the HTTP Request URI Query component as described in URI Query Parameter.

Abuse protection
It must be prevented that notifications are sent to recipients who have not requested this themselves. A legitimate delivery target needs to indicate that it agrees with notifications being delivered to it. Reaching the delivery agreement is realized using a validation handshake:
- A handshake can either be executed immediately at registration time or as a "pre-flight" request immediately preceding a delivery.
- Delivery targets SHOULD support the abuse protection feature. If a target does not support the feature, the sender MAY choose not to send to the target, at all, or send only at a very low request rate.
- The validation request uses the HTTP OPTIONS method with header fields:
  - WebHook-Request-Origin (required): a DNS expression that identifies the sending system
  - WebHook-Request-Callback (optional): a callback URL that allows the delivery target to grant send permission asynchronously, via a simple HTTPS callback.
  - WebHook-Request-Rate (optional): a positive integer number that expresses the request rate in "requests per minute"
- The validation respons MUST be sent if the delivery target does allow delivery of events with header fields:
  - WebHook-Allowed-Origin (required): MUST either be the origin name supplied in the WebHook-Request-Origin header, or a singular asterisk character ('*'), indicating that the delivery target supports notifications from all origins.
  - WebHook-Allowed-Rate (depends): MUST be returned if the request contained the WebHook-Request-Rate, otherwise it SHOULD be returned; an integer number expresses the permitted request rate in "requests per minute" or asterisk when there is no rate limitation.
```



