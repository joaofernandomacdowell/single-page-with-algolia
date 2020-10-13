import React from 'react'
import { shallow } from 'enzyme';

import Header from '../Header';


describe('Header component', () => {
  const wrapper = shallow(<Header />);

  test('match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('have logo container', () => {
    expect(wrapper.find('.zoom-header__logo')).toHaveLength(1);
  });

  test('have searchbar', () => {
    const searchBoxContainer = wrapper.find('.zoom-header__searchbox');

    expect(searchBoxContainer).toHaveLength(1);
  });
});