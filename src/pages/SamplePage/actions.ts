import { Actions } from './constants';
import { ActionType } from './types';
import { ActionTags } from 'src/baseplate/models';

export function incrementAction<T>(payLoad: T): ActionTags<ActionType, T> {
    return {
        type: Actions.STATE_COUNT_INCREMENT,
        payLoad
    }
}

export function simpleAjaxAction<T>(payLoad: T): ActionTags<ActionType, T> {
    return {
        type: Actions.STATE_PUT_AJAX,
        payLoad
    }
}

export function getSimpleAjax(payLoad = {}): ActionTags<ActionType, any>{
    return {
        type: Actions.FETCH_GET_AJAX,
        payLoad  
    };
}