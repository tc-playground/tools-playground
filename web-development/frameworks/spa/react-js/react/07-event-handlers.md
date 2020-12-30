# Event Handlers

## Introduction

---

## Overview

* `events` are normal JavaScript objects.

    * `event.target.value` holds the value of the event.

    * `event.preventDefault()` stops the default elements behaviour.

* `special browser event types`

    * `onClick` - User clicks on something.

    * `onChange` is an event emitted when a component changes. For example, presses a key in a text input box.

    * `onSubmit` - User submits a form. Handle with a function that processes the from data.

* `handler functions`

    * Normally named based on the following prototype `on$ElementType$EventType` for example `onInputChange`.

* `controlled and uncontrolled components`

    * `uncontrolled` - Does not use `state`. To find the value of an element - we need to look in the DOM.

    * `controlled` - Uses `state`. To find the value of an element - we can check it's state.

* `Context` and `Event Handler`: `this`, `bindings` and `arrow functions`.

    * The value of `this` for a function invocation is defined by the object __WHEN__ it is invoked. It is dynamic.
        ```
        myThing = { doThing = function { console.log(this) } };
        myThing.doThing(); // prints `this`.
        myFunc = myThing.doThing;
        myFunc(); // `this` is undefined!
        ```

    * If a function containing a reference to `this` is dereferenced and invoked, it may have an undefined receiver.

    * Using the `function` keyword property is used in a class it will lead a broken value undefined value of `this`.

    * `constructor function binding` can be used to create a new function that is bound to the correct receiver.
        ```javascript
        MyClass {
            constructor() {
                this.myFunc = this.myFunc.bind(this);
            }
            myFunc() {
                return this.myValue;
            }
        }
        ```

    * `arrow functions` automatically bind the function to the correct receiver. NB: Requires `babel` arrow functions.
        ```
        onFormSubmit = event => {
            // Do Stuff.
        }
        ```
    
    * `inlined arrow functions` can also be used. _NB_: You must immediately invoke it to get the bound function.
        ```
        <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
        ```

* __Invoking callback in children__ - `props callback functions` __can be passed down from `parent components` to `child components` to allow them to update parents and share functionality between the children. This includes `event handler function`.


