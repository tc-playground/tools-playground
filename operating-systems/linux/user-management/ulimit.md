# ulimit

---

## Overview

* `ulimit` is a Linux command sets or displays user process resource limits. 

* `limits` are defined in `/etc/security/limits.conf` file or `systemd units`.

* `Soft limit (-S)` – All users can change soft limits up to max set by the hard limits.

    * `ulimit -Sa`

* `Hard limit (-H)` – Only root users allowed to change the hard limits.

    * `ulimit -Ha`

---

## Commands

* __Find soft limits for a user__: `sudo -u jerry bash -c "ulimit -Sa"`

* __Find hard limits for a user__: `sudo -u jerry bash -c "ulimit -Ha"`

* __Find limits for a process user__: `su - www-data -c "ulimit -Sa`

* __Find limits for a process__: `cat /proc/$PID/limits`

---

## Flags

* `-S` - use the `soft` resource limit.
* `-H` - use the `hard` resource limit.
* `-a` - all current limits are reported.
* `-b` - the `socket buffer` size.
* `-c` - the maximum size of `core files` created.
* `-d` - the maximum size of a `process’s data segment`.
* `-e` - the maximum `scheduling priority` (`nice’).
* `-f` - the maximum size of files written by the shell and its children.
* `-i` - the maximum number of `pending signals`.
* `-k` - the maximum number of `kqueues allocated` for this process.
* `-l` - the maximum size a `process may lock into memory`.
* `-m` - the maximum `resident set` size.
* `-n` - the maximum number of `open file descriptors`.
* `-p` - the `pipe` buffer size.
* `-q` - the maximum number of `bytes in POSIX message queues`.
* `-r` - the maximum `real-time scheduling priority`.
* `-s` - the maximum `stack size`.
* `-t` - the maximum amount of `cpu time in seconds`.
* `-u` - the maximum number of `user processes`.
* `-v` - the size of `virtual memory`.
* `-x` - the maximum number of `file locks`.
* `-P` - the maximum number of `pseudoterminals`.
* `-T` - the maximum number of `threads`.


---

## References

* [ulimit](https://www.cyberciti.biz/faq/how-to-find-ulimit-for-user-on-linux/)