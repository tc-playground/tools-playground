# Ubuntu Repositories

## Introduction

* A `repository` is nothing but a server that contains a set of software.

    * __Example__: http://us.archive.ubuntu.com/ubuntu

* `repositories` are configured for each host

    * `/etc/apt/sources.list` - Repository configuration. Debian. Ubuntu.

        * Example: `deb http://us.archive.ubuntu.com/ubuntu/ bionic main`

    * `/etc/apt/sources.list.d` - APT configuration directory.

    * `/var/lib/apt/lists` - APT package manager repository cache.

* Different `repositories` can host different classes of package:

    * `Ubuntu Repositories` - Provided by Ubuntu

        * `Main` - Default. FOSS. Security updates guaranteed. Debian/Ubuntu developer maintained.
        
        * `Universe` - FOSS. Security updates not guaranteed. Community developer maintained.
        
        * `Multiverse`- Not FOSS. Security updates not guaranteed. Community developer maintained.
        
        * `Restricted` - Proprietary. Usually drivers.
        
        * `Partner` - Proprietary software packaged by Ubuntu for their partners. e.g. Skype.
    
    * `PPA (Personal Package Archive) Repositories` - Provided by a Third-party


---

## References

* [Ubuntu Repositories](https://itsfoss.com/ubuntu-repositories)