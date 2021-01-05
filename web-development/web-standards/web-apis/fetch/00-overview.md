# Fetch API

## Introduction

* `Fetch` is used to make `HTTP` calls from the `browser runtime`.

* `Fetch` provides a generic definition of `Request` and `Response` and other `networking` objects.

    * `Service Workers`

    * `Cache API`
    
    * Anything that need to handle or modify `Requests` and `Responses`.

* `Fetch` defines `CORS` and the `HTTP Origin` header semantics.

* `Fetch` returns a `Promise` that resolves to a `Response`.

* `Fetch` capabilities:

    1. __won’t reject on HTTP error status__

    2. __can receive cross-site cookies__ - if a `session is established`.

    3. __won’t send cookies__ - unless `credentials` are set in the `init` option.

* `Fetch` may (experimentally) implement `Abort API`.

---

## Details

* __Runtime Location__ - `WindowOrWorkerGlobalScope.fetch()`

* __GET Example__

    ```js
    fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data));

    ```

---

## References

* [Fetch API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

* [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

* [Introduction to fetch()](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)

