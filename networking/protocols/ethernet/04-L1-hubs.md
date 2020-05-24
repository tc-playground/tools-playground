# L1 Hubs

## Introductions

1. `Hubs` are `L1` devices that are `multi-hub repeaters`.

    * A `hub` is denoted in network diagrams by a `grey box with a double headed bi-directional arrow`.

2. `Hubs` create a single `collision domain`. __Only one device on in a collision domain can transmit at one time.__

    1. `Carrier Sense Multiple Access with Collision Detection (CSMA/CD)` is used to mitigate this.

        * It listens to the wire and `checks to see if anything is currently being transmitted`.

        * If the wire is not free, it `exponentially backs` off a few milliseconds.

        * If a `collision does occur`, the `voltage on the wire` is changed to signal the data needs to be retransmitted.

        * The `transmitter` will send a `jam signal` to inform other devices to wait before transmitting.

        * Other host set a random `back-off timer` before they re-enter the listening state.

3. `Hubs` also create a single `broadcast domain`.

    * This is inefficient for busy networks.

> In modern networks the use of `hubs` are uncommon due to these issues (single `collision` and `broadcast` domains).

> In modern networks `bridges` are used as they create smaller `collision` and `broadcast` domains.


