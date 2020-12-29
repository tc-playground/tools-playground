# `BrowserRouter` and `Route`

## Introduction

* `BrowserRouter` is a `react-router-dom` component.

* `BrowserRouter` has a single child element containing a set of `Routes`.

    * `Route` binds a `path` to a `React Component`.

    * `ReactRouter` only renders the `React Component` that responds to the current path.

    * `ReactRouter` can match multiple `Routes`. All matched routes `React Components` are rendered.

    * `ReactRouter` matches any `path` that is __contained in__ the browser url __UNLESS__ the property `exact={true}` is specified.

* `Browser Router` uses an associated `History` components to keep track of the current browser url and the users actions.

## Browser Link

* `Anchor Refs` (`<a href="/" />`) are a __BAD__ way ti implement navigation in `SPAs` because they cause the browser to refeatch `index.html`. This is slow and causes all state to be lost.

* `ReactRouter Link Refs` (`<Link to="/" />`) should be used instead. The prevent a browser page reload.
    > NB: An anchor tag is still generated in the HTML, but, react routers `History` component prevents the page reload and sends the new url to `BrowserRouter`. 
    > NB: React Router `watches` the anchor tag and intercepts clicks.