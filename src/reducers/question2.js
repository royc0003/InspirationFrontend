import { GET_ALL_INTERESTS, GET_ALL_INTERESTS_FAIL } from "../actions/types";

const initialState = {
  interests: null,
};

function question2(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_INTERESTS:
        return {
            interests: action.payload
        }
    case GET_ALL_INTERESTS_FAIL:
        return {
            interests: null,
        }
    default:
      return state;
  }
}

export default question2;
