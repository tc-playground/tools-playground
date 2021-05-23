# Logging and Monitoring

* __Logging__

    * Emit `Log Events` from the code.

    * `Logging Events` can be stored is a desired format. e.g. `Syslog`, `JSON`, etc.

    * Aggregate and store `Log Events` in a queryable `Logging System`.

        * e.g. `elastic search`

* __Monitoring Metrics and Alerting__

    * __Scrape__ metrics from the `logs`.

    * Emit `Monitoring Events` from the code.

    * `Monitoring Events` can be stored is a desired format. e.g. `JSON`, etc.

    * Aggregate and store `Monitoring Metric Events` in a queryable `Metrics System`.

        * e.g. `Time-Series Database` (e.g. `Prometheus`, `InfluxDB`, `Graphite`)

        * e.g. `Visualisation` (e.g. `Grafana`)
    
    * Define `Alarms` and `alerting`.

---

## Logging And Monitoring

In order to properly understand and diagnose issues that crop up within a system, it’s critical to have mechanisms in place that create audit trails of various events that occur within said system.

## JSON

A file format heavily used in APIs and configuration. Stands for JavaScript Object Notation. Example:

## Logging

The act of collecting and storing logs--useful information about events in your system. Typically your programs will output log messages to its STDOUT or STDERR pipes, which will automatically get aggregated into a centralized logging solution.

## Monitoring

The process of having visibility into a system's key metrics, monitoring is typically implemented by collecting important events in a system and aggregating them in human-readable charts.

## Alerting

The process through which system administrators get notified when critical system issues occur. Alerting can be set up by defining specific thresholds on monitoring charts, past which alerts are sent to a communication channel like Slack.
Publish/Subscribe Pattern
Publish/Subscribe. Press/Tug. Produce/Consume. Push/Pull. Send/Receive. Throw/Catch. Thrust/Retrieve.

Three of these can be used interchangeably in the context of systems design. The others cannot.

## Polling

The act of fetching a resource or piece of data regularly at an interval to make sure your data is not too stale.

## Streaming

In networking, it usually refers to the act of continuously getting a feed of information from a server by keeping an open connection between the two machines or processes.

## Persistent Storage

Usually refers to disk, but in general it is any form of storage that persists if the process in charge of managing it dies.
