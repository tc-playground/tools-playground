# Bash

## Introduciton

* `bash` - GNU Bourne-Again SHell

* `bash` supports several `modes`:

    * `login shell`, `interactive shell`, etc

* `bash` reads a sequence of __configurations files__ on `login` and `logout`:

    1. __Login__ - `/etc/profile` -> `~/.bash_profile` -> `~/.bash_login` -> `~/.profile`.

    2. __Logout__ - `~/.bash_logout`


---

## Commands

* `bash -c` - Commands are read from the first non-option argument `command_string`.

* `bash` _caches_ the location of executable once it has searched for them.

    * `type <file>` - Check if the command is cached.

    * `hash -r` - Flush the `bash cache`. NB: `hash` is a shell `builtin`.