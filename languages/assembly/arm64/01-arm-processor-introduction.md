# ARM Instruction Format

## Introduction

* ARM Processors have a `load-store architecture` with two basic type of `instruction`:

    * `register arithmetic and logical operations` - Load and store data in registers and memory locations. 

    * `memory load/store operation` - Perform operations on data stored in registers to produce a result in another register.

* ARM processors (can) perform 64-bit `arithmetic` and `logical` operations.

* ARM processors `memory addresses` are 64-bit wide.

    * `indirect memory access` the register hold the address of the memory location.

* ARM Processors have `32 Registers` in `user mode`.

    * 31 `General Purpose` registers.

    * `Stack Pointer (SP)`/`Zero Register (XZR)`

    * Each register is 64 bits in size and can be partially used:

        * __DOUBLE WORD__ - registers `X0`–`X30`, `XZR`.

        * __WORD__ - registers `W0`-`W30`, `WZR`. Set the lower 32 bits.
    
    * There are further registers in the `co-processors` (`floating-point`, `neon`).
    
* ARM Processors have binary `instruction` that are 32 bits long.

    * This means different instructions must encode all the required data into 32 bits.

    * This means different types of instruction are laid out differently and have different options available.

    * Instruction can use `W` or `X` registers, but cannot mix them.

    * Common encoding elements include:

        * `Register Mode` - 1 bit to determine if the instruction references `W` or `X` registers.

        * `Opcode` - Specify the operation to perform. 8-bits to cover all instruction.

        * `Shift` - Specify shifting operations that can be applied to the second operand.

        * `Condition Code` - 1 bit to determine if the instruction should update `condition flags register`.

        * `Rm` - `First operand` register. 5-bits to cover 32 registers.

        * `Rn` - `Second operand` register. 5-bits to cover 32 registers.

        * `Rd` - Result register. 5-bits to cover 32 registers.

        * `Imm6` - `Immediate operand`. Use to hold small data values directly in the instruction instead of a register.
    
    * It takes 3 cycles `load`, `decode`, and `execute` to perform an instruction. These are `pipelined`.

    * Assemblers use `opcode aliases` and determine how to optimally compile these down into `instructions`.

* ARM Processor have a `barrel shifter` for the `second operand` for shifting and rotation operations.

    ```
    R1 -------------------------------+
                                        \
                                            [Arithmetic Logic Unit] ---> Rd
                                        /
    Operand2 ---> [Barrel Shifter] ---+
    ```

* ARM 64 processors may have several `co-processors`

    * `floating point coprocessor`

    * `neon coprocessor`.







 

