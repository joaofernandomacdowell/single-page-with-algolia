import React from 'react'
import { shallow } from 'enzyme';

import mockApiResponse from '../../helper';
import ArticleTag from '../ArticleTag';


describe('ArticleTag component', () => {
  const props = {
    tags: mockApiResponse.hits[0].tags,
    url: mockApiResponse.hits[0].url
  };
  const wrapper = shallow(<ArticleTag {...props} />);

  test('match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('have tag label with the main tag', () => {
    const label = wrapper.find('.zoom-article-tag');

    expect(label).toHaveLength(1);
    expect(label.text()).toBe(mockApiResponse.hits[0].tags[0]);
  });

  test('anchor tag with the correct href', () => {
    const label = wrapper.find('.zoom-article-tag');

    expect(label.props().href).toBe('https://www.zoom.com.br/jogos-xbox-one/deumzoom');
  });
});