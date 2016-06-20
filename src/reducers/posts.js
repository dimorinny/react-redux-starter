import {LOAD_POSTS} from '../constants';
import typeToReducer from 'type-to-reducer';

const POSTS_DEFAULT_STATE = {
    posts: [],
    isPending: false,
    error: null
};

//noinspection JSUnusedGlobalSymbols
export default typeToReducer({
    [LOAD_POSTS]: {
        PENDING: (state, action) => ({
            ...state,
            isPending: true,
            error: null
        }),
        REJECTED: (state, action) => ({
            ...state,
            isPending: false,
            error: action.payload
        }),
        FULFILLED: (state, action) => ({
            ...state,
            posts: action.posts,
            isPending: false,
            error: null
        })
    }
}, POSTS_DEFAULT_STATE);
