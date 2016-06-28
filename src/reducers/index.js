import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import post from './post';
import event from './event';

const rootReducer = combineReducers({
    post,
    event,
    routing
});

export default rootReducer;
