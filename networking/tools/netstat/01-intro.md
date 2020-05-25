# netstat

## Introduction

* `netstat` - Allows various aspects of a machine network configuration to be examined:

    * `network connections`

    * `routing tables`

    * `interface statistics`

    * `masquerade connections`

    * `multicast memberships`

> `netstat` is DEPRECATED by the `ss` and `ip` utilities.


## Commands

* __Show all listening TCP/UDP sockets and the managing process__

    ```
    netstat -tulp
    ```