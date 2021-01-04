# Control Flow

## Overview

* __Conditional Expressions__ `if` / `else if` / `else`

* __Unconditional Loop__ - `loop` / `break`

* __While Loops__ - `while`

* __For Loops__ `for` / `in`

    * __Iterables__ - `.iter()` / `.map()`/`.filter()`

    * __Ranges__

---

## Conditional Expressions

* `if / else if / else` do NOT require parentheses around the condition.

    ```rust
    if num == 5 {
        // do stuff
    } else if num == 4 {
        // do stuff
    } else {
        // do stuff
    }
    ```

* `if / else if / else` is an `expression`:

    ```rust
    let msg = if num == 5 {
        "five"
    } else if num == 4 {
        "four"
    } else {
        "other"
    };
    ```

---

## Unconditional Loop

* `Unconditional Loops` can be created using the `loop` keyword:

    ```rust
    loop {
        loop {
            break;
        }
    }
    ```
* `Unconditional Loops` can be continued the `continue` keyword:

    ```rust
    loop {
        loop {
            continue;
        }
    }
    ```

    > This jumps to the start of the current loop.

* `Unconditional loops` can be exited using the `break` keyword:

    ```rust
    loop {
        loop {
            break;
        }
    }
    ```
    > This breaks out of the current loop.

* `Labelled loops` can be define with the `tick identifier` - `'` :

    ```rust
    'start loop {
        loop {
            break 'start;
        }
    }
    ```

    > The break out of the current loop to the specified label.

---

## While Loops

* Continue evaluation while boolean expression evaluates to `true`:

    ```rust
    while some_boolean_expr() {
        // do stuff
    }
    ```

* `Rust` has no specific syntax for `do-while` loops:

    ```rust
    while true {
        // do stuff
        if some_boolean_expr() { break }
    }
    ```

---

## For Loops

* __Iterables__

    * Iterate over an `iterable value`.

        ```rust
        for num in [1, 2, 3, 4, 5].iter() {
            // do stuff
        }
        ```

    * Iterate and destructure over an `iterable value`.

        ```rust
        let array = [(0, 0)(1, 1)];
        for (x, y) in array.iter() {
            // do stuff
        }
    ```

* __Ranges__

    * Iterate over an `iterable range` using the `range` operators `..` (exclusive) and `..=` (inclusive):

        ```rust
        for num in 0..50 {
            // do stuff
        }
        ```

---

## References

* [Control Flow - The Book](https://doc.rust-lang.org/book/ch03-05-control-flow.html)