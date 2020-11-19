# Routes

## Introduction

* `Routes` are components that map a browser `url path` to a `React component`.

* Multiple `Routes` can be matched. By default any `path` that is __contained in__ the browser url will be matched, __UNLESS__ the property `exact={true}` is specified.

* The `exact` property force exact routes matching. 

* Example:
    ```html
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Page1} />
        <Route path="/page2" component={Page2} />
      </div>
    </BrowserRouter
    ```