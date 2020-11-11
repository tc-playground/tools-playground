# Cortex-M Overview

## Registers

1. __Core Registers__ - Ref: Cortex M4 User Guide - Tab. 2-2.

    1. __General Purpose Registers__ - `R0-R7` (low), and, `R8-R12` (high).

    2. __Stack Pointer__ - `SP (R13)`. Indicates the stack address. 

        * __0__ - `Main Stack Pointer (MSP)`.

        * __1__ - `Process Stack Pointer (PSP)`.

        > Bit[1] of the `CONTROL` register determines which stack.

    3. __Link Register__ - `LR (R14)`. Stores the return information for subroutines.

    4. __Program Counter__ - `PC (R15)`.

    5. __Program Status Register__ - `PSR`.

    6. __Exception Mask Registers__ -`PRIMASK`, `FAULTMASK`, and, `BASEPI`.

    7. __Control Register__ - `CONTROL`.

---

## Stack

* `Cortex-M` stack grows from highest to lowest memory.


`