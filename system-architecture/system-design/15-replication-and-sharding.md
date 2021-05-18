# Replication And Sharding

## Overview

> A system performance is often dependent on its database performance.

* __Synchronous Replication__

    * Have a one or more `replica` (duplicate databases) as a `standby` database.

    * `Replicas` need to always be up to date with the `active` database.

    * Whenever a `write operation` is performed on the main database the `replica` needs to also be `synchronously` updated.

        * This makes `write` operations take longer (as both need to be written to).
    
    * `Replicas` improve the `availability` of the system.

* __Asynchronous Replication__

    * For some types of data, replicas can be `asynchronously` updated.

    * `Replicas` can be located geographically to improve `latency`.

* __Sharding__

    * For systems with large amounts of data. the data can be split up over several databases.

    * __Shard__ - By `date`, `spatially`, `lexicographically`, or `hashing function`, etc.

    * __Hot Spots__ - Some shards get more data/traffic and not evenly distributed.

    * __Implementation__ - Business logic, reverse proxy, etc.

* __Sharding + Replication__

    * It is possible to have both sharding and replication.


---

### Availability

The odds of a particular server or service being up and running at any point in time, usually measured in percentages. A server that has 99% availability will be operational 99% of the time (this would be described as having two nines of availability).

### Latency

The time it takes for a certain operation to complete in a system. Most often this measure is a time duration, like milliseconds or seconds. You should know these orders of magnitude:

* Reading `1MB` from:

    * `RAM`                          - 0.25 ms
    * `SSD`                          - 1 ms
    * `Network`                      - 10 ms
    * `HHD`                          - 20 ms
    * `Inter-continental Round Trip` - 150 ms

### Throughput

The number of operations that a system can handle properly per time unit. For instance the throughput of a server can often be measured in requests per second (RPS or QPS).

### Redundancy

The process of replicating parts of a system in an effort to make it more reliable.

### Databases

Databases are programs that either use disk or memory to do 2 core things: record data and query data. In general, they are themselves servers that are long lived and interact with the rest of your application through network calls, with protocols on top of TCP or even HTTP.

Some databases only keep records in memory, and the users of such databases are aware of the fact that those records may be lost forever if the machine or process dies.

For the most part though, databases need persistence of those records, and thus cannot use memory. This means that you have to write your data to disk. Anything written to disk will remain through power loss or network partitions, so that’s what is used to keep permanent records.

Since machines die often in a large scale system, special disk partitions or volumes are used by the database processes, and those volumes can get recovered even if the machine were to go down permanently.

### Reverse Proxy
A server that sits between clients and servers and acts on behalf of the servers, typically used for logging, load balancing, or caching.

### Replication
The act of duplicating the data from one database server to others. This is sometimes used to increase the redundancy of your system and tolerate regional failures for instance. Other times you can use replication to move data closer to your clients, thus decreasing the latency of accessing specific data.

### Sharding

Sometimes called data partitioning, sharding is the act of splitting a database into two or more pieces called shards and is typically done to increase the throughput of your database. Popular sharding strategies include:

### Hot Spot

When distributing a workload across a set of servers, that workload might be spread unevenly. This can happen if your sharding key or your hashing function are suboptimal, or if your workload is naturally skewed: some servers will receive a lot more traffic than others, thus creating a "hot spot".
