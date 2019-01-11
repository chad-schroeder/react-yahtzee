import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Die from './Die';

it('renders without crashing', () => {
  shallow(<Die />);
});

it('matches snapshot of unlocked die', () => {
  let wrapper = shallow(<Die locked={false} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it('matches snapshot after locking die', () => {
  let wrapper = shallow(<Die locked={true} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
