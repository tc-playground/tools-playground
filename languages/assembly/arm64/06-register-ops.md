# Register Operations

## Introduction

* `MOV instructions` move data `between registers`

* `MOV instructions` are an assembler `alias`.

* `MOV instructions` have 3 forms for `Operand 2`:

    1. A `register` and a `shift`.

    2. A `immediate operand` (small number) and a `shift`.

    3. A `register` and an `extension operation`. 

        * The extension operations let us extract a `byte`, `half-word`, or `word` parts from the second register.

* `LSL instructions` provide a `logical shift` on the operands.

* `MOV`, `MOVK`, `MOVN` variants.

---

## MOV Operations

* Load values into target register.

* `MOV X1, X2` - Register to register MOV. Move X2 into X1. 

* `MOV XD, operand2` - Move operand2 into XD.

* `MOV XD, #imm16{, LSL #shift}` - Move imm16 (16 bit immediate operand) into XD.

* __Move and Shift__
    * `MOV X1, X2, LSL #1` - Move X2 into X1 and shift it left by 1.
    * `MOV X1, X2, LSR #1` - Logical shift right.
    * `MOV X1, X2, ASR #1` - Arithmetic shift right.
    * `MOV X1, X2, ROR #1` - Rotate right .

* __Move and Shift Aliases__
    * `LSL X1, X2, #1` - Logical shift left.
    * `LSR X1, X2, #1` - Logical shift right.
    * `ASR X1, X2, #1` - Arithmetic shift right.
    * `ROR X1, X2, #1` - Rotate right.

---

## MOVK Operations

* `MOVK XD, #imm16{, LSL #shift}`

    * Load immediate 16-bits with shift. Allows the full 64 bits of a register to be loaded.

* __Example__: Load register X2 with the 64-bit hex value 0x1234FEDC4F5D6E3A.

    * `MOV X2, #0x6E3A`
    * `MOVK X2, #0x4F5D, LSL #16`
    * `MOVK X2, #0xFEDC, LSL #32`
    * `MOVK X2, #0x1234, LSL #48`

---

## MOVN Operations

* `MOVN XD, operand2`

    * `Move Not instruction`. 

    * Works just like MOV, except it reverses all the 1s and 0s as it loads the register. (`one-complement`).

* Distinct ARM opcode. Used to: `calculate ones-complement`, `multiply by -1`, allow 17 bits of immediate data.



