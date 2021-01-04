# Threads

## Overview

* __thread::spawn__ 

    ```rust
    fn main() {
        let handle = thread::spawn(move || {
            // do stuff in spawned thread.
        });

        // do stuff in main thread

        // wait until thead has exited
        handle.join.unwrap();
    }
    ```

---

## References

* [Fearless Concurrency - The Book](https://doc.rust-lang.org/book/ch16-00-concurrency.html)