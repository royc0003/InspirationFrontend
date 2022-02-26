import axios from "axios";

import {
  GET_ALL_INTERESTS,
  // GET_ALL_INTERESTS_FAIL,
  ADD_INTEREST,
  SET_INTEREST,
  REMOVE_INTEREST,
} from "./types";

// base url
const url = "https://zhuweiji.pythonanywhere.com";

// Get All Specified Interests
export const getinterests = () => (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Get token from state
  const token = getState().auth.token;

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .post(`${url}/interests`, config)
    .then((res) => {
      dispatch({
        type: GET_ALL_INTERESTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response) {
        console.log("response");
        console.log(err.response.data);
        // to insert a alert block here
      } else if (err.request) {
        console.log("request");
        console.log(err.request);
      } else {
        console.log("message");
        console.log(err.message);
      }
      console.log(err.config);
      // dispatch({
      //   type: GET_ALL_INTERESTS_FAIL,
      // });
    });
};

// Set Interests
export const setinterest = (interests) => (dispatch, getState) => {
  console.log("Setting interest:" + interests);
  dispatch({
    type: SET_INTEREST,
    payload: interests
  })
}

// Add Interests
export const addinterest = (id) => (dispatch, getState) => {
  console.log("Adding interest ID: " + id);
  dispatch({
    type: ADD_INTEREST,
    payload: id,
  });
};

// Remove Interests
export const removeinterest = (index) => (dispatch, getState) => {
  console.log("Removing interest ID: " + index);
  dispatch({
    type: REMOVE_INTEREST,
    payload: index,
  });
};
