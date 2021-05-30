import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {

    const initialState = {
        comments: [ 'comment_01', 'comment_02']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});


it ('create one li element per comment', () => {
    // console.log(wrapped.find('li').length);
    expect(wrapped.find('li').length).toEqual(2);
});

it ('shows the text from each comment on the screen', () => {
    // console.log(wrapped.render().text());
    expect(wrapped.render().text()).toContain('comment_01');
    expect(wrapped.render().text()).toContain('comment_02');
});