# Docker Bridge Demo

## Introduction

1. Create two containers and test communication over the `default bridge`.

2. Create new `docker bridge` networks.

---

## Demo

1. Create two containers using the `default` docker network (`bridge`).

```bash
docker run -it -d --name c1 alpine ash
```

```bash
docker run -it -d --name c2 alpine ash
```

---

2. Get the `ip` address of each container on the default docker network.

```bash
docker exec -it c1 sh -c "ip a"
```

```bash
docker exec -it c2 sh -c "ip a"
```

---

3. __Attach__ to each container and `ping` the ip of the other container.

```bash
$> docker attach c1
/ # ping 172.17.0.3
```

```bash
$> docker attach c2
/ # ping 172.17.0.2
```

---

4. __Inspect__ the docker bridge network.

```bash
docker network inspect bridge
```

---

5. __Create__ new bridge networks.

```
docker network create bridge-nw-01
```

```
docker network create --river bridge bridge-nw-02
```

---

6. __List__ all networks.

```
docker network list
```

---

7. __Run__ three containers on a `host network`.

```
docker run -it -d --name A1 --network bridge-nw-01 alpine ash
docker run -it -d --name A2 --network bridge-nw-01 alpine ash
docker run -it -d --name A3 --network bridge-nw-01 alpine ash
```

* Each container can ping the others by `name` or by `ip`.

```
docker exec -it A1 sh -c "ping A2"
docker exec -it A1 sh -c "ping A3"
docker exec -it A2 sh -c "ping A1"
docker exec -it A2 sh -c "ping A3"
docker exec -it A3 sh -c "ping A1"
docker exec -it A4 sh -c "ping A2"
```

---

8. Determine which `host bridge devices` relate to each `docker bridge network`.

    1. List `host network devices`

    ```bash
    ip addr
    ```

    2. List `docker networks`

    ```bash
    docker network ls
    ```
    
    3. The `docker network id` identifies the `host bridge device`

    ```
    NETWORK ID          NAME                DRIVER              SCOPE
    80b72501fe0d        bridge-nw-01        bridge              local
    ```

    ```
    16: br-80b72501fe0d: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:7a:77:0e:68 brd ff:ff:ff:ff:ff:ff
    inet 172.19.0.1/16 brd 172.19.255.255 scope global br-80b72501fe0d
       valid_lft forever preferred_lft forever
    inet6 fe80::42:7aff:fe77:e68/64 scope link 
       valid_lft forever preferred_lft forever
    ```

    4. __Show__ the interface by appending the `br-` preefix to the `docker network id`:

    ```
    ip addr show br-80b72501fe0d
    ```
