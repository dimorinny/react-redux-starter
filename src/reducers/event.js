import typeToReducer from 'type-to-reducer';
import {LOAD_EVENTS} from '../constants';

const EVENTS_DEFAULT_STATE = {
    events: [],
    isPending: false,
    error: null
};

//noinspection JSUnusedGlobalSymbols
export default typeToReducer({
    [LOAD_EVENTS]: {
        PENDING: (state, action) => ({
            ...state,
            isPending: true,
            error: null
        }),
        REJECTED: (state, action) => ({
            ...state,
            isPending: false,
            error: action.payload.error
        }),
        FULFILLED: (state, action) => ({
            ...state,
            events: action.payload.events,
            isPending: false,
            error: null
        })
    }
}, EVENTS_DEFAULT_STATE);
