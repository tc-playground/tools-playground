# dig Command

## Introduction

* `dig` - Domain Information Grouper.

* `dig` is a tool for interrogating DNS name servers. 

* `dig` performs DNS lookups and displays the answers that are returned from the name server(s) that were queried.

---

## Usage

* __Get IP from FQDN__ - `host <FQDN>`

    ```bash
    $> dig google.com

    ; <<>> DiG 9.11.5-P4-5.1ubuntu2.1-Ubuntu <<>> google.com
    ;; global options: +cmd
    ;; Got answer:
    ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 19553
    ;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

    ;; OPT PSEUDOSECTION:
    ; EDNS: version: 0, flags:; udp: 65494
    ;; QUESTION SECTION:
    ;google.com.                    IN      A

    ;; ANSWER SECTION:
    google.com.             49      IN      A       172.217.169.46

    ;; Query time: 13 msec
    ;; SERVER: 127.0.0.53#53(127.0.0.53)
    ;; WHEN: Sat May 09 17:49:45 BST 2020
    ;; MSG SIZE  rcvd: 55
    ```

* __Get FQDN from IP__ - `host <IP>`

    ```bash
    $> dig 172.217.169.46

    ; <<>> DiG 9.11.5-P4-5.1ubuntu2.1-Ubuntu <<>> 172.217.169.46
    ;; global options: +cmd
    ;; Got answer:
    ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 18199
    ;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

    ;; OPT PSEUDOSECTION:
    ; EDNS: version: 0, flags:; udp: 65494
    ;; QUESTION SECTION:
    ;172.217.169.46.                        IN      A

    ;; ANSWER SECTION:
    172.217.169.46.         0       IN      A       172.217.169.46

    ;; Query time: 3 msec
    ;; SERVER: 127.0.0.53#53(127.0.0.53)
    ;; WHEN: Sat May 09 17:50:38 BST 2020
    ;; MSG SIZE  rcvd: 59
    ```
---

## References

* [dig Tutorial - nixCraft](https://www.cyberciti.biz/faq/linux-unix-dig-command-examples-usage-syntax/)

* [dig Tutorial - Linode](https://www.linode.com/docs/networking/dns/use-dig-to-perform-manual-dns-queries/)



