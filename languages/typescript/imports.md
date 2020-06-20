# Modules

## TypeScript Exports

* The `export` keyword can be used to expose a `constant`, `variable`, `function`, `class`, etc.

    * It can the be imported into another module via the `import` keyword.

---

## TypeScript Imports

### Require Import

```
import core = require("oci-core");
import common = require("oci-common");
```

### TypeScript

```
import * as core from "oci-core";
import * as common from "oci-common";
```