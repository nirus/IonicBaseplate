/**
 * This is the main state tree
 */
import produce from 'immer';
import { APP_ACTION } from './baseplate/models';
import { APP_CONST } from './baseplate/constants';


// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  welcome: 'REACT BASEPLATE CLi'
};

/**
 * Main app state or Root state tree
 * @param state 
 * @param action 
 */
const appReducer = (state = initialState, action: APP_ACTION) =>
  produce(state, draft => {
    switch (action.type) {
      case APP_CONST.LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case APP_CONST.LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case APP_CONST.LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;