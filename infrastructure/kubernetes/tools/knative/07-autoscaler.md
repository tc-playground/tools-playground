# Autoscaling

## Introduction

1. `Knative Autoscaler` is implemented via the `autoscaling triad`: 

    1. `autoscaler`
    
    2. `activator`
    
    3. `queue-proxy`

2. `autoscaling` - measure or predict `demand`, automatically ensure `capacity` matches demand.

    1. `predictive autoscaling` - Attempt to determine demand by predicting future conditions.

    2. `reactive autoscaling` - Attempt to determine demand based on current conditions.

3. `demand` - How is it measured?

    1. `CPU Consumption` - K8s Horizontal Pod Autoscaler.

4. `capacity` - How is it measured?

    1. `CPU Consumption` - K8s Horizontal Pod Autoscaler.

5. `windows of observation`

6. `frequency of decisions`

---

## Scaling

1. __No Errors__ - Buffer traffic when no instances to service requests.

2. __Robust__ - System is not overwhelmed by demand.

1. __Efficient__ - System should not waste resources unnecessarily.

---

## Scaling Implementation

1. __Scenarios__

    1. `0 Request / 0 Instance` - No change.
    2. `0 Request / 1 Instance` - Scale down.
    3. `0 Request / N Instance` - Scale down.
    4. `1 Request / 0 Instance` - Scale up to 1. Activator datapath.
    5. `1 Request / 1 Instance` - No change.
    6. `1 Request / N Instance` - Scale up.
    7. `N Request / 0 Instance` - Panic. Activator datapath. Autoscaler panic mode.
    8. `N Request / 1 Instance` - Panic. Autoscaler panic mode.
    9. `N Request / N Instance` - Scale up. Square root provisioning.

2. __Operating Regimes__

    1. `Scale down`.
    2. `No change`.
    3. `Scale up`.
    4. `Panic`.

---

## Activator

1. __Datapaths__

    1. When there are `no instances` the `activator` is placed on the `datapath` and becomes the actual target of traffic management.

        * NB: The `traffic management` and routing is managed by the `networking implementation`, e.g. `istio`.

2. __Handle Burst Capacity__

    1. When an instance is provisioned, traffic is still routed through the `activator`.

    2. The `activator` sends `metrics` to the `autoscaler`.

    2. The `activator` mirrors `autoscaler` calculations to determine wether it should stay on the `data path`.

    3. When `settled` the `activator` takes itself off the `datapath` and `KServices` are target directly.

3. __Buffering__

    1. The `autoscaler` buffer requests when on the `datapath`, and, traffic will be forwarded to the `queue proxy`.

---

## Autoscaler

1. __Normal Mode__

    1. Check request counts every `60s`. NB: This granularity smooths noise and prevents `seeking`.

    2. Scales `up` and `down`.


2. __Panic Mode__

    1. When a `traffic burst` is detected by the `autoscaler` it enters `panic mode`.

    2. `increase sensitivity`-  Check request counts every `6s`.

    3. `upscale mode` - Enters a mode where `scale down operations` are not performed. This prevents `seeking`.


3. __Reactive Autoscaler__

    1. Knative currently uses `reactive autoscaling`.

    2. __Proportional__

        * `knative autoscaler` makes decisions about desired instances that is based on its calculation of the gap between `demand` and `capacity`.

    3. __Integral__

        * `knative autoscaler` calculates desired instances from statistics gathered in two sliding windows (`normal` and `panic`).
    
    4. __Differential__

        * `knative autoscaler` doe not currently consider rates of change.


4. __Predictive Autoscaling - Seasonality__

    1. Knative currently does not use `predictive autoscaling`.

    * [Scryer](https://netflixtechblog.com/scryer-netflixs-predictive-auto-scaling-engine-a3f8fc922270)


5. __Square Root Staffing Rule__

    * Based on call-centre staffing observations.

    1. Increases resources as the square root of demand.

        * __Variables__ - Request rate, 

    * As resources increases there is a greater probability there will be a free resource to handle an incoming request.

    * As request handling time increases there is a decreased probability there will be a free resource to handle an incoming request.

    * The `autoscaler` tries to target a particular level of load per instance.

        * `low traffic levels` - High proportion increase (1 -> 2 : 100%)
        * `high traffic levels` - Low proportion increase (100 -> 101 : 1%) 

---

## Queue-Proxy

1. When a `Service` or `Configuration` is submitted `Knative` will add a `queue-proxy` as a `sidecar`.

2. The `queue-proxy` has control over the `networking`.

3. __Request Queue__ The `queue-proxy` has a small, `shallow` buffer to smooth out the flow of requests and responses. 

    1. The `queue` allows `receipt` of request to be confirmed.

    2. The `queue` provides limited smoothing.

    3. The `queue` is shallow to prevent increases in `latency`.

    4. The `queue` is shallow to help detect unhealthy instances when errors/latency spike so they can be removed from the pool.

4. __Gather Request Statistics__

    1. The `queue-proxy` gathers `request statistics` for the `autoscaler`.

---

## Autoscaling Theory

1. The `autoscaler` is a `control loop` and `queuing system`.

2. __PID Controller (Proportional Integral Differential Controller)__

    1. `Proportional` - Decisions are based on the size of the difference between desired worlds and actual world.

    2. `Integral`- Decision are based on smoothed values over time, e.g. taking a weighted average of differences between desired and actual world.

    3. `Differential` -  Decisions are based on how fast the difference between desired and actual world is changing.

---

## Queuing Theory

1. __Parameters__

    * `Arrival`        : The item to be serviced, e.g. `HTTP request`.
    * `Server`         : The resource doing the work, e.g. `Function`.
    * `Queue Length`   : The average number of arrivals waiting in a queue.
    * `Arrival Rate`   : `Demand` over time. e.g. `HTTP requests / second`.
    * `Service Rate`   : `Throughput`.The amount of work done per time-unit. The inverse of `Service Time`.
    * `Wait Time`      : The average amount of time spent queueing for a server.
    * `Service Time`   : The time it takes for a server to process one piece of work excluding queueing time.
    * `Residence Time` : `Latency`. `Wait Time` + `Service Time`.
    * `Utilization`    : The fraction of time the server is busy doing something.
    * `Concurrency`    : The total number of arrivals either waiting in a queue or being processed.

2. __Little's Law__

    * `Average Concurrency` = `Average Arrival Rate` × `Average Service Time`

    * Holds (on average) regardless of the `pattern of arrivals`.

    * Can be used to `sanity check` system.

    * Can be use to configure `autoscaler`.

3. __Utilization__

    * `Utilization` = `Arrival Rate` / `Service Rate`

    * `Residence Time` = `Service Time` × (`Utilization` / (`1 - Utilization`) )

    * __Slowdown__

        * `utilisation` and `service time` are related.

        * `slowdown` is __exponential with increased utilization__.

        * The difference between operating at 80% utilization and 90% utilization != `10%` -> ~ `20%`.

        * The difference between operating at 98% utilization and 99% utilization != `1%` -> ~ `50%`.

        * `70% utilisation` might be a good heuristic for the upper bound on `utilisation`.

---

## Knative Autoscaler Algorithm

TODO

---

## Knative Autoscaler Configuration

1. The `autoscaler` can be configured globally.

    1. `ConfigMap` record in the `knative-serving` namespace, named `config-autoscaler`

        ```bash
        kubectl apply -f example.yaml
        ```

        ```yaml
        apiVersion: v1
        kind: ConfigMap
        metadata:
            name: config-autoscaler
            namespace: knative-serving
        data:
            enable-scale-to-zero: 'true'
        ```

2. The `autoscaler` can be configured at the `Service`/`Configuration` level with `autoscaling.knative.dev`.

    1. Using `kubectl` with an `annotation`.

        ```bash
        kubectl annotate revisions \
            hello-example-fvpbc-1 \
            autoscaling.knative.dev/minScale=1
        ```

        * `enable-scale-to-zero`

    2. Using `kn` with an `annotation`.

        ```bash
        kn service update \
            hello-example \
            --annotation autoscaling.knative.dev/minScale=1
        ```

3. __Autoscaling Parameters__

    1. __Configure Scaling Rates__

        * `minScale / min-scale` - A statement of how much delay you can afford. Cold start management.

        * `maxScale / max-scale` - A statement of how much capacity you can ever afford. Protection from DDoS, errors, etc.

        * `min-scale-up-rate` - Defaults to `1000`. Protect against huge surges. Most often seen in `panic mode`.

        * `max-scale-up-rate` - Default `2`. Smooths scale down.

        * `scale-to-zero-grace-period` - Default `30s`. Smooths very low traffic cases.

    2. __Configure Concurrency and Utilization Target Values__

        * Determine the `ratio of requests to instances` that the autoscaler will try to maintain.

            * `100` * `0.7` = `70` concurrent requests per instance.

        * `concurrency-target-default` - Defaults to `100`. 

            * Control the `maximum possible value` for concurrent requests for any one instance.
            
            * Can be increased or decreased based on the power of the host system.

            * If set to `1` means `each request gets its own instance`.

        * `targetUtilizationPercentage` / `container-concurrency-target-percentage` - Default value `70`.

            * Control the `actually desired value` for concurrent requests for each instance on average.

            * Leave alone.

        * `requests per second` can be configured as the scaling metric instead of `concurrency`.
    
    3. __Configure Decision Intervals__

        1. `autoscaler` surveys the world and renders judgement on a regular `2-second` intervals.

        2. `tick-interval` - Defaults to `2s`. 

            * Shorter is more accurate, but, more jittery.

            * Longer is less accurate, but, smoother.

    4. __Configure Window Size__

        1. `stable-window` - Defaults to `60s`.

            * Shorter reacts to change in demand faster, but, is more jittery.
                
            * Longer reacts to change in demand more slowly, but, is smoother.
        
        2. `panic-window-percentage` - Default to `10%`. Needs to be small to catch sudden shifts in demand.

    5. __Configure Panic Threshold__

        1. `panic-threshold-percentage` - Lower percentage for extremely valuable workloads that must be reacted to quickly.

    6. __Configure Target Burst Capacity__

        1. `Target Burst Capacity (TBC)` subsystem is about the ratios at which the `Activator` stays in the data path.

            * `Activator` needs to understand how much `capacity` the current instances will be able to safely absorb in a "burst".

            * If the `Activator` is on the path, there `increased latency`, but, there is an additional layer of `buffering`.
            

---

## References

* [Scryer - Predictive Autoscaling](https://netflixtechblog.com/scryer-netflixs-predictive-auto-scaling-engine-a3f8fc922270)










