# CPU

## Arm Cortex

1. __Cortex M__

    1. __Control Unit__

    2. __Arithmetic Logic Unit (ALU)__

        1. __Registers__

          1. __General Purpose Registers__ - `R0-R7` (low), and, `R8-R12` (high).

            2. __Stack Pointer__ - `SP (R13)`. Indicates the stack address. 

                * __0__ - `Main Stack Pointer (MSP)`.

                * __1__ - `Process Stack Pointer (PSP)`.

                > Bit[1] of the `CONTROL` register determines which stack.

            3. __Link Register__ - `LR (R14)`. Stores the return location of functions.

            4. __Program Counter__ - `PC (R15)`. Contains the `current instruction address + 4`.
        
        2. __Special Registers__

            1. __Program Status Register__ - `PSR`.

            2. __Exception Mask Registers__

                1. `PRIMASK`
                
                2. `FAULTMASK`
                
                3. `BASEPI`.

                4. __Control Register__ - `CONTROL`

---

## Operation Modes

1. __Privilege Modes__

    1. __Privileged Access Level__ - No restrictions.

    2. __Unprivileged Access Level__ - Restricted access to memory locations.

2. __Operation Modes__

    1. __Thumb Mode__

        1. __Thread Mode__  - Process move into this mode when running normal programs.

            * Privileged/Unprivileged Access.

        2. __Handler Mode__ - Processor moves to this mode when handling `Interrupt Service Routines (ISR)`.

            * Privileged Access.

    2. __Debug Mode__

---


