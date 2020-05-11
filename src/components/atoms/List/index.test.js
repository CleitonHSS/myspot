import React from 'react';
import {mount} from 'enzyme';
import expect from 'expect';

export const tests = (component) => {
  return describe('List', () => {
    it('should have margin of 20', () => {
      const output = mount(component);
      expect(output.props().margin[0]).toBe(20);
    });
  });
};

export default tests;
