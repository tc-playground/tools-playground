# Cloud Native Fundamentals

## Overview

* Natively use `IaaS primitives` provided by `cloud providers`.

  *  _Pets vs Cattle_ - Everything is a number, if something goes wrong replace it.

* Implements `container based` environments, deployed as `microservices`, on `elastic infrastructure` via `continuous workflows`.

* __Distributed__  - Small, `distributed`, `independent`, `loosely-coupled` `services`.

  * Services running across mulitple machines.

  * Dealing with networking nd communication issues between these services.

  * Dealing with shared state between these services.

---

## Patterns for Cloud Native

* `Stateful` vs `Stateless`

* `Service Orchestration` vs `Service Choreography`

  * `Synchronized communication` vs `Event based communication`

* `Dealing with Failures`

* `CAP Theorem` - Consistency, Availability, Partition Tolerance.

  > Partitions will always occur. Optimise for Consistency and Availability.

* `Microservices` - Architectural style.

---

## Fallacies of Distributed Systems

1. Network is reliable.
2. Latency is zero.
3. Infinite bandwidth.
4. Network is secure.
5. Topology doe not change
6. There is one administrator.
7. Transport cost is zero.
8. Network is homogeneous.

---

## Cloud Native Building Blocks

* Use `functions` and `containers` with `eventing` / `messaging` technologies to implement `cloud-native microservices`.

---

## Security

* __Defense in Depth__

  * Source code - Vulnerability checks.
  
  * Container image - Bare minimum libraries. Network, volume, restrictions.

  * Container Registry - Vulnerability scanning.

---

## CI/CD

* __Source Code Control__ - GitFlow

* __Build and Test__ - Linters, Tests, Build.

* __Deployment__ - Immutable, Canary Tests.

* __Release__ - A/B release.

* __Monitor__ - Canary, Error Rate.

---

## Resources

* [OCI Developer (Associate 2001)](https://learn.oracle.com/ols/learning-path/become-oci-developer-associate/35644/91486)

* [Developing Cloud Native Applications on OCI](https://learn.oracle.com/ols/course/developing-cloud-native-applications-on-oci/35644/75242/102018)

