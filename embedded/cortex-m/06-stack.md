# Stack Memory

* Start from memory range `0x2000 0000`

* Memory is `byte addressable`.

* Arm Cortex-M stack work on 32 bit register values.

* Grows upwards (towards lower addresses).

* The `SP (R13)` register is the stack pointer and points to the top of the stack.

* `PUSH` operations add values to top of stack.

    * `SP` is decremented by 4 each time. (C-M4 32-bit processor).

* `POP` operations remove value from top of stack.

    * `SP` is incremented by 4 each time (`Cortex M: 32 bit`).

---

## Shadow Stack Pointer

1. __Stack Pointer (SP)__

    1. __Main Stack Pointer (MSP)__ - Used by the OS thread and `Interrupt Service Routines (ISR)`.

        * Default.
        
        * Always used in `Handler Mode`.

    2. __Program Stack Pointer (PSP)__ - Used by `Tasks`.

2. The pointer to use is defined as `Bit-1` in the `CONTROL` register.

    * `Bit[1]=0` : MSP in in `Thread Mode`.
    * `Bit[1]=1` : PSP in in `Thread Mode`.

    * `MRS` and `MSR` instructions allow us to access this register.

---

## Exception stack frames

* When the processor takes an `exception`, unless the exception is a `tail-chained` or a `late-arriving`
exception, the processor pushes information onto the current `stack`. This operation is referred to
as `stacking` and the structure of __eight data words__ is referred as the `stack frame`.

     * Ref: Cortex M4 User Guide - Sec. 2.3.7

> A `word` is `32 bits`. A `C-M4 register` is `32 bits`.

* If `floating point mode` is enabled, and additional z
    
    * Ref: Cortex M4 User Guide - Fig. 2-






