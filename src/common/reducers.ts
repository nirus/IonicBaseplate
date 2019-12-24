/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './history';
import globalReducer from '../App.reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers: {[key:string]: ()=> void} = {}): Reducer {
  const rootReducer = combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
