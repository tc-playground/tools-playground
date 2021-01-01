# Magic DNS Servers

## Introduction

* `Magic DNS Services` are special `domains` whose `authoritative DNS servers` return an `IP` based on the content of the `FQDN`:

    * `10.0.0.1.nip.io` maps to `10.0.0.1`

    * `app.10.8.0.1.nip.io` maps to `10.8.0.1`

* `Magic DNS Services` prevent the need for modifying `/etc/hosts` with custom `hostname` and `IP` address mappings.

---

## Dynamic Services

* [xip.io](http://xip.io/)

* [nip.io](https://nip.io/)

* [Linux-Fu: Your Own Dynamic DNS](https://hackaday.com/2020/08/25/linux-fu-your-own-dynamic-dns/)