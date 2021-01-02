# Document Object Model (DOM)

## Introduction

* The `DOM (Document Object Model)` is a structure that is created from the parsed `HTML` of a page.

    * `JavaScript` operations can be applied to the `DOM`.

    * `CSS` operations can be applied to the `DOM`.

* The `DOM` maps out an entire page as a document composed of a `tree base hierarchy of nodes`.

* The `DOM API` allows nodes to be `removed`, `added`, and `replaced`.

* The `BOM (Browser Object Model)` consists of the `runtime objects` and include the `DOM`: 

    * `window` - Browser object for accessing the `runtime`.

        * `navigator`

        * `history`

        * `screen`

        * `location`

        * `document`

* The `Shadow DOM` allows `hidden DOM trees` to be attached to `elements` in the `regular DOM tree`.

    * Allow for `encapsulation`.

    * Restricts the global nature of `HTML`, `CSS`, and `JS`.

* Some frameworks (`React`, `Angular`) may use an additional `JavaScript DOM` to perform diffs when updating a DOM:

    * `Virtual DOM`

    * `Incremental DOM`.

* `DOM Elements` can have `event handlers` attached to them.

---

## DOM

* __DOM Level 1__

    * `DOM Core` - interfaces to map `generic XML` documents to the `DOM`.
    
    * `DOM HTML` - Extends `DOM Core` with interfaces for HTML-specific `objects` and `methods`.

* __Dom Level 2__

    * `DOM Views` - interfaces to keep track of the various views of a document.
    
        * e.g. the document before/after CSS styling.

    * `DOM Events` - interfaces for events.

    * `DOM Style` - interfaces to deal with CSS-based styles.

    * `DOM Traversal and Range` - interfaces to traverse and manipulate a document tree.

* __Dom Level 3__

    * `DOM Load`

    * `DOM Save`

    * `DOM Validate`

> NB: DOM is not JavaScript-specific, but, is used heavily in common JAvaScrip runtimes.

---

## References

* __BOM__

    * [JavaScript / DOM / BOM relationship explained](https://vkanakaraj.wordpress.com/2009/12/18/javascript-vs-dom-vs-bom-relationship-explained/)

* __DOM__

    * [DOM - Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

    * [DOM - W3C Spec](https://dom.spec.whatwg.org/)

* __Shadow DOM__

    * [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

    * [Shadow DOM 101](https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/) - Shadow DOM v0.

    * [Shadow DOM v1: Self-Contained Web Components](https://developers.google.com/web/fundamentals/web-components/shadowdom)

    * [Polymer Library](https://polymer-library.polymer-project.org/3.0/docs/devguide/shadow-dom)



* __Virtual / Incremental DOM__

    * [Incremental vs Virtual DOM](https://blog.bitsrc.io/incremental-vs-virtual-dom-eb7157e43dca)

    * [snabbdom - Github](https://github.com/snabbdom/snabbdom) - Virtual DOM.

