/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { Api, Tab1Actions } from './constants';
import { countriesLoadAction } from './actions';

import request from 'src/common/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getCountries() {
  // Select username from store  
  try {
    // Call our request helper (see 'utils/request')
    const countries = yield call(request as any, Api.countries);    
    yield put(countriesLoadAction({ countries }));
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
  yield takeLatest(Tab1Actions.FETCH_GET_COUNTRIES, getCountries);
}
