import { IMPORT_HALL, IMPORT_HALL_FAIL } from "../actions/types";

const someInitialState = {
  halls: null,
};

function formpage(state = someInitialState, action) {
  switch (action.type) {
    case IMPORT_HALL:
      return {
        ...state,
        halls: action.payload,
      };
    case IMPORT_HALL_FAIL:
      return {
        ...state,
        halls: null,
      }
    default:
      return state;
  }
}

export default formpage;
