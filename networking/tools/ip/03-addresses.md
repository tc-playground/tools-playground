# ip tool - Address Object

## Introduction

* `ip address` - Manage and view the state of network interface addresses.

---
## Overview

1. `ip addr [ COMMAND ] ADDRESS dev IFNAME`

2. `ip addr show` - List all interface addresses.

3. `ip addr show dev eth0` - Show interface eth0 addresses.

4. `sudo ip address add 192.168.121.45/24 dev eth0` - Add interface address.

5. `sudo ip address del 192.168.121.45/24 dev eth0` - Delete interface address.