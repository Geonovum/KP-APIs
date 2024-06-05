# Inleiding

Beveiliging is op meerdere niveau's te organiseren en er is duidelijk onderscheid nodig tussen de beveiliging van de onboarding en de beveiliging van de runtime gegevensuitwisseling. Waar vroeger alleen Digikoppeling, Diginetwerk en PKI Overheid certificaten de norm waren voor gegevensuitwisseling is het speelveld nu veranderd met meer standaarden, meer afspraken stelsels en meer (internationale) voorzieningen. We willen met deze werkgroep de huidige kennis en mogelijkheden in kaart brengen en aanbevelingen doen in de vorm van design rules of best practices.



## Aanleiding

Aanleiding voor deze werkgroep is divers maar een aantal concrete punten zijn als volgt samen te vatten:

- vragen van gebruikers van Digikoppeling over de combinatie van oAuth met het Digikoppeling Rest profiel

- het onderzoek naar API's bij Digipoort

- de inzichten opgedaan van de eDelivery API's

- de analyse voor orkestratie beveiliging [link](https://github.com/Geonovum/KP-APIs/blob/f863bb484a54a828fd300c67c5096dfb14dfe43b/overleggen/Werkgroep%20API%20design%20rules/orkestratie/Orkestratie_beveiliging.md)

- de feedback van de FSC adoptie binnen Digikoppeling

- het ontbreken van een duidelijke rol van diginetwerk in de API context
- de stemming tijdens de Kennisplatform bijeenkomst van 13-05-2024:

![Stemming Kennisplatform API dd 13-05-2024](IMG_3689.png)



## Onderzoeksvragen:



Vraag 1: is MTLS af te schaffen ?



Het gaat om 4 aspecten

1. Identificatie
2. Authenticatie
3. Authorisatie
4. versleuteling


Te beginnen met punt 4, de versleuteling is mTLS niet veiliger versleuteld dan gewoon TLS !
Dan punt 1. Identificatie, dit kan dmv de uitwisseling van een PKIO cert met een OIN erin maar ook dmv digid, eherkenning, eidas of een vorm van SSO. Er vanuit gaande dat je een API als overheid kan aan bieden aan overheden, bedrijven, burgers en medewerkers moet je verschillende identificatie middelen en sleutels ondersteunen bij de initiële onboading tot je dataverkeer. Tijdens het dataverkeer kan je een pkio cert met een OIN gebruiken als identificatie maar ook een token wat is verkregen tijdens de onboarding (oauth)
Punt 2. Authenticatie wordt door de TSP gewaarborgd door het signen van jou public key in je public certificaat. Bij oauth wordt dit gedaan door de authorization server
Punt 3 autorisatie, je kan een partij autoriseren door zn public key toe te voegen aan de trust store zoals met mTLS gebeurd en dan accepteer je alleen tls connecties van bekende partijen. Echter niet iedere applicatie is in staat veilig een private key op te slaan die is vereist om een mTLS connectie op te bouwen. Voor die situaties biedt oauth oplossingen. In andere gevallen is er al verkeer over een private network en dan is mtls dubbele versleuteling.

Genoeg aanknopingspunten dus om te overwegen niet altijd simpelweg mtls te vereisen bij de connectie met de resource server.

Dit onderscheid tussen de 4 aspecten tijdens onboarding en de 4 aspecten tijdens het interactie met de resource server wil ik verder uitwerken in de werkgroep “ multi level api access” 



Heb je interesse om deel te nemen stuur dan een mail naar 