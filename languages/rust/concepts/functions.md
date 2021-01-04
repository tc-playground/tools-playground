# Functions

## Overview

* `Rust functions` are defined using the `fn` keyword.

* The `Rust entrypoint function` is called `main`.

* `Rust functions` by convention use `snake_case`.

* `Rust functions` can be declared in any order (regardless of dependencies).

* `Rust functions` must declare the `parameter types` of any `inputs`.

* `Rust functions` must declare the `return type` of any `outputs` using the `->` keyword.

* `Rust functions` can return a value using the `return` keyword or `tail expression`.

    * `tail expression` return the value of the last executed statement by omitting the `;`.

    > This is the preferred convention in `idiomatic rust`.

* `Rust functions` are invoked by specifying the required parameters in `()` parentheses.

    * Rust does not support `named parameters`. All parameters must be specified in-order.

---

## Examples

```rust
fn main() {
    // do stuff
}

fn func_01() {
    // do stuff
}

fn func_02(some_float: f64, some_int: i32) {
    // do stuff
}

fn func_03() -> i32 {
    // do stuff
    return 0;
}

fn func_04() -> bool {
    func01();
    true
}
```

---

## References

* [Functions - The Book](https://doc.rust-lang.org/book/ch03-03-how-functions-work.html)