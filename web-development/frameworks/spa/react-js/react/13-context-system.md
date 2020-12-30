# React Context System

## Introduction

* The React `Context` System is designed to share data that can be considered `“global”` for a tree of React components, such as the `current authenticated user`, `theme`, or preferred `language`.

* `Context System` provides a mechanism to pass `props` directly to a child component __without__ passing them through intermediate components.

    * `props system` - Passes data from a parent component to the __direct__ child component.

    * `context system` - Pass data from a parent component to the __any__ child component.

* `Context` provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

    * `Context` provides `Provider` elements to store `global shared props`.

    * `Context` provides `Consumer` elements to reference `global shared props`.

---

## Notes

* The `context` is a `pipe` that passes data from one component to another.

* There are two main ways to pass data into the pipe:

    * `default value`

    * `ParentComponent.Provider`

* There are two main ways to pass get data out of the pipe:

    * `this.context`

    * `ChildComponent.Consumer` - This allows multiple context pipes to be used.

---

## Examples

* Create a `context`:

    ```javascript
    import React from 'react';
    const someState = {};
    export default React.createContext(someState);
    ```

* Wrap a component in a `context provider`:

    * __single provider__

        ```jsx
        <ColourContext.Provider value={this.state.colour}>
            <UserCreate/>
        </ColourContext.Provider>
        ```

    * __multiple providers__

        ```jsx
        <LanguageContext.Provider value={this.state.language}>
            <ColourContext.Provider value={this.state.colour}>
                <UserCreate/>
            </ColourContext.Provider>
        </LanguageContext.Provider>
        ```

* Wrap a component in a `context` or `context consumer`:

    * __single consumer__   

        ```javascript
        render() {
            return (
                <ColourContext.Consumer>
                    {colour => this.renderButton(colour)}
                </ColourContext.Consumer>
            );
        }    
        ```

    * __static context__

        ```javascript
        class Field extends React.Component {

            // Context Approach

            static contextType = LanguageContext;

            render() {
                const text = this.context === 'english' ? 'Name' : 'Naam'
                return (
                    <div className="ui field">
                        <label>{text}</label>
                        <input/>
                    </div>
                );
            }
        }
        ```
    
    ---

    ## References

    * [React Context System - Docs](https://reactjs.org/docs/context.html)
