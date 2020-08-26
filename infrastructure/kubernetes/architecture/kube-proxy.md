# Kube Proxy

## Introduction

* `kubernetes` allows `multiple pods of the same type` to be proxied by a `service`.

* `kube-proxy` facilitates and manages each `Service` on each `Node` as defined for a specific cluster.

* To have `services` proxied correctly, every `node`, in a `cluster`, has to be aware of every `service` and every `pod`.

* `kube-proxy` utilizes `iptables rules` on the hosts and performs `connection forwarding`.

