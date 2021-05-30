# React Router Switch

## Introduction

The default for `react router` route matching is to __greedily__ match __ALL__ routes. This can changed to only match one exact route using the `switch` element.

---

## Example

* Here, the path `/streams/new` will only render `StreamCreate` and not `StreamShow` too:

    ```javascript
    const App = () => {
        return (
            <div className="ui container">
            <Router history={history}>
                <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/:id" exact component={StreamShow} />
                </Switch>
                </div>
            </Router>
            </div>
        )
    };
    ```