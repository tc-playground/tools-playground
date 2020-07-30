# Operators

## Introduction

* `c operators` are `symbols` that perform a `function` on `operands`.

* `c operators` can be `infix`, `prefix`, or `postfix`.

* `c operators` fall into several categories:

    * `arithmetic`

    * `logical`

    * `assignment`

    * `relational`

    * `bitwise`

    * `cast` and `sizeof`

    * `pointers`

* `c operators` have `precedence` relationships that define the order in which they are applied in an expression. 

---

## Arithmetics

* __arithmetic__ -  `+`, `-`, `*`, `\`, `%`, `++`, `--`.

---

## Logical

* __logical__ - `!`, `&&`, `||`.

---

## Assignment

* __assignment__ - `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `<<=`, `>>=`, `&=`, `^=`, `|=`.


## Relational

* __relational__ - `<`, `<=`, `==`, `!=`, `>=`, `>`.

---

## Bitwise

* __bitwise__ - `<<` (left SHIFT), `>>` (right SHIFT), `~` (bit-flip), `^` (binary XOR), `&` (binary AND), `|` (binary OR).

---

## Cast operator

* __Implicit type conversion__ - Converted by the language itself, e.g. assigning a `float` to an `int` will truncate the float (rounding down).

* __Explicit type conversion__ - Parentheses and the `datatype` can cast the type of a variable, e.g. `(int)`

---

## sizeof operator

* Return the number bytes the variable is using in memory.

* NB: Look like a function, but, is an operator. Evaluated at compile time (if not in an array). 

---

## Pointer Operators

* `*` - Dereference a `pointer address` to get the `value`.

* `&` - Get the `pointer address` of a variable.