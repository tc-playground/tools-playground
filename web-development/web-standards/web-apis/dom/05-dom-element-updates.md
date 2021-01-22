# Element Updates

## Overview

* `Elements` can be updated directly by `finding` them with a `selector`.

* `Elements` can be __added__ using `appendChild` can be used to attach the new node to the DOM.

    * Parents, siblings, and children can be traversed to find the correct place in the DOM.

* `Elements` can be __replaced__ using `replaceChild` can be used to replace the new node in the DOM.

    * Parents, siblings, and children can be traversed to find the correct place in the DOM.

* `Elements` can be __deleted__ using `removeChild` can be used to attach the new node to the DOM.

    * Parents, siblings, and children can be traversed to find the correct place in the DOM.

* Existing `elements` and `attributes` can be updated directly:

    * `className`, `innerHTML`, etc.

---

## Example

```js
const heading = document.findElementById('heading-id');
const newHeading = document.createElement('h1');
document.replaceChild(heading, newHeading);
```
