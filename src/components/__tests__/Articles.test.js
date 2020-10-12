import React from 'react'
import { shallow } from 'enzyme';

import mockApiResponse from '../../helper';
import Articles from '../Articles';


describe('Articles component', () => {
  const props = {
    title: mockApiResponse.hits[0].title
  };
  const wrapper = shallow(<Articles {...props} />);

  test('match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});