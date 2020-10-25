# pwnagochi

## Introduction

* `Pwnagotchi` is a `Raspberry Pi Zero` is an A2C-based AI.

* `Pwnagotchi` powered by `bettercap`.

* `Pwnagotchi` tried to capture `WPA material`@

    * `passive sniffing`.
    
    * `deauthentication` and `association` attacks.

* `Pwnagochi` stores information as `PCAP` files:

    * `full` and `half WPA handshakes`.
    
    * `PMKID`

* `Pwnagochi` runs `Raspbian Lite`.

---

## Raspberry Pi Zero Notes

* `usb power port` - Top-left micro usb. Sets `auto` mode.

* `usb data port` - Top-right micro usb. Sets `manual` mode.

---

## Connect

* [Connection](https://pwnagotchi.ai/configuration/#connect-to-your-pwnagotchi)

* __Window Network Interface__

    * `USB RNDIS Adapter`

    * [Raspberry Pi Zero USB Ethernet Gadget Adapter](https://learn.adafruit.com/turning-your-raspberry-pi-zero-into-a-usb-gadget/ethernet-gadget)

    * [Raspberry Pi Zero USB Ethernet Gadget Adapter 2](https://www.circuitbasics.com/raspberry-pi-zero-ethernet-gadget/)

    * [Raspberry Pi Zero USB Ethernet Gadget Adapter 3 - Headless Setup](https://www.factoryforward.com/pi-zero-w-headless-setup-windows10-rndis-driver-issue-resolved/)

    * [USB RNDIS Gadget - Drivers](https://www.catalog.update.microsoft.com/Search.aspx?q=%20%20USB%20RNDIS%20Gadget)

    * [Bonjour](https://support.apple.com/kb/DL999?locale=en_US)

* `ssh`

    ```bash
    # default password: raspberry
    ssh pi@10.0.0.2
    ```

---

## References

* [Home Page](https://pwnagotchi.ai/)