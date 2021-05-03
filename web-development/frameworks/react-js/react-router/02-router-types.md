# React Router Types

## Introduction

* `react-router` has 3 different router types. Each handles updating the browser `url` in a different way.

* The different router types handle different `deployment` case, for example, when the react application is installed on a traditional webserver:

    * For the `react development server` if a path is not found `index.html` is returned. The routing is then performed in the browser via the react-router `History` and `BrowserRouter` objects.

    * For a `traditional (RQ/RS) server` if a path is not found a `404` is returned. So routing to `BrowserRouter` managed path will fail. 
    
    NB> A traditional can be configured to always return `index.hml` for the `TLD/#` or `TLD` paths and the appropriate router used to solve the `404` issue.

---

## BrowserRouter

* `Browser Router` uses everything after the `top-level domain` (`TLD`) as the `path`:
    * `localhost:3000/page2` => `/page2`

* Parts of the `url` after the TLD are updated when navigating through components.

---

## HashRouter

* `HashRouter` uses everything after a `#` as the `path`.
    * `localhost:3000/#/page2` => `/page2`

* The '#' is injected into the `url` automatically.

* Only parts of the `url` after the `#` are updated when navigating through components.

* Useful when you have no control of the server routing rules.

---

## MemoryRouter

* `MemoryRouter` does node use `urls` to track navigation.

* The `url` is never updated when navigating through components.

* Useful when you have control of the server routing rules.