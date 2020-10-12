import React from 'react'
import { shallow } from 'enzyme';

import ArticleFilter, { ToggleButton } from '../ArticleFilter';

describe('ArticleFilter component', () => {
  let wrapper;
  const setState = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<ArticleFilter isClosed={false} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test.skip('toggle button', () => {
    console.log(wrapper.debug());
    const containerClass = 'zoom-article-filter';
    const modifierClass = `${containerClass}--closed`;
    const toggleButton = wrapper.find(ToggleButton);
    const tagButton = toggleButton.shallow().find('.zoom-toggle-button');

    expect(wrapper.find(`.${containerClass}`).hasClass(modifierClass)).toBe(false);

    // tagButton.simulate('click', {
    //   preventDefault: () => {},
    //   setClose: () => {},
    // });

    // tagButton.props().onClick();

    expect(wrapper.find(`.${containerClass}`).hasClass(modifierClass)).toBe(false);

  });
});