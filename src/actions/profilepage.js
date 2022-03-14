import axios from "axios";

import {
  GET_USER_INFO,
  GET_ALL_USERS_PROFILE,
  GET_MATCHED_HISTORY,
} from "../actions/types";


// base url
const url = "https://zhuweiji.pythonanywhere.com";


export const getallusers = () => async(dispatch, getState) => {
    console.log("get all users");
    // Get token from state
    const token = getState().auth.token;
    const key = getState().auth.key;
  
    // Header
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    // If token, add to header config
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    } else if (key) {
      config.headers["Authorization"] = `Token ${key}`;
    }
    
    await axios
      .get(`${url}/user_information/`, config)
      .then((res) => {
        console.log("Successfully received all user information");
        console.log(res);
        return dispatch({
          type: GET_ALL_USERS_PROFILE,
          payload: res.data,
        });
      })
      .catch((err) => {
        if (err.response) {
          console.log("respone");
          console.log(err.response.data);
          // to insert a alert block here
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(err.message);
        }
        console.log(err.config);
      });
  };