# host Command

## Introduction

* `host` is a simple utility for performing DNS lookups. It is normally used to convert `FQDN` names to `IP` addresses and vice versa.

---

## Usage

* __Get IP from FQDN__ - `host <FQDN>`

    ```bash
    $> host google.com
    google.com has address 172.217.169.46
    google.com has IPv6 address 2a00:1450:4009:818::200e
    google.com mail is handled by 20 alt1.aspmx.l.google.com.
    google.com mail is handled by 50 alt4.aspmx.l.google.com.
    google.com mail is handled by 30 alt2.aspmx.l.google.com.
    google.com mail is handled by 40 alt3.aspmx.l.google.com.
    google.com mail is handled by 10 aspmx.l.google.com.
    ```

* __Get FQDN from IP__ - `host <IP>`

    ```
    $> host 172.217.169.46
    46.169.217.172.in-addr.arpa domain name pointer lhr48s08-in-f14.1e100.net.
    ```

---

## Options

* `-v` - Verbose output.

    ```bash
    host -v example.com  
    ```

* `-t <record_type>` - Get information for required DNS record type.

    ```bash
    host -t ns example.com
    host -t SOA example.com
    host -t A example.com
    host -t CNAME example.com
    ```

* `-C` - Compare SOA record on `authoritative servers`.

    ```bash
    host -C example.com
    ```
---

## References

* [host Examples](https://www.geeksforgeeks.org/host-command-in-linux-with-examples)



