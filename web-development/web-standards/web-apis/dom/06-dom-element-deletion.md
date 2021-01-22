# Element Deletion

## Overview

* `Elements` can be updated directly by `finding` them with a `selector`.

* `Elements` can be __deleted__ using `removeChild` can be used to attach the new node to the DOM.

    * Parents, siblings, and children can be traversed to find the correct place in the DOM.

* `Attributes` can be __deleted__ using the `item.removeAttribute('name')` function.

---

## Example

```js
const heading = document.findElementById('heading-id');
document.removeChild(heading);
```