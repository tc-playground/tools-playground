# Redux Middleware

## Introduction

* `Middleware` in `redux` are a set of functions that exist inbetween the `dispatch` and `reducers` phase of the `redux-cycle`.

* `Middleware` is a function that gets called with every `action` `dispatched`.

* `Middleware` has the ability __stop__, __modify__, and, generally mess around with `actions`.

* There are lots of different types of `Middleware` for doing different things.

* `redux-thunk` is a `middleware` that lets us deal with actions relating to `asynchronous requests` to ensure that data is fetched before being passed to the `reducers`.

---

## Redux Cycle with middleware

* `Action creator`

* `Action`

* `dispatch`

* __`Middleware`__

* `Reducers`

* `Store state`

---

## Example - Redux  Action Creator Middleware Function

* `dispatch()` and `getState()` are passed in to allow re-flows after modification.
    ```javascript
    export const fetchPosts = () => {
        return async function(dispatch, getState) {
            const response = await jsonPlaceholder.get("/posts");
            dispatch({
            type: "FETCH_POSTS",
            payload: response
            });
        };
    };
    ```

---

## Example Middleware

* `redux-thunk`

* `console log`

