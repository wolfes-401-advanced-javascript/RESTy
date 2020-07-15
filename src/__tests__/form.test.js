import React from 'react';

import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Form from '../components/form.js';
import App from '../app.js';

describe('Form tests', () => {
  it('should render at application start', () => {
    let app = shallow(<Form />);
    expect(app.find('#methods').exists()).toBe(true);
    expect(app.find('#update').exists()).toBe(true);
  });
  it('should update state on click', () => {
    let app = mount(<App />);
    let subButton = app.find('#get');
    subButton.simulate('click');
    expect(app.state('method')).toBe('Get');
  });
});