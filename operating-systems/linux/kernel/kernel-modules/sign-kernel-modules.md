# HowTo: Sign Kernel Module for Secure Boot

# Introduction

* `UEFI Secure Boot (SB)` is a verification mechanism for ensuring that code launched by a computer's UEFI firmware is trusted. 

* `UEFI Secure Boot (SB)` is designed to protect a system against malicious code being loaded and executed early in the boot process, before the operating system has been loaded. 

* If `UEFI Secure Boot` enabled, `kernel modules` need to be `signed` with a registered `machine owner key` before they can be `loaded`.

    * e.g. `Virtualbox` requires `vboxdrv`, `vboxnetflt`, `vboxnetadp`, and `vboxpci` are before you can load them.

* A `Machine Owner Key (MOK)` is a certificate that can be registered with a system and used to `sign` approved `kernel modules`. 

* `mokutil` can be used `create` and `import` a `MOK`. 

---

## Example - Virtualbox

1. __Generate and Enroll MOK__

    1. `Generate a new MOK cert` if we do not already have one. Otherwise, skip to #4.

        ```bash
        openssl req -new -x509 -newkey rsa:2048 -keyout MOK.priv -outform DER -out MOK.der -nodes -days 36500 -subj "/CN=$HOSTNAME-kernel-mod-signer/"
        ```

    2. `Enroll the key and specify password`. Remember the password! Use it to register the MOK on when challenged on next boot.

        ```bash
        sudo mokutil --import MOK.der
        ```
        
    3. `Check the MOK key is enrolled`. Save the key if you wish to use it again to sign further `kernel modules`.

        ```bash
        mokutil --test-key MOK.der

        # Move key to a permanent location if you wish to use it again.
        mkdir -p $HOME/Work/security
        mv MOK.* $HOME/Work/security
        ```
    
    4. `Reboot machine` and register the new MOK when challenged.

2. Sign the Virtualbox Kernel Modules (vboxdrv, vboxnetflt, vboxnetadp, vboxpci)


    0. If required - Change to the directory where the MOK keypair is located.

    1. Sign the required modules

        ```bash
        sudo /usr/src/linux-headers-$(uname -r)/scripts/sign-file sha256 ./MOK.priv ./MOK.der $(sudo modinfo -n vboxdrv)
        sudo /usr/src/linux-headers-$(uname -r)/scripts/sign-file sha256 ./MOK.priv ./MOK.der $(sudo modinfo -n vboxnetflt)
        sudo /usr/src/linux-headers-$(uname -r)/scripts/sign-file sha256 ./MOK.priv ./MOK.der $(sudo modinfo -n vboxnetadp)
        sudo /usr/src/linux-headers-$(uname -r)/scripts/sign-file sha256 ./MOK.priv ./MOK.der $(sudo modinfo -n vboxpci)
        ```
    
    2. Check the module has been signed.

        ```bash
        tail $(sudo modinfo -n vboxdrv) | grep "Module signature appended"
        tail $(sudo modinfo -n vboxnetflt) | grep "Module signature appended"
        tail $(sudo modinfo -n vboxnetadp) | grep "Module signature appended"
        tail $(sudo modinfo -n vboxpci) | grep "Module signature appended"
        ```

    4. If required - reboot the machine and use the MOK dialog to enter the password and register each kernel module.

---

## References

* [Secure Boot - Debian](https://wiki.debian.org/SecureBoot)

* [Secure Boot - Ubuntu](https://wiki.ubuntu.com/UEFI/SecureBoot/DKMS)

* [Sign 'virtualbox' kernel modules](https://askubuntu.com/questions/760671/could-not-load-vboxdrv-after-upgrade-to-ubuntu-16-04-and-i-want-to-keep-secur/768310#768310)
