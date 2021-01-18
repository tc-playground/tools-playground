# DOM Selectors

## Overview

* `DOM Elements` can be traversed from the `document` root name.

* `DOM Elements` can be `accessed`, `traversed`, and `updated` directly.

    * It is also possible to obtain `url`, `domain`, `char set`, `content type`, etc.

* `DOM Elements` can be `selected` with `css-selectors`.

    1. __querySelectorAll(css-selector)__ - Get the first (or undefined) element.

        * Example - `document.querySelector(css-selector)`.

    2. __querySelectorAll(css-selector)__ - Get a all. A `NodeList` of zero or more elements.

        * Example - `document.querySelectorAll(css-selector)`.

        * Returns a `NodeList` collection.

        * NB: Is not a `live` list. So will not reflect changes as they occur.
    
    3. __getElementById()__ - Get the first element with the specified id.

---

## Document Properties

* `DOM Elements` can be `accessed`, `traversed`, and `updated` directly.

    ```js
    const doc = document;
    const nodeList = doc.all;
    const htmlNode = doc.all[0];
    const numNodes = doc.all.length();
    const head = doc.head;
    const body = doc.body;
    const doctype = doc.doctype;
    const domain = doc.domain;
    const url = doc.URL;
    const charSet = doc.characterSet;
    const contentType = doc.contentType;
    ```

* `DOM Element Attributes` can be `accessed`, and `updated` directly.

    ```js
    const scriptOneSource = document.scripts[0].getAttribute('src');
    document.scripts[0].getAttribute('src') = "./another/script";
    ```

* `DOM Attributes` can be `accessed`, and `updated` directly.

    ```js
    const scriptOneSource = document.scripts[0].getAttribute('src');
    document.scripts[0].getAttribute('src') = "./another/script";
    ```

* `HTMLCollections` can be converted to an `Array` to iterate over them.

    ```js
    // Html Selector Elements need to be converted into an array in order to iterate.
    const scriptList = Array.from(document.scripts);
    scriptList.forEach((script) => {
        console.log("script: ", script);
    });
    ```

---

## Element Collection Types

* `NodeList` - Contains `element nodes`, `text nodes` and `Array methods`.

    * Text nodes represent `line breaks` and other text entities.

* `HTMLCollection` - An indexed set of elements. 

    * These are `array-like` but do not have all the array methods.

    * Only contains `HTML Elements`.

    > `Arrays.from()` can be used to convert an `HTML Collection` to an `Array`.

---

## Single Element Selectors

* `Single Element Selectors` returns the __first element found__ when there are multiple elements.

    1. __getElementById()__ - Get single element with the specified `id`.

        ```js
        document.getElementById('id');
        ```

    2. __querySelector()__ - Get a single first element found with a defined `query-selector`.

        ```js
        // Get by `id`.
        document.querySelector('#some-id'); 
        // By `class`.
        document.querySelector('.some-class'); 
        // By `element`.
        document.querySelector('ul');
        document.querySelector('ul li');
        document.querySelector('ul li:first-child'); 
        document.querySelector('ul li:nth-child(3)').textContent = "New Value"; 
        ```
---

## Multiple Element Selectors

* `Multiple Element Selectors` returns __all elements found__ when there are multiple elements.

    1. __getElementsByClassName()__

        * Returns an `HTMLCollection`.

        ```js 
        const htmlCollection = document.getElementsByClassName('some-class-name');
        const firstItem = htmlCollection[0];
        ```
    2. __getElementsByTagName()__

        * Returns an `HTMLCollection`.

    3. __querySelectorAll__

        * Can take any `css-selector` as the argument.

        * Returns a `NodeList`.

        ```js
        const items = document.querySelectorAll('li:nth-child(odd));
        ```

---

## Element Selector Chaining

* `Element Selectors` can be `chained`.

    ```js
    const activeItem = document.querySelector('li').getElementByClassName('active');
    ```

---

## Examples

### Get Document

```js
const doc = document;
```

### Access Document Properties

```js
const doc = document;
const nodeList = doc.all;
const htmlNode = doc.all[0];
const numNodes = doc.all.length();
const head = doc.head;
const body = doc.body;
const doctype = doc.doctype;
const domain = doc.domain;
const url = doc.URL;
const charSet = doc.characterSet;
const contentType = doc.contentType;
```

### Accessing Document Elements and Attributes

```js
const doc = document;

// Forms
const forms = document.forms;
const firstForm = document.forms[0];
const firstFormId = document.forms[0].id;
const firstFormMethod = document.forms[0].method;
const firstFormAction = document.forms[0].action;

// Links
const links = document.links;
const firstLink = document.links[0];
const firstLinkId = document.links[0].id;
const firstClasses = document.links[0].classList;

// Images
const images = document.images;
```

## Iteration Document Elements

```js
// Scripts
const scripts = document.scripts;
const scriptOneSource = document.scripts[0].getAttribute('src');
// Html Selector Elements need to be converted into an array in order to iterate
const scriptList = Array.from(document.scripts);
scriptList.forEach((script) => {
    console.log("script: ", script);
});
```
---

## References

* [Locating DOM elements using selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)

* [Selectors API - W3C Spec](https://www.w3.org/TR/selectors-api/)