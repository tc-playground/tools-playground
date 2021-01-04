# Ownership

## Overview

* `Ownership` is the mechanism through which `memory-safety` is obtained.

* `Ownership` is implemented via a `borrow checker` in the `compiler`.

* `Ownership` is a property of a `value` in memory.

* A `value` can be __moved__ to another `variable` or `function scope`.

    * It can be moved by __assignment__ or __using as a parameter__.

    * Instead of `moving` a `value` it is also possible to `borrow` it via a `reference`.

* A `value` can be __cloned__ to another `variable`.

    > In Rust, `clone` operations copy the `stack` and `heap`.
    > NB: In Rust, `copy` operations copy just the `stack`.

* A `value` can be `dropped`. This prevents `memory leaks` and `dangling pointers`.
    1. Destructor
    2. Free `heap`.
    3. Drop `stack`.

---

## Rules of Ownership

1. __Every `value` has an `owner`.__

2. __Every `value` only has one `owner`.__

3. __When a `value` goes out of `scope` it is `dropped`.__

> NB: A `value` is in `memory`.

---

## Rust Memory Model

* The `Rust` memory model consists of a `stack` and a `heap`.

* __Stack vs Heap__

    ```
    +------------------+---------------------+
    | Stack            | Heap                |
    +------------------+---------------------+
    | In order         | Unordered           |
    | Fixed size items | Variable size items |
    | LIFO             | Unordered           |
    | Faster           | Slower              |
    +------------------+---------------------+
    ```

---

## Moving Values

* `Ownership` of a `value` can be __moved__ from one variable to another.

    1. __Re-assignment of value__

        * `Ownership` can be `moved` by `re-assigning` a `value`.

        * __Step 1__

            ```rust
            let s1 = String.from("abc");
            ```
            ```
            Stack                    Heap
            s1: Pointer : * -------> [a, b, c].
                Length  : 3
                Capacity: 3
            ```

        * __Step 2__ (s1 is now invalid)

            ```rust
            let s1 = String.from("abc");
            let s2 = s1
            ```
            ```
            Stack                    Heap
            s1: Pointer : x     +--> [a, b, c].
                Length  : 3    /
                Capacity: 3   /
                            /
            s2: Pointer : * +
                Length  : 3
                Capacity: 3 
            ```
    2. __Passing value into function__

        * `Ownership` can be `moved` by `passing` a value into `function`.

            ```rust
            let s1 = String.from("abc");
            do_stuff(s1);
            // s1 cannot be used
            fn do_stuff(s: String) {
                // do stuff
            }
            ```

        * `Ownership` can be `moved back` by `returning` the value from the `function`.

            ```rust
            let mut s1 = String.from("abc");
            s1 = do_stuff(s1);
            // s1 can be used
            fn do_stuff(s: String) -> String {
                // do stuff
                s
            }
            ```

            > Not the usual pattern. Instead use a `reference`.
        
        * `Ownership` can be maintained by `borrowing` the value via a `reference`.
    

---

## Clone Values

* A value can be `cloned`. 

* `clone()` copies both the `stack` and the `heap`.

    ```ts
    let s1 = String.from("abc");
    let s2 = s1.clone();
    ```

    ```
    Stack                    Heap
    s1: Pointer : * ------> [a, b, c].
        Length  : 3
        Capacity: 3
                    
    s2: Pointer : * ------> [a, b, c].
        Length  : 3
        Capacity: 3 
    ```

---

## References

* [Ownership - The Book](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html)