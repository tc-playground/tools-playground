# Languages: Rust

## Tools

* __Rust wasm-pack__ - An alternative to `cargo` for generating and building Rust WASM projects.

    * __Install wasm-pack__  -`curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh)`

    * __Project Template__ - `cargo generate --git https://github.com/rustwasm/wasm-pack-template`

    * __Build__ - `wasm-pack build --target web`

---

## Attributes

* `#[wasm_bindgen]` - A Rust `macro` that helps implement the `binding between JavaScript and Rust`.

    * Instructs the compiler to create a `JavaScript binding` to a class for the associated `struct`/`impl`.

    > The `runtime interaction` is via `shared memory`.


