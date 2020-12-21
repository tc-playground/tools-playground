# Arithmetic Operation

## Introduction

* `Arithmetic operations` take values in the target registers and put the result in the `register destination (Rd)`.

--

## Operation

* __ADD__ - For single register arithmetic. Lower order 64-bits.

    * `ADD{S} Xd, Xs, Operand2`

    *  An 'immediate value` of 12 bits can be supplied.

    * `ADDS` for carry. In ARM 64 `S` enables the `opcodes`.

        > The ARM processor adds 64 bits at a time; so only required if larger.

2. __ADC__ - For multi register 128 bit arithmetic. Higher order 64-bits.

    * `ADC{S} Xd, Xs, Operand2`

    * `ADCS` for carry. In ARM 64 `S` enables the `opcodes`.

3. __SUB__

    * `SUB{S} Xd, Xs, Operand2`

4. __SBC__

    * `SBC{S} Xd, Xs, Operand2`

