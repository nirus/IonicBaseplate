import { Tab1Actions } from './constants'
import { ActionTags } from 'src/common/models';

export function incrementAction<T>(payLoad: T): ActionTags<Tab1Actions, T> {
    return {
        type: Tab1Actions.COUNT_INCREMENT,
        payLoad
    }
}