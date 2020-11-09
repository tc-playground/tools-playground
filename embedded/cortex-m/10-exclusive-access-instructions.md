# Exclusive Access Instructions

## Introduction

1. Multi-threaded systems may require multiple threads to access the same `resource` for `read/write` operations:

    * e.g. Access and LCD display.

    * Incrementing a memory value take 3 operations: `READ`, `INC`, `STORE`.

2. Context switches can occur any time, so these `critical sections` must be protected.

    1. __Disable-Enabled Interrupts__

    2. __Atomic Instructions__

        1. `LDREX` - Exclusive `load`.

        2. `STREX` - Exclusive `store`.

    3. __Spin Locks__

    4. __Semaphores__

    5. __MUTEX__