# ssh-copy-id

## Introduction

* `ssh-copy-id` can be used to copy a `public ssh key` to a target device.

---

## Commands

* `ssh-copy-id -i <public-key> <user>@<host>` - Copy `public key` to device.

* `ssh-copy-id -i ~/.ssh/id_rsa.pub pi@10.0.0.2` - Copy public ssh key to pi-0 device.