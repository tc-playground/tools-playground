# Async Actions

## Introduction

* `async action` are long running actions that are managed with a `promise.` For example, fetching remote data from an API.

* `async actions` are often required when `Action creators` need to fetch data when a `react component` is loaded or updated.

--- 

## General data-loading process with `redux`

1. `React component` is rendered on screen.

2. React component's `componentDidMount()` life-cycle handler is called.

3. Invoke an `action creator` from `componentDidMount()`.

4. Action creator makes HTTPRequest for data.

5. API responds with data.

6. Action creator returns an `action` with the returned data as the `payload`.

7. Some `reducer` sees the action and returns the data off the payload.

8. Because a new `state` object is generated, `redux/react-redux` causes the React component to be re-rendered."

---

## Asynchronous Action Creators

1. `Synchronous Action creators` must return __plain JS objects__ with s `type` property.

2. Any data must have been fetched __before__ the action is passed off to the `reducer`. 

3. `redux-thunk` middleware can relax these rules to allow `action creators` to return `functions` that return the `action object`. This allows aync to be handled. 