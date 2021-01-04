# Closures

## Overview

* A Rust closure is an `anonymous function` that can capture variables from the `context` it is nested in.

    ```rust
    let add = |x, y| { x + y}
    add(2, 3);
    ```

* Closures support `move semantics` so they can take `ownership` of variables in scope

    ```rust
    let s = '🍎';
    lef f = move || { println!("{}", s) };
    f(); // Prints 🍎 - s is now owned by the closure, even, if moved to another thread.
    ```

* Iterator types provide several functions that accept closures as arguments.

    ```rust
    let mut v = vec!(1, 2, 3);
    v.iter()
        .map(|x| x * 3)
        .filter(|x| *x > 10)
        .fold(0, |acc, x| acc + x);
    ```

---

## References

* [Functional Language Features - The Book](https://doc.rust-lang.org/book/ch13-00-functional-features.html)