import { UPDATE_INTEREST_RANK, SET_INTEREST_RANK } from "./types";

export const setinterestrank = () => (dispatch, getState) => {
  const selectedInterestsIDs = getState().question2.selectedInterests;
  var tmpArray = [];
  // eslint-disable-next-line no-unused-vars
  for (var _ of selectedInterestsIDs) {
    tmpArray = [...tmpArray, 1];
  }
  // check if payload has the val, if not we proceed
  dispatch({
    type: SET_INTEREST_RANK,
    payload: tmpArray,
  });
};

export const updateinterestrank = (index, value) => (dispatch, getState) => {
  const interest_rankings = getState().question3.interest_rankings;
  console.log("UpdatingInterestRank");

  if (interest_rankings) {
    dispatch({
      type: UPDATE_INTEREST_RANK,
      payload: { index, value },
    });
  }
};
