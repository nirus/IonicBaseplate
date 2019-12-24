import produce from 'immer';
import { APP_CONST, APP_ACTION } from './common/constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
};

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