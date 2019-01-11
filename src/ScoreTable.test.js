import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ScoreTable from './ScoreTable';

it('renders without crashing', () => {
  const scores = {
    chance: undefined,
    fives: undefined,
    fourOfKind: undefined,
    fours: undefined,
    fullHouse: undefined,
    largeStraight: undefined,
    ones: undefined,
    sixes: undefined,
    smallStraight: undefined,
    threeOfKind: undefined,
    threes: undefined,
    twos: undefined,
    yahtzee: undefined
  };
  let wrapper = shallow(<ScoreTable scores={scores} />);
});
