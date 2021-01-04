# Collections

## Overview

* The `Rust standard library` has a core set of collection types.

1. __Vec<T>__ - A list of a single type of object. 

    * `stack` like interface. 
    
    * `indexable` like interface.

    * `vec![1,2,3]` macro.

2. __HashMap<K, V>__ - A map of `key` / `value` pairs.

    * `map (dict)` like interface.

3. __Others__ - Many others.

    1. __VecDequeue__ - Ring buffer based `double ended queue interface`.

    2. __LinkedList__ - `List like interface`. Quick for random access.

    3. __HashSet__ - `Set like interface`.

    4. __BinaryHeap__ - `Priority-queue like interface` that always `pops` off the `max value`.

    5. __BTreeMap__ - `Map like interface` implemented with binary tree. __Sorted__.
    
    6. __BTreeSet__ - `Set like interface` implemented with binary tree. __Sorted__.

---

## References

* [Common Collections - The Book](https://doc.rust-lang.org/book/ch08-00-common-collections.html)