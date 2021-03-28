# Traits

* `Traits` are like `interfaces` in other languages, however, __new traits can be implemented for existing types__.

    * So, abstractions can be created after-the-fact, and applied to existing libraries.

* [Traits - Rust Blog](https://blog.rust-lang.org/2015/05/11/traits.html)



## Overview

* `Rust` does not have a concept of `struct inheritance`.

* `Traits` are similar to `interfaces` and provide `composition`.

* `Traits` do have a concept of `struct inheritance`.

* A `trait` tells the Rust compiler about functionality a particular type has and can share with other types.

* `Traits` define `required behaviour`.

* `Traits` define a set of `methods` that the `struct` must implement to be part of that `trait`.

* `Traits` are defined using the `trait` keyword.

    * __Default traits__ can be implemented in the `trait` block or left `abstract`.

* `Traits` can be used to implement __generic functions__ that can be shared.

* `generic functions` can then operate on any structs that implement the required `trait`.

* __Composition__ - it is possible to implement any `trait` fo any `struct`.

    > This includes `native` and `imported` library `structs`.

* __Standard Traits__

    1. __Copy__ - If implemented, teh struct will be `copied` instead of `moved` in `move scenarios`.

        * e.g. Small structs we want to keep on the `stack` instead of the `heap`.

        * `integers`, `floats`, `boolean`, etc. implement the `Copy trait`.

        * NB: All `struct member variables` must also implement teh `Copy trait`.
    

---

## Implementing traits

* Define a `trait methods` using `trait` keyword.

    ```rust
    trait MyBehaviour {
        fn do_something(&self) -> &str 
    }
    ```

* Define the struct using `struct` keyword.

    ```rust
    struct MyStruct {
        field_01: i32,
        field_02: bool,
    }
    ```

* Define a `implementation block` using `impl` and `for`  keywords to implement the required `trait methods`.

    ```rust
    impl MyBehaviour for MyStruct {
        fn do_something(&self) -> &str { "done it" } 
    }
    ```

* Define a `generic function` using the `trait`:

    ```rust
    fn log_do_something<T: MyBehaviour>(item: T) {
        println!("{}"), item.do_something());
    }

---

## Implementing default traits

* Define a `default trait methods` using `trait` keyword.

    ```rust
    trait MyBehaviour {
        fn do_something(&self) -> &str { "done it" } 
    }
    ```

* Define `impl` with a new implementation to `override` or chose not to implement.

---

## Fields in traits

* If required, can be defined using `getter/setter` methods.

---

## References

* [Traits - The Book](https://doc.rust-lang.org/book/ch10-02-traits.html)