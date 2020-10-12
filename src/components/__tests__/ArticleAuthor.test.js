import React from 'react'
import { shallow } from 'enzyme';

import mockApiResponse from '../../helper';
import ArticleAuthor from '../ArticleAuthor';


describe('ArticleAuthor component', () => {
  const props = {
    author: mockApiResponse.hits[0].author
  };
  const wrapper = shallow(<ArticleAuthor {...props} />);

  test('match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('have author label', () => {
    const label = wrapper.find('.zoom-article-author');

    expect(label).toHaveLength(1);
    expect(label.text()).toBe(mockApiResponse.hits[0].author.name);
  });
});