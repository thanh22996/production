import { call, put, takeLatest, select } from "redux-saga/effects";
import * as types from "redux/types";
import apiBusiness from "api/RequestApi";
import parseDataAndCheckError from 'utils/helpers/parseDataAndCheckError'

export function* registerCheckOTP(action) {
  try {
    console.log('saga')
    const selectors = yield select();
    console.log('saga1', action)
    let res = yield call(
      apiBusiness.callGraphql,
      `mutation verifyActivecode{
                Account{
                  Register{
                    VerifyActiveCode(input:{
                      phone:"${action.payload.phone}"
                      activeCode:"${action.payload.activeCode}"
                      clientId:"${selectors.clientInfo.clientId}"
                    })
                    {
                      state
                      succeeded
                      message
                    }
                  }
                }
              }
    `
    );
    res = parseDataAndCheckError(res);
    console.log('res >>>', res)
    if (action.callback) {
      action.callback(true, res.data);
    }

    yield put({
      type: types.REGISTER_SEND_CHECK_OTP_SUCCESS,
      payload: { clientId: res.data, status },
    });
  } catch (error) {
    yield put({ type: types.REGISTER_SEND_CHECK_OTP_ERROR, error });
  }
}

export default function* watchAction() {
  yield takeLatest(types.REGISTER_SEND_CHECK_OTP, registerCheckOTP);
}
