
import React from 'react';
import { useInjectReducer } from 'src/baseplate/injectReducer';
import { useInjectSaga } from 'src/baseplate/injectSaga';

/**
 * Injects Reducer and Saga into your functional component
 * @param {ReactComponent} component Functional component to be injected into
 * @param {object} [param1] meta data for key, saga, reducer
 * @param {string} [param1.key] name of the component/container
 * @param {function} [param1.reducer] reducer function for state change
 * @param {function} [param1.saga] saga function for api calls
 */
const wrapper = (InjFunComp: React.ComponentType<any>, { key, saga, reducer }: { key: string, saga?: any, reducer?: any }) => {
    return function (props: any[]) {
        
        if(reducer) { useInjectReducer({ key, reducer }) }

        if(saga) { useInjectSaga({ key, saga }) }

        return <InjFunComp {...props} />;
    }
}

export default wrapper;