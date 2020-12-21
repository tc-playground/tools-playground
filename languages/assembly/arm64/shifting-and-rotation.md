# Shifting and Rotation

## Introduciton

* `shifting` is the process of moving the binary digits in a `register` to left or right.

* `shifting` `n-bits` for an integer by n steps corresponds to `multiplying` or `dividing` that number by `2^n`.

* `shifting` causes bits to be lost at one end and added to the other. The new bits can be `0` or `1`.

* `rotating` is like `shifting` but no new bits are introduced. Instead the `wrap around`.

* The `carry flag` is set when `shifting` / `rotation` operations are undertaken.

---

## Arm64 Implementation

* The `Operand2` is passed through the `barrel shifter` before it is passed to the `ALU`.

* There are instructions to access this directly.

```
R1 -------------------------------+
                                   \
                                    [Arithmetic Logic Unit] ---> Rd
                                   /
Operand2 ---> [Barrel Shifter] ---+
```

* __Logical shift left__

    * Shift bits to the left. Zeros come in from the right. The last bit shifted out ends up in the carry flag.

* __Logical shift right__

    * Shift bits to the right. zeros come in from the left. The last bit shifted out ends up in the carry flag. 

* __Arithmetic shift right__

    * Like logical shift right, but, if the number is negative a 1 comes in from the left.

    * Used for signed integers. Preserves the original sign bit.

* __Rotate right__

    * Like Logical shift right except the bit wrap around.