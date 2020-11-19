import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'fake fetched comment #1'}, {name: 'fake fetched comment #2'}]
    });
});

afterEach(() => {
    moxios.uninstall();
});

// NB: Jest tests can be accept a function that can be invoked when
//     the test is complete - this help with 'timeouts'.
it ('can fetch a list of comments and display them', (done) => {
    // Attempt to render the entire App.
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );

    // Find the 'fetch comments' button and click it.
    wrapped.find('.fetch-button').simulate('click');
    
    // Check a list of comments has been fetched.
    // NB: Wait a sec for moxios to mock underlying http request...
    //     Jest also has to be told the test is now finished.
    //
    // setTimeout(() => {
    //     wrapped.update(); // Update the JSDOM.
    //     expect(wrapped.find('li').length).toEqual(2);
    //     done();
    //     wrapped.unmount();
    // }, 500);
    //
    moxios.wait(() => {
        wrapped.update(); // Update the JSDOM.
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    });

    
});

