# Enums and Pattern Matching

## Overview

* `Enums` in Rust are more like `Algebraic Data Types` in Haskell than `enums` in C. More like a C union type.

* `Enums` are specified using the `enum` keyword.

* `Enums` can be use in C like manner to provide `namespacing`.

* `Enums` can also be associated with data values:

    * __scalar__

    * __tuple__

    * __(anonymous) struct__

    * __functions__

* `Enums` are compatible with `traits` and `generics`.

* __Variants__ - `enums` are good to define when something is `one thing or another` from an `exhaustive set`:

    ```rust
    enum Option<T> {
        Some<T>,
        None
    }
    ```

    * This makes them suitable for `pattern matching` based `conditional logic`.

        ```rust
        // if match
        if let Some(x) = my_var {
            println!("value is: {}", x);
        }
        ```

    * A __match expression__ can be used to branch based on a set of `variants`.

        ```rust
        // match expression
        match my_vat {
            Some(x) => {
                println!("value is: {}", x);
            },
            None() => {
                println!("no value");
            },
            _ => {
                println!("unmatched");
            },
        }
        ```

        * `_` is the default matcher that will match any case.

        * All branches must return teh same result type.

* The `Option` and `Result` enums are used heavily in the Rust standard libraries.

---

## Creating an enum

* `Enums` are specified using the `enum` keyword.

    ```rust
    enum Colour {
        Red,
        Green,
        Blue
    }
    ```

* `Enums` can have data associated with them.

    ```rust
    enum Dispenser {
        Empty,                      // Namespace
        Ammo(u8),                   // Scalar
        Thing(String, i32),         // Tuple
        Location {x: i32, y: i32}   // Anonymous struct
    }

    use Dispenser::*;
    let dispenser_01 = Empty;
    let dispenser_02 = Thing("Pancakes".to_string(), 10);
    ...
    ```

---

## The Option enum

* Used in places where are function result might not be returned. e.g. some_list.find().

    ```rust
    enum Option<T> {
        Some<T>,
        None
    }
    ```

* Imported as part of the standard prelude.

    ```rust
    let mut x = None;
    ```

* Helper functions.

    ```rust
    let mut x = None;
    x = Some(5);
    x.is_some();
    x.is_none()'
    ```

* Implements iterator trait.

---

## The Result enum

* Used in places where are function might return a result or an error. e.g. some_http.get().

    ```rust
    #[must_use]
    enum Result<T, E> {
        Ok(T),
        Err(E)
    }
    ```

    * The `must use` annotation make it a compiler warning not to handle the result.

* The `unwrap` method can be used to handle a result.

    ```rust
    use std::fs::file;

    fn main() {
        let res = File::open("some-file");
        let f = if res.ok() { res.unwrap() }
    }
    ```

* The `expect` method can be used to handle an error.

    ```rust
    use std::fs::file;

    fn main() {
        let res = File::open("some-file");
        let e = if res.error() { res.expect("error message") }
    }
    ```

* Handle all return states.

    ```rust
    use std::fs::file;

    fn main() {
        let res = File::open("some-file");
        match res {
            Ok(f) => { ... },
            Error(e) => { ... },
        }
        let e = if res.error() { res.expect("error message") }
    }
    ```

---

## References

* [Enums - The Book](https://doc.rust-lang.org/book/ch06-00-enums.html)