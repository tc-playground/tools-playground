# Event Loop

## Introduction

---

## Web Browser Event Loops

* Each 'thread' gets its own event loop, so each web worker gets its own, so it can execute independently, whereas all windows on the same origin share an event loop as they can synchronously communicate.

* An event loop has multiple task sources which guarantees execution order within that source (specs such as IndexedDB define their own)

* __Task Queue__

* `Tasks` are scheduled so the browser can get from its `internals into JavaScript/DOM` land and ensures these actions happen sequentially

Between tasks, the browser may `render` updates. 

Getting from a `mouse click` to an event callback requires scheduling a task, as does `parsing HTML`, and in the above example, `setTimeout`.

* __Microtask Queue__

* `Microtask` usually scheduled for things that should happen straight after the currently executing script, such as reacting to a batch of actions, or to make something async without taking the penalty of a whole new task.

* The microtask queue is processed after callbacks as long as no other JavaScript is mid-execution, and at the end of each task

* Any additional microtasks queued during microtasks are added to the end of the queue and also processed.

* Microtasks include `mutation observer callbacks`, and as in the above example, `promise callbacks`.

* Once a promise settles, or if it has already settled, it `queues a microtask for its reactionary callbacks`. 


---

## References

* [Loupe - How JavaScript's call stack/event loop/callback queue works](http://latentflip.com/loupe/)

* [In The Loop - JSConf.Asia](https://www.youtube.com/watch?v=cCOL7MC4Pl0)

* [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)