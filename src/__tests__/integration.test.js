import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';


beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments' , {
        status : 200,
        response : [{name : 'fetched1'} , {name : 'fetched2'}]
    });
});


afterEach(() => {
moxios.uninstall();
})


it ('can fetch a list of items and display them', (done)=> {

    const wrapped = mount (
        <Root>
            <App/>
        </Root>
    );

    // find the 'fetchComments' button and click it

    wrapped.find('.fetch-comments').simulate('click');

    // expect to find a list of comments

       moxios.wait(() => {
            wrapped.update();
            expect(wrapped.find('li').length).toEqual(2);
            done();
            wrapped.unmount();
        });
   
})