import invariant from 'invariant';
import { isEmpty, isFunction, isString } from 'lodash';
import checkStore from './checkStore';
import { StoreParameters, ActionTags } from './models';
import createReducer from './reducers';

export function injectReducerFactory(store: StoreParameters, isValid: boolean):(key: string, reducer: <T>(state: T, actions: ActionTags<any, any>) => void)=>void {
  return function injectReducer(key: string, reducer: (state: any, actions: any) => void): void {
    if (!isValid) checkStore(store);

    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      '(src/common...) injectReducer: Expected `reducer` to be a reducer function',
    );

    // Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different
    if (
      Reflect.has(store.injectedReducers, key) &&
      store.injectedReducers[key] === reducer
    )
      return;

    store.injectedReducers[key] = reducer;
    store.replaceReducer(createReducer(store.injectedReducers));
  };
}

export default function getInjectors(store: StoreParameters) {
  checkStore(store);

  return {
    injectReducer: injectReducerFactory(store, true),
  };
}
