# Werkgroep: Profielen & capabilities

Het subgroepje profielen heeft gekeken naar hoe we om kunnen gaan met profielen binnen de design rules & extensies. Doel van de profielen is om in een specifiek domein of een specifieke context expliciet aan te geven welke extensies je verplicht moet implementeren of welke aanbevolen zijn om te implementeren. Onze conclusies over profielen zijn als volgt:
* Alleen verplichting (MUST) en aanbevolen (SHOULD) opnemen
* SHOULD houdt in dat als je iets wilt met een specifieke extensie dat je dit dan in moet vullen conform de extensie, het is geen vrijbrief om dan iets volledig anders te implementeren.
* Bij een extensie die meerdere opties biedt voor implementatie zou je in het profiel aan moeten geven welke optie verplicht is. Mocht je meerdere opties toe willen staan dan moet je dat expliciet vermelden. Waar nodig moet je ook aangeven in welke context je welke optie geeft.
* De must en een should in het profiel gaan boven de must/should/could etc in de extensions. Dus iets wat in de extensies een could is zou in het profiel een must of should kunnen worden.
* Profiel zegt niets over de Design Rules aangezien deze allemaal een verplichtend karakter hebben, advies is om in het profiel dan ook alleen te verwijzen naar een specifieke versie van de ADR. Wat eventueel wel kan is het aanscherpen van regels, bijvoorbeeld de overgangsperiode die op maximaal 1 jaar staat aanscherpen naar een half jaar
* Om goed in profielen om te kunnen gaan met de extensies is het van belang dat alle opties genummerd zijn, dit zodat je kunt verwijzen naar een specifiek onderdeel. Ook de extensies moeten dan atomair genoeg opgezet zijn.
* Extensies moeten geversioneerd worden zodat we kunnen verwijzen naar een specifieke versie van een extensie in de profielen
* API’s kunnen voldoen aan 1 of meerdere profielen (alhoewel we wel verwachten dat de kans klein is dat dit in de werkelijkheid ook lukt omdat de profielen mogelijk op punten met elkaar in conflict zijn)
