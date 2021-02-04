# Browser Storage

## Overview

* There are various types of Browser Storage available

    * __Local Storage API__

        * Not encouraged, but, easy to use and simple.

    * __IndexedDB API__ - Go to storage mechanism.

        * Async storage.

        * Large size.

    * __Cookies__

        * Share the client state with the server.
        
        * Mostly used for authentication.

    * __URL Storage__

        * Store state in the query string.

        * Care needs to be taken to prevent exploitation.

    * __Cache API__

        * Cache API is a storage for the network level. 
        
        * Used to cache network requests and their responses.

    * __Browser Extension Storage__ - For `extensions`

        * __Local__ - Like the `Local Storage API`, but, for the extension.

        * __Sync__ - Uses the browser `sync` mechanism to an account.

---

## References

* [A Primer on different types of Browser Storage](https://css-tricks.com/a-primer-on-the-different-types-of-browser-storage/)
