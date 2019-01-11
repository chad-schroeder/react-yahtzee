import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RuleRow from './RuleRow';

it('renders without crashing', () => {
  shallow(<RuleRow />);
});

it('matches snapshot', () => {
  let wrapper = shallow(<RuleRow />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
