# verslag werkgroep beveiliging

**datum:** 12 maart 2026

**aanwezig:** Frank Terpstra, Martin Borgman, Tristan Smits, Heiko Hudig, André van den Nouweland, Erwin Reinhoud, Ronald Coenen, Peter Haasnoot, Alexander Green, Hans Oosterom, Seth van der Ruyt, Hans Hendrikman

## Samenvatting

De werkgroepvergadering had drie hoofdonderwerpen: de voortgang van de module Access Control, onderzoek naar gevoelige informatie in URI's en Public clients in OAuth.

## Module Access Control

Er zijn meerdere openstaande issues doorgenomen. Ten eerste is er een behoefte aan aanvullende use cases rondom rechterdelegatie in sectie 2.3.2, maar de suggesties zijn erg Nederlands terwijl de tekst in het Engels is — dit vraagt om afstemming. Ten tweede is besproken dat bij de runtime access control een verduidelijkend diagram toegevoegd zou worden, gebaseerd op een bestaand plaatje waarvan de bronbestanden nog opgevraagd moeten worden. Ten derde is uitgebreid gediscussieerd over het werkingsgebied van client credentials versus FSC: de conclusie is dat een bestaande beslisboom expliciet als sectie in de module opgenomen wordt, zodat duidelijk is wanneer welk profiel van toepassing is. Een vierde openstaand punt over netwerkarchitectuur wacht op inwerking van een nieuwe collega, waarna het opgepakt wordt. Tot slot is geconstateerd dat recente tekstwijzigingen ter verduidelijking al zijn doorgevoerd in de werkversie.
Het beeld is dat alle openstaande issues binnen twee à drie weken opgelost kunnen zijn, waarna de module klaar is voor publieke consultatie.

## Gevoelige informatie in URI's

Uit onderzoek bleek dat hierover vrijwel niets gedocumenteerd staat. De algemene lijn in bestaande teksten is dat logdata als geclassificeerd wordt beschouwd, waardoor er geen specifieke uitzonderingen worden gemaakt voor wat er in logs terechtkomt. Het aandachtspunt zit met name bij logging in systemen buiten de eigen organisatie. De al doorgevoerde nieuwe tekst in de API Design Rules sluit hier goed op aan: het is aan de organisatie zelf om te bepalen wat als gevoelige informatie geldt, en de regel is alleen van toepassing wanneer logging plaatsvindt in systemen buiten eigen beheer.

## Discussie over public clients

Naar aanleiding van een eerdere bijeenkomst is gesproken over het feit dat een internationale standaard (iGov-profiel) public clients uit hun profiel verwijdert. De werkgroep ziet wel potentiële use cases (zoals burgers die inloggen op een portaal), maar niemand had een concrete eigen case. De vraag (meer voor TO OAuth) is of we iGov nog willen veranderen door te verkennen of er concrete praktijkvoorbeelden verzameld kunnen worden om eventueel feedback te geven aan de internationale werkgroep. Dat we accepteren dat we (nog) verder afwijken van iGov door extra toelichting te geven hoe we in Nederland wel omgaan met public Clients.

## Aankondigingen

Komende woensdag is er een kennisplatformbijeenkomst in Utrecht. Op 9 juni (dinsdag) wordt samengewerkt met een internationale API-conferentie in Amsterdam, met een plenaire ochtend en breakoutsessies in de middag, met mogelijk buitenlandse sprekers. Op 10 juni volgt mogelijk een sessie over open source software en de public code-standaard, inclusief een ambitie om dit tot IETF-standaard te verheffen.

## Actiepunten

* Frank Terpstra — Contact opnemen met Stas over uitwerken use case rechtendelegatie (sectie 2.3.2)
* Frank Terpstra — Mailtje sturen voor bronbestand van het bestaande diagram, om een aangepast runtime access control diagram te maken
* Peter Haasnoot — Pull request of edit aanmaken met de beslisboom voor werkingsgebied als sectie in de Access Control module
* André van den Nouweland — Openstaand punt over netwerkarchitectuur oppakken samen met nieuwe collega, bij voorkeur binnen 2-3 weken
