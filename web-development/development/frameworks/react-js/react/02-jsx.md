# JSX

## Introduction

* `jsx` (__JavaScript XML__) is `HTML-like` code embedded inside JavaScript.

* `jsx` needs to be `transpiled` into (ES5) JavaScript.

* `jsx` is often used in `React` based applications. 

    * A tree of `jsx tags` is transpiled into a tree of `React.createElement()` JavaScript calls.

---

## Notes

* `jsx` element `style` uses a different syntax (than `html`). It uses a _JavaScript Object expression_ syntax:

    * HTML
        ```html
        <button style="background-color: blue; color: white;">Submit</button>
        ```

    * JSX
        ```html
            <button style={ {backgroundColor: 'blue', color: 'white'} }>Submit</button>
        ```

* `jsx` element `class` uses a different syntax (than `html`):

    * `jsx` uses the HTML attribute `className` instead of `class` (to prevent clashes with HTML `class`). NB: This may not be required in the future.

    * HTML
        ```html
        <label class="label" for="name">Enter name:</label>
        ```
    
    * JSX

        ```html
        <label className="label" htmlFor="name">Enter name:</label>
        ```
    * `jsx` has several other `invalid properties`due historical usage. For example: `for` becomes `htmlFor`. These can be debugged using the console.

* `jsx` can reference JavaScript `variables` and `functions` via the `curly brace` (`{ ... }`) syntax:
    * JSX

        ```javascript
        const App = () => {
            const buttonText = { text: "Click Me!"};
            return ( 
                <div>
                    <button style={ {backgroundColor: 'blue', color: 'white'} }>
                        {buttonText.text}
                    </button>
                </div>
            );
        };
        ```
    * __NB: <span style="color:red">You cannot reference a JavaScript object__</span>:

        ```javascript
        const App = () => {
            const buttonText = { text: "Click Me!"};
            return ( 
                <div>
                    <button style={ {backgroundColor: 'blue', color: 'white'} }>
                        {buttonText}
                    </button>
                </div>
            );
        };
        ```
        
        ```
        Objects are not valid as a React child (found: object with keys {text}). If you meant to render a collection of children, use an array instead.
        ```

---

## Conditional Views

---

## Lists and Looping

* `List` components and other forms of looping are handle in `jsx` with standard JavaScript, TypeScript, etc.

    ```javascript
    import React from "react";

    const ImageList = props => {

        const images = props.images.map(image => {
            return <img key={image.id} src={image.urls.regular}/> 
        });

        return (
            <div>{ images } </div>
        )
    }

    export default ImageList;
    ```

* unique `key props` should be specified for each `item` in a list. This is to allow `react` to know when items are added, removed, or updated. This allows it to efficiently render the list as it only needs to render items that have changed.

---

## References

* [JSX Intro](https://reactjs.org/docs/introducing-jsx.html)

* [JSX in Depth](https://reactjs.org/docs/jsx-in-depth.html)

* [Babel Repl](https://babeljs.io/repl) - Play with transpilation.