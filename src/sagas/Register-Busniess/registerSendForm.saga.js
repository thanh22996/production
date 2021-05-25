import { call, put, takeLatest, select } from "redux-saga/effects";
import * as types from "redux/types";
import apiBusiness from "api/RequestApi";
import parseDataAndCheckError from 'utils/helpers/parseDataAndCheckError'
export function* registerSendOTP(action) {
    try {

        console.log('action', action)
        const selectors = yield select();
        let res = yield call(
            apiBusiness.callGraphql,
            `mutation register {
                Account{
                  Register{
                   Register(input:{
                    fullname:"${action.payload.fullname}"
                    phone:"${action.payload.phone}"
                    password:"${action.payload.password}"
                    activeCode:"${action.payload.activeCode}"
                    clientId:"${selectors.clientInfo.clientId}"
               
                  }){
                    message
                    accessToken
                    state
                    succeeded
                  } 
                  }
                }
              }`
        );
        console.log('check mutation1', {
            fullname: `${action.payload.fullname}`,
            phone: `${action.payload.phone}`,
            password: `${action.payload.password}`,
            activeCode: `${action.payload.otp}`,
            clientId: `${selectors.clientInfo.clientId}`
        })
        res = parseDataAndCheckError(res);
        console.log('res:', res)
        if (action.callback) {
            action.callback(true, res.data.Account.Register.Register);
        }
        yield put({
            type: types.REGISTER_SEND_FORM_SUCCESS,
            payload: { data: res.data.Account.Register.SendOTP, status: '1' },
        });
    } catch (error) {
        yield put({ type: types.REGISTER_SEND_FORM_ERROR, error });
    }
}

export default function* watchAction() {
    yield takeLatest(types.REGISTER_SEND_FORM, registerSendOTP);
}
