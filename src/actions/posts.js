import {LOAD_POSTS} from '../constants';
import {createAction} from 'redux-actions'
import {getPosts} from '../services/api/posts';

export const loadPosts = createAction(LOAD_POSTS, getPosts);
