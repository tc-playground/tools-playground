# Effectively Instrumented Code

## Introduction

> `effectively instrumented code` code produces good `logs`, `error messages`, and, `runtime (health) metrics`.

* `logging` - Descriptive log messages to be able to analyse message flow in a system.

    * `error messages` - Are clear and provide a `trace` of what caused the issues.

* `metrics` - Runtime metrics capture the right information about the `health` of the system, without, slowing it down.

---

## Logging

1. `Logging` is the process of recording messages to describe `events` that have occurred `while running` your software.

2. `Log events` should be concise and use normal capitalization.

3. `Log events` should be logged at an `appropriate level`: _DEBUG_, _ERROR_, _INFO_, etc.

4. `Log events` should provide any useful information such as `identifiers` where possible.

5. `Log events` should be able to be linked in-order to provide a `trace` of what lead to an event where possible.

6. `Log events` should be queryable in-order to `link them with other associated events` that may have lead to an issue.

---

## Metrics

1. `Metrics` provide information on the live `running health` of the code in `production`.

2. `Metrics` should be linked to `alarms` to raise alerts when the `metric health` is not as is expected.