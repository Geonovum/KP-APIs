# OpenID Connect vragen Logius
Een aantal vragen welke bij het uitwerken van een OpenID Connect (OIDC) gebaseerde interface opkomen. Sommige vragen zijn meer OIDC specifiek, andere vragen zijn generieker voor OAuth2.
Deze vragen spelen voor de interface voor de "routeringsvoorziening" obv OIDC, zoals onder de(concept) wet digitale overheid gerealiseerd zal gaan worden. 
Hoewel we al eigen ideeen en overwegingen hebben, zijn de vragen nadrukkelijk wat meer open gesteld om mogelijk kleuring of sturing te voorkomen en is alle feedback zeer welkom.
 
## request object: by-value of by-reference 
In OIDC en ook in een (bijna gepubliceerde) RFC voor OAuth2 [1], zijn signed en encrypted request mogelijk door gebruik te maken van een "request object".
Volgens de specificaties kan dit by-value en by-reference verstuurd worden. Dit is wel wat vergelijkbaar met SAML artifact binding.
Het versturen by-reference kan door het request vooraf te uploaden naar de authorisatie server of bij request afhandeling door de authorisatie server te laten downloaden vanaf de client of een 3rd-party location.
Hierbij hebben we een aantal vragen:
- Ondersteund de door jullie gebruikte/beoogde client software deze constructie? (welke software is dat? zowel signing en encryptie? by-value en/of by-ref?)
- Voor het versturen by-reference, bestaan er voorkeuren voor uploaden naar AS versus downloaden vanaf client?

## Client Authenticatie 
OAuth2 en OIDC ondersteunen client authenticatie. Dat is niet alleen van toepassing in de "client credential grant flow", maar ook voor client authenticatie in bijvoorbeeld dynamic registration, bevragen van een token endpoint, uploaden van requests objects, etc...
OAuth2 laat authenticatie open, OIDC kent 4 methoden (H9: client secret basic, cliient secret post, client secret jwt en private key jwt). Daarnaast wordt er gewerkt aan TLS mutual authentication.
Hierbij hebben we een aantal vragen:
- welke methoden ondersteund de door jullie gebruikte/beoogde client software?
- welke methoden hebben de voorkeur (obv welke overweging)?
- bij het hosten van meerdere clients/dienstverleners/partijen binnen 1 systeem, vereisen we onderscheidt tussen de verschillende partijen. Welke overwegingen zijn hierbij t.a.v. client authenticatie voor jullie relevant (bijvoorbeeld gebruik PKIo certificaat per partij)?
 
## Client-IDs
 Zowel OAuth2 als OIDC hanteren een client_id. Dit client_id kan je random toekennen, maar ook gestructureerd opstellen.
Daarbij valt te denken aan het gebruik van het OIN als basis, met een extra deel om systemen te kunnen onderscheiden. Of bijvoorbeeld een hostname als basis.
Hierbij hebben we een aantal vragen:
- is er behoefte om gestructureerde client_ids te hanteren (obv welke overwegingen)?
- heeft het gebruiken van 1 en dezelfde client_id over meerdere authorisatie servers een use case?
- andersom: zijn er bezwaren tegen het gebruik van een 1-op-1 (random) client_id tussen client en authorisatie server?

## Client-ID & mobile 
Wanneer OAuth2 gebruikt wordt in combinatie met een mobiele/native app, kan er op twee manieren worden omgegaan met de client_id.
De ene mogelijkheid is algemeen de (versie van de) software van de app als een client te zien. De andere is per installatie van een app (instantie), dus per individueel device, een client_id toe te kennen.
Hierbij hebben we een aantal vragen:
- kennen jullie al relevante en concrete toepassingen van OAuth2 icm mobiele/native app?
- is er behoefte om individuele instanties te onderscheiden?
- zijn andere parameters dan client_id hiervoor geen?
- welke overwegingen hebben jullie bij de beide opties?
 
## Dynamic registration & custom attributen
 OAuth2 en OIDC kennen "dynamic registration" protocol. Zeker OIDC heeft een vrij uitgebreide specificatie van gegevens welke hiermee voor de client/aansluiting vastgelegd kunnen worden.
Toch zijn er nog gegevens die we wel vooraf vast willen leggen, maar welke niet (fatsoenlijk) op een van de standaard velden past. We overwegen deze als "custom" attributen te specificeren. Het alternatief is bijvoorbeeld een proces, waarschijnlijk met een self-service portaal.
Hierbij hebben we een aantal vragen:
- ondersteund de door jullie gebruikte/beoogde client software dynamic registration?
- is het gewenst/mogelijk hierin extra (custom) attributen op te nemen?
- andere overwegingen?
 
