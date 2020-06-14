# `du`

## Overview

* `du` estimates file space usage.

* `du` should be used to investigate the `size` of files taking up this space.

> NB: `df` should be used to investigate the amount of space remaining to a filesystem.

---

## Commands

* `du` - Default. Recursively check the current directory.

* `df <file-path>` - For filesystem of specified file.

* `df <dir-path>` - Recursively check the specified directory.

* `du -a` - Include hidden files and directories.

* `du -h` - Human friendly.

* `df --inodes` - Inode information.

* `du | sort -n -r | head -n 10` - Find top 1- largest files.

---

## References

* [NixCraft](https://www.cyberciti.biz/faq/linux-check-disk-space-command/)