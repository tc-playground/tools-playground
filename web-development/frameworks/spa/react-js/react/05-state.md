# React `state` system.

## Introduction

---

## Overview

* `state` is only useable with `class components`.

    * > __NB__: Or by using the `hooks` system.

* `state` is a JavaScript object associated with a `component`.

* `state` changes cause the associated `component` to `re-render.`

* `state` must be initialised when a component is created.

* `state` can only be updated via the component `setState()` method.

* `setState(state)` __MUST__ be used to update the state.

* `setState(state)` is __additive__. The new state is merged over the old state. Nothing is deleted.

* `setState(state)` is __ASYNCHRONOUS__.

* `state` is __NOT the same as__ `props`.

* `state` can passed from a `parent component` to a `child component` as `props`.

---

## Shared State

* `react` components exist in hierarchy.

* If different `react` components need to share state; then that state needs to be managed by a `common parent` in the hierarchy.

* The `common parent` holds the state and passes the state down through the `common ancestors` in the hierarchy to the `children` using `props`.

* In `react` state can only be updated with the `setState()` method.

* If the state need to be modified by a `child component` then the `common parent` needs to also pass a `callback` function down through the `props` to the child components that need to mutate state.

