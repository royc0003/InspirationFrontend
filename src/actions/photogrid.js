import axios from "axios";

import { GET_ALL_USERS, GET_MATCHED_USERS, GET_ALL_USERS_FAIL, GET_MATCHED_USERS_FAIL, MATCH_USER_TO_ALL_USERS, GET_ALL_INTERESTS_PHOTO, GET_ALL_INTERESTS_PHOTO_FAIL, FLATTEN_ALL_INTERESTS } from "./types";

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
      console.log(err.config);

      return dispatch({
          type: GET_MATCHED_USERS_FAIL,
      })
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
      console.log(err.config);
      return dispatch({
        type: GET_ALL_USERS_FAIL,
    })
    });
};



export const matchUserToAllUsers = () => async(dispatch, getState) => {
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
        (_singleAvailableUser) =>_singleAvailableUser.email === _email
      ))
      console.log(tmp)
      _result.push(tmp[0]);
    }

    return dispatch({
      type: MATCH_USER_TO_ALL_USERS,
      payload: _result
    })
  }
};

// Get All Specified Interests
export const getinterests = () => async(dispatch, getState) => {
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
    config.headers['Authorization'] = `Token ${token}`;
  }

  await axios
    .post(`${url}/interests/`, config)
    .then((res) => {
      return dispatch({
        type: GET_ALL_INTERESTS_PHOTO,
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
      return dispatch({
        type: GET_ALL_INTERESTS_PHOTO_FAIL,
      });
    });
};

export const getlistofinterests = () => (dispatch, getState) => {
  var interests = getState().photogrid.interests;
  if(! interests) {
    // Get current state
    interests = getState().photogrid.tmpInterests;
  }

  var _result = []
  for( var _interest of interests) {
    _result.push(_interest.interest)
  }
  console.log("Attempting to get list of interests")
  console.log(_result);

  dispatch({
    type: FLATTEN_ALL_INTERESTS,
    payload: _result
  })
  
}