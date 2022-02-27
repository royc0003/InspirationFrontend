import axios from "axios";

import {
  UPDATE_INTEREST_RANK,
  SET_INTEREST_RANK,
  FLATTEN_INTEREST_RANK,
} from "./types";

// base url
const url = "https://zhuweiji.pythonanywhere.com";

export const setinterestrank = () => (dispatch, getState) => {
  const selectedInterestsIDs = getState().question2.selectedInterests;
  var tmpArray = [];
  // eslint-disable-next-line no-unused-vars
  for (var _ of selectedInterestsIDs) {
    tmpArray = [...tmpArray, 0];
  }
  // check if payload has the val, if not we proceed
  dispatch({
    type: SET_INTEREST_RANK,
    payload: tmpArray,
  });
};

export const updateinterestrank = (index, value) => (dispatch, getState) => {
  const tmpInterestRanking = getState().question3.tmpInterestRanking;

  if (tmpInterestRanking) {
    dispatch({
      type: UPDATE_INTEREST_RANK,
      payload: {index, value}
    });
  }
};

export const flatteninterestrank = () => (dispatch, getState) => {
  const curInterestRanks = getState().question3.tmpInterestRanking;
  var tmpArray = [];
  for (var item of curInterestRanks) {
    tmpArray = [...tmpArray, item.val];
  }

  if (tmpArray) {
    dispatch({
      type: FLATTEN_INTEREST_RANK,
      payload: tmpArray,
    });
  }
};
