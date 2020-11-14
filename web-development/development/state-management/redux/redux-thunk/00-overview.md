# redux-saga

## Introduction

* `redux-thunk` is a `side-effects` library for Redux.

    > NB: Alternative redux libraries include: `redux-observable` (reactive programming), `redux-saga` (generators), `vanilla dispatch`.

* `redux-thunk` uses `thunks`.

* `thunks` delay the execution of a function. They do this by wrapping them in another function that is executed at a later date.

* A `thunk` is a `function` that acts as a wrapper in which it `wraps an expression to delay its evaluation`. 

* `thunk` allows to write an `action creators` that return a `function` instead of the typical `action object`.

---

## Articles

* [Generator function and Redux saga](https://code.likeagirl.io/generator-function-and-redux-saga-b1c531b6c56d)

* [Redux-Thunk vs. Redux-Saga](https://medium.com/@shoshanarosenfield/redux-thunk-vs-redux-saga-93fe82878b2d)

* [Why you need no Redux Saga](https://medium.com/slido-dev-blog/why-you-need-no-redux-saga-4d4dc46e448)

---

## References

* [Redux Saga - Home](https://redux-saga.js.org/)

