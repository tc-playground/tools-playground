# Drake Build Tools

## Introduction

* Drake is a Make-like task runner for Deno inspired by Make, Rake and Jake.

---

## Drake Task Runner

```ts
import { desc, task, sh, run } from "https://deno.land/x/drake@v1.2.6/mod.ts";

desc("Run API");
task("start", [], async function () {
  await sh(
    "PORT=8000 deno run --allow-env --allow-net --allow-read src/mod.ts",
  );
});

run();
```

## Reference

* [Drake](https://deno.land/x/drake)