# Processes

## Current Working Directory

* __Process working directory__ : The current working directory of the Node.js process.

```js
process.cwd();
```

* __Executing file location__ - The current path of whatever directory the JavaScript file or module Node.js is running.

```js
import * as path from 'path';
__dirname
// or...
path.dirname(__filename);
```

* [Current working Directory](https://coderrocketfuel.com/article/get-the-path-of-the-current-working-directory-in-node-js)