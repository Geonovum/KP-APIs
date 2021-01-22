## API Security Architectuur

*Extract van samenwerkruimte dd 10-dec-2020*

ICT beveiliging is over het algemeen gebaseerd op de aspecten *beschikbaarheid*, *integriteit* en *vertrouwelijkheid*. Dit hoofdstuk gaat allereerst in op deze drie aspecten, waarna een aantal generieke architectuurprincipes, architectuurpatronen en referentie architecturen gerelateerd aan API beveiliging zullen worden beschreven.


### Beschikbaarheid
Beschikbaarheid gaat erover om te allen tijde bij informatie en informatiebronnen te kunnen en dat de beschikbaarheid van diensten voldoen aan gemaakte continuïteitsafspraken. Beschikbaarheid van gegevens en systeemfuncties wordt over het algemeen gegarandeerd door vermeerdering van systeemfuncties, door herstelbaarheid en beheersing van verwerkingen, door voorspelling van discontinuïteit en handhaving van de functionaliteit. Binnen de NORA is beschikbaarheid opgenomen als afgeleid principe [AP41](https://www.noraonline.nl/wiki/Beschikbaarheid).

In de context van API's gaat beschikbaarheid erover dat consumenten van aangeboden API's juist worden geinformeerd over de afspraken omtrent (on)beschikbaarheid van de API's, dat de beschikbare capaciteit wordt verdeeld over de aangesloten API Clients en dat onvoorziene onbeschikbaarheid voor zowel aanbieders als consumenten van API's inzichtelijk wordt gemaakt, zodat daar juist op ingespeeld kan worden.

De API Capabilities die gemoeid zijn met beschikbaarheid zijn:
- Resource health status
- Versiebeheer
- Continuous Deployment
- Caching
- Rate limiting / Throttling
- SLA Management
- API Monitoring / Alerting
- Foutafhandeling

### Integriteit
Integriteit gaat over het waarborgen van de integriteit van gegevens en systeemfuncties. Dit wordt over het algemeen bereikt door validatie en beheersing van gegevensverwerking en geautoriseerde toegang tot gegevens en systeemfuncties, door scheiding van systeemfuncties, door controle op communicatiegedrag en gegevensuitwisseling en door beperking van functionaliteit. Binnen de NORA is integriteit opgenomen als afgeleid principe [AP42](https://www.noraonline.nl/wiki/Integriteit).

In de context van API's gaat integriteit over het versleutelen en ondertekenen van berichten en gegevens, het valideren van API verzoeken en de vastlegging van de gegevensuitwisseling tussen API aanbieders en consumenten.

De API Capabilities die gemoeid zijn met integriteit zijn:
- API Beveiliging
- Logging / Audit Trail
- Policy Enforcement
- Authenticatie / Autorisatie
- Verbinding / Sessie beheer
- Sleutel Management

### Vertrouwelijkheid
Vertrouwelijkheid gaat over het geheimhouden van gegevens en gegevensbronnen. Dit wordt gegarandeerd door scheiding van systeemfuncties, door controle op communicatiegedrag en gegevensuitwisseling, door validatie op toegang tot gegevens en systeemfuncties en door versleuteling van gegevens. Binnen de NORA is vertrouwelijkheid opgenomen als afgeleid principe [AP43](https://www.noraonline.nl/wiki/Vertrouwelijkheid_%28principe%29).

In de context van API's gaat vertrouwelijkheid over het ervoor te zorgen dat tussen API aanbieder en consument uitgewisselde gegevens niet door onbevoegden kunnen worden ingezien en misbruikt.

De API Capabilities die gemoeid zijn met vertrouwelijkheid zijn:
- API Typologieën
- Caching
- API Beveiliging
- Analytics (?)
- Logging / Audit Trail
- Authenticatie / Autorisatie
- Verbinding / Sessie beheer
- Sleutel management
- Gebruiker / Rol beheer
 

### Principes
- Beschouw elke API alsof deze potentieel als externe API aangeboden wordt, zelfs als daar momenteel nog geen plannen voor zijn.
- Zero-trust networking: elke node moet zich gedragen alsof hij aan het publieke netwerk zit https://www.hashicorp.com/resources/how-zero-trust-networking
- Gebruik generieke methoden voor authenticatie en authorisatie over alle API's, bij voorkeur op basis van bestaande componenten. Voorkom specifieke oplossingen voor individuele API's.
- Versleutel alle data in opslag (at rest) en in uitwisseling (in transit).
- Defense in depth?

### Architectuurpatronen

#### Multi-level Authentication

#### Etc

### Referentie Architecturen

#### API Gateway patroon

#### Microgateways

#### Service Mesh