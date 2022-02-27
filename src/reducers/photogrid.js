import { GET_ALL_USERS, GET_MATCHED_USERS } from "../actions/types";

const initialState = {
    matchedUsers: null,
    allAvailableUsers: null,
}

function photogrid(state = initialState, action) {
    switch (action.type) {
      case GET_MATCHED_USERS:
          return {
              ...state,
              matchedUsers: action.payload,
          }
       case GET_ALL_USERS:
           return {
               ...state,
               allAvailableUsers: action.payload
           }
      default:
        return state;
    }
  }
  
  export default photogrid;