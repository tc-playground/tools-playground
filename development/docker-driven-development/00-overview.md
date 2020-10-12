# Docker Driven Development (DDD) / Docker Based Workflows

## Introduction

1. `docker` __images__ and __containers__ can be used to establish local `development workflows`.

2. `docker driven development` provides:

    1. A mechanism to provide tooling to quickly set up new development machine `environments`.

    2. A mechanism to keep host development machines free of local `SDK tool-chains` and `library dependencies`.

    3. A mechanism that is closer to the `CI/CD` deployment process and final `production target`.

    4. A mechanism that is closer to final `production target` such as `kubernetes`.

    5. A mechanism that during development can help with integrated services such as `secrets`.

3. `docker driven development` needs to overcome several hurdles to be practical.

---

## DDD Requirements

### Establish a base `SDK-tool-chain` image for the target language.

1. Have a `dockerfile` for the target SDK or service.

    * __Navigation__ :  inside/outside the container.

    * __Relative Paths__ : Handling `PWD` / `CWD` do not hard-code path.

    * __Working Directory__ : Handling `PWD` / `CWD` do not hard-code path.

    * __Mount__ : `-v <full-host-path>:<ful-container-path>`. Mount all the resources outside the container inside the container.

    * __Expose__ : `-p <host-port>:<container-port>`. Export any require ports inside the container to outside the container.

    * __Base Image__ : Choose an appropriate `base image`: `version`, `slim`, `distro`, etc.

    * __Build__


2. Have a `docker-compose-yaml` for building and interacting with multiple Dockerfiles

    * Mount source code into container.

    * describe docker run commands as a yaml file (instead of bash script). - build, run, up/down

        * Manual docker commands vs YAML

    * docker run commands

    * docker exec

    * `docker-compose build <target>` 

    * Write, compile, run.


3. Docker Image Layering

    * `Docker Build` - Every line in the dockerfile becomes a layer in the image. NB: This si performed top-down. Once built the layers are cached and a hash created. They are only run again if the underlying file has changed.

    * Create four layer `development environment`
        1. Base
        2. Dependencies (only use the dependency file - will only execute if it changes)
        3. Source
        4. Build
    
    * Docker Multistage

        1. Give each stage an alias. Supply `target` when you build. e.g. Docker compose.

        2. Use different base images for different stages: full SDK, slim, etc.

        2. Add debug stuff to a stage so they don't end up in the production image (instead development image).

4. Auto Reloading Code

5. Debugging

* Add `debug port`

* `Add seccomp exceptions`.

* Requirements

    1. VS Code Extension

        1. Extension Mapping to say 

            1. Where the source code is locally.

            2. Where to find it in the container.

            3. Debugger communication config - some `listen on a port`, some `use ssh`, some use `docker exec`

    *  Language Debugger 

    * Dockerfile with 

6. Prometheus / Grafana Monitoring

    1. Add a `prometheus endpoint` to the app.

    2. Add `metrics server endpoint`.

    3. Augment code with metrics

        * `counters` - create a static variable in code

            * how many times has X been called?

            * How many errors?
        
        * `histogram`

            * Measure time in buckets.

    4. Deploy with `docker compose` - `prometheus`, `grafana`, `grafana-dashboards`

    5. `prometheus.yaml` 

        * configure `global` scraping `intervals`.

        * configure `scrape jobs`

        * configure where the `endpoints target` are.
    
    6. `prometheus` has service discovery mechanism.

    7. `Create a Grafana` dashboard.

        * `irate()` - Calculate the rate in `counts per second` of a counter of a specified bucket size.

        * `duration` = rate(sum_in_seconds[2m]) / rate(count_in_seconds[2m])



7. Profiling

8. Language Specific

`C#` prometheus-net

`NodeJS` prom-client

`Golang` prometheus/client_golang

`Python` prometheus_client https://www.youtube.com/watch?v=HzEiRwJP6ag&list=PLHq1uqvAteVvqQaaIAvfIWWTL_JmmXcfg&index=8



