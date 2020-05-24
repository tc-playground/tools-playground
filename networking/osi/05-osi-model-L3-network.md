# Layer 3 - Network

> __Unit Type__ - `Packet`

> __Device__ - `Routers`, `L3 Switches`.

---

## Overview

1. `Data Delivery` - Routes data packets and provides `logical addressing`.

2. Where `Routers` and `routing` occurs. A router's job is to answer two basic questions:

    1. What valid `paths` exist from here to our `destination`?

    2. What is the `best path` to use?

3. `Routers`

4. `L3 Switches` - Have router capabilities. Route packets to `VLAN`s within a network.

5. Use s logical addressing scheme of `IPv4` or `IPv6` to determine a 'best' path.

    1. Routing decisions are based on the `network` potion of the `IP` address. The `host` portion is ignored for routing.

        * `10.0.0.1/24` => Network Portion `10.0.0` + Host `0-255`.
    
    2. Routing Decision are based on `criteria`:

        1. `cost`

        2. `hop count` - RIP

        3. `bandwidth` - OSPF

        4. `longest match of network address`

6. There is no reliability at L3. This is implemented by higher level protocols (TCP) or application protocol (UDP).

    * e.g. `TFTP` uses IP (L3), UDP (L4), and provides the reliability itself.

---

## Protocols

* `OSPF (Open Shortest Path First)`

* `BGP (Border Gateway Protocol)`

* `IS-IS (Intermediate System to Intermediate System)`

* `RIP`