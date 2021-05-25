import * as types from "./index";

export const getHistoriesAction = (params, callBack) => {
  console.log("params", params);
  return {
    type: types.GET_HISTORY_LIST,
    payload: params,
    callBack,
  };
};

export const getWalletBalance = () => {
  return {
    type: types.GET_WALLET_BALANCE,
  };
};
