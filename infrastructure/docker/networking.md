# Docker Networking

## Introduction

* `Docker networking` is used to establish communication between the docker containers and the outside world via the host machine. 

* `Docker networking` is the communication passage through which all the isolated containers communicate with each other.

---

## Docker Networking Drivers

1. `Bridge network`

    1. The default network type created when docker is started.

    2. Containers by default are placed on this network.

    3. The network is `bridged` to the host.

2. `Host network` 

    1. Removes network isolation between the container and the Docker host.
    
    2. Use the host’s networking directly. The `network namespace` is not applied to container processes for containers on the network.
    
    3. A container which binds to port XXX is available on port XXX on the host’s IP address.
    
3. `None network`

    1. Containers are not attached to any network and do not have any access to the external network or other containers. 
    
    2. This network driver is used when you want to completely disable the networking stack on a container.

4. `Overlay network`

    1. Creates an internal private network that spans across all the nodes participating in the (swarm) cluster. 
    
    2. An `overlay network` can facilitate communication between a `docker swarm service` and a standalone container.
    
    3. An `overlay network` can facilitate communication between between two standalone containers on different Docker Daemons.

5. `Macvlan network`

    1. Applications that expect to be directly connected to the physical network (e.g. monitor network traffic) can use the `macvlan driver`. 
    
    2. The `macvlan network driver` assigns a MAC address to each container’s `virtual network interface`.
    
    3. This makes it appear to be a `physical network interface` directly connected to the `physical network`.

---

## References

* [Docker Networking Docs](https://docs.docker.com/v17.09/engine/userguide/networking)

* [Docker Networking Concepts](https://www.ostechnix.com/explaining-docker-networking-concepts0)

