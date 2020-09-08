# socat Multipurpose relay (SOcket CAT)

## Introduction

* `socat` is a `relay` for `bidirectional data transfer` between `two independent data channels`. 

* `socat` can be used for many different purposes.

* `socat` establishes `two bidirectional byte streams` and `transfers data between them`. 

* `socat` `streams` can be constructed from a large set of different `address types` of `data sinks` and `sources`.

    * `file`, `pipe`, `device` (terminal or modem), `socket` (UNIX, TCP, UDP, IP6, raw), a `file descriptor`, a `program`.
       
* `socat` can apply lots of `address options` may be applied to the `streams`.

* Related tools include `netcat` and `telnet`.

---

## References

* `man socat`

* [socat - Wikipedia](https://en.wikipedia.org/wiki/Netcat#Ports_and_reimplementations)

* [socat - man](https://linux.die.net/man/1/socat)

    * [socket - man](https://man7.org/linux/man-pages/man7/socket.7.html)

    * [bind - man](https://man7.org/linux/man-pages/man2/bind.2.html)

* [socat - Concepts - Cindy Sridharan](https://medium.com/@copyconstruct/socat-29453e9fc8a6)

* [Redirecting TCP-traffic to a UNIX domain socket under Linux](https://stackoverflow.com/questions/2149564/redirecting-tcp-traffic-to-a-unix-domain-socket-under-linux)

* [Create HTTP Server with Socat](https://unix.stackexchange.com/questions/448837/create-https-server-with-socat)

* [socat-fu](https://www.pentestpartners.com/security-blog/socat-fu-lesson/)

* [Socat + Docker Download Service](https://medium.com/@jmarhee/using-socat-in-docker-to-power-a-single-use-download-service-96134eb8131e)