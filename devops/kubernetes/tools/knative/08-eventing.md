# Knative Eventing

## Knative Event Resources and Concepts

1. __CloudEvents__ - Making and transmitting `observations`.

    1. `Channels` and `Filters`.
    
    2. `Brokers` and `Triggers`.

    3. `Sources` and `Sinks`.
    
    4. `Sequences` and `Parallels`.

2. `CloudEvents` are a simple `envelope for data` meant to `represent events` that have occurred. 

3. `CloudEvents` have `standardized headers` to make interoperability easier.

4. `CloudEvents` provide a "layer 7" for eventing systems, roughly analogous to what HTTP provides for request/response systems. 

5. `CloudEvents` defines a basic data model and maps these into particular formats and particular protocols.

6. `CloudEvents` define:

    1. `Data` - The data.

    2. `Attributes` - HTTP header like `meta-data`. Can be sent in `Headers` if using HTTP.

---

## CloudEvents - Required Attributes

1. `specversion` - Version of `CloudEvents`, eg. `1.0`.

2. `source` - This is "where" the event has `logically` occurred, e.g. `abc-123.cdn.example.com`.

3. `type` - The kind of event, e.g. `com.example.cdn/flush`

4. `id` - A unique value w.r.t to the source, e.g. `uuid`.

---

## CloudEvents - Optional Parameters

1. `datacontenttype` - Define the format of the data. e.g. Content Type / Media Type / MIME Type. Default is `application/json`.

2. `dataschema` - `URI` defining the schema against which the `data` can be validated. e.g. `https://example.com/schema/v1`

3. `subject` - The "thing" that the event was about, e.g. `/some/thing/12345`.

4. `time` - When the event occurred. RFC 3339.

---

## CloudEvents - Extension Attributes

1. `dataref` - Point to someplace else for the `data` field.

2. `traceparent` and `tracestate` - Carry tracing information according to the `W3C Trace Context standard`.

3. `partitionkey` - Define an attribute to partition data. Ideally `uniformly distributed`.

4. `rate` - Carry a signal of what the `sampling rate` was when the CloudEvent was created.

5. `sequencetype` and `sequence` - Order `CloudEvents` e.g. `Integer` : `12345`.

---

## Cloud Event Modes

1. `structured` - CloudEvent is completely self-contained.

2. `binary` - Separate the `meta-data` (attributes/headers) and the `data` (body).

3. `batched` - Batching together multiple logical CloudEvents into one physical interaction.

---

## Eventing Systems

1. __Messaging__

    1. __Channels__

        1. `Channel` - Implemented by underlying implementation: `Kafka`, `RabbitMQ`, `In-Memory-Chanel (IMC)`, etc.
    
    2. __Subscriptions__

        1. `Subscriber` - A `process` or `address` that can receive a `CloudEvent`.
        
        2. `Subscription` - A bundle of `Channel` with `Subscriber`.

2. __Eventing__

    1. __Brokers__

    2. __Triggers__ - `EventType`.


3. __Sources__

    1. `SinkBinding`

    * __Implementations__ - `PingSource`, the `ApiServerSource` and the `ContainerSource`.

4. __Flows__

    1. Build arbitrary graphs of computation using `Brokers` and `Triggers`.

    2. `Sequence` - Bundle `sequential steps` connected via `CloudEvents` sent over a `Broker`.
    
    3. `Parallel` - Encapsulate basic `fan-out` and `fan-in` scenarios.
















