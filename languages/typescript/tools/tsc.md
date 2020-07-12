# tsc

* `tsc` is the TypeScript transpiler.

## Install

1. __npm__:

    ```bash
    npm install -g typescript
    ```

2. __apt__

    ```
    sudo apt install node-typescript
    ```

---

## Init - Generate `tsconfig.json` build file.

```bash
tsc --init
```

* Configure `rootDir` for source and `outDir`.

---

## Transpile

```bash
# Produces 'js' output that can be run with Node.js
# node index.js
tsc index.ts


# When a 'tsconfig.json' is configured with 'rootDir` and `outDir`
# we can watch the src dir and automatically transpile.
tsc -w

# Run the utput with Node.js
# node build/index.js
```

---

## Run 

```bash
npm init
npm install nodemon concurrently
```

* `nodemon` will watch JavaScript source.

* `concurrently` allows multiple scripts to be run in one process.

* Add run scripts to `package.json`

    ```json
    "scripts": {
        "start:build": "tsc -w",
        "start:run": "nodemon build/index.js",
        "start": "concurrently npm:start:*",
    }
    ```

    * `npm start` will start the build environment.




