import { IMPORT_HALL } from "../actions/types";

const initialState = {
  halls: null,
};

function formpage(state = initialState, action) {
    switch (action.type) {
      case IMPORT_HALL:
        return {
          ...state,
          halls: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default formpage;