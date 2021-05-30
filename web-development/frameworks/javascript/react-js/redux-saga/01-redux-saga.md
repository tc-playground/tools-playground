# Redux Saga

## Introduction

* `redux saga` is a library that aims to make application `side effects` (i.e. `asynchronous` things like data fetching and `impure` things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

* A `saga` is like a separate __thread__ in your application that's solely responsible for a `side effect`.

* `redux-saga` is a `redux middleware`, which means this __thread__ can be started, paused and cancelled from the main application with normal redux actions.

* `redux sagas` use (ES6) `generators` to make those asynchronous flows easy to read, write and test.

* `redux sagas` are an alternative to `redux thunk` for data fetching.

---

## References

* [Home](https://redux-saga.js.org/)

* [Git Hub](https://github.com/redux-saga/redux-saga)

* [Resources](https://redux-saga.js.org/docs/ExternalResources.html)

