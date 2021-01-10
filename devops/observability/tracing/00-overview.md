# Distributed Tracing

## Overview

* `Distributed Tracing` provides a `trace` for a `request` passing through `components` in a `distributed system`.

> A `traceview` is meant to provide a bird’s eye view of `the lifecycle of a single request across every single component of a distributed system` which the request traverses through, with some of the more advanced tracing systems offering the ability to `drill down into individual spans` and look at the `breakdown of timing within a single process` (when spans are emitted at the function boundaries).

---

## Concepts

* `Distributed tracing` starts with a `request` that contains an initial `traceId`.

* `Distributed tracing` works by `instrumenting` target code via a `library`.

    * `spans` can be __started__ with a reference to their `parent spans`.

    * `spans` can be __finished__.

    * `spans` are often `RPC` calls, but, anything can be instrumented.

* `Distributed tracing` works by creating `span events` containing `metrics` for each `span`.

* `Distributed tracing` works by __asynchronously__ sending `span events` to a `collection endpoint` via a `transport`.

    * `transports` can be things like `HTTP`, `Kafka`, etc.

* `Distributed tracing` may create lots of metrics that sometimes need to be `sampled`.

* `Distributed tracing` __across distributed components__ works by sending the `tracing context` to invoked `systems`.

    * e.g. For HTTP, `traceIds`, and, parent `spanIds` might be sent as HTTP headers.

    > The invoked `system` must also be `instrumented` to use the `tracing context`.

* `Distributed tracing` works by `collectors` at the `collection endpoints` __storing__ and __indexing__ all `tracing events`.

* `Distributing tracing` the allows users to explore and analyse the `tracing events`.

    * `Query` for `spans` with specific metrics: e.g. `durations`, `latencies`.

    * Reconstruct a `trace view` of a particular `request`/`span-id`.

---

## Components

* __Instrumentation Libraries__

    * Language specific libraries for instrumenting code with `span start/stop` points.

    * `Trace events` are created and dispatched `asynchronously`.

* __Transports__

    * __Send__ `trace events` to an `ingestion endpoint`.

* __Collectors__

    * Collect `trace events` at an `ingestion endpoint`.

* __Database__

    * Store, index, and query `trace span event metrics`.


---

## Kinds

* __Trace__

    * Represent information about a single request passing through components.

    * `trace-id`

* __Spans__

    * `span-id`

* __Ingestion Context__

    * `Distributed context propagation`

* __Trace Event (Report Span)__

    ```json
    {
        "traceId": "aa"
        "id": "6b",
        "name": "get",
        "timestamp": 1483945573944000,
        "duration": 386000,
        "annotations": [],
        "etc": "..."
    }
    ```

* __Zipkin Example__

```bash
┌─────────────┐ ┌───────────────────────┐  ┌─────────────┐  ┌──────────────────┐
│ User Code   │ │ Trace Instrumentation │  │ Http Client │  │ Zipkin Collector │
└─────────────┘ └───────────────────────┘  └─────────────┘  └──────────────────┘
       │                 │                         │                 │
           ┌─────────┐
       │ ──┤GET /foo ├─▶ │ ────┐                   │                 │
           └─────────┘         │ record tags
       │                 │ ◀───┘                   │                 │
                           ────┐
       │                 │     │ add trace headers │                 │
                           ◀───┘
       │                 │ ────┐                   │                 │
                               │ record timestamp
       │                 │ ◀───┘                   │                 │
                             ┌─────────────────┐
       │                 │ ──┤GET /foo         ├─▶ │                 │
                             │X-B3-TraceId: aa │     ────┐
       │                 │   │X-B3-SpanId: 6b  │   │     │           │
                             └─────────────────┘         │ invoke
       │                 │                         │     │ request   │
                                                         │
       │                 │                         │     │           │
                                 ┌────────┐          ◀───┘
       │                 │ ◀─────┤200 OK  ├─────── │                 │
                           ────┐ └────────┘
       │                 │     │ record duration   │                 │
            ┌────────┐     ◀───┘
       │ ◀──┤200 OK  ├── │                         │                 │
            └────────┘       ┌────────────────────────────────┐
       │                 │ ──┤ asynchronously report span     ├────▶ │
                             │                                │
                             │{                               │
                             │  "traceId": "aa",              │
                             │  "id": "6b",                   │
                             │  "name": "get",                │
                             │  "timestamp": 1483945573944000,│
                             │  "duration": 386000,           │
                             │  "annotations": [              │
                             │--snip--                        │
                             └────────────────────────────────┘
```

---

## Tools

* [OpenTelemetry](https://opentelemetry.io/)

    * [OpenTracing](https://opentracing.io/)

* [Zipkin](https://zipkin.io/)

* [Jaeger](https://www.jaegertracing.io/) - Golang.

---

## References

* [Zipkin API Spans](https://zipkin.io/zipkin-api/#/default/post_spans)