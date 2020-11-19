# React Hook System

## Introduction

* `react hooks` - provide a mechanism for sharing logic between components.

  * Hooks are a way to reuse `stateful logic`, not `state` itself. 

* `react hooks` - provide a mechanism to add `state` to `functional components`.

* `react hooks` - provide a mechanism to add `life-cycle` methods to `functional components`.

---

## Functional Component

* `Functional Components` - use a simple JavaScript function in-order to generate `jsx`.

  ```javascript
  const App = props => {
      return <div>Hello {props.name}!</div>
  };
  ```

* In contrast to `class based components` (`React.Component`) that participate in `state`, `life-cycle` and `rendering` operations.

* Instead, a function can chose to participate in various `hooks` by importing them and invoking them in-line.

---

## Basic React Hook Functions

* `useState` - Returns a stateful value, and a function to update it.

  * e.g. Update a counter when a button is clicked.

* `useEffect` - Accepts a function that contains imperative, possibly effectful code. 

  * e.g. Fetch data from and API when a view is mounted.

---

## Updating State - `useState` Hook Example

```javascript
import React, { useState } from "react";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>
          Post
        </button>
        <button onClick={() => setResource('todos')}>
          Todos
        </button>
      </div>
      {resource}
    </div>
  );
};

export default App;
```

1. `useState` get the initial state (with default) and setter function.

2. `resource` is the de-structured `state`

3. `setResource` is the state setter.

---

## Fetching Data - `useEffect` Hook Example

```javascript
import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResource] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResource(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return <div>{resources.length}</div>;
};

export default ResourceList;

```

* `useEffect(func, state)` - Executes the specified function __IFF__ the defined state changes.

    * `useEffect(func)` - __Run every time state is changed.__ Not specifying the state might cause the function to execute repeatedly (if some state is set by the function).

    * `useEffect(func, [])` - __Run once.__ Specifying an empty array, will cause the function to be executed once (like with `componentDidMount`).

    * `useEffect(func. [state])` - __Run conditionally.__ Specifying state, will cause the function to only execute when the state has changed.

---

## References

* [Introducing React Hooks](https://reactjs.org/docs/hooks-intro.html)

* [Overview: React Hooks](https://reactjs.org/docs/hooks-overview.html)

* [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)

* [Hooks Intro - YouTube](https://youtu.be/dpw9EHDh2bM)

* [React Hooks Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A)

* [Valentino Gagliardi - React Hooks](https://www.valentinog.com/blog/hooks/)


