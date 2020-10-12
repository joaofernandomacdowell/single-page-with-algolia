import React from 'react'
import { mount } from 'enzyme';

import mockApiResponse from '../../helper';
import ArticleImage from '../ArticleImage';


describe('ArticleImage component', () => {
  const props = {
    hit: mockApiResponse.hits[0]
  };
  const wrapper = mount(<ArticleImage {...props} />);

  test('match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('have anchor container with the correct href', () => {
    const anchor = wrapper.find('.zoom-article-image__wrapper');

    expect(anchor.props().href).toBe(mockApiResponse.hits[0].url);
  });

  test('have image with required props and values', () => {
    const image = wrapper.find('.zoom-article-image__img');

    expect(image.props().src).toBe(mockApiResponse.hits[0].imageUrl);
    expect(image.props().title).toBe(mockApiResponse.hits[0].title);
    expect(image.props().alt).toBe(mockApiResponse.hits[0].title);
  });

  test('lazy loading is seted', () => {
    const image = wrapper.find('.zoom-article-image__img');

    expect(image.props().loading).toBe('lazy');
  });
});