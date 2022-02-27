import axios from "axios";

import { IMPORT_HALL, IMPORT_HALL_FAIL, SELECT_HALL } from "./types";

// base url
const url = "https://zhuweiji.pythonanywhere.com";

// Signup
export const gethalls = () => (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
    },
  };

  // Get token from state
  const token = getState().auth.token;
  const key = getState().auth.key;
  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  else if (key) {
    config.headers["Authorization"] = `Token ${key}`;
  }


  axios
    .post(`${url}/hall_residences/`, config)
    .then((res) => {
      dispatch({
        type: IMPORT_HALL,
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
      dispatch({
        type: IMPORT_HALL_FAIL,
      })
    });
};


// User Selects hall
export const selecthall = (hallName) => (dispatch, getState) => {
  dispatch({
    type: SELECT_HALL,
    payload: hallName,
  })
};
