import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './containers/app';
import configureStore from './store/configure-store';

let store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
