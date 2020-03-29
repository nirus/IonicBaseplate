import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { SubState } from './types';
import { NameSpace } from './constants';

const selectTab1 = (state: any): SubState => state[NameSpace] || initialState;

const makeSelectCounter = () =>
  createSelector(
    selectTab1,
    (tab1State: SubState) => tab1State.counter,
  );

const makeSelectCountries = () =>
  createSelector(
    selectTab1,
    (tab1State: SubState) => tab1State.countries,
  );

export { selectTab1, makeSelectCounter, makeSelectCountries };