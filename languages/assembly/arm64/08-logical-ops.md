# Logical Operation

## Introduction

* `Logical operations` take values in the target register and performs a logical operation on it.

---

## Logical Operations

1. __AND__ - Bitwise AND - True iff both True.

    * `AND{S} Xd, Xs, Operand2`

2. __EOR__ - Bitwise Exclusive OR - True if both differ.

    * `EOR{S} Xd, Xs, Operand2`

3. __OOR__ - Bitwise OR - True if one is True.

    * `ORR{S} Xd, Xs, Operand2`

4. __BIC__ - Bit Clear - AND NOT - True if Xs is True.

    * `BIC{S} Xd, Xs, Operand2`

