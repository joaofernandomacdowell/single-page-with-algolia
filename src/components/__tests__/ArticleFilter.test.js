import React from 'react'
import { shallow } from 'enzyme';

import ArticleFilter, { ToggleButton } from '../ArticleFilter';

describe('ArticleFilter component', () => {
  let wrapper;
  const setClose = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<ArticleFilter isClosed={false} setClose={setClose} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('toggle button', () => {
    const toggleButton = wrapper.find(ToggleButton);
    const tagButton = toggleButton.shallow().find('.zoom-toggle-button');

    tagButton.simulate('click', {
      preventDefault: () => {},
      setClose,
    });

    expect(setClose).toHaveBeenCalledTimes(1);
  });
});