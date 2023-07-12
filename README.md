# Readme KP-APIs

Meer informatie over het Kennisplatform APIs is te vinden op via <https://www.geonovum.nl/themas/kennisplatform-apis>.
Hier vind je ook de mogelijkheid je aan te melden voor de werkgroepen, het slack kanaal en de nieuwsbrief.

De API strategie bestaat uit een een inleidend document, verschillende normatieve documenten (NL GOV standaarden) en meerdere modulen die voor verschillende functionele of technische situaties kunnen worden ingezet. Een actueel overzicht van alle documenten is weergegeven in de onderstaande infographic:

![NL API Strategie Infographic](/media/API_infographic.svg)

De verschillende onderdelen van de NL API Strategie bevat de volgende documenten:

| Onderdeel              | Documentnaam & </br> Verwijzing naar de gepubliceerde versie                                                     | Status                            | Versie            |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------------- |
| Algemeen               | [Inleiding NL API Strategie](https://geonovum.github.io/KP-APIs/API-strategie-algemeen/Inleiding/)               | Vastgesteld (door Kennisplatform) | 09-03-2022        |
| Algemeen               | [Architectuur NL API Strategie](https://geonovum.github.io/KP-APIs/API-strategie-algemeen/Architectuur/)         | Vastgesteld (door Kennisplatform) | 09-03-2022        |
| Algemeen               | [Gebruikerswensen NL API Strategie](https://geonovum.github.io/KP-APIs/API-strategie-algemeen/Gebruikerswensen/) | Vastgesteld (door Kennisplatform) | 09-03-2022        |
| Normatieve standaard   | [API Design Rules (ADR)](https://publicatie.centrumvoorstandaarden.nl/api/adr/)                                  | Verplicht (pas toe leg uit)       | 09-07-2020 v1.0.0 |
| Normatieve standaard   | [Open API Specification (OAS)](https://forumstandaardisatie.nl/open-standaarden/openapi-specification)           | Verplicht (pas toe leg uit)       | 25-05-2018 v3.0.0 |
| Normatieve standaard   | [NL GOV OAuth profiel](https://publicatie.centrumvoorstandaarden.nl/api/oauth/)                                  | Verplicht (pas toe leg uit)       | 09-07-2020 v1.0.0 |
| Normatieve standaard   | [Digikoppeling REST API koppelvlak specificatie](https://publicatie.centrumvoorstandaarden.nl/dk/restapi/)       | Verplicht (pas toe leg uit)       | 14-11-2022 v1.1.1 |
| Aanvullende module     | [API Geospatial Design Rules module](https://docs.geostandaarden.nl/api/API-Strategie-mod-geo/)                  | Vastgesteld (door Kennisplatform) | 23-05-2023        |
| Aanvullende module     | [API Transport Security module](https://geonovum.github.io/KP-APIs/API-strategie-modules/transport-security/)    | Stabiel (Werkgroep Kennisplatform)| 11-07-2023        |
| Aanvullende module     | [API Access control module](https://geonovum.github.io/KP-APIs/API-strategie-modules/access-control/)            | Stabiel (Werkgroep Kennisplatform)| 11-07-2023        |
| Aanvullende module     | [API Naming conventions module](https://geonovum.github.io/KP-APIs/API-strategie-modules/naming-conventions/)    | Stabiel (Werkgroep Kennisplatform)| 12-07-2023        |
| Aanvullende module     | [APIHypermedia module](https://geonovum.github.io/KP-APIs/API-strategie-modules/hypermedia/)                     | Stabiel (Werkgroep Kennisplatform)| 12-07-2023        |

## Folders

> De hoofdstructuur van de repository is aangepast !!!

Overzicht van de folders in de repository en het doel van de folder:

| Nr  | Folder                                         | Doel                                                                                                                                                                                             |
| --- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | archief                                        | Parkeren en bewaren alle oude files en media die niet meer actief wordt gebruikt.                                                                                                                |
| 2   | media                                          | Bron voor alle style sheets en media bestanden die in de tekst worden gebruikt. Zowel de bewerkbare bronbestanden als de gerenderde .svg, .png, .jpg bestanden worden in deze folder opgeslagen. |
| 3   | overleggen                                     | Hoofdmap voor alle werkmappen van de overleggen van de stuurgroep en werkgroepen.                                                                                                                |
| 3.1 | &nbsp;&nbsp;/Stuurgroep                        | Alle bestanden, verslagen en overige stukken van de stuurgroep.                                                                                                                                  |
| 3.2 | &nbsp;&nbsp;/Werkgroep API architectuur        | Alle bestanden, verslagen en overige stukken van deze werkgroep.                                                                                                                                 |
| 3.3 | &nbsp;&nbsp;/Werkgroep API beveiliging         | Alle bestanden, verslagen en overige stukken van deze werkgroep.                                                                                                                                 |
| 3.4 | &nbsp;&nbsp;/Werkgroep API design rules        | Alle bestanden, verslagen en overige stukken van deze werkgroep.                                                                                                                                 |
| 3.5 | &nbsp;&nbsp;/Werkgroep API design visie        | Alle bestanden, verslagen en overige stukken van deze werkgroep.                                                                                                                                 |
| 3.6 | &nbsp;&nbsp;/Werkgroep API strategie en beleid | Alle bestanden, verslagen en overige stukken van deze werkgroep.                                                                                                                                 |
| 4   | API-strategie-algemeen                         | Hoofdmap van de Algemene documenten van de API Strategie.                                                                                                                                        |
| 4.1 | &nbsp;&nbsp;/Inleiding                         | Map voor **het eerste inhoudelijke en inleidende document** <br />(wat iedereen moet lezen voor een algemeen beeld van de NL API Strategie.)                                                     |
| 4.2 | &nbsp;&nbsp;/Architectuur                      | Map voor het **architectuur document** van de NL API Strategie. <br />Dit document is een verdieping van de inleiding. [ARC]                                                                     |
| 4.3 | &nbsp;&nbsp;/Gebruikerswensen                  | Map voor het document over **gebruikerswensen** en het bieden van een uitstekende **developer experience**. [DEX]                                                                                |
| 5   | API-strategie-modules                          | Hoofdmap voor alle modulen                                                                                                                                                                       |
| 5.1 | &nbsp;&nbsp;/\_extensies-legacy                | Map voor de verzameling van oude extenties. Deze map wordt verwijdert wanneer alle extenties zijn verwerkt tot modulen.                                                                          |
| 5.2 | &nbsp;&nbsp;/\_template                        | Map voor de **template** die gebruikt kan worden voor nieuwe modulen                                                                                                                             |
| 5.3 | &nbsp;&nbsp;/access-control                    | Map voor de **module access control** [ACC]                                                                                                                                                      |
| 5.4 | &nbsp;&nbsp;/geospatial                        | Map voor de **module geospatial** [GEO]                                                                                                                                                          |
| 5.5 | &nbsp;&nbsp;/transport-security                | Map voor de **module transport security** [TRS]                                                                                                                                                  |
|     |                                                |                                                                                                                                                                                                  |
| 6   | API-strategie-governance                       | Hoofdmap voor alle governance documenten en bestanden van het Kennisplatform APIs en de NL-API-Strategie                                                                                         |
|     |                                                |                                                                                                                                                                                                  |
