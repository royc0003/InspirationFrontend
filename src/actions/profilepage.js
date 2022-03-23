import axios from "axios";
import {
	FLATTEN_MATCHED_USERS,
	FLATTEN_USER_INTERESTS,
	GET_ALL_INTERESTS_PROFILE, GET_ALL_USERS_PROFILE,
	GET_MATCHED_HISTORY, GET_USER_INFO
} from "../actions/types";



// base url
const url = "https://zhuweiji.pythonanywhere.com";


export const getallusers = () => async (dispatch, getState) => {
	console.log("get all users");
	// Get token from local cache
	const token = localStorage.getItem("token");
	const key = getState().auth.key;

	// Header
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	// If token, add to header config
	if (token) {
		config.headers["Authorization"] = `Token ${token}`;
	} else if (key) {
		config.headers["Authorization"] = `Token ${key}`;
	}

	await axios
		.get(`${url}/user_information/`, config)
		.then((res) => {
			console.log("Successfully received all user information");
			console.log(res);
			return dispatch({
				type: GET_ALL_USERS_PROFILE,
				payload: res.data,
			});
		})
		.catch((err) => {
			if (err.response) {
				console.log("respone");
				console.log(err.response.data);
				// to insert a alert block here
			} else if (err.request) {
				console.log(err.request);
			} else {
				console.log(err.message);
			}
			console.log(err.config);
		});
};


// Get matched history of single user
export const getmatchedhistory = () => async (dispatch, getState) => {
	console.log("Get all matched history");
	// Get token from local cache
	const token = localStorage.getItem("token");
	const key = getState().auth.key;

	// Get email from local cache
	const email = localStorage.getItem("friendstagram-email");

	// Header
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	// If token, add to header config
	if (token) {
		config.headers["Authorization"] = `Token ${token}`;
	} else if (key) {
		config.headers["Authorization"] = `Token ${key}`;
	}

	await axios
		.get(`${url}/match_history/${email}`, config)
		.then((res) => {
			console.log("Successfully found all matched users");
			console.log(res);
			return dispatch({
				type: GET_MATCHED_HISTORY,
				payload: res.data,
			});
		})
		.catch((err) => {
			if (err.response) {
				console.log("error response");
				console.log(err.response.data);
				// to insert a alert block here
			} else if (err.request) {
				console.log(err.request);
			} else {
				console.log(err.message);
			}
			console.log(err.config);
		});
};

// Get current user info
export const getuserinfo = () => async (dispatch, getState) => {
	console.log("Get current user info");
	// Get token from local cache
	const token = localStorage.getItem("token");
	const key = getState().auth.key;

	// Get email from local cache
	const email = localStorage.getItem("friendstagram-email");

	// Header
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	// If token, add to header config
	if (token) {
		config.headers["Authorization"] = `Token ${token}`;
	} else if (key) {
		config.headers["Authorization"] = `Token ${key}`;
	}

	await axios
		.get(`${url}/user_information/${email}`, config)
		.then((res) => {
			console.log("Successfully found user info");
			console.log(res);
			return dispatch({
				type: GET_USER_INFO,
				payload: res.data,
			});
		})
		.catch((err) => {
			if (err.response) {
				console.log("error response");
				console.log(err.response.data);
				// to insert a alert block here
			} else if (err.request) {
				console.log(err.request);
			} else {
				console.log(err.message);
			}
			console.log(err.config);
		});
};

// Flatten existing matched users
export const flattenmatchedusers = () => async (dispatch, getState) => {
	// Gets all matched history from state
	const _matched_history = getState().profilepage.matched_history;
	console.log("[DEBUG] flattenmatchedusers");
	console.log(_matched_history);
	// Gets all users from existing state
	const _all_users = getState().profilepage.all_users;
	console.log(_all_users);
	// variables that will be used
	const _matched_users = _matched_history[_matched_history.length - 1].matched_users;

	console.log("Matched users why not")
	console.log(_matched_users)
	var _flatten_matched_users = []
	for (var _matchedID of _matched_users) {
		var tmp = (_all_users.filter(
			// eslint-disable-next-line no-loop-func
			(_singleuser) => parseInt(_singleuser.id) === parseInt(_matchedID)
		));
		_flatten_matched_users.push(tmp[0]);
	}
	console.log("Flattened matched users");
	console.log(_flatten_matched_users);

	await dispatch({
		type: FLATTEN_MATCHED_USERS,
		payload: _flatten_matched_users
	})
}


// Get All Interests
export const getinterests = () => async (dispatch, getState) => {
	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	// Get token from local cache
	const token = localStorage.getItem("token");
	const key = getState().auth.key;

	// If token, add to header config
	if (token) {
		config.headers["Authorization"] = `Token ${token}`;
	} else if (key) {
		config.headers["Authorization"] = `Token ${key}`;
	}

	await axios
		.get(`${url}/interests/`, config)
		.then((res) => {
			dispatch({
				type: GET_ALL_INTERESTS_PROFILE,
				payload: res.data,
			});
		})
		.catch((err) => {
			if (err.response) {
				console.log("response");
				console.log(err.response.data);
				// to insert a alert block here
			} else if (err.request) {
				console.log("request");
				console.log(err.request);
			} else {
				console.log("message");
				console.log(err.message);
			}
			console.log(err.config);
			// dispatch({
			//   type: GET_ALL_INTERESTS_FAIL,
			// });
		});
};

// Flatten existing matched users
export const flattenuserinterests = () => async (dispatch, getState) => {
	// Gets all of current user info
	const _user_info = getState().profilepage.user_info;
	// Gets all interests from existing state
	const _all_interests = getState().profilepage.all_interests;

	// variables that will be used
	const _user_interests = _user_info.interests;

	var _flatten_user_interests = []

	for (var _interest of _user_interests) {
		var tmp = (_all_interests.filter(
			// eslint-disable-next-line no-loop-func
			(_singleinterest) =>
				parseInt(_singleinterest.id) === parseInt(_interest.interest.id)
		));
		if (tmp.length > 0) {
			_flatten_user_interests.push(tmp[0].interest);
		}
	}
	console.log("Flattened user interests")
	console.log(_flatten_user_interests);

	await dispatch({
		type: FLATTEN_USER_INTERESTS,
		payload: _flatten_user_interests
	})
}
