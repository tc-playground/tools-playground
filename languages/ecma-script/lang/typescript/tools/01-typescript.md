# TypeScript

## Installation

1. __npm__:

    ```bash
    npm install -g typescript
    ```

2. __apt__

    ```
    sudo apt install node-typescript
    ```

---

## Compilation

1. __Example__ - 'greeter.ts'

    ```ts
    function greeter(person: string) {
        return "Hello, " + person;
    }

    let user = "anonymous";
    console.log()
    document.body.textContent = greeter(user);
    ```

2. __Compile__ - This will transpile the `TypesScript` source into `JavaScript`.

    ```bash
    # tsc <src.ts>
    tsc greeter.ts
    ```

---

## Node Type Definition File

```bash
npm install @types/node
```


---

## Reference

* [TypeScript in 5 mins](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)