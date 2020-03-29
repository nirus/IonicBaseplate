import { Tab1Actions as Actions } from './constants';
import { Tab1ActionType } from './types'

import { ActionTags } from 'src/common/models';

export function incrementAction<T>(payLoad: T): ActionTags<Tab1ActionType, T> {
    return {
        type: Actions.STATE_COUNT_INCREMENT,
        payLoad
    }
}

export function countriesLoadAction<T>(payLoad: T): ActionTags<Tab1ActionType, T> {
    return {
        type: Actions.STATE_PUT_COUNTRIES,
        payLoad
    }
}

export function getCountriesAction(payLoad = {}): ActionTags<Tab1ActionType, any>{
    return {
        type: Actions.FETCH_GET_COUNTRIES,
        payLoad  
    };
}