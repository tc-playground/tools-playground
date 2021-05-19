# Leader Election

## Overview

* If there is services that needs redundancy, but, only one instance should be doing work at one time

    * e.g. A scheduled payment system that reads from a DB of monthly contracts and calls a payment provider to charge to users when their payment is due.

* One server is `elected` as `leader`. This performs the actions.

* The other servers are `followers`.

* If the leader fails, a new leader is `elected`.

* The act of multiple machines gaining `consensus` (e.g. `leader`) is hard. e.g. what if there are `network partitions`.

* `consensus algorithm` are used to determine the `leader`.

    * `paxos`

    * `raft`

* __Implementations__

    * __Etcd__ - A `key-value` store that is `highly available` and `strongly consistent`.

        * `Etcd` implements `raft`.

        * `Etcd` can be used to implement `leader election`.

            1. Have a key in `Etcd` that defines the `leader` e.g. `ip`, `server name`, etc.

            2. The leader tries to periodically (e.g. 5s) update it's `lease` from Etcd. Or, does `work`.
            
            3. Each server tries to periodically (e.g. 5s) gain a `lease` from Etcd. Or, watches for a `delete key event`.

            > If setting the token succeeds, then, that server is the leader.

            * `leader_election`

                * `try_insert`

            * `on_leadership_gain`

                * Loop: Keep updating the lease, performing business logic, handle exceptions (revoke lease).
            
            * `wait_for_next_election`

                * Loop: Watch for the delete event for the lease being revoked (be revoking or expiration). Sleep.

            * `do_work`
        
        * Actual work is done in-between attempts to get the lease.

        * If an exception occurs, or, keyboard interrupt then the lease is self revoke.


    * __Zoo Keeper__

---

## Leader Election

### Availability

The odds of a particular server or service being up and running at any point in time, usually measured in percentages. A server that has 99% availability will be operational 99% of the time (this would be described as having two nines of availability).

### High Availability

Used to describe systems that have particularly high levels of availability, typically 5 nines or more; sometimes 
abbreviated "HA".

### Redundancy

The process of replicating parts of a system in an effort to make it more reliable.

### Strong Consistency

Strong Consistency usually refers to the consistency of ACID transactions, as opposed to Eventual Consistency.

### Eventual Consistency

A consistency model which is unlike Strong Consistency. In this model, reads might return a view of the system that is stale. An eventually consistent datastore will give guarantees that the state of the database will eventually reflect writes within a time period (could be 10 seconds, or minutes).

### Leader Election

The process by which nodes in a cluster (for instance, servers in a set of servers) elect a so-called "leader" amongst them, responsible for the primary operations of the service that these nodes support. When correctly implemented, leader election guarantees that all nodes in the cluster know which one is the leader at any given time and can elect a new leader if the leader dies for whatever reason.

### Consensus Algorithm

A type of complex algorithms used to have multiple entities agree on a single data value, like who the "leader" is amongst a group of machines. Two popular consensus algorithms are Paxos and Raft.

### Paxos & Raft

Two consensus algorithms that, when implemented correctly, allow for the synchronization of certain operations, even in a distributed setting.

### Etcd

Etcd is a strongly consistent and highly available key-value store that's often used to implement leader election in a system.

### ZooKeeper

ZooKeeper is a strongly consistent, highly available key-value store. It's often used to store important configuration or to perform leader election.

