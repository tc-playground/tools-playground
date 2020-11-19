# Intentional Navigation

## Introduction

* `intentional navigation` is where a user intentionally navigate somewhere; e.g. clicks on a `link` or `button`.

* `programmatic navigation` is where the application automatically navigates somewhere; e.g. navigate to a list of resources after a resource has successfully been created.

---

## Intentional Navigation

* `Events`.

---

## Programmatic Navigation

* `Browser Router` injects the `history object` into `react components`.

* For `action creators` / `sagas` the `history object` needs to be passed in; or `created manually` and imported.

---

## List Item Selection Methods

* `Select Reducers` - Use a `selection reducer` that create `state` to record which specific element was selected.

* `URL based Selection` - Use a `url path` with an `identifier` to record which specific element was selected. 

    * `:` - Denotes a url parameter. For example: `/streams/edit/:id`.
    
    * `react-router Routes` - Pass this information to the target `component` as `props`: 

        * `<Route path="/xxx/show/:id" exact component={XXX} />`

        * __Props__ - `history`, `location`, `match`.

---

## React Router and Redux

* With React-Router each component needs to be responsible for ensuring it has the required state in the redux store.

