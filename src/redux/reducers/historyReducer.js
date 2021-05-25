import * as types from "redux/actions";

const initState = {
  histories: [],
  dataExport: [],
  loading: false,
  error: false,
  statusCode: null,
  amount: 0,
  is401: null,
  wallet: {
    data: {},
    loading: false,
    error: false,
    statusCode: null,
  },
};

export default function (state = initState, { type, payload }) {
  switch (type) {
    case types.GET_HISTORY_LIST:
      return { ...state, loading: true };
    case types.GET_HISTORY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        histories: payload.more
          ? state.histories.concat(payload.histories)
          : payload.histories,
        amount: payload.amount,
        statusCode: payload.status,
        dataExport: payload.dataExport,
      };
    case types.GET_HISTORY_LIST_ERROR:
      return {
        ...state,
        loading: false,
        statusCode: payload.code,
        error: payload,
        is401: payload.is401,
      };
    case types.GET_HISTORY_LIST_REFRESH:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case types.GET_WALLET_BALANCE:
      return {
        ...state,
        wallet: {
          ...state.wallet,
          loading: true,
        },
      };
    case types.GET_WALLET_BALANCE_SUCCESS:
      return {
        ...state,
        wallet: {
          ...state.wallet,
          loading: false,
          data: payload.data,
          statusCode: payload.status,
        },
      };
    case types.GET_WALLET_BALANCE_ERROR:
      return {
        ...state,
        wallet: {
          ...state.wallet,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
}
