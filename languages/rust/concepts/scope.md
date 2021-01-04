# Scope

## Overview

* The `scope` of a variable being where it was declared and continues to the end of the `block`.

* `Rust variables` are accessible from `nested blocks`.

* `Rust variables` have a `scope` based on where they are `declared`.

    * __Global Scope__ - Anything can reference a `constant` declared in this scope.

    * __Function Scope__ - A `function` creates a new `block`.

    * __Block scope__ - Braces create a new `block`.

* `Rust variable` can be `shadowed`.

    * Variables in an `inner scope` with same same as a variable in an `outer scope` hide it until the scope in which it was declared ends.

    * Variables in the `same scope` can also be shadowed.

    * `Variable types` can also change when they are shadowed.

    > The compiler will optimise out redundant shadowed variables.

---

## Example

```rust
fn main() {
    let scope01 = 1;
    {
        let scope2 = 2;
    }
}
```

