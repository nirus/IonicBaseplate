/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './history';
import globalReducer from '../App.reducers';
import { ActionTags } from 'src/baseplate/models';
// import languageProviderReducer from 'containers/LanguageProvider/reducer';
// TODO: i18n Language should be implemented

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers: {[key:string]: <T>(state: T, actions: ActionTags<any, any>) => any} = {}): Reducer {
  const rootReducer = combineReducers({
    global: globalReducer,
    
    /* language: languageProviderReducer,
    // TODO: i18n Language should be implemented */

    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
