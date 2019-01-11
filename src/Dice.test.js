import React from 'react';
import { shallow } from 'enzyme';
import Dice from './Dice';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
  shallow(<Dice dice={[undefined]} locked={[false]} />);
});

it('matches snapshot', () => {
  let wrapper = shallow(
    <Dice dice={[undefined, undefined]} locked={[true, false]} />
  );
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
