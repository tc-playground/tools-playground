# Action Creator

## Introduction

* `action creators` can be used to fetch data, or, create an action to fetch data (e.g. `redux-sagas`).

* `Action creators` come in two types:

    * `Synchronous action creators` - Instantly returns an action with data ready to go.
    
    * `Asynchronous Action creators` - Takes some amount of time to get the data.

---

## Rules of Action Creators

1. `Action creators` must return `actions`:  __plain JS objects__ with s `type` property.

    * `actions` __must__ have a `type` property.

        > NB: Unless relaxed with `middleware` e,g, `redux-thunk`.

    * `actions` __may optionally__ have a `payload` property.

        > NB:  Any data in an `action` must have been fetched __before__ the action is passed off to the `reducer`.