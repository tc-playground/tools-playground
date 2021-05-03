import React from "react";
import ReactDOM from "react-dom";

import Root from "Root";
import App from "../App";

// NB: This component test uses information from a child component.
//     Enzyme 'shallow' DOM's can be used to avoid this.
it("shows a comment box", () => {
    // Create a host div for the test on the JSDOM.
    const div = document.createElement('div');

    // Render the component to test onto the div.
    ReactDOM.render(<Root><App/></Root>, div);

    // You can console log to debug tests.
    // console.log("trjl> div.innerHTML", div.innerHTML);

    // expect(div.innerHTML).toContain("Comment Box");

    // Unmount the component to test.
    ReactDOM.unmountComponentAtNode(div);
});

