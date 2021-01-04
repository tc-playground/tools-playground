# Scalar Types

## Overview

* `Rust` has 4 `scalar (primitive)` types:
    * Integers
    * Floats
    * Boolean
    * Chars

---

## __Integers__

* __Types__

    * __unsigned__ - `u8`, `u16`, `u32`, `u64`, `u128`, `usize`.

    * __signed__ - `i8`, `i16`, `i32`, `i64`, `i128`, `isize`.

    * Default `i32`. 

* __Literals__
    * __Decimal__ : `1234567890`
    * __Hex (Ox)__ : `Ox1234567890abcdef`
    * __Octal (0o)__ : `0o12345670`
    * __Binary (0b)__ : `0b01` 
    * __Byte__ : `b'A'`

    > Can have ignored underscores for readability.

* __Suffixes__
    * `let x = 5u16;`

---

## __Floats__

* __Types__

    * `f32`, `f64`.

    * Default `f64`.

* __Literals__
    * __IEEE754 Floating Point Standard__ - `0.1`, `3.14`, `12345.67890`

* __Suffixes__
    * `let x = 3.14f32;`

---

## Bool

* __Types__

    * `bool`

* __Literals__
    * `true`, `false`

---

## Char

* __Types__

    * `char` (32 bits) / (4 bytes).

    > `[char]` `UCS-4`/ `UTF-32`.

* __Literals__

    * __any unicode character__ - `let my_Rocket = '🚀';` 

    > Rust `strings` and `source files` are `UTF-8`.

---

## References

* [Data Types - The Book](https://doc.rust-lang.org/book/ch03-02-data-types.html)