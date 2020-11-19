# Cheerio JS

## Introduction

* `cheerio js` is a fast, flexible & lean implementation of core `jQuery `designed specifically for the server.

* `cheerio wrappers` are returned from `enzymes` `full DOM` `render()` method.

* __Example__:

    ```javascript
    const cheerio = require('cheerio')
    const $ = cheerio.load('<h2 class="title">Hello world</h2>')

    $('h2.title').text('Hello there!')
    $('h2').addClass('welcome')

    $.html()
    //=> <h2 class="title welcome">Hello there!</h2>
    ```

---

## References

* [Home](https://cheerio.js.org/)

* [Github](https://github.com/cheeriojs/cheerio)