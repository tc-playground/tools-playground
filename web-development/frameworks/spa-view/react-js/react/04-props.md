# Props

## Introduction

* `React props` are a mechanism for passing data from a `parent component` to a `child component` when it is created.

---

## Overview

* `props` are a mechanism for passing data from a `parent component` to a `child component`.

* `props` are __passed into__ a `component` via the `jsx` tag:
    ```
    <CommentDetail author={theAuthor} book={theBook}/>
    ```

* `props` are __accepted by__ a `Class Based Component` via the `constructor` :
    ```javascript
    class MyComponent extends React.Component {
        construction(props) {
            super(props);
            this.state = {};
            ...
        }
        ...
        render () {
            <a href="/" className="author">{this.,props.author}</a>
        }
    }
    ```

* `props` __must be accepted by__ a `Function Based Component` in it`s definition:
    ```javascript
    const CommentDetail = props => {
        ...
        <a href="/" className="author">{props.author}</a>

    }
    ```

* `props.children` can be used access embedded components to allow re-use. This allows one component to be passed into another so the parent component wraps the child component:
    ```
    const App = () => {
        return (
            <div>
                <Segment>
                    <div className="ui icon header">
                        <i className="pdf file outline icon"></i>
                        No documents are listed for this customer.
                    </div>
                    <div className="ui primary button">Add Document</div>
                </Segment>
            </div>
        );
    }

    const Segment = props => {
        return (
            <div className="ui placeholder segment">
                {props.children}
            </div>
        );
    }
    ```

* `props` __read only__. All React components must act like `pure functions` with respect to their props.

* `props` __go down__. In general, props are passed down the `component hierachy`.

* `props callback functions` __can be passed down from `parent components` to `child components` to allow them to update parents and share functionality between the children.

* `props defaults` for class or function components can be specified by setting the`defaultProps`.
    ```
    MyComponent.defaultProps = {
        text: "Loading..."
    }
    ```

---

## References

* [Components and Props](https://reactjs.org/docs/components-and-props.html)

