import React from 'react';
import { ReactReduxContext, ReactReduxContextValue } from 'react-redux';
import getInjectors from './sagaInjectors';
import { StoreParameters } from './checkStore';


const useInjectSaga = ({ key, saga, mode }: {key: string, saga: ()=> void, mode: string}) => {
  const context:ReactReduxContextValue<StoreParameters> = React.useContext(ReactReduxContext);
  React.useEffect(() => {
    const injectors = getInjectors(context.store as StoreParameters);
    injectors.injectSaga(key, { saga, mode });

    return () => {
      injectors.ejectSaga(key);
    };
  }, []);
};

export { useInjectSaga };