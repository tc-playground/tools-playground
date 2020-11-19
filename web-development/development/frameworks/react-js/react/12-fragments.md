# React Fragments

---

## Introduction

* `react fragments` are like invisible elements.

* Instead of using a `<div>` to hold multiple sibling elements use `<React.Fragment>` or `<>`.

    ```javascript
    // NB: instead of <React.Fragment> we can also do <>.
    const actions = (
        <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );
    ```