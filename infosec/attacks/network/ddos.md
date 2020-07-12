## Denial of Service / Distributed Denial of Service Attacks

* `dos` attack an application or network infrastructure by trying to overload (`flood`) them with a high volume of network traffic.

    * `Network congestion`

    * `L3 high volume packet flood` - UDP DNS floods, 

    * `L4 high volume packets flood against TCP stack`.

    * `L7 Botnets`

* `dos` attacks `flood` a target network with `packets`:

    * `dos mitigation` depends on the `type of packet flood`: `TCP`, `UDP`, `SYN`, etc.

* `ddos` attacks are `distributed` attacks against a single target.

* `ddos` attacks are fairly easy and cheap to scale.

* `ddos` fairly hard and expensive to defend against.

--- 

## Detection

* `sflow` - a switch protocol that sends sample packets to a central location where it can be analysed.

    * `sflowd` - Software implementation.

    * `aggregate`.

    * Analyse with `tcpdump`.

---

## Mitigation

* `bgp null routing` - Drop all traffic at the ISP level.

    * `dns` is pre-prepared to be ready to move the service to a new `ip address`.

* `drop invalid packets` - Different techniques are required for different types of `packet flood attacks`.

    * `drop invalid packets` from a flood. using `BPF` and `kernel network stack offloading`.

        * `packet length`, `payload` - limit false positives.

        * `match DNS patterns`

        * `iptables` - Can drop about 2 millions packets a second. 

            * If this is exceeded `interrupt storms` may ensue.
        
        * Some packets are still hard to detect with `BPF`, e.g. `ACK floods`.

        * `ip table offload` can be used to handle `interrupt storms`.

            * A program monitors `iptables` if a particular `BPF` rule is being hammered then add a `kernel bypass` to a userspace network stack to handle them. This can drop about 3 millions packets a second.
        
    * `drop invalid packets` using a `stateful firewall`, e.g. `iptables -conntrack`.

* If the `ip addresses` are not being spoofed, `iptables` techniques include:

    * `Conntrack connlimit` - Limited the number of connections by IP address.

    * `Hashlimits` - Rate limit SYN packets by IP.

    * `Ipset` - Blacklist IPs.

* Selectively disable `HTTP keep-alive`

* Blacklist IPs based on payload.

---

## References

* [Defending the Undefensible](https://www.youtube.com/watch?v=pCVTEx1ouyk)

