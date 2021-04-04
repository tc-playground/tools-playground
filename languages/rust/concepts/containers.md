# Containers

* __Reassigning Complex Data Types__ - Rust `moves ownership` when passing variables around in code.

    * e.g. The pointer on the stack to the struct on heap is `dropped`, and a new one is `created`.

    > The drop semantics can be altered using `Reference Counted Containers`.

* __Reference Counted Containers__ - `Rc` or `Arc` type will place the underlying data structure `T` on the heap and creates a `pointer on the stack`.

    * __Rc<T> (Reference Countered)__ - Single threaded.

    * __Arc<T> (Atomically Reference Counted)__ - Multi-threaded.

* `Rc` and `Arc` have mulitple pointers on the `stack`, and the wrapped value on the `heap` `counts the pointer references`.

* __Arc<T>__

    * When cloning an Arc, you clone the pointer which points to the same data structure on the heap, and internally, Arc increments its count.

    * When the internal count reaches 0 (when all variables pointing to the variables go out of scope), Arc is dropping the value.

