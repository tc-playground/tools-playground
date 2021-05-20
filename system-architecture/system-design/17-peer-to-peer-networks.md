# Peer-to-Peer Networks

## Overview

* Transfer large 5GB files to thousand of machines, multiple times a day.

* What is the network throughput? 40 Gbps (40 / 8 = 5GBs). 

    * Will take 1000s (17 mins) to transfer a 5GB file to 1000 machines.

    * May be too slow. Use multiple machine (e.g. 10) to serves the files?

        * Files need to be replicated.
    
    > Solve with Peer-to-Peer network.

* __Peer To Peer Networks__

    * Split the large files into `chunks`.

    * Send chunks to some `peers`.

    * Let `peers` get the chunks they need from each other.

    * Peers can do this and talk to each other in `parallel`.

* __Peer Discovery and Selection__

    * Peers need to know which other peers to talk to next.

        * `Tracker` - Central Machine/Database.

        * `Gossip Protocol` - Here are the chunks I need. Here are the chunks I know about.

            * __Distributed Hash Table (DHT)__e.g. Each peer might store a mapping of `chunks` to known `ips`.

* e.g Uber `Kraken`.



---

### Client—Server Model

The paradigm by which modern systems are designed, which consists of clients requesting data or service from servers and servers providing data or service to clients.

## Throughput

The number of operations that a system can handle properly per time unit. For instance the throughput of a server can often be measured in requests per second (RPS or QPS).

## Peer-To-Peer Network

A collection of machines referred to as peers that divide a workload between themselves to presumably complete the workload faster than would otherwise be possible. Peer-to-peer networks are often used in file-distribution systems.

## Gossip Protocol

When a set of machines talk to each other in a uncoordinated manner in a cluster to spread information through a system without requiring a central source of data.
