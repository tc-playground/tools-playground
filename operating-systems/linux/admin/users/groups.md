# Groups

## Introduction

* `groups` can be used to define a set of `file permissions`.

* `users` can be member of multiple `groups`.

---

## Commands

### Info Commands

* `getent group` - List all groups.

* `getent group <name>` - List all users in a group.

* `id -nG` - List all groups for current user.

* `cat /etc/group` - List all groups.

* `cat /etc/adduser.conf` - Get the default configuration file for `addgroup`.

* `cat /etc/deluser.conf` - Get the default configuration file for `delgroup`.

### Create Commands

* `sudo addgroup <group>` - Create a `<group>`. High level command.

* `sudo groupadd <group>` - Create a `<group>`. Low level command.

* `sudo groupadd <group> -g <gid>` - Create a `<group>` with the specified `<gid`>.

### Update Commands

* `sudo usermod -aG <group> <user>` - Add `<user>` to `<group>`.

* `sudo usermod -aG <group> $(whoami)` - Add current user to `<group>`.

* `sudo deluser <user> <group>` - Delete `<user>` from `<group>`.

### Delete Commands

* `sudo delgroup <group>` - Delete a `<group>`. High level command.

* `sudo groupdel <group>` - Delete a `<group>`. Low level command.

---

## References

* [Group Management - Linuxize](https://linuxize.com/post/how-to-create-groups-in-linux/)
