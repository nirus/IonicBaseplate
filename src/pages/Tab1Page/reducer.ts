import produce from 'immer';
import { Tab1Actions } from './constants';
import { SubState } from './types';
import { ActionTags } from 'src/common/models';


// The initial state of the App
export const initialState = {
    counter: 0
};

/* eslint-disable default-case, no-param-reassign */
const tab1Reducers = (state = initialState, action: ActionTags<Tab1Actions, SubState>) =>
    produce(state, (draft) => {
        const { payLoad } = action;
        switch (action.type) {
            case Tab1Actions.COUNT_INCREMENT:                
                draft.counter = payLoad.counter;
                break;
        }
    });

export default tab1Reducers;
