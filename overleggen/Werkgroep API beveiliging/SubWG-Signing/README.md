# SubWerkgroep Signing

De sub-werkgroep Signing (onderdeel werkgroep beveiliging) heeft als doel afspraken rond signing verder in te vullen voor de ADR module Signing en het Digikoppeling REST API profiel. 
De werkgroep richt zich op het volgen van de ontwikkelingen in internationale en europese standaarden om hier zoveel mogelijk op aan te sluiten.

## Signing standaarden voor REST API's

De werkgroep volgt m.n. de ontwikkelingen in onderstaande standaarden:

* [JAdES](https://www.etsi.org/deliver/etsi_ts/119100_119199/11918201/01.01.01_60/ts_11918201v010101p.pdf)
* [HTTP Message Signatures](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-message-signatures) 


## Vergelijking van JAdES en HTTP Message Signatures 

De werkgroep heeft een vergelijking gemaakt van de 2 standaarden:

[Vergelijking JAdES & HTTP Message Signatures](https://geonovum.github.io/KP-APIs/publicaties/REST_API_Signing_Standaarden/)


## Relevante Tooling

* https://ec.europa.eu/digital-building-blocks/DSS/webapp-demo/doc/dss-documentation.html
* https://openid.net/developers/jwt-jws-jwe-jwk-and-jwa-implementations/

## Ontwikkelingen


### Actueel

update 27/9/2024

De modules:
* [ADR Module Signing](https://geonovum.github.io/KP-APIs/API-strategie-modules/signing-jades/)
* [ADR Module Encryptie](https://geonovum.github.io/KP-APIs/API-strategie-modules/encryption/)

Zijn in de stuurgroep KPAPI stabiel verklaard; (en daarmee ‘optioneel’ te gebruiken)

Voor het Digikoppeling REST-API profiel loopt een wijzigingsvoorstel om te verwijzen naar deze modules (maar dan als verplicht) : [Signing & Encryptie toevoegen- Pull Request #30](
https://github.com/Logius-standaarden/Digikoppeling-Koppelvlakstandaard-REST-API/pull/30/files)



update 9/4/2024

1 Binnen de context van het Kennisplatform API’s (specifiek werkgroep Beveiliging) zijn concept ADR modules ontwikkeld voor Signing en Encryptie 

deze zijn geplaatst in de KPAPI repo : [KP-APIs/API-strategie-modules at master](https://github.com/Geonovum/KP-APIs/tree/master/API-strategie-modules)

* [ADR Module Signing](https://geonovum.github.io/KP-APIs/API-strategie-modules/signing-jades/)
* [ADR Module Encryptie](https://geonovum.github.io/KP-APIs/API-strategie-modules/encryption/)

Bijdragen en aanvullingen hierop zijn welkom. 

De invulling van Signing en Encryptie binnen het Digikoppeling REST API profiel ([Digikoppeling Koppelvlakstandaard REST-API 1.1.1 (logius.nl)](https://gitdocumentatie.logius.nl/publicatie/dk/restapi/ )) wordt de komende tijd verder uitgewerkt en zal in principe worden gebaseerd op de ADR modules.


2 IETF Standaard HTTP Message Signatures  heeft nu (per feb 2024) de status ‘Proposed Standard’ : RFC 9421 - HTTP Message Signatures (ietf.org) https://datatracker.ietf.org/doc/rfc9421/

3 De vergelijking van JAdES en HTTP Message Signatures is bijgewerkt voor deze status verandering HTTP Message Signatures van versie 19 Draft naar Proposed Standard : [Vergelijking REST API Signing Standaarden KPAPI](https://gitdocumentatie.logius.nl/publicatie/dk/restapi/)



### Archief

#### In de nieuwste versie van PSD2 (van STET.EU – samenwerkingsverband van vooral Franse Banken) worden zowel httpbis Message Signatures als JSON Web Signature Profile (=JAdES/JWS gebaseerd) genoemd:

Paragraaf 3.5.2.  = JSON Web Signature Profile for Open Banking 
( JSON Web Signature profile is gebaseerd op / compatible met JAdES/JWS – en definieert enkele banking velden – maar principe en uit te voeren stappen zijn gelijk aan JAdES/JWS )

Zie ook [PSD2 (stet.eu)](https://www.stet.eu/assets/files/PSD2/1-6-3/api-dsp2-stet-v1.6.3.1-part-1-framework.pdf)

####	Voor eDelivery is in een pilot een profiel uitgewerkt voor REST API’s

(dit pilot resultaat heeft nog geen officiële status )

Message en Payload Signing is hierin uitgewerkt op basis van JAdES/JWS

Zie [eDelivery REST API profiel](https://ec.europa.eu/digital-building-blocks/wikis/download/attachments/323290750/%28ISA2%29.%28eDelivery%29.%28Piloting%20a%20REST%20API%20extension%20of%20CEF%20eDelivery%29.%28ISA%C2%B2%20IPS%20REST%20API%20Profile%29.%28v1.0%29.pdf?api=v2)

```
5.2 Security..........................................................................................................................................................................16
5.2.2 Message And Payload Level Security..................................................................................................................................17
```







