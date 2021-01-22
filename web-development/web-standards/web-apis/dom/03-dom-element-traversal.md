# DOM Traversal

## Overview

* `DOM` is a `tree structure` containing `nodes` (`element`, `attribute`, `text`).

* `DOM traversal` makes use of `parent`, `sibling` and `children` _properties_ on the nodes.

* There are variants of ech property for `nodes` and `elements`.

    * Element properties ignore `text` and `attribute` nodes.

* `Node Types` - An integer property defining the node type.

    * 1  - Element
    * 2  - Attribute (deprecated)
    * 3  - Text Node
    * 8  - Comment
    * 9  - Document
    * 10 - DocType

---

## Examples

```js
const list = document.querySelector('ul');

// Nodes
const childNodes = list.childNodes();
const firstChildNode = list.childNodes().firstChild;
const secondChildNode = list.childNodes()[1];
const lastChildNode = list.childNodes().lastChild;
const nodeType = list.childNodes()[0].nodeType;
const parentNode = childNode.parentNode;
const nextSiblingNode = list.childNodes().nextSibling;
const previousSiblingNode = list.childNodes().previousSibling;

// Elements
const childElements = list.children();
const firstElementChild = list.children().firstElementChild;
const secondElementChild = list.children()[1];
const lastChild = list.children().lastElementChild;
const parentElement = childNode.parentElement;
const nextElementSibling = list.children().nextElementSibling;
const previousSiblingElement = list.children().previousElementSibling;
```