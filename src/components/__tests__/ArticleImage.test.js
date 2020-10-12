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
    const { imageUrl, title } = mockApiResponse.hits[0];
    const imageProps = image.props();

    expect(imageProps.src).toBe(imageUrl);
    expect(imageProps.title).toBe(title);
    expect(imageProps.alt).toBe(title);
  });

  test('lazy loading is seted', () => {
    const image = wrapper.find('.zoom-article-image__img');

    expect(image.props().loading).toBe('lazy');
  });
});