import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { SubState } from './types';
import { NameSpace } from './constants';

// Branches the page state from the Global context
const pageState = (state: any): SubState => state[NameSpace] || initialState;

const makeSelectCounter = () =>
  createSelector(
    pageState,
    (simplePageState: SubState) => simplePageState.counter,
  );

const makeSelectAjaxMsg = () =>
  createSelector(
    pageState,
    (simplePageState: SubState) => simplePageState.msg,
  );

export { pageState, makeSelectCounter, makeSelectAjaxMsg };