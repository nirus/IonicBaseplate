import { conformsTo, isFunction, isObject } from 'lodash';
import invariant from 'invariant';
import { StoreParameters } from './models';



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