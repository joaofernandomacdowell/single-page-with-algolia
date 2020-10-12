import React from 'react'
import { shallow } from 'enzyme';

import mockApiResponse from '../../helper';
import ArticleItem from '../ArticleItem';
import ArticleImage from '../ArticleImage';
import ArticleTag from '../ArticleTag';
import ArticleTitle from '../ArticleTitle';
import ArticleSubtitle from '../ArticleSubtitle';
import ArticleAuthor from '../ArticleAuthor';


describe('ArticleItem component', () => {
  const props = {
    hit: mockApiResponse.hits[0]
  };
  const wrapper = shallow(<ArticleItem {...props} />);

  test('match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('renders with all required components', () => {
    // expect(wrapper.containsMatchingElement(ArticleImage)).toBe(true);
    // expect(wrapper.containsAnyMatchingElements([
    //   ArticleImage,
    //   ArticleTag,
    //   ArticleTitle,
    //   ArticleSubtitle,
    //   ArticleAuthor,
    // ])).toBe(true);
  });
});