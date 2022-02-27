import {
  GET_ALL_USERS,
  GET_MATCHED_USERS,
  GET_MATCHED_USERS_FAIL,
  GET_ALL_USERS_FAIL,
} from "../actions/types";

const initialState = {
  matchedUsers: null,
  allAvailableUsers: null,
  isMatched: false,
  hasFoundUsers: false
};

function photogrid(state = initialState, action) {
  switch (action.type) {
    case GET_MATCHED_USERS:
      return {
        ...state,
        matchedUsers: action.payload,
        isMatched: true,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allAvailableUsers: action.payload,
        hasFoundUsers: true
      };
    case GET_MATCHED_USERS_FAIL:
        return {
            ...state,
            hasFoundUsers: false
        }
    case GET_ALL_USERS_FAIL:
      return {
        ...state,
        isMatched: false,
      };
    default:
      return state;
  }
}

export default photogrid;
