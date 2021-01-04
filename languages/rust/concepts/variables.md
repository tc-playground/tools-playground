# Variables

## Overview

* `Rust` variables are defined by the `let` keyword.

* `Rust` variables are `immutable` by default. 

    * Safety, concurrency, speed.

* `Rust variables` can be made mutable by adding the `mut` keyword.

* `Rust` variables can be `destructured`.

* `Rust` 'variables' can be `constant`.

    * Can exist in the `global scope`.
    * The naming convention is `SCREAMING_SNAKE_CASE`.
    * The type need to be specified.

* `Rust` variable have `local scope`.

* `Rust` variable can be `shadowed`.

    * Variables in an `inner scope` with same same as a variable in an `outer scope` hide it until the scope in which it was declared ends.

---

## Examples

```rust
fn main() {
    // Immutable Primitive Variable
    let var1 = 1;
    let (var2. var3) = (2, 4);

    // Mutable Primitive Variable
    let mut var4 = 4;

    // Constant
    const VAR_5: f64 = 5.0;
}
```

---

## References

* [The Book - Variables and Mutability](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)