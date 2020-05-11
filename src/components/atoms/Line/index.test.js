import React from 'react';
import {mount} from 'enzyme';
import expect from 'expect';

export const tests = (component) => {
  return describe('Line', () => {
    it('should have the kpi defined as below.', () => {
      const output = mount(component);
      expect(output.text()).toEqual(expect.stringMatching(/[\w]+/));
      expect(output.text()).toBe('Button');
    });
  });
};
