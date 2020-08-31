# Google gRPC / Protocol Buffers

## Introduction

* `Protocol Buffers (Protobuf)` is a method of `serializing structured data`.

* `Protocol Buffers` uses a `code generations engine`.

* `Protocol Buffers` data structures (called `messages`) and `services` are 

    * __Defined__ in a `.proto` definition file.
    
    * __Compiled__ with `protoc`.

* `gRPC` uses `Protocol Buffers` serialisation.

* `gRPC` uses `HTTP/2` for transport.

    * This currently makes it impossible to work in current browsers.

* `gRPC` provides:

    * `authentication`.
    
    * `bidirectional streaming` and `flow control`. 
    
    * `blocking` or `nonblocking` bindings.
    
    * `cancellation` and `timeouts`.

* `gRPC` supports the usage of `TLS` and `token based authentication`

    * `channel credentials`.

    * `call credentials`.

* `gRPC / Protocol Buffers`  is similar to `Avro` and `Thrift`.

---

## References

* [Protocol Buffers - Wikipedia](https://en.wikipedia.org/wiki/Protocol_Buffers)

* [Protocol Buffers - Home](https://developers.google.com/protocol-buffers/)

* [gRPC - Wikipedia](https://en.wikipedia.org/wiki/GRPC)

* [gRPC - Home](https://grpc.io/)

