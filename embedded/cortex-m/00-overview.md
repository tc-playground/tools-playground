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

## Stack

* `C-M4` stack grows from highest to lowest memory.

---

## Exceptions

---

## Exception stack frames

* When the processor takes an `exception`, unless the exception is a `tail-chained` or a `late-arriving`
exception, the processor pushes information onto the current `stack`. This operation is referred to
as `stacking` and the structure of __eight data words__ is referred as the `stack frame`.

     * Ref: Cortex M4 User Guide - Sec. 2.3.7

> A `word` is `32 bits`. A `C-M4 register` is `32 bits`.

* If `floating point mode` is enabled, and additional z
    
    * Ref: Cortex M4 User Guide - Fig. 2-3

---

## Memory

* Memory starts at: `0x20000000`