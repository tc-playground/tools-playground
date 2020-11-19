# Redux Actions

## Introduction


---

## Rules of Actions

* `actions` __must__ have a `type` property.

    > NB: Unless relaxed with `middleware` e,g, `redux-thunk`.

* `actions` __may optionally__ have a `payload` property.

---

## Notes

* `Action creator` `actions` must be sent to the `dispatch()` function on the `redux store`.

* The `dispatch()` function on the `redux store` with copy the action and pass it into all `reducers`.

* The `react-redux` `connection()` function can be used to link a `react component` with the `redux store` `dispatch` function. 