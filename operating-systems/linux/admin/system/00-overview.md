# System

## Introduction

---

## User and OS

* `id` - User information.

* `w` - Show `who` is logged in.

* `lsb_release -a` - Operating System release info.

---

## General

* `hwinfo` – probe for `hardware`.

    * __Selected Options__ - `-short`, `--disk`, `--block`

* `inxi -Fxz` - Get system, machine, CPU, graphics, audio, network, driver, partitions, sensors, OS info.

* `lshw`

    * `sudo lshw -short` - Lists hardware info, memory, graphics, audio, buses.

    * `sudo lshw -C cpu` - Show `CPU` info.

* `lstopo` - Create a visualisation of the `topology` of the the machine.

---

## Memory

* `free` - Get free and used `memory`.

---

## Processor

* `lscpu` - Show `CPU` info.

---

## Block Devices

* `lsblk` - Show `block devices` info.

---

## PCI Devices

* `lspci` - Show `PCI` info/

---

## USB Devices

* `lsusb` - List `usb devices` attached to the system. NB: Graphical `sudo usbview`.

---

## References

* [Nix Craft](https://www.cyberciti.biz/open-source/linux-commands-to-know-the-system/)

