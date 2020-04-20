# GNS3 Installation

> `GNS3` integrates with `KVM`, `Docker`, and `Wireshark`. 

## Ubuntu

1. Install GNS3

```bash
# Core
sudo add-apt-repository ppa:gns3/ppa
sudo apt update
sudo apt install gns3-gui gns3-server

# IOU = IOS over Unix. 
sudo dpkg --add-architecture i386
sudo apt update
sudo apt install gns3-iou
```

* > When prompted whether non-root users should be allowed to use `wireshark` and `ubridge`, select ‘Yes’ both times.

2. Install Docker

``` bash
# Docker
sudo apt remove docker docker-engine docker.io
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
"deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) stable"
sudo apt update
sudo apt install docker-ce
```

3. Configure User Groups

```bash
# Configure the following groups for your user
sudo usermod -aG ubridge `whoami`
sudo usermod -aG libvirt `whoami`
sudo usermod -aG kvm `whoami`
sudo usermod -aG wireshark `whoami`
sudo usermod -aG docker `whoami`
```

---

## References

* [Linux - Official](https://docs.gns3.com/1QXVIihk7dsOL7Xr7Bmz4zRzTsJ02wklfImGuHwTlaA4/index.html)

* [Ubuntu 16](https://computingforgeeks.com/how-to-install-latest-gns3-network-simulator-on-ubuntu-18-04-ubuntu-16-04/)

* [Cisco - IOS VM](https://gns3.com/news/article/how-to-setup-and-configure-cisco)