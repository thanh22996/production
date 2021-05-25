import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "redux/actions";
import apiBusiness from "api/RequestApi";

function* doAction(action) {
    try {
        const { cardNumber } = action.payload
        // console.log("cardNumber", cardNumber);
        const res = yield call(apiBusiness.callGraphql, `mutation GetInfoBank {
        Utility{
          GetBankName(input:{
            cardNumber: "${cardNumber}",
            type:CARD
          }){
            succeeded,
            message,
            accountName,
            swiftCode
          }
        }
      }
    `);
        const resDATA = JSON.parse(res);
        const { GetBankName } = resDATA.data.Utility;
        if (GetBankName.succeeded) {

            yield put({
                type: types.GET_DETECT_CARD_NUMBER_SUCCESS,
                payload: {bankInfoUser:GetBankName}
            });
            if (action.callback) {
                action.callback(true, GetBankName);
            }
            // break;

        }else{
            yield put({ type: types.GET_DETECT_CARD_NUMBER_FAIL });
            if (action.callback) {
                action.callback(false, GetBankName);
              }
            //   break;
        }
    } catch (error) {
        yield put({ type: types.GET_DETECT_CARD_NUMBER_FAIL });
    }
}

export default function* watchAction() {
    yield takeLatest(types.GET_DETECT_CARD_NUMBER, doAction);
}
