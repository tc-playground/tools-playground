# MTU - Maximum Transmission Unit

## Introduction

1. `maximum transmission unit (MTU)` is the size of the `largest protocol data unit (PDU)` that can be communicated in a single network layer transaction.

2. The `MTU` relates to, but is not identical to the `maximum frame size` that can be transported on the `data link layer`, e.g. `Ethernet frame`.

3. `Larger MTU` is associated with `reduced overhead`. 

4. `Smaller MTU` values can `reduce network delay`.

---

## Check MTU - Linux

1. Use `ping` with a specified package size. This must be `28 bytes` less to account for `headers`.

    ```bash
    ping -M do -s [Packet Size Bytes] [destination IP]
    ```

    * ICMP header: 8 bytes

    * Ethernet header: 20 bytes


2. __Examples__

    ```bash
    $> ping -M do -s 1500 google.com
    PING google.com (216.58.206.142) 1500(1528) bytes of data.

    ping: local error: message too long, mtu=1500
    ```

    ```bash
    $> ping -M do -s 1472 google.com
    PING google.com (216.58.206.142) 1472(1500) bytes of data.

    --- google.com ping statistics ---
    5 packets transmitted, 0 received, 100% packet loss, time 4005ms
    ```

---

## References

* [MTU - Wikipedia](https://en.wikipedia.org/wiki/Maximum_transmission_unit)

* [Determine MTU - RedHat](https://access.redhat.com/solutions/2440411)