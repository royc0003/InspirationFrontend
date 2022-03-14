import {
  GET_USER_INFO,
  GET_ALL_USERS,
  GET_MATCHED_HISTORY,
} from "../actions/types";

const initialState = {
  all_users: null,
  matched_history: null,
  user_info: null,
};


function profilepage(state = initialState, action) {
    switch(action.type) {
        case GET_MATCHED_HISTORY:
            return {
                ...state,
                matched_history: action.payload
            }
        case GET_ALL_USERS:
            return {
                ...state,
                all_users: action.payload
            }
        case GET_USER_INFO:
            return {
                ...state,
                user_info: action.payload
            }
        default:
            return state;
    }
}


export default profilepage;