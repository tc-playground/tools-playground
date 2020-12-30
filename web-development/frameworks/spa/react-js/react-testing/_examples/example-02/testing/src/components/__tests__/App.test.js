import React from "react";
import { shallow } from "enzyme";

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";


let wrapped;
// Executed before each test. Include common test logic.
beforeEach(() => {
    // Create a shallow JSDOM to prevent tests accessing child component information.
     wrapped = shallow(<App/>);
});

it("shows a comment box", () => {

    // Just check for the recorded existence of a single child component.
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
    // Just check for the recorded existence of a single child component.
    expect(wrapped.find(CommentList).length).toEqual(1);
});
