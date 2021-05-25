import * as types from "./index";

export const loginUserAction = (users, callBack) => {
  console.log("users", users);
  return {
    type: types.LOGIN_USER,
    users,
    callBack,
  };
};

export const checkAuthorizationAction = () => ({
  type: types.CHECK_AUTHENTICATION,
});

export const logoutUserAction = (clientId) => ({
  type: types.LOGOUT_USER,
  clientId,
});

export const activeTrustDevice = (dataTrustDevice, callBack) => {
  console.log("dataTrustDevice", dataTrustDevice);
  return {
    type: types.SEND_OTP_TRUST_DEVICE,
    payload: dataTrustDevice,
    callBack,
  };
};
