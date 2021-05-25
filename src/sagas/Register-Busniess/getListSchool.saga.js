import { call, put, takeLatest } from "redux-saga/effects";
import * as responseCode from "configs/responseCode.config";
import { types } from "redux/types";
// import { types as apiTypes } from '../../redux/api';
import { callAPI } from "api";

function* doAction(action) {
  try {

    switch (code) {
      case responseCode.REQUEST_SUCCESS: {
        yield put({ type: types.GET_LIST_SCHOOL_SUCCESS, payload: data });
        if (action.callback) {
          action.callback(true, data);
        }
        break;
      }
      default: {
        yield put({ type: types.GET_LIST_SCHOOL_FAIL });
        if (action.callback) {
          action.callback(false, data);
        }
        break;
      }
    }
  } catch (error) {
    // yield put({ type: apiTypes.HIDE_LOADING })
    yield put({ type: types.GET_LIST_SCHOOL_FAIL });
  }
}
export default function* watchAction() {
  yield takeLatest(types.GET_LIST_SCHOOL, doAction);
}
