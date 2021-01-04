# Structs

## Overview

* __structs__ are a way of representing `related data`.

* `structs` are defined using the `struct` keyword.

    * `structs` consist of:

        * __Data Fields__

* `implementation blocks` are defined using the `impl` keyword.

    * `impl blocks` consist of:

        * __Associated Functions__

            * `class-like`/`static` functions. e.g. `new()`.
            
            * Do not take `self` as the first argument.

        * __Methods__

            * Always take some for of `self` as the first argument.

                * `fn move(self) ...`
                * `fn borrow(&self) ...`
                * `fn mut_borrow(mut& self) ...`

* `structs` and `impl` can use the special `Self` name to self-reference themselves.

> `structs` ans `impl` are similar to `classes` and `objects` in other languages.

> `structs` and `impl` do no support `inheritance`. A feature called `traits` is available instead.

---

## Defining a struct

* Define the struct using `struct` keyword.

    ```rust
    struct MyStruct {
        field_01: i32,
        field_02: bool,
    }
    ```

* Define a `constructor method` using `impl`keyword.

    ```rust
    impl MyStruct {
        fn new() -> Self {
            Self {
                field_01: 0,
                field_02: false,
            }
        }
    }
    ```

---

## Instantiating a struct

```rust
let var_01 = MyStruct::new();
let var_02 = var_01.field_01;
var_01.some_method();
```

---

## References

* [Structured Data - The Book](https://doc.rust-lang.org/book/ch05-00-structs.html)