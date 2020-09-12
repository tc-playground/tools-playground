# Network Address Translation

## Introduction

1. `NAT (Network Address Translation)` is synonymous with `ip masquerading`.

2. `NAT` allows machines in a `private network` to reach out and communicate with machines via the `public internet`.

3. `NAT` is performed on the `private network router`.

4. `NAT` replaces the `ip address` of packets passing through the `router` via a `mapping table`:

    1. For `outbound` traffic the `source address` is replaced with the `routers` address. 

        * A key is created to store the mapping: `{src.ip, src.port, dest.ip, dest.port}`

    2. For `inbound` traffic the `source address` is replaced with the `original` address.

5. `NAT` required the client in the private network `initiates` the connection unless `port forwarding` is set up.

6. There are many variants of `NAT`.

7. `NAT` can try to implement `port preservation` where possible.

---

## Applications

* __Routing__ - Expose `private networks`, avoid `IP address overlapping`, avoid `IP exhaustion`.

* __Load Balancing__ - Map a `cluster of IP addresses`.

---

## Details

* Every `TCP` and `UDP` packet contains a `source IP address` and a `destination IP address`. (L4).

* Every TCP and UDP packet is encapsulated in an `IP` packet, whose `IP header` contains a `source IP address` and a `destination IP address`. (L3).

* The `IP` `address`/`protocol`/`port` number triple forms a `socket`. 

* The `source IP address` and `source port` number form the `source socket`. 

* The `destination IP address` and `destination port number` form the `destination socket`. 

* When NAT takes place the `checksums` of `IP` and `TCP`/`UDP` packets also have to be recalculated. 

* `Packet fragmentation` can cause issues with NAT.

* If multiple internal hosts attempt to communicate with the same external host using the same port number, the NAT may need remap the port.

---

## Implementation

* `Linux iptables` - Linux `ip tables` has a `nat` table with `chains` to add `nat` processing.

---

## References

* [NAT - Wikipedia](https://en.wikipedia.org/wiki/Network_address_translation)

* [Private Network - RFC-1918](https://tools.ietf.org/html/rfc1918)

