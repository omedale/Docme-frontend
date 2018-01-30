import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import  Login from '../../client/components/Login';

function setup() {
  const props = {
    
  }
}

describe ('Test', () => {
  it('testing', () => {
    const props = {
      authors: [],
      actions: { saveCourse: () => { return Promise.resolve(); }},
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };
    const login = shallow(<Login />);

    expect(login.find('form').length).toBe(1);
  });
});