import typeToReducer from 'type-to-reducer';
import {LOAD_POSTS} from '../constants';

const POSTS_DEFAULT_STATE = {
    posts: [],
    isPending: false,
    error: null
};

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
            error: action.payload.error
        }),
        FULFILLED: (state, action) => ({
            ...state,
            posts: action.payload.posts,
            isPending: false,
            error: null
        })
    }
}, POSTS_DEFAULT_STATE);
