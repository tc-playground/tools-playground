# API Requests

## Introduction

* `fetch` - HTTP request function built into modern browsers.

* `axios` - HTTP JavaScript library.

    * __Axios example__:

        ```javascript
        onSearchSubmit = term => {
            console.log("App.onSearchSubmit() : ", term);
            var apiKey = "SECRET_API_KEY";
            axios.get("https://api.unsplash.com/search/photos", {
            params: {
                query: term
            },
            headers: {
                Authorization: "Client-ID " + apiKey
            }
            });
        };
        ```
    
    * Default axios clients can be configured:

        ```javascript
        import axios from "axios";

        var apiKey = "DEFINE ME!"
        export default axios.create({
            baseURL: "https://api.unsplash.com",
            headers: {
                Authorization: "Client-ID " + apiKey
            }
        });
        ```

* `axios` is an npm JavaScript library for HTTP requests.

    * __Install__ - `npm install --save axios`

---

## CORS - Cross-Origin Request

* TODO

---

## `promises` - Handle Asynchronous Requests

* `promise.then()/.error()` - can be used to handle responses asynchronously via a `callback`.
    ```javascript
    onSearchSubmit (term) {
        console.log("App.onSearchSubmit() : ", term);
        var apiKey = "SECRET_API_KEY";
        axios.get("https://api.unsplash.com/search/photos", {
        params: {
            query: term
        },
        headers: {
            Authorization: "Client-ID " + apiKey
        }
        })
        .then(response => {
            // The call back...
            console.log("Response results: ", response.data.results);
        });
    };
    ```

---

## `Async Await` - Handle Asynchronous Requests

* `async/await keywords` - can also be used to handle responses asynchronously:

    ```javascript
    async onSearchSubmit (term) {
        console.log("App.onSearchSubmit() : ", term);
        var apiKey = "SECRET_API_KEY";
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: {
                query: term
            },
            headers: {
                Authorization: "Client-ID " + apiKey
            }
        });
        console.log("Response results: ", response.data.results);
    };    
    ```

---

## `Async Await` with __this__ (receiver binding)
* The value of `this` (the `receiver`) of a method call is the entity (syntactic object to the left of the invocaation) invoking it.

* When using `this` in an asynchronous handler; you will need to bind the receiver object correctly using either `bind()` in a `constructor` or an `arrow function` (either inlined/methods).

* __Example - Bind with `arrow function`: 

    ```javascript
    onSearchSubmit = async (term) => {
        console.log("App.onSearchSubmit() : ", term);
        var apiKey = "SECRET_API_KEY";
        const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
            query: term
        },
        headers: {
            Authorization: "Client-ID " + apiKey
        }
        });
        console.log("Response results: ", response.data.results);
        this.setState( { images: response.data.results } );
    };
    ```



