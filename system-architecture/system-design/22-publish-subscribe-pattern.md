# Publish Subscribe Pattern

* `Pub/Sub` is like `streaming` bit for `distributed systems` and provides `robustness` and `reliability` guarantees.

> Essentially a specialised database.

* Handles `async operations`.

* __4 Primitives__

    * __Publishers__ - Server publish messages to topics. e.g. Stock Prices

    * __Subscribers__ - Clients  listening for messages on specific topics.

    * __Topics__ - Channels of specific information. Like a DB. Guaranteed delivery.

    * __Messages__ - The data for a particular channel.

> __Pub/Sub Indirection__ - There is no direct communication between `servers` and `clients`. They interact via `topics`.

* __Pub/Sub Properties__

    * Guaranteed  `At Least Once` delivery. NB: Maybe be sent more that once.

        * Therefore requires `idempotent operations`.

        * Persistent storage. Specialised database.
    
    * Guaranteed `Message-Order`.

    * Replayability/Rewinding - Replay messages.

    * Mulitple Topics - Allow different types of data to be stored in the persistence database.

    * Mulitple subscribers can subscribe to multiple topics.

    * Subscriber content based filtering. e.g. Filter for specific.

    * Topic Isolation

* __Implementations__

    * `Apache Kafka`

    * `Google Cloud Pub/Sub`

---

## Publish/Subscribe Pattern

Often shortened as Pub/Sub, the Publish/Subscribe pattern is a popular messaging model that consists of publishers and subscribers. Publishers publish messages to special topics (sometimes called channels) without caring about or even knowing who will read those messages, and subscribers subscribe to topics and read messages coming through those topics.
Pub/Sub systems often come with very powerful guarantees like at-least-once delivery, persistent storage, ordering of messages, and replayability of messages.

## Idempotent Operation

An operation that has the same ultimate outcome regardless of how many times it's performed. If an operation can be performed multiple times without changing its overall effect, it's idempotent. Operations performed through a Pub/Sub messaging system typically have to be idempotent, since Pub/Sub systems tend to allow the same messages to be consumed multiple times.

For example, increasing an integer value in a database is not an idempotent operation, since repeating this operation will not have the same effect as if it had been performed only once. Conversely, setting a value to "COMPLETE" is an idempotent operation, since repeating this operation will always yield the same result: the value will be "COMPLETE".

## Apache Kafka

A distributed messaging system created by LinkedIn. Very useful when using the streaming paradigm as opposed to polling.


## Cloud Pub/Sub

A highly-scalable Pub/Sub messaging service created by Google. Guarantees at-least-once delivery of messages and supports "rewinding" in order to reprocess messages.
