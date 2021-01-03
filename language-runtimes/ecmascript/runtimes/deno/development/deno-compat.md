# Deno Compatibility

## Introduction

* `Deno` uses `ES6 Modules` only. `NodeJS` uses `CommonJS Modules`.

* `Deno` uses a different `WebAPI` than `NodeJS` and `Browsers`.

* `Deno` has a `compatibility` layer to help resolve this.

* Most `JavaScript`/`TypeScript` code is built for the `browser` or `NodeJS` runtimes.

---

## Tools

* [Deno Compat Layer](https://deno.land/std@0.83.0/node)

    * NodeJS `polyfills` for Deno.

    * `CommonJS` module loading.

* [Denoify](https://github.com/garronej/denoify) - Like `Browserify` but for `Deno`.

---

## References

* [Using NPM Modules in Deno](https://stackoverflow.com/questions/61821038/how-to-use-npm-module-in-deno)

* [Cross-runtime compatibility](https://stackoverflow.com/questions/48358748/module-not-found-error-cannot-resolve-module-fs)

* [Node.js compatibility: Using npm packages in Deno ](https://dev.to/mxfellner/node-js-compatibility-using-npm-packages-in-deno-52hh)

* [Using node modules in Deno](https://medium.com/samsung-internet-dev/using-node-modules-in-deno-2885600ed7a9)