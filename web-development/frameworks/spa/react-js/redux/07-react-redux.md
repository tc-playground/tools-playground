# react-redux

## Introduction

* `React` is a stand-alone library that does not need to be used with `Redux`.

* `Redux` is a stand-alone library that does not need to be used with `React`.

* `react-redux` is a library to help integrate `react` and `redux` when they are used together.

    * __Install__ - `npm install --save react-redux`



---

## Provider

* The `provider` is a `react-redux` component.

* The `provider` is the sole owner of the `redux store`.

    * > NB: The `redux store` is modified by the `redux reducers`.

* The `provider` encapsulates the top-level `react application` component.

---

## Connector

* A `connector` is attached to the `provider` and a `react component`.

* The `connectors` set up a direct __communication channel__ between the `provider` and a `react component` via the `context` system. `State` cawn be passed to the component as `props`.

* The `connectors` also associate with `action creators` and a `react component`. These are passed to the `react component` as `props`. These can then `dispatch` action events to the reducers.

* A `connector` is a function.

---

## Notes

* When using `redux` there are often more `functional components` as `redux` is handling the state.
