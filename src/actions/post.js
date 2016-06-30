import {createAction} from 'redux-actions';
import {LOAD_POSTS} from '../constants';
import {getPosts} from '../services/api/post';

export const loadPosts = createAction(LOAD_POSTS, getPosts);
