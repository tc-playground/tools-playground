# Local Storage

## Overview

* `Web Storage API` provides a `string` based `key-value` store in the browser. 

* `Web Storage API` consists of two mechanisms: 

    * __sessionStorage__ - Storage in the browser until it is closed.
    
    * __localStorage__ - Permanent storage in the browser until specifically removed.

* `Web Storage API` only handles strings. Complex object must be `marshalled`/`unmarshalled`.

    * `window.localStorage.setItem('name', JSON.stringify({}))`

    * `const object = JSON.parse(window.localStorage.getItem('name'))`

---

## Web Storage API

* `setItem(key, value)` - Add key and value to localStorage.

* `getItem(key, value)` - This is how you get items from localStorage.

* `removeItem(key)` -  Remove an item by key from localStorage.

* `clear()` - Clear all localStorage.

* `key()` - Passed a number to retrieve the key of a localStorage. Allow iteration by index.


---

## References

* [Window.localStorage - MDN Webb Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

* [HTML Web Storage API - W3Schools](https://www.w3schools.com/html/html5_webstorage.asp)

* [localStorage in JavaScript: A Complete Guide](https://blog.logrocket.com/localstorage-javascript-complete-guide/)

