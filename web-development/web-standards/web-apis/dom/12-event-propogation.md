# Event Bubbling

## Introduction

* __Event Bubbling and Capturing__ - Up the DOM Tree

    * An `event` on a `DOM Element` is always propagated to all parent element.

    * An `event` for a particular element can be `captured` by looking at the event `target` (origin).

* __Event Delegation Pattern__ - Down the DOM Tree

    * It is expensive to add `listener` to large lists of `DOM Elements`.

    * It is hard to add `listeners` to dynamic list of `DOM Elements`.

    * `Event Delegation` places a single `listener` on a parent `DOM Element`.

        * The `handler` performs logical on the `event target` to determine the logic to perform.

        ```js
        if (e.target.parentElement.classList.contains('target-class')) {}
        ```

        > Capturing

* __Default Behaviours__

    * Some `events` have `default behaviours` that are automatically perform by the browser.

    * They can be prevented with the `e.preventDefault()` method so set metadata on the event. 

---

## Default Behaviours

* Some `DOM Event` have __default behaviours__ automatically lead to certain actions performed by the browser.

    * Examples:

        * A click on a `link` – initiates navigation to its URL.

        * A click on a `form submit button` – initiates its submission to the server.

        * Pressing a mouse button over a text and moving it – selects the text.

    * `e.preventDefault()` can be used to prevent these default behaviour occuring.

---

## References

* [Bubbling and capturing - The Modern JavaScript Tutorial](https://javascript.info/bubbling-and-capturing)

* [Event Propagation Explained](https://www.sitepoint.com/event-bubbling-javascript/)

* [Event Delegation Pattern](https://javascript.info/event-delegation)

* [Browser default actions](https://javascript.info/default-browser-action)

* [Event.preventDefault() - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
