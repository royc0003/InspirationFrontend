import axios from "axios";

import { UPDATE_USER_INFO } from "./types";

// base url
const url = "https://zhuweiji.pythonanywhere.com";

export const exportuser = (_biography) => (dispatch, getState) => {
  // Retrieve user email from cache
  const friendstagram_email = localStorage.getItem("friendstagram-email");
  // Get token from state
  const token = getState().auth.token;
  const key = getState().auth.key;

  // Get interests, interest_rankings, hall
  const hall = getState().question1.userHall;
  const _selectedInterests = getState().question2.selectedInterests;
  const _interests = getState().question2.interests;
  const interest_rankings = getState().question3.interest_rankings.toString();

  var interests = []
  for(var _interest of _selectedInterests){
      var tmp = (_interests.filter(
          // eslint-disable-next-line no-loop-func
          (_singleinterest) => parseInt(_singleinterest.id) === parseInt(_interest)
      ));
      interests.push(tmp[0].interest);
  }
  console.log("parsed value")
  console.log(interests)

  interests = interests.toString();
  // Request body
  var body;
  // Handle biography
  if (_biography) {
    const biography = _biography
    console.log(biography)
    body = JSON.stringify({ hall, interests, interest_rankings, biography });
  }
  else {
    body = JSON.stringify({ hall, interests, interest_rankings });
  }
  console.log(body)


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
    .post(`${url}/user_information/${friendstagram_email}`, body , config)
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
