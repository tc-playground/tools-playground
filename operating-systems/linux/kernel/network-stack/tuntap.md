# TUN/TAP Devices

## Introduction

* `TUN/TAP` devices intercept low-level network traffic from the `Linux kernel`.

    * `TUN` devices intercept `L3` traffic - routing, IP, etc.

    * `TAP` devices intercept `L2` traffic - ethernet, etc.

* `TUN/TAP` device are often used by `networking userspace applications` to manipulate `L3`/`L2` traffic, respectively.

    * `tunneling` is achieved by injecting packets into the payload of other packets at `L3`.

---

## References

* [tun/tap in VPNs](https://www.saminiir.com/openvpn-puts-packets-inside-your-packets)

* [tun/tap in userspace network-stack](https://www.saminiir.com/lets-code-tcp-ip-stack-1-ethernet-arp/)