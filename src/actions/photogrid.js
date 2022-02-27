import axios from "axios";

import { GET_ALL_USERS, GET_MATCHED_USERS } from "./types";

// base url
const url = "https://zhuweiji.pythonanywhere.com";

export const getmatchedusers = () => (dispatch, getState) => {
  console.log("Get matched users");
  // Retrieve user email from cache
  const friendstagram_email = localStorage.getItem("friendstagram-email");
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

  axios
    .post(`${url}/match_user/${friendstagram_email}`, config)
    .then((res) => {
      console.log("Successfully matched user");
      console.log(res);
      dispatch({
        type: GET_MATCHED_USERS,
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

export const getallusers = () => (dispatch, getState) => {
  console.log("get all users");
  // Retrieve user email from cache
  const friendstagram_email = localStorage.getItem("friendstagram-email");
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

  axios
    .post(`${url}/user_information/${friendstagram_email}`, config)
    .then((res) => {
      console.log("Successfully received all user information");
      console.log(res);
      dispatch({
        type: GET_ALL_USERS,
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
