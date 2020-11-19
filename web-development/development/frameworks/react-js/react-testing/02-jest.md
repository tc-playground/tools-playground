# Jest

## Introduction

* `jest` - Is a JavaScript automated test runner.

* `jest` - Finds all tests (ending in `.test.js`/`.spec.js`) and executes them.

* `jest` - Print out the test results to the terminal.

* `jest` - Watches the source code and executes the tests when the code changes."

* `jest` - Uses a component called `JSDOM` to replicate the functionality of the `Browser DOM`.

* `JSDOM` - Simulate browser behaviour.

* `enzyme` - Black-box testing of expected react components. 

  * e.g. 'expect(some_div).toHaveInstanceOf(some_react_component)`

---

## Jest Installation and Configuration

* `jest` installation

  ```bash
  npm install --save jest
  ```

* `jest` will always run the `${project_root}/src/setupTests.js` configuration file before testing: 

  * This can be used to configure `enzyme` and the `enzyme-adapter`.

---

## Jest Usage

### Test file `names` anf `locations`

* `jest` tests are recognised all follows:

  * Any file extended with `.test.js`, e.g: ./App.js -> ./App.test.js

  * Any file extended with `.spec.js`, e.g. ./App.js -> ./App.spec.js

  * Any file placed in `__tests__` directory, e.g. ./App.js -> ./__tests__/App-Tests.js

### Run tests

* __npm__ - `npm run test`

* __yarn__ - `yarn test`

### `it` Tests:

* `it` is a global function and does not need to be imported.

* `it("description of test", () => { TEST SETUP LOGIC && EXPECTATIONS })`

* __it descriptions__ should read cleanly.

```javascript
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
```

### `expectme_fivexpect(some_div).toHaveInstanceOFf(some_react_component) `clauses.

* `expectme_fivexpect(some_div).toHaveInstanceOFf(some_react_component)I`NSPECTED VALUE).MATCHER(EXPECTED VALUE);`

  * `toContain(EXPECTED)`

  * `toBeTruthy()`

* Example:
  ```javascript
    expectme_fivexpect(some_div).toHaveInstanceOFf(some_react_component)d`iv.innerHTML).toContain("Hello World!");
  });
  ```

---

## References

* [Home](https://jestjs.io/)

* [Docs](https://jestjs.io/docs/en/getting-started)

* [API](https://jestjs.io/docs/en/api)

* [GitHub](https://github.com/facebook/jest)
