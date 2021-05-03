# Redux Provider Store

## Introduction

* The `redux provider store` holds the __entire state__ of the application.

* The `store` is created with a set of `reducers`. Only these `reducers` can update the store.

* The `store` is a `redux` component.

---

## Redux Store - Common Functions

* `createStore()` - Used to create a new `redux` store. 
  ```javascript
    import React from "react";
    import ReactDOM from "react-dom";
    import { Provider } from "react-redux";
    import { createStore } from "redux";

    import App from "./components/App";
    import reducers from "./reducers"

    const store = createStore(reducers);

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.querySelector("#root")
    );
  ```

