import * as types from "redux/actions";

const initialState = {
  bankItems: [],
  error: false,
  statusCode: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_BANK_NAME:
      return { ...state, loading: true };
    case types.GET_BANK_NAME_SUCCESS:
      return {
        ...state,
        bankItems: payload.data,
        statusCode: payload.status,
      };
    case types.GET_BANK_NAME_FAIL:
      return { ...state, error: payload };
    default:
      return state;
  }
}
