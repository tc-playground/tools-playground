# Magic DNS Servers

## Introduction

* `Magic DNS Services` are special `domains` whose `authoritative DNS servers` return an `IP` based on the content of the `FQDN`:

    * `10.0.0.1.nip.io` maps to `10.0.0.1`

    * `app.10.8.0.1.nip.io` maps to `10.8.0.1`

* `Magic DNS Services` prevent the need for modifying `/etc/hosts` with custom `hostname` and `IP` address mappings.

---

## Services

* [xip.io](http://xip.io/)

* [nip.io](https://nip.io/)