import { UPDATE_USER_INFO } from '../actions/types';

const initialState = {
    userInfo: null,
}

function formpage(state = initialState, action) {
    switch (action.type) {
      case UPDATE_USER_INFO:
          return {
              ...state,
              userInfo: action.payload,
          }
      default:
        return state;
    }
  }
  
  export default formpage;