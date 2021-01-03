# Deno Installation

## Installation

* Install:

    ```
    curl -fsSL https://deno.land/x/install/install.sh | sh
    ```

* Update `.bash_profile`:

    ```sh
    if [ -d "${HOME}/.deno/bin" ]; then
        export DENO_INSTALL="${HOME}/.deno"
        export PATH="$DENO_INSTALL/bin:$PATH"
    fi
    ```

---

## Reference

* [Installation](https://deno.land/#installation)
