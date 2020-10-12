# OpenVPN Droplet

## Introduction

* Create an `OpenVPN` droplet in Digital Ocean.

---

## Steps

1. [Open VPN Server](https://marketplace.digitalocean.com/apps/openvpn-access-server#getting-started)

---

## Curl Command

```bash
curl -X POST -H 'Content-Type: application/json' \
     -H 'Authorization: Bearer '$DO_API_TOKEN'' -d \
    '{"name":"xepsa-vpn","region":"lon1","size":"s-1vcpu-1gb","image":"openvpn-18-04"}' \
    "https://api.digitalocean.com/v2/droplets"
```