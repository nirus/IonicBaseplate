import { Task } from 'redux-saga';

export interface SagaDescribe { mode?: APP_EVENTS, saga: ()=> void, task: Task }

export enum APP_CONST {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
}

export interface APP_ACTION{ 
  type: APP_CONST, 
  repos: boolean, 
  username: boolean, 
  error: boolean, 
}


export enum APP_EVENTS {
  RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount',
  DAEMON = '@@saga-injector/daemon',
  ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount',
}