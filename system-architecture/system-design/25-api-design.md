# API Design

* Some products are APIs: e.g. `Stripe`

* `APIs` are global and customer facing.

* `APIs` need to be back-ward compatible. Any design decision is hard to change when it is in production.

* `Swagger` - Interface description language - IDL.

* Add `versioning` in URL path.

* __CRUD Endpoints__

* __Action Endpoints__

* __Field Masks__ - A parameter to define what fields in a resource are returned.

* __Examples__

    * [Stripe API]()

    * [Twitter API]()

    * [YouTube API]()

    * [Google Cloud IoT Core]()

    * [FaceBook API]()

---

## API Design

### HTTP

The HyperText Transfer Protocol is a very common network protocol implemented on top of TCP. Clients make HTTP requests, and servers respond with a response.
Requests typically have the following schema:

<empty string>
Responses typically have the following schema:

<empty string>

### JSON

A file format heavily used in APIs and configuration. Stands for JavaScript Object Notation. Example:

### YAML

A file format mostly used in configuration. Example:

### ACL

Short for Access-Control List. This term is often used to refer to a permissioning model: which users in a system can perform which operations. For instance, APIs often come with ACLs defining which users can delete, edit, or view certain entities.

### Pagination

When a network request potentially warrants a really large response, the relevant API might be designed to return only a single page of that response (i.e., a limited portion of the response), accompanied by an identifier or token for the client to request the next page if desired.

Pagination is often used when designing List endpoints. For instance, an endpoint to list videos on the YouTube Trending page could return a huge list of videos. This wouldn't perform very well on mobile devices due to the lower network speeds and simply wouldn't be optimal, since most users will only ever scroll through the first ten or twenty videos. So, the API could be designed to respond with only the first few videos of that list; in this case, we would say that the API response is paginated.

### CRUD Operations

Stands for Create, Read, Update, Delete Operations. These four operations often serve as the bedrock of a functioning system and therefore find themselves at the core of many APIs. The term CRUD is very likely to come up during an API-design interview.


