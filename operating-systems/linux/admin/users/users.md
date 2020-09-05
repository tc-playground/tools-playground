# Users

## Introduction

* `users` are an entity using the `system resources`.

* `users` can be member of multiple `groups`.

* `users` can be added to `/etc/sudoers` for fine grained command execution.

---

## Commands

### Info Commands

* `cat /etc/passwd` - List all `users`.

* `id` - List underlying identity and groups for the `current user`.

* `useradd -D` - List default creation options.

* `cat /etc/adduser.conf` - Get the default configuration file for `adduser`.

* `cat /etc/deluser.conf` - Get the default configuration file for `deluser`.

### Create Commands

* `sudo adduser <user>` - Create a `<user>`. High level command.

* `sudo adduser -D <user>` - Create a `<user>` with `default` options.

* `sudo useradd <user>` - Create a `<user>`. Low level command.

### Update Commands

* `usermod` - Manage user. `groups`, `home`, `lock`, `login`, etc.

    * `sudo usermod -aG <group> <user>` - Add `<user>` to `<group>`.

    * `sudo usermod -aG <group> $(whoami)` - Add current user to `<group>`.

* `sudo adduser <user> <group>` - Add `<user>` to `<group>`.

* `sudo deluser <user> <group>` - Delete `<user>` from `<group>`.

### Delete Commands

* `sudo deluser <user>` - Delete a `<user>`. High level command.

* `sudo userdel <user>` - Delete a `<user>`. Low level command.

---

## References

* [User Management - Pluralsight](https://www.pluralsight.com/guides/user-and-group-management-linux)
