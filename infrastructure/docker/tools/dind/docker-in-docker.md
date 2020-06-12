# Docker in Docker (dind)

## Introductions

* `docker-in-docker (dind)` is a technique for using `docker in one container` to manage `new docker containers`.

* Requires `Docker 1,8+`.

---

## Shared daemon Docker-in-Docker

* A container, with `Docker` installed, daemon connects to the Docker daemon of the host system. 
    
    * That means, you will have a `Docker` CLI in the container, as well as on the `Docker CLI` on the host system.
    
    * Both connect to one and the same Docker daemon. 
    
    * At any time, there is only one Docker daemon running the machine machine, the one running on the host system.

    > This allow the container `Docker CLI` to spawn and managed new containers, but, let them remain independent.

* This can be performed using a `bind mount` tot he local `docker daemon socket` when starting the container:

    ```bash
    docker run -ti -v /var/run/docker.sock:/var/run/docker.sock docker
    ```

* This only provided `partial encapsulation`:

    * If a new container is pulled the image will be visible on the host system as well as inside the container.

    * If a new container is spawned it will be a `sibling` to the current containers - not a `child`.

---

## Real Docker-in-Docker

> THIS IS AN ARCHIVED PROJECT

* A container, with `Docker` installed, runs it's own `docker daemon` (in addition to the one running on the host system that spawned it).

* `docker-in-docker` is a set of bash scripts and a container image lets you run Docker within Docker.

* `docker-in-docker` runs a `docker daemon` inside the container and uses it to spawn and manage other containers.

* `docker-in-docker` requires `privileged` mode.

* `docker-in-docker` issues:

    * The can be problems `Linux Security Modules (LSM)` that prevent things working correctly.

    * There can be issues `storage drivers` and incompatibilities when layering filesystems.

    * Caching becomes hard.

    * Docker daemon is not designed to share share the  `/var/lib/docker` directory between multiple Docker instances.

* __docker-in-docker quick-start__

    ```bash
    # Clone Docker-in-Docker
    git clone git@github.com:jpetazzo/dind.git
    cd dind

    # Build Docker-in-Docker
    docker build -t dind .

    # Run Docker-in-Docker - Get a shell where you can play, and docker daemon logs to stdout.
    docker run --privileged -t -i dind

    # Run Docker-in-Docker - Get a shell where you can play, but docker daemon logs into /var/log/docker.log:
    # docker run --privileged -t -i -e LOG=file dind

    # Run Docker-in-Docker - Expose the inside Docker to the outside world:
    docker run --privileged -d -p 4444 -e PORT=4444 dind
    ```

---

## References

* [Docker in Docker - No!](http://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/)

* [Docker in Docker - No! 2](https://itnext.io/docker-in-docker-521958d34efd)

* [(Real) Docker in Docker - GiHub](https://github.com/jpetazzo/dind)

* [(Real) Docker in Docker - DockerHub](https://hub.docker.com/_/docker/)

