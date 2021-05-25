import * as types from "redux/actions";

const initState = {
  clientId: null,
  loading: false,
  error: false,
  statusCode: null,
};

export default function (state = initState, { type, payload }) {
  switch (type) {
    case types.REGISTER_CLIENT:
      return { ...state, loading: true };
    case types.REGISTER_CLIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        clientId: payload.clientId,
        // statusCode: payload.status,
      };
    default:
      return state;
  }
}
