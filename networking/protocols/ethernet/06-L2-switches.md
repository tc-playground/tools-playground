# L1 Switches

## Introduction

1. `Switches` are `L2` devices with `multiple ports`. A single machine can be connected to a specific port.

    * A `switch` is denoted in network diagrams by a `grey box with two disjointed double headed bi-directional arrow`.

2. Replacing `repeaters`, `hubs`, and `bridges` with a single `switch` connected to a `single switch port` allows smaller `collision` and `broadcast` domains.

    1. This `host to one port topology` is called `microsegmentation`. 
    
    2. Every `host` has it's own `collision domain`.

    3. `Hosts` no longer have to share their `bandwidth` with other hosts.

    4. By default `hosts` still share a `broadcast domain`.

    5. The `switch` can be configured to have smaller `broadcast domains` using a logical `Virtual Large Area Network (VLAN)`.

---

## Switch MAC Address Tables

1. Switches need a mapping between `ports` on the switch and the `MAC addresses` of the `host` connected to that `port`.

    ```bash
    > show mac address-table
          Mac Address Table
    -------------------------------------------
    Vlan    Mac Address       Type        Ports
    ----    -----------       --------    -----
       1    00ld.70ab.5d60    DYNAMIC     Fa0/2
       1    00le.f724.al60    DYNAMIC     Fa0/3
    Total Mac Addresses for this criterion: 2
    ```

2. The `MAC address table` can be defined `statically`.

    * Static addresses stay int eh tables until they are removed.

3. The `MAC address table` can be build `dynamically`.

    * The switch looks at the `Source MAC address` in the Ethernet frame header and record what `port` it was received on.

    * Dynamic addresses are removed from the table after a fixed period of inactivity (300 seconds).

---

## Switch Processing (Frame Handling)

1. When handling an ethernet frame a switch can perform one of three actions:

    1. `Forwarding` - When the switch knows the outgoing port for the specified destination it forwards the frame there.

    2. `Flooding` - When the switch does not know the outgoing port, it forwards the frame to all ports.

    3. `Filtering` - When the source and destination addresses are located off the same port, it drops the frame.

---

## Switch Frame Forwarding Methods

1. There are three commons ways to perform frame forwarding

    1. `Store and Forward` - Store entire frame, check the `FCS`; if good forward.

        * Slowest.

        * Full FCS error check.

    2. `Cut through` - Immediately begin to forward the bytes of the frame. 

        * Fastest

        * Full FCS error check.

    3. `Fragment free` - Check the first 64 bytes of the frame for corruption; if good forward.

        * Compromise between speed and error checking.

---

## References

* [Open cSwitch](https://www.openvswitch.org)

