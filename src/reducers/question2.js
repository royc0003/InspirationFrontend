import {
	ADD_INTEREST, GET_ALL_INTERESTS,
	GET_ALL_INTERESTS_FAIL, REMOVE_INTEREST, RESET_INTERESTS, SET_INTEREST
} from "../actions/types";

const initialState = {
  interests: null,
  selectedInterests:[],
};

function question2(state = initialState, action) {
  switch (action.type) {
    case ADD_INTEREST:
      return {
        ...state, 
        selectedInterests: [
          ...state.selectedInterests,
          action.payload,
        ].sort()
      }
    case REMOVE_INTEREST:
      return {
        ...state, 
        selectedInterests: [
          ...state.selectedInterests.slice(0, action.payload), 
          ...state.selectedInterests.slice(action.payload + 1)
        ]
      }
    case SET_INTEREST:
      return {
        ...state,
        interests: action.payload
      }
    case GET_ALL_INTERESTS:
        return {
          ...state,
            interests: action.payload
        }
    case GET_ALL_INTERESTS_FAIL:
        return {
          ...state,
            interests: null,
        }
		case RESET_INTERESTS:
			return {
				...state,
				interests: null,
				selectedInterests: []
			}
    default:
      return state;
  }
}

export default question2;
