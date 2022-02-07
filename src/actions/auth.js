import axios from 'axios';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR
} from './types';

// base url
const url = 'https://zhuweiji.pythonanywhere.com/'

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    //base url
    
    // User Loading
    dispatch({ type: USER_LOADING });

    // Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
        }
    }

    // If token, add to headers config
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get(`${url}/rest-auth/login/`, config).then(
        res => {
            dispatch(
                {
                    type: USER_LOADED,
                    payload: res.data
                }
            );
        }
    )

}