# JavaScript Runtimes

## Introduction

* `JavaScript runtime environment` are containers implementing the runtime functionality required to execute JavaScript programs.

    1. __JavaScript Engine__ - `V8`, `Spider Monkey`, `Nitro`, etc. Parse, compile, optimise `JavaScript`.

        1. __JS Engine Components__ - `Stack`, `Heap`, `Queue`, 
    
    2. __Event Loop__.

    3. __Web  / External APIs__ - Timers, sockets, DOM. and other functionality out

    4. __Non-blocking IO Primitives__

    5. __Package Ecosystem__ - `npm`, `yarn`, `bower`, etc.

* `JavaScript runtimes` can be:

    * __Browser based__ - Firefox, Chrome, Safari, etc.

    * __System based__ - Node.js, Deno.


* `JavaScript runtimes` by default are `asynchronous` and`single-threaded`

    * Some `browser runtimes` allow several `webworker threads`.

    * Some `system runtimes` allow `non-blocking io sockets` for implementing `web servers`.


* `JavaScript runtimes` can `interact`:

    * A `web worker` or a cross-origin iframe has its own `stack`, `heap`, and `message queue`.

    * A `cross-origin iframe` has its own `stack`, `heap`, and `message queue`.

---

## JavaScript Runtime Components

1. __Stack__ - Contains the `stack frames` of the executing `functions`.

    * Each time a new function is `called` a new `frame` is created along with it's `parameters` and `local variables` and `pushed` onto the `stack`.

    * When a `function returns` the `frame` is popped from the stack.

2. __Heap__ - Contains the `objects` referenced by the executing `stack`.

    * Each time a new object is created it is allocated on the `heap`.

3. __Event Queue__ - Contains a list of `messages` to be processed. 

    * Each `message` has an associated `function` which gets called in order to `handle the message`.

        * `events` are messages.

        * `callbacks` are `event handling callbacks`.
    
    * Each `message` is _processed to completion_. This make it easy to understand, but, long running events can block other events.

        * `message handling` should be short.
    
    * New `messages` can be added any time (an `event` occurs).

5. __Event Loop__ - `JavaScript` has a `concurrency model` based on an `event-loop`, `events` and `callbacks`.

    * The `event-loop` is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

    * `Event processing` never blocks.

5. __Web / External APIs__ - A set of APIs for performing tasks that are provided by the `Browser runtime` or `System runtime`.

    * __General__

        * __Timing__ - `setTimeout`, `setInterval`.

        * __Web Workers__

        * __Web Sockets__

    * __Web Browsers__

        * __DOM__ - `document object model`.

        * __AJAX__
    
    * __System__

        * __Non-blocking I/O sockets__

---

## References

* [EventLoop - Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

* [Event Loop - Node.js](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#what-is-the-event-loop)

* [JavaScript Runtime Environment](https://medium.com/@olinations/the-javascript-runtime-environment-d58fa2e60dd0)

* [Weird Awesome JavaScript](https://aseemrb.me/posts/weird-awesome-javascript/)

* __Node.js - Under the Hood__

    1. [Intro and C++ Bindings](https://dev.to/khaosdoctor/node-js-under-the-hood-1-getting-to-know-our-tools-1465)

    2. [JavaScript Runtime](https://dev.to/khaosdoctor/node-js-under-the-hood-2-understanding-javascript-48cn)

    3. [Event Loop](https://dev.to/khaosdoctor/node-js-under-the-hood-3-deep-dive-into-the-event-loop-135d)