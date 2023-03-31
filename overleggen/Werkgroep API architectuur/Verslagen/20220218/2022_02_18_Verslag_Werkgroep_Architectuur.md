Verslag: Werkgroep API Architectuur 2022-02-18

Agenda

## 1 Welkom

## 2 Mesh App and Service Architecture 

Rob van der Horst heeft een presentatie gegeven over de "Mesh App and Service Architectuur" 
waarin een totaaloverzicht werd gegeven hoe architectuurprincipes met een API architectuur kunnen worden ingevuld.

Kenmerken:
- gegevensdiensten gestandaardiseerd delen
- ontkoppeling
- herbruikbare elementen
- formele gegevensmodellen
- realtime event driven communicatie
- asynchrone communicatie

### Opzet

specifiek in de opzet is het gebruik van
microservices en microgateway/sidecar

unified log = pubsub voor data synchronisatie

object store = grote media bestanden

uitgangspunt is ontkoppeling en high cohesion -> hou bij elkaar wat bij elkaar hoort

### Van reactief naar pro-actief

Van "koppelen (en zoeken naar samenwerking met bijbehorende planningsproblemen) op moment dat een behoeft opkomt" naar
"data/diensten worden pro-actief toegankelijk gemaakt en aangeboden"


### Esb vs api gateway

Aandachtspunt is centralisatie en schaalbaarheid



## 3 Onderwerpen komende periode

## 4 NORA

## 5 Afsluiten / Afspraken

ivm tijd 3,4,5 niet aan orde gekomen:

Wel is besproken wat vanuit de presentatie kan worden opgepakt in de WG

Suggestie is dat Rob de huidige Architectuur teksten langs kan gaan en kijkt waar mogelijk een aanvulling kan worden gegeven.
Andere opties zijn uit de presentatie enkele elementen meer algemeen/abstract te behandelen : bv microservices/microgateways , asynchrone communicatie.
Een beschrijving als vb/best practice is een mogelijkheid.


Ook is een optie om vergelijkbaar met het "Gemeenschappelijk Basis" principe hier geschetst te komen tot een Overheidsbrede "Gemeenschappelijk Basis" voor API's
