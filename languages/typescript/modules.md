# Modules

## Introduction

* `modules` are a primary mechanism for organising code.

---

## TypeScript Exports

* The `export` keyword can be used to expose a `constant`, `variable`, `function`, `class`, etc.

    * It can the be imported into another module via the `import` keyword.

* A single export can be marked as `default`.

```ts
export myFunction() { ... }
export default myMainFunction() { ... }
```

---

## TypeScript Imports

* The `import` keyword can be used to expose a `constant`, `variable`, `function`, `class`, etc.

* The curly braces `{}` allow you to select what to import.

* The asterisk `*` will import everything.

* A plain `string` will create an alias for the `default` exported member of the module.

### Require Import

```ts
import core = require('oci-core');
import common = require('oci-common');
```

### TypeScript

```ts
import * as core from 'oci-core';
import * as common from 'oci-common';
import { myFunction, myConst, myVar } from './myModule.js';
import myFunction from './myModule.js';
```

