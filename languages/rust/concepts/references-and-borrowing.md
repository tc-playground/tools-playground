# Borrowing - References and Lifetimes

## Overview

* Instead of `moving` a `value` it is also possible to `borrow` it via a `reference`.

* A __immutable reference__ is created using the `&` operator.

* A __mutable reference__ can be created using the `&mut` operator.

* A `reference` is like a Rust managed `pointer`.

* A `reference` is valid for the __lifetime__ of the `reference`.

* A `reference` can be `shared` across `multiple threads`.

* The __dereferencing operator__ automatically de-references down to the underlying `value`.

* The __dot operator__ automatically de-references down to the underlying `value`.

---

## Rules of Borrowing

* At any one time you can have either:

    1. Exactly one `mutable reference`.

    2. Any number of `immutable references`.

> This rule applies __across all threads__.

---

## __Borrowing Values__

* A function can `borrow` a `value` by passing in a `reference` to it.

    ```rust
    let s1 = String.from("abc");
    s1 = do_stuff(&s1);
    // s1 can be used
    fn do_stuff(s: &String) -> String {
        // do stuff
        s
    }
    ```

    * A `reference` can be passed into the function instead of the `value`. 

        * Underneath this is implemented as a `pointer`.

        * The `reference` is valid for it's `lifetime`.

        * The Rust compiler is responsible for `creating` and `destroying` the reference.
    
    * The original `variable` still owns the `value`. The `function` own the `reference`. 

---

## Dereferencing

* The `values` of a `reference` can be dereference manually or with the __dereferencing operator `.`__
    
    ```rust
    fn do_Stuff(s: &mut String) {
        (*s).insert_str(0, "Hi, ")
    }
    ```

    ```rust
    fn do_Stuff(s: &mut String) {
        s.insert_str(0, "Hi, ")
    }
    ```

* The `dereferencing operator` automatically re-referenced down to the underlying `value`.

---

## Resources

* [References and Borrowing - The Book](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html)