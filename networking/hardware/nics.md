# Network Interface Cards (NICs)

## Introductions

* `NICs` are network cards that are attached to computers to allow network traffic.

* `NICs` normally have multiple internal `receiver queues` (`RX queues`) that batch incoming packets.

    * Each `RX queue` is normally `pinned` to a `CPU core`.