Hoofdstuk 4 Inspelen op gebruikerswensen: dé sleutel tot gebruik
================================================================

4.1 Inleiding
-------------

Overheden bezitten kwalitatief hoogwaardige data en bieden deze aan via API’s.
Vanuit het open data-perspectief maken overheden het hiermee mogelijk dat
anderen -binnen én buiten de overheid- zinvolle toepassingen kunnen ontwikkelen,
die maatschappelijke meerwaarde bieden. Maar de overheid gaat nog verder: bij
initiatieven als Common Ground is het gebruik van API’s zelfs randvoorwaardelijk
om werkprocessen zodanig in te richten, dat data altijd bij de bron bevraagd en
gewijzigd kan worden. Een belangrijke succesfactor in deze ontwikkelingen is de
mate waarin overheden erin slagen om drempels voor het gebruik van hun API’s weg
te nemen. Om het gebruik zo laagdrempelig mogelijk te maken, is het essentieel
dat er aandacht is voor de wensen van gebruikers. En die wensen liggen niet
alleen op het “wat” (wat voor data krijg ik?), maar zeker ook op het “hoe” (hoe
makkelijk kan ik aan de slag met deze API?). Bij de eerste kennismaking met de
API moet de gebruiker verleidt worden om de API te gaan gebruiken en in alle
volgende fases van gebruik (implementeren, in productie nemen en in productie
houden) moet de gebruikerservaring zodanig zijn, dat de gebruiker geen enkele
reden heeft om af te haken. Sterker nog: idealiter wordt de gebruiker zó
enthousiast over de API en de bijbehorende ondersteuning, dat de gebruiker
onderdeel wordt van de gebruikerscommunity en actief gaat bijdragen aan verdere
ontwikkeling en promotie van die API. Merk op dat dit effect alleen bereikt kan
worden, wanneer de totaalbeleving klopt: ook al is het product (de data) zelf
nog zo goed, als de gebruikservaring belabberd is, dan zul je niet veel
potentiële gebruikers verleiden om met je data zinvolle toepassingen te gaan
ontwikkelen. En nog erger: gebruikers die tóch met de API aan de slag gaan,
zullen de helpdesk van de aanbieder zwaar gaan belasten, de data mogelijk
verkeerd gaan interpreteren en de ICT-infrastructuur onnodig zwaar belasten,
wanneer zij slechts omslachtig (met veel API-calls) de gewenste gegevens kunnen
krijgen.

4.2 Overkoepelende aanbeveling: biedt een goede ‘developer experience (DX)’
---------------------------------------------------------------------------

De belangrijkste aanbeveling aan aanbieders van API’s is om zich te richten op
die gebruikservaring; op een goede ‘developer experience (DX)’. Goede DX komt
voort uit stapeling van aandacht voor *functionality* (functionaliteit - wat
moet de API doen?), voor *usability* (hoe bruikbaar is de API voor de
developer?) en daar bovenop voor de *experience* (hoe voelt de developer zich
als die de API gebruikt?). Dat laatste aspect -hoe voelt de developer zich-
klinkt wellicht wat vaag, maar het is in essentie de optelsom van ervaringen in
de interactie tussen een developer en een API aanbieder. Stel: een developer,
Johan (26 jaar – ZZP-er), heeft moeite om een bepaalde API te vinden, vervolgens
blijkt het registratieproces lastig en krijgt hij de API key pas een week later,
daarna blijkt de documentatie in voor Johan deels onbegrijpelijk jargon
geschreven (én is het ook nog eens een PDF van 352 pagina’s), dan heeft Johan
meerdere calls nodig om de gewenste data te krijgen en uiteindelijk is data
helemaal niet in het door Johan gewenst formaat. Elke kleine irritatie is op
zichzelf niet onoverkomelijk, maar de optelsom maakt dat Johan concludeert: “Dit
is niet te doen, ik zoek wel wat anders!”.

4.3 Gebruik: van ‘onboarding’ tot ‘in productie’
------------------------------------------------

De zwakte van veel teksten over ‘developer experience’ is dat men zich vaak
alleen richt op de use case van een technische developer die een API wil
implementeren - denk aan Johan in de vorige paragraaf. Gebruik begint echter
niet bij de poging tot implementatie; hier gaan nog stappen aan vooraf. Johan
heeft zich al een aantal vragen gesteld, voordat hij besloot om die poging te
wagen. Die vragen -en daarmee de stappen die hij doorloopt- zijn beter te
introduceren aan de hand van het voorbeeld van een grotere softwareleverancier.
Stel: Anne (43 jaar) werkt als product manager bij een commerciële
softwareleverancier en heeft een aantal applicaties voor de gemeentelijke markt
in haar portfolio. Ze ziet een API op een ontwikkelaarsportaal en beoordeelt aan
de hand van de functionele specificaties of implementatie van de API meerwaarde
biedt voor één van haar applicaties. Eén API trekt haar aandacht en Anne vraagt
Steven (56 jaar, architect bij hetzelfde bedrijf) om te beoordelen of de API
past binnen de software stack van het bedrijf. Steven ziet mogelijkheden en
vervolgens krijgt Jeffrey (37 jaar, software engineer bij hetzelfde bedrijf) de
opdracht om binnen een dag te beoordelen of hij de API succesvol kan integreren
in de nieuwe versie van het product uit Anne’s portfolio. Na Jeffrey’s positieve
oordeel besluit Gea, de manager, om tijd en geld vrij te maken voor
implementatie. Zo komt de API uiteindelijk in de productieversie terecht.

Dit eindresultaat is bereikt, doordat in alle fases de ‘onboarding’ -het proces
dat Anne, Steven en Jeffrey doorliepen toen zij voor de eerste keer gebruik
maakten van een digitale service (het aanbieden van de API)- prettig verliep.
Uit marketingonderzoeken blijkt een prettige eerste gebruikerservaring van een
online platform (bijvoorbeeld het ontwikkelaarsportaal waarop Anne de API
ontdekte en zij vervolgens samen met Steven en Jeffrey de API beoordeelde) veel
invloed heeft op het verdere gebruik ervan. Oftewel: de kans is groot dat dit
bedrijf vervolgens ook andere API’s op dit ontwikkelaarsportaal gaat gebruiken.

4.4 Specifieke aanbevelingen voor een goede DX
----------------------------------------------

### Aanbeveling 1: werk met (meerdere) persona’s

Een API ontwerp en bouw je niet voor een machine, maar voor een gebruiker: een
mens! Om een goede DX te bieden, moet je dus eerst weten voor wie je ontwerpt en
bouwt, voordat je dat goed kunt doen. Persona’s zijn dan belangrijk, er is niet
maar één type developer! Redeneer van buiten naar binnen: wie zijn mijn
gebruikers, wat willen zij kunnen doen en wat moet ik doen om dat zo goed
mogelijk te faciliteren. Het typeren van gebruikers en analyseren welke
behoeften zij hebben, doe je op basis van persona’s.

Belangrijk hierbij is om te onderkennen dat er verschillende niveaus of typen
gebruik zijn. Onderscheid daarom -met de fases van ‘onboarding’ tot ‘in
productie’ in het achterhoofd- minimaal de volgende persona’s:

-   een product manager / business developer: focus op het kunnen beoordelen van
    functionaliteit (“Is dit relevant voor mijn product / mijn doel?”)

-   een architect: focus op het beoordelen van het informatiemodel (“Hoe
    integreert dit met de rest van onze software?”)

-   een technische developer: focus op het daadwerkelijk kunnen gebruiken (“Hoe
    krijg ik dit werkend?”).

### Aanbeveling 2: analyseer welke API’s je aan moet bieden: welke informatievragen wil je beantwoorden? 

De ene API is de andere niet. In veel modellen worden API’s in drie categorieën
onderverdeeld: de System API (die werkt op het niveau van de databron), de
Process API (die doet aan *orchestration* door één of meerdere System API’s aan
te roepen) en de Convenience of Experience API (die één specifieke
gebruikersvraag beantwoord). Vraag je altijd af welke informatievragen de
gebruiker heeft – in veel gevallen hangen deze vragen niet 1:1 samen met het
datamodel.

Stel dat je de Basisregistratie Adressen en Gebouwen wil ontsluiten. De
informatievraag “Geef me het volledige adres bij deze postcode” is alleen te
beantwoorden door intern bij een Verblijfsobject de Openbare Ruimte naam,
Nummeraanduiding en Woonplaats op te vragen en te combineren tot één
adressering. Bij een System API moet je meerdere calls doen om dit adres op te
bouwen, terwijl een Convenience API deze gangbare (maar complexe) vraag in één
call kan beantwoorden. Het aanbieden van Convenience API’s naast System API’s is
dus erg gebruiksvriendelijk: de 80% gebruikers die hiermee geholpen zijn,
confronteer je met slechts 20% van de complexiteit. Vergelijk dit met de
Toptaken-aanpak bij de websites van veel gemeenten: de meest aangevraagde
producten (bijv. nieuw paspoort en rijbewijs) staan pontificaal op de homepage,
terwijl de minder vaak gevraagde diensten op vervolgpagina’s staan. Zo reduceer
je de complexiteit voor een zo groot mogelijk deel van je gebruikers.

### Aanbeveling 3: documenteer gericht op de gebruiker, biedt snel inzicht en gebruik OAS 3

Elk type gebruiker dat in aanbeveling 1 wordt genoemd (business developer,
architect, technische developer) verdient zijn eigen ‘Getting started’
documentatie, gericht op het snel kunnen beoordelen en/of toepassen.
Documentatie is nooit een lijvig document (wanneer veel documentatie nodig
lijkt, is de functionaliteit vermoedelijk te complex) én nooit een PDF: laat je
gebruikers makkelijk klikken naar relevante onderdelen binnen én buiten de
documentatie! Referentie-implementaties kunnen ook zinvol zijn om snel een
indruk te bieden van functionaliteit. Voor de technische developer is de
documentatie conform de Open API Specifiction 3.0 (OAS 3); deze staat in
Nederland op de ‘Pas toe of leg uit-lijst’ van het Forum Standaardisatie.

Aanbeveling 4: minimaliseer Time to First Call met een goede Sandbox
--------------------------------------------------------------------

Zorg dat een developer snel een werkend voorbeeld heeft. Dit vraagt om een goed
gedocumenteerde, realistische Sandbox. Deze Sandbox dient alle aspecten van de
API te ondersteunen en identiek gedrag aan de productieversie van de API te
vertonen, bijvoorbeeld rond authenticatie. Daar waar mogelijk is het zeer
wenselijk dat meerdere API’s dezelfde dataset bieden als Sandbox, zodat ook het
samenspel tussen verschillende API’s getest kan worden.

### Aanbeveling 5: borg ontwikkeling en beheer

Ook al is een API nog zo goed ontwikkeld, wanneer doorontwikkeling en beheer
niet goed geregeld is, zal die API niet succesvol zijn. Essentieel hierin is dat
je gebruikers duidelijkheid biedt:

####  Aanbeveling 5.1 Stel een SLA op

>   Maak duidelijk welke verwachtingen een gebruiker mag hebben qua uptime,
>   service window, beprijzing etc.

####  Aanbeveling 5.2 Biedt een roadmap aan

>   Maak duidelijk of en zo ja, wanneer er eventuele wijzigingen te verwachten
>   zijn en hoe lang de API minimaal beschikbaar blijft.

####  Aanbeveling 5.3 Doe aan versiebeheer

>   Borg dat de toepassing van de gebruiker blijft werken, door te zorgen voor
>   backward compatability. Grotere updates kunnen als nieuwe versie worden
>   uitgebracht, waarbij oudere versies nog een gegarandeerde periode
>   beschikbaar blijven. Het versienummer kan in elke call staan, bijv. GET
>   /api/v1.0/...

#### Aanbeveling 5.4 Sluit de feedback-loop: betrek de community

>   Om echt van buiten naar binnen te kunnen werken, is het betrekken van de
>   community van gebruikers onmisbaar. De community kan vertellen hoe de
>   developer experience tot nu toe is, welke verbeteringen wenselijk zijn,
>   welke gebruikersvragen er sterk leven, maar nog onvoldoende ondersteund
>   worden, etc., etc. Daarnaast wil je de community ook actief informeren over
>   voorgenomen wijzigingen e.d. Het gebruik van API keys is een manier om je
>   gebruikers te kennen.

Aanbeveling 6: maak duidelijk wat je data betekent
--------------------------------------------------

Wanneer je data openstelt voor derden, inclusief niet-specialisten, is het
essentieel om eenduidig vast te leggen wat de data betekent, waarbij deze
betekenis ook voor niet-specialisten begrijpelijk is. Het vastleggen van
semantiek kan o.a. door definities en informatiemodellen goed te ontsluiten,
maar ook door praktischere zaken als heldere naamgeving van variabelen etc.

### Aanbeveling 7: wees vindbaar voor developers

Een goede, gebruiksgerichte API, die bovendien actief wordt beheerd en
doorontwikkeld, kan nog steeds weinig gebruikt worden wanneer deze API niet goed
vindbaar is. Zorg daarom dat je een goed developersportaal hebt, idealiter
nationaal bij developer.overheid.nl. Presenteer breed toepasbare API’s en
datasets daar prominenter dan specifiekere API’s en obscure datasets, wederom te
vergelijken met de toptaken-aanpak bij gemeentelijke websites. Een goed
developersportaal informeert niet alleen over beschikbare API’s, maar inspireert
en verleidt zelfs developers op bepaalde API’s te gebruiken. Het vullen van het
developersportaal mag daarom nooit sluitpost van een project zijn.

### Aanbeveling 8: niet alles is een API! 

Bedenkt altijd goed of een API de juiste oplossing is. In sommige gevallen is
een bulk download nog steeds praktischer voor een gebruiker. Wanneer een API
zinvol is? Hoe hoger de mutatiefrequentie van de data, hoe zinvoller een API
wordt. En bij hoge mutatiefrequenties, is een API die was-wordt leveringen kan
bieden zinvol.
