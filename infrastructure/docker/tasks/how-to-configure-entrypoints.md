# HowTo: Configure Docker container CMD and ENTRYPOINT

## Introduction

1. Should a `Dockerfile` contain an `ENTRYPOINT` instruction, a `CMD` instruction, or both?

2. `ENTRYPOINT` + `CMD` = Array of (default) container command arguments.

    1. __Overridable__ : Both `ENTRYPOINT` and `CMD` separately overridable at runtime.

    2. __Optional__ : Both `ENTRYPOINT` and `CMD` may be empty

    > By addition (+), meant concatenation of `ENTRYPOINT` and `CMD`, respectively, in `array context`.

3. Dockerfile `ENTRYPOINT` and `CMD` definitions are always converted to `arrays`. 


---

## References

* [Dockerfile Reference - Docs](https://docs.docker.com/engine/reference/builder/)

    * [ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint)

    * [CMD](https://docs.docker.com/engine/reference/builder/#cmd)

* [Demystifying ENTRYPOINT and CMD in Docker](https://aws.amazon.com/blogs/opensource/demystifying-entrypoint-cmd-docker/)