# Ethernet Standards

## Introduction

* Implement `L1` connections.

```
+-----------------+------+------------------+
| Ethernet Header | DATA | Ethernet Trailer |
+-----------------+------+------------------+
```

* The ethernet standard means there is no need to translate packets going over links of different speeds.

    * All packets have the same frame format.

---

## Ethernet Standards

```
+------------------+---------------+------------+------------+-----------------------------+
| Name             | IEEE Standard | Type       | Speed      | Wiring                      |
+==================+===============+============+============+=============================+
| Ethernet         |   802.3       | 10BASE-T   | 10 Mbps    | 2/4 Transmit + 2/4 Receive  |
+------------------+---------------+------------+------------+-----------------------------+
| Fast Ethernet    |   802.3u      | 100BASE-T  | 100 Mbps   | 2/4 Transmit + 2/4 Receive  |
+------------------+---------------+------------+------------+-----------------------------+
| Gigabit Ethernet |   802.3ab     | 1000BASE-T | 1000 MMbps | 4/4 Transmit + 4/4 bReceive |
+------------------+---------------+------------+------------+-----------------------------+
| 10 Gig Ethernet  |   802.3an     | 10GBASE-T  | 10 Gbps    | 4/4 Transmit + 4/4 bReceive |
+------------------+---------------+------------+------------+-----------------------------+
...
+------------------+---------------+------------+------------+-----------------------------+
| Fibre            |   802.3ab     | 1000BASE-T | 1000 MMbps |                             |
+------------------+---------------+------------+------------+-----------------------------+
```

---

## Physical Cables Properties

### Copper Standards

* `100m` maximum length.

* Basic Ethernet uses 2 of 4 wires to `transmit`, and, 2 of 4 wires to `receive`.

* Different devices `transmit` and `receive` on different wires.

    ```
    +---------++-----------+-----------+-----------+-----------+
    |         || Pin 1     | Pin 2     | Pin 3     | Pin 6     |
    +=========++===========+===========+===========+===========+
    | PC      || Transmits | Transmits | Receives  | Receives  |
    +---------++-----------+-----------+-----------+-----------+
    | Switch  || Receives  | Receives  | Transmits | Transmits |
    +---------++-----------+------------+----------+-----------+
    ```

* `1000BASE-T` and above use all 4 wires for both. There are 2 pins per wire.

* `Straight Through Cabling`

    * `Usage` - Connecting a `heterogenous` devices. e.g. `Computer <---> Switch`.

* `Cross Over Cabling` - Pins switch over

    * `Usage` - Connecting a `homogenous` devices. e.g. `Computer <---> Computer` or `Switch <---> Switch`.

    > `Automatic Medium-Dependent Interface Crossover (Auto MDIX)` is a facility on a switch that negates the need for cross-over cables by resolving these issues in teh device.

* `Electro Magnetic Interferences (EMI)`

    * `Cross Talk` - Caused by interference can degrade the performance,.

* __Cable Types__

    * `Unshielded Twisted Pair (UTP)`

        * Cheap, but, can have issues in environments with high `EMI`.

    * `Shielded Twisted Pair (STP)`

        * Fewer issues in environments with high `EMI`.

        * More expensive.

        * Fragile.

---

 ### Fibre Optic

* More expensive, but, does not suffer performance degradation from `EMI`.

--- 

## Connectors

* [Modular Connectors](https://en.wikipedia.org/wiki/Modular_connector#8P8C)

    * `RJ45` - Is the common connector.

