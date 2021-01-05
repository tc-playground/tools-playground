# Files


## Example - Build file paths

```ts
path.join(__filename, '..', '..', '..', '..', 'resources', 'light', icon);
```

---

## Example - Check existence

```ts
var fs = require('fs');
var dir = './tmp';
if (fs.existsSync(dir)){
    // Do stuff...
}
```

---

## Example - Create directory

```ts
var fs = require('fs');
var dir = './tmp';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true } );
}
```

---

## Example - Read file (sync)

```ts
import * as fs from 'fs';
// const fs = require('fs');
try {
    let fileContents = fs.readFileSync('./data.yaml', 'utf8');
    console.log(fileContents);
} catch (e) {
    console.log(e);
}
```

* [Reference](https://stackabuse.com/reading-and-writing-yaml-to-a-file-in-node-js-javascript/)

---

## Example - Read file (sync)

```ts
import * as fs from 'fs';
const data = "Some data...";
fs.writeFile('data.txt', data, (err) => {
    if (err) throw err;
    console.log('Data saved!');
});
```

* [Reference](https://stackabuse.com/writing-to-files-in-node-js/)

---

## Example - Delete file (sync)

```ts
const fs = require('fs')
const path = './file.txt'
try {
  fs.unlinkSync(path);
} catch(err) {
  console.error(err)
}
```

* [Reference](https://flaviocopes.com/how-to-remove-file-node/)

