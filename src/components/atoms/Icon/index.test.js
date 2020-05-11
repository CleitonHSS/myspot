import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import {Icons} from '.';

describe('Icon', () => {
  it('should render', () => {
    const component = shallow(<Icons type="alert" />);

    expect(component.exists()).toBeTruthy();
  });

  // it('should render a svg icon', () => {
  //   const component = shallow(<Icons type="alert" />);

  //   expect(component.find('i').exists()).toBeTruthy();
  // });

  // it('should accept prop type', () => {
  //   const type = 'alert';

  //   const component = shallow(<Icons type={type} />);

  //   console.log(component.props());

  //   expect(component.prop()).toContain({type});
  // });
});
