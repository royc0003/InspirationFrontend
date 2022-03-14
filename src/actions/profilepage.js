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
    // Get token from local cache
    const token = localStorage.getItem("token");
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


  // Get matched history of single user
export const getmatchedhistory = () => async(dispatch, getState) => {
    console.log("Get all matched history");
    // Get token from local cache
    const token = localStorage.getItem("token");
    const key = getState().auth.key;

    // Get email from local cache
    const email = localStorage.getItem("friendstagram-email");
  
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
      .get(`${url}/match_history/${email}`, config)
      .then((res) => {
        console.log("Successfully found all matched users");
        console.log(res);
        return dispatch({
          type: GET_MATCHED_HISTORY,
          payload: res.data,
        });
      })
      .catch((err) => {
        if (err.response) {
          console.log("error response");
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

// Get current user info
export const getuserinfo = () => async(dispatch, getState) => {
    console.log("Get current user info");
    // Get token from local cache
    const token = localStorage.getItem("token");
    const key = getState().auth.key;

    // Get email from local cache
    const email = localStorage.getItem("friendstagram-email");
  
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
      .get(`${url}/user_information/${email}`, config)
      .then((res) => {
        console.log("Successfully found user info");
        console.log(res);
        return dispatch({
          type: GET_USER_INFO,
          payload: res.data,
        });
      })
      .catch((err) => {
        if (err.response) {
          console.log("error response");
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