/**
 * Type defined inside this container
*/
import { initialState } from './reducer';
import { mapDispatchToProps, mapStateToProps } from './index';

export type SubState = typeof initialState;
export type InferMappedProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

