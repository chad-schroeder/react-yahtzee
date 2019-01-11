import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Game from './Game';

it('renders without crashing', () => {
  shallow(<Game />);
});

it('properly locks die after clicking a die', () => {
  let wrapper = mount(<Game />);
  let btn = wrapper.find('button').first();
  btn.simulate('click', { target: { idx: 0 } });
  expect(wrapper.state().locked[0]).toBe(true);
});

it('stops the ability to roll again after 3 rolls', () => {
  let wrapper = mount(<Game />);
  wrapper.setState({ rollsLeft: 0 });
  let btn = wrapper.find('.Game-reroll');
  btn.simulate('click');
  expect(wrapper.state().rollsLeft).not.toBe(-1);
});

it('stops the ability to score again after already allocating dice', () => {
  let wrapper = mount(<Game />);
  wrapper.setState({ scores: { ones: 1 }, dice: [1, 1, 1, 1, 1] });
  let btn = wrapper.find('.RuleRow').first();
  btn.simulate('click');
  expect(wrapper.state().scores.ones).toBe(1);
});


it('correctly updates scoretable with score corresponding to dice rolls, () => {
  let wrapper = mount(<Game />);
  wrapper.setState({ scores: { ones: undefined }, dice: [1, 1, 1, 1, 1] });
  let btn = wrapper.find('.RuleRow').first();
  btn.simulate('click');
  expect(wrapper.state().scores.ones).toBe(5);
});
