import React from 'react';
import { ReactReduxContext } from 'react-redux';
import getInjectors from './sagaInjectors';


const useInjectSaga = ({ key, saga, mode }: {key: string, saga: ()=> void, mode: string}) => {
  const context = React.useContext(ReactReduxContext);
  React.useEffect(() => {
    const injectors = getInjectors(context.store);
    injectors.injectSaga(key, { saga, mode });

    return () => {
      injectors.ejectSaga(key);
    };
  }, []);
};

export { useInjectSaga };