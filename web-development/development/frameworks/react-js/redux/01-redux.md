# Redux

## Introduction

* `Redux` is a predictable state container for JavaScript apps.

* `Redux` is an __architectural pattern__. It is theoretically not `React` or `JavaScript` specific.

* `redux` is an npm JavaScript library for Redux.

    * __Install__ - `npm install --save redux`

* `redux` adds `middleware` capabilities.

* `redux` defines a `dispatch` function that acts like a funnel to accept `actions` from an `action creator` and pass it through through the `middleware` and onto the correct `reducers` which then update the `provider` `store` state.

---

## [Redux Store](https://redux.js.org/basics/store)

* In `Redux`, there is a single `store` that holds the whole application state.

* In `React-Redux`, the `props` for a component are defined in `mapStateToProps`.

--- 

## Redux Cycle

```
[Action Creator] -> [Action] -> [Dispatch] -> [Reducers] -> [State (store)] ... action creators
```

1. __`Action Creator`__ - The entity (function) that creates the `action`, for example, a web page component, or, function.

    * `Action creators` are the __only way to change state__ in a `redux` app.


2. __`Action`__ - A type of event that consists of a `type` and `payload`.
    
    * __`Type`__ - This is used in a `reducer` to process the `payload`. It is the operation to be performed.

    * __`Payload`__ - The data to be used in the operation.


3. __`Dispatch`__ - A special `dispatch` __function__ that wraps a set of `reducers` and sends a copy of the incoming `action` to all of them.


4. __`Reducer`__ - A big switch statement. A reducer takes an `action payload` and performs operation based on the `action type`.

    * `combineReducers()` - is used to combine a collection of `reducer functions`.


5. __`State` (Redux Store)__ - The state (the `redux store`) is updated with the result of the `reducer`.

    * `createStore()` is used to create the initial store.

    * `state` can only ever be changed through the `Action creator`, `action`, `dispatch`, `state` flow.

    * >NB: `react` will render any components that have changed.

---

## Functional API

* `redux`
    * `createStore()`
    * `combineReducers()`
    * `applyMiddleware()`
    * `dispatch()`

* `react-redux`
    * `mapStateToProps()`
    * `connect()`

---

## Simple Tutorials

* [Redux Beginner Guide](https://www.valentinog.com/blog/redux/)
* [Redux Tutorial](https://www.robinwieruch.de/react-redux-tutorial/)
* [Redux- How it Works](https://www.youtube.com/watch?v=3sjMRS1gJys) - YouTube - Insurance Company Example.
* [Redux - Simple App](https://www.youtube.com/watch?v=kJeXr1K3nyg) - YouTube

---

## Advanced Tutorials

* [Redux Thunk](https://www.youtube.com/watch?v=1QI-UE3-0PU) - Asynchronous Redux.


---

## References

* [Redux Home](https://redux.js.org/)
* [Redux Starter Kit](https://redux-starter-kit.js.org/)
* [React Redux](https://react-redux.js.org/)
