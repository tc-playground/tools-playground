# OAuth 2

## Introduction

* OAuth 2 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service. 

* It works by delegating user authentication to the service that hosts the user account, and authorizing third-party applications to access the user account.

* OAuth 2 provides authorization flows for web and desktop applications, and mobile devices.

---

## Classic Email/Password Authentication

1. Store a record of the `user identifier` and a `hash of the password`.

2. If the user can supply the `password hash` then they can be logged in.

> NB: Like authentication by an individuals passport.

---

## OAuth Authentication

1. User `authenticates` with a trusted `OAuth provider` (Google, Github, FaceBook, etc).

2. User `authorises` an `app` to access their information (based on permitted `scopes`).

3. `OAuth Provider` informs `app` of User's authorisation.

4. `OAuth` can be used for:

    1. `Authenticate` a User.

    2. `Perform actions` on behalf of User.

> NB: Like authentication from a trusted official.

---

## OAuth Flows

* `OAuth for Servers` - Usually used to obtain a `token` to perform action on behalf of a user when __they are not logged in__.

* `OAuth for Browser/Mobile App` - Usually used to `obtain` a token to perform action on behalf of a user __while they are logged in__.


---

## References

* [OAuth2](https://oauth.net/2/)
* [Digital Ocean Introduction](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)
* [Google OAuth Scopes](https://developers.google.com/identity/protocols/googlescopes)
