import { call, put, takeLatest, select } from "redux-saga/effects";
import * as types from "redux/types";
import apiBusiness from "api/RequestApi";
import parseDataAndCheckError from 'utils/helpers/parseDataAndCheckError'
export function* registerSendOTP(action) {
  try {

    const selectors = yield select();
    console.log('action', action)
    let res = yield call(
      apiBusiness.callGraphql,
      `mutation registerSendOTP{
                Account{
                  Register{
                    SendOTP(input:{
                      phone:"${action.payload}"
                      clientId:"${selectors.clientInfo.clientId}"
                    }){
                      succeeded
                      message
                    }
                  }
                }
              }`
    );
    res = parseDataAndCheckError(res);
    if (action.callback) {
      action.callback(true, res.data.Account.Register.SendOTP);
    }
    yield put({
      type: types.REGISTER_SEND_OTP_SUCCESS,
      payload: { data: res.data.Account.Register.SendOTP, status: '1' },
    });
  } catch (error) {
    yield put({ type: types.REGISTER_SEND_OTP_ERROR, error });
  }
}

export default function* watchAction() {
  yield takeLatest(types.REGISTER_SEND_OTP, registerSendOTP);
}
