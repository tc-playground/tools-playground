# ip tool - Route Object

## Introduction

* `ip route` - Manage and view the state of the `routing table`.

---
## Overview

1. `ip route list` -  List of the kernel route entries.

2. `ip route <selector>` - Show the selected route entry.

3. `ip route add default via 192.168.121.1 dev eth0` - Add a `default route` via the `gateway`.

4. `ip route add 192.168.121.0/24 via 192.168.121.1` - Add a `route` via the `gateway`.

5. `ip route add 192.168.121.0/24 dev eth0` - Add a `route` via a `device`.

6. `ip route del default` - Delete the `default route`.

7. `ip route delete 192.168.121.0/24 via 192.168.121.1` - Delete the route.