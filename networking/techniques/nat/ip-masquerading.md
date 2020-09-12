# IP Masquerading

## Introduction

1. `ip masquerading` is synonymous with `NAT (Network Address Translation)`.

2. `ip masquerading` allows machines in a `private network` to reach out and communicate with machines via the `public internet`.

3. `ip masquerading` is performed on the `private network router`.

4. `ip masquerading` replaces the `ip address` of packets passing through the `router` via a `mapping table`:

    1. For `outbound` traffic the `source address` is replaced with the `routers` address. 

        * A key is created to store the mapping: `{src.ip, src.port, dest.ip, dest.port}`

    2. For `inbound` traffic the `source address` is replaced with the `original` address.

5. `ip masquerading` requires the client in the private network `initiates` the connection unless `port forwarding` is set up.

6. There are many variants of `ip masquerading`.

---

## Implementation

* `Linux iptables` - Linux `ip tables` has a `nat` table with `chains` to add `nat` processing.

---

## References

* [IP Masquerading - Wikipedia](https://en.wikipedia.org/wiki/Network_address_translation)

* [ipmasque - How doe it Work?](https://www.tldp.org/HOWTO/IP-Masquerade-HOWTO/ipmasq-background2.5.html)

* [NAT Masquerading - YouTube](https://www.youtube.com/watch?v=kQYQ_3ayz8w)
