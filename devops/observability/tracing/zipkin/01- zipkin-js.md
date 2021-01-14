# zipkin-js

## Introduction

* `zipkin-js` is the JavaScript/TypeScript client library for creating `traces` and `spans` that are automatically sent to a `Zipkin Collector`.

* `zipkin-js` contains the `public API` which is used by the various `plugins` (`instrumentations` and `transports`).

* `zipkin-js` allows __local tracing__.

  * `tracer.local` can wrap an activity that precedes a remote request that you want to capture in a trace. 

  * `tracer.local` can time an operation, placing a corresponding span ID in scope so that any downstream commands end up in the same trace.

* `zipkin-context-cls` provides the `continual local storage context implementation`

* `zipkin-transport-http` provides the `HTTP Transport` implementation.

---

## Components

1. __Tracer__

  * The main `tracer` object. Configured by injection with: `Context`, `Recorder`, `Sampler`.

  * `tracer.local()` / `tracer.scoped()`.

  1. __Context__ - Mandatory

    > A mechanism to correlate traces in a single-threaded concurrent environment.

    * __Explicit__ - The context object is manually passed down from the top-layer to operations that need to be traced.

    * __Implicit__ - A transparent `in-process` context (thread-local). Transparent.

      * Implemented with `zipkin-context-cls` that uses `Continuation-Local Storage`. 

  2. __Recorder__ - Mandatory. `BatchLogger`/`ConsoleLogger`

    1. __Logger__

      * The `Logger` (or `Transport`) is what the `Recorder` uses to send spans to the `Zipkin Collector`.

      * `logSpan(span: model.Span): void;`

      * `zipkin-transport-http` supplied the `HTTPLogger` transport.

  3. __Sampler?__

    * Defines how to sample traces. 
    
    * Several samplers. `CountingSampler` will sample a % of incoming requests.

    * Sampling configuration can be passed from upstream using headers.

  5. __Console?__

  6. __Configuration Attribute__

    * `supportsJoin?: boolean`
    * `traceId128Bit?: boolean`
    * `localServiceName?: string`
    * `localEndpoint?: model.Endpoint`
    * `defaultTags?: {}`


---

## Recorder

  * `BatchRecorder` for use with an HTTP `Logger`. Can be configured with a `timeout`. Has `flush()`.

    * `ConsoleRecorder` can be used for debug logging. 

  * Recorder `records` a `Record`.

    ```ts
    /** The Tracer sends each annotation to a Recorder implementation */
    interface Recorder {
      record(rec: Record): void;
    }
    ```

  * A `record` is a `timestamped annotation` associated with a `trace`.
  
    ```ts
    interface Record {
      traceId: TraceId;
      timestamp: number;
      annotation: IAnnotation;
    }
    ```

* `Annotations` represent the `primitive events` of a `trace`/`span`:

  * e.g. `ClientSend`, `ServiceName`, `Message`, `RPC`, `CleintAddress`, etc.

  * [Annotations](https://github.com/openzipkin/zipkin-js/blob/bf7de8783a280b3e0d01eacd90ed1d9b4f10c7c4/packages/zipkin/index.d.ts#L181)


---

## Instrumentation

* [Instrumentation](https://github.com/openzipkin/zipkin-js/blob/bf7de8783a280b3e0d01eacd90ed1d9b4f10c7c4/packages/zipkin/index.d.ts#L343)

  ```ts
  HTTPClient | HTTPServer
  constructor(args: { tracer: Tracer, serviceName?: string, remoteServiceName?: string });

  recordRequest<T>(
    request: T,
    url: string,
    method: string
  ): T;
  recordResponse(traceId: TraceId, statusCode: string): void;
  recordError(traceId: TraceId, error: Error): void;
  ```

---

## Tracer Examples

```ts
const {
  Tracer,
  BatchRecorder,
  jsonEncoder: {JSON_V2}
} = require('zipkin');
const CLSContext = require('zipkin-context-cls');
const {HttpLogger} = require('zipkin-transport-http');

// Setup the tracer
const tracer = new Tracer({
  ctxImpl: new CLSContext('zipkin'), // implicit in-process context
  recorder: new BatchRecorder({
    logger: new HttpLogger({
      endpoint: 'http://localhost:9411/api/v2/spans',
      jsonEncoder: JSON_V2
    })
  }), // batched http recorder
  localServiceName: 'service-a' // name of this application
});

// now use tracer to construct instrumentation! For example, fetch
const wrapFetch = require('zipkin-instrumentation-fetch');

const remoteServiceName = 'youtube'; // name of the application that
                                     // will be called (optional)
const zipkinFetch = wrapFetch(fetch, {tracer, remoteServiceName});
```

```js
const zipkin = require('zipkin');

// In Node.js, the recommended context API to use is zipkin-context-cls.
const CLSContext = require('zipkin-context-cls');
const ctxImpl = new CLSContext();             // if you want to use CLS.
const xtxImpl = new zipkin.ExplicitContext(); // Alternative; if you want to pass around the context manually.

// Tracer will be a one to many relationship with instrumentation that use it (like express).
const tracer = new zipkin.Tracer({
  ctxImpl, // the in-process context
  recorder: new zipkin.ConsoleRecorder(), // For easy debugging. You probably want to use an actual implementation, like Kafka or AWS SQS.
  sampler: new zipkin.sampler.CountingSampler(0.01), // sample rate 0.01 will sample 1 % of all incoming requests
  traceId128Bit: true, // to generate 128-bit trace IDs. 64-bit (false) is default
  localServiceName: 'my-service' // indicates this node in your service graph
});
```

---

## References

* [zipkin-js](https://github.com/openzipkin/zipkin-js/tree/master/packages/zipkin)

  * [TypeScript Definitions](https://github.com/openzipkin/zipkin-js/blob/master/packages/zipkin/index.d.ts)

* [zipkin-context-cls](https://github.com/openzipkin/zipkin-js/tree/master/packages/zipkin-context-cls)

  * [Continuation-Local Storage](https://github.com/othiym23/node-continuation-local-storage)

  * [continuation passing style](https://en.wikipedia.org/wiki/Continuation-passing_style)

  * Requires `async-hooks` if the code insde the `context` uses `promises`. 
  
  * `async-hooks` may have performace issues.
