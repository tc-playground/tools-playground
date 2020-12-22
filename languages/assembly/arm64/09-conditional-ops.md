# Conditional Operations

## Introduciton

* `Conditional operations` and `labels` for `branching` and `looping`.

* `Conditional operations` for `checking invariants`.

* ASM64 Assembler `Labels` denote points that can be `jumped` to. 

* `Condition flags` hold the result of conditional operations.

    * Stored in th `NZCV` system register.

        * __Negative__ - Is set if the signed value is negative.

        * __Zero__ -  Is set if the result is 0.

        * __Carry__ - Is set if an addition result produces an overflow.

        * __OVerflow__ - For arithmetic result produces a signed overflow occurred.

* Implements `for`,`while`/ `if`, `else`, etc.

---

## Operations

* __B (Branch)__ - Branch to the specified (on the specified condition).

    * `B label`

    * `B.{condition} label`
        
        * `EQ` (Z set) - `==`
        * `NE` (Z clear) - `!=`
        * `MI` (N set) - `Negative`
        * `PL` (N clear) - `Positive or zero`
        * `VS` (V set) - `Overflow`
        * `VC` (V clear) - `No overflow`
        * `CC`/`LO` (C clear) - `< (unsigned)`  
        * `CS`/`HS` (C set) - `>= (unsigned)`
        * `HI` (C set and Z clear) - `> (unsigned)`
        * `LS` (C clear and Z set Lower or same) - `<= (unsigned)`
        * `LE` (Z set, N and V differ) - `<= (signed)`
        * `GT` (Z clear, N and V the same) -`> (signed)`
        * `GE` (N and V the same) - `>= (signed)`
        * `LT` (N and V differ) - `< (signed)`
        * `AL` (Any) -  `Always` (same as no suffix) 

* __CMP (Compare)__ -Compares the contents of register Xn with Operand2 ans updates the `status flags`

    * `CMP Xn, Operand2` - (Converted to: `SUBS XZR, Xn, OPerand2`)

---

## If / Else

```s
    CMP W5, #10
    B.GE elseclause
    // do if stuff ...
    B endif
elseclause:
    // do else statements ...
endif: 
    // program continues...
```

---

## Infinite Loop

```s
_start: 
    // do loop stuff...
    B _start
```

---

## For Loop

```s
    MOV W2, #1              ; W2 holds 1 (initialise)
loop:
    // do loop stuff...
    ADD W2, W2, #1          ; W2++  (increment)
    CMP W2, #10             ; W2 <= 10
    B.LE loop               ; if W2 <= 10 goto loop
```

---

## While Loop

```s
// W2 initialized
loop: 
    CMP W2, #5              ; W2 == 5
    B.EQ loopdone           ; if W2 == 5 goto loopdone
    // do loop stuff...
    B loop
loopdone: 
    // program continues...
```