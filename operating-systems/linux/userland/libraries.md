# Libraries

## Introduciton

* `ls /usr/lib | grep -E '*.so'` - List installed libraries.

* `ldd <binary>` - Find the `shared objects` used by the `<binary>`.

* `ldd $(which tmux)` - Find the `shared objects` used by the `tmux` application.

---

## Libraries

* `libevent-*` - Asynchronous event notification library.