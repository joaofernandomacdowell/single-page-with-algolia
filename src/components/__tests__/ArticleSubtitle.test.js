import React from 'react'
import { shallow } from 'enzyme';

import mockApiResponse from '../../helper';
import ArticleSubtitle from '../ArticleSubtitle';


describe('ArticleSubtitle component', () => {
  const props = {
    subtitle: mockApiResponse.hits[0].subtitle
  };
  const wrapper = shallow(<ArticleSubtitle {...props} />);

  test('match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('have subtitle label with correct text', () => {
    const label = wrapper.find('.zoom-article-subtitle');

    expect(label).toHaveLength(1);
    expect(label.text()).toBe(mockApiResponse.hits[0].subtitle);
  });
});