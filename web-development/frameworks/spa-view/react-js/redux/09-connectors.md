
# React Redux Connectors

* A `connector` is attached to the `provider` and a `react component`.

* The `connectors` set up a direct __communication channel__ between the `provider` and a `react component` via the `context` system. `State` cawn be passed to the component as `props`.

* The `connectors` also associate with `action creators` and a `react component`. These are passed to the `react component` as `props`. These can then `dispatch` action events to the reducers.

* A `connector` is a function.

* A `connector` is a `higher order function` (`HOF`) that can accept `props` and `state` mapping functions.

* The `connectors` are normally found in the the `React component` (`container`) files.

---

## React Redux Connector - Common Functions

* `mapStateToProps(state, ownProps` - Select the required state from the global `store` and pass it inot the `React component` via the `props`.

* `connect()` - A higher order function used to compose a component with a set of `props` and a set of `action creator functions`
    ```javascript
    import React from "react";
    import { connect } from "react-redux";

    import { actionCreatorFunc01, actionCreatorFunc02 } from "../actions";

    class SomeComponent extends React.Component {
        ...
    }

    mapStateToProps = (state, ownProps) => {
        ...
    }

    export default connect(
        mapStateToProps, 
        { actionCreatorFunc01, actionCreatorFunc01 }
    )(SomeComponent);
    ```