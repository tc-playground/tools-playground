# `adduser`

## Overview

* `adduser` and `addgroup` add users and groups to the system according to command line options and configuration information in `/etc/adduser.conf`.

* `adduser` is a high level command interface.

---

## Commands

1. __Add user to group__ - `sudo adduser $(whoami) libvirt`

---

## Config

* `/etc/adduser.conf` - Default configuration file for adduser and addgroup.

* `/usr/local/sbin/adduser.local` - Optional custom add-ons.