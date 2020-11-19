# Redux DevTools Extension

## Introduction

* `redux-devtools-extension` is an extension/plugin for `chrome`, `electron`, and `firefox`.

* `redux-devtools-extension` allows you to view the `redux-store` at any time (`time-travel`).

---

## Configuration

* `redux-devtools-extension` also requires some `redux middleware` to provide `application hooks`:

    ```javascript
    ...
    import { createStore, applyMiddleware, compose } from "redux";
    ...
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(...Middleware))
    );
    ...
    ```

---

## Usage

* __Change State__

    * Select `state tab` in `right panel`.
    
    * Select required `redux action` in `left panel` and click `jump`.

    > NB: This will actually __change the state of the redux store__.

---

## References

* [Home](http://extension.remotedev.io/)

* [GitHub](https://github.com/zalmoxisus/redux-devtools-extension)