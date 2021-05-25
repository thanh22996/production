import { call, put, takeLatest } from "redux-saga/effects";
import { fingerprintPromise } from "utils/helpers/clientId";
import * as types from "redux/actions";
import apiBusiness from "api/RequestApi";

export function* registerClient() {
  try {
    const { deviceId } = yield fingerprintPromise;
    console.log('deviceId', deviceId)
    const res = yield call(
      apiBusiness.callGraphql,
      `mutation RegisterClientId {
      Client {
        Register (input: {
          deviceId: "${deviceId}"
          platform: "WEB"
          version: "1.0.0"
        }){
          succeeded
          message
          clientId
        }
      }
    }
    `
    );

    const response = JSON.parse(res);
    console.log("res", response);
    // const { clientId } = JSON.parse(res).data.Client.Register;
    localStorage.setItem("clientId", response.data.Client.Register.clientId);

    yield put({
      type: types.REGISTER_CLIENT_SUCCESS,
      payload: { clientId: response.data.Client.Register.clientId, status },
    });
  } catch (error) {
    yield put({ type: types.REGISTER_CLIENT_ERROR, error });
  }
}

export default function* watchAction() {
  yield takeLatest(types.REGISTER_CLIENT, registerClient);
}