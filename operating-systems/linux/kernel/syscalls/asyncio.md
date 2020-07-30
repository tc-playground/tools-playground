# Async I/O

## Introduction

---

## File Descriptors

* A `file descriptor` is associated with a `process` and contains `metadata` on `files` open by a process.

    * e.g. `file seek position in bytes`.

    * e.g. `open input/output files`.

* A `process` can have multiple `file descriptors`.

    * When creating a new `process`, the `options` specified denote what `file descriptors` are inherited.

---

## Interrupts

* [Interrupts](https://en.wikipedia.org/wiki/Interrupt#Edge-triggered)

    * [Edge Triggered](https://en.wikipedia.org/wiki/Interrupt#Edge-triggered) - An `interrupt` signaled by a `level transition` on the `interrupt line`.

    * [Level Triggered](https://en.wikipedia.org/wiki/Interrupt#Level-triggered) - An `interrupt` signaled by `bolding a level`  on the `interrupt line`.

---

## System Calls

* `poll` - poll is a POSIX system call to wait for one or more file descriptors to become ready for use.

    * [Wikipedia](https://en.wikipedia.org/wiki/Select_(Unix))

* `select` - is a `system call` for examining the `status of file descriptors` of open `input/output channels`.

    * [Wikipedia](https://en.wikipedia.org/wiki/Select_(Unix))

* `epoll` - Is a system call for a scalable I/O event notification mechanism.

    * `epoll`s unction is to `monitor multiple file descriptors` to see whether `I/O is possible` on any of them.

    * `epoll` provides both `edge-triggered` and `level-triggered` modes.

    * [Wikipedia](https://en.wikipedia.org/wiki/Epoll)

---

## Async and Event Loop Libraries

* [libevent](https://en.wikipedia.org/wiki/Libevent)

* [libev](http://software.schmorp.de/pkg/libev.html) - High-performance `event loop` that is loosely modelled after `libevent`.

* [libuv](https://libuv.org/) - A multi-platform support library with a focus on `asynchronous I/O`. 

    * [libuv - GitHub](https://github.com/libuv/libuv)

    * [libuv - Docs](http://docs.libuv.org/en/v1.x/)

    * [libuv - Wikipedia](https://en.wikipedia.org/wiki/Libuv)

* [gEvent](http://www.gevent.org/intro.html) - A `coroutine -based` Python networking library

    * Uses `greenlet` to provide a high-level synchronous API on top of the `libev` or `libuv` `event loop`.

---

## References

* [Non-blocking I/O](https://medium.com/@copyconstruct/nonblocking-i-o-99948ad7c957)

* [epoll](https://medium.com/@copyconstruct/the-method-to-epolls-madness-d9d2d6378642)

    * [epoll - Is broken! - 1](https://idea.popcount.org/2017-02-20-epoll-is-fundamentally-broken-12/)

    * [epoll - Is broken! - 2](https://idea.popcount.org/2017-02-20-epoll-is-fundamentally-broken-22/)

* [Linux AIO](https://github.com/littledan/linux-aio)

    * [aio](https://linux.die.net/man/7/aio) - POSIX asynchronous I/O overview

* [libc - async](https://www.gnu.org/software/libc/manual/html_node/Asynchronous-I_002fO.html)






