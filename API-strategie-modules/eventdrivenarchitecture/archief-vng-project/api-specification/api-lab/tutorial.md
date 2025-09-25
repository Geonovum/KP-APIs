
# Tutorial notificeren

In deze tutorial configureren we de referentieimplementatie van de Notificatierouteringscomponent (NRC) voor het versturen en ontvangen van notificaties via de Gemeentelijke Generieke Notificatie API (gebaseerd op CloudEvents).

Overal waar in deze tutorial het woord `notificatie` voorkomt kan ook het begrip `event` gelezen worden. De term `event` wordt gebruikt door de internationale CloudEvents standaard. 

## Wat zijn de vereisten voor deze tutorial?

* API-key voor authorisatie
    * Voor het API-Lab is dat de API-Key:
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0ZXN0c3VpdGUiLCJpYXQiOjE2NTQwODk3NzAsImNsaWVudF9pZCI6Im5yYyIsInVzZXJfaWQiOiJ0ZXN0X3VzZXJfaWQiLCJ1c2VyX3JlcHJlc2VudGF0aW9uIjoiVGVzdCBVc2VyIn0.9CjhYTw-eREVXtdiTQbwyOsXAkAMln5sRj5lzmsaa1s
* Bekendheid met webhooks is een plus

Optioneel:
* `docker` en `docker-compose` zijn aanwezig.

**n.b. Tijdens het API-Lab kan geen ondersteuning verleend worden bij issues ivm installatie en werking van de docker-image.**

## Aan de slag

### Ontvangen en versturen van notificaties

In het notificatieproces zijn de volgende stappen te onderkennen:
1. Een bron maakt bij de Notificatierouteringscomponent (NRC) een domain aan (indien nog niet aanwezig).
2. Een afnemer abonneert zich bij de NRC een geeft daarbij eventuele filtercriteria op.
3. Een bron levert een notificatie (event) af bij de NRC zodat deze verspreid kan worden.
4. De NRC controleert, op basis van de filtercriteria in de abonnementen, bij welke afnemers het aangeleverde event afgeleverd moet worden.
5. De NRC levert de relevante events af bij de afnemer. (Door een POST uit te voeren op de door de afnemer in het abonnement opgegeven `sink` = end-point).

De events zijn in te zien op de NRC. Ga hiervoor naar [de hoofdpagina van de referentieimplementatie](https://notificaties-api.test.vng.cloud/) en klik op de knop 'Logviewer'.

De tutorial hieronder bestaat uit twee delen:
* [Events publiceren](#ik-wil-als-bron-events-publiceren)
* [Events ontvangen](#ik-wil-als-afnemer-events-ontvangen)

#### Ik wil als bron events publiceren

Zoals in het notificatieproces beschreven is het registreren van een domein een noodzakelijke stap om notificaties te kunnen distribueren.

**_Tip: Maak tijdens het API-lab een eigen domein en bijbehorende eventtypes aan zodat de uitgevoerde testen van elkaar gescheiden blijven._**

_Bijvoorbeeld: domein: nl.vng.zaken.leverancierX en dan als types: nl.vng.zaken.leverancierX.zaak_gesloten etc._

Stappen:
	
1. Bepaal de naam van het domein. Voor bijvoorbeeld zaken is dit `nl.vng.zaken.leverancierX`.

2. Zorg dat het domein bekend is bij het NRC. Je kan dit controleren door eerst de lijst met domeinen op te vragen:
 
   ```http
   GET https://notificaties-api.test.vng.cloud/api/v1/domains HTTP/1.0
   Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0ZXN0c3VpdGUiLCJpYXQiOjE2NTQwODk3NzAsImNsaWVudF9pZCI6Im5yYyIsInVzZXJfaWQiOiJ0ZXN0X3VzZXJfaWQiLCJ1c2VyX3JlcHJlc2VudGF0aW9uIjoiVGVzdCBVc2VyIn0.9CjhYTw-eREVXtdiTQbwyOsXAkAMln5sRj5lzmsaa1s
   ```
   Het resultaat ziet er bijvoorbeeld als onderstaand uit:
   ```json
   {
        "name": "nl.vng.zaken.leverancierX",
        "documentationLink": "https://github.com/VNG-Realisatie/notificatieservices/blob/main/docs/api-specification/voorbeeld_documentatielink_zaken_domein.md",
        "filterAttributes": [
            "bronorganisatie",
            "vertrouwelijkheidsaanduiding",
            "zaaktype"]
        "url": "https://notificaties-api.test.vng.cloud/api/v1/domains/8ce0ae0d-941f-406e-99c8-5f1ac7ebc699"
    }
   ```
   Als het domein bestaat, kun je aan de hand van de UUID van het domein, de details van het domein opvragen (in dit geval zou dat dan 8ce0ae0d-941f-406e-99c8-5f1ac7ebc699 zijn)
   
   ```http
   GET https://notificaties-api.test.vng.cloud/api/v1/domains/8ce0ae0d-941f-406e-99c8-5f1ac7ebc699 HTTP/1.0
   Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0ZXN0c3VpdGUiLCJpYXQiOjE2NTQwODk3NzAsImNsaWVudF9pZCI6Im5yYyIsInVzZXJfaWQiOiJ0ZXN0X3VzZXJfaWQiLCJ1c2VyX3JlcHJlc2VudGF0aW9uIjoiVGVzdCBVc2VyIn0.9CjhYTw-eREVXtdiTQbwyOsXAkAMln5sRj5lzmsaa1s   
   ```

3. Registreer het domein (indien het nog niet bestaat)

    ```http
    POST https://notificaties-api.test.vng.cloud/api/v1/domains HTTP/1.0
    Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0ZXN0c3VpdGUiLCJpYXQiOjE2NTQwODk3NzAsImNsaWVudF9pZCI6Im5yYyIsInVzZXJfaWQiOiJ0ZXN0X3VzZXJfaWQiLCJ1c2VyX3JlcHJlc2VudGF0aW9uIjoiVGVzdCBVc2VyIn0.9CjhYTw-eREVXtdiTQbwyOsXAkAMln5sRj5lzmsaa1s
    Content-Type: application/json

    {
      "naam": "nl.vng.zaken.leverancierX",
      "documentatieLink": "https://github.com/VNG-Realisatie/notificatieservices/blob/main/docs/api-specification/voorbeeld_documentatielink_zaken_domein.md",
      "filterAttributes": [
        "bronorganisatie",
        "zaaktype",
        "vertrouwelijkheidaanduiding"
      ]
    }
    ```

    De documentatielink hoort te documenteren welke kenmerken relevant zijn voor een domein en welke events gepubliceerd kunnen worden. Dit helpt afnemers om te bepalen waarop ze willen abonneren.

4. Verstuur een bericht

    ```http
    POST https://notificaties-api.test.vng.cloud/api/v1/events HTTP/1.0
    Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0ZXN0c3VpdGUiLCJpYXQiOjE2NTQwODk3NzAsImNsaWVudF9pZCI6Im5yYyIsInVzZXJfaWQiOiJ0ZXN0X3VzZXJfaWQiLCJ1c2VyX3JlcHJlc2VudGF0aW9uIjoiVGVzdCBVc2VyIn0.9CjhYTw-eREVXtdiTQbwyOsXAkAMln5sRj5lzmsaa1s
    Content-Type: application/json
    
    {
        "id": "042eecb9-be40-4588-8c3c-8de1e0c27ae8",
        "specversion": "1.0",
        "source": "urn:nld:oin:00000001234567890000:systeem:Zaaksysteem",
        "domain": "nl.vng.zaken.leverancierX",
        "type": "nl.vng.zaken.leverancierX.zaak_gecreeerd",
        "time": "2022-06-15T09:00:00.001Z",
        "datacontenttype": "application/json",
        "data": {
            "foo": "bar"
        },
	"dataref": "https://www.vng.nl/"
    }
    ```

#### Ik wil als afnemer events ontvangen

1. Zorg voor een endpoint om events te ontvangen. Gebruik bijvoorbeeld de [webhook-site](https://webhook.site) om events eenvoudig te ontvangen en bekijken. 

**_Let op: Zorg dat het eindpoint als statuscode de code 204 retourneerd en niet de standaard 200._**

_Op webhook.site kan dit door rechtsboven op de optie `edit` te klikken en in vervolgens de default status code aan te passen naar 204._

_n.b. In de voorbeelden is geen sink/eind-point ingevuld._

2. Vraag op welke domeinen beschikbaar zijn:

   ```http
   GET https://notificaties-api.test.vng.cloud/api/v1/domains HTTP/1.0
   Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0ZXN0c3VpdGUiLCJpYXQiOjE2NTQwODk3NzAsImNsaWVudF9pZCI6Im5yYyIsInVzZXJfaWQiOiJ0ZXN0X3VzZXJfaWQiLCJ1c2VyX3JlcHJlc2VudGF0aW9uIjoiVGVzdCBVc2VyIn0.9CjhYTw-eREVXtdiTQbwyOsXAkAMln5sRj5lzmsaa1s
    ````

3. Registreer je abonnement bij het NRC:

   ```http
   POST  https://notificaties-api.test.vng.cloud/api/v1/subscription HTTP/1.0
   Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0ZXN0c3VpdGUiLCJpYXQiOjE2NTQwODk3NzAsImNsaWVudF9pZCI6Im5yYyIsInVzZXJfaWQiOiJ0ZXN0X3VzZXJfaWQiLCJ1c2VyX3JlcHJlc2VudGF0aW9uIjoiVGVzdCBVc2VyIn0.9CjhYTw-eREVXtdiTQbwyOsXAkAMln5sRj5lzmsaa1s
   Content-Type: application/json

   {
    "protocol": "HTTP",
    "sink": "<your end-point here>",
    "source": "urn:nld:oin:00000001234567890000:systeem:Zaaksysteem",
    "protocolSettings": {
        "headers": {
            "X-Custom-Header": "foobar"
        },
        "method": "POST"
    },
    "sinkCredential": {
        "credentialType": "ACCESSTOKEN",
        "accessToken": "abcdef",
        "accessTokenExpiresUtc": "2022-12-31T23:59:00.000Z",
        "accessTokenType": "bearer"
    },
    "config": {
       "property1":"string1",
       "property1":"string2"
    },
    "domain": "nl.vng.zaken.leverancierX",
    "types": [],
    "filters":
    [
	{
		"any": [
			{
				"all": [
					{
						"exact": {
							"attribute": "domain",
							"value": "nl.vng.zaken.leverancierX"
						}
					},
					{
						"any": [
							{
								"exact": {
									"attribute": "type",
									"value": "nl.vng.zaken.leverancierX.zaak_gesloten"
								}
							},
							{
								"exact": {
									"attribute": "type",
									"value": "nl.vng.zaken.leverancierX.zaak_geopend"
								}
							}
						]
					}
				]
			},
			{
				"all": [
					{
						"exact": {
							"attribute": "domain",
							"value": "nl.vng.burgerzaken"
						}
					},
					{
						"exact": {
							"attribute": "type",
							"value": "nl.vng.burgerzaken.kind_geboren_aangifte_elders"
						}
					}
				]
			}
		]
	}
    ],
    "subscriberReference": "Ref"
    }
    ```
	
* `protocol`: Enige toegestane protocol is HTTP.

* `protocolSettings`: Wordt gebruikt om headers door te sturen naar de afnemer.
    * Als het end-point met access tokens werkt dan kunnen deze opgegeven worden in `sinkCredential`. Maakt het end-point nog gebruik van een username/password dan kunnen deze eventueel in de `protocolSettings` als `header` opgegeven worden.

* `sink`: De volledige URL naar je _eigen_ endpoint waar je de events wenst op te ontvangen.

* `sinkCredential`: Hier moet de informatie opgegeven worden over het access token dat nodig is om het end-point te kunnen benaderen. Voor `webhook.site` kunnen dummy waarden gebruikt worden.

* `source`: Filteroptie. Hier kan opgegeven worden van welke bron events afkomstig moeten zijn.

* `domain`: Filteroptie. Hier kan opgegeven worden van welke domein events afkomstig moeten zijn.

* `types`: Filteroptie. Hier kan opgegeven worden aan welke typen het type van het event moet voldoen.

* `filters`: Filteroptie. Hiërarchische structuur met daarin een logische expressie. In bovenstaande voorbeeld is onderstaand gefilterd uitgeschreven:

```
(
  (domain = nl.vng.zaken.leverancierX)
  AND
  ( (type = nl.vng.zaken.leverancierX.zaak_gesloten) OR (type = nl.vng.zaken.leverancierX.zaak_geopend) ) 
)
OR 
( 
  (domein = nl.vng.burgerzaken) AND (type = nl.vng.burgerzaken.kind_geboren_aangifte_elders) 
)
```
   Zie ook https://github.com/VNG-Realisatie/notificatieservices/blob/main/docs/api-specification/gedrag.md#beoordelen-filtercriteria.

* `subscriberReference`: Deze referentie wordt opgenomen in events die doorgestuurd worden naar de afnemer op basis van dit abonnement. De afnemer kan deze informatie bijvoorbeeld gebruiken voor interne routering van het event.
	
4. Berichten worden nu naar je eigen endpoint gestuurd met een POST request

    Hieronder staat een voorbeeld HTTP message zoals deze gepost wordt door de NRC op het end-point. 

   ```http
   POST <your end-point here> HTTP/1.0
   Content-Type: application/json
   Authorization: Bearer <your access token>

   {
   	"id": "042eecb9-be40-4588-8c3c-8de1e0c27ae8",
	"data": 
		{
			"foo": "bar"
		},
	 "time": "2018-03-07T15:47:57.420Z",
	 "type": "nl.vng.zaken.leverancierX.zaak_gecreeerd",
	 "domain": "nl.vng.zaken.leverancierX",
	 "source": "urn:nld:oin:00000001234567890000:systeem:Zaaksysteem",
	 "dataref": "https://www.vng.nl/",
	 "specversion": "1.0",
	 "datacontenttype": "application/json",
	 "subscriberReference": "<your reference>",
	 "subscription": "02b95def-c6be-4042-9672-6f73b094e997"
   }
   ```

## Postman scripts ##

Om de API zelf te kunnen testen, zijn er enkele voorbeeld scripts gemaakt voor gebruik in Postman. 

Zie [Postman scripts](./Notificaties%20API-Lab.postman_collection.zip) voor Postman scripts 

