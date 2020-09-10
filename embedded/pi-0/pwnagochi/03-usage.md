# Usage

## Web UI

* __URL__

    * `http://10.0.0.2:8080` / `hank.local:8080`

    * default - `changeme:changeme`

* __Configuration__

    ```bash
    ui.web.username = "my_new_username"
    ui.web.password = "my_new_password"
    ```

---

## bettercap UI

* __URL__

    * `http://10.0.0.2:80` / `hank.local`

    * default: `pwnagotchi:pwnagotchi`

* __Configuration__

    ```bash
    ui.web.username = "my_new_username"
    ui.web.password = "my_new_password"
    ```

---

## Files

* `cat /etc/pwnagotchi/config.toml` - Config.

* `sudo ls /root/handshakes` - Pcap files.

* `sudo ls /root/peers` - Peers.

* `/var/log/pwnagotchi.log` - Logs.

* `cat /root/brain.json` - AI config.