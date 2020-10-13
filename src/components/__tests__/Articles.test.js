import React from 'react'
import { shallow } from 'enzyme';

import mockApiResponse from '../../helper';
import Articles from '../Articles';


describe('Articles component', () => {
  const wrapper = shallow(<Articles />);

  test('match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});