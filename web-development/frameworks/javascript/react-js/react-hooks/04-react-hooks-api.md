
# React Hooks

## Basic Hooks

* `useState` - Returns a stateful value, and a function to update it.

* e.g. Update a counter when a button is clicked.

* `useEffect` - Accepts a function that contains imperative, possibly effectful code. 

* e.g. Fetch data from and API when a view is mounted.

---

## Specialist Hooks

* `useContext` - Accepts a context object and returns the current context value for that context.

* `useReducer` - Returns a `value`, and a `dispatch function` to update it.

    * Accepts a reducer of type `(state, action) => newState`, and returns the current `state` paired with a `dispatch` method. 

    * An alternative to `useState`.

* `useCallback` - Returns a _memoized_ `callback`.

* `useMemo` - Returns a _memoized_ `value`.

* `useRef` - Use the react `ref` system.

    * Returns a mutable `ref` object whose `.current` property is initialized to the passed argument (`initialValue`). 
    
    * The returned object will persist for the full lifetime of the component.

* `useImperativeHandle` - Customizes the instance value that is exposed to parent components when using ref.

* `useLayoutEffect` - The signature is identical to useEffect, but it fires synchronously after all DOM mutations. 

* `useDebugValue` - Can be used to display a label for custom hooks in React DevTools.

---

## References

* [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)

* [Valentino Gagliardi - React Hooks](https://www.valentinog.com/blog/hooks)

* [React Hooks](https://www.youtube.com/playlist?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A)
