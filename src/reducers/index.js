import { combineReducers } from 'redux';

import posts from './posts';
import comments from './comments';
import auth from './auth';
import formpage from './formpage';


const rootReducer = combineReducers( {
    posts,
    comments,
    auth,
    formpage,
});

export default rootReducer;