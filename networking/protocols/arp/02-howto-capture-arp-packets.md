# How to Capture ARP Packets

1. Start `tcpdump` session sniffing for `arp` and `icmp` messages on the target network device.

    ```bash
    sudo tcpdump -nnti ${device}: arp or icmp and host ${ip_address}
    ```

    For example:

    ```bash
    $> sudo tcpdump -nnti wlp6s0: arp or icmp and host 192.168.0.12
    tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
    listening on wlp6s0:, link-type EN10MB (Ethernet), capture size 262144 bytes
    ARP, Request who-has 192.168.0.12 tell 192.168.0.1, length 46
    ARP, Reply 192.168.0.12 is-at 38:de:ad:49:51:9c, length 28
    ARP, Request who-has 192.168.0.12 (ff:ff:ff:ff:ff:ff) tell 192.168.0.1, length 46
    ARP, Reply 192.168.0.12 is-at 38:de:ad:49:51:9c, length 28
    ```

2. Send a single `ping` request to force an `arp` resolution.

    ```bash
    ping -c 1 ${ip_address}
    ```

    For example:

    ```bash
    $> ping -c 1 192.168.0.12
    PING 192.168.0.12 (192.168.0.12) 56(84) bytes of data.
    64 bytes from 192.168.0.12: icmp_seq=1 ttl=64 time=0.044 ms

    --- 192.168.0.12 ping statistics ---
    1 packets transmitted, 1 received, 0% packet loss, time 0ms
    rtt min/avg/max/mdev = 0.044/0.044/0.044/0.000 ms
    ```