import { Task } from 'redux-saga';
import { APP_CONST, APP_EVENTS } from './constants';
import { Reducer, Store } from 'redux';

export interface APP_ACTION {
    type: APP_CONST,
    repos: boolean,
    username: boolean,
    error: boolean,
}

/**
    * Action creator tags
    * @param T type - Name of the actions
    * @param U payLoad - that holds changed state of your component
    * @param meta Metadata like listeners, callbacks or any extra info
    * @returns Action created with all parameters
 */
export type ValueOf<T> = T[keyof T];

export type ActionTags<T, U> = {
    type: ValueOf<T>;
    payLoad: { [key: string]: any } | U ;
    meta?: { [key: string]: any } | undefined;
};

export interface SagaDescribe {
    mode?: APP_EVENTS,
    saga: () => void,
    task: Task
}

export interface StoreParameters extends Store {
    replaceReducer: (param: Reducer) => void,
    runSaga: (saga: () => void, arg: any) => void,
    injectedReducers: { [key: string]: (state: any, actions: any) => any },
    injectedSagas: { [key: string]: SagaDescribe | any },
}