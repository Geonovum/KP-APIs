# Architecture

Batching is an architectural pattern that complements the standard RESTful model of singular and collection endpoints. Its purpose is to improve efficiency in distributed systems by reducing network overhead and providing predictable request–response mappings in situations where multiple resources need to be fetched at once.

## Data distribution

Modern APIs often operate in a distributed data landscape. A single logical query may require access to multiple underlying systems or databases, each with its own identifiers, query capabilities, and performance characteristics. This distribution introduces challenges:

- **Network latency**: many small requests across services accumulate delay.
- **Inconsistent availability**: resources may exist in one system but be missing or stale in another.
- **Limited scalability**: issuing hundreds of small requests can overwhelm back-end systems or gateways.

Batching mitigates these issues by grouping multiple requests into a single network call, enabling the server to optimize access to underlying systems and respond in a coordinated manner.

## The N+1 problem

A common inefficiency in distributed APIs is the _N+1 problem_. For example, a client queries one collection to retrieve N entities, then performs N additional singular lookups to fetch related resources. The result is N+1 total calls, each incurring network and processing overhead.

Batch endpoints provide a standardized way to replace N+1 calls with just two calls: one to retrieve the initial collection and one batch request to fetch all related resources in parallel. This pattern reduces latency and lowers the load on both clients and servers.

- Clients **SHOULD** use batching when multiple lookups are required at once, but continue to use singular or collection endpoints for simpler interactions.

Batching is a performance optimization, not a replacement for singular or collection endpoints.

## Transactionality

Batching is not a transaction mechanism. Each request item in a batch is processed independently, and the success or failure of one item does not affect the others. There is no guarantee of atomicity, consistency, isolation, or durability (ACID) across items in a batch.

- For <a href="#singular-request">singular requests</a>, a missing or inaccessible resource is represented by `null`.
- For <a href="#collection-request">collection requests</a>, no matches are represented by an empty `items` array.
- Partial errors **MUST** be conveyed at the item level, not by failing the entire batch.

This design ensures resilience: a batch **MAY** contain both successful and unsuccessful entries, but the overall response is always delivered in a predictable format.

## Design principles

The following principles guide the architecture of batch endpoints:

- **Complementary**: batch endpoints sit alongside singular and collection endpoints, they do not replace them.
- **Deterministic**: every request item produces exactly one result item at the same array position.
- **Scoped**: batch endpoints operate at the level of a single collection; a global batching mechanism is explicitly out of scope.
- **Stateless**: each batch request is self-contained; no client state is stored between requests.
- **Non-transactional**: items are processed independently; partial failure is expected and explicitly represented.
- **Performance-oriented**: designed to reduce round-trips and mitigate the N+1 problem in distributed environments.

> This batching architecture extends the architecture document of het NL API Strategy as published on: [docs.geostandaarden.nl/api/API-Strategie-architectuur](https://docs.geostandaarden.nl/api/API-Strategie-architectuur/)