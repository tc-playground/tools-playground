# Node Version Manager (NVM) Tool

## Overview

* `NVM` help manage the version of `NodeJS` installed on a machine.

---

## Installation

* [NVM - Github](https://github.com/nvm-sh/nvm) - Installation instructions, or, install via the OS package manager.

  1. __Install Script__

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
    ```

  2. __Configuration__

    ```
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    ```

---

## Examples

```bash
# Get information about NVM
nvm --version
nvm current

# List NodeJS versions
nvm ls
nvm ls-remote

# Install and use a new version of NodeJS
nvm install 10.17.0
nvm use 10.17.0
```

# Set the default version
nvm alias default 10.17.0

---

## References

* [NVM - Github](https://github.com/nvm-sh/nvm)
