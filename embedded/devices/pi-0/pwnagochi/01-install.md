# Installation

## Overview

* [Installtion Guide](https://pwnagotchi.ai/installation/)

1. Source `pi-0`, `micro SD card`, and `micro USB data cable` components.

2. Download [Pwnagochi Raspbian Image](https://github.com/evilsocket/pwnagotchi/releases)/

3. Burn image to `micro sd card`

    ```bash
    # or use Etcher: https://www.balena.io/etcher/
    dd if=path/to/pwnagotchi-raspbian-lite-XXX.img of=/dev/sdcard bs=1M
    ```

4. Mount the `boot drive` and add the [configuration file](https://pwnagotchi.ai/configuration/) to `/`:

    ```toml
    main.name = "Hank"
    main.lang = "en"
    main.whitelist = [
      "BSSID"
    ]

    main.plugins.grid.enabled = true
    main.plugins.grid.report = false
    main.plugins.grid.exclude = [
      "BSSID"
    ]

    ui.display.enabled = true
    ui.display.type = "waveshare_2"
    ui.display.color = "black"
    ```

5. Power the device and wait for installation to complete. 

    * It could take a while! Don't interrupt it.