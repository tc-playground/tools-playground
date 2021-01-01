# WireGuard

## Introduction

* `WireGuard` is a `Virtual Private Network (VPN)` technology.

* `WireGuard` uses `UDP`.

* `WireGuard` works by sending the `TCP packets` over `UDP (after encryption)` 

    * The receiver still knows the sequence but only calls back if there is an error. 
    
    * `TCP tunnel` within a `UDP tunnel`.

---

## Install WireGuard


```bash
sudo add-apt-repository ppa:wireguard/wireguard && sudo apt update
sudo apt install wireguard
```

---

## Generate WireGuard Keys

```bash
umask 077; wg genkey | tee privatekey | wg pubkey > publickey
```

---

## Configure WireGuard

```
sudo vim /etc/wireguard/wg0.conf
```

---

## Configuration

### Server Config

```conf
[Interface]
Address = 10.0.0.1/24
ListenPort = 51820
PrivateKey = <REDACTED>
PostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE

[Peer]
PublicKey = +yAqE8OYoMCDmkYZxpxQbhOFJWDJOByscOM6iQCpEhI=
# Permitted Peer IPs
AllowedIPs = 10.0.0.2/32
```

### Peer/Client Config

```conf
[Interface]
Address = 10.0.0.2/24
ListenPort = 51820
PrivateKey = <REDACTED>

[Peer]
PublicKey = vyrSFelOcxwsSs4YB/5vMdzvhF5ipqCG8pbdIUKqv2s=
AllowedIPs = 0.0.0.0/0, ::/0
# public server ip address
Endpoint = 18.132.3.186:51820
```

## Enable IP Forwarding

```bash
sudo nano /etc/sysctl.conf
# Ensure: net.ipv4.ip_forward = 1
sudo sysctl -p
```

---

## Commands

* `systemctl status wg-quick@wg0`- Check VPN.

* `sudo systemctl start wg-quick@wg0`- Start.

* `sudo systemctl stop wg-quick@wg0`- Stop VPN.

* `sudo systemctl disable wg-quick@wg0` - Disable start on boot.

* `sudo systemctl disable wg-quick@wg0`- Enable start on boot.

* `wg-quick up wg0` - Turn on.

* `wg-quick down wg0` - Turn off.

* `cat /etc/wireguard/wg0.conf` - Edit configuration.

* `sudo wg show` - Show status.

* `wg -h` - Get help.

* `umask 077; wg genkey | tee privatekey | wg pubkey > publickey` - Generate new public/private key pair.

---

## References

* [Wireguard - Home](https://www.wireguard.com/)

* [WireGuard - Config Generator](https://www.wireguardconfig.com/)

* [Wire Guard - AWS](https://github.com/isystem-io/wireguard-aws)

