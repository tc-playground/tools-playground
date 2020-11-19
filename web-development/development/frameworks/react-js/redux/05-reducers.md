# Redux Reducers

## Introduction

* `reducers` accept `actions` (from `action creators`).

* `reducers` produce `state` to add to the `store`.

* `reducers` are **contained** by the `redux store`.

* `reducers` are fed ``action creator` `actions` via the `dispatch` method and __generate a new state__ from the current state.

* `reducer` prototype:
  ```
  const INITIAL_STATE = {
      lastAction: null
  };

  export default ( state = INITIAL_STATE, action ) => {
      switch (action.type) {
          case 'ACTION_01':
              return { ...state, lastAction: 'A1' };
          case 'ACTION_02':
              return { ...state, lastAction: 'A2' };
          default:
              return state;
      }
  }
  ```

---

## Rules of Reducers

1. `reducers` **must return a value**, but, must not return **undefined**.

2. `new state` is only produced using the `previous state` and an `action`.

   - The first time a reducer is called it is `undefined` **unless the state is initialised**.

3. `reducers` must not 'reach outside' to decided what value to return. `reducers` are **pure**. For example a reducer may not:

   - Make an API request.
   - Access the DOM.
   - etc.

4. `reducers` must not mutate it's input state argument. Instead create a new **copy** of the state and mutate that.
   - Do not mutate `arrays` or `objects`.
     > NB: In JavaScript `strings` and `numbers` are immutables values.
     > NB: ``React`will only`render` state that has changed.

---

## Examples

### `. Dummy Reducer

```javascript
import { combineReducers } from "redux";

export default combineReducers({
  // Dummy reducer to remove initial errors.
  dummy: () => {
    return false;
  }
});
```

---

## Redux Reducers - Common Functions

* `dispatch()`

* `combineReducers()` - Used to compose a set of `reducers` and `dispatch()` each `action` to all of them. 
  ```javascript
  import { combineReducers } from "redux";

  export default combineReducers({
    noop: () => {
      return 'noop';
    },
    reducer1: reducer1(),
    reducer2: reducer2()
  });

  ```

