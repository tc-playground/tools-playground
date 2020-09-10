# netcat (nc)

## Introduction

* `nc` (`netcat`) utility is used for anything involving `TCP`, `UDP`, or `UNIX-domain sockets`.  

    * `OPEN` TCP connections.

    * `SEND` UDP packets.

    * `LISTEN` on arbitrary TCP and UDP ports.

    * perform `port scanning`.

    * handle both `IPv4` and `IPv6`.

* `nc` can be used to created a simple `client/server` model.

* `nc` nc scripts nicely.

* `nc` * separates error messages onto standard error instead of sending them to standard output.

* Related tools include `ncat` (from `nmap suite`), `socat`, `telnet`, `curl`.

---

## Tasks

1. __Open a raw connection to port 25__

    ```bash
    nc mail.server.net 25
    ```

2. __Perform HTTP request__

    ```bash
    printf "GET /index.html HTTP/1.0\r\nHost: info.cern.ch\r\n\r\n" | nc info.cern.ch 80
    ```

    > `curl` is a better choice if available.

3. __Create (one-shot) Static Web Server__

    ```bash
    FILE="00-overview.md"
    { printf 'HTTP/1.0 200 OK\r\nContent-Length: %d\r\n\r\n' "$(wc -c < $FILE)"; cat $FILE; } | nc -l 8080
    ```

---

## References

* `man nc`

* [netcat - Wikipedia](https://en.wikipedia.org/wiki/Netcat)

* [Redirecting TCP-traffic to a UNIX domain socket under Linux](https://stackoverflow.com/questions/2149564/redirecting-tcp-traffic-to-a-unix-domain-socket-under-linux)