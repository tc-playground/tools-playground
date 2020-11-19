import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

import App from "./components/App";

const Page1 = () => {
  return (
    <div>
        <h1>Page1</h1>
        {/* Anchor taggs are a BAD approach for react-router - browser make new request for index.html */}
        {/* <a href="/page2">Navigate to Page 2</a> */}
        <Link to="/page2">Navigate to Page 2</Link>
    </div>
  )
};

const Page2 = () => {
  return (
    <div>
        <h1>Page2</h1>
        {/* Anchor tags are a BAD approach for react-router - browser make new request for index.html */}
        {/* <a href="/">Navigate to Page</a> */}
        <Link to="/">Navigate to Page 1</Link>
    </div>
  )
};

ReactDOM.render(
  <div>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Page1} />
        <Route path="/page2" component={Page2} />
      </div>
    </BrowserRouter>
    <br/>
    <App/>
  </div>,
  document.querySelector("#root")
);
