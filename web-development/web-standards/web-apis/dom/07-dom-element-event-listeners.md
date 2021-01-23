# DOM Element Event Listeners

## Overview

* `Event Listeners` can be added to to DOM elements.

* `Event listeners` __register__ an `event object` to a `handling function`.

---

## Example

```js
const element = browser.querySelector('.button');
button.addEventListener('click', e => {
    console.log('Handled Event: ', e);
    e.preventDefault();
})
```

```js
const element = browser.querySelector('.button');
button.addEventListener('click', onclick);

const onClick = e => {
    console.log('Handled Event: ', e);
    e.preventDefault();
}
```

---

## References



* [EventListener - API MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/EventListener)

* [JavaScript HTML DOM EventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

* [DOM onevent handlers - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers)

* [JavaScript Events](https://www.w3schools.com/js/js_events.asp)