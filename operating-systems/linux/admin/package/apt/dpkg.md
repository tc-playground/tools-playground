# dpkg

## Introduction

* `dpkg` is a tool to install, build, remove and manage Debian packages.

---

## Commands

* `dpkg -i {.deb package}` - Install/upgrade the package.

* `dpkg -R {Directory-name}` - Install all packages recursively from directory.

* `dpkg -r {package}` - Remove/Delete an installed package except configuration files.

* `dpkg -P {package}` - Remove/Delete everything including configuration files.

* `dpkg -l` - List all installed packages, along with package version and short description .

* `dpkg -l '*apache*'` - List all apache packages.

* `dpkg -l {package}` - List individual installed packages, along with package version and short description

* `dpkg -L {package}` - Find out files are provided by the installed package i.e. list where files were installed

* `dpkg -c {.Deb package}` - List files provided (or owned) by the package i.e. List all files inside debian .deb package file, very useful to find where files would be installed 

* `dpkg -S {/path/to/file}` - Find what package owns the file i.e. find out what package does file belong 	dpkg -S /bin/netstat

* `dpkg -p {package}` - Display details about package package group, version, maintainer, Architecture, display depends packages, description etc

---

## Example

dpkg -l virtualbox-*

rc  virtualbox-6.1                 6.1.6-137129~Ubuntu~eoan amd64        Oracle VM VirtualBox
ii  virtualbox-dkms                6.0.14-dfsg-1            all          x86 virtualization solution - kernel module sources for dkms
ii  virtualbox-ext-pack            6.0.14-1                 all          extra capabilities for VirtualBox, downloader.
un  virtualbox-guest-additions-iso <none>                   <none>       (no description available)
un  virtualbox-guest-dkms          <none>                   <none>       (no description available)
un  virtualbox-guest-modules       <none>                   <none>       (no description available)
un  virtualbox-modules             <none>                   <none>       (no description available)
un  virtualbox-ose                 <none>                   <none>       (no description available)
ii  virtualbox-qt                  6.0.14-dfsg-1            amd64        x86 virtualization solution - Qt based user interface

---

## Reference

* [dpkg - Wikipedia](https://en.wikipedia.org/wiki/Dpkg)