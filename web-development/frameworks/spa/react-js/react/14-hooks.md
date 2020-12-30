# React Hook System

## Introduction

* `react hooks` - provide a mechanism to add `state` to `functional components`.

* `react hooks` - provide a mechanism to add `life-cycle` methods to `functional components`.

---

## React Hook Functions

* `useState` - Allows a functional component to `use component-level state`.

* `useEffect` - Allows a functional component to `use life-cycle methods`

* `useContext` - Allows a functional component to `use the context system`.

* `useRef`- Allows a functional component to `use the ref system`.

* `useReduce` - Allows a functional component to `store data via a reducer`.


---

## `useState` Hook Example

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

* `useState` get the initial state (with default) and setter function.

* `resource` is the de-structured `state`

* `setResource` is the state setter.

---

## `useEffect` Hook Example

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


