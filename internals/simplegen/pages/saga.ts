/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions } from './constants';
import { simpleAjaxAction } from './actions';
import {fetchSimpleApi} from './fetchapi';


/**
 * Github repos request/response handler
 */
export function* getAjaxMsg() {
  // Select username from store  
  try {
    // Call our request helper (see 'utils/request')
    const msg = yield call(fetchSimpleApi);    
    yield put(simpleAjaxAction({ msg }));
  } catch (err) {
    console.error(err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* countriesData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(Actions.FETCH_GET_AJAX, getAjaxMsg);
}
