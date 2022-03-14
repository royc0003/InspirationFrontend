import {
  GET_USER_INFO,
  GET_ALL_USERS_PROFILE,
  GET_MATCHED_HISTORY,
  FLATTEN_MATCHED_USERS,
  FLATTEN_USER_INTERESTS,
  GET_ALL_INTERESTS_PROFILE,
} from "../actions/types";

const initialState = {
  all_users: null,
  matched_history: null,
  user_info: null,
  flatten_matched_users: null,
  flatten_user_interests: null,
  all_interests: null,
  isComplete: false,
};


function profilepage(state = initialState, action) {
    switch(action.type) {
        case GET_MATCHED_HISTORY:
            return {
                ...state,
                matched_history: action.payload
            }
        case GET_ALL_USERS_PROFILE:
            return {
                ...state,
                all_users: action.payload,
                isComplete: false
            }
        case GET_USER_INFO:
            return {
                ...state,
                user_info: action.payload,
            }
        case FLATTEN_MATCHED_USERS:
            return {
                ...state,
                flatten_matched_users: action.payload
            }
        case FLATTEN_USER_INTERESTS:
            return {
                ...state,
                flatten_user_interests: action.payload,
                isComplete: true
            }
        case GET_ALL_INTERESTS_PROFILE:
            return {
                ...state,
                all_interests: action.payload
            }
        default:
            return state;
    }
}


export default profilepage;