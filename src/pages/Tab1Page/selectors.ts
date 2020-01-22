import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { SubState } from './types';
import { PAGE_NAME } from './constants';

const selectTab1 = (state: any) : SubState => state[PAGE_NAME] || initialState;

const makeSelectCounter = () =>
  createSelector(
    selectTab1,
    (tab1State: SubState) => tab1State.counter,
  );

export { selectTab1, makeSelectCounter };