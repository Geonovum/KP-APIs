# Werkgroep API Strategie en Beleid
Verslag van de virtuele bijeenkomst van **3 juni 2021**

## Aanwezig
Publieke sector, op alfabetische volgorde van organisatie:
Ian Duijff (CJIB), Redouan Ahaloui en Han Zuidweg (Forum Standaardisatie), Frank Terpstra (Geonovum), 
Jeroen Temme en Michiel Trimpe (gemeente Amsterdam), Edward Nuiten (gemeente Rotterdam), 
Peter Haasnoot (Logius), Gerard Kreuk (SVB)

Private sector, op alfabetische volgorde naar organisatie:
Marcel Krassenburg (MKIdee)

## Afgemeld
Gino Laan, Paul Zeef (minBZK)

## Wijzigingen
Gerard Kreuk van de Sociale Verzekeringsbank (SVB) vervangt Geer Haas in deze groep. Redouan van Forum Standaardisatie vervangt Han in deze groep en zal de werkgroep in het vervolg voorzitten.

## Verslag bijeenkomst van 13 april 2021
De aanwezigen hadden geen aanvullingen of opmerkingen op het [verslag van de virtuele bijeenkomst op 13 april 2021](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20strategie%20en%20beleid/Verslagen/Verslag%2020210413%20WG%20Strategie%20en%20Beleid.md).

## Waar staan we
Redouan zit de werkgroep voor het eerst voor en doet een voorstelrondje. Daarna vat hij kort samen wat er in de vorige bijeenkomst besproken is, en wat er daarna aan het [werkdocument](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20strategie%20en%20beleid/Werkversie/api-strategie-overheid.md) is aangepast. Het werkdocument start nu vanuit de platformeconomie met het doel om bestuurders aan te spreken.

## Basisafspraken
De [basisafspraken](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20strategie%20en%20beleid/Werkversie/api-strategie-overheid.md#basisafspraken) vormen de kern van het hoofdstuk over Strategie en Beleid van de API Strategie. Bij de basisafspraken staan zaken die al verplicht zijn volgens het '[pas toe of leg uit](https://forumstandaardisatie.nl/open-standaarden/verplicht)' beleid van de digitale overheid, met name het toepassen van de REST API Desing Rules en het NL GOV Assurance Profile als je REST APIs ontsluit.

In de bespreking van de basisafspraken werden de volgende opmerkingen gemaakt:
 - **Ian**: Het CJIB heeft vooral interne APIs. Ook daarvoor is het goed om de REST API Design Rules te gebruiken. Maar interne APIs zal je niet zo snel op developer.overheid.nl publiceren.  Moeten we de basisafspraken dus niet beperken tot openbare APIs?
 - **Frank**: Op developer.overheid.nl staan APIs die door andere organisaties gebruikt kunnen worden. Dit hoeven geen 'openbare' APIs te zijn, maar zijn ook geen APIs die intern door één organisatie gebruikt worden.
 - **Edward**: De Wet Open Overheid gaat vereisen dat je alles moet publiceren, ook APIs die toegang geven tot gegevens die onder de wet vallen.
 - **Edward**: Geen van de houders van de basisregistraties gaat nu nog actief met de NLX aan de slag. Moet et gebruik van NLX wel een basisafspraak zijn?
 - **Han**: Het woord 'afspraken' zou bestuurders en managers kunnen afschrikken waarvan we willen dat zij de API strategie ondertekenen. Misschien moeten we nog zoeken naar een woord dat minder nervositeit opwekt. Hoe zien de organisaties in deze werkgroep dat? Welke bewoording is het meest effectief?
 
## Visie en Github issues
De werkgroep bespreekt de tekst van de visie en maakt de volgende commentaren:
 - **Han**: De tekst over de visie benoemt de afbreukrisico's van het huidige gegevenslandschap. Sommige organisaties hebben aangegeven dat hun bestuurders dit misschien te negatief vinden. Hoe ziet de werkgroep dat?
 - **Jeroen**: Een visie moet de oplossing beschrijven, juist niet het probleem. Je moet een visie in één zin kunnen uitdragen. Onze visie zou kunnen zijn: 

> "Het bieden van gedemocratiseerde toegang tot evenwichtige en consistente informatie, onafhankelijk van de complexiteit van achterliggende systemen,  voor burgers, bedrijven en ketenpartners van de overheid."

 - **Marcel**: De visie staat eigenlijk in de laatste zin, maar kan wel scherper.
 - **Gerard**: Het is voor een burger belangrijk dat de overheid altijd van dezelde data gebruik maakt.
 - **Edward**: "*De overheid is een platform*" moet het beeld zijn. APIs zijn een manier om de data te 'bevrijden'.
 - **Marcel**: "*Platform*" klinkt nogal commercieel en heeft ook negatieve associaties, bijvoorbeeld van machtsconcentratie.
   Gebruik de term "*ecosysteem*"? Er zijn drie modellen van ecosystemen: Amerikaans (markt centraal), Chinees (overheid centraal) en Europees (zoekend). De zoektocht in Europa heeft vooral ook aspecten van ethiek en privacy.

Vervolgens bespreekt de werkgroep de commentaren en suggesties die op Github zijn ingeschoten. Edward heeft nog wel twijfels over het [voorbeeld van de BRP API van Haal Centraal](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20strategie%20en%20beleid/Werkversie/api-strategie-overheid.md#de-api-op-de-basisregistratie-personen-brp-van-haal-centraal). De BRP is een complexe basisregistratie met complexe processen. Het voorbeeld stelt het misschien wat te optimistisch voor.

Edward: Stem het [voorbeeld van de regie op gegevens](https://github.com/Geonovum/KP-APIs/blob/master/Werkgroep%20API%20strategie%20en%20beleid/Werkversie/api-strategie-overheid.md#een-api-voor-regie-op-gegevens) af met het initiatief op de GEMMA voor de [logging van verwerkingen](https://www.gemmaonline.nl/index.php/Ontwikkelagenda_API-standaarden#Logging_van_verwerkingen).

## Planning

De technische onderdelen van de API Strategie gaan op 15 juni in penbare consultatie. Voor ons niet-technische en niet-normatieve hoofdstuk halen we dit niet, maar we streven er wel naar om het hoofdstuk af te hebben voor de publicatie van de nieuwe versie van de API Strategie.

Op 15 september vindt het [iBestuur congres](https://ibestuurcongres.nl/) plaats, een belangrijk congres voor de overheid waar een publiek van bestuurders op af komt. Forum Standaardisatie verzorgt een sessie over APIs waarin de Nederlandse API strategie in het zonnetje wordt gezet. Het idee is om een mediamoment in te bouwen waarop organisaties van deze werkgroep de API strategie kunnen ondertekenen. Hiervoor is het belangrijk dat we tegen die tijd een tekst hebben waar een belangrijk deel van de organisaties zich in kunnen vinden.

Redouan vraagt de aanwezigen om eens bij hun directie te polsen of ze bereid zijn om de API strategie te tekenen en prijs stellen op een mediamoment op het iBestuur congres in september.

## Wat verder ter tafel komt

Marcel wil graag nog eens met Frank en Gino over het ecosysteem praten.
