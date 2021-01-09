# Event Loop

## Introduction

* Each `thread` in a browser has a dedicated `event loop`.

    * All `windows` on the same origin. 
    * Each `web worker`.
    * Each `service worker`.

* The `browser event loop` has `3 paths`:

    1. __Main Event Loop Path__

    2. __Task Path__ - Handle `tasks` from the `Task Queue` (and additional `Microtasks`).

    3. __Render Path__ - Handle `Animation Frame tasks` from the `Animation Frame Queue` and perform rendering.

* The `browser event loop` has `3 queues`:

    1. __Task Queue__

        * e.g. `setTimeout()`, `setInterval()`, user actions, running scripts.

        * Scripts run as part of a task.

        * __Processing__

            * Only the first queued `task` is taken and __processed to completion__. 
            
            * Any new resulting `tasks` are just added to the queue.

            > Therefore, if the `task` never finishes the browser will lock.

    2. __Microtask Queue__

        * e.g. `queueTask()`, Promise callbacks, Mutation events (`DOMNodeInserted`, etc).

        * Executed when the JavaScript `stack` is empty.

            * Including during `task` and `render` execution paths.

        * Only executed if the JavaScript `stack` is empty.

        * __Processing__

            * All queued `micro-tasks` are taken and __processed to completion__.

            * Any new resulting  `micro-tasks` are added to the queue and __processed to completion__.

            > Therefore, if a new `micro-tasks` are added at the same rate they are added then the browser will lock.

    3. __Animation callback Queue__

        * e.g. `requestAnimationFrame()`, `getComputedStyle()`.

        * Execute as periodic `frames` as part fo the `render path`.

        * __Processing__

            * All current animation-tasks are taken and __processed to completion__. 

            * Any new resulting animation-tasks are added to the queue. They are handled in the next frame.

* To run optimally, scripts should executed on the right part of the event-loop.

---

## Event Loop Execution Paths

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

            * `R` - Execute `requestAnimationFrame` callbacks.

            * `S` - Style calculations.

            * `L` - Layout calculations. Creating render tree. Figuring out where things are positioned on the page.

            * `P` - Painting. Painting the result.

* The implementation of a browsers `event loop` determine the `deterministic ordering` of operations.

---

## Web Browser Event Loop Queues

* Each 'thread' gets its own event loop, so each web worker gets its own, so it can execute independently, whereas all windows on the same origin share an event loop as they can synchronously communicate.

* An event loop has multiple task sources which guarantees execution order within that source (specs such as IndexedDB define their own).

1. __Task Queue__

* `Tasks` are scheduled so the browser can get from its `internals into JavaScript/DOM` land and ensures these actions happen sequentially.

* Between tasks, the browser may `render` updates. 

* `Tasks` are created for

    * __User Actions__ - `DOM events` e.g. `mouse click`.

    * __Browser Actions__ - `Parsing HTML`, `setTimeout`.


2. __Microtask Queue__

* `Microtask` usually scheduled for things that should happen straight after the currently executing script, such as reacting to a batch of actions, or to make something async without taking the penalty of a whole new task.

* `Mutation Events` and `Mutation Observers` on the `DOM` were the reason for the Microtask queue (c. 1990s)

* Item Only run when the JS stack is empty.

* The microtask queue is processed after callbacks as long as no other JavaScript is mid-execution, and at the end of each task

* Any additional microtasks queued during microtasks are added to the end of the queue and also processed.

* Microtasks include `mutation observer callbacks`, and as in the above example, `promise callbacks`.

* Once a promise settles, or if it has already settled, it `queues a microtask for its reactionary callbacks`. 

3. __Request Animation Queue__

    > HINT: Use `RAF` where possible instead of `setTimeout()` to frame callbacks betters.

---

## References

* __Jake Archibald__

    * [In The Loop - JSConf.Asia](https://www.youtube.com/watch?v=cCOL7MC4Pl0)

    * [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

* __Phillip Roberts__

    * [What the heck is the event loop anyway? - JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

    * [Loupe - How JavaScript's call stack/event loop/callback queue works](http://latentflip.com/loupe/)




