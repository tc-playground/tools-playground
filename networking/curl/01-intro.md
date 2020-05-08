# curl

## Introduction

* `curl` is  a  tool  to transfer data from or to a server, using one of the supported protocols

* `curl` curl is powered by `libcurl` for all transfer-related features.

---

## Examples

* `curl <url>` - Curl an HTTP URL.

* `curl -o vlc.dmg http://some/file/on/the/web` - Download a file.

* `curl -L http://www.somepage.com/` - Follow redirects.

* `curl -L -i http://www.facebook.com/` - View HTTP response headers.

* `curl -v https://www.booleanworld.com/` - View HTTP request header and other details.

* `curl -s https://www.booleanworld.com/` - Silence HTTP request header and other details.

* `curl -H 'X-My-Custom-Header: 123' https://httpbin.org/get` - Set headers.

* `curl --data "firstname=boolean&lastname=world" https://httpbin.org/post` - Send HTTP POST data.

* __Submit JSON__

    ```
    curl --data '{"email":"test@example.com", "name": ["Boolean", "World"]}' -H 'Content-Type: application/json' https://httpbin.org/post
    ```

* __Change HTTP Request Method__

    ```
    curl -X POST https://httpbin.org/post
    ```

* __Get HTTP Return code__

    ```
    $?
    ```

* __HTTP Authenticated Requests__

    ```
    curl -u boolean:world https://example.com/
    ```
* __Test Protocol Supoort__

    ```
    curl -v --tlsv1.2 https://www.booleanworld.com/
    ```



---

## References

* [curl - Home](https://curl.haxx.se/)

* [Tutorial - Binary Tides](https://www.booleanworld.com/curl-command-tutorial-examples)