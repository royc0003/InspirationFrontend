import {
    SET_INTEREST_RANK,
    UPDATE_INTEREST_RANK,
    FLATTEN_INTEREST_RANK,
} from '../actions/types';


const initialState = {
    tmpInterestRanking: null,
    interest_rankings: null,
}

function question3(state = initialState, action) {
    switch (action.type){
        case UPDATE_INTEREST_RANK:
            return {
                ...state,
                tmpInterestRanking: [
                    ...state.tmpInterestRanking.slice(0, action.payload.index),
                    action.payload.value,
                    ...state.tmpInterestRanking.slice(action.payload.index+1)
                ]
            }
        case SET_INTEREST_RANK:
            return {
                ...state,
                tmpInterestRanking: action.payload,
            }
        case FLATTEN_INTEREST_RANK:
            return {
                ...state,
                interest_rankings: action.payload,
            }
        default:
            return state;
    }
}

export default question3;