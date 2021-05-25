import * as types from "redux/types";

export function registerSendOTP(data, callback) {
    return {
        type: types.REGISTER_SEND_OTP,
        payload: data,
        callback,
    };
}
export function registerSendForm(data, callback) {
    return {
        type: types.REGISTER_SEND_FORM,
        payload: data,
        callback,
    };
}
export function registerCheckOTP(data, callback) {
    return {
        type: types.REGISTER_SEND_CHECK_OTP,
        payload: data,
        callback,
    };
}
