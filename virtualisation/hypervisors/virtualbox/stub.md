virtualbox-6.1

https://computingforgeeks.com/install-virtualbox-6-on-ubuntu-debian-linux/

---

virtualbox-6.1/unknown,now 6.1.6-137129~Ubuntu~eoan amd64 [residual-config]
  Oracle VM VirtualBox

virtualbox-dkms/eoan,eoan,now 6.0.14-dfsg-1 all [installed]
  x86 virtualisation solution - kernel module sources for dkms

virtualbox-ext-pack/eoan,eoan,now 6.0.14-1 all [residual-config]
  extra capabilities for VirtualBox, downloader.

virtualbox-guest-additions-iso/eoan,eoan 6.0.14-1~build1 all
  guest additions iso image for VirtualBox

virtualbox-guest-dkms/eoan,eoan 6.0.14-dfsg-1 all
  x86 virtualisation solution - guest addition module source for dkms


---

$> dpkg --list virtualbox-*
$> sudo apt search virtualbox

---

https://askubuntu.com/questions/661414/how-to-install-virtualbox-extension-pack

If you installed virtualbox from Ubuntu repositories, just install the package named virtualbox-ext-pack.

sudo apt install virtualbox-ext-pack

This way you can be sure that the right version will be installed, and they will also upgrade together if needed. Extremely simple, and I don't understand why you'd go to PPA and fiddle around yourself instead of this. Besides that I have virtualbox, virtualbox-dkms, and virtualbox-qt packages installed, a bunch of gvfs packages, and of course dkms.

---

Extension Pack

https://www.nakivo.com/blog/how-to-install-virtualbox-extension-pack/

https://www.virtualbox.org/wiki/Downloads


The GNS3 VM (IP=192.168.56.102, NETWORK=192.168.56.0/24) is not on the same network as the local server (IP=127.0.0.1, NETWORK=127.0.0.0/8), please make sure the local server binding is in the same network as the GNS3 VM

https://gns3.com/community/discussion/getting-local-server-and-remote-