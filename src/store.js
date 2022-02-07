// Thunk related imports
import {applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
    posts,
    comments
};

// Thunk middleware configuration
const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [ middlewareEnhancer ];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(rootReducer, defaultState, composedEnhancers);

// export const history = syncHistoryWithStore(browserHistory, store);


// enable hot reload
if(module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}

export default store;
