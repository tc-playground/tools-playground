# DNAT - Destination Network Address Translation

## Introduction

* `DNAT` is a technique for transparently changing the destination IP address of an end route packet and performing the inverse function for any replies. 

* Any `router` situated between two endpoints can perform this transformation of the packet.

* `DNAT` is commonly used to setup `port forwarding` to publish a `service` located in a private network on a publicly accessible IP address. 

* `DNAT` is commonly used to setup a `DMZ` to expose am entire `server`, which becomes exposed to the `WAN`.