# Web Server

* Adding a local storage to our application.
* Passing around state to the route handlers.
* Reading from the local storage across threads.
* Updating the local storage in a thread-safe manner.
* Parsing data out of JSON and url-form bodies.
* Extracting information out of query parameters.
* Adding custom errors to our application.
* Handling and returning CORS headers.

* Passing Application State in a thread safe way.

* CORS.

---
## HashMap

* Rust does not have a standard way of constructing structs. The convention is to use a static `new` function on the struct.

* `derive` macro - Can be used to implement default traits.

* `HashMap` key required traits - `#[derive(Serialize, Debug, Clone, PartialEq, Eq, Hash)]`

* `Move` - The move keyword signals “capture by value”, which means it moves the values into the closure and takes ownership of them.

* __println! macro__ - `{:?}` for complex structs, `{}` for native structs.

---

## Thread Safety

* __Ownership__ -  Just one `instance` or `process` can have `ownership` over a particular `variable` or `object`.

    * Prevent that two or more processes alter data at the same time.

    * Give each route handler ownership over the data store (map) if needed so it can be mutated.

* __Reassigning Complex Data Types__ - Rust moves ownership when passing variables around in our code.

    * e.g. The pointer on the stack to the struct on heap is `dropped`, and a new one is created.

* __Handling Multiple Requests__ - How to deal with ownership of shared state?

    * Creating a copy of the resource pollutes memory and prevents mutation.

    * Waiting for a process to finish with a resource blocks async processing.

    * __Reference Counted Containers__ - `Rc` or `Arc` type will place the underlying data structure `T` on the heap and creates a `pointer on the stack`.

        * __Rc<T> (Reference Countered)__ - Single threaded.

        * __Arc<T> (Atomically Reference Counted)__ - Multi-threaded.
    
    * `Rc` and `Arc` have mulitple pointers on the `stack`, and the wrapped value on the `heap` `counts the pointer references`.

    > `Arc` allows multiple threads to use the `shared heap` for `read` operations and clears up the stack pointer when free.

    > `Arv` does not solve the thread-safety issues when `mutating` the data.

    * __Locks__ - Make sure that a `reader` or `writer` as `unique access to the underlying data`.

        * `Mutex` - is blocking for either a writer or reader.

        * `RwLock`- allows as many readers simultaneously but just one writer at a time.

        > These are part of the `std::sync module`, so not suitable for async processes.

        > The `parking_lot` create contains `async primitives`.
    
    ```rust
    #[derive(Clone)]
    struct Store {
        questions: Arc<RwLock<HashMap<QuestionId, Question>>>,
    }
    ```

* `clone()` can be used in situation where we pass ownership of some data into a function, but, need to use it again later.

* `mutable reference` - Get a mutable reference to value that needs to be modified.

---

## REST routes

* POST / PUT/ DELETE

* `url-form-encoded` vs `JSON`

    * `url-form-encoded` - Add key value pairs to the url.

    * `application-json` - PAss JSONin teh body of the request.


* `unwrap` - is not production ready code. Use a `match` block.

* __warp Filters__

---

## CORS Headers

* `Cross-Origin Resource Sharing (CORS)`

* Web browsers have a security mechanism, where they don’t allow requests started from domain A against domain B.

* `Same-origin policy (SOP)`

    > where a user is logged-in to a bank account in one tab, and browses on another website on a second tab. This second tab is forbidden to make any changes to tab where you are logged-in to your bank account.

    > website on mydomain.io makes a request to a server under service.mydomain.io or to a complete other location.

* Instead of sending for example a HTTP PUT request directly, 

    * they send a so-called preflight request to the server, which is a HTTP OPTIONS request first.

    * preflight response contains `allowed origins (domains), methods, headers`.

    * This OPTIONS request asks the server if it’s ok to send the request and the server replies with the allowed methods in the header.

    * The browser reads the allowed methods, and if PUT is included, it does a second HTTP request with the actual data in the body.

    * Backward Compatibility - no pre-flight requests for the requests with the following headers:
        • application/x-www-form-urlencoded
        • multipart/form-data
        • text/plain
        or for the following HTTP requests:
        • HTTP GET
        • HTTP POST

    * it makes sense to not to implement CORS on each application but infrastructure-wide in your API-Gateway for example.

    * warp already supports CORS right out of the box.




