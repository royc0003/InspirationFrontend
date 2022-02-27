import axios from "axios";

import {UPDATE_USER_INFO} from './types';


// base url
const url = "https://zhuweiji.pythonanywhere.com";

export const exportuser = () => (dispatch, getState) => {
    // Header
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Retrieve user email from cache
    const friendstagram_email = localStorage.getItem("friendstagram-email");
    // Get token from state
    const token = getState().auth.token;
    const key = getState().auth.key;
    
    // If token, add to header config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    else if (key) {
        config.headers['Authorization'] = `Token ${key}`;
    }

    axios
    .get(`${url}/user_information/${friendstagram_email}`, config)
    .then((res) => {
      console.log("Successfully logged in");
      console.log(res);
      dispatch({
        type: UPDATE_USER_INFO,
        payload: res.data,
      });
    })
    .catch((err) => {
        if (err.response) {
            console.log("respone")
            console.log(err.response.data.password1)
            // to insert a alert block here
          }
          else if (err.request) {
            console.log(err.request);
          }
          else {
            console.log(err.message);
          }
          console.log(err.config);
    });

}