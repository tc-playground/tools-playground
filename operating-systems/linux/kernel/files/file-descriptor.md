# File Descriptors

## Introduciton

* A `file descriptor` is associated with a `process` and contains `metadata` on `files` open by a process.

    * e.g. `file seek position in bytes`.

    * e.g. `open input/output files`.

* A `process` can have multiple `file descriptors`.

    * When creating a new `process`, the `options` specified denote what `file descriptors` are inherited.

---

## File Descriptor Types

* `readfds` - A set of `file descriptors` that will be _watched_ for __read__ conditions.

* `writefds` - A set of `file descriptors` that will be _watched_ for __write__  conditions.

* `exceptfds` - A set of `file descriptors` that will be _watched_ for __exceptional__  conditions.
