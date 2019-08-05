## Versionering

<p class='warning'>Deze extensie is nog in ontwikkeling en kan elk moment wijzigen.</p>

### Uitfaseren van een major API versie

Major releases van API's zijn altijd backward incompatible. Immers, als een nieuwe release van de API niet tot backward incompatibiliteit leidt, is er geen reden om een hele versie omhoog te gaan en spreken we van een minor release. Op het moment dat er een major release plaatsvindt, is het de bedoeling dat alle (potentiële) clients deze nieuwe versie implementeren.  

Omdat we geen clients willen breken kunnen we niet van de een op de andere dag overschakelen van de oude naar de nieuwe versie. Daarom is het noodzakelijk om na de livegang van de nieuwe versie óók de oude versie in de lucht te houden. Omdat we de oude versie niet tot in de eeuwigheid willen blijven onderhouden en juist iedereen willen stimuleren om de nieuwe versie te gaan gebruiken, communiceren we een periode waarin clients de gelegenheid krijgen om hun code aan te passen aan de nieuwe versie. Deze periode noemen we de deprecation periode. De lengte van deze periode kan verschillen per API, vaak is dit zes maanden, maar niet meer dan één jaar. Met het oog op beheersbaarheid is het ten zeerste aan te bevelen om maximaal twee major versies (waarvan één de deprecated variant) naast elkaar te draaien. In deze fase is communicatie met clients van de oude versie cruciaal. De volgende zaken moeten gecommuniceerd worden:

- Een link naar de (documentatie van de) nieuwe versie van de API;
- Deprecation periode met exacte datum waarop de deprecated versie offline wordt gehaald;
- Migratieplan om eenvoudig over te stappen naar de nieuwe versie;
- Welke features er toegevoegd, gewijzigd of verwijderd worden;
- Welke wijzigingen de huidige implementaties kunnen breken;
- Contactmogelijkheid om een verlenging van de deprecation periode aan te vragen.

Deze zaken dienen gecommuniceerd te worden via de volgende kanalen:

- Per e-mail van de clients (indien bekend);
- Duidelijk leesbaar in de API documentatie van de oude versie;
- Met een `Warning` response header in alle responses van de oude API.

Stap voor stap betekent dit het volgende:

1. Lanceren nieuwe versie;
2. Bepalen deprecation periode;
3. Schrijven migratieplan;
4. Communiceren in de API-documentatie van de oude versie;
5. Deprecation periode communiceren per e-mail, forum en eventuele andere kanalen;
6. Warning header toevoegen aan responses van de oude versie;
7. Logs checken om gebruik van de oude versie te monitoren gedurende deprecation periode;
8. End-point oude versie dichtzetten op geplande datum en feedback monitoren;
9. Indien er binnen twee weken geen feedback op de oude versie komt kan de oude versie (inclusief docs) verwijderd worden;

### De Warning response header

De Warning header (zie: RFC 7234) die we hier gebruiken heeft warn-code 299 ("Miscellaneous Persistent Warning") en het API endpoint (inclusief versienummer) als de warn-agent van de warning, gevolgd door de warn-text met de human-readable waarschuwing. Voorbeeld:

`Waarschuwing: 299 https://service.../api/.../v1 "Deze versie van de API is verouderd en zal uit dienst worden genomen op 2018-02-01. Raadpleeg voor meer informatie hier de documentatie: https://omgevingswet.../api/.../v1".`

Gebruikers moeten voldoende tijd hebben om de oude API uit te faseren. Een periode van 6 tot 12 maanden wordt aanbevolen.

> [API principe: Inform users of a deprecated API actively](#api-21)