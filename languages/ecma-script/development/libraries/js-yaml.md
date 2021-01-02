# js-yaml

## Introduction

* `js-yaml` is a library for handling files in the `YAML` format.

---

## Example - Read

```js
const fs = require('fs');
const yaml = require('js-yaml');

try {
    let fileContents = fs.readFileSync('./data.yaml', 'utf8');
    let data = yaml.safeLoad(fileContents);

    console.log(data);
} catch (e) {
    console.log(e);
}
```

---

## References

* [js-yaml - GitHub](https://github.com/nodeca/js-yaml)

* [js-yaml - GitHub](https://github.com/nodeca/js-yaml)

* [js-yaml - Tutorial](https://stackabuse.com/reading-and-writing-yaml-to-a-file-in-node-js-javascript/)