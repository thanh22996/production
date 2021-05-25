import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "redux/actions";
import apiBusiness from "api/RequestApi";

function* doAction(action) {
    try {
        console.log('action',action);
        const res = yield call(apiBusiness.callGraphql, `mutation getFeeService {
            Utility {
              GetFee(input:{ clientId:"${clientId}"
              serviceType:${serviceType}
                  amount:${amount}
              }) {
                succeeded
                state
                message
                fee {
                  ... on GeneralFee {
                    fee
                  }
                }
              }
            }
          }
    `);
        const resDATA = JSON.parse(res);
        // const { GetBankName } = resDATA.data.Utility;
        // if (GetBankName.succeeded) {

        //     yield put({
        //         type: types.GET_DETECT_CARD_NUMBER_SUCCESS,
        //         payload: {bankInfoUser:GetBankName}
        //     });
        //     if (action.callback) {
        //         action.callback(true, GetBankName);
        //     }
        //     // break;

        // }else{
        //     yield put({ type: types.GET_DETECT_CARD_NUMBER_FAIL });
        //     if (action.callback) {
        //         action.callback(false, GetBankName);
        //       }
        //     //   break;
        // }
    } catch (error) {
        yield put({ type: types.GET_FEE_SERVICE_FAIL });
    }
}

export default function* watchAction() {
    yield takeLatest(types.GET_FEE_SERVICE, doAction);
}
