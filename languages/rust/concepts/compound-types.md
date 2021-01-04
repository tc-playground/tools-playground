# Compound Types

## Overview

* `Tuples` store mulitple values of `any type`.

* `Arrays` store mulitple values of the `same type`.

---

## Tuples

* `Tuples` store _multiple values of `any type`_ and are declared using parentheses `()`.

    ```rust
    let info_01 = (1, 0.2, false);
    let info_02: (u8, f64, bool) = (1, 0.2, false);
    ```

* `Tuple elements` can be accessed via `dot syntax`:

    ```rust
    let info: (u8, f64, bool) = (1, 0.2, false);
    let approval = info.2;
    ```

* `Tuple elements` can be accessed via `destructing syntax`:

    ```rust
    let info: (u8, f64, bool) = (1, 0.2, false);
    let (item_id, cost, approval) = info;
    ```

* `Tuples` have a maximum arity of __12__.

---

## Arrays

* `Arrays` store _multiple values of the `same type`_ and are declared using square parentheses `[]`.

    ```rust
    let buf_01 = [1, 2, 3];
    let buf_02 = [0; 3]; // [value; size]
    let buf3: [u8, 3] = [1, 2, 3];
    ```

* `Array` can be accessed via `index syntax`:

    ```rust
    let buf_01 = [1, 2, 3];
    let value = buf_01[2];
    ```

* `Arrays` have a maximum arity of __32__.

    * `Arrays` live on the `stack` by default - so have a fixed size.

    * `Vec` is usually used for `vectors` and `slices` for `heap allocation`.

---

## References

* [Data Types - The Book](https://doc.rust-lang.org/book/ch03-02-data-types.html)