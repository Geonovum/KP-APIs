# Introduction

Batching provides a standardized way for clients to retrieve multiple resources in a single call, reducing network overhead and simplifying access patterns in distributed systems.

The design rules in this document address common challenges such as the _N+1 problem_, orchestration across distributed sources, and predictable request–response mapping. They are intended to complement, not replace, existing singular and collection endpoints, ensuring consistency, scalability, and ease of use across APIs.

## Scope

This module defines rules for implementing batch operations in RESTful APIs. Batching is introduced as a complementary access pattern to singular and collection endpoints, designed to improve efficiency, scalability, and client usability.

The design rules specify when and how to expose batch endpoints, how to structure requests and responses, and how to handle errors consistently. By standardizing these aspects, batching ensures predictable client–server interactions, reduces the risk of divergent implementations, and promotes interoperability across APIs in distributed architectures.

The scope of batching is limited to read operations. It does not include write operations, transactional guarantees across multiple requests, or global batch endpoints spanning multiple collections. Each batch item is processed independently, and partial successes or failures are explicitly allowed and expected.

## Use cases

Batch endpoints are useful in situations where multiple related resources need to be retrieved in a single operation. Typical use cases include:

- **Orchestration across distributed data sources**

  Resources are often spread across multiple data sources, residing at different physical locations. A batch endpoint enables an application (or orchestration component) to perform distributed lookups efficiently, by reducing the complexity and client–server chatter.

  For example: a client retrieves a list of persons from one source, which only contains address identifiers. Instead of performing a separate request per person to fetch the corresponding address, the client can submit a single batch request to the batch endpoint to retrieve all addresses at once.

- **Fetching multiple known resources**

  A client needs details for a set of known resource identifiers. Instead of issuing one request per identifier, the client can submit them in a single batch request, simplifying logic and reducing latency.

- **Parallel evaluation of collection filters**

  A reporting tool needs to query the same resource collection multiple times with different filter criteria (e.g. addresses in different postal code areas). A batch request allows all queries to be executed in parallel, returning the results in a single response.
