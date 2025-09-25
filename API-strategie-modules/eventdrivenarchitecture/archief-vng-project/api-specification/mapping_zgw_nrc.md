# Mapping op ZGW Notificatie Routering Component API

Hieronder worden de verschillen tussen de bestaande ZGW NRC (notificatierouteringscomponent) API en de concept CloudEvents Notificatie API beschreven.

Voor het domein Zaken is, als voorbeeld, een [nieuwe documentatie pagina](./voorbeeld_documentatielink_zaken_domein.md) met de beschrijving van de events (voorheen resources en acties) gemaakt.

## Events resource

ZGW Attribuut | Events resource attribuut | Opmerkingen | Voorbeeld
| :--- | :--- | :--- | :---
kanaal        | domain | - | nl.vng.zaken of nl.vng.documenten
hoofdObject   | data.resourceUrl | Notificaties worden beperkt tot de hoofdresource. Zie toelichting bij deprecated attributen.
resource      | - | Zie toelichting bij deprecated attributen.
resourceUrl   | - | Zie toelichting bij deprecated attributen.
actie         | type | Format voor conversie van bestaande typen: &lt;hoofdobject&gt;&lt;resource&gt;&lt;actie&gt;. Bijvoorbeeld Zaakstatus_gewijzigd
aanmaakdatum  | time | -
kenmerken     | &lt;domain&gt;.&lt;naam&gt; = &lt;value&gt; | - | nl.vng.zaken.vertrouwelijkheid

### Deprecated attributen voor backwards compatibility:

ZGW Attribuut | Events resource attribuut | Opmerkingen
| :--- | :--- | :---
hoofdobject | data.deprecated_hoofdObject | Dit is hoofdobject en niet de subresource. Voorbeeld: Zaak (en niet Status).
resource    | data.deprecated_resource | Dit is, indien van toepassing, de naam van de subresource. Voorbeeld: Status.
resourceUrl | data.deprecated_resourceUrl | Dit is, indien van toepassing, de uri van de subresource. 

Toelichting:
Bij generiek gebruik van de API zullen er veel events zijn die impact hebben op meerdere resources. Bijvoorbeeld bij het ontstaan of registreren van een nieuw complex object met meerdere subresources. Er zijn dan twee opties: alle subresources vermelden of helemaal geen subresources vermelden. Er is gekozen voor het laatste. Ook voor de situaties waarin er 'toevallig' wel precies 1 (sub)resource wordt geraakt door het event.
Met deze manier van werken verschuift de inhoud van de notificatie van gegevensgeorienteerd (precies vertellen welke resources geraakt zijn) naar gebeurtenisgeorienteerd (waarbij het aan de afnemer overgelaten wordt om te bepalen welke informatie verwerkt moet worden nav de gebeurtenis).
Met deze werkwijze worden ook potentiele privacy issues voorkomen die ontstaan als een afnemer een bepaalde resource niet mag inzien en ook niet mag weten dat deze aangepast is. Bijvoorbeeld een resource met informatie over iemands nationaliteit.

### Nieuwe attributen

Onderstaande attributen zijn toegevoegd omdat ze onderdeel zijn van de CloudEvents berichtspecificatie. Zie het [GOV NL profile for CloudEvents](https://vng-realisatie.github.io/NL-GOV-profile-for-CloudEvents/) voor meer informatie over de semantiek van deze attributen.
  
Events resource attribuut | Opmerkingen | Voorbeeld
| :--- | :--- | :---
specversion | CloudEvents versie | 1.0
id | Uuid van event | 2febb675-b06c-4f3a-8fc3-f6649aa25ae4
source | Bron van het event | `urn:nld:oin:00000001234567890000:systeem:Zaaksysteem`
datacontenttype | Contenttype van het data-attribuut | application/json
dataschema | Optioneel schema dat de inhoud van het data-attribuut beschrijft | `https:www.vng.nl/zgw/zaken/status_gewijzigd_schema.json`
sequence | Nummer voor ordening van de events | 42
sequencetype | Datatype van sequence. Momenteel zijn alleen integers toegestaan | Integer
dataref | Zie toelichting OAS en/of CE specificatie voor gebruik | 

## Abonnementen resource

ZGW Attribuut | Subscription resource attribuut | Opmerkingen
| :--- | :--- | :---
callbackUrl     | sink | -
auth            | sinkcredential | -
kanalen.filters | filter | Niet backwards compatible.
kanalen.naam    | domain | Niet backwards compatible.

## Kanalen resource

ZGW Attribuut | Domain resource attribuut | Opmerkingen
| :--- | :--- | :---
url              | - | Niet gemapped
naam             | name | -
documentatieLink | documentationLink | _
filters          | filterAttributes | -
