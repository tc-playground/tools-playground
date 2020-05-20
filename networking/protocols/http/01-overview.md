# HTTP Protocol

## Overview

* `HTTP` functions as a `request–response protocol` in the client–server computing model.

* `HTTP` is a `L7` application layer protocol.

* `HTTP` is a `stateless` protocol.

    * `HTTP Cookies` and `server-side state` are often used to add state.

* `HTTP` is designed to permit intermediate network elements to improve or enable communications between clients and servers.

    * Proxies, Caches, CDN, etc.

* An `HTTP User Agent` is the application utilising HTTP, web browser, mobile application, command line cool, etc.

* `HTTP` can participate in `session management` and can establish underlying `TCP` sessions. This includes `persistent` sessions.

* `HTTP` provides `multiple authentication` schemes such as `basic access authentication` and `digest access authentication`.

* `HTTP` endpoints should ideally be `RESTful` and `idempotent` to deal with failures.

* `HTTP` is `insecure`.

    * `HTTPS` provides HTTP over `TLS` by setting up a `secure encrypted two way tunnel` between the participants.

    * `HTTPS` TLS encryptions requiring `deep packet inspection` for certain routing operations.

---

## URL Anatomy

```
            userinfo          host        port
        ┌───────┴───────┐ ┌────┴────────┐ ┌┴┐
 http://john.doe:password@www.example.com:123/forum/questions/?tag=networking&order=newest#top
 └─┬─┘ └───────────┬────────────────────────┘└─┬─────────────┘└────────┬──────────────────┘└┬─┘
 scheme         authority                      path                  query             fragment
```

---

## HTTP Methods

* __GET__     - Requests `get` a representation of the specified resource.

* __HEAD__    - Requests `get the header` information for a resource, without the response body.

* __POST__    - Requests `update` the specified resource.

* __PUT__     - Requests `create` the specified resource.

* __DELETE__  - Requests `delete` the specified resource

* __TRACE__   - Requests `echoes the received request` so that a client can see modifications made by intermediate servers.

* __OPTIONS__ - Requests `returns the HTTP methods` that the server supports.

* __CONNECT__ - Requests `convert the request connection to a transparent TCP/IP tunnel`, to provide (HTTPS) via unencrypted HTTP proxy.

* __PATCH__   - Requests `apply partial modifications` to a resource.

---

## HTTP Status Codes

* __Informational__ - `1XX`

* __Successful__    - `2XX`

* __Redirection__   - `3XX`

* __Client Error__  - `4XX`

* __Server Error__  - `5XX`

---

## Common Headers

1. __Host Header__

    * `Host` distinguishes between various `DNS` names sharing a single IP address, allowing name-based `virtual hosting.`.

        ```bash
        curl -H 'Host: example1.com' http://192.168.0.1
        curl -H 'Host: example1.com' http://192.168.0.1
        ```
    
    * NB: Does not work with SSL/TLS traffic as this is lower in the network stack.

    * `Host` is __mandatory__ for `HTTP/1.1` onwards.

2. __ETag Header__

    * `ETag (entity tag)` is a hash of the resource to allow parties to quickly determine if the resource has changed.

---

## References

* [HTTP 1.1 - RFC-7231 ](https://tools.ietf.org/html/rfc7231)

* [HTTP - Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

* [HTTP - Request Methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)

* [HTTP - Header Fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)

* [HTTP - Response Codes](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)