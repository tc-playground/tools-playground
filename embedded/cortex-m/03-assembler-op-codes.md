# Common Op Codes (Instructions)

* `MOV` - Move data within the processor wih out accessing memory. 

    > NB: Cannot move more than `8-bis` or to `high registers`. 

    * `MOV R1,#150      ; R0 = 150, value must be 8 bit`
    * `MOV R1,R2        ; R1=R2, copies value from R2 to R1.`

* `LDR` - Load a `register` with either a `32-bit` constant value, or, another register.

    > Read a 32-bit value from memory to a register.

    * `LDR R0,=0xFFFF   ; Loads OcFFFF into R0`
    * `LDR R1,[R2]      ; R1 is the value pointed to by R2`

* `STR` - Store a register value into memory.

    > NB: Operands are the other way around than `LDR`.

    * `STR RO,[R1]      ; Store the value of R0 into R1`

* `B` - Branch to location.

    * `B loop           ; Branch to label 'loop'.`

* `BL` - Branch to (call) sub-routine.

    * `BL Do_Something  ; Call sub-routine 'Do_Something'.`

* `BX LR` - Return from sub-routine call.

    * Use in conjunction with a `BL`.

        ```asm
        DO_SOMETHING
            MOV R2,#0x01
            BX  LR
        ```

* `NOP` - No operation. Do nothing.
