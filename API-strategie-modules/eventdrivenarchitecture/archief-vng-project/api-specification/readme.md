# Notifications API
<!--
*Let op! Het project Notificatieservices is beeindigd per 30 juni 2022. De documenten in de map 'api-specification' zijn gebruikt voor een beproeving in juni 2022 waarbij de bestaande ZGW-Notificatie-API (in beheer bij VNG Realisatie) is omgezet naar een generieke Notificatie-API conform het NL GOV profile for CloudEvents. Verdere ontwikkeling van deze API zal plaatsvinden in de [VNG-Realisatie/notificaties-api](https://github.com/VNG-Realisatie/notificaties-api) repository.* -->

De API-specificatie is work in progress. 
## Quick reference: OAS3 Specificaties

API voor notificatie component:
[ReDoc](http://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/VNG-Realisatie/notificatieservices/main/docs/api-specification/notifications.yaml&nocors),[Swagger](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/VNG-Realisatie/notificatieservices/main/docs/api-specification/notifications.yaml)

API voor notificatie client:
[ReDoc](http://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/VNG-Realisatie/notificatieservices/main/docs/api-specification/notifications_client.yaml&nocors),[Swagger](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/VNG-Realisatie/notificatieservices/main/docs/api-specification/notifications_client.yaml)

Aanvullende specificaties:
- [Beschrijving gedrag](./gedrag.md)
- [Scopes](./scopes.md)

## Toelichting

Bovenstaande versie is nog geen officiele RC. Zie [backlog](https://github.com/VNG-Realisatie/notificatieservices/projects/1) voor de nog openstaande acties.

In eerdere versies was sprake van drie verschillende specificaties:
- publiceren van events
- abonneren
- definieren en bevragen van de achterliggende catalogus (met domeinen, gebeurtenistypen etc).

Dit was gedaan vanuit de gedachte dat het publicatie gedeelte voor alle overheidspartijen bruikbaar zou zijn en het abonneren en de catalogus niet. Bij de uitwerking blijkt echter dat er toch al snel subtiele maar wezenlijke verschillen ontstaan. Zo willen we bij de gemeentelijke API gebruikmaken van het concept 'domein' (als vervanging van het begrip 'topic' in de ZGW API) en wil het kadaster waarschijnlijk een pull ipv een push mechanisme gaan gebruiken (waarvoor een get operatie op de events resource nodig is).

We hebben daarom besloten de API specificatie echt specifiek uit te werken als generieke notificatie API voor het gemeentelijke domein. Daardoor zijn publiceren, abonneren en een beperkte catalogus ondergebracht in één OAS. De OAS is nog steeds als basis te gebruiken voor andere overheidspartijen.

### Documentatie

- [Backlog](https://github.com/VNG-Realisatie/notificatieservices/projects/1)
- [Samenvatting ontwerpbesluiten](./ontwerpbesluiten.md)
- [Mapping op ZGW Notificatie Routing Component API](./mapping_zgw_nrc.md)

## Overige links

- [GOV NL profile for CloudEvents](https://vng-realisatie.github.io/NL-GOV-profile-for-CloudEvents)
- [CloudEvents Subscription documentatie](https://github.com/cloudevents/spec/tree/main/subscriptions) incl. yaml voor CE subsciption
- [ZGW Notificatie Routeringscomponent](https://notificaties-api.vng.cloud/)
- [ZGW Notificatie Client Specificatie](https://vng-realisatie.github.io/gemma-zaken/standaard/notificaties-consumer/index)

