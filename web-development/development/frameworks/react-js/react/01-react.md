# React

## Introduction

`React` is a JavaScript library for building user interfaces. `React` reacts to **state changes** in an application.

---

## Overview

- `React` provides composable `components` (a.k.a `elements`).

  - `React components` are pure JavaScript/TypeScript.

    - `React components` can be defined as a `class` {extending `React.Component`}.

    - `React components` can be defined as a `function`.

  - `React components` can be rendered using `jsx` using the `render()` function.

  - `React components` can be used as HTML tags and extend the HTML vocabulary.

  - `React components` can handles feedback from the user using `event handlers`.

  - `React components` can use the `ES2015` module `import` statement via `webpack`.

* `React applications` can be composed from a set of `React components`.

  - `React applications` are a **tree of components**.

  - `React applications` have a `root component` that represents the entire application.

- `React` has a `virtual DOM` that is defined by the tree of React components.

  - `React components` have a `render()` function that defines the virtual DOM elements.

  - `React components` in the `virtual DOM` are mapped to `browser DOM` elements`.

  - `React components` are mapped via the name of the component to provide custom HTML tags/elements.

  - `React components` returned from `render()` can be created using JavaScript/TypeScript via `React.createElement()`.

  - `React components` returned from `render()` can be created using `jsx`/`tsx`. If so, they are transpiled to JavaScript.

* `React` continuously `synchronises` the virtual DOM and physical DOM.

  - `React` reacts to **state changes**.

  - Changes just need to be made to the `react components` (virtual DOM elements) via the `render()` method.

  - The is no need to manually update the DOM via the DOM API (or jQuery, etc).

- `react components` have local `state` model.

---

## Examples

### Basic React Class Component

```javascript
class AComponent extends Component {
  state = {};

  render() {
    return <div>Hello World!</div>;
  }
}
```

### Basic Reaction Function Component

```javascript
const App = function() {
  return <div>Hello World!!</div>;
};
```

### Basic React `index.html`

The root element of the React application.

```html
<html>
  ...
  <div id="root"></div>
  ...
</html>
```

### Basic React JSX Transpilation

ES6, ES5, JSX, TypeScript, TSX, etc. get transpiled to JavaScript.

```jsx
const element = <h1>Hello World!</h1>;
```

... becomes ...

```javascript
"use strict";
var element = React.createElement("h1", null, "Hello World");
```

### Raw React DOM Example

```javascript
import React from "react";
import ReactDOM from "react-dom";

// Create an element. NB: Could also use JSX here.
// const element = <h1>Hello World!</h1>;
const element = React.createElement("h1", null, "Hello World!");

// Render the virtual DOM element to a location on the browser DOM.
ReactDOM.render(element, document.getElementById("root"));
```

### Basic React Component

1. `App.js` component snippet.

   ```javascript
   // Import the base react component.
   import React { Component } from "react";

   // Create a basic React component class.
   class App extends Component {
       state = {};
       // Render a JSX element.
       render() {
           return <h1>Hello World!</h1>
       }
   }

   export default App;
   ```

2. `index.js` - render the App into `index.html` element.

   ```javascript
   ReactDOM.render(<App/>, document.getElementById("root");
   ```

### Bootstrap Installation

1. Install.

```
npm install bootstrap
```

2. Import into `index.js`.

```javascript
import "bootstrap/dist/css/bootstrap.css";
```

---

## Development Tools

- `create-react-app` - A cli tool for generating a react application scaffold for JavaScript or TypeScript.

  ```
  npm install -g create-react-app
  ```

- Visual Studio Code [`Simple React Snippets`](https://github.com/burkeholland/simple-react-snippets) - Snippets for JavaScript react.

- Visual Studio Code [`Prettier`](https://github.com/prettier/prettier-vscode) - Code formatting for JavaScript, TypeScript, and, CSS.

- [Babel](https://babeljs.io/repl) - Babel JavaScript transpiler playground.

---

## Tutorials

- [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [Mosh React JavaScript Tutorial](https://www.youtube.com/watch?v=Ke90Tje7VS0)

---

## References

- [React Home](https://reactjs.org/)
