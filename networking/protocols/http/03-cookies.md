# Cookies

## Introduction

* `cookies` are small bit of `data` stored in the `browser`.

* `cookies` are __automatically__ sent with `every browser request` for defined `paths`.

* `cookies` are used for `session management`, `tracking`, etc.

    * `sessions token` can be stolen using `Cross Site scripting (XSS)` attacks.

* `cookies` are required because `HTTP is stateless`.

* `cookies` can be set by the `server` in the HTTP `Set-Cookie` response header.

* `cookies` can be set by client side JavaScript.

* `cookies` can be managed and manipulated in the browser.

* `HTML5` has `LocalStorage` and `SessionStorage` that can be used instead of `cookies`.

    * These are not automatically sent by the browser.

---

## Anatomy

1. __Name__ - The name of the `cookie`.

2. __Value__ - The associated value of the `cookie`,

3. __Expiry Date__ - When the browser will clear the `cookie`.

4. __Path__ - What `urls` the `cookie` will be sent with.

---

## References

* [Cookies - Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)



