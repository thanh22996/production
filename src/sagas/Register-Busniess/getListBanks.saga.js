import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "redux/actions";
import apiBusiness from "api/RequestApi";
import _ from "lodash";
function* doAction() {
    try {
        const res = yield call(apiBusiness.callGraphql, `query getListBanks {
            Setting {
              banks {
                id
                viName
                enName
                shortName
                swiftCode
                cardPrefix
                cardNumberLength
                linkable
                depositable
                withdrawable
                gateway
              }
            }
          }
    `);
        const resDATA = JSON.parse(res);
        const listDataBank = _.get(resDATA, "data.Setting.banks",[]);
        yield put({
            type: types.GET_LIST_BANKS_SUCCESS,
            payload:listDataBank
        });

    } catch (error) {
        yield put({ type: types.GET_LIST_BANKS_FAIL });
    }
}

export default function* watchAction() {
    yield takeLatest(types.GET_LIST_BANKS, doAction);
}
