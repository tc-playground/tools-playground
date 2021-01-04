# Modules

## Overview

* `Rust crates` can have a `main binary` and a set of `library modules`

    ```
    hello
    ├── Cargo.toml
    ├── src
    │   └── lib.rs
    │   └── main.rs
    ```

* The `pub` keyword can be used to export module constructs.

    ```rust
    // lib.rs
    pub fn greet() {
        println!("Wotcha!");
    }
    ```

* Exported constructs can be referenced using the `absolute path` via the `scope operator` keyword `::`

    ```rust
    // main.rs
    fn main() {
        hello::greet();
    }
    ```

* Exported constructs can be brought into scope via the `use` keyword.

    ```rust
    // main.rs
    use hello:greet;
    fn main() {
        greet();
    }
    ```

* `Rust Standard Library` functions can imported via the `use` keyword:

    ```rust
    use std::collections::HashMap
    ```

* `Rust Crate Packages` can be imported via the `use` keyword.

    * The `package dependency` must be added to the project `toml` file first.

    * These are defined in the `[dependencies]` section:

        ```toml
        [dependencies]
        rand = "0.6.5"
        ```

    * These are served from a [registry](https://crates.io).

---

## References

* [Crates and Modules - The Book](https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html)