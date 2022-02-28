import axios from "axios";

import { GET_ALL_USERS, GET_MATCHED_USERS, GET_ALL_USERS_FAIL, GET_MATCHED_USERS_FAIL, MATCH_USER_TO_ALL_USERS } from "./types";

// base url
const url = "https://zhuweiji.pythonanywhere.com";

export const getmatchedusers = () => async(dispatch, getState) => {
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

  await axios
    .get(`${url}/match_user/${friendstagram_email}`, config)
    .then((res) => {
      console.log("Successfully matched user");
      return dispatch({
        type: GET_MATCHED_USERS,
        payload: res.data['matched users'],
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
      dispatch({
          type: GET_MATCHED_USERS_FAIL,
      })
      console.log(err.config);
    });
};

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
      dispatch({
        type: GET_ALL_USERS_FAIL,
    })
      console.log(err.config);
    });
};



export const matchUserToAllUsers = () => (dispatch, getState) => {
  console.log("Match user to all users");
  // Get existing states
  const matchedUsers = getState().photogrid.matchedUsers;
  const allAvailableUsers = getState().photogrid.allAvailableUsers;
  

  if ( matchedUsers && allAvailableUsers ) {
    var _result = []
    console.log("Matching user to all users now...")
    
    for( var _email of matchedUsers ) {
      var tmp = (allAvailableUsers.filter(
        // eslint-disable-next-line no-loop-func
        (_singleAvailableUser) => toString(_singleAvailableUser.email) === toString(_email)
      ))
      _result.push(tmp);
    }

    dispatch({
      type: MATCH_USER_TO_ALL_USERS,
      payload: _result
    })
  }
};
