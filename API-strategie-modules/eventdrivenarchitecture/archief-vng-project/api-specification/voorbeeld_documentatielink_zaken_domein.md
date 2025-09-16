# Notificaties

**Documentatie over notificaties binnen het domein Zaken**
 
Via een notificatiecomponent kunnen consumers zich abonneren op notificaties uit het domein Zaken.  De notificaties van de ZGW Notificaties API zijn vertaald naar events conform de nieuwe (generieke) Notification API.

** Todo **
- Als voorbeeld url naar referentie implementatie opnemen.
- Verwijzing naar documentatie over notificeren en de notificatiecomponent.

## Domein

Namespace van het domein is `nl.vng.zaken`.

## Filterattributen (_Voorheen Kenmerken_)

- `bronorganisatie`: Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die de zaak heeft gecreeerd. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef
- `zaaktype`: URL-referentie naar het ZAAKTYPE (in de Catalogi API) in de CATALOGUS waar deze voorkomt
- `vertrouwelijkheidaanduiding`: Aanduiding van de mate waarin het zaakdossier van de ZAAK voor de openbaarheid bestemd is.

## Eventtypes (_Voorheen Resources en acties_)

Vertaling van recources en acties naar eventttypes.

<table>
  <tr>
      <td></td>
      <td colspan="2"><i>Voorheen</i></td>
      <td></td>
  </tr>
  <tr>
      <td><b>Eventtype</b></td>
      <td><b>Resource</b></td>
      <td><b>Actie</b></td>
      <td><b>Toelichting</b></td>
  </tr>
  <tr>
      <td>nl.vng.zaken.zaak_gecreeerd</td>
      <td>zaak</td>
      <td>create</td>
      <td></td>
  </tr>
  <tr>
      <td>nl.vng.zaken.zaak_gewijzigd</td>
      <td>zaak</td>
      <td>update</td>
      <td></td>
  </tr>
  <tr>
      <td>nl.vng.zaken.zaak_verwijderd</td>
      <td>zaak</td>
      <td>destroy</td>
      <td></td>
  </tr>
  <tr>
      <td>nl.vng.zaken.status_gecreeerd</td>
      <td>status</td>
      <td>create</td>
      <td></td>
  </tr>
  <tr>
      <td>nl.vng.zaken.zaakobject_gecreeerd</td>
      <td>zaakobject</td>
      <td>create</td>
      <td></td>
  </tr>
  <tr>
      <td>nl.vng.zaken.zaakobject_gewijzigd</td>
      <td>zaakobject</td>
      <td>update</td>
      <td></td>
  </tr>
  <tr>
      <td>nl.vng.zaken.zaakobject_verwijderd</td>
      <td>zaakobject</td>
      <td>destroy</td>
      <td></td>
  </tr>
 <tr>
      <td>nl.vng.zaken.zaakinformatieobject_gecreeerd</td>
      <td>zaakinformatieobject</td>
      <td>create</td>
      <td></td>
  </tr>
 <tr>
      <td>nl.vng.zaken.zaakeigenschap_gecreeerd</td>
      <td>zaakeigenschap</td>
      <td>create</td>
      <td></td>
  </tr>
 <tr>
      <td>nl.vng.zaken.zaakeigenschap_gewijzigd</td>
      <td>zaakeigenschap</td>
      <td>update</td>
      <td></td>
  </tr>
 <tr>
      <td>nl.vng.zaken.zaakeigenschap_verwijderd</td>
      <td>zaakeigenschap</td>
      <td>destroy</td>
      <td></td>
  </tr>
  <tr>
      <td>nl.vng.zaken.klantcontact_gecreeerd</td>
      <td>klantcontact</td>
      <td>create</td>
      <td></td>
  </tr>
  <tr>
      <td>nl.vng.zaken.rol_gecreeerd</td>
      <td>rol</td>
      <td>create</td>
      <td></td>
  </tr>
  <tr>
      <td>nl.vng.zaken.rol_verwijderd</td>
      <td>rol</td>
      <td>destroy</td>
      <td></td>
  </tr>
  <tr>
      <td>nl.vng.zaken.resultaat_gecreeerd</td>
      <td>resultaat</td>
      <td>create</td>
      <td></td>
  </tr>
  <tr>
      <td>nl.vng.zaken.resultaat_gewijzigd</td>
      <td>resultaat</td>
      <td>update</td>
      <td></td>
  </tr>
  <tr>
      <td>nl.vng.zaken.resultaat_verwijderd</td>
      <td>resultaat</td>
      <td>destroy</td>
      <td></td>
  </tr>
  <tr>
      <td>nl.vng.zaken.zaakbesluit_gecreeerd</td>
      <td>zaakbesluit</td>
      <td>create</td>
      <td></td>
  </tr> 
  <tr>
      <td>nl.vng.zaken.zaakcontactmoment_gecreeerd</td>
      <td>zaakcontactmoment</td>
      <td>create</td>
      <td></td>
  </tr>  
  <tr>
      <td>nl.vng.zaken.zaakverzoek_gecreeerd</td>
      <td>zaakverzoek</td>
      <td>create</td>
      <td></td>
  </tr>
</table>
