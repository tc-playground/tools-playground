# Google OAuth API

## Introduction

---

## Process

1. Create new project at `console.developers.google.com`.

2. Set up an `OAuth Confirmation Screen` for the project,

    * Under: `Credentials- > OAuth consent screen`.

3. Generate an `OAuth ClientID`.

    * Under `Credentials -> Credentials -> Create Credential-> OAuth ClientID.

        * Web Application; Authorized JavaScript origins: http://localhost:3000


4. Install `Google API Library` and initialise it with the `OAuth ClientID`.

5. Add a `login` button to the `App` that logs in.

---

## Artifacts

1. ClientID - For flows where the user is logged in.

2. Client Secret - For flows where the user is logged out and we are requesting actions on behalf of the User.

---

## `gapi` Client Library

* [`gapi` documentation](https://developers.google.com/api-client-library/javascript/reference/referencedocs)

* The client library is available from CDN:
    ```html
    <script src="https://apis.google.com/js/api.js"></script>
    ```

* It is available under `windows` scope (in the browser) as `gapi`.

* `api` is a HUGE library, so you need to `load` the parts of it you want too. This will fetch the code from the CDN.
    
    * Browser Console:
        ```javascript
        gapi.load('client:auth2');
        gapi.client.init({ clientId: "REDACTED", scope: "email" });
        ```

    * Asynchronous JavaScript
        ```javascript
        window.gapi.client.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "REDACTED",
                scope: "email"
            });
        });
        ```

---

## `gapi auth` Client Library

* https://developers.google.com/api-client-library/javascript/reference/referencedocs#auth-setup

* https://developers.google.com/api-client-library/javascript/reference/referencedocs#authentication

* `AuthInstance`

    ```javascript
    const auth = gapi.auth2.getAuthInstance();
    auth.signIn();
    auth.isSignedIn.get();
    auth.currentUser.get().getId();
    auth.signOut();
    auth.isSignedIn.get();
    ```
