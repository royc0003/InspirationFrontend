import { IMPORT_HALL, IMPORT_HALL_FAIL, SELECT_HALL } from "../actions/types";

const someInitialState = {
  storeHalls: null,
  userHall: null,
};

function question1(state = someInitialState, action) {
  switch (action.type) {
    case SELECT_HALL:
      return {
        ...state,
        userHall: action.payload,
      }
    case IMPORT_HALL:
      return {
        ...state,
        storehalls: action.payload,
      };
    case IMPORT_HALL_FAIL:
      return {
        ...state,
        storehalls: null,
        userHall: null,
      }
    default:
      return state;
  }
}

export default question1;
