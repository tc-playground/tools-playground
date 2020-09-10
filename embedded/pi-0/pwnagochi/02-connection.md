# Connection

## Connect

* [Connection](https://pwnagotchi.ai/configuration/#connect-to-your-pwnagotchi)

1. Connect USB to `data port`:

    1. `usb data port` - Top-right micro usb. Sets `manual` mode.

    2. `usb power port` - Top-left micro usb. Sets `auto` mode.

2. Ensure `network interface` has been create and configured:

3. Connect to device via `ssh`:

    ```bash
    # default password: raspberry
    ssh pi@10.0.0.2
    ```

---

## Configure Linux Network Interface

* Navigate to `Settings` -> `Network` -> `USB Ethernet` -> `Options` -> `IPv4`

* Select `Manual IPv4` method and configure the following:

    * __Addresses__  - `Address` : `10.0.0.1`, `Netmask` : `255.255.255.0`

    * __DNS__ - `8.8.8.8`.

* Get `usb0` interface details: `ip -c a show dev usb0`

---

## Configure Windows Network Interface

* Ensure `USB RNDIS Adapter` is installed.

    * [Raspberry Pi Zero USB Ethernet Gadget Adapter](https://learn.adafruit.com/turning-your-raspberry-pi-zero-into-a-usb-gadget/ethernet-gadget)

    * [Raspberry Pi Zero USB Ethernet Gadget Adapter 2](https://www.circuitbasics.com/raspberry-pi-zero-ethernet-gadget/)

    * [Raspberry Pi Zero USB Ethernet Gadget Adapter 3 - Headless Setup](https://www.factoryforward.com/pi-zero-w-headless-setup-windows10-rndis-driver-issue-resolved/)

    * [Bonjour](https://support.apple.com/kb/DL999?locale=en_US)


