# Strings

## Overview

* There are 6 types of `strings` in the `Rust standard library`, the 2 most common are:

    * __String__ - `String`

    * __String Slice__ - `str`

        * __Borrowed String Slice__ - `&str`

* `Rust` strings are all valid `UTF-8`. Strings cannot be indexed by `character position`.

    * `bytes` --> `unicode scalers` --> `unicode graphemes`.

    * NB: `diacritics` are unicode scalers that combine with other unicode scalers.

* String Character Operations

    * `word.bytes()` - Vector of UTF-8 bytes. Fine for indexing `unicode ascii` characters.

    * `word.chars()` - Iterator to iterate over `unicode scalars`.

    * `graphemes(word, true)` - Iterator to iterate over `unicode graphemes`.

        * NB: In `unicode-segmentation` package 
    
    * `word_iter.nth()` - Can be used to indexed into the `nth grapheme` of a word.

---

## String

* The `data` in a  `string` __can be modified__.

    ```rust
    let message: String = "Hello 🌍";
    ```

* A `String` is represented in memory as:

    * `ptr to bytes` + `len` + `capacity`

* A `String` can be created from a `borrowed string slice`:

    ```rust
    let msg_01: String = "Hello 🌍".to_string();
    let msg_02: String = String::from("Hello 🌍");
    ```

---

## Borrowed String Slice

* The `data` in a `borrowed string slice` __cannot be modified__.

    ```rust
    let message: &str = "Hello 🌍";
    ```

* A `borrowed string slice (&str)` is represented in memory as:

    * `ptr to bytes` + `len`
    
* This is the most common type of string.

---

## References

* [Strings - The Book](https://doc.rust-lang.org/book/ch08-02-strings.html)


