# Cargo

## Introduction

* `cargo` is a `build` and `package management` tool for Rust.

* `Cargo.toml` defines `compilation`, `packaging`, and `meta-data` options.

---

## Commands

* __Build__ - `cargo build`

* __Run__ - `cargo run`

* __Lint__ - `cargo clippy`

---

## Cargo toml

### [package] Section

* Defines `metadata` that is used when `publishing` the `package` to a `package registry` of Rust.

### [lib] Section

* Defines the `output format` from the `Rust compilation` process.

    * __cdylib__ asks `rustc` to produce a `dynamic system library`.

    * __rlib__ asks `rustc` to add a static library containing `metadata about the produced library`.

> `dynamic system libraries` can be loaded from another language (e.g. `JavaScript`).

### [features] Section

* Defines the `optional features` to be included from the `Rust compilation` process.

    * __console_error_panic_hook__ - Add functionality to convert `unhandled errors (panics)` to `console errors`.

### [dependencies] Section

* Defines the list of crates that this one depends on.

---

## REferences

* [The Cargo Book](https://doc.rust-lang.org/cargo/index.html)

* [Hello Cargo - The Book](https://doc.rust-lang.org/book/ch01-03-hello-cargo.html)