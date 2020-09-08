# ss - Socket Statistics

## Introduction

* `ss` shows how your computer communicates with other computers, networks, and services.

* `ss` dumps `socket statistics`.

    * __Type__ - `tcp`, `udp`,, etc.

    * __Address__ : `src` IP, `sport`,`dest` IP, and `dport` information. 

    * __Status__ - Open, Closed, Established, Listening, etc

    * __Stats__ - `Tx`/`Rx`, `memory` usage, etc.

    * __Info__ - `inode`, `process`, etc.

* `ss` can `filter` all the sockets on the system based on `type`, `status`, `addresses`, etc.

* `ss` can return information of the associated `pid`, `fd`, etc.

* `ss` is the contemporary version of `netstat`.

---

## Examples

* `ss` - All sockets that are `not listening`.

* `ss -l` - All sockets that are `listening`.

* `ss -a` - All sockets.

* `ss -a -t` - All `tcp` sockets.

* `ss -a -u` - All `udp` sockets.

* `ss -a -x` - All `unix` sockets.

* `ss -a -w` - All `raw` sockets.

* `ss -a -4` - All `IP 4` sockets.

* `ss -a -6` - All `IP 6` sockets.

* `ss -t -r state established` - All `established` sockets.

* `ss -t -r state listening` - All `listening` sockets.

* `ss -a state established ‘( dport = :https or sport = :https )’` - All `established` sockets using the `https` port.

* `ss -a state established ‘( dport = :22 or sport = :22 )’` - All `established` sockets using on port `22`.

* `ss -a dst 192.168.4.25` - All sockets connecting to a specific `IP` address.

* `sudo ss -t -p` - All `tcp` sockets and there associated `pid` and `fd`.

---

## References

* [ss - Tutorial](https://www.howtogeek.com/681468/how-to-use-the-ss-command-on-linux/)

* [Socket Types](https://man7.org/linux/man-pages/man2/socket.2.html)
