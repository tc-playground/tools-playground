# Document Object Model (DOM)

## Introduction

* The `DOM` is a tree of `nodes` that map to `HTML Elements`.

* The `DOM` is created from a parsed `HTML` document.

* The `DOM` can be found on the `windows.document` object in a `browser`.

* The `DOM` is object-oriented and nodes contain `properties` and `functions`.

* `JavaScript` can be used to read, write, and, manipulate the `DOM`.

* `Node elements` in the `DOM` can be selected using `Query Selectors`.

---

## DOM Element Overview

* __Document Node__ - The `root`.

* __Element Node__ - HTML `elements`.

* __Attribute Node__ - HTML element `attributes`.

* __Text Node__ - HTML `text` and `whitespace`.

---
## DOM API Overview

* __Select__

    * `document.getElementById('id')` - First instance.

    * `document.querySelector('css-selector)` - First instance.

    * `document.querySelectorAll('css-selector)` - Collection.

    * `item.hadAttribute()` - Check for existence of attribute.

* __Traversal__

    * __Elements__ - `children`, `parentElement`, `firstElementSibling`, `nextElementSibling`, etc.

    * __Nodes__ - `childNodes`, `parentNode`, `firstSibling`, `nextSibling`, etc. 

    * __Attributes__ - `getAttribute('name')`

* __Create__

    * `document.createElement()`

    * `document.createTextNode()`

    * `item.setAttribute('name', 'value')`

* __Update__

    * `item.property = 'new-value'`

    * `item.setAttribute('name', 'value')`

    * `item.replaceChild(newItem, oldItem)`

* __Delete__

    * `item.removeChild(item)`

    * `item.removeAttribute('name')`

