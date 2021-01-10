# Event Sources and Sinks

## Introduction

1. `sources` - Are processes that emit `CloudEvents`.

2. `sinks` - Define the locations `CloudEvents` should be send.

    * In Knative `sinks` are a component of `sources`.

    * Services can be `bound` but must be created first.

3. [Eventing Sources](https://knative.dev/docs/eventing/sources/) / [Github](https://github.com/knative/eventing-contrib)

---

## Sources

1. __Anatomy__

    1. `Source`

        1. `Sink`

        2. `CloudEvent Overrides`

        3. `Source Specific`
    
    * In Knative, anything with a `Sink` and a `CloudEvent Overrides` is a `source`.

2. __ContainerSource__

3. __SinkBinding__ - Adapt a source via an injected `K_SINK` environment variable.