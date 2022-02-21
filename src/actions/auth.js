import axios from "axios";

import { USER_LOADED, USER_LOADING, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, LOGOUT_SUCCESS } from "./types";

// base url
const url = "https://zhuweiji.pythonanywhere.com";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  //base url

  // User Loading
  dispatch({ type: USER_LOADING });

  // Get token from state
  const token = getState().auth.token;
  const friendstagram_email = localStorage.getItem("friendstagram-email");

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios.get(`${url}/user_information/${friendstagram_email}`, config)
  .then((res) => {
    console.log("Successfully logged in");
    console.log(res);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    })
  }).catch(err => {
    console.log("error in login...")
    console.log(err);
    console.log(err.response.status);
    dispatch({
      type: AUTH_ERROR
    })
  });
};


// Login
export const login = (email, password) => dispatch => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    // Request body
    const body = JSON.stringify({email, password});
    console.log(body);
    axios.post(`${url}/rest-auth/login/`, body, config).then((res) => {
        console.log("success log in")
        // Cache email into local storage
        localStorage.setItem("friendstagram-email", email);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      }).catch(err => {
          console.log(err);
          dispatch({
              type: LOGIN_FAIL
          })
      })
    });
  };

  // CHECK TOKEN & Logout
export const logout = () => (dispatch, getState) => {

  // Get token from state
  const token = getState().auth.token;

  // If token, then logout
  if (token) {
    dispatch({
      type: LOGOUT_SUCCESS,
    })
  }
};