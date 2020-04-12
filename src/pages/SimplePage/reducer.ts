import produce from 'immer';
import { ActionType } from './types';
import { Actions } from './constants';
import { SubState } from './types';
import { ActionTags } from 'src/baseplate/models';


// The initial state of the App
export const initialState = {
    counter: 0,
    msg: '',
};

/* eslint-disable default-case, no-param-reassign */
export default (state = initialState, action: ActionTags<ActionType, SubState>) =>
    produce(state, (draft) => {
        const { payLoad } = action;
        switch (action.type) {
            case Actions.STATE_COUNT_INCREMENT: {
                draft.counter = payLoad.counter;
                break;
            }

            case Actions.STATE_PUT_AJAX: {
                draft.msg = payLoad.msg;
                break;
            }
        }
    });
