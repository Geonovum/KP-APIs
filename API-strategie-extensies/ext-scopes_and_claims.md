## Scopes and Claims

<p class='warning'>This extension is in development and may be modified at any time.</p>

>  This extension is stil a working concept in dutch.



> Extension

### Introduction
Todo 

### Rules when using scopes

API-@@: Formatting scopes 

Todo 

### Rules when using claims

API-@@ 

Todo 

### best practices

Todo





## Aantekeningen Onderzoek:

### Scopes

Scopes zijn parameters die je meegeeft tijdens de authenticatie, normaliter met OAuth 2.0. Na authenticatie bepalen de scopes die zijn meegegeven welke resources (data) aan de client (applicatie) mag worden gegeven. De API die de resources ontsluit kan en zal dus worden beperkt in de data die wordt prijsgegeven aan de client en dit wordt bepaald door de user tijdens authenticatie en niet tijdens de aanroep van de API. 

Je ziet dit typisch terug bij het inloggen op een applicatie met een Apple, Google of Github account. In de dialoog die bij het inloggen wordt getoond staat dan dat alleen de naam en het email adres worden verstrekt aan de client applicatie. Zie bijvoorbeeld [developer.apple.com](https://developer.apple.com/documentation/sign_in_with_apple/clientconfigi/3230955-scope) of [docs.github.com](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps) . 

Opvallend in de voorbeelden is dat je bij Apple alleen de 2 scopes "<u>name</u>" & "<u>email</u>" mee kan geven en dat de API van Github heel veel opties heeft zoals bijvoorbeeld "<u>read:user</u>" , "<u>user:email</u>" & "<u>user:follow</u>". Ook zie je gelijk dat iedere API andere keuzes maakt in de naamgeving van de scopes. Er is dus variatie in wat scopes precies betekenen voor een API.

### Claims

Claims zijn beweringen of verklaringen die personen of systemen maken van zichzelf of een ander(bijv. de gebruiker of de github Authorization Server). Scopes kunnen worden gezien als groepen van claims. Claims bevatten informatie en je vind ze vaak terug in Tokens. Dit in tegenstelling tot Scopes, die geven alleen een context.

*Alternatieve invalshoek:*

> Scopes zitten meer op client (applicatie) niveau, de client vraagt aan de user toestemming voor een bepaalde scope. Claims zitten meer op user niveau, ze geven kleine beetjes informatie over bijv. de identiteit van de gebruiker. 

### Tokens

Het bekendste voorbeeld van Tokens is JWT. [JWT.io](http://JWT.io) beschrijft 

*"JSON Web Tokens are an open, industry standard [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519) method for representing claims securely between two parties."* 

Dit komt erop neer dat een claim wordt voorzien van een signature door de uitgever en een encoding om de data te versleutelen, daarmee kan dus worden herleid wie, wanneer de claim heeft uitgegeven, voor welk doel en tot wanneer deze geldig is. 

### Inzichten van Gartner

Samenvatting van Gartner publicatie: Architect a Modern API Access Control Strategy (Published 8 September 2021 - ID G00723547)

- API Access Control, de authenticatie en authorizatie bij het aanroepen van API's is een vitaal onderdeel van de Security.
- We zoeken, onterecht, naar 1 patroon voor het bieden van API Access Control voor een grote verscheidenheid aan API Use cases.
- Bij succesvolle strategieën wordt API Acces Control nu opgedeeld in kleine, behapbare, en meer use case gerelateerde patronen. Deze patronen zijn eenvoudiger te definiëren, promoten, af te dwingen en te beheren.
- Succesvolle organisaties ontwikkelen een IAM ecosysteem bestaande uit meerdere tools en componenten die, op basis van de algemene API Access Control standaarden, specifieke patronen ondersteunen die zorgen voor de versleuteling, authenticatie en authorizatie bij het aanroepen van API's.

#### Aanbevelingen:

- Grote uitdagingen opknippen in kleine stukken die op zich zelf staand goed zijn op te lossen. Maak een strikte scheiding tussen interne en externe services.
- Bouw een IAM ecosysteem bestaande uit Authorization Servers, API Gateway's, HSM's, secrets managers, identity providers en evt. sidecars.
- Implementeer security over alle lagen, genereer geoptimaliseerde access tokens en doe een fijnmazige validatie. Voorzie in een "defense-in-dept strategy" en hou dit schaalbaar door ontwikkelaars te voorzien in self service portalen en code voorbeelden.
- Wees pragmatisch en verwacht niet te veel in 1x. Iedere organisatie zoekt nog naar de best passende oplossingen, ook de cloud native, api-first koplopers.
- Verbeter de developer experience door te voorzien in implementatie handboeken, beproefde software bibliotheken en integratie strategieën voor hybride situaties. Relateer deze aan de use cases

#### Conclusies:

- Een API Acces control strategie (Extensie?) is noodzakelijk om de juiste patronen voor de verscheidenheid aan use cases voor te schrijven en invulling te geven aan de 5 aanbevelingen van Gartner.
- API Access Control heeft een sterke samenhang met API Discovery en API Treath protection. Geef ook invulling aan die samenhang in de strategie.

#### Vijf dimensies waaraan invulling moet worden gegeven in de strategie

1. Identity functions

	*authenticatie, authorisatie, encriptie, JWT, mTLS, certificates*

1. Apps and their Users

	*different apps have different capabilities. list apps and use cases to provide matching patterns*

1. Mediators

	*API Gateways, Ingress controllers. connect to IAM and enforce policies. sidecars for micro services*

1. Service Maturity

	*SOAP, REST & GraphQL require different protocols and tooling*

1. Developer Enablement

	*delegated control with a central team that controls policies*

### Interessant:

- OAuth 2.0 mTLS Flow [rfc8705](https://www.rfc-editor.org/rfc/rfc8705)
- OPA for policy provisioning https://www.openpolicyagent.org/
- GraphQL en acces control lijken elkaar tegen te spreken🙂 dit vereist een eigen pattern
- Patterns voor Event based services wijken ook af. denk aan AMQP en MQTT of Websockets
- Third party API's zijn een pattern op zich waard
- Patterns voor Cloud Native environmets GKE, AKS, etc verschillen onderling.
- Categoriseer API's op basis van risico's (verschillende use cases)
- 
- Implement TLS: Use server-side certificates in mediators and in your APIs to ensure that all communication —even internal communication — is encrypted.
- Implement claims-based authorization: Pass claim values in tokens down to each service so that the service doesn’t have to rely on local user repositories. 
- Use JWTs: JWTs have become the de facto standard for all access in the internal network.
- 
- **Validate tokens at the edge: In enterprise API gateways, validate the external tokens. Ensure that the signature and audience is correct. Leave fine-grained authorization to each service.**
- **Validate tokens and fine-grained claims at each API: It’s the developers of the APIs that have the deep knowledge about their services and the identity information that’s required to serve a request. Do fine-grained validation of individual claims close to the services.**


## Bijlagen

### A. Referenties:

- https://curity.io/resources/learn/scopes-vs-claims/

- https://auth0.com/docs/get-started/apis/scopes/sample-use-cases-scopes-and-claims

- https://openid.net/

- https://owasp.org/www-project-api-security/

- https://datatracker.ietf.org/doc/html/rfc8705 (OAuth mTLS)

- https://www.openpolicyagent.org/

- [https://github.com/kadaster/klic-win/blob/master/API%20management/Authenticatie_via_oauth.md](https://github.com/kadaster/klic-win/blob/master/API management/Authenticatie_via_oauth.md)

- http://www.simplecloud.info/ & https://datatracker.ietf.org/doc/html/rfc7644 (SCIM)

  

### B. Gartner rapporten

Modern Identity and APIs: OpenID Connect, OAuth 2.0 and SCIM 2.0

https://www.gartner.com/doc/3947294?ref=shareSummary&refval=4 

*Input Heiko:* 

*Dat is één van de twee documenten. Dit is een nieuwere versie ervan.*
- *https://www.gartner.com/document/code/742870?ref=ddisp&refval=742870*

*Dit is de tweede. Deze bevat ook veel input voor de gedachtenvorming voor de richtlijnen rondom scopes en claims:*
- *https://www.gartner.com/document/4005508?ref=authbottomrec&refval=4008358*
*O.a. de QenA op de laatste bladzijde vond ik heel nuttig.*

*(P.S. dit is een ander nuttig document, maar deze is niet relevant voor de scopes en claims discussie: Deze is nl. alleen  relevant voor die overheidsorganisaties die veel (kleine) keten mobiele appjes willen  bouwen, die óók offline moeten (samen)werken.**
- *https://www.gartner.com/document/3979798?ref=authbottomrec&refval=4008358 )**
