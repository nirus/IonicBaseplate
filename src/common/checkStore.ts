import { conformsTo, isFunction, isObject } from 'lodash';
import invariant from 'invariant';
import { Reducer } from 'redux';


export interface StoreParameters {
  dispatch: ()=> void,
  subscribe: ()=> void,
  getState: ()=> object,
  replaceReducer: (param: Reducer)=> void,
  runSaga: (saga:()=> void, arg: any)=> void,
  injectedReducers: {[key:string]: ()=> void},
  injectedSagas: object,
}
/**
 * Validate the shape of redux store
 */
export default function checkStore(store: StoreParameters): void {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    runSaga: isFunction,
    injectedReducers: isObject,
    injectedSagas: isObject,
  };
  invariant(
    conformsTo(store, shape),
    '(src/common...) injectors: Expected a valid redux store',
  );
}