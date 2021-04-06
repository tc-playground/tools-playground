# Web Server

* Grouping your functions into different modules.
* Splitting your modules into different files.
* Creating a practical folder structure within your Rust project.
* Understanding the difference between doc comments and hidden comments.
* Adding example code in your comments and testing it.
* Using clippy to lint your code.
* Using cargo to format and compile your codebase.

---

## Application and Libraries

* Rust differentiates between `application` and `library`.

    * `cargo new APP_NAME` - `main.rs`

    * `cargo new --lib LIB_NAME` - `lib.rs`

---

## Modules (`mod`/`use`/`pub`)

* Rust uses `modules` to group code together. 

* The `mod` keyword is indicating a new module, which has to have a name.

    ```rust
    mod XXX {
        enum ...
        impl ...

    }
    ```

* The `mod` keyword can be used to reference code from another file.

* `snake_case` is used by convention when naming `modules`.

* `modules` operate in a new separate `scope`.

* The `use` keyword can import other libraries into the `scope`.

* The `::` syntax can be used to reference entities inside a `module`.

    ```rust
    error::Error
    ```

* All types and functions are `private` by default.

* The `pub` keyword can be used to make types and functions `public`.

* The keyword `mod` makes a module available through the main.rs file, so other modules/files can have access to it via the `use` keyword.

---

## Libraries and sub crates

* `use crate::`

* Reusable components can be create as a library and imported as a crate through `cargo`.

* Local creates can be imported (even though they are not available in teh global package registry)

    * `handle-errors = { path = "handle-errors", version = "0.1.0" }`


---

## Documentation

* `Documentation` is a first class citizen.

    * `///` : One-line doc comment.

    * `/** ... */` : Block doc comment.

    * `//!` and `/*! ... */` : Apply doc comment to the previous block instead of the one underneath.

    * `//` : One-line comment (not being published).

    * `/* ... */` : Block comment (not being published).

* Rust differentiates between `public` and `private` comments.

* The `doc` command creates documentation for the codebase.

    * `cargo doc --open` will open docs locally.

* Code pushed to `https://crates.io` will have docs automatically pushed to `https://docs.rs`.

* Code examples can be added to docs using `markdown` syntax inside the comment.

---

## Linting

* __Clippy__

    * `rustup component add clippy`

    * `cargo clippy`

* __Linting Rules__

    * Creating a `clippy.toml` or `.clippy.toml` file in the project folder (at the same level as the Cargo.toml file).

    * Adding rules at the top of `main.rs` or `lib.rs` file.

        ```rust
        #![warn(
            clippy::all,
        )]
        ```
    
    * [Clippy Linting Rules](https://rust-lang.github.io/rust-clippy/master/index.html)

---

## Formatting

* `rustup component add rustfmt`

* `cargo fmt`

* [rustfmt Docs](https://rust-lang.github.io/rustfmt)





