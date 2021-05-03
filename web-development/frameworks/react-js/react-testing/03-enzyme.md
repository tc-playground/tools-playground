# Enzyme

## Introduction

* `enzyme` testing allows us to write more modular tests.

* `enzyme` testing allows us to write tests for a single component (excluding child components).

* `enzyme` testing allows us write tests that do not need to inspect the inner working of a component's `child components`.

* `enzyme` testing skips the `vanilla React` process of rendering the component under test.

* `enzyme` testing renders the component under test in one of three ways:

    1. `Static` - Render the given component as a plain static `HTML` string.

    2. `Shallow` - Render __just__ the given __component only__ (i.e. __None__ of it children) as a `JSDOM` element.

    3. `Full` - Render the given __component and all it's descendents__ as a `JSDOM` element.

---

## Installation

1. Add the `enzyme` and `enzyme-adapter` libs:

   ```bash
   npm install --save enzyme enzyme-adapter-react-16
   ```

   > NB: The adaptor needs to be the version appropriate for the current version of `React` being used: e.g. `enzyme-adapter-react-${react-major-version-number}`

2. Add `${project_root}/src/setupTests.js`:

   ```javascript
   import Enzyme from "enzyme";
   import Adapter from "enzyme-adapter-react-16";

   Enzyme.configure({ adapter: new Adapter() });
   ```

---

## Jest Methods

* `it()` - Define a single test.

* `describe()` - Group together a set of tests that require the same set-up and tear-down.

* `expect(invariant).checkerFunc(actual)` - Define an expected test result.


## Enzyme Methods

* `mount(jsx)` - Mounts a JSX component on the JSDOM.

* `unmount()` - Unmount a JSX component from the JSDOM. >NB: Required for 'full' DOMs.

* `beforeEach(function)` - Execute a block __before__ each test.

* `afterEach(function)` - Execute a block __after__ each test.

* `find(path)` - Finds an element on the JSDOM.

* `simulate(event[, mock])` - Simulate an event. >NB: Use the native JavaScript/DOM event name. e.g. `change`.

* `update()` - Forces a re-render of the JSDOM.

* `prop(key)` - Get the specified prop that was passed into the component.

* `text()` - Get the text coming out of a component. > NB: Not recommended.

* `render() => CheerioWrapper` - Get a `CheerioWrapper` over the data in the component.

* __Example__:

    ```javascript
    import React from "react";
    import { mount } from "enzyme";
    import CommentBox  from "components/CommentBox";

    let wrapped;

    beforeEach( () => {
        wrapped = mount(<CommentBox/>);
    });

    afterEach( () => {
        wrapped.unmount();
    });

    it ("has a textarea and a button", () => {
        expect(wrapped.find('textarea').length).toEqual(1);
        expect(wrapped.find('button').length).toEqual(1);
    });

    describe ("the text area", () => {

        const fakeInput = "fake test user input";
        const fakeEvent = { target: { value: fakeInput } };

        beforeEach( () => {
            // Simulate an event
            wrapped.find('textarea').simulate('change', fakeEvent);
            // Simulate the component being updated,
            wrapped.update();
        });

        it ("has a textarea users can type into", () => {
            // Check the prop value for the component is the same as the event.
            expect(wrapped.find('textarea').prop('value')).toEqual(fakeInput);
        });

        it ("has a textarea that gets cleared when a user clicks on submit", () => {
            // Check the test is set-up correctly.
            expect(wrapped.find('textarea').prop('value')).toEqual(fakeInput);
            // Check text area is cleared after 'submit'.
            wrapped.find('form').simulate('submit');
            wrapped.update();
            expect(wrapped.find('textarea').prop('value')).toEqual("");
        });
    });
    ```
