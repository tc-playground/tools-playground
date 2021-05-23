# Rate Limiting

* Handle a specific number of requests per second. If this is exceeded return an error (`429 - Too many requests`).

    * __Rate Limit__ on: user, ip, region, etc. e.g. From headers.

* Protect against taxing operations.

* Protect against `DoS` attacks and system abuse.

* Protect against `back pressure`.

* In the distributed case need a mechanism to handle the `request limit metrics`.

    * Configure `load balancing` to hist services with `locally cached limit metrics`.

    * Use `Redis` to share `request limit metrics`.

* Different `rate limiting` for different scenarios.

    * e.g. 1 times in 0.5s, 3 times in 5s, 10 times in 30s. 



---

### Availability

The odds of a particular server or service being up and running at any point in time, usually measured in percentages. A server that has 99% availability will be operational 99% of the time (this would be described as having two nines of availability).

### Key-Value Store

A Key-Value Store is a flexible NoSQL database that's often used for caching and dynamic configuration. Popular options include DynamoDB, Etcd, Redis, and ZooKeeper.

### Rate Limiting

The act of limiting the number of requests sent to or from a system. Rate limiting is most often used to limit the number of incoming requests in order to prevent DoS attacks and can be enforced at the IP-address level, at the user-account level, or at the region level, for example. Rate limiting can also be implemented in tiers; for instance, a type of network request could be limited to 1 per second, 5 per 10 seconds, and 10 per minute.

### DoS Attack

Short for "denial-of-service attack", a DoS attack is an attack in which a malicious user tries to bring down or damage a system in order to render it unavailable to users. Much of the time, it consists of flooding it with traffic. Some DoS attacks are easily preventable with rate limiting, while others can be far trickier to defend against.

### DDoS Attack

Short for "distributed denial-of-service attack", a DDoS attack is a DoS attack in which the traffic flooding the target system comes from many different sources (like thousands of machines), making it much harder to defend against.

### Redis

An in-memory key-value store. Does offer some persistent storage options but is typically used as a really fast, best-effort caching solution. Redis is also often used to implement rate limiting.
