# Caching

* Speeds up a system.

* Reduces the latency of a system.

* Prevent work having to be repeated.

* Store data in a different location than it's source in-order to improve the performance.

* Caches can exist at all all layers / level of a system.

* Individual Caches - e.g. In the memory of the server.

* Shared Caches - e.g. Shared by several servers - Redis/Memcached.

* Hashed Objects as keys to the object in the cache.

* How to deal with multiple source of truth when caching is in place?

    * Write Through Caches  - Update cache and underlying data source. Then return.

    * Write Back Caches - Update cache and then return. Update the underlying data source asynchronously.

* When to use caching?

    > Depends on what is cached: `user comments` (need to be up to date) vs `view count` (doe not matter so much).

    > If you have `static immutable` data.

    * There is only a single `reader` / `writer`.

    * If you care about consistency (staleness).

    * If you can reliably evict stale data.

* How to deal with stale data? Keeping data in sync.

    > Actual data store is updated, but, the cached still contain the old entry.

    * Individual Cache vs Single Centralized Cache.

    * Cache Eviction Strategies

        * Least Recently Used (LRU)
        * Least Frequently Used (LFU)
        * FIFO
        * LILO

---

## Latency

The time it takes for a certain operation to complete in a system. Most often this measure is a time duration, like milliseconds or seconds. You should know these orders of magnitude:

## Throughput

The number of operations that a system can handle properly per time unit. For instance the throughput of a server can often be measured in requests per second (RPS or QPS).

## Memory
Short for Random Access Memory (RAM). Data stored in memory will be lost when the process that has written that data dies.

## Cache

A piece of hardware or software that stores data, typically meant to retrieve that data faster than otherwise.
Caches are often used to store responses to network requests as well as results of computationally-long operations.
Note that data in a cache can become stale if the main source of truth for that data (i.e., the main database behind the cache) gets updated and the cache doesn't.

## Cache Hit

When requested data is found in a cache.

## Cache Miss

When requested data could have been found in a cache but isn't. This is typically used to refer to a negative consequence of a system failure or of a poor design choice. For example:
If a server goes down, our load balancer will have to forward requests to a new server, which will result in cache misses.

## Cache Eviction Policy

The policy by which values get evicted or removed from a cache. Popular cache eviction policies include LRU (least-recently used), FIFO (first in first out), and LFU (least-frequently used).
Content Delivery Network

## CDN

A `CDN` is a third-party service that acts like a cache for your servers. Sometimes, web applications can be slow for users in a particular region if your servers are located only in another region. 

A `CDN` has servers all around the world, meaning that the latency to a CDN's servers will almost always be far better than the latency to your servers. 

A `CDN's` servers are often referred to as `PoPs (Points of Presence)`. Two of the most popular CDNs are `Cloudflare` and `Google Cloud CDN`.
