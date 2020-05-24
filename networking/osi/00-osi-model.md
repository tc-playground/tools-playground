# OSI Model

## Introductions

* When troubleshooting network issues start with the physical layer and work up:

    1. `Physical Layer` - I everything plugged in and switched on?

    2. `Data Link Layer` __Switches__ - Can traffic reach the other machines and routers?

    3. `Network Layer` __Routers__ - Do the routers know where to send traffic?

---

## OSI Layers

1. The `OSI Model` has __7 layers__.

    * Layers 1-4 - Network Engineer

    * Layers 5-7 - Developer

    > `All People Sleeping Through Networking Don't Pass`

```
+--------------+
| Application  |    Layer 7                 HTTP, FTP, Telnet                                   |
+--------------+                                                                                |
| Presentation |    Layer 6                                                                     |
+--------------+                                                                                |
|   Session    |    Layer 5                 SSH                                                 |
+--------------+                                                                                |
|  Transport   |    Layer 4     `Segments`  TCP. UDP                                            |   Decreasing data size.
+--------------+                                                                                |
|   Network    |    Layer 3     `Packets`   IPv4, IPv6, IPSec, ICMP     L3 Switches, Routers    |
+--------------+                                                                                |
|  Data Link   |    Layer 2     `Frames`    PPP, MPLS                   L2 Switches, Bridges    |
+--------------+                                                                                |
|   Physical   |    Layer 1     `Bits`      Ethernet                                            V
+--------------+
```

2. `Outbound data`  moves down the stack.

    1. At each layer as data moves __down__ the stack it is __split__ into smaller data chunks.

    2. At each layer as data moves __down__ the stack `headers` are added to each data chunk.

        * `Layer 2 frames` also have a `trailer` added.

3. `Inbound data`  moves up the stack.

    1. At each layer as data moves __up__ the stack `headers` are removed from each data chunk.

        * `Layer 2 frames` also have a `trailer` remove.

    2. At each layer as data moves __up__ the stack it is __aggregated__ into larger data chunks.

4. `Header Types` are __layer specific__ - `L2 Header`, `L3 Header`, etc.

5. A `Protocol Data Unit (PDU)` is combination of `data`  and `header type` - `L7 PDU`, `L6 PDU`, etc.

6. Each layer in the stack communicates with the same layer as data passes over the network, eg.

    1. `L7 HTTP` on Node X communicates with `L7 HTTP` on Node Y.

    2. `L4 TCP` on Node X communicates with `L4 TCP` on Node Y.

    3. `L3 IP` on Node X communicates with `L3 IP` on Node Y.

    4. `L2 Ethernet` on Node X communicates with `L2 Ethernet` on Node Y.

7. Data can does not need to pass up and down through all 7-layers on every nodes it passes though on route to its destination.

    1. e.g. When encrypted SSL traffic is being sent it can only travel as `TCP packets`.

    2. This can affect `load-balancing` and `traffic shaping`.

