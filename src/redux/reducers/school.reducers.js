import * as types from "redux/types/school.types";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  listSchool: [],
};

export default function schoolReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_LIST_SCHOOL_SUCCESS:
      console.log("rssssssss", action.payload);
      return { ...state, listSchool: action.payload };
    case types.GET_LIST_SCHOOL_FAIL:
      return { ...state };
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
