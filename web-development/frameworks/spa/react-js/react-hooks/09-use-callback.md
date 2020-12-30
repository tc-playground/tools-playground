# React useCallback Hook


## Introduction

* The `useCallback` hook is used to _optimise performance_.

* The `useCallback` hook is a `memoized` version of the callback function that only changes if one of the `dependencies` has changed.

* The `useCallback` hook can be used to cached a memoized version of a function and return that when it is not changed.

    * This is important for `functional components` where a function may be defined in the context of a `functional component`.

* The `useCallback` hook is used when passing callbacks to optimised child (use `React.memo()`) components that rely on reference equality to prevent unnecessary renders.


---

## Example


---

## References

* [useCallback API](https://reactjs.org/docs/hooks-reference.html#usecallback)
