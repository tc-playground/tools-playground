# Links

## Introduction

 * `Links` are elements that navigate the browser to a specified `URL` when activated by an event like `onClick()`.

* Example
    
    ```html
    <Link to="/page2">Navigate to Page 2</Link>
    ```
* `Link` elements must be contained within a `BrowserRouters` ( alternative router) element.

 * `Links` get converted to anchor ref HTML elements, but, the `react-router` `History` object intercepts them and forwards the new URL to the `BrowserRouter`. This prevents `page reloads`.