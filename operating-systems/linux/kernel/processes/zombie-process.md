#  Zombie (defunct) Process

## Introduciton

1. A `zombie process` or `defunct process` is a process that has `completed execution` (via the `exit` system call) but still has an entry in the `process table` in the `TERMINATED` state.

    * The entry is still needed to allow the parent process to read its child's `exit status` : via the `wait` system call.

    * When the `exit status` is read, the `zombie` process is `reaped` from the `process table`.

2. It is normal and expected for a process to become a `zombie process` before being reaped at the end of it's life.

3. If the `zombie process` is not `reaped` then this is a `resource leak`.

4. `zombie process` cannot be killed with the `kill` command, as it is already int eh `TERMINATED` state.

5. `zombie processes` are NOT the same as `orphaned processes`.

6. `zombie processes` can be identified with `ps` by the presence of a "Z" in the "STAT" column.

7. `zombie processes` can be removed by sending `SIGCHLD` signal can be sent to the parent manually, using the `kill` command.

8. `zombie processes` can be removed by killing the parent process, using the `kill` command.

    * The `zombie processes` will be attached to `init` and cleaned up with a `wait` system call.

---

## References

* [zombie process - Wikipedia](https://en.wikipedia.org/wiki/Zombie_process)