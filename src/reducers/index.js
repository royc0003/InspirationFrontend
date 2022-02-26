import { combineReducers } from 'redux';

import posts from './posts';
import comments from './comments';
import auth from './auth';
import question1 from './question1';
import question2 from './question2';


const rootReducer = combineReducers( {
    posts,
    comments,
    auth,
    question1,
    question2,
});

export default rootReducer;