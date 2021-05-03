# Components

## Introduction

* `React components` can be __nested__.

* `React components` are __reusable__.

* `React components` are __configurable__ (when being created).

---

## Overview

* `components` can be defined as a `Class Based Component` by extending `React.Component` and implementing `render()`.

* `components` can be defined as a `Function Based Component` that returns `jsx`.

* `components` exist in a `component hierarchy`.

* The `root component` is rendered.

* `components` can be configured via `props` passed into them when they are created/refreshed.

---

## Function Based Components

* Simple `jsx` generation.

* With no `props`:

    ```
    const App = () => {
        return <div>Hello World!</div>
    };
    ```

* With no `props`:

    ```
    const App = props => {
        return <div>Hello {props.name}!</div>
    };
    ```


---

## Class Based Components

* `jsx` generation.

* `state` model participation. (e.g. Help handle user input)

* `life-cycle` participation. (e.g. Help initialisation.)

* Example (with `props`):
    ```javascript
    class App extends React.Component {
    constructor(props) {
        super(props);
        // NB: State can be initialised directly.
        this.state = { lat: null, errorMessage: "" };
    }

    // Alternative state initialisation method to constructor().
    // state = { lat: null, errorMessage: "" };

    componentDidMount() {
        console.log("componentDidMount...");
        window.navigator.geolocation.getCurrentPosition(
        position => {
            console.log(position);
            // NB: 'this.setState()` is the ONLY way to update state...
            // NB: Setting state is always additive.
            this.setState({ lat: position.coords.latitude });
        },
        err => {
            console.log(err);
            // NB: Setting state is always additive.
            this.setState({ errorMessage: err.message });
        }
        );    
    }    

    render() {
            // NB: Do not put slow calls in render() method!
            //     It may be called a lot!
            // NB: Conditional rendering!
            if (this.state.lat && !this.state.errorMessage)  {
                return <div>Latitude: {this.state.lat}</div>
            }
            if (!this.state.lat && this.state.errorMessage)  {
                return <div>Error: {this.state.errorMessage}</div>
            }
            return <div>Loading...</div>
        }
    }
    ```


---

## Creating new JSX Elements and nested components.

* __Create__ new `jsx` component

    * Create new `jsx` file.

    * Import `react` and required libraries.

    * Define new `React Component` or `function`.

    * Implement `render` or `return block` with new JSX.

    * Configure `props` system.

    * Export the `React Component` / or `function`.

* __Use__ new `jsx` component

    * Import `react` and required libraries.

    * Import the new `JSX`.


---

## References

* [Components and Props](https://reactjs.org/docs/components-and-props.html)



