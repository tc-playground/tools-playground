# Layer 4 - Transport

> __Unit Type__ - `Segment`

---

## Overview

1. __End to End Connections__

    1. `Segmentation`

        * __Outbound__: Split application protocol `data` into `segments`.

        * __Inbound__: Aggregate `segments` into application protocol `data`.
    
    2. `Transport handling` - Retries, guaranteed ordering, etc. (TCP).

    3. `Flow Control` - Manage data transmission: 
    
        * e.g. server communicates more slowly for a phone, faster for another server.
    
    4. `Session Multiplexing` - Use one connection to handle multiple streams or session at once. (TCP).

---

## Protocols

1. `Transmission Control Protocol (TCP)`

    1. Establishes, maintains, and terminates `virtual circuits`.

        * `TCP three-way handshake`.

    2. `Order Guaranteed` - Packets are sequenced.

    3. `Reliable` - Packets are retransmitted if required.

    > Think: Telephone Call

2. `Universal Datagram Protocol (UDP)` - eg. VOIP.

    1. No `virtual circuit` is maintained.

    2. `Order not Guaranteed` - Packets may arrive out of order.

    3. `No reliability` - Packets may be dropped.

    > Think: Postal Service.

