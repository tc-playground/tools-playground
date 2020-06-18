# Docker Command

## Introduction

* `docker` is the commandline interface for interacting with the `dockerd` daemon and `docker API`.

---

## Commands

> `docker -h` for more details.

* __Registry__

    * `login`       Log in to a Docker registry
    * `logout`      Log out from a Docker registry
    * `pull`        Pull an image or a repository from a registry
    * `push`        Push an image or a repository to a registry
    * `search`      Search the Docker Hub for images


* __Images__

    * `images`      List images
    * `rmi`         Remove one or more images
    * `build`       Build an image from a Dockerfile
    * `tag`         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
    * `history`     Show the history of an image
    * `commit`      Create a new image from a container's changes
    * `import`      Import the contents from a tarball to create a filesystem image
    * `export`      Export a container's filesystem as a tar archive
    * `save`        Save one or more images to a tar archive (streamed to STDOUT by default)
    * `load`        Load an image from a tar archive or STDIN

* __Container Operations__

    * `ps`          List containers
    * `inspect`     Return low-level information on Docker objects
    * `exec`        Run a command in a running container
    * `attach`      Attach local standard input, output, and error streams to a running container
    * `cp`          Copy files/folders between a container and the local filesystem
    * `logs`        Fetch the logs of a container
    * `port`        List port mappings or a specific mapping for the container
    * `diff`        Inspect changes to files or directories on a container's filesystem
    * `top`         Display the running processes of a container
    * `stats`       Display a live stream of container(s) resource usage statistics
    * `events`      Get real time events from the server
    * `info`        Display system-wide information


  * __Container Life-cycle__

    * `create`      Create a new container
    * `run`         Run a command in a new container
    * `start`       Start one or more stopped containers
    * `stop`        Stop one or more running containers
    * `pause`       Pause all processes within one or more containers
    * `unpause`     Unpause all processes within one or more containers
    * `rm`          Remove one or more containers
    * `kill`        Kill one or more running containers
    * `rename`      Rename a container
    * `restart`     Restart one or more containers
    * `update`      Update configuration of one or more containers
    * `wait`        Block until one or more containers stop, then print their exit codes


* __General__

    * `version`     Show the Docker version information

