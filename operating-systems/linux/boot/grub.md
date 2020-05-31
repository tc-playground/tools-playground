# GRUB2 (Grand Unified Bootloader)

## Introduciton

* `GRUB 2` is the default boot loader for loading a `linux kernel` and starting the `system init process` like `systemd`.

* `GRUB 2` builds its menu `/boot/grub/grub.cfg` by running 

    * `scripts` found in the `/etc/grub.d/`.
    
    * `settings` in the `/etc/default/grub` file.

* `grub-update` is used to update these settings.

---

## Commands

* __GRUB version__ : `grub-install -v`

* __GRUB device install location__ : `sudo grub-probe -t device /boot/grub`

* __GRUB UUID install location__ : : `sudo grub-probe -t fs_uuid /boot/grub`

---

## Tools

* `grub-probe`

* `grub-mkconfig`

* `grub-install`

* `update-grub`

---

## Files

* __Menu__ : `/boot/grub/grub.cfg`

    * This file contains the GRUB 2 menu information.

* __User Settings__ : `/etc/default/grub`

    *  This file can be edited by a user with administrator (root) privileges and are incorporated into `grub.cfg` when it is updated.

* __Scripts__ : `/etc/grub.d/`

    * The `scripts` in this directory are read during execution of the `update-grub` command and their instructions are incorporated into `/boot/grub/grub.cfg`.

---

## References

* [GRUB2 - Ubuntu](https://help.ubuntu.com/community/Grub2/Setup)

* [Linux Boot and Startup](https://opensource.com/article/17/2/linux-boot-and-startup)

* [GRUB2 - OVerview](https://opensource.com/article/17/3/introduction-grub2-configuration-linux)

* [GRUB2 - Docs](https://www.gnu.org/software/grub/manual/grub/html_node/index.html)

* [GRUB2 - Developer Docs](https://www.gnu.org/software/grub/manual/grub-dev/html_node/index.html)

