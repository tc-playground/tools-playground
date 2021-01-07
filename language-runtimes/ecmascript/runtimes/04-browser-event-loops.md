# Event Loop

## Introduction

* Each `thread` in a browser has a dedicated `event loop`.

    * All `windows` on the same origin. 
    * Each `web worker`.
    * Each `service worker`.

* Each `event loop` has several queues:

    1. __Task Queue__

        * `setTimeout()`

        * Scripts run as part of a task.

    2. __Microtask Queue__

        * `queueTask()`

        * Only executed when the JavaScript `stack` is empty.

        * Promise Callbacks.

    3. __Request Animation Frame Queue__

        * `requestAnimationFrame()`

        * Execute as periodic `frames` as part fo the `render path`.


* Each `event loop` has several paths of execution:

    * __Main Loop__ - The main loop (when no on a path).

    * __Task Execution Path__

        * `Tasks` - The next task to handle is taken off the `task queue`.
        
            e.g. user actions, browser actions, ...

        * `Tasks` - __Run to completion__

            * e.g. An `infinite loop` on this path will block the browser reaching the `render path`.

    * __Render Execution Path__ 

        * The browser decides when to perform the `render` path. 

            * `1/60` is optimal for `60 Hz` displays.

        * `requestAnimationFrame` is __not__ a `task`. IT created callbacks called in the `render path`.

        * The `Render Path` has several steps:

            * `R` - Execute `requestAnimationFrame` callbacks..
            * `S` - Style calculations.
            * `L` - Layout calculations. Creating render tree. Figuring out where things are positioned on the page.
            * `P` - Painting. Painting the result.

* The implementation of a browsers `event loop` determine the `deterministic ordering` of operations.

---

## Web Browser Event Loops

* Each 'thread' gets its own event loop, so each web worker gets its own, so it can execute independently, whereas all windows on the same origin share an event loop as they can synchronously communicate.

* An event loop has multiple task sources which guarantees execution order within that source (specs such as IndexedDB define their own)

1. __Task Queue__

* `Tasks` are scheduled so the browser can get from its `internals into JavaScript/DOM` land and ensures these actions happen sequentially.

* Between tasks, the browser may `render` updates. 

* `Tasks` are created for

    * __User Actions__ - `DOM events` e.g. `mouse click`.

    * __Browser Actions__ - `Parsing HTML`, `setTimeout`.


2. __Microtask Queue__

* `Microtask` usually scheduled for things that should happen straight after the currently executing script, such as reacting to a batch of actions, or to make something async without taking the penalty of a whole new task.

* `Mutation Events` and `Mutation Observers`.

* The microtask queue is processed after callbacks as long as no other JavaScript is mid-execution, and at the end of each task

* Any additional microtasks queued during microtasks are added to the end of the queue and also processed.

* Microtasks include `mutation observer callbacks`, and as in the above example, `promise callbacks`.

* Once a promise settles, or if it has already settled, it `queues a microtask for its reactionary callbacks`. 

3. __Request Animation Queue__

    > HINT: Use `RAF` where possible instead of `setTimeout()` to frame callbacks betters.

---

## References

* [Loupe - How JavaScript's call stack/event loop/callback queue works](http://latentflip.com/loupe/)

* [In The Loop - JSConf.Asia](https://www.youtube.com/watch?v=cCOL7MC4Pl0)

* [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)