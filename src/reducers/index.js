import { combineReducers } from 'redux';

import posts from './posts';
import comments from './comments';
import auth from './auth';


const rootReducer = combineReducers( {
    posts,
    comments,
    auth,
});

export default rootReducer;