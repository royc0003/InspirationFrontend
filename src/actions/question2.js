import axios from "axios";
import {
	// GET_ALL_INTERESTS_FAIL,
	ADD_INTEREST, GET_ALL_INTERESTS, REMOVE_INTEREST, RESET_INTERESTS, SET_INTEREST
} from "./types";


// base url
const url = "https://zhuweiji.pythonanywhere.com";

// Get All Specified Interests
export const getinterests = () => async (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Get token from local cache
  const token = localStorage.getItem("token");
  const key = getState().auth.key;


  // If token, add to header config
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    } else if (key) {
      config.headers["Authorization"] = `Token ${key}`;
    }

  await axios
    .get(`${url}/interests/`, config)
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


export const resetSelectedInterests = () => async (dispatch, getState) => {
	dispatch({
		type: RESET_INTERESTS
	});
}