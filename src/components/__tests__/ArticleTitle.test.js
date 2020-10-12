import React from 'react'
import { shallow } from 'enzyme';

import mockApiResponse from '../../helper';
import ArticleTitle from '../ArticleTitle';


describe('ArticleTitle component', () => {
  const props = {
    title: mockApiResponse.hits[0].title
  };
  const wrapper = shallow(<ArticleTitle {...props} />);

  test('match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('have title label with correct text', () => {
    const label = wrapper.find('.zoom-article-title');

    expect(label).toHaveLength(1);
    expect(label.text()).toBe(mockApiResponse.hits[0].title);
  });
});