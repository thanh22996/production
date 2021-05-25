import * as types from "redux/actions";

const initState = {
  info: {},
  loading: false,
  error: false,
  statusCode: null,
  bankName:[]
};

export default function (state = initState, { type, payload }) {
  switch (type) {
    case types.GET_USER_INFORMATION:
      return { ...state, loading: true };
    case types.GET_USER_INFORMATION_SUCCESS:
      return {
        ...state,
        loading: false,
        info: payload.info,
        statusCode: payload.status,
      };
    case types.GET_USER_INFORMATION_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
