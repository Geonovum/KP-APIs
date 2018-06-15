# Werkgroep Authenticatie/Autorisatie

**Datum:** 11-12-2017 9:30-12:00

**Aanwezig:** Paul Dam(forum standaardisatie, voorzitter), Frank Terpstra(Geonovum), Jan Jaap Zoutendijk(Enable-U/RWS Digitaal Stelsel Omgevingswet), Joost Farla(Kadaster – GRID), Martin Borgman (Kadaster), Arnoud Quanjer(VNG realisatie), Remco Schaar(Logius – Eid/eHerkenning), Hans Hendrikman (RvIG), Bob te Riele (RvIG), Rob Post (RvIG), Marcel van den Brink (Kamer van Koophandel), Peter Haasnoot(logius), Erwin Reinhoud(Kennisnet)

**Afgemeld:** Henri Korver(VNG realisatie)

Gestart wordt met een voorstel ronde. Paul Dam en Frank Terpstra lichten kort de aanleiding toe. Geonovum is het Kennisplatform APIs gestart (samen met KvK, Forum standaardisatie, Kadaster en VNG realisatie), doel is om kennis te delen over het gebruik van APIs door de overheid. Dat gebeurd in verschillende werkgroepen. De werkgroep Authenticatie/Autorisatie is als eerste gestart omdat er een kant en klaar onderwerp klaar lag. Bij het forum standaardisatie was uit het expert advies naar voren gekomen dat OAuth (een belangrijke standaard voor APIs) pas op de pas toe of leg uit lijst kon komen als er een Nederlands profiel voor is opgesteld. Het opstellen van dit profiel is het eerste doel van deze werkgroep. Hierna kunnen mogelijk nog andere onderwerpen op authenticatie/autorisatie gebied in relatie tot APIs besproken worden.
zie ook: https://www.geonovum.nl/onderwerpen/platform-apis/nieuws/kennisplatform-apis-van-start-gegaan


## Presentatie Gemeenten

Arnoud Quanjer ligt plannen gemeenten toe mbt rechten delegatie. Gebaseerd op document https://www.gemmaonline.nl/index.php/Gegevenslandschap_-_Aansluiting_op_het_het_gegevenslandschap_vanuit_gemeentelijk_perspectief
Belangrijk punt om te behandelen in Kennisplatform APIs maar niet in deze werkgroep is hoe om te gaan met tijdreizen(formele/materiële historie) in relatie tot APIs.

## Presentatie Digitaal Stelsel Omgevingswet

Jan Jaap Zoutendijk ligt het gebruik van OAuth door het DSO toe.
Het DSO kent 3 use cases
* De eerste en tevens eenvoudigste use case, bestaat uit koppelingen tussen applicaties binnen DSO. Een voorbeeld is het loket met de content API. De communicatie verloopt via het knooppunt. Hierbij is het alleen van belang dat de applicatie zelf informatie nodig heeft en is er geen sprake van bijvoorbeeld ingelogde eindgebruikers die een bevraging doen. De identiteit die gepropageerd wordt is in dit geval die van een applicatie. Dit is een technische identiteit. Omdat de services blootgesteld worden via het knooppunt zullen partijen kenbaar moeten maken dat ze geautoriseerd zijn op de API’s die ze bevragen. Dit word afgedwongen door de API gateway.
Deze usecase gebruikt de client credentials grant met opaque bearer tokens.

* De tweede use case betreft, naast applicaties van het DSO, ook ingelogde eindgebruikers. Deze gebruikers kunnen ingelogd zijn met bijvoorbeeld DigiD, eHerkenning of een DSO ID. Een voorbeeld van deze use case is een initiatiefnemer die ingelogd is in het loket, en een aanvraag in wil dienen via een gebruikerstoepassing. Het knooppunt moet de identiteit van de eindgebruiker doorgeven. In deze use-case werken meerdere componenten van het DSO samen en wordt gebruik gemaakt van de GDI componenten DigiD / EHerkenning. Deze use case is dus een uitbreiding/ specialisatie van de eerste usecase.
Deze usecase gebruikt OpenID Connect, bearer +ID tokens(JWT) en de authorization code grant.

* De derde use case betreft die van applicaties van derden die gebruik maken van de functionaliteit van het DSO. Een voorbeeld van deze use case is een aannemersbedrijf met een app waarin klanten van het aannemersbedrijf het aannemersbedrijf machtigen om een aanvraag voor een vergunning te doen namens hen.  
Deze usecase moet nog uitgewerkt worden maar gebruikt waarschijnlijk minimaal OpenID Connect, bearer +ID tokens(JWT) en de authorization code grant.


## Aandachtspunten andere deelnemers

Bij de plannen van VNG realisatie wordt alleen identiteit organisatie doorgegeven.
Volgens logius zijn er voorbeelden (advocatuur) waar dit niet voldoende is en de medewerker ook bekend moet zijn bij de externe dienstaanbieder.
Best practice is wel om dit te vermeiden waar mogelijk.

Consent pagina een van de essenties van OAuth, die moet je er niet tussenuit halen. (dit sluit client credentials grant uit).
Implicit flow is handig omdat hij geen serverside code vereist, maar kent ook nadelen vooral op gebied van beveiliging.
Native apps ondersteunen mogelijkheid om voor webclients om zonder serverside code toch de implicit flow te omzeilen.
De KvK kent als vorschrift dat iedere applicaties die iets met APIs doet een backend moet hebben.

Hoe kan ik aanbieder afnemer intermediair(knooppunt) combineren in een OAuth profiel? Er is de behoefte om in APIs die via een knooppunt afgenomen worden afnemers achter het Knooppunt te kennen, maar ook om de identiteit van het Knooppunt toegang te geven tot APIs.
Hiervoor moeten machtigingen geregeld worden om intermediair te machtigen. Intermediars worden door eHerkenning ondersteund bijvoorbeeld wel ondersteund.
Mogelijk is dit via scopes in OAuth op te lossen.

Token formaat is een interessant onderwerp. OAuth zegt niets over token, Openid connect kent JWT tokens waar scopes( en identiteit) kunnen worden meegegeven.
 Inzien eigen gegevens, hoe om te gaan met machtigingen en vertegenwoordigingen hierbij.

Hoofd onderwerpen voor de standaard: 
* Hoe ziet de client eruit
  * Hoe kom je aan je tokens, met mobiel(met een backend), webapplicatie etc...
  * Wat staat er in het token
* Hoe ziet de server eruit
  * Wil je Knooppunt, API aggregators onderkennen
  * Hoe om te gaan met federated identity management

## Usecases

1. KvK: ondernemer die inlogt, zijn eigen gegevens inziet die bij meerdere uitvoeringsinstanties vandaan komen (MOVO). Ondernemer kan 1 manszaak(mag zich laten vertegenwoordigen, werkt op basis van BSN) zijn t/m internationale B.V. Vertegenwoordiging in Eidas lijkt niet relevant.
2. Kadaster: nu alleen ontsluiten openbare dat maar straks ook privacy gevoelige APIs. Privacy gevoelige (notaris mag alleen in eigen regio inzien, burger alleen eigen gegevens)
3. Kadaster (en KvK) kennen semi open informatie: je mag erbij als je maar betaald (BAG). KvK Uitreksel mag iedereen tegen betaling, privacy gevoelige gegevens alleen voor Notaris en Eigenaar bedrijf
4. Kadaster kent een usecase voor het modificeren van gegevens via een API: er zijn eigenaren van gegevens die hun eigen gegevens mogen opvoeren en bewerken, maar niet de gegevens van anderen die in dezelfde gegevensverzameling staan.
5. Kennisnet kent in het onderwijs: Proxy voor autorisatie (hub en spoke) kan je ook als Knooppunt zien. gegevensKnooppunt: het ophalen van gegevens via een knooppunt, gegevens van meerdere bronnen op 1 plek verzameld met meerdere soorten afnemers. Welke gebruikers met autorisatie niveuas onderken je?
6. Overgang OAuth SAML hoe deze twee standaarden combineren
8. Kadaster: Browser apllicaties die geen serverside code hebben is een interessante usecase (API keys zijn daar niet geschikt) misschien biedt OAuth profiel een alternatief. Achter grond is een behoefte aan het herkennen van individuele gebruikers t.b.v. monitoring e.d. Dynamic client registration mogelijk een oplossing voor deze case?
9. Logius: Vanuit Eid aan het kijken naar modernisering. OAuth/openid connect kandidaad. Met name voor BSN domein. Identiteit van de gebruiker inclusief machtiging (burger/ medewerker namens organisatie). Client gaat een rol spelen. 

## Vervolgafspraken

* **Volgende bijeenkomst:** 5 februari 9:30-12:00 bij Geonovum
* Geonovum stuurt verslag
* Geonovum stelt op Github een skelet standaard op basis van respec beschikbaar





