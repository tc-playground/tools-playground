# Redux DevTools Session

## Introduction

* `debug_sessions` - Will persist the redux store between refreshes of the page.

    * Persists `actions`.

    * Persists `state`.

* `debug_sessions` is specified as a query string

    * `http://localhost:3000/debug_session=<some_String>`

* `debug_sessions` can be deleted by removing the query parameter.

    > NB: If the underlying reducer code changes, remember to start a new session!


---

## Usage

* Create various `named` sessions for certain `pre-initialised feature states`:

    * __logged in__ : `http://localhost:3000/debug_session=logged-in`

    * __logged out__ : `http://localhost:3000/debug_session=logged-out`