## Caching

<p class='warning'>Deze extensie is nog in ontwikkeling en kan elk moment wijzigen.</p>

Voor sommige resources kan het nuttig zijn om caching toe te passen. HTTP biedt voor caching standaard mechanismes. Door deze mechanismes te gebruiken wordt gebruik gemaakt van standaard caching oplossingen van de client en in de infrastructuur.  

Het enige wat nodig is om hiervan gebruik te maken is:

- Een aantal extra uitgaande HTTP headers toevoegen;
- Functionaliteit om een aantal specifieke inkomende HTTP headers af te handelen.

Er zijn 2 manieren om caching te realiseren: ETag en Last-Modified.

### ETag

Een ETag (Entity Tag) is een hashcode of checksum van een resource. Als de resource wijzigt ontstaat een andere ETag. Een ETag is dus uniek voor een bepaalde versie van een resource. De ETag wordt als de HTTP header `ETag` teruggegeven met de resource. De afnemer cached de resource en de ETag. Als de afnemer dezelfde resource opvraagt dan stuurt deze de ETag mee in de HTTP header `If-None-Match`. De server controleert of de ETag in de HTTP header `If-None-Match` gelijk is aan de eigen ETag. Indien dit het geval geeft de server een HTTP statuscode `304 Not Modified` terug. De afnemer laadt dan de resource uit de eigen cache. Dit gaat alleen op over clientside caching, dus is alleen van toepassing als de client ook daadwerkelijk de request headers meestuurt, anders altijd een `200 OK`.

### Last-Modified

Dit werkt in principe net als ETag, behalve dat het gebruik maakt van tijdstempels. De HTTP header `Last-Modified` bevat een tijdstempel in het RFC 1123 formaat die wordt gevalideerd tegen de HTTP header `If-Modified-Since`. De server controleert of de resource gewijzigd is sinds het aangegeven tijdstip. Indien dit niet het geval is dan geeft de server een HTTP statuscode `304 Not Modified` terug. De afnemer laadt dan de resource uit de eigen cache. Dit gaat alleen op over client-side caching, dus is alleen van toepassing als de client ook daadwerkelijk de request headers meestuurt, anders altijd een `200 OK`.

> [API principe: Waar relevant wordt caching toegepast](#api-43)