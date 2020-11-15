# Exceptions (Interrupts)

## Introduction

* `Exceptions` are raised by the `hardware`.

    * `SysTick` the system clock can raise regular `exceptions` based on the clock time.

* `Exceptions` are also known as `interrupts`.

* When an `exception` occurs, a `context switch` is performed and the `exception handler` is executed.

* An `exception handler` is an `assembly routine` whose `instructions` are stored in a `specific location` in `memory`.

* A `vector table` maps specific `interrupt codes` to `exceptions handlers`.
