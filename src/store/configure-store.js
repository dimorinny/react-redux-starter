import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers';

function configureStore(initialState) {
    const store = compose(
        getMiddleware(),
        ...getEnhancers()
    )(createStore)(rootReducer, initialState);

    enableHotLoader(store);
    return store;
}

function getMiddleware() {
    let middleware = [
        routerMiddleware(browserHistory),
        promiseMiddleware()
    ];

    //noinspection JSUnresolvedVariable
    if (__DEV__) {
        middleware = [...middleware, createLogger()];
    }

    return applyMiddleware(...middleware);
}

function getEnhancers() {
    let enhancers = [
        // Our enhancers here
    ];

    //noinspection JSUnresolvedVariable
    if (__DEV__ && window.devToolsExtension) {
        //noinspection JSUnresolvedFunction
        enhancers = [...enhancers, window.devToolsExtension()];
    }

    return enhancers;
}

function enableHotLoader(store) {
    //noinspection JSUnresolvedVariable
    if (__DEV__ && module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
}

export default configureStore;
