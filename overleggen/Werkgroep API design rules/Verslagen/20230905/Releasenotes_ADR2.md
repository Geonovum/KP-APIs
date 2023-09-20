# Releasenotes API Design Rules versie 2.0.0 (ADR2)

## Inleiding
Op 09-07-2020 is besloten om versie 1.0 van de API Design Rules "Verplicht" te stellen op de lijst van open standaarden van het forum standaardisatie. zie ook https://forumstandaardisatie.nl/open-standaarden/rest-api-design-rules
In samenwerking met het Kennisplatform APIs is afgelopen jaren gewerkt om de designrules modulair op te zetten, nauw te verbinden met de tests op developer.overheid.nl en verschillende kleine verbeteringen door te voeren. Deze werkzaamheden hebben geleid tot deze nieuwe versie 2.0.0.


## Overzicht wijzigingen en issues

| **NR** | **Gerelateerde issues**                                      | **Rfc’s / wijzigingen **                                 | **Besproken op** | **Status**                             |
| ------ | ------------------------------------------------------------ | -------------------------------------------------------- | ---------------- | -------------------------------------- |
| 1      | [KP #420](https://github.com/Geonovum/KP-APIs/issues/420)    | [PR # 120 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/120) (herstructurering API-53)                       | 2013-04-20       | Gesloten.  Inhoud opgenomen in PR #131 |
| 2      | [KP #309](https://github.com/Geonovum/KP-APIs/issues/309)<br>[KP #288](https://github.com/Geonovum/KP-APIs/issues/288) | [PR # 121 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/121) (Statement/rationale/implicaties)               | 2023-04-13       | Gereed (minor change) |
| 3      | -                                                            | [PR # 122 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/122) (public code file)                              | nvt              | Gereed (patch)                        |
| 4      | [KP #529](https://github.com/Geonovum/KP-APIs/issues/529)<br>[KP #351](https://github.com/Geonovum/KP-APIs/issues/351) | [PR # 123 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/123) (release version  format bijv  1.0.2-rc)        | tbd              | Gereed (minor change) |
| 5      | -                                                            | [PR # 124 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/124) (referentie beheermodel opgenomen)              | nvt              | Gereed (patch)                         |
| 6      | -                                                            | [PR # 125 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/125) (samenhang testen op DON)                       | 2023-05-03       | Gereed (minor change)                  |
| 7      | -                                                            | [PR # 127 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/127) (links en config  file bijgewerkt)              | 2023-04-13       | Gereed (patch)                         |
| 8      | -                                                            | [PR # 128 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/128) (omnummeren)                                    | 2023-09-05 | Gereed (minor change)                  |
| 9      | [KP #132](https://github.com/Geonovum/KP-APIs/issues/132)    | [PR # 129 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/129) (inleiding bijgewerkt naar modulair)            | 2023-09-05       | Gereed (minor change)                  |
| 10     | [KP #349](https://github.com/Geonovum/KP-APIs/issues/349)    | [PR # 130 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/130) (Http Methods –  patch verduidelijkt)           | 2023-09-05       | Gereed (minor change)                  |
| 11     | [KP #420](https://github.com/Geonovum/KP-APIs/issues/420)    | [PR # 131 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/131) (herstructurering API-53 : hide-implementation) | 2023-09-05       | Gereed (minor change)                  |
| 12     |                                                              | [PR # 133 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/133) (Testen API-03 – http Methods)                  | 2023-07-06       | Gereed (Opgenomen in RFC #134)         |
| 13     | [KP #351](https://github.com/Geonovum/KP-APIs/issues/351)    | [PR # 134 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/134) (Verdieping Testen)                             | 2023-09-05       | Gereed (minor change)                  |
| 14     | [KP #468](https://github.com/Geonovum/KP-APIs/issues/468)    | [PR # 135 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/135) (rules  aangepast obv eDelivery)                | 2023-09-05       | Afgewezen (minor change)                  |
| 15     | [KP #468](https://github.com/Geonovum/KP-APIs/issues/468)    | [PR # 136 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/136) (2 rules  aangevuld obv eDelivery)              | 2023-09-05       | Afgewezen (minor change)                  |
| 16     | -                                                            | [PR # 137 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/137) (verwijzing GEO rule)                           | 2023-09-05       | Gereed (minor change)                  |
| 17     | -                                                            | [PR # 138 ](https://github.com/Logius-standaarden/API-Design-Rules/pull/138) (verwijzing Transport security module)          | 2023-09-05       | Gereed (minor change)                  |

## Tot slot

- de wijzigingen mbt edelivery zijn afgewezen zodat nader onderzoek kan worden gedaan naar de impact 
- Zie voor de actuele status van de nog te bespreken wijzigingen:
  - https://github.com/Logius-standaarden/API-Design-Rules/pulls?q=is%3Aopen+is%3Apr+label%3A%22Status%3A+In+review%22
- Zie voor een overzicht van reeds besproken wijzigingen:
  - https://github.com/Logius-standaarden/API-Design-Rules/pulls?q=is%3Apr+is%3Aclosed+label%3A%22Status%3A+In+review%22
- De laatste conceptversie van de API designrules 2.0 is te vinden op:
  - https://logius-standaarden.github.io/API-Design-Rules/ 
