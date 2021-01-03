# Deno Modules

## Overview

* `Deno` use `ES6 Modules` only.

* Modules can  `decentralised` and referenced via a `Module Url`.

    * e.g. `github`, `cdn`, `local files`.

---

## ES6 Modules and Package URL Syntax

* `Module Urls` contain he `version` number of the module.

    * `https://deno.land/std@0.78.0/log/mod.ts`

* Modules can be `centralised` in `ES6 compliant registries`:

    * [Deno Third-Party](https://deno.land/x)

    * [Skypack](https://www.skypack.dev/)

---

## Package Lockfiles

* `deno` can be used to create a `lock.file` for the current package versions.
    
    ```bash
    touch lock.json
    deno cache --lock=lock.json --lock-write src/deps.ts
    ```

---

## Deno Package Conventions

* By convention the entry-point file is called `mod`.

    * e.g. `mod.ts`/`mod.js` (as opposed `index.ts` or something else).

* By convention a `src/dep.ts` is used as a central point to import all modules.

    ```ts
    // Standard library dependencies
    export * as log from "https://deno.land/std@0.78.0/log/mod.ts";
    export { join } from "https://deno.land/std@0.78.0/path/mod.ts";
    export { parse } from "https://deno.land/std@0.78.0/encoding/csv.ts";
    export { BufReader } from "https://deno.land/std@0.78.0/io/bufio.ts";

    // Third party dependencies
    export {
    Application,
    Router,
    send,
    } from "https://deno.land/x/oak@v6.3.2/mod.ts";

    export {
    pick,
    flatMap,
    } from "https://deno.land/x/lodash@4.17.15-es/lodash.js";
    ```

* By convention objects are imported from exported `src/dep.ts` exports.

    * `import { log, Application, send } from "./deps.ts";`

---

## References

* [Deno Third-Party - deno.land](https://deno.land/x)

* [Deno Third Party - nest.land](https://nest.land)

* [Skypack](https://www.skypack.dev/)

* [JSPM](https://jspm.org/)

* [Snowpack](https://www.snowpack.dev/posts/2020-05-26-snowpack-2-0-release/)