# Assembler Primer

## Arm Instruction Sets

* There are 3 ARM `instruction sets`.

    * `Original`

    * `Thumb`

    * `Thumb2`



## Assembly Language Syntax

1. `Instructions` have 4 fields separated by a space or tab.

    * Example:

        * `Label    Opcode   Operand   ;Comment`
        * `Init     MOV      RO,#150   ;RRO = 150`

    * `Label` is used to find teh position of instruction in memory.

    * `Opcode` specifies the processor operation to perform.

    * `Operand` specified the `source`, `destination`, `data`  to be processed by the `opcode`.

    * `Comment` is a comment.

    * `Label` and `Comment` are optional.

2. `Directives / Pseudo Ops` assist and control the assembly process.

    * They are also known as `pseudo ops`.

    * They are not instructions in the instruction set.

    * They change the way the code is assembled.

---

## References

* [Cortex-M - Generic Users Guide](https://developer.arm.com/documentation/dui0497/a?lang=en)

* [Cortex-M - Instruction Set](https://developer.arm.com/documentation/dui0497/a/the-cortex-m0-instruction-set/instruction-set-summary)

* [Assembler USer Guide](https://www.keil.com/support/man/docs/armasm/armasm_deb1353593789871.htm)
