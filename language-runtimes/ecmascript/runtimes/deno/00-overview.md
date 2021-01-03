
# Deno

# Introduction

* `Deno` is a `secure runtime` for `JavaScript` and `TypeScript`.

* `Deno` ships only a single executable file.

* `Deno` runs on the `V8` JavaScript Engine via `rusty_v8`.

* `Deno` is `secure by default`. 

    * No `file`, `network`, or `os env` access, unless explicitly enabled.

* `deno` has a [Runtime API](https://doc.deno.land/builtin/stable)

    * __Web APIs__ - `setInterval`, `setTimeout`, `fetch`, etc.

    * __Deno__ - `rusty_v8`

    * __WebAssembly__

* `Deno` has a [standard library](deno.land/std)

* `Deno` has built-in [build tools](https://deno.land/manual/tools), e.g:

    * __Dependency Analysis__ - `deno info`.
    
    * __code formatter__ -  `deno fmt`.

    * etc.

* `Deno` use `ES6 Modules` only.

    * Modules can  `decentralised` and accessed via `url`.

        * e.g. `github`, `cdn`, `local files`.
    
    * Modules can be `centralised` in `ES6 compliant registries`:

        * [Deno Third-Party](https://deno.land/x)

        * [Skypack](https://www.skypack.dev/)

---

## References

* [Deno - Home](https://deno.land/)

* [Deno - Manual](https://deno.land/manual/)

* [Deno - Repo - GitHub](https://github.com/denoland)

* [10 Things I Regret About Node.js - Ryan Dahl - JSConf EU](https://www.youtube.com/watch?v=M3BM9TB-8yA)

* [Deno is a New Way to JavaScript - Ryan Dahl & Kitson Kelly](https://www.youtube.com/watch?v=1gIiZfSbEAE&feature=emb_logo)



