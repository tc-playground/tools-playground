# Pend Supervisor Call (Pend_SVC) Exceptions / NEsted Interrupt Controllers

## Introduction

* `Pend_SVC` exceptions are used to `minimise latency` experienced by `Interrupt Service Routines`

    ```
                -|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   | ...
    |-SysTick    *       #       $       .       .       .       .       .       .
    |
    |- SVC
    |
    |- IRQ            !
    |
    |- Thread     *****   #####   $$$$$  !!!!!
    ```

    * `SysTick` has highest priority, so schedules its 3 tasks {*, # $} til completion.

        * This causes latency for `IRQ` {!} that needs to wait.
    
* `SysTick` checks the `Nested Interrupt Controller Registers` to see if there are `pending peripheral interrupts`.

    * If this is the case it set the `pend bit in the NVIG` to cause a `PendSVC exception`.