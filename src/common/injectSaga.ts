import React from 'react';
import { ReactReduxContext, ReactReduxContextValue } from 'react-redux';
import getInjectors from './sagaInjectors';
import { StoreParameters } from './models';


const useInjectSaga = ({ key, saga, mode }: {key: string, saga: () => void | null, mode?: string}) => {
  const context:ReactReduxContextValue<StoreParameters> = React.useContext(ReactReduxContext);
  React.useEffect(() => {
    const injectors = getInjectors(context.store as StoreParameters);
    injectors.injectSaga(key, { saga, mode });

    return () => {
      injectors.ejectSaga(key);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export { useInjectSaga };