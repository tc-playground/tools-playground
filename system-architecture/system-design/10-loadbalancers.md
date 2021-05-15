# Loadbalancers

## Overview

* `Loadbalancers` allow a system to scale horizontally by distributing work over several servers. 

* `Loadbalancers` sit between a set of `clients` and `servers`.

* `Loadbalancers` distribute traffic to the servers in a balanced way or preconfigured way.

* `Loadbalancers` are a type of reverse proxy.

* `Loadbalancers` can help increase the throughput of the system

* `Loadbalancers` can help reduce latency (as server are not clogged).

* `Loadbalancers` help make better use of existing resources.

* `Loadbalancers` cab be deployed in hierarchies at various levels of a system.

* `DNS` can be used to load balance by configuring muliple ip addresses for a single domain name.

* `Loadbalancers` can be implemented in

    * `software` - More configurable. e.g. `nginx`.

    * `hardware` - Faster.

* `Loadbalancers` and `Servers` need to be configured so they know about each other.

* `Loadbalancers` can distribute traffic via various `server selection strategies`:

    * `random`

    * `round-robin`

    * `weighted round robin` - e.g. Send more traffic to more powerful servers.

    * `performance / load` - Based on `health checks`. Latency, connections, etc.

    * `client ip based routing` - Hash the client ip to pick the server. Good when caching exist in the system. Sticky sessions.

    * `path based` - Can be used to direct requests to specific servers, networks, paths.

    > Multiple loadbalancers can be used in a system with different server selection strategies.



---

## Load Balancers

Relentlessly distributing network requests across multiple servers, these digital traffic cops act as watchful guardians for your system, ensuring that it operates at peak performance day and night.

## Reverse Proxy

A server that sits between clients and servers and acts on behalf of the servers, typically used for logging, load balancing, or caching.

## Load Balancer

A type of reverse proxy that distributes traffic across servers. Load balancers can be found in many parts of a system, from the DNS layer all the way to the database layer.

### Server-Selection Strategy

How a load balancer chooses servers when distributing traffic amongst multiple servers. Commonly used strategies include round-robin, random selection, performance-based selection (choosing the server with the best performance metrics, like the fastest response time or the least amount of traffic), and IP-based routing.

## Hot Spot

When distributing a workload across a set of servers, that workload might be spread unevenly. This can happen if your sharding key or your hashing function are suboptimal, or if your workload is naturally skewed: some servers will receive a lot more traffic than others, thus creating a "hot spot".

## Nginx

Pronounced "engine X"—not "N jinx", Nginx is a very popular webserver that's often used as a reverse proxy and load balancer.
