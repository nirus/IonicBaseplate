import { useEffect, useContext } from 'react';
import { ReactReduxContext, ReactReduxContextValue } from 'react-redux';
import getInjectors from './reducerInjectors';
import { StoreParameters } from './checkStore';


/**
 * Dynamically injects a reducer
 *
 * @param {string} key A key of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */
const useInjectReducer = ({ key, reducer } : { key: string, reducer: () => void }) => {
  const context : ReactReduxContextValue<StoreParameters> = useContext(ReactReduxContext);
  useEffect(() => {
    getInjectors(context.store as StoreParameters).injectReducer(key, reducer);
  }, []);
};

export { useInjectReducer };
