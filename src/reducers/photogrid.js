import {
  GET_ALL_USERS,
  GET_MATCHED_USERS,
  GET_MATCHED_USERS_FAIL,
  GET_ALL_USERS_FAIL,
  MATCH_USER_TO_ALL_USERS,
  GET_ALL_INTERESTS_PHOTO_FAIL,
  GET_ALL_INTERESTS_PHOTO,
  FLATTEN_ALL_INTERESTS
} from "../actions/types";

const initialState = {
  matchedUsers: null,
  allAvailableUsers: null,
  isMatched: false,
  hasFoundUsers: false,
  matchToAllUsers: null,
  interests: null,
  listOfInterests: null,
  tmpInterests: [
    {
      id: 1,
      created_on: "2022-02-07",
      interest: "studying",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 2,
      created_on: "2022-02-07",
      interest: "partying",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 3,
      created_on: "2022-02-07",
      interest: "drinking",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 4,
      created_on: "2022-02-07",
      interest: "eating",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 5,
      created_on: "2022-02-07",
      interest: "hiking",
      pic_url:
        "https://www.google.com/maps/about/images/treks-lp/about-copy-image.jpg",
      polymorphic_ctype: 3,
    },
    {
      id: 6,
      created_on: "2022-02-07",
      interest: "travelling",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 7,
      created_on: "2022-02-07",
      interest: "chess",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 8,
      created_on: "2022-02-07",
      interest: "playing computer games",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 9,
      created_on: "2022-02-07",
      interest: "sports",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 10,
      created_on: "2022-02-07",
      interest: "fashion",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 11,
      created_on: "2022-02-07",
      interest: "fitness",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 12,
      created_on: "2022-02-07",
      interest: "weightlifting",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 13,
      created_on: "2022-02-07",
      interest: "music",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 14,
      created_on: "2022-02-07",
      interest: "make-up",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 15,
      created_on: "2022-02-07",
      interest: "visiting museums",
      pic_url: null,
      polymorphic_ctype: 3,
    },
  ]
};

function photogrid(state = initialState, action) {
  switch (action.type) {
    case FLATTEN_ALL_INTERESTS:
      return {
        ...state,
        listOfInterests: action.payload
      }
    case GET_ALL_INTERESTS_PHOTO:
      return {
        ...state,
        interests: action.payload
      }
    case GET_ALL_INTERESTS_PHOTO_FAIL:
      return {
        ...state,
        interests: state.tmpInterests,
      }
    case MATCH_USER_TO_ALL_USERS:
      console.log("Printing payload")
      console.log(action.payload)
      return {
        ...state,
        matchToAllUsers: action.payload
      }
    case GET_MATCHED_USERS:
      return {
        ...state,
        matchedUsers: action.payload,
        isMatched: true,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allAvailableUsers: action.payload,
        hasFoundUsers: true
      };
    case GET_MATCHED_USERS_FAIL:
        return {
            ...state,
            hasFoundUsers: false,
            matchToAllUsers: null
        }
    case GET_ALL_USERS_FAIL:
      return {
        ...state,
        isMatched: false,
        matchToAllUsers: null
      };
    default:
      return state;
  }
}

export default photogrid;
