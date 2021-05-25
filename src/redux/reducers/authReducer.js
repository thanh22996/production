import * as types from "redux/actions";

const initState = {
  hasToken: "",
  hasTokenKey: "",
  loading: false,
  error: false,
  statusCode: null,
};

export default function (state = initState, { type, payload }) {
  switch (type) {
    case types.LOGIN_USER:
      return { ...state, loading: true };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        accessToken: payload.hasToken,
        statusCode: payload.status,
      };
    case types.LOGIN_USER_ERROR:
      return { ...state, loading: false, error: payload };
    case types.LOGIN_USER_REFRESH:
      return {
        ...state,
        loading: false,
        error: false,
        statusCode: undefined,
      };

    case types.SEND_OTP_TRUST_DEVICE:
      return {
        ...state,
        loading: true,
      };
    case types.SEND_OTP_TRUST_DEVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        statusCode: payload.status,
      };
    case types.SEND_OTP_TRUST_DEVICE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case types.LOGOUT_USER:
      return initState;

    default:
      return state;
  }
}
