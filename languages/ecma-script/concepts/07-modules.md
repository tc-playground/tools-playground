# Modules

## Introduction

* `Modules` are a mechanism for `grouping functionality` and promoting `weak coupling`.

* `Modules` are a mechanism for managing the `global scope` and `namespacing`.

* `Modules` can __export__ `functions`, `variables`, and, `constants`.

* `Modules` can __import__ `functions`, `variables`, and, `constants`.

* __History__

    1. `Immediately Invoked Function Expression (IIFE)` and `Module Pattern`.

    2. `CommonJS`, `Asynchronous Module Definitions (AMD)`, `Universal Module Definitions (UMD)`.

    3. `Native ES6 Modules`.

---

## IIFE / (Revealing) Module Patterns

* An `IIFE` can be used as a kind of `scoping mechanism`:

    ```js
    // Namespace returned functions, variables, constants...
    var someModule = (function (optionalGlobalInputs) {
        // Global Scope is accessible!
        window.access_some_global();
        // Return an object containing the public interface.
        return {
            someNum: 5;
            someFn: () = { console.log("executing...")}
        }
    })(optionalGlobalInputs);

    someModule.someFn();
    ```

* Module pattern IIFE's are still executed on script load.

* The return object contains the `public interface`.

* Object from the `global scope` can be passed into the `module closure`.

* __Disadvantages__

    * The `global scope` is still polluted with `module variable`. Name clashes.

    * The `dependencies` are no explicit, so, scripts need to be imported in the `correct dependency order`.

---

## CommonJS

* `CommonJS` loads libraries `synchronously`.

* Use `require` and `module.exports` to define input and output dependencies.

    ```js
    var mod01 = require('mod01');
    var mod02 = require('mod02');

    function fn01() = { return mod01.doThing(); };

    module.exports = {
        fn01: fn01
    }
    ```

* `CommonJS` was the original default used by `NodeJS` and `NPM`.

* `CommonJS Registries` like `NPM` can be used to store and share modules.

* `Bundlers` like `Webpack` and `Browserify` could be used:

    * Create a single file to load faster

    * To convert modules.

---

## AMD (Asynchronous Module Definitions)

* `AMD` load libraries `asynchronously`.

* Uses `define` to import modules asynchronously.

    ```js
    define(['mod01', 'mod2']), function(mod01, mod02) {
        function fn01() = { return mod01.doThing(); };
        return {
            fn01: fn01;
        }
    })
    ```

* Implemented by `RequireJS` (even though `CommonJS` is the one with the `require` keyword!).

---

## UMD (Universal Module Definition)

* An `if-then-else` block to determine if `CommonJS` or `AMD` is used by the module.

---

## ES6 Native Modules

* A native module system for `ES6`.

* Uses `import` and `export` modules:

    ```js
    import mod1 from 'mod1';
    import mod2 from 'mod2';

    function fn01() = { return mod01.doThing(); };

    export fn01;
    ```

* `ES6 modules` must be served from a server.

* `ES6 modules` must be defined by full file path with extension `./mod.js`.

* `ES6 modules` must be defined in `script tags`:

    ```html
    <html>
        <script type='module' src='./script.js'></script>
        <script type='module'>
            import def, { other } from 'script';
            // ...
        </script>
    <html>
    ```

---

## References

* [ES6 Module - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)