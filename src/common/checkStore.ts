import { conformsTo, isFunction, isObject } from 'lodash';
import invariant from 'invariant';
import { Reducer, Store } from 'redux';
import { SagaDescribe } from './constants';


export interface StoreParameters extends Store {
  replaceReducer: (param: Reducer)=> void,
  runSaga: (saga:()=> void, arg: any)=> void,
  injectedReducers: {[key:string]: (value?: any) => any},
  injectedSagas: {[key: string]: SagaDescribe | any },
}
/**
 * Validate the shape of redux store
 */
export default function checkStore(store: StoreParameters) {
  const shape: StoreParameters | any = {
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