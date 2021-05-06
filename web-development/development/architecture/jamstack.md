# Jam Stack

## Overview

* `Jamstack` is architecture for building front-end applications.

* `Jamstack` is architectures `pre-generated` the application and deploy it to multiple `CDN`s.

* `Jamstack` does not relay on server-side code.

---

## Jamstack Benefits

* __Security__ - Server-side processes abstracted into `microservice APIs` to reduce surface areas for attacks.

    * `Pre-generated` assets allows `read-only` hosting.

* __Scale__ - Scale `CDN deployments`.

* __Performance__ - `Pre-generated` assets at deploy time and serve over a `CDN`.

* __Maintainability__ - `Pre-generated` assets reduce deployment complexity.

* __Portability__ - `Pre-generated` assets can be deployed from various.

* __Developer Experience__ - Loose coupling and separation of controls allow for more targeted development and debugging.

---

## Jamstack Best Practices

* __Entire Project on a CDN__

    * `Jamstack` projects don’t rely on server-side code.
    
    * `Jamstack` projects can be distributed instead of living on a single server. 
    
    * `Jamstack` projects are fast to serve from a `CDN`.

* __Modern Build Tools__

    * Embrace modern web standards today without waiting for tomorrow’s browsers.
    
    > `Babel`, `PostCSS`, `Webpack`, etc.

* __Automated Builds__

    * Assets prebuilt, content changes won’t go live until the next build.

    * Automating this process will save you lots of frustration. 
    
    > `Webhooks`, `cloud publishing platforms (Vercel)`.

* __Atomic Deploys__

    * Large projects have many files and all changes must be deployed in one go.

    * `atomic deploys` where no changes go live until all changed files have been uploaded to the `CDN`.

* __Instant Cache Invalidation__

    * Ensure the CDN can handle instant cache purges, to, deploy the application in one go.

* __Everything Lives in Git__ 

    * Anyone should be able to do a git clone, install any needed dependencies with a standard procedure (like npm install), and be ready to run the full project locally. 
    
    * No `databases` to clone, no `complex installs`.
    
    * Simplifies `staging` and `testing` workflows. 

---

## Resources

* [Jamstack](https://jamstack.org/)