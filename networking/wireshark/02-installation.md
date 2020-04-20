# GNS3 Installation

## Ubuntu

1. Install Wireshark:

    1. Install Wireshark (Universe)

    ```bash
    sudo add-apt-repository universe
    sudo apt install wireshark
    ```

    2. Install Wireshark (PPA)

    ```bash
    sudo add-apt-repository ppa:wireshark-dev/stable
    sudo apt update
    sudo apt install wireshark
    ```

2. Configure Wireshark

    1. Do not require `sudo`:

    ```bash
    sudo dpkg-reconfigure wireshark-common
    ```
    * > When prompted whether non-root users should be allowed to use `wireshark`, select ‘Yes’.

    2. Add user to `wireshark` group:

    ```bash
    sudo usermod -aG wireshark $(whoami)
    ```

3. Start Wireshark

    ```bash
    wireshark
    ```

---

## References

* [Linux - Official](https://www.wireshark.org/docs/wsug_html_chunked/ChapterBuildInstall.html)

* [Ubuntu]()https://itsfoss.com/install-wireshark-ubuntu)




