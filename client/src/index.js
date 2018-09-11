import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import logger from 'redux-logger';

// redux-thunk is a middleware that lets you dispatch async actions
import thunk from 'redux-thunk';

import {applyMiddleware, createStore} from 'redux';

import App from './App';
import rootReducer from './reducers';
//import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
//registerServiceWorker();
