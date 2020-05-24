# ARP (Address Resolution Protocol)

## Introduction

* `ARP` stands for `Address Resolution Protocol`, which is used to find the `Media Access Control (MAC)` address of a network neighbour for a given IPv4 Address.

* `ARP` is used to discover the `link address` associated with an `ip address`.

* `ARP` can also be used to `announce` an IP/MAC mapping.

* `ARP` is a request-response protocol whose messages are encapsulated by a link layer protocol. 

* `ARP` is communicated within the boundaries of a single network (link layer), never routed across internetwork nodes. 

* `Neighbor Discovery Protocol (NDP)` is the equivalent protocol for IPv6 networks. 

---

## Packet Structure

1. __Hardware type (`HTYPE`)__

    This field specifies the network link protocol type. Example: Ethernet is 1.

2. __Protocol type (`PTYPE`)__

    This field specifies the internetwork protocol for which the ARP request is intended. For IPv4, this has the value 0x0800. The permitted PTYPE values share a numbering space with those for EtherType.

3. __Hardware length (`HLEN`)__

    Length (in octets) of a hardware address. Ethernet address length is 6.

4. __Protocol length (`PLEN`)__

    Length (in octets) of internetwork addresses. The internetwork protocol is specified in PTYPE. Example: IPv4 address length is 4.

5. __Operation__ 

    Specifies the operation that the sender is performing: 1 for request, 2 for reply.

6. __Sender hardware address (`SHA`)__

    Media address of the sender. In an ARP request this field is used to indicate the address of the host sending the request. In an ARP reply this field is used to indicate the address of the host that the request was looking for.

7. __Sender protocol address (`SPA`)__

    Internetwork address of the sender.

8. __Target hardware address (`THA`)__

    Media address of the intended receiver. In an ARP request this field is ignored. In an ARP reply this field is used to indicate the address of the host that originated the ARP request.

9. __Target protocol address (`TPA`)__

    Internetwork address of the intended receiver.

---

## Usage

* Two machine on the same (Ethernet) LAN.

* The IP of a target machine is known (maybe via DNS), but, the source machine does not have the destination machines MAC address in it's arp cache.

* An ARP request is broadcast to all machines on the LAN with the IP of target destination machine, and it's own source IP and MAC addresses.

* The target machine responds with it's MAC and IP address to the broadcaster, which may add the mapping to it's arp cache.

---

## Commands

1. `man arp` - Manual page.

2. `arp` - Show ARP table.

3. `arp -d [address]` - Delete a ARP table entry.

4. `arp -s [address] [hw_addr]` - Ass a new ARP table entry.

---

## References

* [Address Resolution Protocol](https://en.wikipedia.org/wiki/Address_Resolution_Protocol) - Wikipedia
