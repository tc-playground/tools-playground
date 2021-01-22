# Element Creation

## Overview

* `Elements` can be updated directly by `finding` them with a `selector`.

* `Elements` can be __created__ using the `create` to create new nodes:

    * `createElement`

    * `createTextNode`

* `Attributes` can be set:

    * `setAttribute`

* `Elements` can be __added__ using `appendChild` can be used to attach the new node to the DOM.

    * Parents, siblings, and children can be traversed to find the correct place in the DOM.

* Existing `elements` and `attributes` can be updated directly:

    * `className`, `innerHTML`, etc.

---

## Examples

```js
const ul = document.querySelector('ul');
const li = document.createElement('li');
li.id = 'new-item';
li.setAttribute('title', 'New Item');
li.appendChild(document.createTextNode('New Item'));
ul.appendChild(li);

const link = document.querySelector('a');
link.className = 'delete-item';
link.innerHTML = '<i class="remove"></i>';
li.appendChild(link);
```