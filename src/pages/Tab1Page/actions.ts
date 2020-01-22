import { Tab1Actions as Actions } from './constants'
import { ActionTags } from 'src/common/models';

export function incrementAction<T>(payLoad: T): ActionTags<Actions, T> {
    return {
        type: Actions.COUNT_INCREMENT,
        payLoad
    }
}

export function countriesLoadAction<T>(payLoad: T): ActionTags<Actions, T> {
    return {
        type: Actions.STATE_PUT_COUNTRIES,
        payLoad
    }
}

export function getCountriesAction<T>(payLoad = {}): ActionTags<Actions, any>{
    return {
        type: Actions.API_GET_COUNTRIES,
        payLoad  
    };
}